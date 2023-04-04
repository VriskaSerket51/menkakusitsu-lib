import { DefaultResponse } from "../..";

export interface RequiredVmConfig {
    core: number;
    ramSize: number;
    diskSize: number;
    bios: string;
};

export interface OptionalVmConfig {
    name?: string;
    acpi?: boolean;
    cpuType?: string;
    diskController?: string;
    customArgs?: string[];
    audio?: string;
    autoStart?: boolean;
    kvm?: boolean;
    machine?: string;
    net?: string;
    ostype?: string;
    tablet?: boolean;
    vga?: string;
    vncPort?: number;
};

export interface VmConfig {
    required: RequiredVmConfig;
    optional: OptionalVmConfig;
};

export interface PostCreateVmRequest {
    config: VmConfig;
};

export interface PostCreateVmResponse extends DefaultResponse {
    vmId: number;
    config: VmConfig;
};

export interface DeleteRemoveVmRequest {
    id: number;
};

export interface DeleteRemoveVmResponse extends DefaultResponse {};

export interface GetGpuAttachRequest {
    id: number;
    type?: string;
};

export interface GetGpuAttachResponse extends DefaultResponse {};
