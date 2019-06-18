@echo off
REM #######################################################
REM #                                                     #
REM #   Menu Tablet Fixer - Atom for Gantry               #
REM #                                                     #
REM #   Purpose: This project fixes the default menu      #
REM #            behavior for large touch devices.        #
REM #            The first tap on a menu with sub items   #
REM #            expands the menu, whether the second     #
REM #            tap opens the underlying link.           #
REM #                                                     #
REM #   Author: Andreas Kar (thex) <andreas.kar@gmx.at>   #
REM #   Repository: https://git.io/fA9Xl                  #
REM #   Homepage: https://gantryprojects.com              #
REM #                                                     #
REM #######################################################

REM --- script variables ---
set scr_remove_folders=1
set scr_log_files=0

REM --- project variables ---
set prj_id=mtf
set prj_rev=v1.2.4
set prj_name=menu-tablet-fixer
set prj_fullname=Menu Tablet Fixer - Atom
set prj_title_hr=----------------------------
set prj_def_lang=EN
set prj_sup_langs=EN, IT, DE

REM --- packaging variables ---
set pkg_g5_name=atom.only
set pkg_g5_def_files=LICENSE, README.md
set pkg_j3_def_files=LICENSE.pdf
set pkg_expl_files=
set pkg_lang_id=yaml
set pkg_file_ext=yaml, html.twig
set pkg_release_folder=..\..\releases

set pkg_def_enable=1
set pkg_leg_enable=1
set pkg_helium_enable=1
set pkg_hydro_enable=1
set pkg_global_enable=1

"base-build.bat"