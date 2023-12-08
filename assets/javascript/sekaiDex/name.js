const statusBoard = 'Bảng trạng thái';
const inventory = 'Kho chứa Không gian'

const colorOther = [
	'36363a',
	'000000',
	'deb887',
	'c0c0c0'
];
const listCharacter = [
	{	// 0
		name: 'Hg',
		color: 'ffff66'
	},
	{	// 1
		name: 'Shuuya',
		color: '4169e1'
	},
	{	// 2
		name: 'Tamada',
		color: 'ffffff'
	},
	{	// 3
		name: 'Sara',
		color: '4169e1'
	},
	{	// 4
		name: 'Haruka',
		color: '4169e1'
	},
	{	// 5
		name: 'Kalisa',
		color: 'ffff66'
	},
	{	// 6
		name: 'Tamotsu',
		color: ''
	},
	{	// 7
		name: 'Konishi',
		color: ''
	},
	{	// 8
		name: 'Iwao',
		color: 'ffff66'
	},
	{	// 9
		name: 'Kowashi',
		color: 'd33a1e'
	},
	{	// 10
		name: 'Asahi',
		color: '613bad'
	},
	{	// 11
		name: 'Hyouka',
		color: '87cefa'
	},
	{	// 12
		name: 'Fig',
		color: 'f8ff30'
	},
	{	// 13
		name: 'Koyama',
		color: ''
	},
	{	// 14
		name: 'Palas',
		color: 'ffff66'
	},
	{	// 15
		name: 'Maki',
		color: 'dbff4a'
	},
	{	// 16
		name: 'Itsuki',
		color: '138500'
	},
	{	// 17
		name: 'Katsumi',
		color: '5c4300'
	},
	{	// 18
		name: 'Viktor',
		color: ''
	}
];
let nameCharacter = [];
let colorCharacter = [];
listCharacter.forEach(element => {
	nameCharacter.push(element.name);
	colorCharacter.push(element.color);
});

const nameJob = [
	'Đầu bếp',		// 0
	'Thợ rèn',		// 1
	'Ma kiếm sư',	// 2
	'Kiếm sư',		// 3
	'Cung thủ',		// 4
	'Thánh kỵ sĩ',	// 5
	'Pháp sư',		// 6
	'Phù thủy',		// 7
	'Mạo hiểm giả',	// 8
	'Chiến binh'	// 9
];

let nameSkill = [
	'Giám định',			// 0
	'Phong pháp Tinh thông',// 1
	'Hòa âm Kết giới',		// 2
	'Trôi nổi',				// 3
	'Trảm',					// 4
	'Phong Trảm',			// 5
	'Cường hóa Thể chất',	// 6
	'Đóng băng',			// 7
	'Giáp Ma lực',			// 8
	'Hỏa',					// 9
	'Phản đòn',				// 10
	'Cường hóa Bật nhảy',	// 11
	'Cường Trảm',			// 12
	'Băng Tiễn',			// 13
	'Làm sạch',				// 14
	'Che chở',				// 15
	'Tái sinh',				// 16
	'Thổi bay',				// 17
	'Băng Tường',			// 18
	'Băng Trụ',				// 19
	'Băng Tiễn Vũ',			// 20
	'Băng pháp Tinh thông'	// 21
];
nameSkill = nameSkill.map(element => {
	return `『${element}』`;
});

const nameTitle = [
	'Người chuyển sinh',	// 0
	'Người thuần Gió',		// 1
	'Bộ đôi rắc rối',		// 2
	'Đấng cứu thế'			// 3
];

const nameItem = [
	'Thuốc Hồi phục',				// 0
	'Quả cầu ban Chức nghiệp',		// 1
	'Bộ Nhà bếp',					// 2
	'Quả cầu kiểm tra Trạng thái',	// 3
	'Thẻ định danh',				// 4
	`Sổ tay ${nameJob[8]}`,			// 5
	'Ma thạch',						// 6
	'Thảo dược Hồi phục',			// 7
	'Thuốc Ma lực',					// 8
	'Thuốc Thánh Hồi phục'			// 9
];

const nameFood = [
	'Bắp cải trộn Ngô',		// 0
	'Bò hầm',				// 1
	'Bánh mì kẹp Trứng',	// 2
	'Nước ép Táo'			// 3
];

const nameLocation = [
	'『Dainisekai』',			// 0
	'Văn phòng Re:Life',	// 1
	'Chân trời Bình minh',	// 2
	'Chân trời Vươn xa',	// 3
	'Trái đất'				// 4
];

const nameParty = [
	'Chân trời Ký lục'	// 0
];

const nameMob = [
	'Cừu Sét',	// 0
	'Thỏ sừng',	// 1
	'Slime',	// 2
	'Sói Bạc'	// 3
];