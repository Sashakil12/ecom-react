import { createSelector } from 'reselect'

const directorySelector = state => state.directory;

export const selectDirectory = createSelector(
    [directorySelector],
    directory => directory.sections
) 