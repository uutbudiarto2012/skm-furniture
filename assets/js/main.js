const btnTriggerMenu = document.querySelector(".menu-trigger button")
const btnCloseMenu = document.querySelector("button.close")
const sidebar = document.querySelector("._sidebar-wrapper")
const layer = document.querySelector("._is_open_menu_layer")


if(btnTriggerMenu){
    btnTriggerMenu.addEventListener("click",function(){
        sidebar.classList.add("show")
        layer.classList.add("on")
        document.querySelector('body').style.overflow = "hidden"
    })
    btnCloseMenu.addEventListener("click",function(){
        sidebar.classList.remove("show")
        document.querySelector('body').style.overflow = "auto"
        layer.classList.remove("on")
    })

}

const subCTG = document.querySelector('.sub-ctg')

const btntmob = document.querySelector('.btn-t-mob')
const btnCloseMenuMob = document.querySelector('a.close')

if(subCTG){
    btnCloseMenuMob.addEventListener("click",function(){
        subCTG.classList.toggle("d-none")
    })

    btntmob.addEventListener("click",function(){
        subCTG.classList.toggle("d-none")
    })
}