loadScript("utils.js")


//add cristi
admin.addPeer("enode://90641bbf40d53fdd8a652b56aeffd651c13ddf2f5abec27abe18a3d680d3aca7931059945cb73a438813aec73a44a67bfddc0e22419db7963914604db9fb0e46@10.162.128.122:30309?discport=0")

//add andi
admin.addPeer("enode://de680cb612958a5b10c9400f07f11c92a05c7650cc9b8bbcb877994435170fb096aff26eb7871b57f12bc03ed38db3b6d769ced546b1d9043af985b50623cc31@10.162.129.79:30309?discport=0")

//add alex
admin.addPeer("enode://6fc49a81a51f5a1c42b65ae52f6d046919b4c3f45539ec8841d4c6e35e4ef90092bbf92b0dd1e538da6a33a8255902bd28a7ee6cae3b88b81a2ba89e266acb7b@10.162.129.35:30309?discport=0")

miner.start(1)
