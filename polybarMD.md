> Tout d'abord il faut installer les polices. Moi j'utilise le JetBrains Mono Nerd Font et le FontAwesome 6 pour les icons.

JetBrains Mono Nerd Font: `https://github.com/ryanoasis/nerd-fonts/releases/download/v3.2.1/JetBrainsMono.zip`

FontAwesome 6: `https://use.fontawesome.com/releases/v6.6.0/fontawesome-free-6.6.0-desktop.zip?_gl=1*1hz0rdz*_ga*MTczMjM0MDM3OS4xNzI3NzA1MjI0*_ga_BPMS41FJD2*MTcyNzcwNTIyNC4xLjEuMTcyNzcwNTIyNC42MC4wLjA.`

> Pour la barre, il faut installer le polybar en lancant `sudo apt install polybar`et puis créer un dossier dans ~/.config/polybar/ et mettre les fichier config, colors.ini, modules.ini, launch.sh.

> Si tu veux changer le couleur, modifie le colors.ini

> Pour le picom, il faut installer picom en lancant `sudo apt install picom` et puis créer ~/.config/picom/ et mettre mon fichier picom.conf dedans

> Normalement si t'installe le i3 par apt install, ton i3 peut etre pas à jour pour le gaps fonctionalité builtin, donc il faut tu backup ton config i3 avant et puis `sudo apt remove i3` et puis lancer ces commandes

```bash
$ /usr/lib/apt/apt-helper download-file https://debian.sur5r.net/i3/pool/main/s/sur5r-keyring/sur5r-keyring_2024.03.04_all.deb keyring.deb SHA256:f9bb4340b5ce0ded29b7e014ee9ce788006e9bbfe31e96c09b2118ab91fca734
$ sudo apt install ./keyring.deb
$ echo "deb http://debian.sur5r.net/i3/ $(grep '^DISTRIB_CODENAME=' /etc/lsb-release | cut -f2 -d=) universe" | sudo tee /etc/apt/sources.list.d/sur5r-i3.list
$ sudo apt update
$ sudo apt install i3
```
> Après tu ne dois que ajouter ces deux commandes en bas de fichier config de i3
`exec_always --no-startup-id picom`
`exec_always --no-startup-id ~/.config/polybar/launch.sh`

> Dans le cas où tu n'as pas encore le fichier config de i3, tu le trouveras dans /etc/i3/config. Normalement c'est le template de config que tu dois copy vers ton .config pour personnaliser. Faire `cp /etc/i3/config ~/.config/i3/`


