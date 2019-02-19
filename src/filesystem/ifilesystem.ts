export interface IFileSystem
{
    fileExists(location: string): Promise<boolean>;
    readFile(location: string): Promise<string>;
    writeFile(location: string, content: string): Promise<void>;

    directoryExists(location: string): Promise<boolean>;
    ensureDirectory(location: string): Promise<void>;
    createDirectory(location: string): Promise<void>;
    removeDirectory(location: string, recursive: boolean) : Promise<void>;
    getDirectoryContents(location: string) : Promise<string[]>;
}