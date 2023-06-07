const sekaiDex1 = [
	{
		title: 'Thông tin về『Dainisekai』',
		content: [
			'Nơi quy tụ mọi người chuyển sinh nhưng có thể không chung 1 lục địa hoặc 1 nơi',
			'Những người chuyển sinh đầu tiên xuất hiện vào năm 2023 (chính xác từ 20/03)',
			'Ở trung tâm thế giới sẽ có 1 cái cột trụ ánh sáng, thế giới là dạng phẳng trải dài vô tận mọi hướng, địa hình đa dạng. Cũng có vũ trụ nhưng nhìn từ trên xuống thì địa hình sẽ dài vô tận như đã nói (vì đây không phải là Trái Đất hay là Địa cầu)',
			'Có Dimension, Dungeon, làng, rừng, núi, biển, chủng loại khác nhau, chế độ cai trị, ... Bất cứ thứ gì mà bạn có thể nghĩ ra được'
		]
	},
	{
		title: 'Văn phòng Re:Life',
		content: [
			'Những người đã từng tới văn phòng Re:Life chắc hẳn sẽ nghĩ những nhân viên ở nơi đó như là Chúa hoặc một vì thần nào đó. Về ngoài thì nhìn đúng là như vậy nhưng về bản chất thì đó là nơi ban cho cơ hội thứ 2 khi cuộc đời trước vẫn chưa được hoàn thiện. Người chết sẽ đến thiên đàng hoặc xuống địa ngục hoặc đơn giản là không còn tồn tại nữa. Nhưng 1 "biến số" đã xuất hiện trên con đường đó và "biến số" ấy là văn phòng Re:Life.',
			'Ai đã thành lập nên văn phòng? Những nhân viên ấy là người thật hay là thiên thần hay là hiện thân của linh hồn? Ai là người đứng đầu? Ý đồ của họ là gì? Tại sao họ lại có sức mạnh như vậy mà cho những người đã chết không chút do dự? Cái giá sau này liệu nó có? Thiên đàng được đô thị hóa 4.0? Phòng ẩn trên con đường lên thiên đàng? Liệu có thật là được sống cuộc đời thứ 2 hay chỉ là 1 thế giới ảo? Liệu những thứ trên có thật hay chỉ là những người hấp hối đang bị đưa ra làm thí nghiệm thông qua não bộ? Có vẻ các hoài nghi đang đi xa dần nội dung ban đầu rồi nhỉ?',
			'Nếu muốn biết thêm chỉ còn cách gặp văn phòng Re:Life thôi. Tất nhiên nếu tự sát để đến đó thì ai cũng có thể rồi. Vậy nên hãy cứ sống theo như thế giới đã sắp đặt và tận hướng. Nếu "may mắn" thì biết đâu bạn sẽ có câu trả lời...',
			'Văn phòng Re:Life chỉ là truyền thuyết mà thôi'
		]
	},
	{
		title: 'Phần chỉ số',
		content: [
			'Chỉ số gồm EXP (điểm kinh nghiệp), LVL (cấp độ), HP (máu), MP (Mana), ATK (tấn công), DEF (phòng thủ), SPE (tốc độ), LUCK (may mắn) và có thể tự tạo thêm',
			'Có thể không đề cập đến nếu không thể cân bằng chỉ số',
			'Nếu đề cập mà không ghi chỉ số thì có thể dùng ? thay cho số'
		]
	}
];

const sekaiDex2 = [
	{
		title: 'Guild mạo hiểm giả',
		section: [
			{
				main: 'Thẻ mạo hiểm giả',
				content: [
					'Hiện thị 1 vài thông tin như là tên, tuổi, giới tính, chủng loại, nghề nghiệp, hạng, tiến trình nhiệm vụ hoàn thành để lên hạng, lịch sử ma thú đã săn, lịch sử nhiệm vụ hoàn thành',
					'Nguyên liệu làm thẻ phụ thuộc vào hạng hiện đang có',
					'Nhỏ máu vào thẻ sẽ liên kết linh hồn tới thẻ nên không thể thay đổi thông tin trong thẻ',
					'Thẻ được phù phép『Unbreakable』nên thẻ không thể bị phá hủy',
					'Chỉ những dụng cụ chuyên dụng của Guild mới có thể can thiệp được 1 phần thẻ'
				]
			},
			{
				main: 'Hạng mạo hiểm giả được chia làm 6 loại, thấp nhất là Iron < Bronze < Silver < Gold < Platinum < Mythril là cao nhất',
				content: [
					'Để có thể thăng hạng phải hoàn thành 100 nhiệm vụ cùng cấp hoặc hơn cấp. Sau đó số lượng yêu cầu hoàn thành nhiệm vụ sẽ tăng thêm 100 mỗi lần thăng hạng. Đồng thời cũng phải trải qua 1 bài kiểm tra đánh giá của Guild để có thể chính thức thăng hạng. Đặc biệt nếu có thành tích xuất sắc với được tín cử từ hạng Platinum hoặc Mythril hoặc từ những người có thẩm quyền sẽ được xem xét thăng hạng, bỏ qua các yêu cầu cần',
					'Sau 1 khoảng thời gian không làm nhiệm vụ sẽ bị tụt hạng, lần lượt là 1 tháng < 3 tháng < 6 tháng < 9 tháng < 1 năm. Đối với Iron nếu lâu không làm sẽ phải nộp phí là 10 xu bạc, còn đối với Mythril sẽ không bị tụt khi lâu không làm nhiệm vụ',
					'Ở vài hạng nhất định sẽ có quyền lợi đặc biệt như hạng Platinum và Mythril sẽ được trả phí sửa chữa đồ và phí chữa trị sau khi hoàn thành nhiệm vụ. Còn riêng hạng Mythril sẽ có thêm quyền lợi là hưởng lương hưu 3 xu vàng mỗi tháng khi người hạng đó chính thức nộp đơn nghỉ không hoạt động làm mạo hiểm giả nữa. Tất nhiên họ vẫn có thể rút đơn và hoạt động tiếp nhưng lương hưu sẽ tạm dừng, sau đó vẫn có thể nộp lại đơn. Đổi lại họ sẽ sẽ bị buộc triệu tập đến chiến trường khi nó xảy ra nếu sức khỏe còn tốt'
				]
			},
			{
				main: 'Nhiệm vụ sẽ được phân loại để phù hợp với thứ hạng',
				content: [
					'Có thể nhận nhiệm vụ cao hơn 1 hạng nhưng không thể nhận nhiệm vụ thấp hạng. Có thể làm nhiệm vụ cao hạng hơn nếu được mời tham gia vào Party nhưng phải cân nhắc nếu quá chênh lệch trình độ',
					'Sau khi hoàn thành nhiệm vụ sẽ được nhận tiền thưởng ghi trong yêu cầu',
					'Tùy vào nhiệm vụ sẽ có gia hạn thời gian hoàn thành hoặc không',
					'Đối với nhiệm vụ yêu cầu từ người khác sẽ cần chữ kí của họ để xác nhận hoàn thành nhiệm vụ',
					'Nếu nhiệm vụ bị thất bại sẽ bị trừ 1 điểm tiến trình nhiệm vụ đã hoàn thành'
				]
			},
			{
				main: 'Party có thể tạo tạm thời hoặc lâu dài',
				content: [
					'Không giới hạn số lượng thành viên trong Party',
					'Những người trong Party có thể xem Status của nhau',
					'Khi làm nhiệm vụ có yêu cầu Party sẽ được bên Guild thưởng thêm 5% tiền thưởng cho mỗi thành viên trong Party tham gia nhiệm vụ, trừ trưởng Party. Còn nhận nhiệm vụ không có yêu cầu Party sẽ không thưởng thêm',
					'Số tiền thưởng tự bên Party chia đều cho các thành viên'
				]
			},
			{
				main: 'Các vi phạm',
				content: [
					'Mất thẻ phạt 50 xu bạc để làm lại',
					'Dùng thẻ của người khác phạt 1 xu vàng và 1 tuần đình chỉ',
					'Giả mạo thẻ sẽ bị cấm vĩnh viễn làm mạo hiểm giả',
					'Các mạo hiểm giả gây gổ với nhau dẫn đến bạo lực bộc phát phạt 1 xu vàng và 1 tuần đình chỉ',
					'Khiến người khác bị liên lụy khi đang làm nhiệm vụ phạt 3 xu vàng và 1 tháng đình chỉ',
					'Bỏ rơi người yêu cầu trong nhiệm vụ hộ tống hoặc bỏ rơi thành viên Party trong tình thế nguy hiểm khi có thể cứu phạt 10 xu vàng, tụt 1 hạng và 3 tháng đình chỉ',
					'Giết người vô tội sẽ bị cấm vĩnh viễn làm mạo hiểm giả và bị xử theo luật của đất nước'
				]
			}
		]
	},
	{
		title: 'Các dạng của Mana ',
		section: [
			{
				main: 'Dạng loãng',
				content: [
					'Không thể thấy (hoặc có nếu dùng Skill hoặc là đặc tính đặc biệt của loài hoặc có ma cụ, ...) nhưng có thể cảm nhận được',
					'Được tạo ra từ tự nhiên như trong không khí, trong mặt đất, trong cây cối, ...'
					
				]
			},
			{
				main: 'Dạng đặc',
				content: [
					'Có thể thấy (hoặc không thể do 1 vài Skill) và có thể cảm nhận',
					'Hình thành từ Skill như hỏa cầu, băng tiễn, phong chảm, cường hóa, ...'
				]
			}
		]
	},
	{
		title: 'Inventory (Kho đồ)',
		section: [
			{
				main: '',
				content: [
					'Không được xét vào mục Skill hay Dimension',
					'Luôn gắn liền với mỗi người (nếu người chết thì Inventory cũng mất)',
					'Không ai khác có thể biết trong Inventory của bạn có gì hay dùng Inventory của bạn được',
					'Để lấy Item chỉ cần nghĩ tới nó hoặc mở Status rồi vào mục Inventory để lấy Item và để cất Item thì phải chạm vào nó',
					'Trạng thái Item trong Inventory sẽ bị khóa, nghĩa là đồ ăn sẽ không bị thối rữa, độ bền của Item sẽ không đổi, Item nóng sẽ vẫn nóng, ...',
					'Không thể chứa sinh vật có nhận thức đang còn sống',
					'Mọi người chuyển sinh đều có Inventory max 9 slot',
					'Số người trong thế giới có Inventory là hiếm'
				]
			}
		]
	},
	{
		title: 'Ma vật (Magical creature)',
		section: [
			{
				main: 'Đa dạng thể loại và có các cách gọi riêng theo đặc',
				content: [
					'Ma nhân là ma vật có đặc tính và dáng vẻ sát với con người nhất. Gồm Goblin, Zombie, Skeleton, ...',
					'Ma thú là ma vật có đặc tính như động vật, côn trùng. Gồm Horned Rabbit, Ligheep, ...',
					'Ma nhiên là ma vật có đặc tính từ tài nguyên tự nhiên hoặc thực vật. Gồm Golem, Slime, Carnivorous Plant, ...',
					'Ma linh là ma vật siêu nhiên, khó nhận ra. Gồm Ghost, Soul, Spirit, ...'
				]
			},
			{
				main: 'Có thể bị thuần hóa nhờ vào việc đối xử hoặc thỏa mãn điều kiện của ma vật',
				content: [
					'Mỗi cá nhân sẽ có cá tính khác nhau nên rất khó để biết được ma vật muốn gì'
				]
			},
			{
				main: 'Mỗi ma vật sẽ có 1『Crystal』và tùy vào cấp độ của ma vật mà kích thước, lượng Mana và chất lượng『Crystal』sẽ thay đổi',
				content: [
					'『Crystal』là nơi chứa Mana hoặc có thể nói là sinh mệnh của ma thú',
					'Nếu『Crystal』bị nứt sẽ giảm sức mạnh, giảm các khả năng và nếu bị vỡ ma thú sẽ chết lập tức. Có thể khôi phục tổn hại nhờ vào lượng lớn Mana hoặc Skill',
					'Vị trí『Crystal』phần lớn ở giữa phần thân cơ thể, gần trái tim (nếu có)',
					'1 vài ma vật mạnh khi sống sẽ có『Crystal』chạy quanh khắp cơ thể khiến việc tiếp cận khó hơn'
				]
			},
			{
				main: 'Ungroup',
				content: [
					'Xuất hiện tự nhiên hoặc có thể sinh sản hoặc được tạo ra hoặc được triệu hồi',
					'Tùy vào đặc tính loài sẽ hiền lành hoặc nguy hiểm',
					'Phần lớn ma vật có thể dùng Skill',
					'Sau khi chết sẽ không Drop Item mà thay vào đó phải mổ để phân tách nguyên liệu'
				]
			}
		]
	},
	{
		title: 'Dimension (Chiều không gian)',
		section: [
			{
				main: 'Các Dimension (gọi tắt là D) không hoàn toàn có địa hình tương tự nhau',
				content: [
					'Tại vị trí nơi bạn đứng ở D1 là khu rừng nhưng cùng vị trí đó ở D2 chưa chắc đó là khu rừng'
				]
			},
			{
				main: 'Dùng nhận thức để vào Dimension khác thông qua 2 cách',
				content: [
					'Trực tiếp nhờ vào đặc điểm của chủng loài hoặc kiến thức về Dimension đó',
					'Gián tiếp nhờ vào Skill, ma cụ, ma pháp trận, ... để tăng nhận thức',
					'Sử dụng cách nào thì khi vào Dimension sẽ có 1 vòng ma pháp xuất hiện phía đầu để chuyển đi và sẽ tốn lương Mana tùy vào Dimension'
				]
			},
			{
				main: 'Tầm nhìn khi không ở trong Dimension khác sẽ xếp chồng lên Dimension hiện tại',
				content: [
					'Bạn đang đứng trước không gì cả ở D1 nhưng nếu xét ở D2 thì trước bạn là cái cây. Bạn chỉ có thể thấy chứ không thể tác động vào cái cây bởi đang ở D1',
					'Bạn đang đứng cùng 1 người khác ở D1 và bạn sang D2 thì tùy thuộc vào nhận thức của người đứng cạnh thì họ sẽ không thấy bạn hoặc là họ thấy được bạn đang ở D2'
				]
			},
			{
				main: 'Chỉ có thể tác động vào Dimension khi ở trong Dimension đó',
				content: [
					'Bạn đang trong D1 thấy cái cây ở D2 nhưng không thể chạm vào thì chỉ cần vào D2 là có thể chạm được vào. Có thể bẻ cành và mang về D1'
				]
			},
			{
				main: 'Không thể ở giữa các Dimension mà phải ở trong 1 Dimension',
				content: [
					'Cùng 1 vị trí ở D1 và D2 đều có cây nhưng bạn chỉ có thể chạm vào cây ở D1 hoặc D2 do bạn bắt buộc phải ở 1 trong các Dimension'
				]
			},
			{
				main: 'Khi bạn vào Dimension khác thì vị trí xuất hiện sẽ tương ứng nơi bạn đứng và khi quay về cũng như vậy',
				content: [
					'Bạn đang ở tọa độ (x:y:z) 1:3:1 trong D1 thì khi sang D2 sẽ xuất hiện ở 1:3:1. Ngược lại đang ở 2:3:1 trong D2 thì sang D1 sẽ xuất hiện ở 2:3:1'	
				]
			},
			{
				main: 'Có thể kéo sinh vật sống sang Dimension khác',
				content: [
					'Nếu sử dụng cách trực tiếp thì sinh vật sống phải chạm vào bạn',
					'Nếu sử dụng cách gián tiếp thì sinh vật sống phải ở trong tầm ảnh hưởng của Skill, ma cụ, ...'
				]
			}
		]
	}
]