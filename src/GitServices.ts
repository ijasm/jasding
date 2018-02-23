const clone = require("git-clone");
import { runUnitTests } from "./ci-services";

export const cloneGitRepo = (repoURL: string) => {
	console.log(__dirname);
	const dir = __dirname + "/../../repos/";
	clone(repoURL, dir, null, () => {
		console.log(`cloned git repo: "${repoURL}" to ${dir}`);
		runUnitTests(repoURL);
	}
	);
}
