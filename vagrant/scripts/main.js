loadScript("utils.js")

//root nodes should go here, we dont have any at the moment, just local ones

//add cristi
admin.addPeer("enode://c2d413dc5b99313013a295690bfb8a5c5512b2fc89a6630cbb4aff60e9f19db7115f1a18790f4875201aa72384017a949356516c896f47e667abf6e9e3fc6cd0@10.162.128.122:30309?discport=0")

//add andi
admin.addPeer("enode://0dcf531e40d272d2ebadd571eec8ba82b8bc6e3da698fda54f2d1e53bf86d48f7baca550de642865d58a30168ffafa13b806a7c5502add5833513af67d80f0ab@10.162.129.255:30309?discport=0")

// start the mining process on 8 threads
miner.start(8)
