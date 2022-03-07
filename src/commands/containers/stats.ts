/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IActionContext } from '@microsoft/vscode-azext-utils';
import { dockerExePath } from '../../utils/dockerExePathProvider';
import { executeAsTask } from '../../utils/executeAsTask';

export async function stats(context: IActionContext): Promise<void> {
    // Don't wait
    // TODO: exe path
    void executeAsTask(context, `${dockerExePath(context)} stats`, 'docker stats', { addDockerEnv: true });
}
