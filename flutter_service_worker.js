'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/AssetManifest.bin.json": "9d6757e169a91cd17c0f66b5112491ad",
"assets/AssetManifest.bin": "ca28a4912c1a4e7ab561a2a050c53311",
"assets/AssetManifest.json": "6147aaf75dbef045ddb884b7cc0aec51",
"assets/assets/fonts/pretendard/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/assets/fonts/pretendard/Pretendard-Medium.otf": "13a352bd44156de92cce335ce93cd02d",
"assets/assets/fonts/pretendard/Pretendard-ExtraBold.otf": "67e8e4773c05f2988c52dfe6ea337f33",
"assets/assets/fonts/pretendard/Pretendard-Black.otf": "de507f665f6ea63a94678e529b2a4ff0",
"assets/assets/fonts/pretendard/Pretendard-ExtraLight.otf": "049bb07edff45e5817fa4f892ebabe98",
"assets/assets/fonts/pretendard/Pretendard-Thin.otf": "32c8b7e405cd546866e5ef1d33179cba",
"assets/assets/fonts/pretendard/Pretendard-Light.otf": "de308b576c70af4871d436e89918fdf6",
"assets/assets/fonts/pretendard/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/assets/fonts/pretendard/Pretendard-SemiBold.otf": "6fe301765c4f438e2034a0a47b609c61",
"assets/assets/icons/external-link.svg": "ac05cd4fcb0cd58ddb90c1cecf80f77e",
"assets/assets/icons/sliders.svg": "d4aabd40612fc01de3c4427a3143368a",
"assets/assets/icons/power.svg": "f9fe98460d015b9e9310d37a0bdc4a07",
"assets/assets/icons/upload.svg": "14dd1331c8efa5f93a329e56662a60f1",
"assets/assets/icons/plus-circle.svg": "d4547011f69a9a5700f9641ae79007e8",
"assets/assets/icons/fast-forward.svg": "13963ab2c455602e57e8163ae5cdb848",
"assets/assets/icons/move.svg": "6d4dde2703ff2fc17a0a9a72dfe427cb",
"assets/assets/icons/thumbs-up.svg": "7c39be07c180256876c1916dd658f9c1",
"assets/assets/icons/heart.svg": "502189aef3b96acbcddedbb54a043638",
"assets/assets/icons/link-2.svg": "63d032dd8a5ceef8d2f2bfa32124e020",
"assets/assets/icons/save.svg": "dbc678ae7d9ba2f74e98c0b281202168",
"assets/assets/icons/users.svg": "fcd0300a6e89e7151566af47b69128d6",
"assets/assets/icons/minus-circle.svg": "0a9f2aecee9d382285ea9ac2503705a4",
"assets/assets/icons/pie-chart.svg": "93a2fe805f95b3c24d532f395a8034a4",
"assets/assets/icons/book.svg": "b40767c758a19c9bfe3b3313897c82d2",
"assets/assets/icons/map-pin.svg": "b2f804bda31dee415fc2b1ff7ba9315f",
"assets/assets/icons/italic.svg": "c46b9c4a4626ffe6ae65121427a37f2c",
"assets/assets/icons/user-plus.svg": "5047d00469e004c51f6b14e245c66d6f",
"assets/assets/icons/database.svg": "fc71243e77efb6f04b0c54b657f1e1e1",
"assets/assets/icons/facebook.svg": "180a6ca60002b6b9a88b1977232f25fb",
"assets/assets/icons/file-text.svg": "09f0201e92b42591f3c447f7cd8704aa",
"assets/assets/icons/volume-2.svg": "f61b1e4cd0ac470a519160f6cd0c5d04",
"assets/assets/icons/navigation.svg": "0368b80072fdffa0b241969433952198",
"assets/assets/icons/bluetooth.svg": "670e3a2d0b7f920ca7395e8a8abf9d0d",
"assets/assets/icons/phone-off.svg": "3c9f577b20664c901ad75d9c3a094d63",
"assets/assets/icons/log-in.svg": "6c3aec23252e8674def010db7d1c3b78",
"assets/assets/icons/codesandbox.svg": "0a83e818381008df478da9653a3b3422",
"assets/assets/icons/linkedin.svg": "beb7135630c8d3725bc3571be62ad56a",
"assets/assets/icons/inbox.svg": "8c292cbc3a2a63d64ef7b660cc335a83",
"assets/assets/icons/phone-call.svg": "b5e84d6112ed3df82e9cd769d95a22ac",
"assets/assets/icons/unlock.svg": "92b19aadef037e7aa1e84919688a7736",
"assets/assets/icons/cloud-lightning.svg": "789f759d7f213677fdf7f6447a6c6faf",
"assets/assets/icons/volume.svg": "ce35a355a56308363663ed7f82b07166",
"assets/assets/icons/shuffle.svg": "db2a806396baa1706ed94f4cd0b29af5",
"assets/assets/icons/package.svg": "27529aca400444845bb9a26ed2585a49",
"assets/assets/icons/chevron-up.svg": "90f47098c8908802053427f30191c643",
"assets/assets/icons/folder-minus.svg": "35c453808f537a8d964953195e82c86d",
"assets/assets/icons/wind.svg": "243d3fb4d19bb50a5cd04812d106a503",
"assets/assets/icons/figma.svg": "3d05a5c2bba4b6d1bfb7d5d744215790",
"assets/assets/icons/check.svg": "10a5b071548379871a331ddae24e289f",
"assets/assets/icons/rotate-cw.svg": "7909af823a83d17e021e742f6a507890",
"assets/assets/icons/flag.svg": "e82605c7d2dae238c36c9a96e3b46d03",
"assets/assets/icons/hard-drive.svg": "a27fc2792d24e2b4d600e4a72afcfccb",
"assets/assets/icons/code.svg": "d7ef8adba1aa16a74b91b787cde50f45",
"assets/assets/icons/star.svg": "ac8ea2135e1379656f02ca2eea26cc87",
"assets/assets/icons/upload-cloud.svg": "83ae95d25d9af2d8936f1316e4e7cafc",
"assets/assets/icons/layout.svg": "8a437d552868c3bb65039b896fddc74a",
"assets/assets/icons/align-center.svg": "6f1e7ed52cb0b15945394e8138ac7ff1",
"assets/assets/icons/align-left.svg": "977975285b55cc5c13f4dc05b67a99fa",
"assets/assets/icons/chevrons-left.svg": "4a2a0b47901dbd239c6f5ad4ef14ce0a",
"assets/assets/icons/github.svg": "5cff78e44ca42e5026f832f7b41fb018",
"assets/assets/icons/divide-square.svg": "d3a6dcf8a30452c53bfb509075c77be3",
"assets/assets/icons/menu.svg": "ca394ec8a4754ab9db293dcac626bdcb",
"assets/assets/icons/hash.svg": "e367aa38cdf51d2c9d848745037a9645",
"assets/assets/icons/trending-down.svg": "49127a40575a020a21bb8f051266c197",
"assets/assets/icons/corner-right-down.svg": "21c006a7b908a78ed704d93db33cd8c6",
"assets/assets/icons/cpu.svg": "771256a9801840a5b2b56e21de583b2f",
"assets/assets/icons/rewind.svg": "3781baac5d467bfc00e7b9bba17f1b6d",
"assets/assets/icons/trending-up.svg": "4e2c0a1d4a1adb1a99a69310e06fbbc7",
"assets/assets/icons/arrow-left-circle.svg": "d14a04844ca29b5b3994f22631295ebf",
"assets/assets/icons/zoom-in.svg": "5a09806e2893e73bd8e31d721ea42372",
"assets/assets/icons/coffee.svg": "7b0396d76a864e1c3f06fb688449c0a7",
"assets/assets/icons/arrow-up.svg": "b380d955cce39bf34b884be927997370",
"assets/assets/icons/columns.svg": "f061f0319b3f6e1e9894bb61f5455968",
"assets/assets/icons/skip-forward.svg": "51fefddf37541d721b0f541fa7f5e3fe",
"assets/assets/icons/instagram.svg": "7c6e51dced0af371e3b62c5b4ddb9f51",
"assets/assets/icons/volume-x.svg": "60183b4be77c3348c3c9041fe8ed6898",
"assets/assets/icons/git-commit.svg": "00746f95a109efd22df9f32a663bf1c9",
"assets/assets/icons/corner-right-up.svg": "4df81bc0484060ca73f63b6d9e9aee78",
"assets/assets/icons/arrow-down.svg": "15251d3fbdce3b5d4251e67de24076d2",
"assets/assets/icons/minimize.svg": "5a2d7706628196eedeeca2196aa009db",
"assets/assets/icons/thermometer.svg": "22d75090cda2135895764ce3a93d8472",
"assets/assets/icons/grid.svg": "0ed557634d8188927f2fb753b6348780",
"assets/assets/icons/mic-off.svg": "5b4ef72db3eb61b7bbee497a89a346d0",
"assets/assets/icons/arrow-up-left.svg": "1022bb6ff7bde3560c19849aa599727d",
"assets/assets/icons/file.svg": "5bd43cb8b8867e4a118ea17495d4d80a",
"assets/assets/icons/delete.svg": "7c9993e17c1c8bc0232d7381a92f5920",
"assets/assets/icons/rotate-ccw.svg": "7260812bc8d1081d6602e788fecce953",
"assets/assets/icons/lock.svg": "85dbc3f3e2fee7e8a67b3627ad00c955",
"assets/assets/icons/send.svg": "d9f34237336fcf5138cd42bdc0bbd10a",
"assets/assets/icons/mouse-pointer.svg": "4af98ea7f8ec35d4b2f2ac7e22f2ccb4",
"assets/assets/icons/radio.svg": "9896d2939306db0a53f573356b2fd8a9",
"assets/assets/icons/info.svg": "47197c1b08305d5037d8bc783bbba9c7",
"assets/assets/icons/key.svg": "94cde88c00b9c232c0751281108c28a4",
"assets/assets/icons/triangle.svg": "56f409538367efb7b9a4b67552353a63",
"assets/assets/icons/trello.svg": "732cf32adf63a6e862a1292d5f9febee",
"assets/assets/icons/wifi.svg": "45af516604a7ce84568c43e831a0347a",
"assets/assets/icons/eye-off.svg": "c68b9e9b64c0d3a41be7c02ec81c76dd",
"assets/assets/icons/x-circle.svg": "c89cb7d970a5354712a70d3cb3225308",
"assets/assets/icons/map.svg": "b5eef698940056438ffadd0216c1e2b2",
"assets/assets/icons/edit.svg": "7a14112e034b1826aea15a675307768e",
"assets/assets/icons/x.svg": "b0200bf7cbbb26c32989e7a0e4d19eef",
"assets/assets/icons/slack.svg": "88357cc63982059b0528eab6c56a5cd7",
"assets/assets/icons/minus-square.svg": "ff9b5981b6c5db4c973f77cc6df7ad01",
"assets/assets/icons/chevrons-right.svg": "7828171283ccd305e7bbc09475d77584",
"assets/assets/icons/video.svg": "85bdb95a5b4e4c5ccd9e1290cedf2391",
"assets/assets/icons/clipboard.svg": "9238e2eeed039fae29c7bde605dd70da",
"assets/assets/icons/link.svg": "8a34b88dea4859ce46416e71841f00be",
"assets/assets/icons/corner-up-left.svg": "2db0e8cf001eddd3c9a352b4d0c76fe5",
"assets/assets/icons/toggle-right.svg": "febc472ee78e0988ee931ba0f71d4e04",
"assets/assets/icons/align-right.svg": "11e4ecfb6bc761bc8823a3565d7604bc",
"assets/assets/icons/divide.svg": "72813f24906cc667b332fdbebbe32d8f",
"assets/assets/icons/corner-left-down.svg": "26b054f121b24d0345afe76392b2a1dc",
"assets/assets/icons/book-open.svg": "e8c7fe4e55ce6b35703f600293e88a3f",
"assets/assets/icons/repeat.svg": "6ec5bad1cb4f3ceb32b3ac2d04c72f73",
"assets/assets/icons/award.svg": "0cf9a246aebd95c3768bfdbf58e8bf95",
"assets/assets/icons/zoom-out.svg": "140560148421de02d7c38919aec711fe",
"assets/assets/icons/log-out.svg": "8d50976436d9751860945033addfe6e6",
"assets/assets/icons/watch.svg": "06dd7ae631a2f49eeeed0209da0cbaf0",
"assets/assets/icons/phone-missed.svg": "430decf2805e2c94b711db9849f6114c",
"assets/assets/icons/film.svg": "5e57d8a2f28343d26b60da4662e5a077",
"assets/assets/icons/archive.svg": "97582ec644cb63896869c761152ece1a",
"assets/assets/icons/plus-square.svg": "46ec6c72e9c46717d11a68fa94fd0b9d",
"assets/assets/icons/hexagon.svg": "2d95a138ebf8804321d33a398dedf3a5",
"assets/assets/icons/file-plus.svg": "331870875d74c527f367d2aab5e81487",
"assets/assets/icons/activity.svg": "ec2ea5c1a9894b6bef25afd1c555e627",
"assets/assets/icons/table.svg": "7a1cd2ed18b264dcbb5dafd5cc58cac1",
"assets/assets/icons/headphones.svg": "e3f2c527e5ecb7c55c96a7e708e91a4d",
"assets/assets/icons/framer.svg": "7ca8baf422ef6ae898f1361f1b102770",
"assets/assets/icons/chevrons-down.svg": "c6b3b8ec519e32cee0e447216bb4ca24",
"assets/assets/icons/smartphone.svg": "2b9903504f576446fc7c2bc64d64790f",
"assets/assets/icons/alert-triangle.svg": "fc8aba7fb279fe57e9797e9a6d3340f4",
"assets/assets/icons/briefcase.svg": "8aa459ae951030ec44cb20c20de623c0",
"assets/assets/icons/printer.svg": "cb4092339e30e3b581db1c092e10bc20",
"assets/assets/icons/target.svg": "10c63764b97be3a2d64ce8491b9d96c1",
"assets/assets/icons/cloud-rain.svg": "ffcc0fba43d49cb698969e219eeb2537",
"assets/assets/icons/slash.svg": "c6f7141b095f6d68338e512046e2dab3",
"assets/assets/icons/percent.svg": "ad725c91de24c7db4496e1abd675edf2",
"assets/assets/icons/tag.svg": "9317bc9dac095723b9f4afd2abaf7b15",
"assets/assets/icons/server.svg": "4c2407bb2bec8fd1c058187733357f9d",
"assets/assets/icons/trash.svg": "e688762277044cb8758d1ee0a5909169",
"assets/assets/icons/layers.svg": "ffd63d5c3b1092df4263d7d1d9e1b69c",
"assets/assets/icons/scissors.svg": "d8e8b827af713e29b1588559caa39afe",
"assets/assets/icons/feather.svg": "df8432b4995cf4b47e2f89912f4a70b7",
"assets/assets/icons/edit-3.svg": "54179a336d4b61f0960f83b614b194b3",
"assets/assets/icons/x-octagon.svg": "f7caae726169fc92ec1f04e842e54a59",
"assets/assets/icons/minus.svg": "9661ba0b1e7abb32b6b4b956d5d14899",
"assets/assets/icons/thumbs-down.svg": "76c1523f30c09d63f7bd992d36e1923f",
"assets/assets/icons/user-minus.svg": "7fad484d3fc1b16b62081c4dfa80d5d9",
"assets/assets/icons/maximize.svg": "f7c1938e9f2cd378b67945feff8cf13b",
"assets/assets/icons/camera-off.svg": "0a1ebdacf5bec74ed3bea5568515bec2",
"assets/assets/icons/chevron-left.svg": "5727f869509c87f4d25c2225f0968573",
"assets/assets/icons/zap-off.svg": "a8947bb52bcf38bd5b3a72e224da9736",
"assets/assets/icons/battery-charging.svg": "75100ee8ca76dbf7c5f4d7f13c98cfd1",
"assets/assets/icons/chevrons-up.svg": "ca9b1d7e739445254b9b4bb16e9a9c82",
"assets/assets/icons/stop-circle.svg": "4a6442b86763bcedfb537bad51a2d0b4",
"assets/assets/icons/clock.svg": "ea3f87d138d7aecf39f43afa7707da47",
"assets/assets/icons/more-vertical.svg": "cb5a271abb22da2c93866b972f0f62c4",
"assets/assets/icons/volume-1.svg": "e28b2925d0a65f6d6fcba582e571a08f",
"assets/assets/icons/trash-2.svg": "5dda1f392c13650da559c222dbd37f9b",
"assets/assets/icons/corner-down-left.svg": "7c9546e392fb2e0584ec7a44a26db769",
"assets/assets/icons/tablet.svg": "3b74c4e6b1d4935768d08b2c1a5280e9",
"assets/assets/icons/sidebar.svg": "e45a0e7a64e083c891621aa740db74a4",
"assets/assets/icons/gift.svg": "ca06377d8c3a01d2544caabfb1b7ab2e",
"assets/assets/icons/frown.svg": "7ab5802237528b51085fcb3f56fe4b7a",
"assets/assets/icons/git-pull-request.svg": "b45044430398b6938d00b1e6fa6325ac",
"assets/assets/icons/share-2.svg": "7c7332c0ed554eab2cf1da1467260983",
"assets/assets/icons/pocket.svg": "662f393586bc273b3d7613add697b3f5",
"assets/assets/icons/corner-left-up.svg": "f3e96fc5811b5b7bfdeade84cf232744",
"assets/assets/icons/camera.svg": "19a54509f12a3b28cbdbcbfe8fc6846f",
"assets/assets/icons/octagon.svg": "99886c7813b4ad2443d3ceec80b71c53",
"assets/assets/icons/divide-circle.svg": "c9e501c56feefb372c8cd734fb5c7703",
"assets/assets/icons/video-off.svg": "d9fa84312d5d1e5c4808aa24640df0c3",
"assets/assets/icons/toggle-left.svg": "8930139f7254865d0e9b1b16972c82a5",
"assets/assets/icons/bookmark.svg": "440d73ce31deabccf2fb3d4ffc35ce82",
"assets/assets/icons/git-branch.svg": "9a8c65efdbf530e9d73126925fa02ff1",
"assets/assets/icons/battery.svg": "743fe9931f12d6af53f97b396770ea61",
"assets/assets/icons/shield.svg": "171ba61fc43e1aa5851c232315001107",
"assets/assets/icons/bold.svg": "52d38f023131c09408929ad54990bf1b",
"assets/assets/icons/bar-chart-2.svg": "6c44238fa45a1fe98f937b1d59da826d",
"assets/assets/icons/x-square.svg": "ddb8f8e88afe396cfd95326183613100",
"assets/assets/icons/user-check.svg": "33597ea2bd8832e0f8151d246da691a7",
"assets/assets/icons/codepen.svg": "2d25e52d6c6a1693fec3aa260ac1b3c0",
"assets/assets/icons/disc.svg": "ffaee5053d0d4913e3791d18c2924328",
"assets/assets/icons/moon.svg": "5947fcb1f570d687a211ea0bc3f8e2c5",
"assets/assets/icons/arrow-down-circle.svg": "b2066acf199315ed7da9990cf5f9150f",
"assets/assets/icons/filter.svg": "4e108bf9f89d0d4da12533b98d5579c9",
"assets/assets/icons/aperture.svg": "2a8578ce0476e62f63b51908bc62e1b8",
"assets/assets/icons/credit-card.svg": "47905edec77eed1f71b823237faf359c",
"assets/assets/icons/share.svg": "539c9f9a1aff6c51b0d36c445117be77",
"assets/assets/icons/tv.svg": "0c2b3d75767b636d5c9f642b0c41cde0",
"assets/assets/icons/arrow-down-left.svg": "2241203645dc9877b3a66384302c8a6e",
"assets/assets/icons/dollar-sign.svg": "cbeab2705cd1a8c5d774eac8ed9c9619",
"assets/assets/icons/arrow-left.svg": "f9a44e1ccb9f44cd4de1da8fe7f6f4d8",
"assets/assets/icons/message-square.svg": "42f61b6cfe834007f261ed563b6d3ad3",
"assets/assets/icons/monitor.svg": "0f1222c0565a6b56d03c740e23803859",
"assets/assets/icons/circle.svg": "d3a070848269031d2d69df7a697405a5",
"assets/assets/icons/shopping-cart.svg": "630af4013de8bee3772278ebf075f334",
"assets/assets/icons/bar-chart.svg": "c4da60fd9d4527a604375fb7f933dbf8",
"assets/assets/icons/life-buoy.svg": "49eae19179ba495406c4493935c22f45",
"assets/assets/icons/terminal.svg": "8f4c670e81e5c15b19a720200d067bf0",
"assets/assets/icons/meh.svg": "b7a92f62b6483788e3a0c89d184366d4",
"assets/assets/icons/user-x.svg": "80ef950fdfee9a9beb870c40b9cea016",
"assets/assets/icons/underline.svg": "3a8023cee136469ea0eabe8d1edec5a3",
"assets/assets/icons/play.svg": "34df31112e5959a1e5c0abf66851818d",
"assets/assets/icons/folder.svg": "24a5a3955ab0c15f5d6cd9bffadaf8b5",
"assets/assets/icons/check-circle.svg": "ce63c0459a272d8301b186ec73db37e7",
"assets/assets/icons/maximize-2.svg": "8ccdd199b5c03e5938b3690fa836f77b",
"assets/assets/icons/phone-forwarded.svg": "6bc578336de1e5e3a658c32bdaa8e25d",
"assets/assets/icons/cloud-drizzle.svg": "8c26f7e657e3b21010ba98f46c7fc1ba",
"assets/assets/icons/edit-2.svg": "f256ba958bdce3fac27cf8cfd42a734d",
"assets/assets/icons/play-circle.svg": "36f0e6ee645c508fdc115426b87baba6",
"assets/assets/icons/sun.svg": "eafa19dde8ac0c4fda486e22a2ae2616",
"assets/assets/icons/search.svg": "5437e5214c32dc0a8b1e3e3749edd831",
"assets/assets/icons/arrow-up-right.svg": "1e0b3551dbd5b5a3ead4b0802182bff8",
"assets/assets/icons/truck.svg": "e68dea64fd3b3d060126deb930314670",
"assets/assets/icons/shopping-bag.svg": "dd75d8007592eb3928c3691e2d251294",
"assets/assets/icons/user.svg": "ed52f187b2c4aad7fd02765c9cdc2f92",
"assets/assets/icons/type.svg": "3950b751bd78d75e1fbe5bb5126897d2",
"assets/assets/icons/eye.svg": "62517b9ba0aa6eb7d9a48cd982b9fa77",
"assets/assets/icons/chrome.svg": "a5d1d4e85190514802109d7e61733158",
"assets/assets/icons/home.svg": "55644be0d4a9382b8f1b58830cd536c6",
"assets/assets/icons/globe.svg": "50d70b6d317e305a5bf6c16ba4ad829e",
"assets/assets/icons/speaker.svg": "64390c68a2eec81038ddd8594d9d0c9a",
"assets/assets/icons/file-minus.svg": "5a7f514ddaf1d4faac8ec4385478208f",
"assets/assets/icons/minimize-2.svg": "f89a7ff345bd71c253d1e752e8b501f4",
"assets/assets/icons/phone-outgoing.svg": "55cac47ba9c21ca148f9197b8260dfc4",
"assets/assets/icons/at-sign.svg": "006caf8bc5f3b93730e05f61fae81a92",
"assets/assets/icons/more-horizontal.svg": "f0e83cb823af985e89d1ff48b92b5d8b",
"assets/assets/icons/bell.svg": "86facaccbf1a6c7def3651ff56008134",
"assets/assets/icons/crosshair.svg": "1c802f704720f545670b94aa85e09633",
"assets/assets/icons/align-justify.svg": "6ba9e0e035a7e3f3f901e6e768e97918",
"assets/assets/icons/chevron-right.svg": "9c59704b1de34c9fbb54c100b907ac85",
"assets/assets/icons/git-merge.svg": "829cc31ddac0b2994dd328591d400949",
"assets/assets/icons/zap.svg": "610c57ea099bb281d3bbb3e11ad011b4",
"assets/assets/icons/box.svg": "310d8273fe320e6b535fb5af8b46aaea",
"assets/assets/icons/tool.svg": "d68b9b61dcd97775a3d738e59ea3880f",
"assets/assets/icons/compass.svg": "1d4ab0808ed85d8b7bf52b4a7acb9b11",
"assets/assets/icons/corner-up-right.svg": "b2d9dd711e6158fc0bb6bf8ad120a6dd",
"assets/assets/icons/navigation-2.svg": "a01d740531521a1b9138a02d44c41a42",
"assets/assets/icons/umbrella.svg": "3bf744f4ed471dfbe4e61ade241aef99",
"assets/assets/icons/help-circle.svg": "a217347ffcb76aae5aee5d7c426354c2",
"assets/assets/icons/pause.svg": "7375c856ac1d6249eb005fb9faea66cb",
"assets/assets/icons/skip-back.svg": "abd4d2cdc85b6523a1e51594a144f41d",
"assets/assets/icons/paperclip.svg": "b4b6633630bddb2b17faef4bbff53bda",
"assets/assets/icons/alert-circle.svg": "3c85352a808086b3f6f28a87b9fbc9f9",
"assets/assets/icons/voicemail.svg": "ca5163523040ef0f4f6b0d8515e7cad8",
"assets/assets/icons/droplet.svg": "55255027247d17ff8dc33002343f3104",
"assets/assets/icons/youtube.svg": "1fe436a84ab9fcfd5cdb30d769c1ef0a",
"assets/assets/icons/cloud-snow.svg": "0722b483c00bb657661b57338f38310f",
"assets/assets/icons/phone-incoming.svg": "1b827c4815e21e2b2ac33c55c2401673",
"assets/assets/icons/calendar.svg": "b3d6e64c582711b7961aee4c427535dd",
"assets/assets/icons/shield-off.svg": "859f46be81d91c5f4cd1fe0a9efb58c5",
"assets/assets/icons/message-circle.svg": "ebbe6d9aff08b5bab2e86f719d8ae329",
"assets/assets/icons/wifi-off.svg": "a0a885168d0f3afb997900db930300b6",
"assets/assets/icons/sunset.svg": "9c33dfb8120a48b4659b60bd4a25c1d5",
"assets/assets/icons/chevron-down.svg": "c66b213d1dfff391c61146727032f068",
"assets/assets/icons/cloud-off.svg": "bb8229da8987ca6099831cdaea40b517",
"assets/assets/icons/download-cloud.svg": "743d6d35b3e641d0782b932b2dc36085",
"assets/assets/icons/dribbble.svg": "797b62c4841bff19bdb04fdf99ab023b",
"assets/assets/icons/arrow-right.svg": "dc372a07777e87891aaac087cfbe60ad",
"assets/assets/icons/refresh-cw.svg": "4456b94689bebd334e400bc62dcdd10e",
"assets/assets/icons/gitlab.svg": "b13af590b9081b2a5518f65360d47022",
"assets/assets/icons/check-square.svg": "75b12164616257bceae82fb73136e7ec",
"assets/assets/icons/sunrise.svg": "97fdadc992a4e3cbb368523f1f07b707",
"assets/assets/icons/mic.svg": "843100a49316ef56c40d0776bf511ed6",
"assets/assets/icons/airplay.svg": "a970588fe4709bd1ab8b2595a6012770",
"assets/assets/icons/download.svg": "ce2002cf2b1ff34be6c693d4bc3f025d",
"assets/assets/icons/corner-down-right.svg": "299306a27a8df368d4968566cc59e3ac",
"assets/assets/icons/crop.svg": "ebc25269edf43aecab705a4cdf6ffae3",
"assets/assets/icons/rss.svg": "9e0b66d1dd5ea38ba07f92ddec122ad4",
"assets/assets/icons/image.svg": "117a6d3e229a96ad0e0d0876352566e2",
"assets/assets/icons/arrow-up-circle.svg": "4bf0e3b8c5a2fcdb5a868ce286d407ed",
"assets/assets/icons/settings.svg": "a2376801c4706998fe2373aa2dcd6770",
"assets/assets/icons/smile.svg": "985edeb58320676fe52b2799f2d48e4f",
"assets/assets/icons/phone.svg": "2b23e08ac21b7ce2aa82dd856d314841",
"assets/assets/icons/alert-octagon.svg": "dc0651176a09d7dea3fae870ecc7b0b9",
"assets/assets/icons/square.svg": "e3aa28b61ad5475db3657096d1f85820",
"assets/assets/icons/cloud.svg": "6c5be50fc7b23e0bafe12390b7c837d8",
"assets/assets/icons/twitch.svg": "e5a0ed1abf3e65366e133f0f4c4daa06",
"assets/assets/icons/pause-circle.svg": "26764024005c3b82f9281c1f8bffc776",
"assets/assets/icons/heart_fill.svg": "bd7075a0f6585151e483e95a0ad23f84",
"assets/assets/icons/bell-off.svg": "bc81ff68da34b0bb22e97ff9d84a1592",
"assets/assets/icons/folder-plus.svg": "819e77a4dd1b924f84a5c1d4610d426d",
"assets/assets/icons/mail.svg": "20e8982ec7e03638afe27f5c3e897681",
"assets/assets/icons/list.svg": "7da6f7a2623bd10a115cd15fc30b69e6",
"assets/assets/icons/pen-tool.svg": "e6eb6671100e59712fb51a636ed32e3f",
"assets/assets/icons/refresh-ccw.svg": "b37b94ccc37bd052d251af89fa99c3b3",
"assets/assets/icons/arrow-right-circle.svg": "bdbb0ef6a4d501b308160ed3143604bb",
"assets/assets/icons/music.svg": "0cc5337b595655a684bdf060e07e790a",
"assets/assets/icons/twitter.svg": "43449f1c48de00f0ef903fcacf487626",
"assets/assets/icons/arrow-down-right.svg": "ca329fd9d17929ea465ee4c8535a46d0",
"assets/assets/icons/plus.svg": "7c6c8212afc5044e4b60f59552e57e69",
"assets/assets/icons/loader.svg": "d4857d8daf2d8c2823bb48cae80908e7",
"assets/assets/icons/copy.svg": "745449c2d1946743699328ae1701c956",
"assets/assets/icons/command.svg": "f60843945aefa6b2036c2629f471cb7d",
"assets/assets/icons/anchor.svg": "462e93ed4d0af90699883f1cc1a352ff",
"assets/assets/icons/cast.svg": "c866c851b8d704beb373e53ecc390a11",
"assets/assets/images/app_icon.svg": "24c25bddeaa7b0e28f7de89935d94ff7",
"assets/assets/images/app_logo_icon.png": "9a2921fc1ffa754cf675b1bff92b3cd6",
"assets/assets/images/profile_image.png": "5a021ab95b4d2a0c8e7511c40ca7bb2f",
"assets/assets/images/app_icon_reverse.png": "43a69245d96c5664ae33179a0c8c42a0",
"assets/assets/images/app_icon.png": "67ab9c98ede1c65d8c55508eb1c00fe1",
"assets/assets/images/apple_logo.png": "52ea36d9d28ad75d7ea2ecbb8b88935e",
"assets/assets/images/app_notification_icon.png": "f0518255ea3b4ed969966782f38bd6b5",
"assets/assets/images/google_logo.png": "ff0d04825cd219e6a621eb321f8d05f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "77c79c74cc87b98c11eafe53ea29dbfe",
"assets/NOTICES": "79602370ed7a8fa789ca2cbfb56fcede",
"main.dart.js": "59031c7cd6d9814f0bc3c778192fdba6",
"manifest.json": "acf1bd75ff6ba5d8c3a60396522d5525",
"version.json": "2d3186b5dd9700bd15b1ab7659dbab0f",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"flutter_bootstrap.js": "67e9203e93b0a018e6d2b0c404fe0266",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "6c167ee40d3ce57d3d212da532398213",
"/": "6c167ee40d3ce57d3d212da532398213",
"flutter.js": "76f08d47ff9f5715220992f993002504"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
