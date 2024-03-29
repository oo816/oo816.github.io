/**
 * 播放列表
 * @type {Array}
 * 请用数组来定义总列表
 * 再用二维数组定义每个列表
 * 其中列表里的每首歌需用对象定义
 * 请在每个列表中的第一个元素定义列表信息（必须位于第一位）
 * 列表信息必须有一个basic属性，值为true
 * 还要有一个name属性，值为列表名称
 * 可选参数为singer、image，用于为定义的该属性的歌曲调用
 * 每首歌必须有name、src、lrc三个属性
 * src为歌曲相对于index.html的相对路径或绝对路径
 * 可选singer和image属性
 * 在每首歌没有定义singer或image时将使用列表的singer或image
 * 请确保一定有一个被定义
 * 其中name为歌曲名称
 * src为歌曲文件路径
 * lrc为歌词，请用\n或\r将每行歌词隔开，否则无法识别
 */
var mplayer_song = [[
	{
		"basic":true,
		"name":"我喜歡",
		"singer":"UnKnown",
		"img":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000CK5xN3yZDJt.jpg"
	},
	{
		"name":"说好不哭",
		"singer":"周杰伦",
		"img":"https://pic.xiami.net/images/album/img60/1260/21052338441568634080.jpg",
		"src":"http://app.pd.nf.migu.cn/MIGUM2.0/v1.0/content/sub/listenSong.do?toneFlag=HQ&netType=00&userId=15548614588710179085069&ua=Android_migu&version=5.1&copyrightId=0&contentId=600907000009041435&resourceType=2&channel=0",
		"lrc":"[00:03.00]作词：方文山[00:04.00]作曲：周杰伦[00:26.82]没有了联络[00:28.31]后来的生活我都是听别人说[00:33.04]说你怎么了[00:34.54]说你怎么过放不下的人是我[00:39.38]人多的时候[00:40.82]就待在角落就怕别人问起我[00:45.74]你们怎么了[00:47.14]你低着头护着我连抱怨都没有[00:51.83]电话开始躲[00:53.37]从不对我说不习惯一个人生活[00:58.31]离开我以后[00:59.71]要我好好过怕打扰想自由的我[01:04.59]都这个时候[01:05.69]你还在意着[01:07.63]别人是怎么怎么看我的[01:10.93]拼命解释着[01:12.12]不是我的错是你要走[01:15.76]眼看着你难过挽留的话却没有说[01:28.47]你会微笑放手说好不哭让我走[01:55.14]电话开始躲[01:56.53]从不对我说不习惯一个人生活[02:01.42]离开我以后[02:02.82]要我好好过怕打扰想自由的我[02:07.84]都这个时候[02:09.03]你还在意着别人是怎么怎么看我的[02:13.82]拼命解释着不是我的错是你要走[02:18.76]眼看着你难过挽留的话却没有说[02:31.48]你会微笑放手说好不哭让我走[02:53.60]你什么都没有却还为我的梦加油[03:06.02]心疼过了多久还在找理由等我"
	},
	{		
		"name":"逆流成河",
		"singer":"许靖韵",
		"img":"http://cdnmusic.migu.cn/picture/2019/0822/1756/AL9298fdd97d184c2eb2c6d04606a78b48.jpg",
		"src":"http://app.pd.nf.migu.cn/MIGUM2.0/v1.0/content/sub/listenSong.do?toneFlag=HQ&netType=00&userId=15548614588710179085069&ua=Android_migu&version=5.1&copyrightId=0&contentId=600913000004682841&resourceType=2&channel=0",
		"lrc":"[00:00.00]作词：许靖韵+陈智霖+徐继宗\r\n[00:00.07]作曲：徐继宗\r\n[00:15.05]旁人说我总是好胜还在说我很任性\r\n[00:22.18]笑我不知丑的跟你约定\r\n[00:26.62]恋上最坏本性\r\n[00:30.07]拿起勇气沉迷爱你期望现实有转机\r\n[00:37.55]手牵手与你根本不怕死\r\n[00:45.16]沿路照顾呵护纵你盲目爱到不合理\r\n[00:52.19]越过几多公里晴或雨天恳请能铭记\r\n[01:00.14]你有哪些需要得我一个才清楚\r\n[01:05.89]谁说我疯癫过程满足不必知道结果\r\n[01:15.78]在何时悲伤会逆流成河仍是深爱着你\r\n[01:23.21]命危从不退避从来不顾忌\r\n[01:26.92]相信时日过去便有转机\r\n[01:30.66]但求能死心塌地\r\n[01:33.11]任我飘泊为你生为你死仍是种福气\r\n[01:39.35]爱情高攀不到所以不舍不弃\r\n[01:59.75]无谓说我怎样好胜谈论我决不动听\r\n[02:06.89]明日去或是留留下重伤伤疤来见证\r\n[02:14.49]我这固执本性不必规劝来清醒\r\n[02:20.21]能与你疯癫有时觉得伤心可以更多\r\n[02:29.89]在何时悲伤会逆流成河仍是深爱着你\r\n[02:37.37]命危从不退避从来不顾忌\r\n[02:40.97]相信时日过去便有转机\r\n[02:44.71]但求能死心塌地\r\n[02:47.05]任我飘泊为你生为你死仍是种福气\r\n[02:53.34]别人统统不懂别来诸多歪理\r\n[03:00.79]能为你心痛能被你生气\r\n[03:08.12]难受够痛才可挥之不去难忘记\r\n[03:14.63]十年后悲伤会逆流成河沉没中爱着你\r\n[03:21.91]做场危险决定盲目的拼命\r\n[03:25.64]等你来日悔疚被你救起\r\n[03:29.33]下沉同一天与地\r\n[03:31.53]让我今世为你生为你死仍是很凄美\r\n[03:37.92]没甚么输不起但求争一口气\r\n"
	},
	{		
		"name":"存在",
		"singer":"曾樂彤",
		"img":"http://cdnmusic.migu.cn/picture/2019/0605/0900/AL9e5516a7d43f4207b24d6c9bb6539b1c.jpg",
		"src":"http://app.pd.nf.migu.cn/MIGUM2.0/v1.0/content/sub/listenSong.do?toneFlag=HQ&netType=00&userId=15548614588710179085069&ua=Android_migu&version=5.1&copyrightId=0&contentId=600913000003930983&resourceType=2&channel=0",
		"lrc":"[ti:存在] [ar:曾乐彤] [al:存在] [by:] [offset:0] [00:00.87]存在 - 曾乐彤 [00:02.19]词 : 吴奇琦 [00:02.79]曲：余曦陶 [00:02.92]编曲 : Cousin Fung/余曦陶 [00:03.15]监制 : Cousin Fung/Ronnie Ng [00:03.35]OP : EEG Music Publishing Limited [00:13.24]这旧照 永未细望过 [00:16.62]镜头里 少年同伴三几个 [00:19.91]正在笑 那人正是我 [00:22.76]似乎我 往日还活得不错 [00:26.07]懂了太少 想了太多 [00:29.18]竟挂念那天 的我能那么 [00:32.37]放肆能那么 [00:33.81]不理会结果 不会害怕闯祸 [00:38.73]这城市 永未细望过 [00:42.05]已习惯 昼夜麻木的经过 [00:45.37]试图去 证实我活过 [00:48.37]却认错 镜内那陌生的我 [00:51.60]想了太多 懂了太少 [00:54.53]当压力已逼 得你在折腰 [00:57.79]志气磨掉了 [00:59.37]一切亦习惯 得眼泪懒得掉 [01:03.76]快乐变少 信念变少 [01:06.76]再别要统统失色变调 [01:09.10]会追的美梦变少 [01:11.63]继续变少 [01:13.20]破灭到甘心苏醒过来了 [01:15.92]今天纵是 [01:17.06]幼稚不可以 像往昔那样容易 [01:21.77]这一生 只得一次 [01:23.45]为何还在怕 存在没有意思 [01:42.82]确定了 哪样最重要 [01:46.07]却又变 世俗了 又不懂了 [01:49.55]厌倦了 却又接受了 [01:52.46]笑着勉强地说 这不紧要 [01:55.35]想了太多 懂了太少 [01:58.61]舍弃掉了初衷却未算少 [02:01.87]这叫成熟 看通了 [02:04.14]或你昨天信条已改掉 [02:07.65]快乐变少 信念变少 [02:10.91]再别要统统失色变调 [02:13.14]会追的美梦变少 [02:15.62]继续变少 [02:17.18]破灭到甘心苏醒过来了 [02:19.86]今天纵是 [02:21.10]幼稚不可以 像往昔那样容易 [02:25.74]得一生 不敢一试 [02:27.49]来日才后悔 存在没有意思 [02:58.62]快乐变少 信念变少 [03:01.99]怕就要统统失色 [03:03.87]变调到心中那道烈火 [03:06.50]再没燃烧 [03:08.50]至明了抛低的竟最重要 [03:11.06]今天纵是 [03:12.26]幼稚得可以 没往昔那样容易 [03:16.90]偏偏想 偏偏可以 [03:18.57]拿来提示我 其实活过我知"	
	},
	{		
		"name":"等你爱上一个人 Demo",
		"singer":"凯特。 ",
		"img":"http://p1.music.126.net/mrGVj1IvXYJ_yelYEhZLUA==/109951164072414352.jpg",
		"src":"https://qiniu-nc.clewm.net/free/d2f947fa256cc8c2f07fcc3a77c21965.mp3",
		"lrc":"[00:06.00]演唱者：许东晴[00:19.09]雨下起了[00:22.36]风它在听着[00:26.20]听见你回答说不是呢[00:34.01]你偷偷地[00:37.74]那么真实地[00:40.88]悄无声息留下你的颜色[00:48.27]一颗星还亮着[00:51.56]它是我的诚恳[00:54.82]浮浮沉沉就像一首歌[00:58.60]唱着你呢[01:02.98]说不清的眼色[01:06.08]温柔地言语呢[01:09.44]默默一直走一直走[01:12.01]回头发现只有我一个[01:16.51]我还在等你爱上一个人[01:20.33]在等你发现爱情的残忍[01:23.56]明白人生 注定难完整[01:27.63]有种脚本 叫梦不能成真[01:31.65]我还在等你爱上一个人[01:34.71]明白这到底有多笨[01:38.48]爱一个人倒不如做被爱的人[01:44.19]免得只能委屈求存[02:02.48]雨下起了[02:05.70]风它在听着[02:09.67]听见你回答说不是呢[02:17.49]你偷偷地[02:20.96]那么真实地[02:24.30]悄无声息留下你的颜色[02:31.70]一颗星还亮着[02:34.98]它是我的诚恳[02:38.30]浮浮沉沉就像一首歌[02:41.92]唱着你呢[02:46.26]说不清的眼色[02:49.54]温柔的言语呢[02:53.07]默默一直走一直走[02:55.73]回头发现只有我一个[03:00.06]我还在等你爱上一个人[03:03.44]在等你发现爱情的残忍[03:06.69]明白人生 注定难完整[03:11.02]有种脚本 叫梦不能成真[03:14.44]我还在等你爱上一个人[03:18.17]明白这到底有多笨[03:21.81]爱一个人倒不如做被爱的人[03:27.60]免得只能委屈求存[03:34.42]别等待就算错过[03:37.29]就算只有我一个人走[03:40.92]忍住泪扣上心门[03:43.84]别让自己难受[03:48.74]忘记了不再回首[03:52.71]可是歌还轻轻哼唱[03:55.78]不低头别发现我的脆弱[04:06.47]我還在等你愛上一個人[04:09.80]在等你發現愛情的殘忍[04:14.19]明白人生 注定難完整[04:17.25]有種腳本 叫夢不能成真[04:20.94]我還在等你愛上一個人[04:24.42]明白这到底有多笨[04:28.10]爱一个人倒不如做被爱的人[04:33.86]免得只能委屈求存"	
	},
	{		
		"name":"当分手以后",
		"singer":"周楚诗",
		"img":"https://ncstatic.clewm.net/free/2019/0918/17/4e9e686ffe0df0e42320136350309ab3.jpg",
		"src":"https://qiniu-nc.clewm.net/free/5b140d442d95cfd4ef3b7d6cc4f2569e.MP3",
		"lrc":"[00:03.09]當我和你[00:05.09]愛到了盡頭[00:06.89]在分叉的路口[00:09.91]我不配[00:11.96]得到問候[00:14.02]你再也不回頭[00:17.08]但謝謝你[00:19.21]給了我自由[00:21.45]讓我勇敢向前走[00:26.81]驀然回首[00:28.83]我們擁抱過[00:31.74]就足夠"			
	
	},
	{		
		"name":"回憶碎片",
		"singer":"袁天恩 Dorothy Yuen",
		"img":"https://ncstatic.clewm.net/free/2019/0918/17/467a63281eb0f48916db0ebcaacc67f4.jpg",
		"src":"https://qiniu-nc.clewm.net/free/6369a82076dd752b6cef45ce4788f620.mp3",
		"lrc":"[00:00.36]曲: 梁灝程@HBS[00:06.37]詞: 黃偉健 / HBS[00:12.66]編: Fish Lo@HBS[00:17.42]監: Fish Lo[00:25.00]是我放手過後要再等待[00:31.49]流過的眼淚說出你的愛[00:37.85]就算結果卻是要再傷害[00:44.33]而我總發現難自愛[00:50.26]這份愛可能已不再[00:56.76]也許要分開[00:59.00]卻不知怎去悔改[01:03.05]卻是你只能看開[01:07.01]傷痛已難盛載[01:10.10]絕不再講[01:13.26]值得放開[01:16.04]望見你那天[01:20.11]不知心裏面已可能變遷[01:26.31]對你仍舊掛念[01:28.78]只可以如一縷煙[01:31.75]卻不相見[01:33.30]我依然未銳變[01:36.16]痛哭難免[01:38.68]也許我此刻與你擦肩[01:46.19]失憶的邂逅已不能再演[01:52.37]然而無力地修補一遍[01:56.18]回憶碎片[01:57.60]透出光線[01:59.22]我依然想夢見[02:01.90]未可發展[02:07.30]觸碰我淚線[02:11.36]——————[02:24.42]這份愛可能已不再[02:30.80]也許要分開[02:33.09]卻不知怎去悔改[02:36.99]卻是你只能看開[02:40.95]傷痛已難盛載[02:44.18]絕不再講[02:47.69]值得放開[02:50.11]望見你那天[02:54.26]不知心裏面已可能變遷[03:00.58]對你仍舊掛念[03:02.87]只可以如一縷煙[03:05.69]卻不相見[03:07.31]我依然未銳變[03:10.34]痛哭難免[03:12.93]也許我此刻在上演[03:18.57]回憶怎可消失沒借口[03:22.50]通通都不夠[03:25.10]讓我能愛下去直到白頭[03:29.61]直到白晝[03:32.59]望見你那天[03:36.48]只知心裏面已不能變遷[03:42.92]對你還是掛念[03:45.18]只需要成一縷煙[03:47.94]每天相見[03:49.60]哪管誰在銳變[03:52.28]痛哭難免[03:54.90]也許你此刻與我發展[04:02.32]再突然發現[04:04.76]始終未看穿[04:08.49]那怕離別亦不再重要[04:12.46]重演那天[04:13.80]絕不心軟[04:15.42]那糾纏的伏線[04:18.34]尚可發展[04:23.90]講句我願意"			
	
	}
],
[
	{
		"basic":true,
		"name":"歌單2",
		"singer":"",
		"img":""
	},
	{

		"name":"",
		"src":"",
		"lrc":""
		}
],
[
	{
		"basic":true,
		"name":"歌單3",
		"singer":"",
		"img":""
	},
	{

		"name":"",
		"src":"",
		"lrc":""
		}
],
[
	{
		"basic":true,
		"name":"歌單4",
		"singer":"",
		"img":""
	},
	{

		"name":"",
		"src":"",
		"lrc":""
	}
],
[
	{
		"basic":true,
		"name":"歌單5",
		"singer":"",
		"img":""
	},
	{

		"name":"",
		"src":"",
		"lrc":""
	}	
	
]];
