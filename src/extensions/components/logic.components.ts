import { HaipaExtension } from '../extension.decorator';
import { HaipaNode, HaipaForEachCallback, HaipaIfBranch } from '../../main/node';

declare module '../../main/node' {

	type HaipaForEachCallback<T> = (node: HaipaNode, value: T, index: number, array: T[]) => void;
	type HaipaIfBranch = (node: HaipaNode) => void;

	export interface HaipaNode {
		forEach<T>(input: T[], callback: HaipaForEachCallback<T>): HaipaNode;
		if(condition: boolean, thenBranch: HaipaIfBranch, elseBranch?: HaipaIfBranch): HaipaNode;
	}
}

export class LogicComponents {
	@HaipaExtension()
	forEach<T>(thisArg: HaipaNode, input: T[], callback: HaipaForEachCallback<T>): HaipaNode {
		input.forEach((val, i, arr) => callback(thisArg, val, i, arr));
		return thisArg;
	}

	@HaipaExtension()
	if(thisArg: HaipaNode, condition: boolean, thenBranch: HaipaIfBranch, elseBranch?: HaipaIfBranch): HaipaNode {
		if (condition) {
			thenBranch(thisArg);
		} else if (elseBranch) {
			elseBranch(thisArg);
		}
		return thisArg;
	}
}