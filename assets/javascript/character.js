const active = 'Kích hoạt';
const passive = 'Nội tại';

const character = [
	{
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
			'Nói xấu về “gia đình”',
			'Ăn các món liên quan đến cá',
			'Giả dối'
		],
		debut: 0,
		appearance: [
			'Cơ thể cân đối, cao 170cm, nặng 68kg (Khi 18 tuổi)',
			'Mái tóc ngắn, để mái vuốt qua trái có màu lam như đá lưu ly được thừa hưởng từ mẹ',
			'Đôi mắt lòng trắng làm nền cho con ngươi màu lam tựa nước biển trong xanh thừa hưởng từ cha',
			'Tính cách chững chạc, quan tâm người khác và hay tò mò'
		],
		personality: [
			'Ở kiếp trước cậu tên là Hg, 20 tuổi, đã tử vong vì gặp tai nạn trên đường. Sau đó nhờ văn phòng Re:Life, cậu được tái sinh vào một thế giới Fantasy có tên là『Dainisekai』với cái tên mới là Shuuya',
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
				name: 'Appraisal',
				from() { return fromGet(0, 'job', 0) },
				type: active,
				desc: [
					'Hiện thị thông tin chi tiết (như là tên, loại, cấu tạo, tác dụng, ...) của đối tượng bị nhìn'
				],
				firstAppear: 3,
				inDesc: 0,
				firstUse: 6
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
					// 'Kháng nóng và lạnh'
					'???'
				],
				firstAppear: 3,
				inDesc: 0,
				firstUse: -1
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
			}
		]
	}
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
		else
			temp += `+ '${where}'`;
	}
	return temp.slice(1);
}