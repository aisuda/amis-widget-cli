export class InfoCardPlugin {
    rendererName: string;
    $schema: string;
    name: string;
    description: string;
    tags: string[];
    icon: string;
    scaffold: {
        type: string;
        label: string;
        name: string;
    };
    previewSchema: {
        type: string;
        label: string;
    };
    panelTitle: string;
    panelControls: ({
        type: string;
        name: string;
        label: string;
        value: string;
    } | {
        type: string;
        name: string;
        label: string;
        value: number;
    })[];
}
export default InfoCardPlugin;
