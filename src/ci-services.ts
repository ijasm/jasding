import * as shell from "shelljs";
export const runUnitTests = (repoURL: string) => {
	console.log(repoURL);
	// if(repoURL === "beatricetelegrambot")
	shell.exec("$uts");
}

