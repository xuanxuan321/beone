#!/usr/bin/env node
const shell = require("shelljs");
const chalk = require("chalk");
//设置命令行参数
const argv = require("yargs")
	.alias("h", "help")
	.alias("v", "version").argv;
let message = argv._.join(" ");
if (message.length === 0) {
	throw new Error(chalk.red.bold("请输入提交信息 "));
}
message = '\'' + message + '\'';
let branch = shell.exec("git rev-parse --abbrev-ref HEAD").trim();
let branchHashStr = shell.exec(`git reflog show --date=iso ${branch}`).trim();
let reg = /^\w+(?=\s)/gm;// 也可以通过a.split('\n')来实现
let branchHash = branchHashStr.match(reg).slice(-1)[0];
console.log(branchHash);
let command = `git reset --soft ${branchHash} && git add -A&&git commit -m ${message}&& git push -f`;
console.log(chalk.green(command))
shell.exec(command)

