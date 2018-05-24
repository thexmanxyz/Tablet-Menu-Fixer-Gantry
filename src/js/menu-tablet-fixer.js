/******************************************************
*                                                     *
*   Menu Tablet Fixer - Atom for Gantry               *
*                                                     *
*   Purpose: This project fixes the default menu      *
*            behavior for large touch devices.        *
*            The first tap on a menu with sub items   *
*            expands the menu, while the second       *
*            tap opens the underlying link.           *
*                                                     *
*   Author: Andreas Kar (thex) <andreas.kar@gmx.at>   *
*                                                     *
******************************************************/

jQuery(window).load(function () {
    var mtf = new MenuTabletFixer();
    mtf.addMenuItemEvent();
    
});

function MenuTabletFixer(){
    
    /* Classes and Selectors */
    this.classes = {open: "g-touch-open", active: "g-active", selected: "g-selected", 
                    tMenu: "g-toplevel", sMenu: "g-sublevel", mainNav: "g-main-nav", 
                    menuTouch: "g-menu-hastouch"};
    
    this.selectors = {open: "." + this.classes.open, active: "li > ul." + this.classes.active, 
                      selected: "." + this.classes.selected, tMenu: "." + this.classes.tMenu,
                      sMenu: "." + this.classes.sMenu, mainNav: "." + this.classes.mainNav,
                      menuTouch: "." + this.classes.menuTouch};
    
    this.selectors.menu = this.selectors.mainNav + this.selectors.menuTouch + " %s > li > a";
    
    /* Mobile Menu Item Touch */ 
    this.getMenuItemEvent = function (config){
        return function(e) {
            var cSel = config.selectors;
            var cCls = config.classes;
            var subItem = jQuery(this).parent().children(cSel.active);
            var deselect = function(cls, selector){
                jQuery(selector).each(function() {
                    $this = jQuery(this);    
                    if (!$this.parents(cSel.open).length && 
                        !$this.find(cSel.open).length && 
                        !$this.hasClass(cCls.open))
                             $this.removeClass(cls);
                });
            };
            
            if(subItem.length > 0){
                if(!subItem.hasClass(cCls.open) ){
                    jQuery(cSel.open).removeClass(cCls.open);
                    subItem.addClass(cCls.open);
                    deselect(cSel.tMenu + " " + cCls.active, cSel.active);
                    deselect(cSel.tMenu + " " + cCls.selected, cSel.selected);
                    e.preventDefault();
                }else{
                    subItem.removeClass(cCls.open);
                }
            }
        };
    };
    
    this.addMenuItemEvent = function(){
        var cSel = this.selectors;
        var attachSel = cSel.menu.replace("%s", cSel.tMenu) + ", " 
                      + cSel.menu.replace("%s", cSel.sMenu);
        jQuery(attachSel).click(this.getMenuItemEvent(this));
    };
};