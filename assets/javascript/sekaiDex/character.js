const gender = [
	'Nam',			// 0
	'Nữ',			// 1
	'Lưỡng tính',	// 2
	'Không rõ'		// 3
];
const race = [
	'Con người',			// 0
	'Nửa người nửa Elf',	// 1
	'Nửa người nửa thú'		// 2
];
const status = [
	'Sống',		// 0
	'Qua đời'	// 1
];
const type = [
	'Nội tại',	// 0
	'Kích hoạt'	// 1
];
const group = [
	'Kỹ thuật',		// 0
	'Ma pháp'		// 1
];

const characterInfo = [
	{
		id: 0,
		title: nameCharacter[1],
		otherName: [
			{
				name: nameCharacter[0],
				desc: [
					`Tên cũ của kiếp trước`
				],
				firstAppear: 0
			},
			{
				name: `${nameCharacter[1]} ${nameCharacter[2]}`,
				desc: [
					`Tên có kèm họ khi đăng ký bên ${nameLocation[1]}`,
					`Sẽ sử dụng khi trở thành quý tộc`
				],
				firstAppear: 0
			},
			{
				name: `Shu`,
				desc: [
					`Tên gọi tắt mà ${nameCharacter[3]} thường hay gọi`
				],
				firstAppear: 1
			},
			{
				name: `Shuunya`,
				desc: [
					`Tên trùng âm nya do ở cuối câu của ${nameCharacter[10]}`
				],
				firstAppear: 4.5
			}
		],
		age: [
			10
		],
		gender: [
			gender[0]
		],
		race: [
			race[0]
		],
		status: [
			status[0]
		],
		like: [
			`“Gia đình”`,
			`Màu lam`,
			`Tự do`,
			`Khám phá`,
			`“Ăn cơm”`,
			`Nấu ăn`
		],
		dislike: [
			`“Gia đình” bị nói xấu`,
			`Ăn món có cá`
		],
		debut: 0,
		appearance: [
			`Cơ thể cân đối, cao 168 cm, nặng 66 kg (khi 18 tuổi)`,
			`Mái tóc ngắn, để mái vắt chéo qua trái có màu lam như đá lưu ly được thừa hưởng từ mẹ`,
			`Đôi mắt lòng trắng làm nền cho con ngươi màu lam tựa nước biển thừa hưởng từ cha`,
			`Tính cách khá chững chạc do lớn tuổi, quan tâm người khác theo cách riêng, hay đề phòng`
		],
		personality: [
			`Ở kiếp trước cậu tên là ${nameCharacter[0]}, 20 tuổi, đã qua đời vì gặp tai nạn. Sau đó nhờ văn phòng Re:Life, cậu được tái sinh vào một đại vũ trụ có tên là${nameLocation[0]}với cái tên mới là ${nameCharacter[1]}`,
			`Sinh ra tại thị trấn ${nameLocation[2]}. Là con của gia đình thường dân gồm cha tên ${nameCharacter[4]} và mẹ tên ${nameCharacter[3]}. Cậu có thể sử dụng kỹ năng trước 10 tuổi nhưng đã giấu đi để tránh gặp phiền phức, chỉ âm thầm luyện tập hằng đêm`,
			`Năm 6 tuổi, gặp được chú diều hâu có lông vũ màu nửa trắng phần chân và lam phần đầu, nhưng để lại nhiều câu hỏi`,
			`Năm 7 tuổi, học cách chiến đấu do ${nameCharacter[4]} dạy`,
			`Năm 8 tuổi, bất chấp mọi cố gắng che giấu có thể dùng kỹ năng sớm mà tiết lộ cho ${nameCharacter[11]} giúp cô thoát khỏi trầm cảm. Sau đó trở thành người bạn đầu tiên của ${nameCharacter[11]}`,
			`Năm 10 tuổi, có thể dùng ${statusBoard} với ${inventory} mà không cần phải giấu nữa. Đặc biệt đăng ký làm ${nameJob[8]}, rồi lập nên tổ đội ${nameParty[0]} với cương vị là trưởng nhóm cùng 3 người bạn còn lại, tổng 4 thành viên ban đầu`
		],
		relative: [
			{
				name: nameCharacter[4],
				desc: [
					`Cha`
				]
			},
			{
				name: nameCharacter[3],
				desc: [
					`Mẹ`
				]
			},
			{
				name: nameCharacter[9],
				desc: [
					`Bạn thân, đồng đội`
				]
			},
			{
				name: nameCharacter[10],
				desc: [
					`Bạn thân, đồng đội`
				]
			},
			{
				name: nameCharacter[11],
				desc: [
					`Bạn thân, đồng đội`
				]
			},
			{
				name: nameCharacter[5],
				desc: [
					`Người quen`
				]
			},
			{
				name: nameCharacter[15],
				desc: [
					`Người quen`
				]
			},
			{
				name: nameCharacter[16],
				desc: [
					`Người quen`
				]
			},
			{
				name: nameCharacter[17],
				desc: [
					`Người quen`
				]
			}
		],
		job: [
			{
				name: nameJob[0],
				desc: [
					`Người có thể làm ra những món ăn không tưởng`,
					`Kỹ năng thưởng:${nameSkill[4]}`,
					`Vật phẩm khởi đầu: ${nameItem[2]}`
				],
				// from: `${nameLocation[1]}`,
				firstAppear: 3
			},
			{
				name: nameJob[8],
				desc: [
					`Người đi phiêu lưu tìm kiếm tiền tài, danh vọng, vinh quang, thử thách và có thể đánh đổi tính mạng`,
					`Hạng: Sắt`,
					`Tổ đội: Trưởng nhóm ${nameParty[0]}`
				],
				// from: `Hiệp hội ${nameJob[8]} chi nhánh ${nameLocation[2]}`,
				firstAppear: 9
			}
		],
		skill: [
			{
				name: nameSkill[1],
				desc: [
					`Điều khiển gió theo ý muốn ở mức cơ bản`,
					`Phát triển phong thuật mới`
				],
				type: type[0],
				group: group[1],
				from: `Danh hiệu ${nameTitle[1]}`,
				firstAppear: 3,
				inDesc: 0
			},
			{
				name: nameSkill[2],
				desc: [
					`Kết giới chỉ ngăn âm thanh không lọt vào hoặc ra`
				],
				type: type[1],
				group: group[1],
				from: `Kỹ năng${nameSkill[1]}`,
				firstAppear: 3,
				inDesc: 0
			},
			{
				name: nameSkill[3],
				desc: [
					`Kiểm soát gió xung quanh đối tượng để nâng lên và di chuyển đến nơi muốn`,
					`Có thể dùng lên nhiều đối tượng cùng lúc`
				],
				type: type[1],
				group: group[1],
				from: `Kỹ năng${nameSkill[1]}`,
				firstAppear: 3,
				inDesc: 0
			},
			{
				name: nameSkill[4],
				desc: [
					`Khả năng cắt gấp đôi bình thường`,
					`Chỉ áp dụng lên các vũ khí sắc có thể cắt`
				],
				type: type[1],
				group: group[0],
				from: `Chức nghiệp ${nameJob[0]}`,
				firstAppear: 4,
				inDesc: 0
			},
			{
				name: nameSkill[5],
				desc: [
					`Phóng một đường chém gió theo hướng vung vũ khí`
				],
				type: type[1],
				group: group[1],
				from: `Kỹ năng${nameSkill[1]}+${nameSkill[4]}`,
				firstAppear: 4,
				inDesc: 0
			},
			{
				name: nameSkill[10],
				desc: [
					`Hủy đòn tấn công của đối thủ`,
					`Đối thủ sẽ bị choáng trong vài giây nếu hủy thành công`
				],
				type: type[1],
				group: group[0],
				from: `${nameCharacter[1]} tự học`,
				firstAppear: 8,
				inDesc: 0
			},
			{
				name: nameSkill[6],
				desc: [
					`Cường hóa khả năng hoạt động vật lý`
				],
				type: type[1],
				group: group[0],
				from: `${nameCharacter[4]} dạy`,
				firstAppear: 8,
				inDesc: 0
			},
			{
				name: nameSkill[14],
				desc: [
					`Dùng gió xoáy nhẹ xung quanh đối tượng để tách các phần bẩn ra`
				],
				type: type[1],
				group: group[1],
				from: `Kỹ năng${nameSkill[1]}`,
				firstAppear: 11,
				inDesc: 0
			},
			{
				name: nameSkill[17],
				desc: [
					`Thổi bay đối tượng trước mặt ra một khoảng để tạo khoảng cách an toàn`
				],
				type: type[1],
				group: group[1],
				from: `Kỹ năng${nameSkill[1]}`,
				firstAppear: 12,
				inDesc: 1
			}
			// 	name: `Cooking`,
			// 	`Đồ ăn sẽ có tổng Effect gồm Buff và Debuff (như là Hồi HP, hồi MP, dính độc, ...) tương ứng với các nguyên liệu được dùng`
			// 	name: `Heat Resistance`,
			// 	`Nhiệt độ cơ thể không bị ảnh hưởng bởi tác động bên ngoài ở mức nhất định`,
			// 	`Cơ thể vẫn cảm nhận được nóng và lạnh lẫn bên trong và ngoài`
		],
		titles: [
			{
				name: nameTitle[0],
				desc: [
					`Đã chết ở thế giới trước và được tái sinh đến thế giới mới`,
					`Thêm tính năng che giấu thông tin tùy chọn trong ${statusBoard}`
				],
				from: `${nameLocation[1]}`,
				firstAppear: 3
			},
			{
				name: nameTitle[1],
				desc: [
					`Người có thể ra lệnh cho những cơn gió`,
					`Dễ dàng học phong thuật`,
					`Giảm thời gian và ma lực khi sử dụng phong thuật`
				],
				from: `Điều ước bên ${nameLocation[1]}`,
				firstAppear: 3
			}
		],
		item: [
			{
				name: nameItem[2],
				desc: [
					`Khối lập phương bạc đầy lòng bàn tay`,
					`Không thể bị phá hủy hoặc bị mất`,
					`Chỉ người sở hữu mới dùng được`,
					`Cung cấp bất cứ dụng cụ nhà bếp mà người dùng từng thấy trong${nameLocation[0]}bằng cách dùng ma lực`,
					`Dụng cụ tồn tại nửa tiếng nếu xa người dùng`,
					`Dụng cụ có thể chuyển đổi lại thành ma lực`,
					`Dụng cụ nếu bị hư hại nặng sẽ biến mất`
				],
				from: `Điều ước bên ${nameLocation[1]}`,
				firstAppear: 3
			},
			{
				name: `Lông vũ`,
				desc: [
					`To bằng hai ngón tay, dài bằng một bàn tay của người trưởng thành. Có màu nửa trắng phần chân và lam phần đầu`
				],
				from: `Diều hâu`,
				firstAppear: 6
			}
		]
	},
	{
		id: 1,
		title: nameCharacter[11],
		otherName: [
			{
				name: `Cô bé lạnh lùng`,
				desc: [
					`Tên do ${nameCharacter[1]} gọi khi ${nameCharacter[11]} né tránh cậu`
				],
				firstAppear: 5
			},
			{
				name: `Hyoukya`,
				desc: [
					`Tên trùng âm nya do ở cuối câu của ${nameCharacter[10]}`
				],
				firstAppear: 10
			},
			{
				name: `Bé tuyết`,
				desc: [
					`Tên do Itsuki gọi để trêu ${nameCharacter[1]}`
				],
				firstAppear: 14
			}
		],
		age: [
			10
		],
		gender: [
			gender[1]
		],
		race: [
			race[1]
		],
		status: [
			status[0]
		],
		like: [
			`“Gia đình”`,
			`Thỏ bông`,
			`Gần ${nameCharacter[1]}`,
			`Đồ ăn ${nameCharacter[1]} nấu`
		],
		dislike: [
			`“Gia đình” và nhất là ${nameCharacter[1]} bị nói xấu`,
			`Người quen rời bỏ`
		],
		debut: 5,
		appearance: [
			`Cơ thể khá nhỏ nhắn, cao 163 cm, nặng 51 kg (khi 18 tuổi)`,
			`Mái tóc ngắn trắng như tuyết, bên phải có một đoạn tết tóc và trên đó có cài kẹp tóc gắn viên pha lê màu lục nhạt`,
			`Đôi mắt lòng trắng làm nền cho con ngươi lam nhạt như màu của băng`,
			`Đôi tai nhỏ dài như lá trúc vì là bán Elf`,
			`Khuôn mặt không còn biểu lộ cảm xúc do cú sốc mất cha cũng như là tất cả đối với ${nameCharacter[11]}`,
			`Tính cách ít nói, khó tiếp cận, khá thẳng thắn, hơi nhạy cảm khi có người nhắc đến ${nameCharacter[1]}`
		],
		personality: [
			`Mẹ là Elf, cha là con người nên ${nameCharacter[11]} là bán Elf`,
			`Mồ côi mẹ từ khi sinh ra theo lời cha kể, nên cô sống cùng cha là thương nhân thường hay di chuyển khắp nơi nên họ không có nơi định cư`,
			`Năm 8 tuổi, cô cùng cha đang trên đường đến thị trấn ${nameLocation[2]} thì bị đám ma thú ${nameMob[0]} mắt đỏ tấn công và cha cô qua đời. ${nameCharacter[11]} bộc phát kỹ năng, rơi vào trầm cảm và khuôn mặt cô trở nên không cảm xúc. Lúc này, ${nameCharacter[11]} được đưa đến ở cô nhi viện do sơ ${nameCharacter[5]} quản lý thuộc thị trấn ${nameLocation[2]}`,
			`Sau khi được ${nameCharacter[1]} tìm ra kẹp tóc bị đánh rơi và chia sẻ nỗi lòng cùng nhau. Cô đã cởi mở hơn chút với mọi người, nhưng riêng với ${nameCharacter[1]} thì cô đã dành cho cậu một sự quan tâm đặc biệt`,
			`Năm 10 tuổi, nhận chức nghiệp và làm ${nameJob[8]} cùng nhóm bạn. Đồng thời là 1 trong 4 thành viên đầu tiên của tổ đội ${nameParty[0]}`
		],
		relative: [
			{
				name: `Cha ${nameCharacter[11]}`,
				desc: [
					`Không rõ tên, đã qua đời`
				]
			},
			{
				name: `Mẹ ${nameCharacter[11]}`,
				desc: [
					`Không rõ tên, đã qua đời`
				]
			},
			{
				name: nameCharacter[1],
				desc: [
					`Bạn thân, đồng đội, có tình cảm`
				]
			},
			{
				name: nameCharacter[10],
				desc: [
					`Bạn thân, đồng đội`
				]
			},
			{
				name: nameCharacter[9],
				desc: [
					`Bạn thân, đồng đội`
				]
			},
			{
				name: nameCharacter[5],
				desc: [
					`Người bảo hộ`
				]
			},
			{
				name: nameCharacter[4],
				desc: [
					`Người quen`
				]
			},
			{
				name: nameCharacter[3],
				desc: [
					`Người quen`
				]
			},
			{
				name: nameCharacter[15],
				desc: [
					`Người quen`
				]
			},
			{
				name: nameCharacter[16],
				desc: [
					`Người quen`
				]
			},
			{
				name: nameCharacter[17],
				desc: [
					`Người quen`
				]
			}
		],
		job: [
			{
				name: nameJob[4],
				desc: [
					`Người chuyên hỗ trợ tầm xa với độ chuẩn xác cao`,
					// `Kỹ năng thưởng:`
					`Vật phẩm khởi đầu: Cung phép`
				],
				firstAppear: 8
			},
			{
				name: nameJob[8],
				desc: [
					`Người đi phiêu lưu tìm kiếm tiền tài, danh vọng, vinh quang, thử thách và có thể đánh đổi tính mạng`,
					`Hạng: Sắt`,
					`Tổ đội: ${nameParty[0]}`
				],
				// from: `Hiệp hội ${nameJob[8]} chi nhánh ${nameLocation[2]}`,
				firstAppear: 9
			}
		],
		skill: [
			{
				name: nameSkill[7],
				desc: [
					`Đóng băng một vùng nhỏ xung quanh bản thân`,
					`Đối tượng khác trong vùng sẽ di chuyển chậm và có khả năng bị giam cầm trong băng`
				],
				type: type[1],
				group: group[1],
				from: `Kỹ năng${nameSkill[21]}`,
				firstAppear: 5,
				inDesc: 0
			},
			{
				name: nameSkill[13],
				desc: [
					`Mũi tên phép được làm từ băng`,
					`Đóng băng vùng nhỏ quanh nơi bị bắn trúng`
				],
				type: type[1],
				group: group[1],
				from: `Vật phẩm Cung phép + Kỹ năng${nameSkill[21]}`,
				firstAppear: 11,
				inDesc: 0
			},
			{
				name: nameSkill[18],
				desc: [
					`Bức tường băng tùy kích thước được dựng lên để phòng thủ diện rộng`,
					`Có thể sử dụng lên${nameSkill[13]}`
				],
				type: type[1],
				group: group[1],
				from: `Kỹ năng${nameSkill[21]}`,
				firstAppear: 12,
				inDesc: 1
			},
			{
				name: nameSkill[19],
				desc: [
					`Cọc băng tùy kích thước được dựng lên để tấn công hoặc phòng thủ nhanh`,
					`Có thể sử dụng lên${nameSkill[13]}`
				],
				type: type[1],
				group: group[1],
				from: `Kỹ năng${nameSkill[21]}`,
				firstAppear: 13,
				inDesc: 1
			},
			{
				name: nameSkill[20],
				desc: [
					`Bắn${nameSkill[13]}lên trời sẽ phân thành nhiều cái rơi xuống`,
					`Những mũi tên trượt sẽ vỡ ra tạo thành vùng lạnh làm chậm`
				],
				type: type[1],
				group: group[1],
				from: `Kỹ năng${nameSkill[21]}+${nameSkill[13]}`,
				firstAppear: 13,
				inDesc: 1
			},
			{
				name: nameSkill[21],
				desc: [
					`Điều khiển băng theo ý muốn ở mức cơ bản`,
					`Phát triển băng thuật mới`
				],
				type: type[0],
				group: group[1],
				from: `Mẹ`,
				firstAppear: -1,
				inDesc: 0
			}
		],
		titles: [
		],
		item: [
			{
				name: `Cung phép`,
				desc: [
					`Cỡ trung bình, làm từ gỗ, có gắn viên pha lê ở giữa chỗ bắn, không có dây cung`,
					`Khi sử dụng, ma lực sẽ bị hút để hình thành dây cung, còn viên pha lê sẽ tạo mũi tên phép`
				],
				from: `${nameJob[4]}`,
				firstAppear: 9
			}
		]
	},
	{
		id: 2,
		title: nameCharacter[9],
		otherName: [
			{
				name: `Konyashi`,
				desc: [
					`Tên trùng âm nya do ở cuối câu của ${nameCharacter[10]}`
				],
				firstAppear: 2.5
			}
		],
		age: [
			10
		],
		gender: [
			gender[0]
		],
		race: [
			race[0]
		],
		status: [
			status[0]
		],
		like: [
			`“Gia đình”`,
			`Bảo vệ người khác`
		],
		dislike: [
			`Không bảo vệ được người khác`
		],
		debut: 2,
		appearance: [
			`Cơ thể to lớn, cao 169 cm, nặng 68 kg (khi 18 tuổi)`,
			`Mái tóc xù xì, hơi gai màu đỏ lá phong`,
			`Đôi mắt lòng trắng làm nền cho con ngươi màu cam ban mai`,
			`Tính cách vui vẻ, đôi khi hành động không nghĩ trước và muốn bảo vệ người khác`
		],
		personality: [
			`Năm 5 tuổi, cha mẹ đã bị sát hại trong một chuyến đi bởi một băng đạo tặc. Trước khi cậu sắp bị giết thì có một người lạ mặt với cây thương đã cứu cậu trong gang tấc. Sau đó đưa cậu về sống ở cô nhi viện do sơ ${nameCharacter[5]} quản lý thuộc thị trấn ${nameLocation[2]}.`,
			`Lúc đó cậu đã luôn tự dằn vặt bản thân đã không thể bảo vệ được cha mẹ mình. Cho đến khi ${nameCharacter[1]} nghe tâm sự của cậu thì suy nghĩ trước đó mới có thể tạm thời gỡ bỏ`,
			`Năm 7 tuổi, học cách chiến đấu cùng ${nameCharacter[1]} do ${nameCharacter[4]} dạy`,
			`Năm 10 tuổi, nhận chức nghiệp và làm ${nameJob[8]} cùng nhóm bạn. Đồng thời là 1 trong 4 thành viên đầu tiên của tổ đội ${nameParty[0]}`,
			`Vào ngày đầu làm nhiệm vụ với tổ đội ${nameParty[0]}, cậu gặp sự cố với ${nameMob[3]} và đã mất mạng. Tuy nhiên, cậu gặp được thần ${nameCharacter[8]} và được Ngài cứu mạng nhưng không nói rõ lí do vì sao Ngài làm vậy`
		],
		relative: [
			{
				name: `Cha ${nameCharacter[9]}`,
				desc: [
					`Không rõ tên, đã qua đời`
				]
			},
			{
				name: `Mẹ ${nameCharacter[9]}`,
				desc: [
					`Không rõ tên, đã qua đời`
				]
			},
			{
				name: nameCharacter[1],
				desc: [
					`Bạn thân, đồng đội`
				]
			},
			{
				name: nameCharacter[10],
				desc: [
					`Bạn thân, đồng đội`
				]
			},
			{
				name: nameCharacter[11],
				desc: [
					`Bạn thân, đồng đội`
				]
			},
			{
				name: nameCharacter[5],
				desc: [
					`Người bảo hộ`
				]
			},
			{
				name: nameCharacter[4],
				desc: [
					`Người quen`
				]
			},
			{
				name: nameCharacter[3],
				desc: [
					`Người quen`
				]
			},
			{
				name: nameCharacter[15],
				desc: [
					`Người quen`
				]
			},
			{
				name: nameCharacter[16],
				desc: [
					`Người quen`
				]
			},
			{
				name: nameCharacter[17],
				desc: [
					`Người quen`
				]
			}
		],
		job: [
			{
				name: nameJob[5],
				desc: [
					`Người sẽ luôn xả thân để bảo vệ điều mình cho là quan trọng`,
					`Kỹ năng thưởng:${nameSkill[15]}`,
					`Vật phẩm khởi đầu: Chùy gai và Trọng khiên`
				],
				firstAppear: 8
			},
			{
				name: nameJob[8],
				desc: [
					`Người đi phiêu lưu tìm kiếm tiền tài, danh vọng, vinh quang, thử thách và có thể đánh đổi tính mạng`,
					`Hạng: Sắt`,
					`Tổ đội: ${nameParty[0]}`
				],
				// from: `Hiệp hội ${nameJob[8]} chi nhánh ${nameLocation[2]}`,
				firstAppear: 9
			}
		],
		skill: [
			{
				name: nameSkill[6],
				desc: [
					`Cường hóa khả năng hoạt động vật lý`
				],
				type: type[1],
				group: group[0],
				from: `${nameCharacter[4]} dạy`,
				firstAppear: 12,
				inDesc: 0
			},
			{
				name: nameSkill[15],
				desc: [
					`Đưa bản thân xuất hiện trước đòn tấn công vào đối tượng được lựa chọn để có thể đỡ đòn ngay lập tức`
				],
				type: type[1],
				group: group[0],
				from: `Chức nghiệp ${nameJob[5]}`,
				firstAppear: 12,
				inDesc: 0
			},
			{
				name: nameSkill[16],
				desc: [
					`Người dùng sống lại và hồi phục các thương tổn nặng`,
					`Tự động kích hoạt khi hi sinh bảo vệ mạng sống khác`,
					`Có thể sử dụng lại khi bình minh của ngày hôm sau ló rạng`
				],
				type: type[0],
				group: group[1],
				from: `Danh hiệu ${nameTitle[3]}`,
				firstAppear: 12,
				inDesc: 0
			}
		],
		titles: [
			{
				name: nameTitle[2],
				desc: [
					`Hay tạo ra rắc rối cùng ${nameCharacter[10]}`
				],
				from: `${nameCharacter[1]}`,
				firstAppear: 2
			},
			{
				name: nameTitle[3],
				desc: [
					`Người luôn giúp đỡ người khác, thậm chí có thể hi sinh vì họ`
				],
				from: `${nameCharacter[8]}`,
				firstAppear: 8
			}
		],
		item: [
			{
				name: `Chùy gai`,
				desc: [
					`Cỡ nhỏ, làm từ sắt, đầu chùy to hơn nắm đấm có sáu mặt, mỗi mặt có gai lớn ngoại trừ mặt nối với tay cầm`
				],
				from: `${nameJob[5]}`,
				firstAppear: 9
			},
			{
				name: `Trọng khiên`,
				desc: [
					`Cỡ lớn, làm từ sắt, hình chữ nhật hơi cong vào trong, rất nặng nhưng đủ để che cả cơ thể và chịu đựng tốt`
				],
				from: `${nameJob[5]}`,
				firstAppear: 9,
			}
		]
	}
	// {
		// id: ,
		// title: nameCharacter[],
		// otherName: [
		// 	{
		// 		name: ``,
		// 		desc: ``,
		// 		firstAppear: 
		// 	}
		// ],
		// age: ,
		// gender: gender[],
		// race: race[0],
		// status: status[0],
		// like: [
		// 	``
		// ],
		// dislike: [
		// 	``
		// ],
		// debut: ,
		// appearance: [
		// 	``
		// ],
		// personality: [
		// 	``
		// ],
		// relative: [
		// 	{
		// 		name: ``,
		// 		desc: ``
		// 	}
		// ],
		// job: [
		// 	{
		// 		name: ``,
		// 		desc: [
		// 			``
		// 		],
		// 		firstAppear: 
		// 	}
		// ],
		// skill: [
		//	{
		//		name: nameSkill[],
		//		desc: [
		//			``
		//		],
		//		type: type[1],
		//		group: group[1],
		//		from: ``,
		//		firstAppear: ,
		//		inDesc: 0
		//	}
		// ],
		// titles: [
		// 	{
		// 		name: ``,
		// 		desc: [
		// 			``
		// 		],
		//		from: ``,
		// 		firstAppear: 
		// 	}
		// ],
		// item: [
		// 	{
		// 		name: ``,
		// 		desc: [
		// 			``
		// 		],
		//		from: ``,
		// 		firstAppear: 
		// 	}
		// ]
	// }
];