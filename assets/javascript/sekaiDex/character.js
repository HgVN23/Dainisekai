const active = 'Kích hoạt';
const passive = 'Nội tại';

const character = [
	{
		id: 0,
		title: 'Shuuya',
		otherName: [
			{
				name: 'Hg',
				desc: 'Tên cũ của kiếp trước',
				firstAppear: 0
			},
			{
				name: 'Shuuya Tamada',
				desc: 'Tên có kèm họ khi là quý tộc (Chưa thể sử dụng)',
				firstAppear: 0
			},
			{
				name: 'Shu',
				desc: 'Tên gọi tắt mà mẹ Shuuya hay gọi',
				firstAppear: 1
			}
		],
		age: 10,
		gender: 'Male (Nam)',
		race: 'Human (Con người)',
		status: 'Alive (Còn sống)',
		like: [
			'“Gia đình”',
			'Màu lam',
			'Tự do',
			'Khám phá những thứ mới',
			'Nấu ăn vì đó là “nghề”',
			'“Ăn cơm”'
		],
		dislike: [
			'“Gia đình” bị nói xấu',
			'Ăn các món liên quan đến cá'
		],
		debut: 0,
		appearance: [
			'Cơ thể cân đối, cao 168 cm, nặng 66 kg (Khi 18 tuổi)',
			'Mái tóc ngắn, để mái vuốt qua trái có màu lam như đá lưu ly được thừa hưởng từ mẹ',
			'Đôi mắt lòng trắng làm nền cho con ngươi màu lam tựa nước biển trong xanh thừa hưởng từ cha',
			'Tính cách chững chạc, quan tâm người khác và hay tò mò'
		],
		personality: [
			'Ở kiếp trước cậu tên là Hg, 20 tuổi, đã qua đời vì gặp tai nạn trên đường. Sau đó nhờ văn phòng Re:Life, cậu được tái sinh vào một thế giới Fantasy có tên là『Dainisekai』với cái tên mới là Shuuya',
			'Sinh ra tại thị trấn『Dawn Horizon』. Là con của gia đình thường dân gồm cha tên Haruka và mẹ tên Sara',
			'Cậu có thể sử dụng Skill mà không cần phải chờ đến 10 tuổi, hằng đêm chăm chỉ luyện dùng Skill. Cậu đã quyết định giấu Status để tránh gặp phiền phức nhưng cậu vẫn tiết lộ khả năng của mình cho Hyouka',
			'Năm 7 tuổi được học cách chiến đấu do cha dạy',
			'Năm 10 tuổi không còn phải giấu Status, có thể dùng Inventory và trở thành mạo hiểm giả. Đồng thời là người thành lập nên Party『Log Horizon』'
		],
		relative: [
			{
				name: 'Haruka',
				desc: 'Cha'
			},
			{
				name: 'Sara',
				desc: 'Mẹ'
			},
			{
				name: 'Kowashi',
				desc: 'Bạn thân, đồng đội'
			},
			{
				name: 'Asahi',
				desc: 'Bạn thân, đồng đội'
			},
			{
				name: 'Hyouka',
				desc: 'Bạn thân, đồng đội'
			},
			{
				name: 'Celia',
				desc: 'Người quen'
			},
			{
				name: 'Maki',
				desc: 'Người quen'
			},
			{
				name: 'Itsuki',
				desc: 'Người quen'
			},
			{
				name: 'Katsumi',
				desc: 'Người quen'
			}
		],
		job: [
			{
				name: 'Chef',
				desc: [
					'Đầu bếp'
				],
				firstAppear: 3
			},
			{
				name: 'Adventurer',
				desc: [
					'Rank Iron'
				],
				firstAppear: 9
			}
		],
		skill: [
			{
				name: 'Cooking',
				from() { return fromGet(0, 'job', 0) },
				type: passive,
				desc: [
					'Đồ ăn sẽ có tổng Effect gồm Buff và Debuff (như là Hồi HP, hồi MP, dính độc, ...) tương ứng với các nguyên liệu được dùng'
				],
				firstAppear: 3,
				inDesc: 0,
				firstUse: -1
			},
			{
				name: '???',
				from() { return fromGet(0, 'job', 0) },
				type: active,
				desc: [
					'???'
				],
				firstAppear: 3,
				inDesc: 0,
				firstUse: -1
			},
			{
				name: 'Slash',
				from() { return fromGet(0, 'job', 0) },
				type: active,
				desc: [
					'Khả năng cắt gấp đôi bình thường',
					'Chỉ áp dụng lên các vũ khí sắc có thể cắt'
				],
				firstAppear: 3,
				inDesc: 0,
				firstUse: 4
			},
			{
				name: 'Absorb',
				from() { return fromGet(0, 'job', 0) },
				type: passive,
				desc: [
					// 'Tỉ lệ 10% học được Skill sau khi ăn đồ ăn dùng ma vật có Skill làm nguyên liệu'
					'???'
				],
				firstAppear: 3,
				inDesc: 0,
				firstUse: -1
			},
			{
				name: 'Heat Resistance',
				from() { return fromGet(0, 'job', 0) },
				type: passive,
				desc: [
					'Nhiệt độ cơ thể không bị ảnh hưởng bởi tác động bên ngoài ở mức nhất định',
					'Cơ thể vẫn cảm nhận được nóng và lạnh lẫn bên trong và ngoài'
				],
				firstAppear: 3,
				inDesc: 0,
				firstUse: 6
			},
			{
				name: 'Wind Mastery',
				from() { return fromGet(0, 'titles', 1) },
				type: active,
				desc: [
					'Điều khiển gió theo ý mình muốn ở mức cơ bản',
					'Phát triển phong kĩ mới từ việc định hình gió'
				],
				firstAppear: 3,
				inDesc: 0,
				firstUse: 3
			},
			{
				name: 'Silent Barrier',
				from() { return fromGet(0, 'skill', 5) },
				type: active,
				desc: [
					'Kết giới ngăn không cho âm thanh vào hoặc ra',
					'Ngoài âm thanh thì các thứ khác có thể vào hoặc ra được kết giới'
				],
				firstAppear: 3,
				inDesc: 0,
				firstUse: 3
			},
			{
				name: 'Floating',
				from() { return fromGet(0, 'skill', 5) },
				type: active,
				desc: [
					'Kiểm soát gió xung quanh vật khiến nó bay lên và di chuyển đến nơi mình muốn',
					'Có thể dùng lên nhiều vật cùng lúc'
				],
				firstAppear: 3,
				inDesc: 0,
				firstUse: 3
			},
			{
				name: 'Wind Blade',
				from() { return fromGet(0, 'skill', 5, 2) },
				type: active,
				desc: [
					'Phóng 1 đường chém phong theo hướng vung vũ khí'
				],
				firstAppear: 4,
				inDesc: 1,
				firstUse: 4
			},
			{
				name: 'Physical Enhancement',
				from() { return fromGet(0, 'Haruka', 0) },
				type: active,
				desc: [
					'Cường hóa khả năng hoạt động vật lý'
				],
				firstAppear: 8,
				inDesc: 0,
				firstUse: 8
			},
			{
				name: 'Counter',
				from() { return fromGet(0, 'Rèn luyện', 0) },
				type: active,
				desc: [
					'Hủy đòn tấn công của địch',
					'Địch sẽ dích Debuff『Stun』trong vài giây nếu hủy thành công'
				],
				firstAppear: 8,
				inDesc: 0,
				firstUse: 8
			},
			{
				name: 'Cleanse',
				from() { return fromGet(0, 'skill', 5) },
				type: active,
				desc: [
					'Tách vật bám nhất định khỏi bề mặt để làm sạch'
				],
				firstAppear: 11,
				inDesc: 0,
				firstUse: 11
			},
			{
				name: 'Blow',
				from() { return fromGet(0, 'skill', 5) },
				type: active,
				desc: [
					'Thổi bay các vật trước mặt ra một khoảng để tạo khoảng cách an toàn'
				],
				firstAppear: 12,
				inDesc: 1,
				firstUse: 12
			}
		],
		titles: [
			{
				name: 'Reincarnator',
				from() { return fromGet(0, 'job', 0) },
				desc: [
					'Đã chết 1 lần ở thế giới khác và được tái sinh ở thế giới mới'
				],
				firstAppear: 3
			},
			{
				name: 'The favor of the Wind',
				from() { return fromGet(0, 'Điều ước', 0) },
				desc: [
					'Giảm thời gian và Mana khi sử dụng phong Skill',
					'Dễ dàng học phong Skill'
				],
				firstAppear: 3
			}
		],
		item: [
			{
				name: 'Cooking Set',
				from() { return fromGet(0, 'job', 0) },
				desc: [
					'Không thể bị phá hủy hoặc bị mất',
					'Không ai có thể sử dụng được ngoài『Chef』',
					'Chỉ cần tốn ít Mana có thể lấy bất cứ dụng cụ tồn tại trong『Dainisekai』liên quan đến nấu ăn'
				],
				firstAppear: 3,
				firstUse: 8
			},
			{
				name: 'Blue White Feather',
				from() { return fromGet(0, 'Diều hâu', 0) },
				desc: [
					'???'
				],
				firstAppear: 6,
				firstUse: 6
			}
		]
	},
	{
		id: 1,
		title: 'Hyouka',
		otherName: [
			{
				name: 'Cô bé lạnh lùng',
				desc: 'Tên do Shuuya gọi khi Hyouka né tránh cậu',
				firstAppear: 5
			},
			{
				name: 'Bé tuyết',
				desc: 'Tên do Itsuki gọi để trêu Shuuya',
				firstAppear: 14
			}
		],
		age: 10,
		gender: 'Female (Nữ)',
		race: 'Demi-Elf (Bán Elf)',
		status: 'Alive (Còn sống)',
		like: [
			'“Gia đình”',
			'Thỏ bông',
			'Gần Shuuya',
			'Đồ ăn Shuuya nấu'
		],
		dislike: [
			'“Gia đình” và nhất là Shuuya bị nói xấu',
			'Người quen rời bỏ'
		],
		debut: 5,
		appearance: [
			'Cơ thể hơi nhỏ, cao 163 cm, nặng 51 kg (khi 18 tuổi)',
			'Mái tóc ngắn trắng như tuyết, bên phải có một đoạn tết tóc và trên đó có cài kẹp tóc gắn viên pha lê màu lục nhạt',
			'Đôi mắt lòng trắng làm nền cho con ngươi màu lam nhạt như màu của băng',
			'Đôi tai dài vì là bán Elf',
			'Khuôn mặt không biểu lộ cảm xúc',
			'Tính cách hay đề phòng, lo lắng cho người khác và hơi nhạy cảm khi có người nhắc đến Shuuya'
		],
		personality: [
			'Mẹ là Elf, cha là con người nên Hyouka là bán Elf',
			'Mồ côi mẹ từ khi sinh ra nên cô sống cùng cha - là thương nhân thường hay di chuyển khắp nơi nên họ không có nơi định cư',
			'Vào năm 8 tuổi, cô cùng cha đang trên đường đến thị trấn『Dawn Horizon』 thì bị đám ma thú Ligheep mắt đỏ tấn công và cha cô qua đời. Sau sự kiện đó Hyouka bộc phát sức mạnh và dần rơi vào trầm cảm, khuôn mặt cô giờ chỉ là vô cảm. Hiện giờ Hyouka đang ở cô nhi viện thuộc thị trấn『Dawn Horizon』do sơ Celia quản lý',
			'Sau khi được Shuuya tìm ra kẹp tóc mà cô đánh rơi thì cô đã mở lòng hơn chút với mọi người. Riêng với Shuuya thì cô đã có một tình cảm đặc biệt dành cho cậu',
			'Năm 10 tuổi làm mạo hiểm giả cùng đám bạn. Đồng thời là 1 trong 4 thành viên đầu tiên của Party『Log Horizon』'
		],
		relative: [
			{
				name: 'Cha Hyouka',
				desc: 'Không rõ tên, đã qua đời'
			},
			{
				name: 'Mẹ Hyouka',
				desc: 'Không rõ tên, đã qua đời'
			},
			{
				name: 'Shuuya',
				desc: 'Bạn thân, đồng đội, có tình cảm'
			},
			{
				name: 'Asahi',
				desc: 'Bạn thân, đồng đội'
			},
			{
				name: 'Kowashi',
				desc: 'Bạn thân, đồng đội'
			},
			{
				name: 'Celia',
				desc: 'Người bảo hộ'
			},
			{
				name: 'Haruka',
				desc: 'Người quen'
			},
			{
				name: 'Sara',
				desc: 'Người quen'
			},
			{
				name: 'Maki',
				desc: 'Người quen'
			},
			{
				name: 'Itsuki',
				desc: 'Người quen'
			},
			{
				name: 'Katsumi',
				desc: 'Người quen'
			}
		],
		job: [
			{
				name: 'Archer',
				desc: [
					'Cung thủ'
				],
				firstAppear: 8
			},
			{
				name: 'Adventurer',
				desc: [
					'Rank Iron'
				],
				firstAppear: 9
			}
		],
		skill: [
			{
				name: 'Ice Mastery',
				from() { return fromGet(1, 'Mẹ', 0) },
				type: active,
				desc: [
					'Điều khiển băng theo ý mình muốn ở mức cơ bản',
					'Phát triển băng kĩ mới từ việc định hình băng'
				],
				firstAppear: -1,
				inDesc: 0,
				firstUse: -1
			},
			{
				name: 'Ice Arrow',
				from() { return fromGet(1, 'item', 0) },
				type: active,
				desc: [
					'Mũi tên được làm từ băng',
					'Đóng băng một vùng nhỏ quanh vết thương bị bắn trúng ở mức nhất định'
				],
				firstAppear: 11,
				inDesc: 0,
				firstUse: 11
			},
			{
				name: 'Ice Wall',
				from() { return fromGet(1, 'skill', 0, 1) },
				type: active,
				desc: [
					'Trên đường bay của mũi tên, đằng sau tỏa ra các bông tuyết rơi xuống mặt đất đâm lên các cột băng nhọn tạo thành 1 bức tường lớn ngăn cách',
					'Độ dài của bức tường kết thúc khi mũi tên va chạm'
				],
				firstAppear: 12,
				inDesc: 0,
				firstUse: 12
			},
			{
				name: 'Ice Pile',
				from() { return fromGet(1, 'skill', 0, 1) },
				type: active,
				desc: [
					'Mũi tên va chạm với bề mặt nào thì trồi ra cọc băng lớn vuông góc với bề mặt đó'
				],
				firstAppear: 13,
				inDesc: 0,
				firstUse: 13
			}
		],
		titles: [
			{
				name: 'The “cold” girl',
				from() { return fromGet(0, 'character', 0) },
				desc: [
					'Mặt vô cảm tạo vẻ lạnh lùng'
				],
				firstAppear: 5
			}
		],
		item: [
			{
				name: 'Magic Bow',
				from() { return fromGet(1, 'job', 0) },
				desc: [
					'Sử dụng Mana để chuyển hóa thành tên bắn có nguyên tố của người dùng'
				],
				firstAppear: 9,
				firstUse: 11
			}
		]
	},
	{
		id: 2,
		title: 'Kowashi',
		otherName: [
			{
				name: 'Bộ đôi rắc rối',
				desc: 'Tên do Shuuya gọi do hay tạo rắc rối cùng Asahi',
				firstAppear: 4
			}
		],
		age: 10,
		gender: 'Male (Nam)',
		race: 'Human (Con người)',
		status: 'Alive (Còn sống)',
		like: [
			'“Gia đình”',
			'Bảo vệ người khác'
		],
		dislike: [
			'Không bảo vệ được người khác'
		],
		debut: 2,
		appearance: [
			'Cơ thể to lớn, cao 169 cm, nặng 68 kg (Khi 18 tuổi)',
			'Mái tóc khá dài, hơi gai màu đỏ thẫm',
			'Đôi mắt lòng trắng làm nền cho con ngươi màu cam',
			'Tính cách vui vẻ, hay hành động không nghĩ trước và muốn bảo vệ được người khác'
		],
		personality: [
			'Vào năm 5 tuổi, cha mẹ đã bị sát hại trong một chuyến đi bởi một băng đạo tặc. Trước khi cậu sắp bị giết thì có một người lạ mặt với cây thương đã cứu cậu trong gang tấc. Sau đó đưa cậu về sống ở cô nhi viện thuộc thị trấn『Dawn Horizon』',
			'Lúc đó cậu đã luôn tự dằn vặt bản thân đã không thể bảo vệ được cha mẹ mình. Cho đến khi Shuuya thuyết phục cậu thì suy nghĩ trước đó mới có thể gỡ bỏ',
			'Năm 7 tuổi được học cách chiến đấu cùng Shuuya do cha Shuuya dạy',
			'Năm 10 tuổi làm mạo hiểm giả cùng đám bạn. Đồng thời là 1 trong 4 thành viên đầu tiên của Party『Log Horizon』'
		],
		relative: [
			{
				name: 'Cha Kowashi',
				desc: 'Không rõ tên, đã qua đời'
			},
			{
				name: 'Mẹ Kowashi',
				desc: 'Không rõ tên, đã qua đời'
			},
			{
				name: 'Shuuya',
				desc: 'Bạn thân, đồng đội'
			},
			{
				name: 'Asahi',
				desc: 'Bạn thân, đồng đội'
			},
			{
				name: 'Hyouka',
				desc: 'Bạn thân, đồng đội'
			},
			{
				name: 'Celia',
				desc: 'Người bảo hộ'
			},
			{
				name: 'Haruka',
				desc: 'Người quen'
			},
			{
				name: 'Sara',
				desc: 'Người quen'
			},
			{
				name: 'Maki',
				desc: 'Người quen'
			},
			{
				name: 'Itsuki',
				desc: 'Người quen'
			},
			{
				name: 'Katsumi',
				desc: 'Người quen'
			}
		
		],
		job: [
			{
				name: 'Paladin',
				desc: [
					'Vệ sĩ'
				],
				firstAppear: 8
			},
			{
				name: 'Adventurer',
				desc: [
					'Rank Iron'
				],
				firstAppear: 9
			}
		],
		skill: [
			{
				name: 'Physical Enhancement',
				from() { return fromGet(2, 'Haruka', 0) },
				type: active,
				desc: [
					'Cường hóa khả năng hoạt động vật lý'
				],
				firstAppear: 12,
				inDesc: 0,
				firstUse: 12
			},
			{
				name: 'Cover',
				from() { return fromGet(2, 'job', 0) },
				type: active,
				desc: [
					'Đưa bản thân xuất hiện trước đòn tấn công vào mục tiêu được lựa chọn để có thể đỡ đòn ngay lập tức'
				],
				firstAppear: 12,
				inDesc: 0,
				firstUse: 12
			},
			{
				name: 'Revival',
				from() { return fromGet(2, 'titles', 1) },
				type: passive,
				desc: [
					'Người dùng sống lại',
					'Hồi nửa lượng máu cùng vết thương',
					'Tự động kích hoạt khi hi sinh bảo vệ mạng sống khác',
					'Hồi lại khi bình minh của ngày hôm sau ló rạng'
				],
				firstAppear: 12,
				inDesc: 0,
				firstUse: 12
			}
		],
		titles: [
			{
				name: 'Trouble Couple',
				from() { return fromGet(0, 'character', 0) },
				desc: [
					'Hay tạo ra rắc rối cùng Asahi'
				],
				firstAppear: 2
			},
			{
				name: 'The Savior',
				from() { return fromGet(2, 'Iwao', 0) },
				desc: [
					'Phước lành từ thần Iwao',
					'Hi sinh tính mạng của mình để bảo vệ sinh mạng khác'
				],
				firstAppear: 8
			}
		],
		item: [
			{
				name: 'Spiked Mace',
				from() { return fromGet(2, 'job', 0) },
				desc: [
					'Chùy gai ngắn, đầu chùy có 6 mặt, mỗi mặt có 1 gai lớn ngoại trừ 1 mặt nối với tay cầm'
				],
				firstAppear: 9,
				firstUse: 10
			},
			{
				name: 'Great Shield',
				from() { return fromGet(2, 'job', 0) },
				desc: [
					'Tấm khiên lớn đủ để che cả cơ thể'
				],
				firstAppear: 9,
				firstUse: 10
			}
		]
	}
	// {
		// id: ,
		// title: '',
		// otherName: [
		// 	{
		// 		name: '',
		// 		desc: '',
		// 		firstAppear: 
		// 	}
		// ],
		// age: ,
		// gender: ' ()',
		// race: 'Human (Con người)',
		// status: 'Alive (Còn sống)',
		// like: [
		// 	''
		// ],
		// dislike: [
		// 	''
		// ],
		// debut: ,
		// appearance: [
		// 	''
		// ],
		// personality: [
		// 	''
		// ],
		// relative: [
		// 	{
		// 		name: '',
		// 		desc: ''
		// 	}
		// ],
		// job: [
		// 	{
		// 		name: '',
		// 		desc: [
		// 			''
		// 		],
		// 		firstAppear: 
		// 	}
		// ],
		// skill: [
		// 	{
		// 		name: '',
		// 		from() { return fromGet(, '', 0) },
		// 		type: active,
		// 		desc: [
		// 			''
		// 		],
		// 		firstAppear: ,
		// 		inDesc: 0,
		// 		firstUse: 
		// 	}
		// ],
		// titles: [
		// 	{
		// 		name: '',
		// 		from() { return fromGet(, '', 0) },
		// 		desc: [
		// 			''
		// 		],
		// 		firstAppear: 
		// 	}
		// ],
		// item: [
		// 	{
		// 		name: '',
		// 		from() { return fromGet(, '', 0) },
		// 		desc: [
		// 			''
		// 		],
		// 		firstAppear: ,
		// 		firstUse: 
		// 	}
		// ]
	// }
];

function fromGet(index, where, ...nameIndex) {
	let temp = ``;
	for(let i of nameIndex) {
		if(where === 'job')
			temp += `+『${character[index].job[i].name}』`;
		else if(where === 'skill')
			temp += `+『${character[index].skill[i].name}』`;
		else if(where === 'titles')
			temp += `+『${character[index].titles[i].name}』`;
		else if(where === 'item')
			temp += `+『${character[index].item[i].name}』`;
		else if(where === 'character')
			temp += `+『${character[index].title}』`;
		else
			temp += `+ '${where}'`;
	}
	return temp.slice(1);
}