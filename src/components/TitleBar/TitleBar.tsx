import { appWindow } from '@tauri-apps/api/window';
import { defineComponent } from "@vue/runtime-core"
import styles from './TitleBar.module.scss'

const TitleBar = defineComponent({
    props: {
        title: String,
    },
    render() {
        return <div data-tauri-drag-region class={styles.titlebar}>
            <span class={styles.titlebarText}>{this.title}</span>
            <div>
                <div class={styles.titlebarButton} onClick={() => appWindow.minimize()}>
                    <img
                    src="https://api.iconify.design/mdi:window-minimize.svg"
                    alt="minimize"
                    />
                </div>
                <div class={styles.titlebarButton} onClick={() => appWindow.toggleMaximize()}>
                    <img
                    src="https://api.iconify.design/mdi:window-maximize.svg"
                    alt="maximize"
                    />
                </div>
                <div class={styles.titlebarButtonClose} onClick={() => appWindow.close()}>
                    <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
                </div>
            </div>
        </div>
    },
})

export {
    TitleBar,
};
