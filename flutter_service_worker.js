'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "340008b9de4f02145439d823a746c26a",
"assets/AssetManifest.json": "ed8dfd0d690423e960c062a218abdd51",
"assets/assets/active_coupon.png": "22ffc6abda487a3e29004989e7216384",
"assets/assets/audios/Award_Happy.mp3": "719a9160ac891ee26f6c34ba228089cf",
"assets/assets/audios/winner_animation.mp3": "c3f2d143814ec55c09e63e353e604bb3",
"assets/assets/breadcrumb/allocated.png": "66fb712923f4149bfaf9df6f0d0868dc",
"assets/assets/breadcrumb/arena_left.png": "66eb1259870e2ba50ee55b414b648b93",
"assets/assets/breadcrumb/arena_right.png": "210238a19b9b7d76b181c5273c63f119",
"assets/assets/breadcrumb/asset_selection_left.png": "f88f54d462f39245af202d29f730bca1",
"assets/assets/breadcrumb/asset_selection_right.png": "ba17aaf84e4da8d61af2a0c1c0a25ee1",
"assets/assets/breadcrumb/buttom_sheet_top_back.png": "90bbaf8ad72baf80c3d8e541d44a3668",
"assets/assets/breadcrumb/callout.png": "346c9f2ff3f5dc86abd5dfe25fc779b7",
"assets/assets/breadcrumb/calloutNew.png": "6e07a633862d6cad2890e362734f8991",
"assets/assets/breadcrumb/cont_right.png": "350b0464414c2beb2d5ab21da9d3d109",
"assets/assets/breadcrumb/crouwsal_left.png": "7e15be148caabf6a5ee114f65b60c9cd",
"assets/assets/breadcrumb/crowsal_right.png": "287c8515d98a92b4911b1d4e82ebab71",
"assets/assets/breadcrumb/dodo.svg": "efba2fdc2239dc7c83658d0fcce5d933",
"assets/assets/breadcrumb/expand_icon.png": "c21436d390f000f5165abb094005d386",
"assets/assets/breadcrumb/H2H.png": "8668420635807fadbb60fd4a5d1739d1",
"assets/assets/breadcrumb/hostedWalkthrough.png": "a6012969dadd655310b7840b58ad35f6",
"assets/assets/breadcrumb/img_winner_rank.png": "3628dc47f0c907a0ddd35be3c1dee24c",
"assets/assets/breadcrumb/img_w_r.png": "9af9a8a30f310a0c4ee41a9b26857a30",
"assets/assets/breadcrumb/Mega.png": "9e0f6e7f1202a90a17dde3e90ea2d5ad",
"assets/assets/breadcrumb/midsele.svg": "94d6c93d92dc154d390393d83b244f2e",
"assets/assets/breadcrumb/portfolio_error_image.png": "88e2158b79f1f8d567dfefaab6dcd50b",
"assets/assets/breadcrumb/port_folio_left.png": "61255535630da9489b927f50d234a53f",
"assets/assets/breadcrumb/port_folio_right.png": "c86c23056649c2dc64d2b470fd679b62",
"assets/assets/breadcrumb/Practice.png": "3767cd837ee6fc856e38e43898e7f143",
"assets/assets/breadcrumb/Price_Distribution.png": "f6a0fee4797db7847d7857d4572f4753",
"assets/assets/breadcrumb/rank123left.png": "1b2bb0ebb7e4e9da1584af761966d4e5",
"assets/assets/breadcrumb/rank123right.png": "1770b1bc75920b8846b1b446c55a409b",
"assets/assets/breadcrumb/right_con.png": "f398e12418288dd2577ddea0a2cd9919",
"assets/assets/breadcrumb/sele.svg": "fb4ca6f0700883c4802f051c330d32e6",
"assets/assets/breadcrumb/sele1.svg": "c2a42a922d88e63e33a9100d4d180942",
"assets/assets/breadcrumb/sele11.png": "69aed44983b8ad1c6cb2547458738f6a",
"assets/assets/breadcrumb/sele2.svg": "fba63921520f44bdd1451db38ecb1e55",
"assets/assets/breadcrumb/sele3.svg": "05d5f87888482331c1a06661957e0304",
"assets/assets/breadcrumb/usele.svg": "beed1974c1f3e9f23273ba79966be1e9",
"assets/assets/breadcrumb/usele2.svg": "1998ad79df6d0b30604dc78e98357783",
"assets/assets/breadcrumb/usele3.svg": "a03255574652b83b57157fdb5555d07c",
"assets/assets/breadcrumb/WTA.png": "43751a282b056a557a96b4d63fa13b78",
"assets/assets/client-cert.pem": "f868f56971cef4d68a286afdfcd029e0",
"assets/assets/client-key.pem": "119dfac3aefbd6561574e010d47c0dfa",
"assets/assets/fonts/gopher_bold.ttf": "cba5b64fe31318ca116ab716d9fa6510",
"assets/assets/fonts/gopher_light.ttf": "64589b41ad0dafd1435e6bd0fa74cbd7",
"assets/assets/fonts/gopher_medium.ttf": "f2b354b5514675a369840f02bfb4a1e4",
"assets/assets/fonts/gopher_regular.ttf": "0893422a221f704eee80143f73734d0b",
"assets/assets/fonts/gopher_thin.ttf": "9189173503320c9dba387f13e5e237a8",
"assets/assets/fonts/league_bold.ttf": "9a223d8a028354713a4a4072dc19250a",
"assets/assets/fonts/league_light.ttf": "c71b849419d6561a570a89eb8debce8c",
"assets/assets/fonts/league_medium.ttf": "b2e26657bde91d3d3f4dbc4d7010197e",
"assets/assets/fonts/league_regular.ttf": "a81ff45ebf2f1aa10df144b7a407926a",
"assets/assets/fonts/league_semibold.ttf": "f1f514ca0d30100d42e8414b84eac0be",
"assets/assets/fonts/league_thin.ttf": "d9ae2037448184a8927bd7d8748a53b2",
"assets/assets/fonts/montserrat_bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/montserrat_light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/assets/fonts/montserrat_medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/montserrat_regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/montserrat_semibold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/fonts/montserrat_thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/assets/fonts/sfns_display_regular.ttf": "9e14b4e72dec1db9a60d2636bbfe64f2",
"assets/assets/fonts/WorkSans-Regular.ttf": "9d5fd34b8c15ba678a5a9ef16b8ad952",
"assets/assets/gameIcon.png": "2b92ab014a7d1053e51811f9cc74095e",
"assets/assets/gifs/Animated_Gif.gif": "3f92cc079af2ed4a105320cd1868c1f3",
"assets/assets/gifs/gif-wow2.gif": "f316a84d94cd843d436d41a65889390f",
"assets/assets/gifs/spin_wheel.gif": "e019806b10680ce8d2a449e86a0f4159",
"assets/assets/gifs/winner_animation.gif": "af1c58c9b1b67d5b8bc3f888b3c74471",
"assets/assets/images/+xp.png": "8788b68509103fc2c927345c66757b45",
"assets/assets/images/11D_Coupon_code_Copy.png": "00591021ee7c9991ce3256bbe4f4c451",
"assets/assets/images/2.0x/img_smile.png": "eefd1dd118bbf6b8bb5a6e5b724810ac",
"assets/assets/images/2.0x/menu.png": "24461ab6d6d07f2880f0528795425f61",
"assets/assets/images/2.0x/pie_chart_2x.png": "be408e0081b1d8a8c5e898dd784d574e",
"assets/assets/images/2.0x/power_up_2x.png": "2ec7fbb9f48e28741115bc20524dd6e1",
"assets/assets/images/2.0x/trading_pack_2x.png": "e04de88a7cc437b30c295838ee9da1ad",
"assets/assets/images/3.0x/8AwavyBackground.png": "1365425bd333a46caa4cff2255b67f71",
"assets/assets/images/3.0x/couponCashImage.png": "5bed7ed04b54fd4ee68b37cb73acc6c1",
"assets/assets/images/3.0x/pie_chart_3x.png": "ac74d7667c52638e3c96ec820b7cd1f2",
"assets/assets/images/3.0x/power_up_3x.png": "2a5e2fb3fefdff00b6684024c54e4a30",
"assets/assets/images/3.0x/Rupee_symbol.png": "1fcf9e2b33360fcfd48dd15f23050c11",
"assets/assets/images/3.0x/trading_pack_3x.png": "0a8134d5bfac04a29e643540803cdc5f",
"assets/assets/images/active_coupon.png": "5f382800903d58d07f588cfd5f902d78",
"assets/assets/images/addcash.png": "41bd610469e084024c736984f8f00dcb",
"assets/assets/images/alert.png": "c9df4b6fae52777bfdd07f9b0a9eed2d",
"assets/assets/images/arrow_1.png": "7473fa9792be894e80c5ab09adca737b",
"assets/assets/images/arrow_2.png": "4a9faed4381e4abd6c1b3a40f135dc5d",
"assets/assets/images/arrow_3.png": "03cdbc1f147d4f1bb981a504b397a36c",
"assets/assets/images/arrow_4.png": "7512b976fdb98afcb66cdde7fa5d5247",
"assets/assets/images/arrow_5.png": "98ffeae6bd33943127d7633d0e676d00",
"assets/assets/images/arrow_6.png": "cce80565a31f4b5b991f6a168d211e7e",
"assets/assets/images/arrow_7.png": "49e8e82a6911cd743e75763d80113941",
"assets/assets/images/arrow_8.png": "828dc9327759efb06094074d33df6aef",
"assets/assets/images/arrow_down.png": "2285b85b6a604039dce7fca59ec1142b",
"assets/assets/images/arrow_up.png": "666337193a24ae1d57bfde1d04ec13dd",
"assets/assets/images/arrow_up_select.png": "eb630ed0cde1824b71fa1547cf624421",
"assets/assets/images/Asset_1.png": "689a6b0f5c5d0ed4071eba6f03571a3e",
"assets/assets/images/Asset_2.png": "86908a1799c6d32cb373a0e5f971dc7a",
"assets/assets/images/Asset_3.png": "6cb20e7576f7d419761813b42a17792e",
"assets/assets/images/Asset_4.png": "985aa0f8a741d773bf41bdf39e2a6174",
"assets/assets/images/Asset_5.png": "a66f787aee73b85abe0153f3b57e43db",
"assets/assets/images/backCard.png": "84f97cee453a1f842989594a8587741c",
"assets/assets/images/bank_verified.png": "5e4d35302ff7dcaed9177d2b993e879c",
"assets/assets/images/basket-bitcoin.png": "07552c8f74a70e46ff0b86b89b7829f7",
"assets/assets/images/basket-dollar.png": "2b0fd2d4764c5b069e365af92a34d8a8",
"assets/assets/images/basket-rupee.png": "201bef4c649ddfaefb29d93389e7eb9d",
"assets/assets/images/better_luck.png": "2d9a540a487140d9cbe51816f831c50a",
"assets/assets/images/black_background.png": "fc7302447b4092b52f05cad2d31ba51f",
"assets/assets/images/block_user.png": "94d934df54745e74d72aec158542008c",
"assets/assets/images/blueCard.png": "aa973cc1300690ec006f54e791b54c60",
"assets/assets/images/BlueCardSmall.png": "071ed44120593d7a61c1cf90fb306828",
"assets/assets/images/blueScratchCard.png": "56b93f65b5052d0537a2ad0c82dded46",
"assets/assets/images/bluestrip.png": "55546cc92225fe91a8bdb225020da669",
"assets/assets/images/blueStrip.svg": "a5a48adc2eb071d16a2a2bae17935643",
"assets/assets/images/blueTickStrip.svg": "bdc44fa925903adf9bdb1febae09578e",
"assets/assets/images/blue_scratch_card.png": "e3cd60e27d6ba3ebddb7188c09aa2dc4",
"assets/assets/images/bonus_card.png": "9940cbc6d1144987b977650329c97b87",
"assets/assets/images/bonus_deposit.png": "17c8efe34a95b59d0e91dea84e99b8c8",
"assets/assets/images/BSratchCard.png": "713ed797aedcd6935069c5628cd4cdb3",
"assets/assets/images/calendar.png": "47d4bb6021f5e87e89a565b0a30eb3dd",
"assets/assets/images/card_bg.png": "827eb1d315f5141efbce7a54aa6d002b",
"assets/assets/images/cash_bonus.png": "05d64da29c1a695a003809591635bbbc",
"assets/assets/images/chat_group.png": "d5d0f656bc89ed48fcc6eacf8f161eba",
"assets/assets/images/chat_setting.png": "ab0f3b2e0b67af6f270f739e53489f9c",
"assets/assets/images/checked.png": "cf0bb32d56a3577c0233f748ccf6f488",
"assets/assets/images/claim_reward.png": "368633cf66a57bab65bfd9595bf419aa",
"assets/assets/images/completed_check.png": "f26be1e0e6458df813d2de0c688403c2",
"assets/assets/images/contest_style_background.png": "ac632ba626853d1b23fd1c9be9827f95",
"assets/assets/images/correct.png": "691a3153d26395a75c6e01de0954b2e6",
"assets/assets/images/coupon_applied.png": "6f29693e047429de54b3326f0c9749d3",
"assets/assets/images/Delete_basket.png": "ca1651c99e6b73193f661935495f035f",
"assets/assets/images/delete_icon.png": "2e4f4e1464b25716a3c6573b5c8eacf7",
"assets/assets/images/discount.png": "b1a81ce16a0207edd4da8b4d07d144f3",
"assets/assets/images/discount_coupon.png": "9940cbc6d1144987b977650329c97b87",
"assets/assets/images/dodo-egg.png": "5ea998f20560df4129750b0cd0088d83",
"assets/assets/images/dodo-icon.png": "b7f76fbebe7de0144031d866c343808c",
"assets/assets/images/dodo_money.png": "babfa218f68919f1fd2e3de9c5a12c84",
"assets/assets/images/download_file.png": "04da6e807dd60d134849b3f66d9f7943",
"assets/assets/images/download_file1.png": "04da6e807dd60d134849b3f66d9f7943",
"assets/assets/images/earn_bonus.png": "17c8efe34a95b59d0e91dea84e99b8c8",
"assets/assets/images/edit_button_basket.png": "545dc6725f4b49f2fe229e1fc3ae0ffa",
"assets/assets/images/edit_icon.png": "be3b2cd709fd80d1fa9d307c25b9f952",
"assets/assets/images/email_verified.png": "af849685fbbe4109460addfbbdb8663a",
"assets/assets/images/engage_coming_soon.png": "0f6446d6fe2708254b21e70336b9e028",
"assets/assets/images/enter_contest_code.png": "f284f843985687c33eb06d25d5bd6fe3",
"assets/assets/images/error1.png": "4f8ad61695fc93050e5d70474bdbb94b",
"assets/assets/images/fav_grey.png": "471faf351974fe9b322539f1ccf616b6",
"assets/assets/images/flash.png": "b94342a258189f10b6a5b46d97c221b8",
"assets/assets/images/free_SC.png": "503d21f6156d2d8d56121b78795f61a2",
"assets/assets/images/green_arrow_up.png": "47d8ced098bcbd4e688fcbb9b1bb1053",
"assets/assets/images/guid_bg_1.png": "5f06595bd4a345de7579314f5c415dc5",
"assets/assets/images/guid_bg_2.png": "6db9d9ab035dbbef054cab091141df58",
"assets/assets/images/guid_bg_3.png": "90076666eaba11b022598049d1be59bf",
"assets/assets/images/guid_bg_4.png": "5512e21c122585a0a1fbba89a8e40b07",
"assets/assets/images/guid_bg_5.png": "e7d36ac67e94a9cab32c6da03b9a2f4b",
"assets/assets/images/guid_bg_6.png": "d32de3ccb3ca95e70ebad9f0656e8f88",
"assets/assets/images/guid_bg_7.png": "e7d36ac67e94a9cab32c6da03b9a2f4b",
"assets/assets/images/guid_duck_1.png": "7cce894d7333d2ac35635b63b941a70b",
"assets/assets/images/guid_duck_2.png": "4083cede8ac057d43cf4638b9718948b",
"assets/assets/images/guid_hand.png": "bbab6c966b2bc8de6793857085591dd1",
"assets/assets/images/hand.png": "e312b9a9c31ba7edbe4483037fcd096c",
"assets/assets/images/hand_rotated.png": "ba5fbf0639e2480cc1ad6f9af1d91da7",
"assets/assets/images/hosted.png": "da3fbf88a514be430d56ec89c8b9c610",
"assets/assets/images/host_contest_banner.png": "82d184dea56fac804133778a2bfc6938",
"assets/assets/images/icon_calendar.png": "d3f7efcedc895d0fe4e43447b92de1de",
"assets/assets/images/icon_time.png": "08866a07f36d3239cdf85a2c78bf1e8d",
"assets/assets/images/ic_close.png": "f5b82a88f9f5450fa8e737060f28b262",
"assets/assets/images/ic_search.png": "9e619a547ebc547e96fc86cc1a78489e",
"assets/assets/images/img_add_button.png": "c7371d20686034fa0b0f664e329091cf",
"assets/assets/images/img_add_post.png": "6ce178ca47444a593dd08d7b220e9538",
"assets/assets/images/img_add_user.png": "a5fbf20f85c5116b75a0ed1202d7006c",
"assets/assets/images/img_arrow_down.png": "3f37313d7086bc9b6e6f0411d0dca88b",
"assets/assets/images/img_back.png": "95b9333af6ba9ab3860a01709b91c170",
"assets/assets/images/img_badge_flag.png": "6930c7e5a17a5e37d7aa2a1da60715d5",
"assets/assets/images/img_badge_one.png": "b69a76ebe114fb9f10a8855638983f99",
"assets/assets/images/img_badge_three.png": "e38d44fe40398d963c683afe4b4d049a",
"assets/assets/images/img_badge_two.png": "23d2c71d5301be0e3947de5b96ec7d49",
"assets/assets/images/img_bell.png": "6141fef2a4d1107fff47ac75a8f9d0db",
"assets/assets/images/img_calendar.png": "8a0b346c1995f366cbd58f4b626e6342",
"assets/assets/images/img_cancel_button.png": "fe83c4b185e7d14262a4125236a9c867",
"assets/assets/images/img_cash_payment.png": "2e715e44fdf3dd16ac9519a68485c5d5",
"assets/assets/images/img_chat_send.png": "20fbbce45d2ea6fd5dd01cad4009de04",
"assets/assets/images/img_comment.png": "bf449830bd85cff7954c91a998486d67",
"assets/assets/images/img_commodity.png": "bd65122d37cd06d3352468b6e6ff76bf",
"assets/assets/images/img_connect.png": "b188c3faf19e1f90130db566583ab03f",
"assets/assets/images/img_copy.png": "dcb8eb2f3046d57a423c8d6bd5a758aa",
"assets/assets/images/img_coupon_code.png": "8c890d43b58c509007025191558dd703",
"assets/assets/images/img_crown.png": "4fe05323bff2341f387ddfb940fe96c5",
"assets/assets/images/img_cryprocurrency.png": "cc9611a7ca634d90ed127fb661ce4718",
"assets/assets/images/img_currency.png": "09634ca82713b0757b4b747f0e698621",
"assets/assets/images/img_delete.png": "23aac6d0467d26e6a22786930c2411f9",
"assets/assets/images/img_delete_button.png": "499d65126af7b7b981368e4d43c319df",
"assets/assets/images/img_dice.png": "e310028abbe5599ecbde8c4d8021cdc8",
"assets/assets/images/img_dodo_egg.png": "928af0d2467c3183c907acddf19107bb",
"assets/assets/images/img_dodo_group.png": "8836d5d39189f85c85d9955405ddd9c7",
"assets/assets/images/img_dodo_learn.png": "1f282eee052a066b1254190db05f7890",
"assets/assets/images/img_dodo_social.png": "2fb75caac113337c78cf01e7cbfdb173",
"assets/assets/images/img_drawer_acceptTC.png": "4b74b9ef757fe94ce01ca24882ee2a95",
"assets/assets/images/img_drawer_heading.png": "e367d16d0f4d7e6a6ed58948d5e0e35b",
"assets/assets/images/img_drawer_help.png": "1c1388e30c57522164fb4de94a513098",
"assets/assets/images/img_drawer_how_to.png": "a5ee4a8eec2ab1c942985e4627d4c4df",
"assets/assets/images/img_drawer_info.png": "8aba24a6d1a691814260bb1c7bab5539",
"assets/assets/images/img_drawer_leaderboard.png": "bf71953eba9378ca573e314a78398718",
"assets/assets/images/img_drawer_logout.png": "8e032aafc242fe9682766b43f6e1e5af",
"assets/assets/images/img_drawer_refer.png": "8304a7029a662f83a25af0bbcfc14e7c",
"assets/assets/images/img_drawer_user.png": "9019b32c2be29a250a9aa6242eafd4d9",
"assets/assets/images/img_drawer_watch_list.png": "359e19adea39e7246657e0779dcbe654",
"assets/assets/images/img_duck.png": "f31df507e28f7fb5bbdc422c5493733f",
"assets/assets/images/img_duck_expert.png": "100d7c293591f59b819f6c6a02c84956",
"assets/assets/images/img_duck_intermidiate.png": "eae9a448eead7d75bc22a2e2d5858ee3",
"assets/assets/images/img_engage.png": "c5b1e21765eab07c14f45305352c8a38",
"assets/assets/images/img_equity.png": "3906cd78a0808aca22b418d9a31da9cd",
"assets/assets/images/img_equity_colored.png": "5d63caa409b0bcd28176cd2308265fdf",
"assets/assets/images/img_error.png": "2206af1383d9c0f0fbbe437225c61b49",
"assets/assets/images/img_facebook.png": "086ae6a3131afe6104a0a7a7cc231204",
"assets/assets/images/img_google.png": "df41bd3e7e0cbc24deb3c6eacfffea34",
"assets/assets/images/img_group.png": "d6f91cb122c90578f3ab7caffb34a501",
"assets/assets/images/img_idea.png": "92a1464c9fb32831166b219390d5109f",
"assets/assets/images/img_info_button.png": "cfe87855ccc4adbb4902eddb2c13af5b",
"assets/assets/images/img_leaders.png": "9dd5e52f96eb957c00bf975da9dffc57",
"assets/assets/images/img_learn.png": "1d6c09dc99d2ef3da096efaaa77182b5",
"assets/assets/images/img_linkedin.png": "06a047a43fd3962a57d5ad90b8fd7a73",
"assets/assets/images/img_login_back.png": "390322c77c8e12feb1e81e6daabc3484",
"assets/assets/images/img_medal.png": "3cd71a6fb4dc26954bea4de85f2c307b",
"assets/assets/images/img_medium_header.png": "165e96aabc00be86f7189224ae3e4d28",
"assets/assets/images/img_menu.png": "d6e37626549da244b12d022bef1d5b42",
"assets/assets/images/img_noti_play.png": "f3e2d80e08fabd226efff09ffab550fc",
"assets/assets/images/img_noti_profile.png": "447ce38d4264b15fc841b1b424fc5ccc",
"assets/assets/images/img_payment_success.png": "74b47431cb525935a1329a18475afff4",
"assets/assets/images/img_play_button.png": "34618666a2c34e73a04d51cb50cc3bb0",
"assets/assets/images/img_play_button_without_shadow1.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/img_point_star.png": "ec7949b7e8e459c5dc6c0a16df7a057e",
"assets/assets/images/img_price_trophy.png": "51143cb83cc3e60b3c1b881bf3489838",
"assets/assets/images/img_profile_point.png": "d697b8600d8d31c484981a4bc196f911",
"assets/assets/images/img_promotional.png": "824e3985f5cb3ae9cd537666f66d17ae",
"assets/assets/images/img_recent_transactions.png": "b8646dbdc256746b3dadfb0a73e2ddfd",
"assets/assets/images/img_refer_top.png": "20759d9bbf53d9fe247ed461e46c2919",
"assets/assets/images/img_right_arrow.png": "9b95e754d4a9216f965ca13712114ac4",
"assets/assets/images/img_rocket.png": "0841cc0723aad716b6a0caf2d2208052",
"assets/assets/images/img_send_email1.png": "174bd7ed992d7de270895fbbc71392ff",
"assets/assets/images/img_setting.png": "d5fa5e055c2224c6c7014d5097ae5df2",
"assets/assets/images/img_small_header.png": "604f687226dc9f194e26fd0c43379af9",
"assets/assets/images/img_smile.png": "5acc0480c8a6e301779f61db46684987",
"assets/assets/images/img_social_badge.png": "2c74d37ee0080faf48d88569ef276913",
"assets/assets/images/img_stockydodo_small.png": "ce8b002598eb2b173f7012e4217a9587",
"assets/assets/images/img_stocky_dodo.png": "7f00360d558cd670c9eb911e82cfb513",
"assets/assets/images/img_stocky_text.png": "69b68bee1383b771e7edbb6715cdf597",
"assets/assets/images/img_thums_like.png": "8d124691f5213989adc2c8663311e4f0",
"assets/assets/images/img_thums_unlike.png": "140708ce300c239741985970de7445a6",
"assets/assets/images/img_transactional.png": "4a95f6eb98de6deaa3a852395f2726e8",
"assets/assets/images/img_twitter.png": "f4c0d8208098c7bff23967ab7ae55b86",
"assets/assets/images/img_unselected_item.png": "bee49679e5e063d601f9c0e95ead0ab6",
"assets/assets/images/img_upload.png": "d31cb443882882dd35f0cc15ad3e6b3e",
"assets/assets/images/img_user.png": "128044fc82269b5f5f331d15a77ef466",
"assets/assets/images/img_user_added.png": "7748d6781da73a86973f9c07e5476113",
"assets/assets/images/img_wallet.png": "a43e683674d366bc616cff23391c5cf1",
"assets/assets/images/img_wallet_colored.png": "bb8cbcdf502462fb4ae1d736d3945335",
"assets/assets/images/img_wallet_money.png": "850ed9e2c28d9f41becacf645fa7c5c1",
"assets/assets/images/inactive_coupon.png": "fdcd6819e82bc979c5816b4ca75a59ab",
"assets/assets/images/infoAlloc.png": "4bd0f8f03bb58b9e6a29ecbe493d15ff",
"assets/assets/images/intro_one.png": "c6aa0b1652facbe3ce47619af5cbae5b",
"assets/assets/images/Intro_play_screen.png": "9ffb53a435ffa824b34f472569ad33ed",
"assets/assets/images/Intro_screen_engage1.png": "51f308031fad857897343c4714c26f75",
"assets/assets/images/Intro_screen_learn.png": "dfdf34e690bdf8079f2f6418de3060ba",
"assets/assets/images/intro_three.png": "1d51005d385279c12428cfa740132d5f",
"assets/assets/images/intro_two.png": "800c7b51d9799625378fdfa7601ed021",
"assets/assets/images/level-up.png": "ae7ba2cc0f3bb2949b6113808614e30d",
"assets/assets/images/level_bg_img.png": "03afd67f0f6a14f62401bff87919a68e",
"assets/assets/images/like_filled@120dpi.png": "0a79c9f18833b33334cced0d6a3b6098",
"assets/assets/images/like_filled_purple@120dpi.png": "4ab519b29f07d495365f5590a754f37d",
"assets/assets/images/logout.png": "f408c7962b066fb9b184d6ce274b3bf6",
"assets/assets/images/logo_name_2x.png": "53b613d13084b9813850135be47193c0",
"assets/assets/images/message.png": "34f6b29a4084cdbdb1f66b85f0400a68",
"assets/assets/images/mIcon.png": "e55b0ccc42bd0a0a2109d2ef53e694f1",
"assets/assets/images/my-basket.png": "f5c8999c06343df215c753a3204b061d",
"assets/assets/images/my-contest-trophy.png": "21720169e8cb3402bebfd83f5ec3084e",
"assets/assets/images/my-library.png": "298348a98d04336e707f9a412545d54f",
"assets/assets/images/need_break.png": "92230d8c43c35769422601a3dba5ebe9",
"assets/assets/images/pan_verified.png": "93abab9d67ac877ea1b5cd71663c498c",
"assets/assets/images/payment_success_new.png": "5e4d35302ff7dcaed9177d2b993e879c",
"assets/assets/images/pdf.png": "49d4041b8e7e375f3e2950a9738bc59b",
"assets/assets/images/pending_button.png": "026b917ef4b76ea3a79c0eaccaf30b62",
"assets/assets/images/pending_payment.png": "a2282330021695d1f3d694379bce07a5",
"assets/assets/images/percentage.png": "849f78e7e2f7198c9b8f074fca1b8d30",
"assets/assets/images/pie_chart.png": "db41c8a272dc4112227108a3a18eff2e",
"assets/assets/images/play-contest-remote.png": "295d9e6706df7ba629fc98dae48d57d6",
"assets/assets/images/play_now_icon.png": "1bcbf85cbee0b1fa33207fbe4d58c54e",
"assets/assets/images/plus_button.png": "b92f2ef52534b97486155bbeb7392bfa",
"assets/assets/images/powerup_new.png": "aede312c6d48d5fdfcff320b74a490ca",
"assets/assets/images/powerx/100x.png": "047b48990a52d81b44144d65e9fbdcc2",
"assets/assets/images/powerx/10x.png": "a628727fe9001a2af681c88740f51aa0",
"assets/assets/images/powerx/15mins.PNG": "ea14db5563e3af2c6d02b1adaf1eeba5",
"assets/assets/images/powerx/20x.png": "43e16eea636e5e301b34549e0216ab77",
"assets/assets/images/powerx/250x.png": "59e90fc5e09dae39948790f591267070",
"assets/assets/images/powerx/25x.png": "f5e12a9f8518bef27d75a1cf65c5a9ee",
"assets/assets/images/powerx/30mins.PNG": "844f11a891c51682d6754cfa04f75cf4",
"assets/assets/images/powerx/30x.png": "4acdff36ec05a04e811e4f533f825efe",
"assets/assets/images/powerx/500x.png": "8adfb341496740a2edf017a28c13a95a",
"assets/assets/images/powerx/50x.png": "816d4a4e3e744198530cbfa3e22ab0d5",
"assets/assets/images/powerx/5mins.PNG": "299355d3f46b879207f35da60d60a74f",
"assets/assets/images/power_up.png": "3e3591c4657dfbf376f3af87b2d30d14",
"assets/assets/images/prize.png": "6ab35034b596db5a1f21c6c7e1ece0c7",
"assets/assets/images/proceed_order.png": "ef6e331ac87a1842e32159b0edb18c9d",
"assets/assets/images/profile_change_img.png": "59c3ae102bf6310351f58f5668b9e448",
"assets/assets/images/questionmark.png": "f8ec9241236fe7c6b860900152cc2aa8",
"assets/assets/images/rank_crown.png": "02967b8688f3bb2a749489a09a103d8a",
"assets/assets/images/RecentGame.png": "312ba5027c646bf4a0b6498981121be2",
"assets/assets/images/rectangle.png": "95d811609f9e11eec2db47eb79f8adc2",
"assets/assets/images/redCard.png": "21fc9f3491dde9fcd279006c2fc50e7f",
"assets/assets/images/redCardSmall.png": "8a40bc82f40a35401acb90d4c00d7d86",
"assets/assets/images/redScratchCard.png": "39a638313fc661e963c0d528590dbafc",
"assets/assets/images/redstrip.png": "a0d1ea4bc5c6aca5dfe1cd43a335999c",
"assets/assets/images/redStrip.svg": "7666a8994fc9a1bc02a4fb2178550ed4",
"assets/assets/images/red_arrow_down.png": "15fb99ed54a377d512d6bfb795e39008",
"assets/assets/images/red_scratch_card.png": "b142247c4a24f2610d3061d777bab490",
"assets/assets/images/red_time.png": "ed58b9b790c18c20f93e406df130c6a1",
"assets/assets/images/refer-earn.png": "7d713fd6117c9e603deab065e1215c5c",
"assets/assets/images/referGift.png": "b27b8df86eb6c1d82b5baecce0783ac2",
"assets/assets/images/refer_gift.png": "b27b8df86eb6c1d82b5baecce0783ac2",
"assets/assets/images/remove.png": "5a5ed85f2016b75006b1c9b917972871",
"assets/assets/images/remove_asset.png": "f23fef94ccd38bb90da859426bb9ddb1",
"assets/assets/images/repeat.png": "2f204210e87f02cce4aefd2999cdacbb",
"assets/assets/images/rewardWallet.png": "1366173153b1d2565e4e35bdfbf831df",
"assets/assets/images/reward_wallet.png": "173094122f908ef3b994ee110f74f51b",
"assets/assets/images/RScratchCard.png": "3ff501be27c18180a2aa4c37f810a8b6",
"assets/assets/images/rs_symbol.png": "b24bb3d4c02485a8fb56751ae52e821c",
"assets/assets/images/SavedPortfolio.png": "354cc51dc5ca98da5857db792eb61eb4",
"assets/assets/images/saved_portfolio_bg1.png": "446e39b3c7c74ed7e38009fddc051be7",
"assets/assets/images/scratch-card.png": "19c46919a7b18ec75b6e8cf59af7180c",
"assets/assets/images/SearchAssetsError.png": "e4fc987a5410fa0f61e3fd84c9e09348",
"assets/assets/images/security.png": "b7bfd6d8d9b6d1535d938d8061f9dd3b",
"assets/assets/images/share.png": "a91ba93b45c4753602cbf6768d6fa980",
"assets/assets/images/shareCoupon.png": "b75c44d0121651c974655747b93f5fb6",
"assets/assets/images/snake-ladder.png": "4725713a3c0bf5c87e21ebda18afb8d0",
"assets/assets/images/snake-ladder1.png": "659941998af6145e9dafaae695620489",
"assets/assets/images/sort.png": "b22f7a755dbe69e49bb3344919e0bb3c",
"assets/assets/images/sort_asc.png": "68e5e6f1a0dd14b0f641c98764f2cd40",
"assets/assets/images/sort_desc.png": "7fe38b31716207beedfe6f5f63839b13",
"assets/assets/images/special_coupon.png": "3292a081af823eb7f2eea85ede641bc7",
"assets/assets/images/splash_logo.png": "f6ad052224ff5640bea1698774ee2334",
"assets/assets/images/Star.png": "957376ca9090bea9d0498469b6fd0343",
"assets/assets/images/starMedal.png": "98771d10c970cb129414d123ee3be078",
"assets/assets/images/stocky_dodo_logo.png": "dad14550d301aac13bc19c6e87ea0b81",
"assets/assets/images/successfully_added.png": "d6f051d43ee5c6da39d764fcfd9fbe6e",
"assets/assets/images/suspend_account.png": "2206af1383d9c0f0fbbe437225c61b49",
"assets/assets/images/thumbnail.png": "9f1e3be6f07d6295d094a13a3eeda221",
"assets/assets/images/time.png": "61310b39133ad5efd17e34d3df2b7812",
"assets/assets/images/trade.png": "dd9a9aa66d6fe640b3ebae8dd804eafc",
"assets/assets/images/tradepack_new.png": "c5338f42b9b8d107a4227a6218c991ff",
"assets/assets/images/trading_pack.png": "e2a20a8957127615ef811e9e1df6be25",
"assets/assets/images/trophy.png": "9c223fb98e826fcaf339f76d8ce86d22",
"assets/assets/images/watchlist_add2x.png": "cca2c2145578d6cefb41b206825eac55",
"assets/assets/images/watchlist_added2x.png": "02e483f392a9df0b4ab8ab57bc3cc5ce",
"assets/assets/images/winner.png": "e0c57bb132caedc6182a93c13559e9dd",
"assets/assets/images/winner_card_background.png": "53c83ecda658022aac72afd402585794",
"assets/assets/images/winning_share_card.png": "859554419e3deb700255585acbe84c90",
"assets/assets/images/XPPoints.svg": "3293ce5517174dc2a59d42e7a3dc421f",
"assets/assets/images/yellowCard.png": "50765b6f505bfc1cd91c2be18a8986c5",
"assets/assets/images/yellowCardSmall.png": "230aa463d97afb89a051f62f09228495",
"assets/assets/images/yellowScratchCard.png": "f6a75b3789657e151b17f4ef8fb4de31",
"assets/assets/images/yellowstrip.png": "44db0b2433444e4f400e2aa05ee7270a",
"assets/assets/images/yellowStrip.svg": "4cb10684127f69e29b463797b408b06f",
"assets/assets/images/yellow_scratch_card.png": "9eaf10f56333dbbfd3faeb509d9962d5",
"assets/assets/images/YScratchCard.png": "1f8147b8167040a3949063018db88671",
"assets/assets/img_add_user.png": "a5fbf20f85c5116b75a0ed1202d7006c",
"assets/assets/inactive_coupon.png": "fdcd6819e82bc979c5816b4ca75a59ab",
"assets/assets/index_icons/All%2520stars.png": "a1f1364ddb9fd68322679a77132929a8",
"assets/assets/index_icons/Auto.png": "8dcc86b82cff04828d2ad2fc88739fe5",
"assets/assets/index_icons/Bank+.png": "9a659031c0dac7afd991d9453997fda2",
"assets/assets/index_icons/Consumer.png": "28569273727bba2fd1f17df6ed22e20d",
"assets/assets/index_icons/Cyber%2520security.png": "42a83a9bd0117d1fcafcdbedbe57877e",
"assets/assets/index_icons/Emerging.png": "5a40bfa8bb06e42dde5bc98a68842430",
"assets/assets/index_icons/Fmcg.png": "80754822a2feeab8f5245a1cfa2f1558",
"assets/assets/index_icons/Healthcare%2520and%2520pharma.png": "efd2e849874af8b99f71fe14f8d50781",
"assets/assets/index_icons/Heavyweight.png": "18afede7a867836d6f74bdae537127db",
"assets/assets/index_icons/Innovation.png": "f3ca61ec38e9030dc08753bb95db53b6",
"assets/assets/index_icons/Internet.png": "85b43642e77085cd50d82d3d40fe799a",
"assets/assets/index_icons/IT%2520and%2520Digital%2520.png": "c5073bf60590b9fe619ac62d152649ff",
"assets/assets/index_icons/Lifestyle.png": "42e70691cc418920ebfc1b392ac40477",
"assets/assets/index_icons/Metals.png": "d4ea654c989628725e6530c66471e7a4",
"assets/assets/index_icons/Mixed.png": "54d69988d30afaa7174e814d6fbfa697",
"assets/assets/index_icons/Oil%2520and%2520gas.png": "c947979e17785dba1ce3506956d47c77",
"assets/assets/index_icons/Semi%2520conductor.png": "ba5a3be7513a18ef2ecfdd68adc7df85",
"assets/assets/index_icons/Top%252025.png": "e24daf8b137a700566643afce02e03cb",
"assets/assets/index_icons/Top%252050.png": "c9163e804d4f23b7513a486e01b8e504",
"assets/assets/index_icons/Travel.png": "c27d5a843bfb9dccae308261e249c6af",
"assets/assets/json/1.mp4.lottie.json": "c0f0e9bff3d569b6157cb3e1dd15e454",
"assets/assets/json/breadcrumb.json": "56cb4a1072f90b8b7c8ecd5586a4a5ab",
"assets/assets/json/breadcrumbanimation.json": "fd5e5956e67dfe95b6f64ebd36947e21",
"assets/assets/json/fillingfast.json": "c737dec7dd8a812ee30874a75233c0cc",
"assets/assets/json/purple.json": "d06dc0d583b4165ffa342ab10c9aa13b",
"assets/assets/json/registration_video.json": "7b83b550264d29a971b4894361a9de25",
"assets/assets/json/spin_wheel.json": "8e25f8db0d2458fc73f6a224519134e7",
"assets/assets/json/walletIcon.json": "3dd019d61e86a87e3f1dd3a8322b615b",
"assets/assets/learn/new/1x/Asset%25203-1%2520Asset%25202.png": "2f17d656edf9d685ef9bd0314a911560",
"assets/assets/learn/new/1x/Asset%25208-1%2520Asset%25201.png": "a2fb50db9f3e12339ad7f1d59dab5d1b",
"assets/assets/learn/new/2x/Asset%252011-1%2520Asset%25202.png": "58704bc50b5e2bcb2c44e2b6f9b36c90",
"assets/assets/learn/new/2x/Asset%252015-1%2520Asset%25202.png": "37c471dd1af31729a52f8bdce0f3435c",
"assets/assets/learn/new/2x/Asset%25203-1%2520Asset%25202.png": "f7a5c4bf9bf80b57ff33456a4f1ac428",
"assets/assets/learn/new/2x/Asset%25207-1%2520Asset%25203.png": "c45495e1fd9812919767bd651b247472",
"assets/assets/learn/new/3x/Asset%252013-1%2520Asset%25203.png": "484947e3c1c7258433d8ef0a3b714d1b",
"assets/assets/learn/new/3x/Asset%252017-1%2520Asset%25203.png": "6676d4e2604cac38a451f4360e466a04",
"assets/assets/learn/new/3x/Asset%25202-1%2520Asset%25203.png": "f7594ff74d8a383643b25fc34263e151",
"assets/assets/learn/new/3x/Asset%25208-1%2520Asset%25203.png": "14f135d1e44760cb5151603f42eac3f5",
"assets/assets/learn/new/3x/Group-1%2520Asset%25203.png": "720b4d2aa3ef1566ac514109f2a69c98",
"assets/assets/learn/new/dodo1_1x.png": "15c4d6206747048fdaddc57b8dce4b44",
"assets/assets/learn/new/dodo1_2x.png": "3e258383b9c6d70060c53cca3faa770a",
"assets/assets/learn/new/dodo1_3x.png": "d48f1e9d229c3b3cfde1179eb0a2bb69",
"assets/assets/learn/new/dodo2_1x.png": "c404b732d48b5a8aba8a2426ea71f3e5",
"assets/assets/learn/new/dodo2_2x.png": "3455ba337f4d494efca17f684a9ecf25",
"assets/assets/learn/new/dodo2_3x.png": "5a54c6bff7e10770eedca917e90c0f06",
"assets/assets/learn/new/dodo3_1x.png": "dc20e6ca6ea0e624031f4ebf12280480",
"assets/assets/learn/new/dodo3_2x.png": "cdba8ed797e8ad8def1259fffc7cac8b",
"assets/assets/learn/new/dodo3_3x.png": "c10de692022db6a3208bd61325226ab6",
"assets/assets/learn/new/play_button.png": "e0c5f737ca5c366e0fb5cc83fdd3a467",
"assets/assets/learn/new/video_done.png": "016552427cbb32c8172ac31f15559339",
"assets/assets/learn/new1x.png": "e7f736cfd86e99ad24c583842c5e0d28",
"assets/assets/learn/partial_watched.png": "9a5390683d79511f9235d5ba337daa84",
"assets/assets/learn/total_watched.png": "016552427cbb32c8172ac31f15559339",
"assets/assets/learn/video_image.png": "b8bb173987c4264d1809b98d89eb6911",
"assets/assets/svgs/arrowDown.svg": "ba4a3d7ba764f9c16c6e41c873ca52fb",
"assets/assets/svgs/arrowUp.svg": "95e93b1fd35f6d3a3c43c149cc8bdeb0",
"assets/assets/svgs/arrow_down.svg": "dad3ec792258ef4363b0791f449d1243",
"assets/assets/svgs/arrow_up.svg": "35747f3e7487332c022e240399e19765",
"assets/assets/svgs/a_to_z.svg": "b629ef100896c7fc7a115d3ccb2715cc",
"assets/assets/svgs/better_luck.svg": "4326f5a43a24ce8383d02539f071b50d",
"assets/assets/svgs/BlueCardSmall.svg": "97076be39f70628168521c726239a72a",
"assets/assets/svgs/blueSCTick.svg": "bdc44fa925903adf9bdb1febae09578e",
"assets/assets/svgs/bonus_applied_coupon.svg": "54c1d81dd0d8cb66de5a97cc117063a6",
"assets/assets/svgs/cashBonus.svg": "9a9fd9ac70d20eab3b9b4bf127e9ac60",
"assets/assets/svgs/cashDeposit.svg": "e989a9539550f3d12570e1f45853e2fd",
"assets/assets/svgs/cash_bonus.svg": "fd81c7d4ec8cd9c8b6fcdb1d5cc768d0",
"assets/assets/svgs/correct.svg": "98c88b18f13b90eaaae68bdb0c890a7f",
"assets/assets/svgs/coupon.svg": "5fb8385710561fc18b2826530650e7ec",
"assets/assets/svgs/discount_level_up.svg": "9e9da95e10401bcc1a08676ae7976ac5",
"assets/assets/svgs/dodo_progress.svg": "a64ea411167ebfc636a4e0453d38830c",
"assets/assets/svgs/dodo_progress_up.svg": "2cd5defc8ad73f72c3b679d453d87a43",
"assets/assets/svgs/done.svg": "f5a9d42eea7c39640c602eabf19c5dd3",
"assets/assets/svgs/down_arrow.svg": "aa1097b46cfa5d52796a1017c3c290a2",
"assets/assets/svgs/earn_bonus.svg": "0a484f555051286e0a5c7050ae3e2d52",
"assets/assets/svgs/flexicon11.svg": "04bf9adeeebcfb852b5277689db4eef2",
"assets/assets/svgs/free_sc.svg": "b2474f82b173ab4fb0a7979cacfec3d7",
"assets/assets/svgs/info.svg": "fac756da933d9cf4e7192dff9644acc1",
"assets/assets/svgs/level_up.svg": "ff60cf7b22bec596311dbe3d06b8cd96",
"assets/assets/svgs/level_up_arrow.svg": "842b695824bc97f973df3fad08c9a6ff",
"assets/assets/svgs/minspicon.svg": "205a9116256ea07cddae2b31b305d431",
"assets/assets/svgs/playicon.svg": "b51695151285bd92d3b8149db0c05ebb",
"assets/assets/svgs/playing_game.svg": "a687d0497637d7537d33cf955f055ae1",
"assets/assets/svgs/play_journey.svg": "ee6bd821e0d2586fef74ab02e017aa9f",
"assets/assets/svgs/power.svg": "c9965d32e58c2c4ff3a72b9fc4193580",
"assets/assets/svgs/pressIcon.svg": "57bf7b8d1a291b94c2568db7d13e73c9",
"assets/assets/svgs/redSCTick.svg": "f3bf8029cfbc973ccaf5ed31e696339b",
"assets/assets/svgs/referGift.svg": "ee6bd821e0d2586fef74ab02e017aa9f",
"assets/assets/svgs/remove_icon.svg": "ac07d246c20fb4f7f7049405f8dfb80f",
"assets/assets/svgs/rupee.svg": "f2e2bb995a82e47a4322a1ed765dc00d",
"assets/assets/svgs/Scratch%2520Card%2520Blue.svg": "5ca669d2abb10c6c393714ab55445426",
"assets/assets/svgs/share.svg": "b2e576f7a1d3820c47acc46b8734af92",
"assets/assets/svgs/sort_a_to_z.svg": "b629ef100896c7fc7a115d3ccb2715cc",
"assets/assets/svgs/splash/1.png": "2e5c7c02aa032d01943a5d6bfdfdad9c",
"assets/assets/svgs/splash/1s.svg": "d4c3e4273b2d64038b2b6d34de51ad6d",
"assets/assets/svgs/splash/2.png": "4a1aca3231a431ccd03ae1b7bed67d9e",
"assets/assets/svgs/splash/2s.svg": "e3db18a7a756aa8d3a725d4b35a9f49e",
"assets/assets/svgs/splash/3.png": "880b0b739148b0eae8330b12e907f879",
"assets/assets/svgs/splash/3s.svg": "951d9e66a955a24695bf26bb46a56236",
"assets/assets/svgs/tick.svg": "9ecb28bd1be84495cb69cf9130347a5f",
"assets/assets/svgs/trade.svg": "088898c7aa71ec2ead2843c6fe191033",
"assets/assets/svgs/trophy.svg": "dc9274c9380e1e2a8c27d81acf57dd5b",
"assets/assets/svgs/up_arrow.svg": "c9f92876a1df40f493e73b958b973159",
"assets/assets/svgs/winner_trophy.svg": "5a13534d863d3bbe4a62e14267e39e06",
"assets/assets/svgs/winning_share_card.svg": "54b220f75ef779ec48795c6a298e52d4",
"assets/assets/svgs/XPPoints.svg": "610f0a9ddd155b8c575e913e46eb62c0",
"assets/assets/svgs/yellowSCTick.svg": "382a6382cb6b5af8ed9f44a4facfef46",
"assets/assets/svgs/z_to_a.svg": "3730c1fbedf4213fa710224f1e16f863",
"assets/assets/tabview2x.png": "37802a295ccb26fe14e844bb9ce0ddbd",
"assets/assets/test_video_back.png": "aee0fe1f0e2b6a638106013ca7dfc149",
"assets/assets/video/dummy.mp4": "ef657b7b54fd9d3a2feb7a3b0994462d",
"assets/assets/video/winner_animation.mp4": "5bd5fd0695cd9f50aa6248667d1dfb53",
"assets/FontManifest.json": "beac74a686d73e3b9496e6898dc689a3",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "faceafe18ddbed5b423cfc0877da2b69",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_player.js": "ab009562c726b262f996cb55447ef32a",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"assets/packages/flutter_sound_web/js/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"assets/packages/flutter_sound_web/js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4de9108d797ff0b203dc2ac5170a9d74",
"/": "4de9108d797ff0b203dc2ac5170a9d74",
"main.dart.js": "dbe53012d37fcbef5ad3d0bd9c8e21fb",
"manifest.json": "c42d966ca58831323207e9fc5f094eb6",
"version.json": "4a8a81f4aced810cedbf7c11179c7f5a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
