export interface VmConfig {
    id: number;
    name: string;
    core: number;
    ramSize: number; //MiB
    balloon: number;
    diskController: string;
    diskSize: number;
    customArgs: string[];
}