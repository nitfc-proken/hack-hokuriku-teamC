import { Badge } from "@chakra-ui/react";

const suggestions = [
    // 1
    {
      image: "map-placeholder.png",
      title: "総湯 湯めどころ宇奈月",
      badge: "地元のおすすめ",
      description: "ポケモンGoでも有名です。",
    },
    // 2
    {
      image: "map-placeholder.png",
      title: "黒部市地域観光ギャラリー（黒部宇奈月温泉駅）",
      badge:"人気No.1",
      description: "ポケモンGoでも有名です。",
    },
    // 3
    {
      image: "map-placeholder.png",
      title: "道の駅KOKOくろべ",
      badge:"人気No.2",
      description: "ポケモンGoでも有名です。",
    },
    // 4
    {
      image: "map-placeholder.png",
      title: "魚津水族館",
      
      description: "ポケモンGoでも有名です。",
    },
    // 5
    {
      image: "map-placeholder.png",
      title: "立山駅",
      
      description: "ポケモンGoでも有名です。",
    },
    // 6
    {
      image: "map-placeholder.png",
      title: "富山市岩瀬エリア（北陸銀行岩瀬支店）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 7
    {
      image: "map-placeholder.png",
      title: "ますのすし本舗 源（富山駅）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 8
    {
      image: "map-placeholder.png",
      title: "富山市まちなか観光案内所",
      
      description: "ポケモンGoでも有名です。",
    },
    // 9
    {
      image: "map-placeholder.png",
      title: "日産レンタカー富山駅前店",
      
      description: "ポケモンGoでも有名です。",
    },
    // 10
    {
      image: "map-placeholder.png",
      title: "富山空港　国内線付近",
      
      description: "ポケモンGoでも有名です。",
    },
    // 11
    {
      image: "map-placeholder.png",
      title: "富山空港　国際線付近",
      
      description: "ポケモンGoでも有名です。",
    },
    // 12
    {
      image: "map-placeholder.png",
      title: "海王丸パーク",
      
      description: "ポケモンGoでも有名です。",
    },
    // 13
    {
      image: "map-placeholder.png",
      title: "新湊きっときと市場",
      
      description: "ポケモンGoでも有名です。",
    },
    // 14
    {
      image: "map-placeholder.png",
      title: "道の駅カモンパーク新湊",
      
      description: "ポケモンGoでも有名です。",
    },
    // 15
    {
      image: "map-placeholder.png",
      title: "道の駅雨晴",
      
      description: "ポケモンGoでも有名です。",
    },
    // 16
    {
      image: "map-placeholder.png",
      title: "ますのすし本舗 源（新高岡駅）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 17
    {
      image: "map-placeholder.png",
      title: "道の駅 氷見 氷見漁港場外市場 ひみ番屋街",
      
      description: "ポケモンGoでも有名です。",
    },
    // 18
    {
      image: "map-placeholder.png",
      title: "道の駅メルヘンおやべ",
      
      description: "ポケモンGoでも有名です。",
    },
    // 19
    {
      image: "map-placeholder.png",
      title: "小矢部川SA（下り）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 20
    {
      image: "map-placeholder.png",
      title: "小矢部川SA（上り）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 21
    {
      image: "map-placeholder.png",
      title: "道の駅庄川",
      
      description: "ポケモンGoでも有名です。",
    },
    // 22
    {
      image: "map-placeholder.png",
      title: "チューリップ四季彩館",
      
      description: "ポケモンGoでも有名です。",
    },
    // 23
    {
      image: "map-placeholder.png",
      title: "五箇山・相倉合掌集落",
      
      description: "ポケモンGoでも有名です。",
    },
    // 24
    {
      image: "map-placeholder.png",
      title: "イカの駅 つくモール",
      
      description: "ポケモンGoでも有名です。",
    },
    // 25
    {
      image: "map-placeholder.png",
      title: "のと里山空港",
      
      description: "ポケモンGoでも有名です。",
    },
    // 26
    {
      image: "map-placeholder.png",
      title: "近江町市場",
      
      description: "ポケモンGoでも有名です。",
    },
    // 27
    {
      image: "map-placeholder.png",
      title: "ひがし茶屋街・玉匣",
      
      description: "ポケモンGoでも有名です。",
    },
    // 28
    {
      image: "map-placeholder.png",
      title: "ひがし茶屋街・金箔屋さくだ 本店　",
      
      description: "ポケモンGoでも有名です。",
    },
    // 29
    {
      image: "map-placeholder.png",
      title: "石川県立伝統産業工芸館",
      
      description: "ポケモンGoでも有名です。",
    },
    // 30
    {
      image: "map-placeholder.png",
      title: "兼六園　桂坂料金所",
      
      description: "ポケモンGoでも有名です。",
    },
    // 31
    {
      image: "map-placeholder.png",
      title: "金沢城公園　総合案内所",
      
      description: "ポケモンGoでも有名です。",
    },
    // 32
    {
      image: "map-placeholder.png",
      title: "兼六園　真弓坂料金所",
      
      description: "ポケモンGoでも有名です。",
    },
    // 33
    {
      image: "map-placeholder.png",
      title: "金沢城公園　五十間長屋",
      
      description: "ポケモンGoでも有名です。",
    },
    // 34
    {
      image: "map-placeholder.png",
      title: "金沢21世紀美術館",
      
      description: "ポケモンGoでも有名です。",
    },
    // 35
    {
      image: "map-placeholder.png",
      title: "紙文房あらき",
      
      description: "ポケモンGoでも有名です。",
    },
    // 36
    {
      image: "map-placeholder.png",
      title: "尾山神社",
      
      description: "ポケモンGoでも有名です。",
    },
    // 37
    {
      image: "map-placeholder.png",
      title: "金沢中央観光案内所 ",
      
      description: "ポケモンGoでも有名です。",
    },
    // 38
    {
      image: "map-placeholder.png",
      title: "武家屋敷跡 野村家",
      
      description: "ポケモンGoでも有名です。",
    },
    // 39
    {
      image: "map-placeholder.png",
      title: "金沢駅観光案内所（金沢駅）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 40
    {
      image: "map-placeholder.png",
      title: "スカイ獅子吼",
      
      description: "ポケモンGoでも有名です。",
    },
    // 41
    {
      image: "map-placeholder.png",
      title: "日産レンタカー金沢駅前店",
      
      description: "ポケモンGoでも有名です。",
    },
    // 42
    {
      image: "map-placeholder.png",
      title: "北陸鉄道チケットセンター",
      
      description: "ポケモンGoでも有名です。",
    },
    // 43
    {
      image: "map-placeholder.png",
      title: "金沢港クルーズターミナル",
      
      description: "ポケモンGoでも有名です。",
    },
    // 44
    {
      image: "map-placeholder.png",
      title: "Komatsu 九（小松駅）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 45
    {
      image: "map-placeholder.png",
      title: "小松空港　レンタカーカウンター",
      
      description: "ポケモンGoでも有名です。",
    },
    // 46
    {
      image: "map-placeholder.png",
      title: "小松空港　国内線付近",
      
      description: "ポケモンGoでも有名です。",
    },
    // 47
    {
      image: "map-placeholder.png",
      title: "小松空港　国際線付近",
      
      description: "ポケモンGoでも有名です。",
    },
    // 48
    {
      image: "map-placeholder.png",
      title: "山中温泉総湯 菊の湯",
      
      description: "ポケモンGoでも有名です。",
    },
    // 49
    {
      image: "map-placeholder.png",
      title: "山中座",
      
      description: "ポケモンGoでも有名です。",
    },
    // 50
    {
      image: "map-placeholder.png",
      title: "加賀片山津温泉 総湯",
      
      description: "ポケモンGoでも有名です。",
    },
    // 51
    {
      image: "map-placeholder.png",
      title: "山代温泉 総湯",
      
      description: "ポケモンGoでも有名です。",
    },
    // 52
    {
      image: "map-placeholder.png",
      title: "加賀市観光情報センター （加賀温泉駅）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 53
    {
      image: "map-placeholder.png",
      title: "尼御前SA（下り）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 54
    {
      image: "map-placeholder.png",
      title: "尼御前SA（上り）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 55
    {
      image: "map-placeholder.png",
      title: "道の駅 越前おおの荒島の郷",
      
      description: "ポケモンGoでも有名です。",
    },
    // 56
    {
      image: "map-placeholder.png",
      title: "越前大仏",
      
      description: "ポケモンGoでも有名です。",
    },
    // 57
    {
      image: "map-placeholder.png",
      title: "福井県立恐竜博物館",
      
      description: "ポケモンGoでも有名です。",
    },
    // 58
    {
      image: "map-placeholder.png",
      title: "越前おおの結楽座",
      
      description: "ポケモンGoでも有名です。",
    },
    // 59
    {
      image: "map-placeholder.png",
      title: "大本山永平寺",
      
      description: "ポケモンGoでも有名です。",
    },
    // 60
    {
      image: "map-placeholder.png",
      title: "丸岡城",
      
      description: "ポケモンGoでも有名です。",
    },
    // 61
    {
      image: "map-placeholder.png",
      title: "芦原温泉駅観光案内所（芦原温泉駅）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 62
    {
      image: "map-placeholder.png",
      title: "あわら湯のまち駅 あわら温泉情報処「おしえる座ぁ」",
      
      description: "ポケモンGoでも有名です。",
    },
    // 63
    {
      image: "map-placeholder.png",
      title: "東尋坊正太楼",
      
      description: "ポケモンGoでも有名です。",
    },
    // 64
    {
      image: "map-placeholder.png",
      title: "特別史跡 一乗谷朝倉氏遺跡",
      
      description: "ポケモンGoでも有名です。",
    },
    // 65
    {
      image: "map-placeholder.png",
      title: "えちぜん鉄道 福井駅",
      
      description: "ポケモンGoでも有名です。",
    },
    // 66
    {
      image: "map-placeholder.png",
      title: "ふくい観光案内所（福井駅） ",
      
      description: "ポケモンGoでも有名です。",
    },
    // 67
    {
      image: "map-placeholder.png",
      title: "日産レンタカー福井駅前店",
      
      description: "ポケモンGoでも有名です。",
    },
    // 68
    {
      image: "map-placeholder.png",
      title: "南条SA(下り)",
      
      description: "ポケモンGoでも有名です。",
    },
    // 69
    {
      image: "map-placeholder.png",
      title: "南条SA（上り）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 70
    {
      image: "map-placeholder.png",
      title: "道の駅 南えちぜん山海里",
      
      description: "ポケモンGoでも有名です。",
    },
    // 71
    {
      image: "map-placeholder.png",
      title: "道の駅越前たけふ(越前たけふ駅）",
      
      description: "ポケモンGoでも有名です。",
    },
    // 72
    {
      image: "map-placeholder.png",
      title: "道の駅 越前",
      
      description: "ポケモンGoでも有名です。",
    },
    // 73
    {
      image: "map-placeholder.png",
      title: "敦賀駅ハピラインお客様カウンター",
      
      description: "ポケモンGoでも有名です。",
    },
    // 74
    {
      image: "map-placeholder.png",
      title: "敦賀赤レンガ倉庫",
      
      description: "ポケモンGoでも有名です。",
    },
    // 75
    {
      image: "map-placeholder.png",
      title: "日本海さかな街",
      
      description: "ポケモンGoでも有名です。",
    },
    // 76
    {
      image: "map-placeholder.png",
      title: "道の駅 若狭美浜はまびより",
      
      description: "ポケモンGoでも有名です。",
    },
    // 77
    {
      image: "map-placeholder.png",
      title: "道の駅 三方五湖",
      
      description: "ポケモンGoでも有名です。",
    },
    // 78
    {
      image: "map-placeholder.png",
      title: "若狭おばま観光案内所",
      
      description: "ポケモンGoでも有名です。",
    },
    // 79
    {
      image: "map-placeholder.png",
      title: "若狭フィッシャーマンズワーフ",
      
      description: "ポケモンGoでも有名です。",
    },
  ];
  const positionList = [
    // 1
    { lat: 36.8163167, lng: 137.5827842 },
    // 2
    { lat: 36.87376826, lng: 137.4812761 },
    // 3
    { lat: 36.87731058, lng: 137.4278201 },
    // 4
    { lat: 36.7983172, lng: 137.388018 },
    // 5
    { lat: 36.58331427, lng: 137.4451733 },
    // 6
    { lat: 36.75666116, lng: 137.2287237 },
    // 7
    { lat: 36.70133602, lng: 137.2133793 },
    // 8
    { lat: 36.69383116, lng: 137.2124736 },
    // 9
    { lat: 36.70060328, lng: 137.2099448 },
    // 10
    { lat: 36.64346017, lng: 137.1894825 },
    // 11
    { lat: 36.64420077, lng: 137.1897483 },
    // 12
    { lat: 36.7811342, lng: 137.1092219 },
    // 13
    { lat: 36.78132173, lng: 137.0997535 },
    // 14
    { lat: 36.75195056, lng: 137.0849005 },
    // 15
    { lat: 36.8149522, lng: 137.0414829 },
    // 16
    { lat: 36.72692481, lng: 137.0114777 },
    // 17
    { lat: 36.86449407, lng: 136.9865724 },
    // 18
    { lat: 36.6895402, lng: 136.8767349 },
    // 19
    { lat: 36.62723199, lng: 136.8736353 },
    // 20
    { lat: 36.62609109, lng: 136.8726105 },
    // 21
    { lat: 36.5742884, lng: 136.9800836 },
    // 22
    { lat: 36.6411529, lng: 136.9648698 },
    // 23
    { lat: 36.42741691, lng: 136.9365334 },
    // 24
    { lat: 37.31265816, lng: 137.2304999 },
    // 25
    { lat: 37.29511271, lng: 136.9574889 },
    // 26
    { lat: 36.5712204, lng: 136.6568026 },
    // 27
    { lat: 36.5724679, lng: 136.6669396 },
    // 28
    { lat: 36.57385866, lng: 136.6663069 },
    // 29
    { lat: 36.56115303, lng: 136.6639819 },
    // 30
    { lat: 36.56436081, lng: 136.6621371 },
    // 31
    { lat: 36.56575842, lng: 136.6613945 },
    // 32
    { lat: 36.56215941, lng: 136.6605942 },
    // 33
    { lat: 36.56569769, lng: 136.6595692 },
    // 34
    { lat: 36.56096179, lng: 136.6585305 },
    // 35
    { lat: 36.5716131, lng: 136.655659 },
    // 36
    { lat: 36.56609654, lng: 136.6554159 },
    // 37
    { lat: 36.56650511, lng: 136.6536373 },
    // 38
    { lat: 36.56421474, lng: 136.6500812 },
    // 39
    { lat: 36.57855189, lng: 136.6486658 },
    // 40
    { lat: 36.4464488, lng: 136.6480189 },
    // 41
    { lat: 36.57523138, lng: 136.6479981 },
    // 42
    { lat: 36.5781144, lng: 136.6464696 },
    // 43
    { lat: 36.60798239, lng: 136.6144972 },
    // 44
    { lat: 36.40172714, lng: 136.4529362 },
    // 45
    { lat: 36.40184145, lng: 136.4128073 },
    // 46
    { lat: 36.40186499, lng: 136.4128496 },
    // 47
    { lat: 36.39314542, lng: 136.406009 },
    // 48
    { lat: 36.24684299, lng: 136.3732055 },
    // 49
    { lat: 36.24715242, lng: 136.3728475 },
    // 50
    { lat: 36.34533918, lng: 136.3689476 },
    // 51
    { lat: 36.28864593, lng: 136.3614641 },
    // 52
    { lat: 36.31980393, lng: 136.3516994 },
    // 53
    { lat: 36.35416458, lng: 136.323814 },
    // 54
    { lat: 36.35126524, lng: 136.3227109 },
    // 55
    { lat: 35.9717444, lng: 136.5526415 },
    // 56
    { lat: 36.05367434, lng: 136.5192086 },
    // 57
    { lat: 36.0825328, lng: 136.5065917 },
    // 58
    { lat: 35.98479216, lng: 136.486941 },
    // 59
    { lat: 36.0566917, lng: 136.3568566 },
    // 60
    { lat: 36.15236679, lng: 136.2721021 },
    // 61
    { lat: 36.2149158, lng: 136.2347964 },
    // 62
    { lat: 36.22316063, lng: 136.193845 },
    // 63
    { lat: 36.2376115, lng: 136.1266015 },
    // 64
    { lat: 35.99948737, lng: 136.2959307 },
    // 65
    { lat: 36.06198951, lng: 136.2237914 },
    // 66
    { lat: 36.06161976, lng: 136.2236096 },
    // 67
    { lat: 36.06292649, lng: 136.2218754 },
    // 68
    { lat: 35.8256725, lng: 136.2017076 },
    // 69
    { lat: 35.83058903, lng: 136.2016403 },
    // 70
    { lat: 35.8315816, lng: 136.2013107 },
    // 71
    { lat: 35.8950423, lng: 136.1981522 },
    // 72
    { lat: 35.91986609, lng: 135.9969773 },
    // 73
    { lat: 35.64538484, lng: 136.0762315 },
    // 74
    { lat: 35.6620129, lng: 136.0745978 },
    // 75
    { lat: 35.634584, lng: 136.049895 },
    // 76
    { lat: 35.60455635, lng: 135.9366873 },
    // 77
    { lat: 35.5598231, lng: 135.8940067 },
    // 78
    { lat: 35.4924298, lng: 135.7453724 },
    // 79
    { lat: 35.5002388, lng: 135.7402092 },
  ];

  export { suggestions, positionList };