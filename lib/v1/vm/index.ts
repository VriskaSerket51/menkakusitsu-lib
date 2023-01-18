import { DefaultResponse } from "../..";

export interface PostCreateVmRequest {
    required: CreateVmConfig;
    optional: VmConfig;
}

export interface PostCreateVmResponse extends DefaultResponse {
    vmId: number;
    config: {
        config0: CreateVmConfig;
        config1: VmConfig;
    }
}

export interface RemoveVM {
    id: number;
}

export interface CreateVmConfig {
    id?: number;
    core?: number;
    ramSize?: number;
    diskSize?: number;
}
export interface VmConfig {
    name?: string;
    acpi?: boolean;
    core?: number;
    cputype?: string;
    ramSize?: number; //MiB
    diskController?: string;
    customArgs?: string[];
    audio?: string;
    autostart?: boolean;
    bios: string;
    kvm?: boolean;
    machine?: string;
    net?: string;
    ostype?: string;
    tablet?: boolean;
    vga?: string;
    vncport?: number;
}

export interface GetGpuAttach {
    id: number;
    type?: string;
}