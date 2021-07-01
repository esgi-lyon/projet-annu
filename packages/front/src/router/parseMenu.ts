import { Router } from "vue-router"

export function parseMenu(router: Router) {
    const menu = []
    router.options.routes.forEach(({ path, name, meta }) => {
        if (!meta || !meta.inMenu) {
            return
        }
        menu.push({ url: path, title: name, icon: meta.icon || null })
    })

    return menu
}