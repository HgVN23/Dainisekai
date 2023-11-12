const statusBoard = 'Bảng trạng thái';
const inventory = 'Kho chứa Không gian'

const nameCharacter = [
	'Hg',		// 0
	'Shuuya',	// 1
	'Tamada',	// 2
	'Sara',		// 3
	'Haruka',	// 4
	'Kalisa',	// 5
	'Tamotsu',	// 6
	'Konishi',	// 7
	'Iwao',		// 8
	'Kowashi',	// 9
	'Asahi',	// 10
	'Hyouka',	// 11
	'Fig',		// 12
	'Koyama',	// 13
	'Palas',	// 14
	'Maki',		// 15
	'Itsuki',	// 16
	'Katsumi',	// 17
	'Viktor'	// 18
];

const nameJob = [
	'Đầu bếp',		// 0
	'Thợ rèn',		// 1
	'Ma kiếm sĩ',	// 2
	'Kiếm sĩ',		// 3
	'Cung thủ',		// 4
	'Thánh kị sĩ',	// 5
	'Pháp sư',		// 6
	'Phù thủy',		// 7
	'Mạo hiểm giả',	// 8
	'Chiến binh'	// 9
];

let nameSkill = [
	'Giám định',			// 0
	'Lục phong Tinh thông',	// 1
	'Hòa âm Kết giới',		// 2
	'Trôi nổi',				// 3
	'Trảm',					// 4
	'Phong Đao',			// 5
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
	'Tái sinh'				// 16
];
for(var i = 0; i < nameSkill.length; i++){
	nameSkill[i] = `『${nameSkill[i]}』`;
}

const nameTitle = [
	'Người chuyển sinh',	// 0
	'Bộ đôi rắc rối',		// 1
	'Cô bé lạnh lùng',		// 2
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
	'Bắp cải trộn Ngô',	// 0
	'Bò hầm',			// 1
	'Bánh mì kẹp Trứng'	// 2
];

const nameLocation = [
	'『Dainisekai』',			// 0
	'Văn phòng Re:Life',	// 1
	'Dawn Horizon',			// 2
	'Over Horizon',			// 3
	'Trái đất'				// 4
];

const nameParty = [
	'Log Horizon'	// 0
];

const nameMob = [
	'Cừu Sét',	// 0
	'Thỏ sừng',	// 1
	'Slime',	// 2
	'Sói Bạc'	// 3
];