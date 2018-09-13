# Menu Tablet Fixer - Atom for Gantry
This project contains a Gantry Atom that improves the default menu behavior of the Gantry templating framework. **Menu Tablet Fixer** was created to fix the broken touch handling of the default Gantry menu on devices with a large screen resolution. Hence, the first tap on a linked menu item that contains sub items always expands the menu, while the second tap finally opens the underlying link. Furthermore, it provides an easy, user friendly and GUI assisted configuration and integration. In the current revision the following CMSs are supported:
* Joomla
* Wordpress
* Grav

## Prerequisites
* CMS (Joomla, Wordpress, Grav)
* Gantry Templating Framework and Theme

## Download
Choose the correct download for your target platform. Joomla Plugin System supported for all Gantry themes globally and locally for Helium or Hydrogen. The latest Atom version is **v1.2.3**.
___
**Default Atom:**
[English](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.atom.only.EN.v1.2.3.zip) / [Italian](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.atom.only.IT.v1.2.3.zip) / [German](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.atom.only.DE.v1.2.3.zip)

**Legacy Atom - Gantry <5.3.2:**
[English](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.atom.only.legacy.EN.v1.2.3.zip) / [Italian](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.atom.only.legacy.IT.v1.2.3.zip) / [German](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.atom.only.legacy.DE.v1.2.3.zip)

**Joomla Plugin - All Templates (Global):**
[English](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.j3.global.EN.v1.2.3.zip) / [Italian](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.j3.global.IT.v1.2.3.zip) / [German](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.j3.global.DE.v1.2.3.zip)

**Joomla Plugin - Hydrogen:**
[English](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.j3.hydrogen.EN.v1.2.3.zip) / [Italian](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.j3.hydrogen.IT.v1.2.3.zip) / [German](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.j3.hydrogen.DE.v1.2.3.zip)

**Joomla Plugin - Helium:**
[English](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.j3.helium.EN.v1.2.3.zip) / [Italian](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.j3.helium.IT.v1.2.3.zip) / [German](https://github.com/thexmanxyz/Tablet-Menu-Fixer-Gantry/releases/download/v1.2.3/mtf.j3.helium.DE.v1.2.3.zip)
___

## Automatic Installation (Joomla only)
1. Download the Plugin of the *Menu Tablet Fixer Atom* for **Hydrogen, Helium or Global** installation.
2. Install it over the Joomla Plugin System.

*If you install the plugin globally be aware that the resource location changes to `/media/gantry5/engines/nucleus`*

## Manual Installation
1. Download the **Default or Legacy Package** of the *Menu Tablet Fixer Atom*. If you are using Gantry **<5.3.2** please use the **Legacy Package** for compatibility reasons.
2. Extract the files.
3. Copy the `.html.twig` and the `.yaml` file to your particle folder `/[GANTRY_THEME]/custom/particles`. Please check the list below to determine where the template folder for your CMS is located.
4. Copy the `.js` file to the folder `/[GANTRY_THEME]/custom/js`. Create it if it does not exist.

## CMS Template Folder
Please be aware that the template folder path varies in dependence of the used CMS. Here is a list of the folders for the different platforms:

### Wordpress
`/wp-content/themes/[GANTRY_THEME]`

### Joomla
`/templates/[GANTRY_THEME]`

### Grav
`/user/data/gantry5/themes/[GANTRY_THEME]`

## Configuration
1. Go to your Gantry templating backend (e.g. Extensions/Templates).
2. Switch to **Page Settings** and add the new appearing Atom called **Menu Tablet Fixer** either globally to your site (**base outline**), to a specific template or page by dragging it to the designated section.
3. Configure the appearance according to your favor.

## Supported Parameters and Atom Options
* JS Configuration
  * Remote or Local
  * Priority and Position (head or footer)
* JS Execution
  * Asynchronous
  * Deferred

## Showroom
Insight of the *Menu Tablet Fixer - Gantry Atom* configuration:

**Backend (1)** - *[Javascript](/screenshots/backend_js.png)*

![1](/screenshots/backend_js.png)

## Future Tasks
* improve the layer handling for a depth of 'n' or at least 5 :P.

## Known Issues
* untested for submenus located at a depth >= 3, may have no effect.

## Dependencies
[Gantry Framework](http://gantry.org/)

## Credits
Thanks to the [Gantry](https://github.com/gantry) team for providing a modern templating framework.

## by [thex](https://github.com/thexmanxyz) | [gantryparticles](https://gantryparticles.com)
Copyright (c) 2018, free to use in personal and commercial software as per the [license](/LICENSE.md).
