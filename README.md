
README.md

clone this directory

npm init

run the script via 

$ yarn run all-site


"test": "echo \"Error: no test specified\" && exit 1",
"all-site": "date && npm-run-all builda*",
"builda-1": "date && yarn create redwood-app $npm_package_config_installDir",
"builda-2": "date && cd $npm_package_config_installDir && sudo yarn rw g page home /",
"builda-3": "date && cd $npm_package_config_installDir && sudo yarn rw g page about",
"builda-4": "date && cd $npm_package_config_installDir && sudo yarn rw g layout blog",
"builda-5": "date && cd $npm_package_config_installDir && sudo yarn rw db save create posts",
"builda-6": "date && cd $npm_package_config_installDir && sudo yarn rw db up",
"buildxa-7": "date && cd $npm_package_config_installDir && sudo yarn rw g scaffold post",
"builda-8": "date && cd $npm_package_config_installDir && sudo yarn rw g cell BlogPosts",
"builda-9": "date && cd $npm_package_config_installDir && sudo yarn rw g page BlogPost",
"builda-10": "date && cd $npm_package_config_installDir && sudo yarn rw g cell BlogPost",
"builda-11": "date && cd $npm_package_config_installDir && sudo yarn rw g component BlogPost",
"builda-12": "date && cd $npm_package_config_installDir && sudo yarn rw g page contact",
"builda-13": "date && cd $npm_package_config_installDir && sudo yarn rw db save create contact",
"builda-14": "date && cd $npm_package_config_installDir && sudo yarn rw g sdl contact",
"builda-15": "date && cd $npm_package_config_installDir && sudo yarn rw g deploy netlify",
"builda-16": "date && cd $npm_package_config_installDir && sudo yarn rw g auth netlify"