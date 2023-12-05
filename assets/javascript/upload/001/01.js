const mark = '001/01';
const formatStyle = 'dialogue';
const call = 'Chương';
const separator = ' - ';
const name = 'New life in wonderful world';
const volume = [
	// {
	// 	chapter: ,
	// 	title: ``,
	// 	dialogue: [
	// 		{
	// 			color: ,
	// 			name: [ `` ],
	// 			content: ``
	// 		},
	// 	]
	// },
	{
		chapter: 16.5,
		title: `Chưa viết`,
		dialogue: [
			// {
			// 	color: ,
			// 	name: [ `` ],
			// 	content: ``
			// },
		]
	},
	{
		chapter: 16,
		title: `Buổi sáng bất ổn`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ngày mới đã đến, ánh mặt trời len lỏi qua cửa sổ nơi căn bếp còn khẽ vọng ra tiếng động. Chính là tôi đây, đang nhịp nhàng đưa dao thái nguyên liệu theo giai điệu ngẫu hứng. Cứ mỗi nhịp thái, ánh sắc từ nguyên liệu được mặt trời soi rọi lại phản chiếu lên lưỡi dao, tạo nên một màn diễn ánh sáng tuyệt vời. Tôi đứng đó, làm món ăn, tận hưởng không gian gần như tĩnh lặng, để quên đi mọi thứ đã xảy ra vào ngày hôm qua.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Quên thế quái nào được cơ chứ! Chẳng thể tập trung nổi!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi hét toáng lên, phá vỡ khoảng lặng yên vốn có. Nhưng cũng chỉ là thoáng chốc bởi không còn ai ở nhà ngoại trừ tôi. Chú diều hâu từ đâu bỗng bay vụt qua cửa sổ, chắc do tôi khiến nó giật mình. Đặt con dao lên thớt, tôi thở dài, lẩm bẩm những chuyện vừa xảy ra hôm qua.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Hôm qua đúng là thảm họa mà... Các cậu ấy gặp nguy hiểm... chỉ vì quyết định nông nổi của mình...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ, tôi đã hơi phấn khích khi lần đầu ra khỏi thành, cũng như lần đầu làm nhiệm vụ. Khoảng thời gian mười năm sống yên bình trong thị trấn, dường như đã làm tôi quên đi thế giới này đầy rẫy nguy hiểm đến nhường nào.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đi cứu người gặp nạn lại trở thành nạn nhân, thật thảm hại. May thay, đến cuối cùng cả nhóm cũng được anh ${nameCharacter[16]} giải cứu...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nếu như, chậm chút nữa...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thoáng nhìn vào con dao, trên đó phản chiếu lại khuôn mặt tôi, cùng với sự dằn vặt. Tôi thất thần, đứng lặng một hồi chỉ để coi vẻ mặt của bản thân ngay lúc này...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Không không không! Chuyện đã qua rồi, mọi người vẫn ổn đấy thôi... Được rồi, phải rút kinh nghiệm, đời còn dài nên phạm sai lầm cũng được. Không sao hết, đúng vậy...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi tự an ủi bản thân để xốc lại tinh thần, nhưng cũng không đỡ được phần nào. Lại thở dài, cầm con dao lên để tiếp tục việc còn dang dở. Ngay trước khi cắt được thêm thì có tiếng gọi vọng từ bên ngoài vào.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Shuuya ơi! Có nhà không? Bọn mình đến rồi này.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `À, ra là các cậu ấy đến rồi. Tôi vội vã phản hồi lại rồi mau ra mở cửa.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi khi ồn lắm mà sao nay yên... Các cậu đang làm gì vậy?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vừa mở cửa ra, tấm khiên lớn của ${nameCharacter[9]} đang được dựng ngay trước cậu. Còn ${nameCharacter[10]} và ${nameCharacter[11]} đang núp ở phía sau. Một trò chơi gì đó ư?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `C-còn cậu thì sao? T-tại sao lại cầm theo dao vậy?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À, mình đang làm dở bữa trưa, thấy các cậu gọi nên mau ra mở cửa, xong quên luôn trên tay vẫn còn đang cầm dao.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tạm thời cất lại con dao vào ${nameItem[2]}, không ngờ tôi lại có thể bất cẩn như vậy chỉ vì mấy suy nghĩ sáng nay.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế, các cậu đang làm gì vậy?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cái này...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Đ-để đề phòng thôi nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bộ đôi có vẻ hơi hốt hoảng, họ đang giấu tôi gì đó thì phải. Trước khi tôi định hỏi thêm thì ${nameCharacter[11]} lên tiếng.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Nay Shuuya trông không được vui như mọi khi. Shuuya gặp chuyện gì không vui?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `P-phải đó nya. Trông hôm nay cậu khác thường lắm nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Khuôn mặt tôi biểu lộ rõ thế ư? Vậy mà từ nãy cứ tưởng đang mang vẻ thường ngày... Nghĩ tạm lí do gì đó để né tránh, tôi không muốn bị ${nameCharacter[11]} hỏi thêm. Cảm giác cứ mỗi lần hỏi là tôi lại bị đào sâu thêm, sợ nhỏ thật.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chắc do... mình vẫn còn buồn ngủ ý mà. Hôm qua nhiều chuyện xảy ra làm mình bị đuối sức...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}`, `${nameCharacter[11]}` ],
				content: `À! Ra là thế (nya)!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ế? Bằng cách nào đó tôi qua mắt các cậu ấy một cách dễ dàng, nhất là ${nameCharacter[11]}... có lẽ vậy...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ờm, mình vẫn còn đang làm dở đồ ăn trưa, vậy nên các cậu vào nhà đợi chút nha. Còn ${nameCharacter[9]} thì cất cái khiên đi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Phải rồi, mình quên mất.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Rốt cuộc các cậu ấy làm trò gì nhỉ? Không nghĩ ngợi thêm, tôi dẫn mọi người vào phòng khách và mời dùng ${nameFood[3]} trong lúc đợi. Đây là nước ép hoa quả đơn thuần tôi làm từ sáng sớm, vì tí nữa cần phải bàn vài thứ với mọi người nên có thể sẽ lâu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mau chóng vào lại bếp, tôi hoàn thiện nốt đồ ăn trưa. Trong lúc đấy, cuộc nói chuyện trong phòng khách diễn ra khá sôi động, vọng sang cả căn bếp. Tuy không nghe rõ nội dung nhưng loáng thoáng mọi người có nhắc đến tên tôi, tò mò thật.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau một hồi thì tôi cũng xong, đồ ăn trưa được cất ngay vào ${inventory} để bảo quản và cũng tránh quên mang đi. Quay lại phòng khách, các cậu ấy mải trò chuyện quá nên không để ý tôi bước vào. Tò mò về nội dung, tôi tiến lại gần sau bộ đôi, khẽ đặt tay lên vai họ và hỏi với vẻ mặt tươi cười hơn vừa rồi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người đang nói chuyện gì đó?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vừa dứt câu, bộ đôi giật bắn mình, nhất là ${nameCharacter[10]}. Tai với đuôi của nhỏ dựng thắng đứng cả lên, đặc biệt hơn là lông đuôi còn xù hết như bông lau.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}` ],
				content: `(NY)A!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À... Làm các cậu giật mình rồi...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `T-tại sao cậu lại làm thế hả Shuunya!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `T-tim mình...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Chẳng lẽ giật mình đến vậy à? Tôi tin bản thân không có kỹ năng lén lút nào cả. Nhất là ${nameCharacter[10]} phải nghe thấy tiếng tôi bước vào chứ... hay do mải nói chuyện nhỉ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình không cố tình, xin lỗi nha...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Khó xử thật... có lẽ không nên hỏi thêm nữa thì tốt hơn. Mà cũng hơi lạ khi ${nameCharacter[11]} không lên tiếng khi thấy tôi. Thường thì tôi hay bị nhỏ bám lấy... chắc cũng mải nói chuyện nốt. Hoặc do hôm nay tôi nghĩ hơi nhiều...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi qua phía ghế trống ở giữa bàn, từ đây có thể thấy bao quát mọi người. ${nameTitle[2]} ở hướng trái, còn ${nameCharacter[11]} ngồi bên phải đối diện với bộ đôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Được rồi, trước khi chúng ta đi làm nhiệm vụ thì mình có vài điều cần phải bàn. Chính vì thế, lần đầu tiên tổ đội ${nameParty[0]} sẽ có cuộc họp!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người đều vỗ tay và “Ồ” nhẹ lên một tiếng. Đáng lẽ tôi phải tổ chức từ hôm qua mới đúng, nhưng ai nấy cũng đều phấn khích quá nên quên luôn.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Trước tiên là chức trưởng tổ đội ${nameParty[0]}. Chúng ta chưa bàn về cái này, thế nên là mọi người tin ai có đủ khả năng lãnh đạo nào?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vừa dứt lời, các cậu ấy đã cho tôi câu trả lời một cách nhanh chóng.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}`, `${nameCharacter[11]}` ],
				content: `Shuu(n)ya!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Rồi, vậy Shuuya sẽ là... Hể? Khoan đã! Tại sao lại đều chọn mình vậy?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi cứ nghĩ những lúc thế này các cậu ấy sẽ tự ứng cử bản thân chứ, nhất là bộ đôi. Vậy mà cả ba cậu ấy đều chọn tôi, bất ngờ thật.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Tại vì... nó hiển nhiên?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đừng trả lời mình bằng một câu hỏi khác chứ... Thế còn ${nameCharacter[9]} thì sao? Cậu ấy có khả năng giao tiếp tốt và đây là thứ cần ở một lãnh đạo.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Đúng là vậy, nhưng mà cậu ấy đôi khi hơi ngốc nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Này!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy còn ${nameCharacter[10]}? Với sự cuốn hút bằng vẻ luôn lạc quan sẽ làm nên một lãnh đạo có thể vực dậy đồng đội mỗi lần vấp ngã đó.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Mình phải thừa nhận nhỏ có sức hút đặc biệt thật...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} nghe thế, đôi tai liền vểnh lên còn đuôi thì khẽ vung vẩy nhẹ sang hai bên. Trông nhỏ thích thú chưa kìa.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Mà mỗi tội nhỏ hay mất tập trung lắm. Lỡ quên việc quan trọng thì báo hại cả nhóm đấy haha. AU AU AU!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đột ngột bàn rung nhẹ một cái, tôi cúi người xuống ngó thì thấy ${nameCharacter[10]} đang dẫm lên chân của ${nameCharacter[9]}. Nhỏ bị cậu ấy cho rơi tự do sau khi được kéo lên mây đây mà. Lúc này, ${nameCharacter[10]} mặt phụng phịu với đôi tai dạt xuống còn đuôi thì dựng đứng khẽ rung nhẹ.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Tại sao cậu lại nói mình vậy hả Konyashi!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ai biết gì đâu, mình chỉ nêu ý kiến thôi mà. AU AU AU! Đừng có giẫm nữa!`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu đáng bị vậy, đồ ngốc Konyashi!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nhỏ này...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Trời... Giờ bộ đôi quay ra cắn nhau rồi, biết thế không nên đề cử các cậu ấy...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế còn ${nameCharacter[11]} thì sao? Cậu ấy có mắt nhìn người...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}` ],
				content: `Cậu ấy khó giao tiếp (nya)! À...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Khoan, mình chỉ nhất thời nói vậy thôi!`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Xin lỗi nya! Bọn mình không có ý đó nya...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bộ đôi lập tức hết dỗi nhau, thay vào đó là hốt hoảng khi lỡ dồn sự tức giận của bản thân đẩy sang ${nameCharacter[11]}. Mà tôi nghĩ nhỏ cũng không bận tâm lắm.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Không có sao, mình không để tâm. Cuối cùng chỉ có ${nameCharacter[1]} là thích hợp nhất.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy... Các cậu thử nói xem tại sao mình lại thích hợp...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi lỡ nói ra mất rồi! Đáng ra tôi có thể cứ nhận luôn cho xong vậy mà... Hầy... Chỉ vì tôi cũng hơi tò mò mọi người nghĩ gì về mình nên lỡ nói ra, giờ thì vừa lo vừa run vừa muốn nghe vừa không muốn...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} liền đứng dậy, dõng dạc vừa nói vừa chỉ tay vào từng người gồm cả chính mình.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Để mình nói cho mà nghe nya. Shuuya giao tiếp không bằng một nửa ${nameCharacter[9]}, sự cuốn hút chắc chắn không thể bằng mình và mắt nhìn người chỉ kém hơn ${nameCharacter[11]} có chút xíu nya. Nhưng mà cậu có cả ba điều đó nên hiển nhiên là thích hợp làm lãnh đạo tổ đội ${nameParty[0]} rồi nya!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ờm... tôi sẽ tạm coi đó là lời khen? Dù sao thì trông vẻ mặt của ${nameCharacter[10]} có vẻ thỏa mãn sau khi phán mấy câu khá là hợp lí.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `À ờm... Cậu còn có thể mang được nhiều đồ đi nhờ có ${inventory} và đồ ăn do cậu làm còn ngon nữa.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi tin rằng mấy điều này không liên quan đến việc ta đang nói đến...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]} đáng tin. Mọi người sẽ luôn tin vào quyết định ${nameCharacter[1]} đưa ra. Dù có đúng hay sai.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi chạnh lòng, cắn răng, tay nắm chặt lại... Nhỏ có biết vì quyết định của tôi mà đã khiến mọi người gặp nguy hiểm ngày hôm qua không vậy? Trước khi tôi phản bác lời ${nameCharacter[11]} thì nhỏ nói thêm.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Hơn nữa, ${nameCharacter[1]} là người đã đăng ký tạo tổ đội. Nên là cố gắng lên ${nameCharacter[1]}, bọn mình sẽ ủng hộ.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}` ],
				content: `Đúng đó (nya)!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bỏ lỡ cơ hội rồi, giờ khó mà từ chối được nữa. Thôi thì tạm thời cứ làm vậy, cho đến khi các cậu ấy nghĩ mình không còn thích hợp.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nếu không ai có thêm ý kiến gì thì mình xin nhận làm lãnh đạo tổ đội ${nameParty[0]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Các cậu ấy đều vỗ tay rôm rả nhưng tôi thấy bản thân không xứng đáng lắm. Lấy lại phong thái thường ngày, tôi chuyển sang bàn chuyện tiếp theo.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Giờ chúng ta sẽ bàn về khoản tiền kiếm được mà mình cầm hộ các cậu ngày hôm qua...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi vừa nói, vừa lấy số tiền cùng ba túi rỗng nhỏ trong ${inventory} ra đặt trên bàn. Mắt ai nấy cũng sáng lên vì chỗ tiền, tuy không nhiều nhưng đều là công sức của các cậu ấy kiếm được mà có.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Vậy, chia đều thế nào đây?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À, chỗ này bị gộp chung do hôm qua vội rời đi quá. Mỗi người làm nhiệm vụ riêng nên là sẽ nhận đúng lượng mà các cậu kiếm, còn khi nào làm nhiệm vụ chung thì sẽ chia đều nha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Việc chia như này cũng có phần hơi khiến các cậu ấy so đo chút. Nhưng cũng có thể tăng thêm động lực... tôi không chắc lắm. Nhưng mà mọi người thân nhau nên tôi tin sẽ ổn thỏa thôi... hiện tại là vậy.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình chia xong rồi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cảm ơn ${nameCharacter[11]}, giờ thì mình sẽ chia... Ế! Khoan, hể?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vừa ngước xuống thì một chồng xu đồng đã xuất hiện trước mặt, có vẻ là chia trong lúc tôi còn bận suy nghĩ. Bộ đôi cũng ngạc nhiên không kém gì tôi với khả năng của ${nameCharacter[11]}.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu tính toán nhanh thật đấy Hyoukya. Lại còn nhớ cả lượng tiền mọi người đã kiếm được nữa nya.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Xưa mình có phụ cha khi buôn bán. Mấy chuyện này không làm khó mình.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nhỏ nói với vẻ mặt không rõ cảm xúc thường ngày trong khi giơ cao ngón cái, trông đắc ý thật. Khả năng tính toán của ${nameCharacter[11]} thì mọi người cũng đã thấy trong giờ học Toán của sơ ${nameCharacter[5]} rồi, thậm chí nhanh hơn cả tôi. Giờ bộ đôi cũng như tôi phát hiện ra thêm trí nhớ tốt của nhỏ nữa nên mới ngạc nhiên đến vậy.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]}, còn xu vàng này...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đồng xu đó đang nằm trên mặt bàn, tôi đưa hai ngón tay cái và trỏ ra dựng lên, rồi xoay nó không vì mục đích gì cả.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình tính là sẽ tạo ra quỹ chung của tổ đội ${nameParty[0]}, bắt đầu bằng xu vàng này và phần trả thêm từ nhiệm vụ mình làm.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Quỹ chung?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Nó làm được gì thế nya?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hừm... Nhìn phản ứng của bộ đôi thì có vẻ họ không biết thuật ngữ này, ${nameCharacter[11]} thì hiểu do từng ở cùng cha là một thương nhân.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Quỹ chung là một khoản tiền được đóng góp bởi các thành viên. Thường là để chi trả cho các hoạt động chung hay riêng hoặc cho trường hợp khẩn cấp hoặc...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi mới có nói vài câu mà mặt bộ đôi trông đơ ra luôn...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ờm thì... nói dể hiểu hơn là mọi người góp tiền chung rồi sử dụng như là mở tiệc ăn mừng hay mấy việc tương tự á.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}` ],
				content: `À! Ra là thế (nya).`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bộ đôi hiểu được là tốt cho tôi rồi, có gì để lúc khác nói lại vấn đề này cũng được.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Vậy thì chắc mình cũng góp vào một chút nhỉ?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Mình nữa nya.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Ừm, cả mình.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Khoan đã các cậu, do mình chưa bảo trước nên để lần sau nha.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Sao lại để lần sau? Bây giờ mình đang có tiền mà?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình tin rằng các cậu đã có dự định dùng chúng trước đó rồi đúng không?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Trông mọi người có vẻ hơi bén lẽn, chắc là tôi nói đúng rồi.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `C-cậu nói đúng thật nya...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cứ vậy đi ha. Giờ thì, ai nên cầm quỹ đây?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}`, `${nameCharacter[11]}` ],
				content: `Shuuya chứ còn ai nữa (nya)!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Hể? Lại là mình? Tại sao vậy?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}`, `${nameCharacter[11]}` ],
				content: `Vì ${nameCharacter[1]} có ${inventory} chứ sao nữa (nya)!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Trả lời ngay lập, lại còn đồng thanh chứ, không cho tôi được phản bác luôn...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nếu thế thì các cậu không sợ mình sẽ bí mật tiêu chỗ đó à?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thay vì khiến các cậu ấy nghĩ lại quyết định thì họ cười lớn, riêng ${nameCharacter[11]} quay mặt đi nhưng nhỏ chắc cũng đang nhịn cười vì tôi thấy ghế hơi rung.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Xin lỗi xin lỗi... Nãy là câu buồn cười nhất mà mình từng nghe từ cậu đấy.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Phải đó nya. Mình chưa từng thấy ${nameCharacter[1]} tiêu tiền bao giờ cả nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Làm gì có chuyện đấy! Với cả, có phải lúc nào các cậu cũng ở cùng mình đâu sao mà biết được chứ.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Thứ ${nameCharacter[1]} mua gần đây nhất là gì?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đó là... là...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ủa khoan... Hình như tôi chưa từng tiêu tiền thì phải... Phần lớn khi cha mẹ cho tiền tôi đều từ chối, có những lúc bị ép quá đành nhận xong cất vào ${inventory} rồi quên luôn... Các cậu ấy nói đúng thật...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Được rồi! Vấn đề tiếp theo là trang bị...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}`, `${nameCharacter[11]}` ],
				content: `Đổi chủ đề luôn kìa (nya).`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chúng ta là ${nameJob[8]}, vậy mà quên đi thứ quan trọng nhất... Đó chính là giáp! Thế nên, giờ ta sẽ đi mua sắm!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}` ],
				content: `Đây không phải là ${nameCharacter[1]} mà bọn mình biết (nya)!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Hai cậu muốn gây sự hả?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi giơ nắm đấm hướng về phía ${nameTitle[2]}, ngay lập tức hai cậu ấy hớn hở rời khỏi ghế phóng ra ngoài.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thật hết nói nổi với hai cậu ấy.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi thở dài, rồi cùng ${nameCharacter[11]} thong thả rời khỏi nhà, mặc kệ bộ đôi đợi bên ngoài từ nãy.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Bây giờ bọn mình đi đâu, ${nameCharacter[1]}?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Như mình đã nói, chúng ta sẽ đi mua sắm á. Thế nên là... tiệm rèn vũ khí với giáp, chúng ta tới đây!`
			}
		]
	},
	{
		chapter: 15.5,
		title: `Chuyện xảy ra sau đó`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau khi kể cho họ về “cuộc phiêu lưu” và xác nhận hoàn thành nhiệm vụ thì tôi cùng tổ đội ra về. Dường như nhóm tôi đã tạm thời thoát khỏi mớ rắc rối này. Nhưng mà người của hiệp hội ${nameJob[8]} có lẽ sẽ còn hỏi bọn tôi để lấy thêm thông tin. Hơn nữa, tôi còn lỡ để lộ ${inventory} lúc lấy vật phẩm để xác nhận hoàn thành nhiệm vụ nữa chứ. Ẩu thật, sau này cũng bị để ý cho coi. Hầy...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ắt xì!`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]} bị lạnh à?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À không. Chắc cha mẹ nhắc đến mình vì về muộn đây mà.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `... Tiếc là mình không xem được phản ứng của em ý sẽ thế nào.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Trò giải trí của cậu lạ thật. Mà cảm ơn vừa nãy cậu xin xác của ${nameMob[3]}, bọn tôi cần nó để nghiên cứu.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Không có gì, tôi biết bên hiệp hội không thể tự nhiên làm thế được mà. À, để tôi lấy nó ra khỏi ${inventory}.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Ơ khoan... Trời...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[17]}` ],
				content: `${nameCharacter[16]} lấy ra xác của ${nameMob[3]} đặt trên bàn, máu chảy đầy ra từ những vết thương rồi nhỏ xuống mặt sàn. Tôi muốn mắng cậu ta một trận nhưng đã cất công giúp cho hiệp hội như vậy rồi nên đành bỏ qua. Tôi thở dài...`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Được rồi! Nghĩa vụ của tôi đã xong, giờ xuống uống bia đây!`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Ừ ừ, uống bao nhiêu cũng được. Tôi mời.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Khoan đã anh ${nameCharacter[16]}. Những lần uống bia trước của anh vẫn còn chưa tính tiền. Lần này trưởng hiệp hội có mời anh uống nhưng nó không bao gồm những lần trước đó đâu. Tốt nhất anh nên trả chỗ tiền đó đi.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Thôi nào em, chỉ có hai hay ba cốc thôi đúng chứ. Để ta trả tiền cũng...`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Thùng...`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Thùng?`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Thay vì dùng từ “cốc” thì trưởng hiệp hội nên dùng từ “thùng”. Và trưởng hiệp hội cũng không muốn biết số tiền mà anh ${nameCharacter[16]} phải trả đâu. Tất nhiên số tiền đấy không chỉ tính có mỗi một ngày.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[17]}` ],
				content: `${nameCharacter[15]} trông có vẻ giận dữ... Không, chắc chắn là đang giận dữ. ${nameCharacter[16]} đột nhiên tiến lại gần ${nameCharacter[15]}, cậu ta đưa tay đặt dưới cằm của em ấy và nhẹ nhàng nâng lên để nhìn thẳng vào mặt. ${nameCharacter[15]} có chút giật mình sau hành động vừa rồi của ${nameCharacter[16]}.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Quý cô xinh đẹp như bông hoa bình minh đây không nên làm mặt cau có như vậy đâu. Nếp nhăn sẽ để lại trên khuôn mặt xinh xắn này đó.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[17]}` ],
				content: `${nameCharacter[15]} sau khi nghe xong lời đó liền đỏ hết mặt lên rồi gạt tay của ${nameCharacter[16]} ra. Em bắt đầu lúng túng, không thể nhìn thẳng vào mặt của ${nameCharacter[16]} và lời nói không còn dõng dạc như trước nữa.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `X-xinh đẹp? A-anh chỉ n-nói vậy để e-em không còn b-bực nữa thôi đúng không?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[17]}` ],
				content: `${nameCharacter[16]} đột ngột nắm chặt đôi bàn tay của ${nameCharacter[15]}. Cậu ta khiến em ấy phải nhìn thẳng vào mắt cậu.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Không. Em đúng là xinh đẹp thật mà. Sẽ có khối đứa đàn ông muốn theo đuổi em đó, chỉ có kẻ ngốc mới không chọn em thôi. Riêng anh thì... chắc không thể nào sánh ngang được với vẻ đẹp của em, ${nameCharacter[15]} à.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `V-vậy à...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[17]}` ],
				content: `${nameCharacter[15]} ngại ngùng không còn nhìn thẳng mặt của ${nameCharacter[16]} nữa.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Như vầy đi, anh mời em bữa tối nay được không? Dù sao em cũng vẫn chưa ăn gì nhỉ?`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Ừm... được thôi...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[17]}` ],
				content: `${nameCharacter[15]} dường như còn lẩm bầm gì đó nho nhỏ.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `N-nếu là anh thì đ-được thôi. E-em biết có một nhà hàng gần đây... nếu anh không ngại liệu có thể...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[17]}` ],
				content: `${nameCharacter[15]} dùng hết can đảm đưa mắt nhìn thẳng mặt ${nameCharacter[16]} nhưng từ lúc nào cậu ta đã không còn trước mặt em ấy nữa mà đứng ở ngoài cửa.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Tuyệt vời! Vậy anh chờ em dưới tầng, anh đi gọi món trước đây và... BIA MIỄN PHÍ! TA TỚI ĐÂY!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[17]}` ],
				content: `Và thế là ${nameCharacter[16]} chạy xuống dưới tầng, đúng thật là... ${nameCharacter[15]} sau đó cũng di chuyển ra cửa. Tôi không nhìn thấy mặt em ấy nên không rõ biểu cảm ra sao.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `À phải rồi, em có thể bảo ai đó lên dọn đống...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[17]}` ],
				content: `${nameCharacter[15]} nắm chắc tay nắm cửa, từ từ quay mặt nhìn về phía tôi. Đôi mắt đầy sát khí như muốn lấy mạng ai đó khiến tôi phải rùng mình. Chắc chắn là không ổn rồi ${nameCharacter[16]}, cậu đã làm gì thế này!`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Ta nghĩ lại rồi, em nên đi ăn, ta sẽ lo...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[17]}` ],
				content: `Tôi chưa dứt lời thì ${nameCharacter[15]} đóng sầm cửa lại.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `... chỗ bày bừa này...`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Mặt trời đã lặn từ lâu, chỉ còn lại ánh sáng le lói từ những ngôi nhà và từ đèn đường chứa đá phát quang soi sáng nền đất. Chú diều hâu bay qua nhóm của ${nameCharacter[1]} vẫn còn đang trên đường về nhà và họ đang nói chuyện gì đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `... Phải rồi ${nameCharacter[9]}, cậu có đề cập đến việc gặp thần? Thế chính xác nó là như thế nào?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Chắc đó chỉ là tưởng tượng lung tung của mình thôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thôi nào, cậu cứ kể đi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Thì... Sau khi đỡ cho ${nameCharacter[10]} thì mình đã bị ngất...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Khi tôi mở mắt ra thì thấy bản thân đang đứng trên thảo nguyên. Không núi, không cây, không sông, chỉ có bãi phẳng thảo nguyên xanh tươi dưới bầu trời xanh không mây. Nhìn xuống dưới chân để ý kĩ mới nhận ra tôi đang đứng ở giữa hình sao sáu cánh được tạo nên từ cỏ màu đậm hơn bình thường.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Đây chẳng phải là tường thành của thị trấn mình sao?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Đang mải suy nghĩ thì có bóng dáng ai đó tiếp cận từ đằng sau. Tôi cảm nhận được liên bật nhảy ra đằng trước, quay người lại tạo thế thủ. Lấy khiên và chùy ra nhưng nó đã không xuất hiện?`
			},
			{
				color: colorOther[1],
				name: [ `???` ],
				content: `Chính xác. Ta đã cho lãnh chúa hiện tại một lời gợi ý.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Vậy... ngài... là thần ${nameCharacter[8]}?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Ngài trông thật già, râu và tóc đều trắng dài qua cổ. Trang phục thật đơn sơ khi chỉ choàng tấm vải trắng lên người và buộc dây quanh eo. Không thể tin được mình gặp thần... Có lẽ cũng không tệ sau khi mình hi sinh ha.`
			},
			{
				color: colorCharacter[8],
				name: [ `${nameCharacter[8]}` ],
				content: `Là ta đây. Cháu có vẻ ngạc nhiên hơn ta nghĩ.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Hừm... Sao bức tượng tạc có dáng người to lớn lực lưỡng mà sao ngài trông...`
			},
			{
				color: colorCharacter[8],
				name: [ `${nameCharacter[8]}` ],
				content: `Này! Chưa có ai gặp ta trực tiếp nên làm sao biết được ta như nào mà tạc tượng đâu.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cũng đúng, vậy ngài có giận không?`
			},
			{
				color: colorCharacter[8],
				name: [ `${nameCharacter[8]}` ],
				content: `Sao ta có thể giận được chứ? Có hình dạng thế nào cũng được, miễn là vẫn có tín đồ là được, haha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Ngài dễ tính quá vậy? Hình ảnh về thần nó quan trọng lắm mà, sao ngài có thể cho qua dễ thế được...`
			},
			{
				color: colorCharacter[8],
				name: [ `${nameCharacter[8]}` ],
				content: `Ta dễ tính lắm và có lẽ cháu sắp tỉnh lại rồi đó.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ơ... ngài đọc được suy nghĩ của cháu? Và tỉnh lại?`
			},
			{
				color: colorCharacter[8],
				name: [ `${nameCharacter[8]}` ],
				content: `Cháu nghĩ đây là điểm đến cuối cùng? Không phải đâu, linh hồn của cháu chỉ ở tạm đây khi chúc phúc ta ban cho được kích hoạt thôi. Cơ thể của cháu đang được hồi phục.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `NẾU VẬY THÌ HÃY CHO CHÁU TỈNH NHANH LÊN! CÁC BẠN CHÁU CÓ LẼ VẪN CÒN GẶP NGUY...`
			},
			{
				color: colorCharacter[8],
				name: [ `${nameCharacter[8]}` ],
				content: `Cháu không cần phải vội đâu, các bạn cháu đã được an toàn rồi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Vậy thì tốt... Ơ... sao cơ thể cháu đang dần tan biến?`
			},
			{
				color: colorCharacter[8],
				name: [ `${nameCharacter[8]}` ],
				content: `Như ta đã nói, cháu đang tỉnh lại.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Vậy tại sao ngài lại cho cháu chúc phúc? Chắc chắn cháu có nghĩa vụ gì đó cần hoàn thành phải không?`
			},
			{
				color: colorCharacter[8],
				name: [ `${nameCharacter[8]}` ],
				content: `Tại sao à... Đơn giản thì cháu là người được chọn trong vòng quay. Còn nghĩa vụ của cháu là đến đây nói chuyện để ta đỡ buồn, ở đây chỉ có một mình cũng cô đơn lắm.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `XIN NGÀI ĐỪNG CÓ ĐÙA...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Các giác quan của tôi tự nhiên chậm dần và gần như không còn cảm nhận được nữa. Trong khoảnh khắc, tôi vẫn thấy ngài đang nói gì đó mà không thể nghe được.`
			},
			{
				color: colorCharacter[8],
				name: [ `${nameCharacter[8]}` ],
				content: `Một lúc nào đó, cháu sẽ tìm được câu trả lời cho bản thân.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Và đó là những gì mình đã gặp trong lúc ngất.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi sẽ vờ như đó chỉ là tưởng tượng của ${nameCharacter[9]}. Thần gì mà nghe kì lạ thật, tôi cũng chả biết phải phản hồi lại thế nào nữa. Não tôi không xử lí kịp thông tin kì lạ này.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]}, cậu nghĩ sao?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} nắm chặt áo của ${nameCharacter[9]}, có lẽ nhỏ không muốn nghe gì nữa về chuyện liên quan đến cậu ta. ${nameCharacter[10]} chắc vẫn không chấp nhận chuyện xảy đến ${nameCharacter[9]}. Cậu ấy cũng cảm nhận được điều đó nên đã đổi sang chủ đề khác.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Phải rồi ${nameCharacter[1]}, từ lúc nào mà cậu làm nhiệm vụ thu thập ${nameItem[7]} vậy?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À, chuyện đó...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Quay lại lúc sau khi “${nameTitle[2]}” chạy vào rừng và ${nameCharacter[11]} bảo tôi phải đuổi theo họ ngay lập tức.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `... Bộ đôi đó tốt nhất là nên chưa đi quá sâu vào trong khu rừng... Ơ, kia là ${nameItem[7]} nhỉ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi vội vã chạy tới kiểm tra xem có đúng là nó không. Phần thân thì giống cây giá đỗ nhưng màu lục và dài hơn một gang tay của người trưởng thành. Trên đó ở khoảng giữa sẽ có hai lá cây viền răng cưa rộng bằng hai ngón tay cái. Còn phần đầu cây sẽ xoắn lại và số vòng xoắn càng nhiều thì thuốc làm ra sẽ càng chất lượng.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chỉ có hai vòng xoắn à. Chị ${nameCharacter[15]} nói đúng thật, khó mà có thể tìm được hơn ba vòng xoắn ở thảo nguyên.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau đó tôi lấy cái kéo từ ${nameItem[2]} ra cắt cây ở gần sát mặt đất nhất. Lí do tôi không dùng tay bứt luôn là vì có thể sẽ làm gãy thân phần trên và ảnh hưởng tới chất lượng.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế là được một cây ${nameItem[7]}, ${nameCharacter[11]} cậu nghĩ... ${nameCharacter[11]}?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi quay ra thì thấy ${nameCharacter[11]} đang nằm trên mặt đất. Giật mình và tự hỏi tại sao nhỏ lại nằm đấy... A. Nhớ lại thì lúc đấy ${nameCharacter[11]} đang đẩy tôi và rồi tôi chạy đi... Mau chóng tiến tới, tôi nhấc nhỏ lên... nhẹ thật...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Xin lỗi nha, mình không để ý.${nameSkill[14]}`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Không sao. Mình đang đợi ${nameCharacter[1]}. Vậy giờ đuổi theo bộ đôi nhỉ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Phải rồi, bộ đôi...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Và thế là bọn tôi chạy vào rừng đuổi theo bộ đôi nhưng được một quãng thì...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `A! ${nameItem[7]} kìa! Đợi mình chút mình qua lấy.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]}! Nhanh lên!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Lại thêm ở đằng kia nữa, ở đây, ở kia.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]}!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình biết rồi, đợi mình thêm chút... ba xoắn! Có lẽ nào sẽ tìm được cây chất lượng cao quanh đây? Cho mình thêm vài phút... Hí!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mũi tên băng bay sượt qua bên tai trái tôi, đâm trúng vào chỗ ${nameItem[7]} và đóng băng chúng. Tôi từ từ quay đầu nhìn về phía ${nameCharacter[11]}... Cảm giác như đang nhìn vào cơn bão tuyết vậy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]}?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]}. Mình nghĩ thu thập đủ ${nameItem[7]} rồi đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À, nghĩ lại thì cậu nói đúng ha. E hèm. Chúng ta đuổi theo bộ đôi thôi...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau đó tôi chạy thật nhanh đuổi theo bộ đôi bởi nếu chạy chậm có lẽ tôi sẽ bị ăn phát tên mất.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `... Và đó là toàn bộ mọi thứ mà các cậu cần biết.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Hahaha! Mình không nhịn được cười! Không ngờ có ngày cậu cũng phải sợ ${nameCharacter[11]}. Hahaha!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cậu phải thấy vẻ mặt lúc đó của ${nameCharacter[11]} cơ. Đáng sợ lắm đó... Ái ái ái!`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]} nói ai đáng sợ cơ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nừng néo ná nình nữa, ngã nây nờ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi nhìn liếc qua ${nameCharacter[10]} thì thấy nhỏ đang cười khúc khích. Có vẻ bọn tôi đã thành công làm ${nameCharacter[10]} cười trở lại dù chỉ là một chút. Tôi nháy mắt để ra hiệu cho ${nameCharacter[9]} và cậu ta cười mỉm, gật đầu nhẹ một cái. Cuộc trò chuyện kết thúc cũng vừa đúng lúc đến nhà của tôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Được rồi, Các cậu qua nhà mình ăn tối đi. Nay ${nameCharacter[9]} săn nhiều ${nameMob[1]} nên chắc mình sẽ có thể làm được món gì đó ngon đấy.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nhưng mà cậu biết phân tách không đấy?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chắc mẹ mình sẽ biết... Nếu không ổn thì đành bỏ chỗ nguyên liệu dùng để bán thôi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cũng được. Miễn là cậu nấu ngon.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Chắc chắn là ngon. ${nameCharacter[1]} mà.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Con về rồi!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Đúng là đồ ăn của ${nameCharacter[1]} nấu ngon thật. Ăn một lần sẽ khó mà quên được hương vị đặc biệt mà cậu ấy làm ra. Tôi mong chờ được ăn món tối nay quá!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `... mai bọn mình sẽ lại qua mà. Chúc may mắn nha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Tôi đã thay đổi ý định và phóng về cô nhi viện. Có lẽ để lúc khác ăn món do ${nameCharacter[1]} nấu vậy.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Tại sao cậu lại chạy đi vậy nya?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Mình có linh cảm không ổn lắm nếu bước vào. Mà ${nameCharacter[1]} có ${nameCharacter[11]} rồi nên chắc sẽ ổn thôi.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `${nameCharacter[11]} đang ở đằng sau bọn mình nè nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Hả? ${nameCharacter[11]}! Sao cậu lại đi cùng bọn mình rồi?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Một ngày nào đó bọn mình sẽ gặp lại nhau.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Đừng nói như kiểu cậu ấy không còn ngày mai nữa chứ! Hầy... Ngay mai chúng ta tiêu rồi.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Tại sao vậy nya?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cậu đã quên vẻ mặt đáng sợ của ${nameCharacter[1]} rồi à?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Phải rồi... Mình không muốn nhớ lại đâu nya...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]} đáng sợ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]} đã nhảy xuống khỏi người tôi và đi cùng ${nameCharacter[11]}. Có vẻ nhỏ đã trở lại bình thường rồi, thật tốt... Nhưng lưng tôi đau quá...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu sẽ không muốn nhìn thấy một ${nameCharacter[1]} với vẻ mặt vui vẻ nhưng lạnh sống lưng đâu nya... Nhớ lại mình cũng thấy rùng cả mình rồi nya.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mặt khác của ${nameCharacter[1]}! Mình muốn thấy!`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Sao cậu có thể tích cực như vậy được nhỉ nya? Mà về đến nhà rồi nya. Thưa sơ, bọn con về... rồi... nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Vừa mở cánh cửa ra thì sơ ${nameCharacter[5]} đã đứng ngay đó. Chúng tôi không dám nói thêm gì vì mặt sơ đã nói hết tất cả. Có lẽ sơ đã qua nhà của ${nameCharacter[1]} hỏi vài chuyện... Và thế là tối nay bọn tôi đã không thể ăn ngon miệng.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Biết thế ăn ở nhà ${nameCharacter[1]}!`
			}
		]
	},
	{
		chapter: 15,
		title: `Nhiệm vụ hoàn thành`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hiện tại tổ đội của tôi đang ở trong phòng gặp riêng tư cùng anh ${nameCharacter[16]}, chị ${nameCharacter[15]} và trưởng hiệp hội tên là ${nameCharacter[17]}. Bác ${nameCharacter[17]} vừa bảo bọn tôi kể về “cuộc phiêu lưu” ngày hôm nay.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]}, để mình kể cho nha?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À ừm. Cậu kể đi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bên hiệp hội đang thu thập thông tin đây mà, đúng như anh ${nameCharacter[16]} đã nói trước đó. Có lẽ họ nghĩ bọn tôi còn trẻ con không hiểu chuyện nên mới nói kiểu như vậy. Chị ${nameCharacter[15]} dường như đang ghi chép mọi thứ, thôi thì cứ làm theo họ để giải quyết nhanh chóng vậy.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau khi ${nameCharacter[9]} kể xong thì tôi và ${nameCharacter[11]} bổ sung thêm một vài chi tiết vào “cuộc phiêu lưu” dưới góc nhìn của bản thân. Còn ${nameCharacter[10]} thì vẫn không nói gì.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Chỉ có một con ${nameMob[3]} thôi à?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng? Chỉ có một con.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Hừm... Có lẽ các cháu may mắn đó, bình thường bọn chúng đi theo đàn cơ. Ít nhất là ba con chứ không bao giờ đi lẻ đâu.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mắt con đó đỏ.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Mắt đỏ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Bác biết gì về nó à?`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `À, nó chỉ là căn bệnh hiếm xảy ra ở ma vật thôi. Nó khiến cho ma vật điên dại hơn bình thường, nếu các cháu mà gặp một con nào như vậy thì nên né ra và báo lại với bên hiệp hội của bác nhé.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Chỉ là một căn bệnh... liệu nó có đúng là như vậy không nhỉ...? Cảm giác như bác ${nameCharacter[17]} đang giấu giếm điều gì đó.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Rồi rồi, đến lượt tôi kể nha!`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Hầy... Cậu cứ như đứa trẻ to xác vậy.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `... Sau đó tôi vào rừng theo lời em trai kia. Đến nơi thì thấy em ${nameCharacter[1]} đang cầm dao bếp đấu với ${nameMob[3]}. Thật đấy, anh hơi bất ngờ khi có người cầm dao bếp ra chiến đấu đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Kiếm em vỡ tan rồi, biết sao được.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Được rồi, sau đó tôi chạy đến cho một đấm vào đầu con ${nameMob[3]} và thế là nó tiêu.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Một đấm? Anh nói thật chứ?`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `${nameCharacter[16]} không nói đùa đâu. Bác biết thực lực của cậu ta.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[16]}... chẳng lẽ anh là người đấm phát xong việc luôn... Tôi bắt đầu hơi lo nếu như gây sự với anh ${nameCharacter[16]}...`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Sau đó thì ${nameCharacter[1]} ngất chắc vì kiệt sức và vết thương ở tay trái nên là tôi đã cho em uống ${nameItem[8]} và ${nameItem[9]}. Rồi...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Khoan khoan đã! Anh vừa cho em uống gì cơ?`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `${nameItem[8]} và ${nameItem[9]}?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameItem[9]}! Anh đâu cần phải cho em uống loại nghe có vẻ đắt như thế này! Em nhớ không nhầm thì em chỉ bị thương nhẹ ở tay trái thôi mà!`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Không sao đâu, bạn của em cũng có phần mà. Đừng có lo nữa nhé.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Cháu cứ gật đầu và chấp nhận đi, bác đã bó tay trước thứ gọi là “bình thường” của cậu ta rồi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `... Anh kể tiếp đi...`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `... Thấy cả ba em còn lại đang nằm nên tôi cũng cho các em uống thuốc. Sau đó thì các ${nameJob[8]} ứng cứu cũng tới, phần còn lại cậu cũng biết rồi đó, ${nameCharacter[17]}.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Có vẻ chúng ta cũng nắm rõ câu truyện rồi.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Thực ra có một vấn đề tôi đang băn khoăn... Trước khi cho em ${nameCharacter[9]} uống thuốc thì... tim em ấy đã ngừng đập.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người ai sau khi nghe xong cũng bất ngờ, mặt ai cũng ngơ ngác hết. Chị ${nameCharacter[15]} đang ghi chép cũng phải dừng tay.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `A... anh nói đùa gì vậy. Em vẫn còn ngồi đây cơ mà, hết ${nameCharacter[10]} rồi lại đến lượt anh.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Chắc anh chưa nói cái này cho bọn em nhưng anh không bao giờ nói đùa về mạng sống cả.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Anh... thật à...? Vậy... chẳng lẽ em đang là xác sống?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `CẬU KHÔNG PHẢI LÀ XÁC SỐNG!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cuối cùng ${nameCharacter[10]} cũng chịu nói... ít nhất là nhỏ vẫn ổn... phần nào đó...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `A-${nameCharacter[10]} m-mình chỉ đùa thôi... Đừng buồn nữa, mình vẫn đang nói chuyện với cậu đây đúng không?`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `À ừm... Anh cứ tưởng thật cho đến khi tim em đột nhiên đập lại và vết thương lớn trước ngực tự lành. Thấy vậy anh liền đổ thuốc lên vết thương để em hồi phục nhanh hơn.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `C-cháu có phải là con người không vậy?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cháu... để cháu kiểm tra ${statusBoard} xem sao... Ủa? Mọi người xem này!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi và mọi người cùng xem ${statusBoard} của ${nameCharacter[9]} thì thấy cậu vẫn là con người. Nhưng khi lướt xuống phần kỹ năng thì thấy cậu có${nameSkill[16]}, cho phép người dùng sống lại và hồi nửa lượng máu của bản thân cùng vết thương. Tự động kích hoạt khi hi sinh bảo vệ mạng sống khác và dùng được lại khi bình minh của ngày hôm sau ló rạng. Sao cậu lại có kỹ năng như vậy được chứ? Tôi lướt tiếp xuống đến phần danh hiệu thì thấy ${nameTitle[3]} và phần mô tả ghi “Chúc phúc của thần ${nameCharacter[8]}”. Ra là vậy... có vẻ vấn đề đã được giải quyết.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Chúc phúc từ thần ${nameCharacter[8]}... Ra cháu là cậu bé sáng nhất ở nhà thờ hôm qua.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Từ khi nào mà mình lại có${nameSkill[16]}vậy nhỉ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ơ khoan... Vậy là không phải cậu có từ hôm qua?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Không.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy chẳng lẽ... từ lúc cậu ngất... thật đó hả? Tôi nghĩ sẽ nói chuyện này với ${nameCharacter[9]} sau, giờ nói ra chắc sẽ lại thêm rắc tối cho mà xem. Tôi phải kết thúc cuộc điều tra này ngay mới được.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mệt mỏi quá, mình nghĩ không còn sức để nghe thêm gì nữa rồi.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Hình như đến giờ các em ý ăn tối rồi thì phải?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tuyệt vời anh ${nameCharacter[16]}, đẩy hay lắm! Cảm ơn anh nhiều!`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `À phải, nói chuyện với các cháu vui quá nên bác không để ý. Các cháu về đi không người nhà lại lo lắng.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng! Nhưng trước đó thì chị ${nameCharacter[15]}, chị xác nhận hoàn thành nhiệm vụ của tụi em được không?`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Được thôi nhưng mà chị đâu thấy...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đây là số ${nameItem[6]}, ${nameItem[7]} và bốn ${nameItem[4]} của bọn em.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Hả! E-em có ${inventory}?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chị ơi? Xác nhận...`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `À phải rồi, em có muốn bán vật phẩm từ ma vật các em săn không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Em chỉ có xác của ma vật chưa được phân tách thôi ạ.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Nếu vậy thì em có thể nhờ nhân viên hiệp hội phân tách hộ ở dưới tầng. Thôi, chị đi xác nhận cho bọn em liền đây.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Và thế là chị ${nameCharacter[15]} cầm chỗ vật phẩm tôi đưa và vội vã bước ra khỏi phòng.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Cháu nên cẩn thận khi dùng ${inventory} trước người khác, có thể người xấu sẽ nhắm tới đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cháu biết và cháu tin mọi người ở đây sẽ không nói gì ra ngoài đâu, nhỉ?`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Liệu có không ta?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Em tin anh mà... một nửa.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Không ngờ anh không đáng tin như vậy, anh buồn quá. À mà cho anh xác của ${nameMob[3]} nhé, được không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À, mời anh. Dù sao thì anh cũng là người họ nó để cứu tụi em... Và dùng nhiều lọ thuốc trông rất đắt nữa, làm em thấy hơi áy náy...`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Anh đã bảo rồi, anh còn nhiều lắm dùng chả hết. Đây, em xem này.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `A-anh cũng có ${inventory}?`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Ối! Lộ mất tiêu rồi. Giữ bí mật cho anh nhé mấy em.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sao tôi có cảm giác anh ${nameCharacter[16]} cố tình để lộ ra thế nhỉ? Bọn tôi đang nói chuyện với trưởng hiệp hội và anh ${nameCharacter[16]} thì chị ${nameCharacter[15]} từ bên ngoài bước vào với một khay đựng xu đồng, xu vàng và ${nameItem[4]}... Khoan! Xu vàng?`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Chị đã xác nhận xong và xin chúc mừng các em đã hoàn thành nhiệm vụ đầu tiên nhé. Đây là số tiền thu mua vật phẩm mà em đưa.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Em cảm ơn... nhưng em cảm thấy chỗ xu hơi sai... Nhất là một xu vàng này.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Phải rồi, chỗ ${nameItem[7]} của em đang trong điều kiện rất tốt nên là được tăng thêm xu đồng. Còn xu vàng này thưởng thêm từ trưởng hiệp hội vì cứu người dân thị trấn.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Các cháu xứng đáng mà nên hãy nhận nó nhé.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy thì cháu xin nhận. Bọn cháu xin phép ra về, đi nào các cậu.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]}, mình nghĩ cậu sẽ không buông mình ra nên bám chắc vào nha. Mình sẽ cõng cậu về nha luôn.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Ừm.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]} giúp! Mình tê chân quá...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế là tôi quyết định cõng ${nameCharacter[11]} về, một phần cũng là để cảm ơn trước lúc tôi tỉnh lại. Và ${nameCharacter[10]} chắc mai sẽ lại như bình thường thôi... tôi mong vậy.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Lũ trẻ bây giờ khác xưa thật. Cậu nghĩ sao ${nameCharacter[16]}?`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Hừm... Theo tôi nghĩ... mấy em ấy đáng để tôi ở lại hiệp hội một thời gian và theo dõi đó.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Cậu nghiêm túc được không? Tôi đang nói đến vụ ${nameMob[3]} và mắt đỏ.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Tôi đùa tí thôi mà. Làm gì mà căng thế chứ, cậu sẽ lại già hơn bây giờ.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Thế...?`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `A hèm. Cho em xin phép được báo cáo kết luận lí do ${nameMob[3]} chỉ có một mình. Theo như câu truyện của tụi nhỏ và kết hợp với điều tra của hiệp hội thì chính con ${nameMob[3]} mắt đỏ đã sát hại cả đàn của nó.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Chà, tàn nhẫn thật đấy. Vụ này lần đầu anh mới biết.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Vậy là cậu cũng gặp các vụ mắt đỏ à?`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Ừ, ở một số nơi tôi đi qua cũng có bắt gặp ma thú mắt đỏ ở một cá thể hoặc cả đàn, chưa từng thấy trường hợp cá thể trong đàn tàn sát đồng loại. Tôi cảm thấy dường như có thứ gì đó đang tác động tới bọn nó.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Vụ này bọn tôi vẫn đang hợp tác điều tra cùng lãnh chúa. Và có vẻ phía bên vương quốc đã có hành động rồi.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Bí mật nhỉ?`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Một phần, những ai có báo cáo gặp mắt đỏ thì bên hiệp hội đều sẽ hồi đáp lại nó chỉ là căn bệnh hiếm.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Giống như vừa nãy à?`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Tụi trẻ không nên lo lắng về mấy vấn đề này. Người lớn sẽ lo, mấy đứa nó chỉ cần sống thật vui vẻ là được.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Cậu nói phải. Tôi sẽ giải quyết tụi mắt đỏ nhanh thôi, một đấm là được.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Dù sao thì... cậu có biết cô bé ${nameCharacter[11]} là một trong nạn nhân của vụ mắt đỏ hai năm về trước không? Cô bé đó đã mất hết tất cả.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Cô bé tội nghiệp. Nhưng mà, có lẽ em ${nameCharacter[11]} đã tìm ra thứ quý giá sẽ luôn ở bên cạnh em ấy. Nhìn mặt của em trông hạnh phúc lắm.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Mà... hình như tôi quên nói gì đó với nhóc ${nameCharacter[1]} thì phải...`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `À cái đó... chắc sẽ ổn thôi. Tiếc là tôi không xem được phản ứng của em ý sẽ thế nào.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Chú diều hâu đậu ở trên mái nhà của ${nameCharacter[1]} nhìn thấy tổ đội đã về đến nhà cậu. Dường như ${nameCharacter[1]} đã mời họ qua dùng bữa tối.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Con về rồi!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ta cần nói chuyện với con chút về vấn đề chiều nay. Ta đợi con trong phòng khách.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thôi rồi thôi rồi! Sao cha lại biết thế này! Tôi cần phải né vụ này mới được!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ờm... mời các cậu vào...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cậu biết gì không, nay ${nameCharacter[10]} trông không khỏe lắm nên mình xin từ chối lời mời nha. Mình về trước đây.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ơ nhưng còn tiền...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cậu cứ giữ đi, mai bọn mình sẽ lại qua mà. Chúc may mắn nha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vừa dứt lời thì ${nameCharacter[9]} cõng ${nameCharacter[10]} chạy vút đi. Đúng thật là... Không sao, tôi vẫn còn ${nameCharacter[11]}, xin lỗi nhỏ sau vậy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ chỉ còn cậu thôi... ${nameCharacter[11]}?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Chân mình hết tê rồi. Mai gặp lại.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Từ lúc nào ${nameCharacter[11]} đã xuống khỏi lưng tôi mà không hề hay biết luôn. Nhỏ cũng chạy theo sau nhóm ${nameCharacter[9]}. Nhưng tại sao... ĐỒ PHẢN BỘI! Bỗng một bàn tay ở phía sau nắm chặt vào vai trái tôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ồ, có vẻ bạn con nay không qua ăn tối rồi. Chúng ta sẽ có nhiều thời gian nói chuyện đây.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Và thế là tôi đã bị cha nói suốt hơn một tiếng với cái bụng đói meo. May mà mẹ tôi cũng nói đỡ lời nên cuối cùng cả nhà cũng được ăn. Sau đó tôi ngay lập tức leo lên giường ngủ luôn vì đã quá kiệt sức. Thật là một ngày đáng nhớ.`
			}
		]
	},
	{
		chapter: 14,
		title: `Giải cứu thành công`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thanh kiếm đã vỡ, chỉ còn con dao trên tay... Tôi sẽ kết liễu nó... Tôi... có thể...? Đó là những suy nghĩ trước khi tôi từ bỏ bởi nanh vuốt đã sát trước mắt. Vậy mà từ đâu, chàng trai mặc áo choàng dài xanh lá xuất hiện trước mặt tôi. Nắm đấm tay phải đầy máu vẫn còn đang dơ ra trước mắt. Dường như, anh ta đã hạ ${nameMob[3]} chỉ với một đấm?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Rốt cuộc là ai... vậy...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ơ...? Mọi thứ sao lại mờ đi hết rồi...? Tôi mất thăng bằng và ngã ngửa ra sau. Nhưng ngay lập tức anh ấy đã tới đỡ trước khi tôi gục xuống mặt đất.`
			},
			{
				color: colorOther[1],
				name: [ `Chàng trai` ],
				content: `Em nghỉ ngơi đi, việc còn lại hãy để mọi người lo nốt nhé.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Có nên tin vào người này không? Anh ta nói gì đó về “mọi người” nhưng xung quanh đây chỉ có mỗi anh ấy. Dù người này đã cứu tôi trong gang tấc nhưng nó lại khiến tôi không ngừng băn khoăn... Tôi cần phải... tỉnh... táo... Tôi không còn đủ sức lực để mà suy nghĩ gì nữa và đã ngất từ lúc nào không hay.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Khu rừng tuyết...? Tại sao tôi lại nằm ở đây vậy? Chẳng lẽ đã xảy ra chuyện gì sau khi tôi ngất? Chú diều hâu kia sao cứ bay vòng quanh trên trời vậy? Tôi bối rối định ngồi dậy để xem tình hình xung quanh ra sao nhưng mà không cử động được. Rồi một lúc sau có giọng nói từ hướng nào đó phát ra. Tôi cố gắng cất tiếng nói nhưng không nên lời. Và bóng của một sinh vật nào đó đã xuất hiện trước mắt tôi. Nó chỉ nhìn chằm chằm vào mặt tôi và chạm vào tóc. Tôi không hiểu sinh vật đó định làm gì nhưng có vẻ là vô hại...? Tôi nheo mắt để cố nhìn rõ thì xung quanh bắt đầu mờ dần và cái bóng đó hiện ra là... ${nameCharacter[11]}?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]} ngủ ngon không?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cuối cùng cậu cũng chịu tỉnh rồi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ngủ? Mà khoan, chúng ta đang ở đâu đây?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Bọn mình đang ở trong phòng gặp riêng của hiệp hội ${nameJob[8]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Phòng gặp riêng, nếu tôi không nhầm thì phòng này thường dùng cho các cuộc trao đổi quan trọng. Ở chính giữa phòng thì có một cái bàn vuông, xung quanh bàn là ghế đệm dài đủ cho ba người ngồi và bên còn lại là ghế đệm đơn dường như là dành cho nhân vật quan trọng.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi nằm trên ghế nhìn liếc qua căn phòng trong khi vẫn còn đang gối đùi ${nameCharacter[11]}. ${nameCharacter[10]} thì bám lấy phía sau ${nameCharacter[9]}, cậu ấy đang mang vẻ mặt bất lực và họ đang ngồi đối diện tôi... Ngày hôm nay không thể kì lạ hơn được nữa... Mà tại sao tôi lại đang gối trên đùi của ${nameCharacter[11]} vậy?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ra là chúng ta được người bên hiệp hội cứu... Mà ${nameCharacter[9]}, cậu đã làm gì ${nameCharacter[10]} vậy?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Mình cũng không biết nữa. Cậu ấy nói gì đó về hình phạt và sẽ không buông ra cho đến khi nào thỏa mãn thì thôi...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cậu nói rõ hơn xem nào.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Hừm... nói sao ta. Sau khi đỡ cho ${nameCharacter[10]} thì mình đã bị ngất và gặp ai đó tự xưng là thần trong tiềm thức...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Hả?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `À... bỏ qua chi tiết đấy đi, chắc do mình tưởng tượng. Sau đó mình tỉnh dậy trên ghế đệm trong phòng này, vừa nhổm người lên thì ${nameCharacter[10]} đã lao thẳng vào mình. Nhỏ cứ nói gì đó về việc mình làm khiên rồi tí thì không còn bao giờ tỉnh lại nữa. Rồi ${nameCharacter[10]} quàng lấy cổ mình và nói đây là hình phạt để mình không bỏ nhỏ. Và từ lúc đấy ${nameCharacter[10]} không nói gì thêm.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Từ lúc tôi tỉnh lại ${nameCharacter[10]} chưa có nói gì cả. Tôi nhìn nhỏ, khuôn mặt đượm buồn trông như đang lo lắng điều gì đó quan trọng sẽ lại rời xa một lần nữa. Nếu những lời ${nameCharacter[9]} vừa nói là sự thật thì... cậu ấy thực sự suýt nữa mất mạng... Tôi đã ra một quyết định sai lầm...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Này! Nừng nó néo ná nình nữa Nyouka!`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]}, bớt suy nghĩ lại và nghỉ chút đi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Làm sao mình có thể không suy nghĩ sau những gì đã... NAU NAU NAU!`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]}. Nghỉ. Ngơi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nược nồi nược nồi.`
			},
			{
				color: colorOther[1],
				name: [ `Chàng trai` ],
				content: `Em trai mà nghe lời trước đó thì có phải không bị đau rồi không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Có lẽ vậy... Khoan! Ai AU!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi giật mình ngã lăn xuống sàn bởi giọng nói này vừa quen nhưng cũng vừa lạ. Cảm giác như là người tôi mới gặp gần đây.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `À, đó là anh ${nameCharacter[16]}, người đã cứu bọn mình đấy.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi ngồi lại lên ghế, nhìn kĩ anh ${nameCharacter[16]} thì trông anh rất trẻ tầm khoảng hai mươi tuổi. Anh có mái tóc màu xanh lá pha chút màu nâu cùng với đôi mắt đen tuyền. Trang phục thì dường như anh lấy tông xanh lá làm chủ đạo kết hợp với màu nâu, đen với trắng. Anh còn đang mặc thêm áo choàng màu lục đậm dài đến cổ chân có mũ trùm đầu. Có lẽ thứ làm tôi tò mò nhất chính là kính chắn gió anh đang đeo để ở trên đầu, không biết tại sao anh đeo nó. Tôi cứ nhìn chằm chằm vào anh ${nameCharacter[16]} cho đến khi tôi nhận ra hành động này có hơi thô lỗ nhưng anh chỉ nở một nụ cười đáp lại. Đây đúng là người đã cứu tôi lúc đó, cái nụ cười này của người trước mặt tôi không thể nào nhầm lẫn được.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Em xin lỗi, em không nhận ra anh ngồi đấy. À ừm, anh tên ${nameCharacter[16]} nhỉ? Em tên là ${nameCharacter[1]}. Thay mặt cả tổ đội, em cảm ơn anh rất nhiều vì đã cứu tổ đội của bọn em.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}`, `${nameCharacter[9]}` ],
				content: `Em cũng cảm ơn anh lần nữa.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Anh tên ${nameCharacter[16]}, hân hạnh được làm quen với các em. Anh nghĩ người các em nên cảm ơn là cậu em trai đã đến báo với hiệp hội á.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy là cậu ta an toàn thoát khỏi rừng... may quá.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Anh chưa rõ sự tình lắm nhưng tí nữa người bên hiệp hội sẽ qua hỏi lấy thông tin đó. Tiện thể thì cảm ơn đã chiêu đãi anh nha.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chiêu đãi? Ý anh là sao?`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Không có gì đâu. Chỉ là... anh được ngồi xem hai đứa tán tỉnh nhau thôi. Mấy đứa trông đáng yêu lắm!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `BỌN EM KHÔNG TÁN TỈNH NHAU!`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Nào nào, nếu mà anh nói sai thì mặt đâu cần phải đỏ lên như thế đúng không?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ anh ${nameCharacter[16]} cũng có sở thích giống tôi, thi thoảng tôi cũng hay trêu như vậy với “${nameTitle[2]}”. Nhưng bị trêu ngược lại thì có phần ngại thật. Hành động của ${nameCharacter[11]} hơi bất cẩn... không, tôi cũng có phần hơi tự nhiên khi cứ thế mà trôi theo. Tôi quay ra liếc nhìn ${nameCharacter[11]} thì mặt nhỏ vẫn “lạnh” như bình thường, tất nhiên là ngoại trừ đôi tai lá trúc đỏ chót nổi bật trên nền tóc trắng của nhỏ.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Em trai thấy bé tuyết này đang lúng túng có dễ thương không nè?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Tất nhiên là cậu ấy siêu dễ... A...`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Hửm...? Em định nói gì ấy nhỉ? Anh và cô bé dễ thương này nghe không rõ, em nói lại được không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Anh được lắm...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Từ lúc nào mà anh ${nameCharacter[16]} đã đứng ở phía sau ghế tôi đang ngồi. Tệ thật, không ngờ anh ${nameCharacter[16]} lại có thể khiến tôi mất cảnh giác dễ dàng như vậy được. Anh giỏi đấy nhưng sẽ không có lần sau nữa đâu. Mà nhìn lại thì ${nameCharacter[11]} dễ thương thật... KHOAN GIỜ KHÔNG PHẢI LÚC NGHĨ VỀ NÓ!`
			},
			{
				color: colorOther[1],
				name: [ `???` ],
				content: `${nameCharacter[16]}, cậu thôi trêu mấy đứa nó được không?`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Thôi nào ${nameCharacter[17]}, nói chuyện với mấy đứa này vui lắm.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Một người đàn ông trung niên cao lớn tầm ngoài bốn mươi bước vào căn phòng. Vóc dáng của người đó trông thật vạm vỡ cứ như chiến binh xuất thân từ chiến trường. Mái tóc nâu cạo hai bên mai tạo cảm giác trẻ trung, còn đôi mắt cùng màu lại tạo ánh nhìn có chút đáng sợ. Trang phục thì... đồng phục của hiệp hội? Vậy ra người này là nhân viên của hiệp hội. Theo như anh ${nameCharacter[16]} gọi thì tên là ${nameCharacter[17]} nhỉ? Mà rốt cuộc anh ${nameCharacter[16]} và người này có mối quan hệ thế nào? Hay có mối quan hệ mật thiết gì đó với hiệp hội chăng? Cảm giác lúc nói chuyện cứ như là bạn bè của nhau thay vì kiểu xã giao trong công việc, anh ${nameCharacter[16]} bí ẩn thật.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Một lúc sau thì chị ${nameCharacter[15]} bước vào phòng, chị tiến lại gần bác ${nameCharacter[17]} nói gì đó rồi quay ra đóng cửa. Bác ${nameCharacter[17]} và anh ${nameCharacter[16]} sau đó cũng dừng nói chuyện và về chỗ ngồi của mình. Riêng bác ${nameCharacter[17]} thì ngồi ở ghế đơn, còn chị ${nameCharacter[15]} thì đứng ở bên trái của bác ${nameCharacter[17]}. Đột nhiên bầu không khí cảm giác ngột ngạt hơn khi bác ${nameCharacter[17]} ngồi xuống.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Cậu bỏ vẻ mặt hằm hằm đi được không ${nameCharacter[17]}? Mấy nhóc này bị cậu dọa sợ rồi nè, chẳng trách đứa trẻ nào cứ thấy mặt cậu thì y như rằng chạy mất dép.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Cái này có phải do tôi đâu, chẳng qua do đôi mắt này đấy chứ.`
			},
			{
				color: colorCharacter[16],
				name: [ `${nameCharacter[16]}` ],
				content: `Tiếc ghê ta, dù cậu có quý trẻ con đi nữa nhưng mà mấy đứa nó lại né cậu.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Hầy... Biết sao giờ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Không thể tin được bầu không khí trước đó đang rất bí bức vậy mà anh ${nameCharacter[16]} nói vài câu mà cả phòng thoải mái hẳn. Tôi cứ nghĩ anh ${nameCharacter[16]} chỉ là người thích trêu trọc chứ ai ngờ anh còn đọc được cả tâm trạng nữa. Thậm chí còn dẫn dắt lời nói để bọn tôi hiểu được thêm về người đàn ông ngồi ở kia.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `E hèm... Ta vào việc chính thôi nhỉ?`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `À, phải rồi. Bác tên là ${nameCharacter[17]}, là trưởng hiệp hội ${nameJob[8]} của thị trấn ${nameLocation[2]}. Còn bên đây là thư kí của bác, chắc các cháu biết tên rồi nhỉ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ế? Thư kí? Mình cứ tưởng chị ${nameCharacter[15]} chỉ là nhân viên bên quầy tiếp tân thôi chứ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cho em hỏi chị ${nameCharacter[15]} chút là sao chị lại ở bên quầy tiếp tân vậy?`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `À, chẳng qua là chị muốn nhìn mọi người và đánh giá bằng chính con mắt này. Ngồi trong văn phòng làm việc với mỗi giấy tờ thì khả năng đánh giá sẽ không toàn diện và cũng chán lắm chứ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bất ngờ thật, chị ${nameCharacter[15]} đúng là thực sự nghiêm túc trong công việc. Chắc chắn chị sẽ trở thành nhân viên siêu ưu tú cho mà xem.`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Trước tiên thì bác muốn cảm ơn tổ đội ${nameParty[0]} đã cứu người dân của thị trấn này. Nếu mà không có các cháu thì cậu nhóc kia chắc đã không thể trở về được rồi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Không có gì đâu ạ, cứu người là chuyện đương nhiên mà.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Phải rồi. Các em vừa mới đăng ký làm ${nameJob[8]}. Vì một lí do gì đó mà vào rừng. Sau đó cứu người rồi cả tổ đội đấu với ${nameMob[3]} với cấp độ chênh lệch. Cuối cùng thì tí cả nhóm không còn đường trở về.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi không biết phải đáp lại như nào nữa. Chị ${nameCharacter[15]} đột nhiên trông đáng sợ quá, chắc tại sáng nay chị đã khuyên không nên làm gì nguy hiểm đây mà...`
			},
			{
				color: colorCharacter[17],
				name: [ `${nameCharacter[17]}` ],
				content: `Nào nào, quan trọng là tụi nhỏ đã an toàn trở về rồi mà. À, các cháu có thể kể bác nghe về cuộc phiêu lưu hôm nay của các cháu được không?`
			}
		]
	},
	{
		chapter: 13,
		title: `Bảo vệ điều quan trọng`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameMob[3]}, một con ma thú mắt đỏ lần đầu bọn tôi phải đối mặt. Ngay bây giờ tôi, ${nameCharacter[1]}, ${nameCharacter[10]} đang vây quanh nó còn ${nameCharacter[11]} đang ở sau yểm trợ từ khoảng cách xa. Cả hai bên đều chờ nhau xem ai sẽ khai mở cuộc chiến này trước. Và có vẻ ${nameMob[3]} hành động trước, nó lao thẳng đến phía ${nameCharacter[1]} chắc vì đòn tấn công trước đó của cậu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]} vẫn đứng im? Cậu ta có kế hoạch gì à? Con ma thú thì ngày càng tới gần. ${nameMob[3]} giơ vuốt phải của nó lên và trước khi tôi định dùng${nameSkill[15]}thì ${nameCharacter[1]} đã xoay người về bên phải và nhảy giật lùi về hướng tôi ngay thời điểm nó áp sát. ${nameMob[3]} đã vồ vào tường băng mà ${nameCharacter[11]} đã dựng trước đó. Thì ra cậu muốn làm chậm đi chuyển động của nó một chút. Cứ ngỡ là thành công nào ngờ chân phải của ${nameMob[3]} bám vào tường đưa cả ba chân còn lại lên rồi lấy đà phóng thẳng tới ${nameCharacter[1]}.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Để mình lo cho.${nameSkill[15]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Tôi mau chóng đỡ đòn lao tới cắn của ma thú cho ${nameCharacter[1]}. Tuy ${nameMob[3]} có bất ngờ nhưng nhờ phản xạ nhanh nó vẫn kịp xử lí tình huống. Nó đổi tư thế giơ hai chân trước đáp vào tấm khiên của tôi rồi hai chân sau đạp lên khiên lấy đà bật ngửa ra sau. Sau khi đáp đất, ${nameMob[3]} lập tức tấn công tôi dồn dập. ${nameCharacter[1]} từ đằng sau lấy lại được thăng bằng ngay lập tức lao thẳng lên bên trái tôi, tay phải cầm kiếm định đâm vào đầu của con ma thú. Chẳng cần phải nói thêm, ${nameMob[3]} liền bật ngược ra sau né được cú đâm đó.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Trượt rồi. Cậu cần phải nhanh hơn nữa đấy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đây là tốc độ nhanh nhất của mình rồi. Mà, chỉ cần vậy là đủ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Tôi quay ra nhìn thì thấy ${nameCharacter[1]} đang cười nhếch mép, cậu đang nói cái... Phập! Mũi tên băng của ${nameCharacter[11]} bay thẳng vào bả vai phải của ${nameMob[3]} và trong giây lát nó đã bị lúng túng. ${nameMob[3]} né qua bên trái để quan sát phát bắn từ đâu. ${nameCharacter[10]} từ bên trái của nó liền áp sát được, hai tay nhỏ cầm chắc thanh trọng kiếm đồng thời kích hoạt kỹ năng${nameSkill[12]}và vung thẳng vào phần ngực con ma thú. Cú vung của ${nameCharacter[10]} lực đến nỗi ${nameMob[3]} bị bắn đi xuyên qua mấy hàng cây. Chú diều hâu và các loài biết bay bay đầy trên bầu trời do từng hàng cây bị đổ dập. Sau phát chém đó ${nameCharacter[10]} chạy lại chỗ chúng tôi với khuôn mặt hớn hở.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Các cậu có thấy gì không nya? Mình vừa kết liễu con ma thú một cách hoành tráng đó nya! Cụng tay nào nya!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Rồi rồi, bọn mình thấy hết mà. Thấy kế hoạch của mình thế nào?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Quá tuyệt vời luôn nya!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Khoan... toàn bộ trận vừa rồi là kế hoạch của cậu? Sao mình lại không biết vậy?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thì lúc đó cậu chạy ra trước rồi còn đâu.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `... Ra là vậy, cậu tài thật đó. Vậy vừa nãy việc cậu suýt bị tấn công và mình đỡ đòn cho cũng nằm trong kế hoạch của cậu rồi đúng không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À... T-tất nhiên rồi, mọi thứ đều nằm trong kế hoạch của mình mà. Đ-đúng vậy, chắc chắn mình không tính sai đâu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[11]}`, `${nameCharacter[10]}` ],
				content: `Chắc chắn là nói xạo (nya).`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Với cú chém của ${nameCharacter[10]} thì không thể nào nó cử... ba vệt sáng?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Từ trong vùng tối của khu rừng nơi hàng cây gãy đổ, ba vệt ánh tím đen sáng dần. Rồi từ nơi đó, lao thẳng tới chỗ chúng tôi là ba đường lưỡi liềm song song. Ba đứa bọn tôi vì đã chủ quan nên đã không phản ứng kịp. Bùm! Đòn tấn công đã bị hủy do va chạm với cột băng của ${nameCharacter[11]}. Thật không ngờ ngay khi đường lưỡi liềm thoát ra khỏi vùng tối, nhỏ đã bắn một phát mũi tên băng. Mũi tên đó bay đi được nửa khoảng đường thì chạm vào mặt đất, một cột băng từ dưới đâm lên chắn đòn tấn công đó.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mừng hơi sớm rồi đấy các cậu. Nó đến kìa.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameMob[3]} bước đi chầm chậm ra khỏi phần tối của khu rừng. Nó vừa đi vừa gầm gừ đe dọa, lông thì xù hết lên còn ánh mắt đầy sát khí nhìn thẳng về phía bọn tôi như muốn ăn tươi nuốt sống hết cả đám. Cả ba đứa bọn tôi đều sốc và có lẽ người sốc nhất là ${nameCharacter[10]}. Nhỏ lúc này đang vừa bất ngờ vừa lo lắng vừa buồn vì đòn kết liễu không thành công. Đôi tai dạt với đuôi cong xuống đã nói hết lên cảm xúc lúc này của ${nameCharacter[10]}.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Không thể nào... nó vẫn cử động được nya...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Này này... Không đùa đấy chứ, giờ nó nghiêm túc thật rồi...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `MỌI NGƯỜI CHÚ Ý! NÓ ĐANG ĐẾN KÌA!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameMob[3]} hú ầm lên một phát khiến bọn tôi đều phải tập trung hết vào nơi nó đứng. Và khi tiếng hú dứt, không biết từ lúc nào con ma thú đã ở trên không. ${nameMob[3]} cuộn mình về trước xoay một vòng, móng vuốt chân trước của nó bỗng sáng lên và từ đó phóng ra sáu đường lưỡi liềm. Tốc độ của chúng nhanh hơn lần trước và với khoảng cách gần như này thì ${nameCharacter[11]} cũng không ứng cứu kịp. Tệ rồi đây...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]} từ đằng sau tiến lên trước, cậu đưa đường kiếm từ trái qua phải hướng lên trên phóng ra một lưỡi chém hủy đường lưỡi liềm của ${nameMob[3]}. Có vẻ đó là kỹ năng${nameSkill[5]}mà ${nameCharacter[1]} đã bảo hồi sáng. Không biết từ lúc nào con ma thú đã ở dưới mặt đất và lao thẳng tấn công ${nameCharacter[1]}. ${nameCharacter[1]} lúc này đang bị đứng chôn chân, chỉ có thể đưa thanh kiếm lên đỡ những đòn vuốt cào liên tiếp từ nó. Mũi tên của ${nameCharacter[11]} bay tới ${nameMob[3]} thì nó liền dừng tấn công và né qua trái. ${nameCharacter[10]} nhân cơ hội lao lên nhưng ${nameMob[3]} đã nhảy lên đúng lúc nhỏ vung kiếm. Ma thú nhận thấy có sở hở, nó giơ vuốt lên định cào ${nameCharacter[10]} thì đòn phong của ${nameCharacter[1]} đã làm cản trở rồi cậu cũng lao lên phản công.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Mọi người lúc này đều đã quá kiệt sức rồi, vậy mà ${nameMob[3]} vẫn không có dấu hiệu bị đuối. Thậm chí sau khi lãnh một đòn của ${nameCharacter[10]} vậy mà... không có vết chém? Tại sao vậy? Vết bắn mũi tên của ${nameCharacter[11]} vẫn còn mà?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]} lùi lại!${nameSkill[15]}. Mình không hiểu sao đòn tấn công của ${nameCharacter[10]} và ${nameCharacter[11]} lại khác biệt đến vậy. Hay là do chỗ bị bắn là điểm yếu?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Khác biệt... Mình hiểu rồi. ${nameCharacter[11]} dùng “cái đó” đi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `“Cái đó”? Hi vọng “cái đó” mà ${nameCharacter[1]} nói giải quyết được con này. Sau khi đỡ đòn của ${nameMob[3]} thì ${nameCharacter[10]} từ mạn phải tôi vung kiếm tấn công. Như thường lệ, nó lại né được nhưng từ lúc nào ${nameCharacter[1]} đã áp sát được và trong tay trái cầm con ${nameMob[2]} bị đóng băng trước đó đập thẳng vào mặt con ma thú. Chất nhầy của ${nameMob[2]} che đi tầm nhìn của ${nameMob[3]} khiến nó mất phương hướng tạm thời. Dù đã mau chóng né nhưng cậu vẫn bị dính một cào từ nó vào cánh tay trái sau khi cố áp sát như vậy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `NGAY BÂY GIỜ ${nameCharacter[11].toUpperCase()}!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Không rõ kế hoạch này là như nào nhưng khi tôi nhìn về hướng ${nameCharacter[11]} thì thấy nhỏ có vẻ đang dồn hết sức cho phát bắn cuối này. ${nameCharacter[11]} từ đằng xa bắn một đường mũi tên cong lên trời. Khi mũi tên đã bay đủ cao, nó tách ra thành nhiều mũi tên rơi xuống ${nameMob[3]}. Những mũi tên nào không trúng ma thú va chạm với mặt đất sẽ tan vỡ và tỏa ra hơi lạnh bao quanh nơi đó. Vậy là kết thúc rồi...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Tôi thở dài hạ khiên xuống, ai nấy cũng đều đuối sức cả. ${nameCharacter[11]} thì chắc không còn đủ ma lực để bắn cung nữa, nhỏ ngã quỵ rồi. Còn ${nameCharacter[1]} chắc cũng đang cảm thấy khá đau sau khi bị như vậy. Kiếm cắm thẳng xuống đất và cậu dồn hết lực vào tay phải để tựa cố đứng thẳng. Và ${nameCharacter[10]} thậm chí còn ngồi hẳn xuống đất, dù sao thì nhỏ cũng là người đã tấn công liên tục trong suốt trận chiến. Rồi tôi quay ra nhìn lại màn sương lạnh giá bao trùm ${nameMob[3]}, tuy không rõ con ma thú trong đó nhưng có ánh sáng tím le lói... không... đừng đùa chứ... Nó đang hướng đến ${nameCharacter[10]}... Tôi phải chạy... phải bảo vệ... chạy... chạy... CHẠY!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameSkill[15]}${nameSkill[15]}${nameSkill[15]}${nameSkill[15]}!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[10]}` ],
				content: `Tôi mệt quá nya. Chúng ta thắng rồi nhỉ nya? Tôi chả muốn đánh nữa đâu nya. Sao trời đột nhiên tối vậy nya? Máu? Sao lại có máu nhỏ... Tôi ngước nhìn lên thì thấy ${nameCharacter[9]} đang đứng trước mặt...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Sao cậu ở đây... Sao cậu lại chảy máu? Nè, trả lời mình đi... `
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `“Tấm khiên” này sẽ luôn bảo vệ cậu. Mình chưa kịp nói xong thì đã bị ${nameCharacter[1]} chen ngang. Tấm khiên của mình nát rồi, nhưng... mình đã bảo vệ được cậu nhỉ?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Kowa...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[10]}` ],
				content: `Tôi chưa kịp phản hồi lại thì ${nameCharacter[9]} đã ngã về phía trước. ${nameCharacter[9]}? Cậu chỉ mệt thôi đúng không? Nè... Tôi bò đến ${nameCharacter[9]}, lật cậu ta lại. Trước ngực có một vết cắt ngang lớn... Tôi đưa tay lên ngực phải của ${nameCharacter[9]}... không cảm thấy gì...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu không phải “tấm khiên” của mình... không phải...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Chuyện gì vừa xảy ra vậy... Tôi chỉ vừa ngước lên thôi mà... Sao ${nameCharacter[9]} lại nằm vậy? ${nameCharacter[10]} đang nói gì với ${nameCharacter[9]} à? ${nameMob[3]} ra sao rồi... nó vẫn đứng...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10].toUpperCase()}! ${nameMob[3].toUpperCase()} VẪN... ${nameCharacter[10]}?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} đứng dậy, tay của nhỏ có nhỏ máu xuống mặt đất. ${nameCharacter[10]} bị thương à? Không... Móng vuột của nhỏ đột nhiên dài ra... Tai dựng đứng và đuôi thì xù lông lên... Nhỏ quay người lại, lần đầu tiên tôi thấy ${nameCharacter[10]} giận dữ như vậy. Nhỏ đang khóc... nước mắt tuôn chảy từ đôi mắt vô hồn.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameMob[3]}, trên mình găm đầy mũi tên từ trong màn sương băng lao thẳng đến ${nameCharacter[10]}. Và ${nameCharacter[10]} cũng không ngần ngại lao thẳng tới khô máu với nó. Cả hai bên cào xé nhau chẳng còn né tránh nữa, mặc kệ vết thương càng ngày càng nhiều.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi rút cây kiếm, chết đứng bất lực nhìn vào toàn cảnh trước mặt. Chết tiệt... Chết tiệt! Chết tiệt! Tại vì tôi... Nếu tôi chọn rời khỏi rừng... chúng ta đã có thể ăn tối cùng nhau... ${nameMob[1]} của ${nameCharacter[9]} trông ngon lắm...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ha ha... Nực cười thật.... Mình thật ích kỉ... Mình... không thể bảo vệ bất kì ai...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} thở hổn hển, sức lực của nhỏ có vẻ đã đến giới hạn. ${nameMob[3]} bằng cách nào đó vẫn trên cơ ${nameCharacter[10]} và nhỏ đã gục ngã. Ngay khi ${nameMob[3]} định kết liễu ${nameCharacter[10]} thì một bức tường băng được dựng lên từ hướng của ${nameCharacter[11]} ngăn cách ${nameCharacter[10]} với ma thú.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Chút ma lực cuối cùng. Mai gặp lại.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vừa dứt lời thì ${nameCharacter[11]} gục đầu xuống và bất tỉnh. Mai gặp lại à... Tôi mỉm cười, cầm chắc cây kiếm trên tay phải lao đến ${nameMob[3]}. Nó thấy tôi di chuyển nên cũng chuyển hướng qua tấn công tôi. Cả hai bên đều đã mệt mỏi nhưng vẫn cố chạy. Tôi giơ ngang thanh kiếm, dồn nén gió cũng như sức mạnh còn lại bao bọc quanh lưỡi kiếm. Con ma thú tiến đến gần và há mõm ra định cắn tôi. Quyết định rồi, chém nó ra làm đôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `BIẾN ĐIIIIIIII!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Keng! Tôi chạy lướt qua ${nameMob[3]} cùng với kiếm trên tay. Xong rồi... Kết thúc rồi... Thanh kiếm của tôi...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đã vỡ tan... Vứt “thanh kiếm” đi, tôi lôi con dao bếp ra, quay ra nhìn con ma thú, chờ đợi nó lao đến. Tôi đứng đợi... chờ đợi... Tôi nhắm mắt lại, nó còn đang đứng yên và khi mở mắt ra vuốt của nó đã ở trước mặt tôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Tạm biệt.`
			},
			{
				color: colorOther[1],
				name: [ `Chàng trai` ],
				content: `Chúng ta vừa mới gặp nhau mà sao đã tạm biệt rồi?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Trước mắt tôi là một anh chàng mặc áo choàng dài màu xanh lá với mũ trùm đầu che khuôn mặt đã bị gió thổi lật ngược. Khoan... thế còn... đầu của nó... đâu mất rồi... Còn mỗi phần thân của con ma thú dưới chân tôi... Người này rốt cuộc là ai...?`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Từ hàng cây đằng xa, một bóng đen bí ẩn núp đằng sau đó chứng kiến tất cả mọi thứ. Bóng đen đó dường như đang dùng một loại ma cụ liên lạc.`
			},
			{
				color: colorOther[1],
				name: [ `???` ],
				content: `Thử nghiệm thành công. Hết.`
			}
		]
	},
	{
		chapter: 12,
		title: `Trước cơn bão`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `Cậu bé` ],
				content: `Khiên và dao găm, tôi chỉ cần vậy là đủ nhưng... tại sao... Tôi chỉ vào rừng để tìm chút nguyên liệu thôi mà. Giờ thì hiểu tại sao cha bảo nên ủy thác cho các ${nameJob[8]} rồi. Cũng may “thứ đó” đang bận ăn mấy con ma vật khác, tôi phải rời khỏi rừng ngay mới được.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Cậu trai mặt nhợt nhạt đang nấp sau hàng cây chầm chậm di chuyển tránh xa “thứ đó”. Sau một hồi di chuyển, cậu đã khuất khỏi tầm quan sát của nó. Cậu nhẹ nhõm được phần nào khi đã ra xa con ma thú. Cạch! Cành cây mảnh nằm trên mặt đất đã bị gãy làm đôi do cậu giẫm phải. Một vật thể xám lao nhanh tới cậu với vận tốc không thể nào tránh được nữa. Và thứ duy nhất cậu có thể làm ngay lúc này là bám lấy tấm khiên đeo sau lưng và cố sống sót...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Nếu mình không nhầm thì con ${nameMob[2]} đó nhảy về... hướng này nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cậu... nhanh... quá... Đợi mình...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `A ha nya! Tìm thấy ${nameMob[2]}...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]} đang định nói gì đó rồi nhỏ đột nhiên im lặng. Tôi tiến lại gần ${nameCharacter[10]} với hơi thở hổn hển vì phải chạy đuổi theo. Nhìn nhỏ trông hơi nhợt nhạt, đôi tai thì đang dạt xuống còn đuôi thì nhỏ đang nắm chặt. Tôi đưa tay lên vai ${nameCharacter[10]} định hỏi xem chuyện gì đã xảy ra thì người tôi hơi run...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]}? Nhỏ đang sợ hãi? Nhỏ đã chứng kiến điều gì vậy? Tôi hít một hơi thật sâu để lấy lại sự tỉnh táo sau khi chạy quá nhiều. Một mùi tanh nồng xộc thẳng vào mũi làm tôi suýt thì ói ra. Nhưng cũng nhờ mùi tanh đó mà tôi đã tỉnh hẳn khỏi cơn choáng...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `C-chuyện gì đã xảy ra thế này?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Khung cảnh trước mặt tôi là một bãi cỏ đỏ thẫm, điểm trên đó là các xác chết không toàn thây nằm la liệt mỗi nơi vài mảnh. Tuy đây không phải là lần đầu tôi nhìn thấy máu hay xác chết nhưng... thế này thật là ngoài sức tưởng tượng. Tôi cúi xuống dưới chân thì thấy một bãi nhầy cùng dấu vết để lại. Đây có lẽ là con ${nameMob[2]} bọn tôi đang đuổi đã bị một sinh vật không rõ dẫm bẹp. Chạm thử vào dấu chân mà con ma vật đó để lại, vẫn còn ấm, tức là nó chỉ vừa mới rời đi. Tôi tự hỏi cuộc chiến nào đã diễn ra ở đây trước khi chúng tôi đến. Đó là một cuộc chiến sinh tồn hay đây là một cuộc tàn sát? Dù còn nhiều câu hỏi trong đầu nhưng ngay lúc này, tôi biết rằng sinh vật trong cuộc chiến đó vẫn còn đang sống và có thể đang ở rất gần.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Tôi liền đứng dậy, hai tay bám vào hai bên vai của ${nameCharacter[10]} từ đằng trước và xoay nhỏ hướng nhìn thẳng vào mặt tôi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Bọn mình phải ra khỏi đây ngay lập tức. Và báo lại với bên hiệp hội ${nameJob[8]} để họ điều tra được chứ.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Ừm...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]} có vẻ vẫn còn ám ảnh trước cảnh tượng quá sức vừa rồi. Tôi cần phải nói gì đó an ủi nhỏ mới được, trông nhỏ tội nghiệp quá.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]}! Nhìn mình này. Chừng nào còn mình bên cạnh thì “tấm khiên” này sẽ luôn bảo...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Trong khi tôi còn đang nói thì một bàn tay xuất hiện chạm vào vai tôi từ đằng sau. Giọng nói cất lên kề sát bên tai tôi.`
			},
			{
				color: colorOther[1],
				name: [ `Người đằng sau` ],
				content: `Cấm chạy!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Tôi giật mình, hất bàn tay trên vai đi. Trong đầu lúc này chỉ nghĩ đến việc bảo vệ ${nameCharacter[10]}, tay phải choàng lấy ${nameCharacter[10]} kéo nhỏ sát vào người tôi. ${nameCharacter[10]} có hơi chút bất ngờ sau hành động vừa rồi, tai và đuôi nhỏ dựng đứng hết cả lên. Tôi ôm chắc ${nameCharacter[10]} vào lòng và nhảy ngược hướng ra sau của nhỏ, còn tay trái thủ sẵn khiên che phía trước đề phòng có đòn tấn công ngay sau đấy.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `NGƯƠI LÀ AI! NGƯƠI ĐỊNH... ${nameCharacter[1]}?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Bình tĩnh nào, mình đây. Sao hai cậu căng... Chuyện gì đã xảy ra ở đây vậy? Do hai cậu làm?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mùi... Mình sẽ qua chỗ khác đứng đợi...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nếu là do hai đứa này thì đã tốt. Chuyện gì đó tồi tệ đã xảy ra, cần rời khỏi đây ngay lập tức.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình có linh cảm chẳng lành, cần phải rời khỏi đây. Nhưng trước đó thì... ${nameCharacter[10]} còn ổn chứ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `A! Tôi quên mất mình vẫn đang còn ôm ${nameCharacter[10]}. Vội vàng bỏ tay ra khỏi nhỏ và né sang trái. Phải nói gì đây? Tự nhiên chẳng biết phải nói gì trong tình huống thế này...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Mình nghĩ mình ổn nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Đôi tai của nhỏ lại thẳng đứng và đuôi thì đung đưa như bình thường. Chắc là nhỏ hết sợ thật rồi, tốt quá. Nhưng mặt vẫn còn hơi ửng đỏ nhẹ...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình không rõ chuyện gì đã xảy ra nhưng rời khỏi đây...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Suỵt!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Đôi tai của ${nameCharacter[10]} dường như đang nghe ngóng điều gì đó. Nhỏ quay người theo hướng đôi tai đang xác định âm thanh và chỉ tay đến. Sao tôi thấy cảnh này quen quen...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Có tiếng phát ra ở đằng kia, mọi người có nghe thấy gì không nya?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[1]}` ],
				content: `Không.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình có nghe thấy. Ngoài mắt thì tai mình cũng khá thính. Tính sao đây ${nameCharacter[1]}?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]} đến lúc phải đưa ra quyết định rồi, rời đi hay là đến nơi mà ${nameCharacter[10]} chỉ. Mà bọn tôi cũng đã biết câu trả lời rồi, là bạn từ bao năm nên cũng không còn lạ gì lựa chọn của cậu, trưởng nhóm.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Di chuyển nào mọi người, rời khỏi chỗ này thôi. ${nameCharacter[10]} đi đầu đoàn dẫn đường, ${nameCharacter[9]} ở giữa phòng thủ phía sau, sau đó là ${nameCharacter[11]} tấn công từ xa và mình sẽ ở cuối đoàn lo thủ ở sau và hỗ trợ từ xa, đồng thời sẽ tham chiến nếu diễn biến phức tạp. Nếu không ai ý kiến gì thêm thì dẫn đường đi, ${nameCharacter[10]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Nghe câu đầu cứ ngỡ là ra khỏi rừng chứ. ${nameCharacter[1]} thích khiến mọi người đi từ bất ngờ này đến bất ngờ khác thật. Mà đương nhiên không có một ai ý kiến thêm gì về quyết định cũng như đội hình cả. Thế rồi tổ đội bắt đầu di chuyển vào sâu hơn trong rừng.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Có vẻ hướng đi của chúng tôi trùng với dấu chân mà con ma thú nào đó để lại. Tại sao bọn tôi cho rằng đó là ma thú thì là vì hình dáng của dấu chân. Khu rừng khá là im ắng đến lạ thường, không biết lũ ma vật đâu hết rồi... Chẳng lẽ là do sự hiện con ma thú kia ở gần đây? Càng đi sâu thì dấu chân bắt đầu đứt quãng dần, thay vào đó là các dấu vết ở trên thân cây. Cách di chuyển của nó thật là kì lạ. Những tiếng gừ, tiếng nói ai đó, tiếng va đập vào nhau ngày càng rõ hơn và lớn dần, lớn dần...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Ngay trước mắt chúng tôi là một bãi đất trống đang diễn ra cuộc chiến giữa một cậu bạn và một con ma thú mà bọn tôi không hề biết. Nhìn qua thì có vẻ cậu bạn đó không có kinh nghiệm trong chiến đấu, kĩ thuật dùng khiên của cậu để lộ nhiều điểm mù quá. Bọn tôi núp sau hàng cây, quan sát tình hình cuộc chiến trước mặt.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ đây là con ma thú mà chúng ta đang tìm. Nhìn giống sói, có bộ lông màu xám khói, mắt thì đỏ ngầu như muốn ăn tươi nuốt sống mọi thứ.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mắt đỏ... Không thể nào... Nó giống hệt con mắt của ${nameMob[0]} hồi trước đuổi theo mình và cha thì...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[11]} nắm chắc tay áo của ${nameCharacter[1]}, dường như một phần kí ức mà ${nameCharacter[11]} không muốn nhớ hiện ra. Hi vọng con sói này không liên quan đến bọn ${nameMob[0]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Tôi tiếp tục quan sát, cậu bạn kia có vẻ đã thấm mệt sau khi đỡ những đòn vuốt cào liên hồi của con sói. Mà sao cậu ta không có phản công? Nếu cứ đỡ như vậy chẳng mấy chốc tấm khiên sẽ... Chết không ổn rồi!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]}! Mình phải ra cứu cậu ta ngay!${nameSkill[6]}`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Từ... chạy đi mất rồi. ${nameCharacter[10]} theo cậu ấy đi, khi ${nameCharacter[9]} đỡ đòn thì cậu sẽ tấn công con ma thú đó. ${nameCharacter[11]} và mình sẽ đưa cậu bạn kia rời khỏi trận chiến.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Tuân lệnh nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Chết tiệt! Khiên của cậu bạn kia vỡ rồi. Chỉ còn một chút nữa là đến chỗ cậu bạn kia, cố lên... một chút nữa... trong tầm rồi!${nameSkill[15]}`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Đây là kỹ năng đưa bản thân xuất hiện trước đòn tấn công vào mục tiêu được tôi lựa chọn để có thể đỡ đòn ngay lập tức.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Mặc dù tôi đã xuất hiện kịp thời để đỡ đòn tấn công nhưng không ngờ cú cào của nó lại lực như vậy. Tôi cùng cậu bạn sau lưng bị nó đẩy lùi một khoảng. Sau đòn đó tôi hơi loạng choạng và chưa kịp định hình lại thì con ma thú đó đã ngay lập tức xông thẳng tới định cắn tôi. Cũng may ${nameCharacter[10]} đến kịp, hai tay nhỏ cầm chắc thanh trọng kiếm vung vào ma thú. Cảm thấy bị đe dọa, nó liền lộn ngược lại về phía sau và né thành công cú vung kiếm của nhỏ. Mặc kệ trúng hay trượt, hiện giờ ${nameCharacter[10]} đang liên tục tấn công con ma thú để câu thêm thời gian cho bọn tôi. Cả hai bọn họ người lúc tấn công người lúc né không ai nhường ai.`
			},
			{
				color: colorOther[1],
				name: [ `Cậu bạn` ],
				content: `Cứ tưởng ${nameMob[3]} cho mình tiêu đời rồi chứ. Phải rồi, về bộ lông các cậu không...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Cậu bạn này nói nhanh quá, chắc vẫn còn hơi sốc vì suýt nữa thì bị giết. Mà theo như lời của cậu bạn thì con ma thú kia là ${nameMob[3]}.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Bình tĩnh nào. Dừng lại một chút để thở đi đã.`
			},
			{
				color: colorOther[1],
				name: [ `Cậu bạn` ],
				content: `Không, cậu không hiểu, về bộ lông...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nghe mình này, giờ mình cần cậu lập tức về thị trấn báo cáo với hiệp hội ${nameJob[8]} ngay. Bọn mình sẽ ở đây cầm chân ${nameMob[3]}, con này không dễ xơi đâu.`
			},
			{
				color: colorOther[1],
				name: [ `Cậu bạn` ],
				content: `Nhưng... Thôi được rồi, cảm ơn ${nameCharacter[9]} và mọi người nhiều. Mình đi về báo cáo với hiệp hội ngay.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Mà khoan... sao cậu ta biết tên tôi? Hay là ai đó vừa nãy nói tên tôi? Cậu bạn sau khi nói cảm ơn liền lập tức chạy về hướng ra khỏi khu rừng mà ${nameCharacter[1]} đã chỉ. ${nameMob[3]} từ xa đang tấn công ${nameCharacter[10]}, thấy cậu ta chạy lẻ liền nhảy vòng qua người nhỏ và đuổi theo.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Trước khi tôi định dùng${nameSkill[15]}thì một mũi tên băng từ đằng sau tôi bay đến giữa cậu bạn với con ma thú. Trên đường mũi tên bay, đằng sau của nó tỏa ra các bông tuyết rơi xuống mặt đất và từ đó đâm lên các cột băng nhọn. Một kỹ năng dựng tường để phòng thủ diện rộng. Nhưng nào ngờ, trước khi ${nameMob[3]} bị chặn lại thì nó đã bật nhảy. Cú nhảy của nó có thể qua cả tường bằng? Không ổn rồi! Tôi phải chạy đến...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]} ở mặt bên kia tường băng nhảy qua đúng thời điểm ${nameMob[3]} đang ở trên không. Cậu dùng phong thuật để thổi bay con ma thú về mặt đất. Tuy là đòn phong đó không gây được sát thương bởi ${nameMob[3]} trước khi đáp đất đã kịp thời phản xạ tránh được va chạm. Nhưng mục tiêu ban đầu đã thành công. Và như vậy, cậu bạn đó đã thoát khỏi cuộc chiến an toàn.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Chú diều hâu đậu trên cây quan sát tổ đội ${nameParty[0]} đang bao vậy con ma thú. Giữ chắc tấm khiên, cầm chắc trọng kiếm, giương sẵn cây cung và sẵn sàng cào xé. Giờ trận chiến của họ mới thực sự bắt đầu.`
			}
		]
	},
	{
		chapter: 11,
		title: `Nhiệm vụ đầu tiên (2)`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} đánh thức tôi dậy sau một giấc ngủ trưa. Có vẻ như cả đám đã nghỉ ngơi đủ để tiếp tục hoàn thành nhiệm vụ. Còn tôi vẫn đang còn nửa tỉnh nửa mơ vì nằm dưới tán cây mát mẻ cùng làn gió nhè nhẹ thoang thoảng thổi qua. Thật là dễ chịu, tôi không hề muốn di chuyển khỏi chốn thư thái này. Cho dù là thế, tôi vẫn còn việc cần phải làm. Nếu chỉ có một mình thì tôi sẽ vẫn nằm tiếp nhưng với cương vị trưởng tổ đội, quản lý mọi người hoàn thành nhiệm vụ là ưu tiên hàng đầu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} đưa tay ra, có vẻ như nhỏ muốn kéo tôi dậy. Tôi đưa tay ra nắm lấy, bàn tay của ${nameCharacter[11]} thật là mềm mại và ấm áp mà không hề lạnh. Cơ thể sau khi đứng dậy còn hơi nhức mỏi, chắc bởi ngồi tựa vào cây ngủ, tôi vặn mình để cơ thể thoải mái hơn chút. Được rồi, sẵn sàng cho nhiệm vụ tiếp theo.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nghe này các cậu, theo kế hoạch đã bàn sáng nay thì tiếp theo chúng ta sẽ hỗ trợ ${nameCharacter[10]} và ${nameCharacter[11]} làm nhiệm vụ săn ${nameMob[2]}. Trước tiên chúng ta cần...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi chưa kịp nói xong thì ${nameCharacter[10]} đã cắt lời. Trông nhỏ có vẻ rất hào hứng, tai thì dựng đứng còn mắt cứ sáng lên trông như không thể đợi được thêm nữa.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Không cần phải nói thêm nữa nya. Trước tiên chúng ta cần phải tìm ra ${nameMob[2]} đúng không nya?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Vậy thì mình sẽ tìm cùng cậu, coi như là cảm ơn trước đó đã giúp mình nha.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Được thôi nya. Vậy thì hai bọn mình chạy trước đây, tìm được vị trí thì mình sẽ báo lại sau nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ê khoan đã hai cậu! Ý mình muốn nói là trước tiên chúng ta phải dọn dẹp chỗ này đã!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế là “${nameTitle[2]}” đã chạy vút đi mà không nghe thấy tôi nói gì. Bộ đôi đó đúng là nhanh nhảu thật. Dù sao thì tôi cũng không hẳn là trưởng tổ đội, bọn tôi chưa bàn về vấn đề này. Chẳng qua tôi có cảm giác như vậy do đứng ra làm một số việc như là đăng ký và đặt tên tổ đội, lập ra kế hoạch thời gian làm nhiệm vụ, mang một số đổ tiếp tế như là đồ ăn nước uống và một vài vật dụng... Ủa khoan? Đó có phải là những thứ mà trường tổ đội hay làm không ta? Sao cảm giác nó sai sai thế nào ấy nhỉ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mà thôi... phải dọn nhanh để ra chỗ bọn họ. Tôi thở dài, nhìn về phía chỗ nghỉ ngơi thì thấy ${nameCharacter[11]} đang dọn dẹp đồ đạc. Tôi cứ tưởng ${nameCharacter[11]} cũng đi theo bộ đôi ngay sau đó vì đây là nhiệm vụ của nhỏ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ờm... ${nameCharacter[11]}? Sao cậu vẫn còn ở đây vậy? ${nameCharacter[10]} đi làm nhiệm vụ săn ${nameMob[2]} rồi kìa?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Phải dọn đống đồ bày ra trước. Bộ đôi đó sung sức lắm. Kể cả có nghe thì cũng làm cho mau chóng để đi làm mấy việc của các cậu ấy muốn.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy là cậu có nghe thấy lúc mình nói một mình à... Ngại thật đấy...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bị ${nameCharacter[11]} thấy tôi nói một mình ngại thật... Mà may ${nameCharacter[11]} nghe thấy tôi nói, có thêm người ở lại giúp dọn dẹp thì sẽ nhanh thôi. Cần phải mau dọn rồi còn ra chỗ của bộ đôi mới được.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Không. Mình nghe thấy lúc trước khi ${nameCharacter[1]} bị ngắt lời do ${nameCharacter[10]}.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nhưng... mình còn chưa đề cập gì mà?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình đã ở bên ${nameCharacter[1]} khá lâu để hiểu ${nameCharacter[1]} muốn nói gì mà.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy ${nameCharacter[11]} hiểu tôi đến vậy cơ á? Còn tôi... tôi vẫn chưa thể thấu hiểu nhiều về ${nameCharacter[11]}, có lẽ cả “${nameTitle[2]}” mà thậm chí là cả bản thân... Tôi sau khi nghe vậy nhịp tim dường như đã lệch một nhịp. Phải chăng đây là cảm giác bị người khác nắm thóp... Hay là cảm xúc... chắc không phải đâu.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]} có điều gì muốn nói không? Mình đang chờ nghe ${nameCharacter[1]} nói.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À... ừm... Cảm ơn cậu đã ở lại giúp mình nha, ${nameCharacter[11]}.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Không phải là điều mình muốn nghe nhưng vậy cũng được. Không có gì.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Xung quanh ${nameCharacter[11]} xuất hiện vài bông tuyết lấp lánh và đôi tai lá trúc lại ve vẩy. Nhưng... không phải lời cảm ơn ư? Tôi vẫn không thể hiểu nổi nhỏ... Con gái đúng là khó hiểu thật.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Chú diều hâu đậu ở trên cây nơi mọi người nghỉ ngơi đã tung cánh bay qua chỗ ${nameCharacter[10]} đang làm nhiệm vụ săn ${nameMob[2]}. Bộ đôi trông có vẻ như vẫn đang tìm kiếm ${nameMob[2]}.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Tại sao mãi không thấy ${nameMob[2]} đâu nya! Chị ${nameCharacter[15]} bảo có nhiều lắm mà nya!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Chị có bảo là nhiều chứ không bảo dễ kiếm. Nhưng thường ${nameMob[2]} phải nhiều mà ta... Thậm chí nó còn to khoảng bằng đầu con người. Chẳng lẽ các ${nameJob[8]} khác săn hết rồi?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cũng không trách được bởi ${nameMob[2]} săn dễ, mà số lượng cũng nhiều nữa nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameMob[2]} ở vùng này có màu giống cỏ nên hơi khó tìm. Chắc chúng ta chưa tìm kĩ thôi. Phải chi có manh mối xung quanh đây...`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `${nameCharacter[9]} vừa bước đi vừa nói vừa ngó nhìn xung quanh nên đã không để ý đường trước mặt. Rồi cậu đã trượt chân và ngã ra đằng sau. Cú ngã khiến cho ${nameCharacter[10]} nghe thấy từ xa phải chạy vội tới xem có chuyện gì.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `NYA! ${nameCharacter[9]}, CÓ SAO... Nya! Cậu vừa dẫm phải con ${nameMob[2]} này nya. À không... đây chỉ là chất nhầy ${nameMob[2]} thôi nya. Nhưng chúng ta chỉ cần lần theo vệt nhầy của ${nameMob[2]} là được rồi, ${nameCharacter[9]} tuyệt thật đó nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Mình mà lại. Cậu có thể tiếp tục khen mình... sau khi giúp mình đứng lên được không?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Nya...`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Sau khi ${nameCharacter[10]} kéo ${nameCharacter[9]} đứng dậy thì bộ đôi lần theo vết nhầy của ${nameMob[2]} để lại và đã dẫn họ đến một bãi đá nhỏ gần bìa rừng. Ở đó đang có bầy ${nameMob[2]} tụ tập lại xung quanh và có vẻ bọn chúng đang trốn khỏi thứ gì đó. Thường thì ${nameMob[2]} hay di chuyển vô định nhưng nếu có cảm giác bị đe dọa thì chúng sẽ tìm nơi để trốn.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Có vẻ đám ${nameMob[2]} này đang trốn ${nameJob[8]} xuất hiện trước đó thì phải. Trông có vẻ đông đó, có lẽ chúng ta nên đợi... Này!`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Chưa dứt lời, ${nameCharacter[10]} đã chạy thẳng lên tảng đá lớn mà bọn ${nameMob[2]} đang trốn sau đó. Hai tay cô nắm chắc thanh trọng kiếm, đưa đường kiếm hướng từ bên phải phía dưới lên phía trên quá đầu trong khi bật nhảy khỏi tảng đá. Trên không trung, cô vung kiếm đập mạnh xuống mặt đất khiến xung quanh tỏa ra trấn động. Tuy rằng cú vung không trúng con ${nameMob[2]} nào vì khi ${nameCharacter[10]} ở trên không trung, bọn ${nameMob[2]} đã nhận ra và nhảy ra hướng khác. Nhưng những con mà gần ${nameCharacter[10]} nhất đã không né được trấn động từ cú vung kiếm xuống mặt đất nên đã bị choáng và mất phương hướng. Và đó là kỹ năng${nameSkill[12]}mà ${nameCharacter[10]} đã sử dụng. Sau cú đập kiếm đó, ${nameCharacter[10]} liền đổi tư thế ngay lập tức, cô cầm chắc thanh trọng kiếm trong tay, vung một vòng từ trái qua phải kết liễu các con ${nameMob[2]} đang bị choáng ngay lập tức.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Tuyệt vời nya! Mình săn đủ số con yêu cầu trong nhiệm vụ cùng lúc luôn nè nya! A, mấy con khác bỏ chạy rồi, mình đuổi theo đây nya!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Từ từ đã ${nameCharacter[10]}, nếu không cậu sẽ... Biết ngay mà... Hầy...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]} vội vàng định đuổi theo bọn ${nameMob[2]} trốn chạy thì đã trượt chân và ngã. Tuy phản xạ của nhỏ thường rất sắc bén nhưng do cầm thanh trọng kiếm trong tay, trọng lượng cơ thể bị thay đổi khiến cho ${nameCharacter[10]} không còn phản ứng kịp. Và có vẻ nhỏ chưa quen với thanh trọng kiếm, dù gì cũng mới nhận được chức nghiệp cũng như vũ khí ngày hôm qua nên chưa thể làm quen được.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Để mình lùa bọn ${nameMob[2]} lại cho. Còn cậu cố loại bỏ chất nhầy dích trên người của cậu đi ha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[9]} đuổi theo bọn ${nameMob[2]} đang chạy trốn thì... Phập! Phập! Phập! Ba phát mũi tên từ đâu bay tới găm thẳng vào đám ${nameMob[2]} và kết liễu chúng. Mũi tên vừa găm vào thì ngay lập tức đóng băng toàn cơ thể của ${nameMob[2]}. Những mũi tên đó là do kỹ năng${nameSkill[13]}của ${nameCharacter[11]}. Tôi và ${nameCharacter[11]} đã dọn dẹp xong và đến nơi bộ đôi đang săn ${nameMob[2]}.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Còn vài con nữa là xong nhiệm vụ. ${nameCharacter[10]}... đã làm gì để ra nông nỗi thế này?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} lúc này đang ngồi dưới đất cố gỡ chất nhầy đang dính trên người. Do cách tấn công mạnh của ${nameCharacter[10]} nên chất nhầy trong cơ thể ${nameMob[2]} đã bắn lên người nhỏ. Còn ${nameCharacter[11]} tấn công từ xa nên sẽ không cần lo việc bị dính phải.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Ai đó giúp mình với nya! Lông mình nhớt quá và mình không đứng lên được nya... Ở gần đây có hồ nước nào không để mình nhảy tạm xuống nya...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ gần đây không có. Nhưng để mình thử phong thuật${nameSkill[14]}xem sao.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi dơ lòng bàn tay phải hướng về phía ${nameCharacter[10]}, một luồng gió xoáy nhẹ xung quanh xuất hiện quanh người nhỏ. Chất nhầy dần dần tách ra khỏi lông và trang bị của ${nameCharacter[10]}. Tôi đã học được kỹ năng này trong khi dọn dẹp nhà cửa.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nếu mình dùng được thêm thủy thuật thì${nameSkill[14]}sẽ hiệu quả hơn nhiêu nên dùng tạm vậy.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `${nameCharacter[1]} tuyệt vời nya! Tạm thời thế là ổn với mình rồi nya! À mà mình săn đủ yêu cầu rồi nên giờ giúp nốt Hyoukya. Còn cần mấy con nữa vậy nya?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Còn hai con... Đính chính. Còn một con, mình vừa tiện tay bắn thêm lúc ${nameCharacter[1]} giúp cậu.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Tính ra bọn mình chưa từng thấy cậu dùng cung bao giờ mà. Sao cậu có thể bắn chuẩn như vậy được?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mắt của Elf khá tinh đó.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Trong lúc mọi người đang nói chuyện thì tôi tiến tới chỗ đám ${nameMob[2]} bị ${nameCharacter[11]} hạ, cầm một con lên nhìn kĩ. Có vẻ băng của ${nameCharacter[11]} chỉ đóng băng bề ngoài nhưng dường như ${nameMob[2]} không chịu được lạnh nên đã bị hạ. Tôi lấy dao bếp từ ${nameItem[2]} ra, khoét một lỗ đủ lớn để tôi thò hai ngón tay vào lấy ${nameItem[6]}. Lí do tại sao không đổ chất nhầy của ${nameMob[2]} ra ngoài để dễ lấy ${nameItem[6]} thì là vì tôi định giữ lại để thí nghiệm nó vào lúc nào đấy, rồi cất vào ${inventory}. Tuy là chị ${nameCharacter[15]} có nói nó không có giá trị gì nhưng có lẽ nó sẽ có ích trong vài trường hợp. Và tôi đã lặp lại như thế với các con ${nameMob[2]} còn lại của ${nameCharacter[11]}.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Được rồi, ${nameItem[6]} của ${nameMob[2]} mình đã nhặt hết. Giờ chỉ cần một con nữa là...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Suỵt!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi chưa kịp nói xong thì lại bị ngắt lời, có vẻ ${nameCharacter[10]} đã nghe được tiếng gì đó. Đôi tai của nhỏ vểnh lên, định hướng xem âm thanh phát ra ở phía nào. Rồi ${nameCharacter[10]} đã xác định được và chỉ về hướng đó báo hiệu cho ${nameCharacter[11]}.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Bắn về hướng kia nya!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} giương cung lên bắn, mũi tên bay thẳng về hướng ${nameMob[2]} đang nhảy vào rừng. Tiếc là nó đã nhảy ra phía sau cây nên cú bắn đó đã bị trượt. ${nameCharacter[10]} thấy vậy liền đuổi theo ${nameMob[2]} sâu vào trong rừng và ${nameCharacter[9]} thấy vậy cũng theo sau đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ơ! HAI CẬU QUAY LẠI NGAY! TRONG RỪNG NGUY HIỂM LẮM! CHÚNG TA CÓ THỂ TÌM CON KHÁC MÀ! NÀY!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Một lần nữa, bộ đôi lại không nghe tôi nói. Tôi thở dài, bất lực và nhìn xuống đất. Tự hỏi vị trí trưởng tổ đội chắc không hợp với tôi. ${nameCharacter[11]} đặt hai bàn tay sau lưng tôi, đẩy tôi về trước như đang bảo phải đuổi theo họ ngay vậy. Chị ${nameCharacter[15]} có bảo người mới không nên vào rừng vội, có nhiều ma vật nguy hiểm tồn tại trong đó. Gác suy nghĩ vu vơ sang một bên, tôi cần phải đuổi theo họ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Rồi rồi. Không cần phải đẩy mình nữa đâu. Bộ đôi đó tốt nhất là nên chưa đi quá sâu vào trong khu rừng.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Chú ${nameMob[2]} bị ${nameCharacter[11]} bắn hụt đang nhảy sâu vào trong rừng. Chú cứ nhảy mãi cho đến khi cắt đuôi được tổ đội của ${nameCharacter[1]}. Rồi, một bàn chân của ma thú có bộ lông bạc từ đâu dẫm bẹp chú ${nameMob[2]}. Mồm của nó đang nhai ngấu nghiến một con ma thú khác bằng bộ hàm sắc nhọn có thể thấy từ bên ngoài. Còn đôi mắt thì đỏ ngầu như màu máu tươi vậy. Con ma thú vừa bước đi vừa nhai rồi biến mất khỏi nơi chú ${nameMob[2]} tội nghiệp đã bị dẫm bẹp.`
			}
		]
	},
	{
		chapter: 10.5,
		title: `Nếu như ta chưa từng gặp nhau`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nếu như, chúng ta chưa từng gặp nhau thì giờ đây tôi sẽ đi về đâu nhỉ? Liệu rằng, tôi có thể trở thành con người như bây giờ nếu thiếu các cậu? ${nameCharacter[9]}, ${nameCharacter[10]} và ${nameCharacter[11]}... những cái tên này... họ là ai vậy nhỉ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi tên ${nameCharacter[1]}, là một ${nameTitle[0]} đến thế giới này bởi ${nameLocation[1]}. Cha tôi tên ${nameCharacter[4]} là một người lính. Và mẹ tôi tên ${nameCharacter[3]} là thợ may vá và cũng là nội trợ của gia đình. Tôi đang ở thị trấn có tên gọi là ${nameLocation[2]}. Ngày qua ngày là chuỗi ngày bình yên sống bên cha mẹ mới của tôi. Luyện kiếm cùng cha, giúp đỡ việc nhà cùng mẹ, âm thầm luyện ma pháp vào ban đêm.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mặc dù, tôi không gây rắc rối gì cho cha mẹ, nhưng có thể nhận thấy sự lo lắng qua lời nói của họ. Chắc vì... cách nói của tôi không bình thường so với các đứa trẻ khác. Tôi ít giao tiếp với người khác ngoài gia đình và đồng thời cũng không có bạn bè. Cơ thể tôi tuy như đứa trẻ nhưng linh hồn bên trong lại là người trưởng thành nên cách cư xử có phần không phù hợp. Tôi thay vì lựa chọn đeo lên chiếc mặt nạ để diễn vở kịch thay đổi bản thân mà ai cũng muốn xem, thì tôi lại lựa chọn không thay đổi và vẫn là chính mình như ở kiếp trước. Có một cơ hội để thay đổi bản thân vậy mà tôi lại không nắm lấy. Thật thảm hại làm sao...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vào năm mười tuổi, sau khi được ban chức nghiệp tại nhà thờ, tôi liền đăng ký làm ${nameJob[8]}. Vào khoảng thời gian đó mọi ${nameJob[8]} tại hiệp hội đều coi thường tôi vì có chức nghiệp là ${nameJob[0]}. Một ${nameJob[0]} được coi là không có khả năng chiến đấu chỉ có thể làm chân sai vặt trong tổ đội mà thôi. Còn những nhân viên trong hiệp hội tuy không có ác ý gì khi cũng đưa ra lời khuyên cho tôi nhưng trong tôi cảm thấy khá nhói. Mặc kệ những lời nói, tôi vẫn chọn con đường ${nameJob[8]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau khoảng thời gian làm nhiệm vụ thì tôi đang ở hạng Đồng và đã đủ điều kiện làm bài thi lên hạng Bạc. Nhưng đen đủi làm sao khi bài thi yêu cầu cần phối hợp làm việc với đồng đội. Tôi không quen ai và cũng không có bạn bè nào để nhờ vả. Có nhiều ${nameJob[8]} ở hội chắc sẽ sẵn lòng giúp tôi hoàn thành bài thi nhỉ? Không có chuyện đó đâu. Lời bàn tán về tôi là một ${nameJob[0]} làm ${nameJob[8]} vẫn đang là chủ đề chưa hết nóng trong đây. Từ những người đã biết sẽ truyền đến tai những người chưa biết rồi cũng sẽ biết đến tôi. Và không ai rảnh đến nỗi đi giúp một đứa như tôi để rồi cũng bị cuốn theo những lời đồn.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Lời đồn chính là con dao hai lưỡi, danh tiếng lẫy lừng hoặc sự nghiệp tan vỡ nếu bạn dính phải. Tôi đã không nhờ ai và chấp nhận sự thật. Tất nhiên, tôi không từ bỏ làm ${nameJob[8]} và vẫn nhận được nhiệm vụ như thường. Nhưng việc thăng hạng sẽ bị tạm hoãn vô thời hạn bởi tôi không có đủ sự tin tưởng dành cho một ai, ngoại trừ gia đình.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Rồi thời gian trôi đi đến năm mười tám tuổi, tôi quyết định rời xa thị trấn để thực hiện mong muốn phiêu lưu khắp nơi của bản thân. Nhưng trước đó, tôi đã quyết định nhận một nhiệm vụ cuối cùng tại nơi đây. Nội dung nhiệm vụ là hộ tống đoàn vận chuyển quặng sắt đến thành phố Kardia Tou Dasous, hành trình đi ước lượng mất khoảng ba ngày nếu không phát sinh vấn đề. Thời gian bắt đầu di chuyển vào sáng sớm ngày mai và điểm hẹn là cổng phía Tây Bắc. Tối hôm trước nhiệm vụ, tôi đã nấu bữa tối cho cha mẹ coi như là tiệc chia tay trước khi tôi lên đường, đồng thời cũng chuẩn bị sẵn đồ ăn cho hành trình.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sáng sớm hôm sau, tôi đã tạm biệt cả nhà và đến điểm hẹn. Khi đến nơi, tôi đã thấy một đoàn xe ngựa có ba xe ở giữa đang chất đầy quặng sắt. Và hai xe còn lại ở trước và sau đoàn là xe trống dùng để chở ${nameJob[8]}. Mỗi xe chở được sáu người không tính người đánh xe. Có vẻ như xe trước đã đủ người rồi mà xe cuối còn thiếu một nên tôi đành tham gia nhóm đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi có thể ngồi xe cùng mọi người được không? Tôi tên ${nameCharacter[1]}, nhận nhiệm vụ hộ tống đoàn xe.`
			},
			{
				color: colorOther[2],
				name: [ `${nameJob[8]}` ],
				content: `Này ${nameCharacter[18]}, lại xem thằng nhóc này nè.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Từ trên xe, một bóng dáng to lớn của người đàn ông đầu trọc ngoài ba mươi có nước da ngăm đen. Hắn mặc một chiếc áo ba lỗ cỡ lớn đi kèm với một chiếc quần lửng có cả tá vết rách ở phần đùi, nhìn về phía tôi mà nói với giọng đầy tự cao.`
			},
			{
				color: colorOther[2],
				name: [ `${nameCharacter[18]}` ],
				content: `Mày, người nhỏ con như mày mà cũng muốn làm ${nameJob[8]} hả? Nhìn lại bản thân mình đi. Mà... nếu ta không nhầm thì ngươi là ${nameJob[0]} mà mọi người vẫn hay nói thì phải?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Phải, vậy có vấn đề gì?`
			},
			{
				color: colorOther[2],
				name: [ `${nameCharacter[18]}` ],
				content: `À không có vấn đề gì đâu... CHỈ LÀ MÀY SẼ CHỈ TỔ VƯỚNG CHÂN MÀ THÔI! Để có thể làm cái nghề này ít nhất phải là có chức nghiệp ${nameJob[9]} như ta hoặc là ${nameJob[3]}, ${nameJob[6]}, ${nameJob[4]} nhưng ${nameJob[0]} ư? VỀ MÀ HỌC NẤU ĂN ĐI!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ngay từ điệu bộ đầu khi hắn và mọi người nói chuyện, tôi đã nhận ra ngay chuyến đi này sẽ đầy rắc rối cho coi.`
			},
			{
				color: colorOther[2],
				name: [ `${nameCharacter[18]}` ],
				content: `Mà ta còn nghe nói ngươi chỉ làm nhiệm vụ một mình nhỉ? Chắc mày phải yếu đuối lắm và là một gánh nặng đến nỗi không có ai cho vào cùng tổ đội ha.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đừng lo. Tôi sẽ không cản trở đâu.`
			},
			{
				color: colorOther[2],
				name: [ `${nameCharacter[18]}` ],
				content: `Đừng có đứng đấy khoác lác, ngươi mau vác chỗ đồ kia lên xe đi. Thể hiện mình là người có ích đi. Còn bọn bây cứ kệ nó để cho tự vác lên.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế rồi cả đám cười lớn và lên xe để mặc tôi tự bê những thùng hàng nặng và đồ đạc của bọn họ lên xe. Vì không muốn tạo rắc rối nên tôi chỉ âm thầm nghe theo. Tôi lặng lẽ sử dụng kỹ năng${nameSkill[6]}để bê vác nên cũng không khó khăn gì. Bọn họ cũng chả bận tâm gì tới việc tôi có thể tự bê chỗ đồ nặng đó. Người đánh xe của tôi thấy chuyện xảy ra như vậy cũng không thể nói được gì bởi cũng chỉ là người được thuê. Rồi đoàn xe đã bắt đầu di chuyển.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đoàn xe băng qua cánh rừng phía Bắc của thị trấn, hai hàng cây bên đường vụt qua mắt tôi. Và rồi vượt qua khu rừng, một thảo nguyên rộng lớn hiện ra trước mắt. Đoàn xe cứ đi, băng qua những ngọn đồi lớn rồi qua những đồi hoa tràn đầy màu sắc. Cả một bầu trời bao la đầy những con thú bay lượn như chú diều hâu lông nửa trắng nửa lam, còn trên mặt đất trải dài đầy những con thú đang gặm cỏ hay đang nằm nghỉ tận hưởng làn gió mát nhè nhẹ. Không gian này khiến cho chuyến đi trong nhiệm vụ thật là thư giãn. Ngoại trừ việc khoảng không gian hiếm có này đã bị phá hỏng bởi những tiếng nói lớn của hội ${nameCharacter[18]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Trong suốt chuyến đi, ${nameCharacter[18]} cứ nói mãi về các chiến tích hắn có trong sự nghiệp ${nameJob[8]}. Còn đám bạn của hẳn cứ tung hô ca ngợi những điều hắn nói mà chả thèm quan tâm độ chính xác là bao nhiêu. Chắc là đám đó muốn theo kẻ mạnh như ${nameCharacter[18]} để còn có người bảo kê hộ. Hoặc chỉ đơn giản là không muốn gặp rắc rối với ${nameCharacter[18]}. Và theo như cuộc trò chuyện đám đó thì ${nameCharacter[18]} sắp được thăng lên hạng Bạc. Có vẻ ${nameCharacter[18]} cũng không phải là dạng chỉ biết nói mà không biết làm, ít nhất đó là điều tôi đã nghĩ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mặc kệ cuộc trò chuyện của đám đó, tôi ngồi dựa lưng vào thành xe, trống hai cánh tay lên thành và hướng nhìn về phía trước cố tận hưởng khung cảnh cùng làn gió mát mẻ này. Rồi cả đoàn xe đã dừng lại bên hồ nước có cây táo gần đó để nghỉ ăn trưa. Tôi mở thùng đồ trên xe, đưa tay vào để lấy một ổ bánh mì thì ${nameCharacter[18]} nắm chắc cánh tay, kéo lên và đẩy mạnh tôi vào thành xe làm xém thì bị ngã khỏi.`
			},
			{
				color: colorOther[2],
				name: [ `${nameCharacter[18]}` ],
				content: `Mày là ${nameJob[0]} mà, tự mình kiếm hay nấu cái gì đó mà ăn đi. Chỗ lương thực này là của bọn tao.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Người đánh xe nghe thấy vậy cũng đành phải lên tiếng nói lại với ${nameCharacter[18]}.`
			},
			{
				color: colorOther[2],
				name: [ `Người đánh xe` ],
				content: `Này anh, chỗ lương thực này là của chúng tôi chuẩn bị dành cho sáu người mà...`
			},
			{
				color: colorOther[2],
				name: [ `${nameCharacter[18]}` ],
				content: `Hả? Ngươi nói lại cho ta xem nào?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi mau đứng dậy, đưa tay phải đặt lên vai của người đánh xe để ám chỉ rằng đừng nói thêm gì. Rồi tôi bước xuống xe tiến đến chỗ cây táo, ngước nhìn lên cây kiểm tra quả nào đang ở trạng thái tốt nhất. Nếu mọi người mà nhìn tôi lúc này thì chắc nghĩ tôi trông cứ như đứa ất ơ nào đó nhìn chằm chằm vào đồ ăn treo trên cây mà không thể với tới được vậy. Cô gái tóc vàng từ nhóm ${nameJob[8]} phía trên chứng kiến việc vừa xảy ra giữa tôi và ${nameCharacter[18]} thì tiến đến cùng hai ổ bánh mì trên tay.`
			},
			{
				color: colorOther[2],
				name: [ `Cô gái` ],
				content: `Bạn gì ơi. Mình thấy bạn có vẻ đang gặp chút rắc rối nên mình có mang theo chút đồ ăn cho bạn.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mặc kệ lời cô gái vừa nói, tôi tìm được vài quả táo đang ở trạng thái tốt liền cúi người nhặt một hòn đá nhỏ gần đó, ném thẳng vào cuống quả táo. Quả táo rơi thẳng vào lòng bàn tay trái tôi, rồi tôi lại nhặt một hòn đá nhỏ khác lên để ném đồng thời cũng phản hồi cô gái.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đừng có dính dáng tới tôi nếu không muốn gặp rắc rối.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nói xong tôi lại ném đá để lấy thêm mấy quả táo nữa. Rồi tôi ngồi tựa lưng vào cây ngược hướng đoàn xe nhìn ra mặt hồ để thưởng thức các quả táo vừa hái. Cô gái sau khi nghe tôi nói thì không nói thêm gì mà quay về với nhóm của cô cùng hai ổ bánh mì đem theo.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau khi cả đoàn xe đã nghỉ trưa xong thì lại lên đường cho đến khi trời tối sầm. Cả đoàn xe quyết định sẽ dựng lều qua đêm trên thảo nguyên. Và đến bữa tối tôi biết mình không thể ăn cùng hội ${nameCharacter[18]} nên tự rời đi ngồi ăn ở chỗ khác. ${nameCharacter[18]} thấy vậy liền cười lên.`
			},
			{
				color: colorOther[2],
				name: [ `${nameCharacter[18]}` ],
				content: `Ngươi cũng biết thân biết phận không như trưa nay nhỉ? Hahaha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Dù sao tôi cũng chả muốn ăn cùng với hội ${nameCharacter[18]} nên điều này lại tốt cho tôi. Ngồi ở một góc tối, lấy ra ${nameFood[2]} đã làm từ tối hôm trước ăn một mình. Buổi trưa tôi đã không lấy ra ăn vì tôi không muốn ai nhìn thấy việc sử dụng ${inventory}. Sau khi mọi người đã ăn uống no nê thì nhóm bắt đầu phân chia ca gác và tất nhiên tôi đã bị bắt gác đến tận sáng hôm sau luôn.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi bị bắt gác đến tận bình minh. Tại sao vậy?`
			},
			{
				color: colorOther[2],
				name: [ `${nameCharacter[18]}` ],
				content: `Hả? Bọn tao còn phải giữ sức để nếu có nguy hiểm còn bảo vệ được đoàn xe chứ? Mày thì làm được gì? Mỗi gác như này mà không làm được thì mày đúng là vô dụng!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi không nói thêm gì và ngồi gác ở cuối đoàn xe. Ở trên đoàn cũng có người đang gác và anh bạn đó cũng lên tiếng hỏi tôi có ổn không. Và tôi chỉ đơn giản là không đáp lại gì, giơ ngón tay cái lên. Anh bạn đó thấy vậy không nói gì thêm.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bình minh lên và đoàn xe lại tiếp tục di chuyển. Tôi mắt nhắm mắt mở cố ngồi thẳng người nhưng không thể. ${nameCharacter[18]} thấy thế thì lại gần, vỗ vào vai tôi và dùng giọng mỉa mai nói.`
			},
			{
				color: colorOther[2],
				name: [ `${nameCharacter[18]}` ],
				content: `Tối qua bọn tao ngủ ngon lắm. Cảm ơn “bạn” nha. `
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `“Bạn” à? Không biết liệu tôi có thể đủ tin tưởng một ai để có thể gọi là “bạn” không nhỉ? Và rồi tôi đã chìm vào giấc ngủ trong khi đang suy ngẫm về thứ được gọi là “bạn”. Một giọng nói vang lên trong đầu tôi, ai đó đang gọi tên tôi. Rồi giọng nói lớn dần khiến tôi phải mở mắt ra.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]}! ${nameCharacter[1]}! Dậy đi nào. Bọn mình nghỉ ngơi đủ rồi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hóa ra là ${nameCharacter[11]} gọi tôi dậy, tổ đội đang trong nhiệm vụ nhỉ? Giấc mơ vừa rồi thật là chân thực làm sao...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Xin lỗi nha. Ngoài này thoải mái quá nên mình lỡ chìm quá sâu haha. Được rồi các cậu, chuẩn bị săn ${nameMob[2]} nào.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}`, `${nameCharacter[9]}`, `${nameCharacter[10]}` ],
				content: `Được thôi (nya)!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Gửi đến tôi trong giấc mơ. Nếu giấc mơ đó là hiện thực thì tôi mong ${nameCharacter[1]} ở thế giới đó sẽ có được sự công nhận xứng đáng và nhất là có được một người đáng tin cậy để có thể gọi là “bạn”.`
			},
		]
	},
	{
		chapter: 10,
		title: `Nhiệm vụ đầu tiên (1)`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tổ đội ${nameParty[0]} của tôi đang đứng ngơ ngác trước sáu bảng lớn treo trên tường, đính chằng chịt trên đó là những tờ nhiệm vụ. Mỗi bảng đại diện cho từng hạng, còn nhiệm vụ đều được phân chia hợp lí, tùy vài trường hợp bị đánh giá sai. Bảng phía xa quầy tiếp tân nhất là dành cho hạng Sắt và gần nhất là dành cho hạng Mythril. Bọn tôi tiến tới bảng hạng Sắt, liếc đi liếc lại tìm nhiệm vụ thích hợp cho bản thân.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Được rồi, mình sẽ lấy nhiệm vụ săn ${nameMob[1]}. Phần thưởng tuy chỉ có vài xu đồng nhưng chúng ta có thể bán nguyên liệu từ ma vật và nhất là ${nameItem[6]} `
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameItem[6]} là nơi chứa ma lực hoặc có thể nói là sinh mệnh của ma vật. Đồng thời cũng là nguồn tài nguyên thiết yếu để có thể chế tạo ra các ma cụ và dùng vào vài việc khác.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Còn mình thì chọn nhiệm vụ diệt ${nameMob[2]} nya. Có vẻ phần thưởng cũng tương đương như nhiệm vụ mà ${nameCharacter[9]} chọn nya.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình lấy nhiệm vụ giống ${nameCharacter[10]}. Nhiều nhiệm vụ lặp đính trên bảng thật. ${nameCharacter[1]} chọn nhiệm vụ nào?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À, mình chọn thu thập ${nameItem[7]}. Vừa đơn giản, vừa nhẹ nhàng để khởi đầu, cũng không quá tệ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi ngước lên nhìn đám bạn sau khi đọc tờ nhiệm vụ thì thấy đầu họ đang hơi cúi xuống trông cứ như vừa làm gì có lỗi vậy. Tôi khá bối rối khi bầu không khí tự nhiên lại thành ra như này, thật khó xử.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ờm... Các cậu? Có chuyện gì à? Sự hào hứng vừa nãy đi đâu hết rồi?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `C-cậu không chọn nhiệm vụ đi săn cùng bọn mình vì đang giận lúc hồi sáng à? Mình xin lỗi, chắc bọn mình đùa hơi quá trớn rồi.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}`, `${nameCharacter[11]}` ],
				content: `Xin lỗi cậu (nya)...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ngày hôm nay thật hết sức lạ. Các cậu ấy khiến tôi bối rối hơi nhiều trong sáng nay rồi, đến nỗi phải thốt lên.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Dừng lại một chút để mình suy nghĩ cái. Ngày hôm nay các cậu quay mình mấy vòng rồi đấy.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nghĩ lại xem hồi sáng đã có chuyện gì... Chắc là lúc ở trước cửa rồi. Trời, làm mọi người hiểu lầm hết rồi. Lúc đó tôi chỉ bối rối khi các cậu ấy nói vậy chứ không có lí do gì để giận cả. Ngược lại, tôi còn thấy vui khi được quan tâm như vậy. Giờ cần phải giải thích thế nào để phá tan bầu không khí này mới được đây... Tôi vỗ tay nhẹ để mọi người chú ý.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Được rồi. Về hồi sáng trước cửa nhà thì mình không có giận, chỉ là mình bất ngờ và bối rối thôi. Thế nên là các cậu đừng bận tâm về vấn đề đó nữa, nhé?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nếu cậu đã nói vậy... Thế thì... sao cậu không chọn nhiệm vụ đi săn cùng bọn mình vậy?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi nở nụ cười, đưa tay trái lên sau đầu còn tay kia giơ tờ nhiệm vụ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chỉ là... khởi đầu mình muốn làm nhiệm vụ gì đó nhẹ nhàng đôi chút ý mà.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cả đám đã ngỡ ngàng trước câu trả lời đơn giản của tôi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Vậy thôi à...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Ra là vậy nya...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi vừa nói dối, nụ cười vừa nãy hơi gượng chút. Sự thật thì... tôi chưa từng xuống tay với sinh vật sống nào... trừ các con côn trùng làm phiền tôi. Có vẻ trong thế giới này, đây là việc hết sức bình thường và hiển nhiên. Và sẽ đến một lúc nào đó tôi cũng sẽ phải như vậy vì nhiều lí do khác nhau để ép buộc.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]}, chỉ mỗi thế thôi nhỉ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} nhìn chằm chằm vào tôi. Dường như nhỏ đã nhận ra gì đó. Tôi biết ${nameCharacter[11]} có trực giác nhạy bén nhưng không nghĩ mình dễ bị đọc vị như vậy. Tôi cố đánh trống lảng để né câu nói của ${nameCharacter[11]}.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À mà... chúng ta đã chọn được nhiệm vụ rồi thì đem đến cho chị ${nameCharacter[15]} xác nhận vào thẻ đi nhỉ?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `... Cậu nói phải.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} không còn hỏi thêm gì, chắc linh cảm mình đã nhầm. Cả tổ đội sau đó đến bên chỗ chị ${nameCharacter[15]} để xác nhận nhiệm vụ vào thẻ và hỏi thêm một vài thông tin cần thiết về nhiệm vụ. Rồi cả nhóm rời khỏi hiệp hội, đích đến là thảo nguyên gần cánh rừng nên tổ đội quyết định ra thị trấn từ cổng Tây Bắc.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bóng dáng của một người bí ẩn lướt nhanh qua Tổ đội. Tôi bất giác quay đầu lại nhìn, người bí ẩn đó đang mặc áo choàng dài trùm đầu màu lục dần biến mất sau cánh cửa của hiệp hội. Tôi thẫn thờ đứng yên nhìn cánh cửa đóng lại, điều gì đó mách bảo thân thế của người này không bình thường. Đám bạn của tôi thấy vậy liền đứng lại gọi, tôi không bận tâm nữa mà tiếp tục di chuyển đến cổng Tây Bắc.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau khi ra khỏi thị trấn, khung cảnh hiện ra trước mắt chúng tôi trông thật là tự do. Thảo nguyên thì xanh tươi bạt ngàn, còn bầu trời thật trong xanh với những đám mây trôi nhè nhẹ. Chúng tôi đứng một lúc, cảm nhận cơn gió mát thổi từ ngoài biển vào tận gần đến cánh rừng. Từng loại cây cỏ hoa lá nhẹ nhàng đung đưa theo gió trên mặt đất. Đôi chỗ có những tảng đá to nhỏ nhấp nhổm nằm trên thảo nguyên. Và cũng có vài cái cây trơ vơ một mình trên cánh đồng, trông cứ như là cái ô lớn dành cho những ai mệt mỏi có thể dừng chân lại nghỉ ngơi vậy. Cảm giác này thật khiến tôi phải thốt lên.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thật là sảng khoái đó mà.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}`, `${nameCharacter[11]}` ],
				content: `Phải (ny)ha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người gật đầu đồng ý quan điểm với tôi, rồi tổ đội cũng bắt tay vào làm nhiệm vụ.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Được rồi, như đã bàn trên đường thì mọi người sẽ hỗ trợ mình làm nhiệm vụ đầu tiên nhỉ?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Đúng rồi nya. Sau đó sẽ đến nhiệm vụ của mình và Hyoukya. Và cuối cùng là Shuunya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Theo như chị ${nameCharacter[15]} đã nói thì bọn tôi có thể hỗ trợ nhau để hoàn thành nhiệm vụ nhưng chỉ ở mức vừa phải. Chị có lí giải là nếu hỗ trợ quá mức thì kinh nghiệm chiến đấu của người nhận nhiệm vụ sẽ giảm. Đồng thời để hoàn thành nhiệm vụ săn thì người nhận nhiệm vụ sẽ phải là người kết liễu cuối cùng nếu đó không phải là nhiệm vụ yêu cầu tổ đội. Lí do là vì hiệp hội sẽ kiểm tra lịch sử sinh vật đã săn trong thẻ để xem có phải đúng người đó hoàn thành nhiệm vụ hay không.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Vì buổi sáng đã xảy ra nhiều thứ nên giờ chỉ kịp hoàn thành nhiệm vụ của ${nameCharacter[9]}. Trưa chúng ta sẽ ăn uống và nghỉ ngơi. Rồi chiều sẽ hoàn thành nốt chỗ nhiệm vụ còn lại.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Xin lỗi mọi người nya. Vì mình sáng nay nên bị tốn thời gian nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đôi tai của ${nameCharacter[10]} dạt xuống và đuôi không còn đung đưa, đó là biểu hiện của nhỏ khi buồn hoặc hối lỗi. Tôi và ${nameCharacter[11]} thì khó mà khiến ${nameCharacter[10]} phấn chấn lên dễ dàng được nhưng đối với người còn lại thì...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]}, cậu cũng đâu có cố ý đâu. Hay như này đi, cậu hãy giúp mình tìm hố của ${nameMob[1]} được không? Chỗ này cỏ hơi dày nên mình khó mà để ý được. Mình tin cậu sẽ tìm được nhanh chóng thôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} nghe ${nameCharacter[9]} nói vậy liền tươi tỉnh hẳn, đôi tai dựng đứng và đuôi lại đung đưa.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Được rồi, mình sẽ cố hết sức để tìm ra hố một cách nhanh chóng nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} nói xong liền phóng đi tìm luôn. Cả ${nameCharacter[11]} và tôi đều giơ ngón cái hướng về phía ${nameCharacter[9]}, tất nhiên là cậu ấy không hiểu được ý của bọn tôi. Sau vài phút tổ đội đi tìm hố thì ${nameCharacter[10]} đã tìm ra được một chỗ.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cậu siêu thật đấy ${nameCharacter[10]}.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Hehe, xoa đầu và khen mình tiếp đi nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ ${nameCharacter[10]} đã quen với việc ${nameCharacter[9]} xoa đầu rồi nên có thể coi đây là việc thường ngày. Dù sao thì thấy “${nameTitle[2]}” thân nhau cũng tốt. Tôi cũng muốn xem tiếp khung cảnh này lắm nhưng mà nhiệm vụ cần hoàn thành.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[9]}, bắt lấy hòn đá nhỏ này mà ném vào hố dụ nó ra đi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Rồi, cảm ơn nhiều. Mọi người hãy tránh xa ra nha. Cẩn thận ${nameMob[1]} đổi mục tiêu tấn công sang các cậu đấy.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau câu nói đó mọi người liền lùi lại, còn cậu ta đứng cách hố một khoảng rồi ném hòn đá vào. Một lúc sau có một cái đầu nhô lên, ${nameMob[1]} nhìn chằm chằm vào ${nameCharacter[9]} một lúc rồi lao lên như tên bắn. Cũng may ${nameCharacter[9]} đã cản được nhờ tấm khiên nên cậu không bị thương. Nhưng phải công nhận lực bật nhảy của ${nameMob[1]} đúng là rất khỏe, đến nỗi ${nameCharacter[9]} còn tí thì bị ngã sau khi đỡ.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Tê tay thật. May mà cha ${nameCharacter[1]} dạy chiến đấu không thì không đỡ nổi mất. Có lẽ mình đã bất cẩn rồi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameMob[1]} giống với loài thỏ ở thế giới trước, chỉ khác là trên đầu nó có một cái sừng nhỏ bằng một đốt ngón tay cái và có khả năng dùng kỹ năng. Ở vùng này thì nó có bộ lông nâu nhạt, đôi mắt đen óng, đuôi xù lông như cục bông và đôi tai dài đủ để che được cả mắt nó. Loài này khá là thù địch, chỉ cần có động vật hay con người ở trước mặt đều sẽ tấn công. Mà phương thức tấn công của ${nameMob[1]} là dùng kỹ năng${nameSkill[11]}để tăng sức bật húc đầu vào đối thủ. Tuy sừng của chúng ngắn nhưng nếu đâm trúng những chỗ hiểm cũng đủ để khiến đối thủ chịu thiệt thòi lớn. Hơn thế nữa phần sọ của ${nameMob[1]} khá cứng nên sau mỗi lần húc chúng sẽ không bị choáng, thậm chí khi chân chúng chạm được mặt đất sẽ ngay lập tức tấn công tiếp. Nếu mà đánh cả bầy ${nameMob[1]} thì khả năng thua là rất cao trừ khi phòng thủ của bạn cực tốt. Theo lời của chị ${nameCharacter[15]} nói về ${nameMob[1]} là như vậy.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau một hồi quan sát ${nameCharacter[9]} thì tôi đã phát hiện ra điểm yếu của ${nameMob[1]}, tôi hét lớn cho cậu ấy biết chút gợi ý.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[9]}! Đừng để chạm đất!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[9]} liền hiểu ý của tôi ngay lập tức. Khi ${nameMob[1]} tấn công, cậu đã hướng cái khiên chéo lên đẩy nó bay lên. Khi ở trên trời, nó không thể làm gì được nữa, ${nameCharacter[9]} cầm chắc cái chùy ở tay phải vung lên kết liễu chỉ trong một phát. Với khả năng hỗ trợ thì tôi có thể điều khiển gió để hất tung ${nameMob[1]} lên hộ nhưng điều đó sẽ khiến ${nameCharacter[9]} thiếu hụt khả năng. Cho gợi ý thế này là tốt nhất.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[9]} lấy một con dao nhỏ, rạch phần ngực ra để lấy ${nameItem[6]}.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cuối cùng cũng được... Hết cả hơi... Không ngờ chiến đấu với người và ma thú lại khác biệt đến thế.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cứ để con đó mình cầm hộ cho. Còn vài con nữa thôi là hoàn thành nhiệm vụ rồi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Phải rồi... Mình quên mất số lượng phải săn của nhiệm vụ. Trời ạ!`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Để mình tìm hố giúp cho, cậu cứ nghỉ ngơi chút đi nya.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình với ${nameCharacter[1]} đi chuẩn bị đồ ăn trưa ở chỗ bóng cây đằng kia. Cố găng lên.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Hầy... Cảm ơn nhiều. Được rồi, tiếp tục thôi nào!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau khi săn được thêm vài con nữa thì ${nameCharacter[9]} đã thấm mệt. Cậu cùng ${nameCharacter[10]} cầm chỗ vừa săn tới nơi bóng cây nơi tôi với ${nameCharacter[11]} dọn để ăn trưa.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nhiệm vụ hoàn thành. Mình chưa bao giờ xuống sức như này cả.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Chắc cậu chỉ đang đói thôi nya. Tí ăn đồ do ${nameCharacter[1]} làm là lại khỏe ngay mà nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]}, cậu có thể đưa mình chỗ ${nameMob[1]} cậu đang cầm được không?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Được thôi nya. Nè cầm lấy... NYA! SAU LẠI THÀNH ĐỐM SÁNG NHỎ SAU KHI CẬU ĐỘNG VÀO VẬY NYA? VÀ NÓ BIẾN MẤT RỒI NYA?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Bình tĩnh nào ${nameCharacter[10]}. Mình chỉ cho vào ${inventory} để cho gọn và giữ cho thịt vẫn tươi ý mà.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${inventory} không giới hạn là điều ước thứ ba, cũng như cuối cùng của tôi. Để chứa vật phẩm cần phải chạm trực tiếp và để lấy ra thì chỉ cần nghĩ đến. Vật phẩm vào hay ra không gian sẽ bị nén lại thành quả cầu năng lượng phát sáng nhỏ vừa lòng bàn tay. Trạng thái của vật phẩm trong đây sẽ được giữ nguyên và không thể chứa vật phẩm có tri giác. Số lượng vật phẩm chứa được trong không gian được giới hạn bằng tổng trọng lượng các vật nhưng do điều ước nên cái này tôi không cần bận tâm đến.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Lúc này, bộ đôi mặt đơ ra không tin vào điều vừa chứng kiến.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Thì ra là vậy... Mình chả hiểu gì hết cả! Cậu có biết số người có thể dùng ${inventory} chỉ đếm được trên đầu ngón tay không?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Phải đó nya. Và cậu lại là một trong số đó nya... Nè ${nameCharacter[11]}, mình chắc cậu đã biết trước rồi nhỉ nya?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Ừm... Từ vài phút trước đấy khi ${nameCharacter[1]} cất con ${nameMob[1]}. Rồi lấy ra thảm trải để ngồi, cùng hai giỏ đồ ăn và bốn túi đựng nước.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Hẳn nào, mình tự hỏi ${nameCharacter[1]} lấy mấy thứ này từ đâu ra... Giờ thì biết rồi. Cậu còn có thể làm gì để khiến bọn mình ngạc nhiên nữa nhỉ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người đều quay ra nhìn tôi. Có vẻ tôi đã trở thành tâm điểm mất rồi. Thôi thì các cậu ấy đang có tâm trạng vui nên là vào tiết mục chính thôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Được rồi, hãy nhìn vào hai giỏ đồ ăn đây. Trưa nay chúng ta sẽ ăn ${nameFood[2]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nguyên liệu gồm bánh mì, trứng gà, cà chua và rau xà lách. Đầu tiên bóc rau xà lách ra, sau đó rửa sạch và để ráo nước. Cà chua thì cũng rửa sạch rồi thái lát thành miếng nhỏ. Trứng đập vào bát, cho muối nếu ăn đậm hoặc cho đường nếu ăn ngọt, khuấy đều rồi tráng trứng cuộn. Cuối cùng bánh mì rạch một đoạn ở giữa, rồi cho trứng, cà chua và xà lách vào đều vị trí.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À, bên phải là mình làm vị ngọt, còn bên trái là làm đậm. Mình vẫn chưa biết khẩu vị của các cậu thế nào nên đành làm hai loại.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nhìn trông đơn giản vậy mà sao không có ai nghĩ ra nhỉ. Thôi mình đói rồi, mời các cậu ăn... Ồ! Ngon thật.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Ngon quá đi nya.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Bên trong trứng vẫn mềm nên ăn cùng với bánh mì sẽ dễ ăn hơn. Có cả cà chua kèm theo nên bánh mì ăn sẽ đỡ khô. Còn xà lách làm nhạt đi vị trong miệng để lúc sau ăn lại thấy ngon miệng, không bị dễ chán.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} lại trở thành nhà phê bình ẩm thực nữa rồi. Mà tôi thấy vui khi họ thích đồ ăn tôi làm. Đồng thời tôi cũng biết được một chút khẩu vị của mọi người. Bộ đôi có vẻ là thích ăn đậm, còn ${nameCharacter[11]} giống tôi thích ăn đồ hơi ngọt. Được rồi, phải cố gắng làm thêm nhiều món hơn nữa mới được.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nè, ai ăn hộ mình xà lách được không? Mình không thích ăn... Ủa nó đâu rồi?`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Chú diều hâu vụt bay qua cắp rau xà lách của ${nameCharacter[9]} và đem lên cây ăn. Còn ${nameCharacter[1]} nằm dưới tán cây, nhìn lên bầu trời và mắt cậu nhắm lại từ lúc nào không hay. Liệu cậu có thể đang mơ gì nhỉ?`
			}
		]
	},
	{
		chapter: 9,
		title: `Hiệp hội ${nameJob[8]}`,
		dialogue: [
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Ái chà, nay dậy sớm thế Shu? Con đang làm bữa trưa đó à?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chào buổi sáng, mẹ. Hôm qua con có nói nay đi đăng ký làm ${nameJob[8]} rồi mà nhỉ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Phải ha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nhóm tôi đã quyết định sau khi nhận được chức nghiệp sẽ đăng ký làm ${nameJob[8]} cùng nhau luôn. Vừa đúng lúc tôi làm xong đồ ăn trưa thì các cậu ấy cũng đã đến.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thôi con đi đây, các bạn ý đang đợi ở ngoài rồi. À mà con có làm bữa sáng cho mẹ đó. Con chào mẹ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Vậy mẹ cảm ơn. Đừng có làm gì quá nguy hiểm và nhớ về trước bữa tối nhé.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đám bạn đứng đợi tôi trước cửa nhà và như mọi khi, “${nameTitle[2]}” vẫn to mồm như thường.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình đây! Các cậu có thể nhỏ mồm chút được không?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Xin lỗi nha! Mà nhìn tấm khiên lớn và cái chùy gai của mình nè. Mình đã quyết định đây là vũ khí của ${nameJob[5]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nhìn mọi người trông thật hào hứng với vũ khí mới trong tay. Vật phẩm là vũ khí hoặc công cụ liên quan đến chức nghiệp tạo được ra bằng ma lực. Chúng có thể chuyển hóa ngược lại thành ma lực nếu không bị tổn hại lớn. Nghe có vẻ tiện lợi nhưng cái tên mà mọi người gán cho những món đồ này là vật phẩm khởi đầu. Lí do là vì không thể tạo vật phẩm khác ngoài loại ban đầu, không thể tạo thêm nếu vật phẩm trước còn tồn tại và không thể tinh chỉnh vật phẩm.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Còn mình dùng trọng kiếm của ${nameJob[3]} nya. Nhìn trông có vẻ nặng nhưng khi cầm lên thì khá là nhẹ đó nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Một phần cũng là do chức nghiệp tương thích với vũ khí. Nhưng tôi nghĩ là do thể chất đặc biệt của ${nameCharacter[10]} nên cầm mới không thấy quá nặng. Nhìn nhỏ cầm trọng kiếm một tay cứ khua khua trông hãi thật...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `V-vũ khí của các cậu trông ổn lắm. Còn của ${nameCharacter[11]} thì... cung nhỉ?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Cung phép của ${nameJob[4]}. Chỉ cần truyền ma lực vào cung để tạo mũi tên bắn là được.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cây cung hay đó. Nhưng... khá tốn ma lực nhỉ?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Đúng là vậy... Còn vũ khí của ${nameCharacter[1]} là... dao bếp?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ờm... Nói sao đây... Mình chọn công cụ ${nameItem[2]} của ${nameJob[0]} nên là chỉ có dụng cụ nấu ăn thôi, haha...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameItem[2]} của ${nameJob[0]} là điều ước thứ hai, dạng khối lập phương bạc đầy lòng bàn tay. Cho phép tôi dùng ma lực để lấy bất cứ dụng cụ nhà bếp từng thấy trong${nameLocation[0]}`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nhìn vẻ mặt của các cậu ấy thì chắc đang tỏ vẻ thương hại tôi đây. Có lẽ nên nói gì đó để mọi người bớt lo lắng lại.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình vẫn sẽ ổn thôi. Nhìn này, mình có kiếm của cha đưa và con dao bếp mà. Thậm chí là cha có dạy mình vài đường tự vệ rồi nên đừng lo.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Thực ra mình đang băn khoăn với cái công cụ cậu chọn cơ... Nhưng mà nếu gặp nguy hiểm thì mình sẽ dùng tấm khiên này bảo vệ cậu.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cả mình nữa nya. Mình sẽ dùng trọng kiếm này chém bay nguy hiểm luôn nya.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình sẽ không để thứ gì nguy hiểm tiếp cận ${nameCharacter[1]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Các cậu ấy hào hứng quá ha... Mà tôi cũng khá vui khi được mọi người quan tâm nhiều đến vậy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À ừm... Cảm ơn mọi người. Thế giờ chúng ta đến... Sao lại có diều hâu bay quanh đây nhỉ?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ê ${nameCharacter[1]}! Đừng nói ra chứ!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} đang cố kiềm chế bản năng của mình nhưng có vẻ không thể rồi. Có lẽ sẽ cần thêm vài năm nữa...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ối, lỗi mình... Đuổi theo ${nameCharacter[10]} mau!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bằng một cách nào đó thì cả nhóm tôi cũng đã đến hiệp hội ${nameJob[8]}. Hiệp hội thật lớn cùng bảng hiệu to đùng trước mặt tiền, mặc dù nơi đây chỉ là thị trấn. Nhìn qua kiến trúc thì vật liệu chủ yếu là từ gỗ nhưng không mất đi sự tinh tế. Khi vào bên trong, đông đúc ${nameJob[8]} với những phong cách ăn mặc và chủng loại khác nhau. Thậm chí ở đây có cả quầy đồ ăn nhẹ cho ${nameJob[8]} nữa, chắc đó là một phần lí do hiệp hội mới lớn như vậy.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Hiệp hội trông tuyệt thật đấy.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Phải đó nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thẫn thờ một lúc, tôi ra hiệu mọi người di chuyển do các ${nameJob[8]} xung quanh dần để ý đến. Tiến vào sâu hơn, tôi bắt đầu nghe thấy vài tiếng xì xào về cậu bé ${nameJob[0]} đã đánh thắng nhóc quý tộc ${nameCharacter[12]} trong trận giả chiến. Tôi tạm thời coi như không nghe thấy gì để né rắc rối.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Có quầy trống kìa, đi theo mình nào các cậu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Các quầy xung quanh còn đông đúc, nên chúng tôi quyết định đến quầy còn khá vắng phía bên phải. Sau một hồi chờ đợi, trước mắt chúng tôi là nụ cười niềm nở của chị tiếp tân khá xinh đẹp với mái tóc dài vàng óng, cùng đôi mắt nâu dịu nhẹ nhìn chúng tôi với sự vui vẻ lại thoáng chút tò mò. Bộ trang phục cũng thật đơn giản, không khác biệt quá nhiều so với những tiếp tân, nhưng cũng tôn lên dáng vẻ đầy sức sống của một thiếu nữ tuổi đôi mươi. Không ngạc nhiên lắm khi nhiều ${nameJob[8]} nán lại quầy chút ít sau khi nhận nhiệm vụ, nhưng với họ, chị vẫn giữ nguyên được phong thái chuyên nghiệp, cũng như nụ cười tự tin.`
			},
			{
				color: colorOther[1],
				name: [ `Tiếp tân` ],
				content: `Chào mừng các em đến với hiệp hội ${nameJob[8]} chi nhánh ${nameLocation[2]}. Có vẻ... các em lần đầu đến đây nhỉ?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Sao chị biết hay vậy nya?`
			},
			{
				color: colorOther[1],
				name: [ `Tiếp tân` ],
				content: `Chị làm ở đây cũng được một khoảng thời gian rồi và khả năng nhớ của chị khá tốt đó.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Chúng tôi phải thừa nhận chị dễ gần thật và nụ cười của chị thật khiến người khác cảm thấy thoải mái.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Vậy chị xin giới thiệu chị tên là ${nameCharacter[15]}. Các em muốn đăng ký làm ${nameJob[8]} nhỉ?`
			},
			{
				color: colorCharacter[1],
				name: [ `Cả nhóm` ],
				content: `Đúng rồi ạ (nya).`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Nếu vậy thì mời các em lần lượt chạm vào ${nameItem[3]}. Quả cầu này chỉ hiện thị vài thông tin như tên, tuổi, giới tính, chủng loại, chức nghiệp để chị kiểm tra thôi nên đừng lo lộ các thông tin khác nhé.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Lần lượt mỗi người trong nhóm tôi lên làm và rồi khi đến lượt tôi...`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Xem nào... ${nameCharacter[1]}, chức nghiệp ${nameJob[0]}... Khoan đã ${nameJob[0]} ư?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng? Có vấn đề gì không ạ?`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `À ừm... Em có chắc về việc làm ${nameJob[8]} không? Ý chị là chức nghiệp không có kèm kỹ năng chiến đấu khá là bất lợi cho em. Và khả năng gặp nguy hiểm sẽ còn cao hơn bình thường. Tất nhiên em vẫn có thể đăng ký, chị chỉ muốn em cân nhắc lại thôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Làm chị ${nameCharacter[15]} lo cho tôi mất rồi. Mà nói về chức nghiệp này yếu cũng không sai. Vài trường hợp xấu có thể khiến đồng đội gặp rắc rối và nguy hiểm vì không thể tự đảm bảo an toàn. Nhưng tôi tin kỹ năng của mình sẽ bù vào thiếu sót đó. Trước khi tôi kịp mở miệng thì ${nameCharacter[9]} đã lên tiếng.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Chị không phải lo cho ${nameJob[0]} của nhóm em đâu. Bạn ý khá lắm.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Đúng đó nya. ${nameCharacter[1]} còn đánh thắng cả ${nameCharacter[12]} trong trận đấu kiếm nữa mà nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Đúng đó.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vừa dứt lời, tôi cho mỗi người một cái “cốp” vào đầu.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Bộ đôi ngốc này! Sao hai cậu lại nói ra chứ?`
			},
			{
				color: colorCharacter[9],
				name: [ `Bộ đôi` ],
				content: `Đau! Sao lại đánh mình (nya)?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Không gian gần quầy tiếp tân bỗng im lặng sau khi nghe bộ đôi nói vậy. Trời ạ! Sẽ rắc rối lắm đây... Một hệ thống sẽ gồm các thành phần có vị trí nhất định và nếu bị đảo thì sẽ loạn hết lên. Tương tự như chức nghiệp, không thể nào ${nameJob[0]} lại có thể đánh bại ${nameJob[2]} được. Tôi cứ ngỡ sẽ gặp rắc rối lớn nhưng mọi người xung quanh bỗng ồ lên.`
			},
			{
				color: colorOther[2],
				name: [ `${nameJob[8]}` ],
				content: `Ra kia là nhóc đầu bếp đã thách đấu quý tộc đó.`
			},
			{
				color: colorOther[2],
				name: [ `${nameJob[8]}` ],
				content: `Phải đó, thậm chí cậu nhóc còn đánh thắng nữa chứ.`
			},
			{
				color: colorOther[2],
				name: [ `${nameJob[8]}` ],
				content: `Hôm qua tôi có dừng chân xem, trận đấu tuy kết thúc chóng vánh nhưng ở pha cuối cậu ${nameJob[0]} xử lí thần sầu lắm.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Xung quanh tôi bắt đầu bàn tán sôi động hẳn, những người ở xa hơn cũng trở nên tò mò. Mọi chuyện diễn ra không tệ như tôi đã nghĩ... Còn chị ${nameCharacter[15]} đột nhiên cúi người xuống khiến nhóm tôi giật mình và khó xử.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Chị thành thật xin lỗi đã đánh giá em hơi sớm. Là một tiếp tân chị không nên nói những lời như vậy. Thực sự xin lỗi em nhiều.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `C-chị không cần xin lỗi đâu! Em hiểu chị nói vậy vì không muốn em gặp nguy hiểm thôi, nên là xin chị đừng cúi nữa!`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Nhưng...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Khó xử quá, chị ${nameCharacter[15]} đúng là nghiêm túc trong công việc mà. Làm sao đây... Mọi người xung quanh đang nhìn chằm chằm kìa.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Thưa chị... ${nameCharacter[1]} thực sự sẽ không để tâm đến mấy chuyện như này. Chị là người tốt. Bọn em cũng nghĩ vậy.`
			},
			{
				color: colorCharacter[9],
				name: [ `Bộ đôi` ],
				content: `Đúng đó chị! (nya!)`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Nếu các em đã nói vậy... chị xin phép.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người xung quanh cũng không còn để ý đến bên đây nữa. Tôi nhích lại gần ${nameCharacter[11]}, nói nhỏ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cảm ơn cậu nhiều nha, ${nameCharacter[11]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Từ lúc nào, tay tôi đã ở trên đầu ${nameCharacter[11]} và xoa nhẹ. Đến khi tôi nhận ra, mặt nhỏ đã ửng đỏ thì...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `A! Xin lỗi nha, tự nhiên mình lại xoa đầu cậu...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Không có sao...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đôi tai lá trúc của ${nameCharacter[11]} cũng đã ửng hồng, vẫy lên xuống. Chị ${nameCharacter[15]} cũng nhận ra gì đó, chỉ cười thầm.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Đây là ${nameItem[4]} của các em. Nó hiển thị một vài thông tin như là tên, tuổi, giới tính, chủng loại, chức nghiệp, hạng Mạo hiểm giả, tổ đội nếu có, thống kê nhiệm vụ nhận và sinh vật đã hạ.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Riêng hạng Mạo hiểm giả, tổ đội và thống kệ nhiệm vụ nhận có thể sửa đổi trên thẻ thông qua ma cụ đặc biệt của hiệp hội.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameItem[4]} hơi trong suốt, nguyên liệu làm từ pha lê thì phải, kích thước vừa lòng bàn tay và... chỉ có thể? Xem thông tin kiểu gì nhỉ?`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Các em còn một công đoạn nữa là quẹt giọt máu của bản thân lên thẻ là hoàn tất đăng ký rồi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `À, ra là chưa xong. Chị ${nameCharacter[15]} có đưa thêm cây kim để chọc vào ngón tay. Sau khi quẹt ngón tay bị đâm đó lên thẻ thì thông tin hiện ra, còn giao diện thẻ thay đổi thành màu ánh kim của sắt.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ồ! Thẻ biến thành tấm sắt mỏng rồi này.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Nhưng trọng lượng vẫn thế mà nya?`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Thực ra ${nameItem[4]} là một loại ma cụ. Diện mạo của thẻ tự động thay đổi khi thăng hay tụt hạng, giống với nguyên liệu cùng tên hạng. Và với việc nhỏ máu lên, các em đã tạo liên kết thông tin cá nhân vĩnh cửu. Sau khi liên kết, thẻ sẽ không dễ bị phá hủy trừ khi sử dụng ma cụ đặc biệt của hiệp hội`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Công nghệ hiện đại hơn tôi nghĩ. Tò mò quá nhưng chắc là không hỏi được rồi.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Được rồi, giờ chị sẽ phổ biến các nội dung cần biết khi là ${nameJob[8]} nhé.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Về hạng ${nameJob[8]} được chia làm sáu loại, thấp nhất là hạng Sắt, rồi tăng lên Đồng, Bạc, Vàng, Bạch kim và Mythril là hạng cao nhất.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Để có thể thăng hạng phải hoàn thành một trăm nhiệm vụ cùng bậc hoặc hơn bậc. Sau đó số lượng yêu cầu hoàn thành nhiệm vụ sẽ tăng thêm một trăm mỗi lần thăng hạng. Đồng thời cũng phải trải qua một bài kiểm tra đánh giá của hiệp hội để có thể chính thức thăng hạng. Đặc biệt, nếu có thành tích xuất sắc kèm tín cử từ hạng Bạch kim hoặc Mythril hoặc từ những người có quyền lực sẽ được xem xét thăng hạng, bỏ qua các điều kiện cần.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Sau một khoảng thời gian không làm nhiệm vụ sẽ bị tụt hạng, lần lượt từ hạng Sắt là một tháng, rồi hạng Đồng là ba tháng, sáu tháng, chín tháng và hạng Bạch kim là một năm. Riêng hạng Sắt nếu lâu không làm nhiệm vụ sẽ phải nộp phí để hoạt động lại, còn hạng Mythril sẽ không bị tụt.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Ở vài hạng nhất định sẽ có quyền lợi đặc biệt như hạng Bạch kim và Mythril sẽ được trả phí sửa chữa đồ cùng phí chữa trị sau khi hoàn thành nhiệm vụ. Còn riêng hạng Mythril sẽ có thêm quyền lợi là hưởng lương hưu mỗi tháng khi người đó chính thức nộp đơn nghỉ không hoạt động làm ${nameJob[8]} nữa. Tất nhiên họ vẫn có thể rút đơn và hoạt động tiếp nhưng lương hưu sẽ tạm dừng, sau đó vẫn có thể nộp lại đơn nếu muốn. Đổi lại, họ sẽ sẽ bị buộc triệu tập làm nhiệm vụ khi xảy ra trong bất cứ hoàn cảnh nào.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Về nhiệm vụ, sẽ được phân loại sao cho phù hợp với thứ hạng của ${nameJob[8]}. Có thể nhận nhiệm vụ cao hơn một hạng nhưng không thể nhận nhiệm vụ thấp hạng. Nhiệm vụ cao hạng hơn có thể làm nếu được mời tham gia vào tổ đội hạng đó nhưng phải cân nhắc nếu quá chênh lệch trình độ.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Sau khi hoàn thành nhiệm vụ sẽ nhận được tiền thưởng ghi trong yêu cầu. Tùy vào nhiệm vụ sẽ có gia hạn thời gian hoàn thành hoặc không. Đối với nhiệm vụ yêu cầu từ người khác sẽ cần chữ kí của họ để xác nhận hoàn thành nhiệm vụ. Nếu nhiệm vụ bị thất bại sẽ bị trừ một điểm tiến trình nhiệm vụ đã hoàn thành, đây là điểm cần để tham gia vào bài kiểm tra thăng hạng.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Về tổ đội, hiệp hội sẽ dùng ma cụ đặc biệt để ghi tên tổ đội cũng như tên các thành viên vào thẻ. Mục đích nhằm để quản lý và nắm bắt tình hình các Mạo hiểm giả. Có thể tạo tạm thời hoặc lâu dài. Không giới hạn số lượng thành viên trong tổ đội. Số tiền thưởng tự bên tổ đội quyết định phân chia cho các thành viên.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Về chính sách, mất thẻ phải nộp phí để làm lại. Các trường hợp như dùng thẻ của người khác, các ${nameJob[8]} gây gổ với nhau dẫn đến bạo lực bộc phát, khiến người khác bị liên lụy khi đang làm nhiệm vụ đều phải nộp phạt và đình chỉ tạm thời.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Trường hợp bỏ rơi người trong nhiệm vụ hộ tống hoặc bỏ rơi thành viên tổ đội trong tình thế nguy hiểm khi có thể cứu phải nộp phạt, đình chỉ tạm thời và tụt hạng.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Trường hợp giả mạo thẻ sẽ bị cấm vĩnh viễn làm ${nameJob[8]}. Sát hại cư dân vô tội sẽ bị cấm vĩnh viễn làm ${nameJob[8]} và bị xử theo luật của đất nước.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Và đó là tất cả những thông tin các em cần biết. Các em có câu hỏi gì không?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cả nhóm tôi đang hơi bị đơ sau khi nghe một đống thông tin. Chị ${nameCharacter[15]} nhiệt tình thật...`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `À... nếu các em chưa nhớ được từng đó thông tin thì có thể đọc ở ${nameItem[5]}. Những gì chị nói chỉ là chút thông tin cơ bản.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thật luôn đấy hả? Nhìn cuốn sổ trông vừa bàn tay của người trưởng thành mà cũng dày ngang bằng ngón tay cái.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `V-vậy cho em xin một cuốn. Tiện thể bọn em muốn tạo một tổ đội lâu dài.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `Được rồi, vậy tên của tổ đội em sẽ là gì nào? Và chị cũng xin lại thẻ của các em để điền thông tin vào nữa.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Tên là ${nameParty[0]} ạ!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Mình biết là chúng ta đã bàn trước cái tên nhưng... nó có ý nghĩa gì vậy?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Nói đi nào Shuunya! Sao lại đặt tên đó nya? Ai cũng tò mò về cái tên cả nya...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]}?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} nhìn tôi, đôi mắt ánh lên tò mò xen lẫn háo hức. Tuy đúng là có làm tôi hơi lung lay nhưng...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nào nào, đây là bí mật quyết định kết cục của tổ đội đó. Khi nào đến lúc thích hợp nhất thì mình sẽ tiết lộ ý nghĩa sau nha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi càng khiến cho cái tên trở nên bí ẩn hơn. Và cả ba cậu ấy chỉ có thể nhìn chằm chằm vào tôi mà không làm được gì.`
			},
			{
				color: colorCharacter[15],
				name: [ `${nameCharacter[15]}` ],
				content: `E hèm. Đây là thẻ của các em và xin chúc mừng các em đã hoàn thành đăng ký. Giờ hãy qua bên phải và chọn lấy nhiệm vụ đầu tiên nào.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Và thế là hành trình đầu tiên của ${nameParty[0]} đã bắt đầu. Nhiệm vụ mà tổ đội chọn đó là...`
			}
		]
	},
	{
		chapter: 8.5,
		title: `Lần đầu nấu ăn`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ngày hôm nay thật mệt mỏi, rất nhiều chuyện đã xảy ra. Hiện tại tôi đang mười tuổi và cuối cùng tôi cũng có thể sử dụng những kỹ năng tôi đã ẩn đi bấy lâu nay. Thế nên, tối nay tôi sẽ nấu ăn sau một khoảng thời gian không động tới. Tiện thể, hôm nay nhóm của tôi cũng qua ăn tối cùng.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Con có chắc không đó. Đây là lần đầu con nấu ăn mà. Hay để mẹ nấu còn con cứ ra chơi với bạn đi ha.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mẹ cứ tin con, con nhìn mẹ nấu ăn nhiều rồi mà. Mấy món đơn giản con làm được hết.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Ừm... Nếu thế thì để mẹ dọn bàn ăn.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mẹ dọn xong thì cứ ra phòng khách nghỉ ngơi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi lấy ${nameItem[2]} từ chức nghiệp ${nameJob[0]}, cầm con dao đã chiến đấu với ${nameCharacter[12]} lên tay, ngắm nhìn nó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Con dao đó là lúc con chiến đấu với ${nameCharacter[12]} nhỉ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đúng rồi ạ. Và tất cả chỗ dụng cụ này đều từ chức nghiệp ${nameJob[0]} của con.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Mẹ hiểu rồi. Giao lại căn bếp cho con nhé, Shu muốn làm món gì cũng được. Miễn là ăn xong không phải gọi mục sự ${nameCharacter[14]} đến là được.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng vâng.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi bắt đầu sơ chế ngay khi mẹ rời đi. Nguyên liệu trên bếp không khác quá nhiều so với thế giới trước, khác chăng chỉ là hình thái của “nguồn nguyên liệu” đó mà thôi. Với những nguyên liệu có được, ${nameFood[0]} và ${nameFood[1]} là hai lựa chọn của tôi. Giờ thì đến lúc vận dụng các kỹ năng từ chức nghiệp của tôi rồi...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cầm “thanh gươm chiến thắng” trong tay, tôi nhịp nhàng cắt rau củ đã gọt vỏ rửa sạch, thành các miếng vừa miệng, rồi chia rõ từng thứ ra. Rau và ngô được để riêng cho món trộn, còn những miếng khoai tây với cà rốt vuông vức đặt sẵn trong nồi gang, chuẩn bị cho món hầm. Trút sẵn nước sạch vào nồi, tôi dùng phong thuật để điều chỉnh nhịp lửa, vừa chuẩn bị luôn cho nồi thịt bò cũng đã cắt miếng, rửa sạch và ướp chút hương liệu. Một nồi để sơ chế thịt, một nồi hầm sẵn rau củ cho mềm. Nhanh chóng vớt rau đã chín, chuyển khoai và cà rốt sang, nhẹ nhàng rắc muối lên nồi thịt ngả màu nâu sẫm đang bập bùng, theo cái cách mà tôi đã chứng kiến ở tiền kiếp. Đã nấu thì không chỉ phải ngon, mà cũng phải thật “kiểu cách”, tôi nghĩ vậy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Con nấu xong rồi, mời mọi người vào ăn.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Để xem con ta lần đầu nấu ăn thế nào đây. Haha!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Mẹ có thể ngửi thấy mùi thơm từ trong bếp.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Thơm quá nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Làm mình đói quá rồi này.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Đồ ăn của ${nameCharacter[1]}, mình phải nếm thử!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ mọi người thực sự đói ha... Rồi mọi người tiến vào bàn ăn và đúng như tôi nghi ngờ, họ có vẻ hơi đề phòng bởi ai cũng lo lắng khi là người thử món. Còn riêng ${nameCharacter[11]} thì... tôi không thể đọc được tâm trạng của nhỏ đang thế nào nữa. Dường như có vài bông tuyết đang lấp lánh quanh nhỏ thì phải? Dù sao mấy món này chắc lần đầu họ thấy nên có lẽ phải giới thiệu qua. Tôi cũng hơi lo lắng khi người khác thử món do mình làm.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Được rồi mọi người, món đầu tiên là ${nameFood[1]}. Món này gồm thịt bò, khoai, cà rốt và hành tây. Và chúng ta sẽ ăn cùng với bánh mì nhúng vào nước hầm.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi muốn ăn với cơm cơ nhưng có vẻ ở đây không ai biết cơm là gì. Hi vọng nơi nào ở ${nameLocation[4]} hoặc trong${nameLocation[0]}có tồn tại gạo hoặc một thứ tương tự như vậy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Hừm... Mùi thì thơm thật nhưng màu lạ quá. Ăn chắc ổn nhỉ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Sẽ ổn thôi... em nghĩ vậy?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ờ... Hai cậu nghĩ...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[9]} chưa nói hết câu thì ${nameCharacter[11]} đã cắt ngang.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Ngon tuyệt! Thịt, khoai, cà rốt rất mềm và được cắt rất vừa miệng. Ăn miếng nào thì tan chảy miếng đó. Còn bánh mì chấm vào nước hầm khiến nó không bị khô và khó ăn. Thêm nữa có hành trong món khiến việc ăn nhiều không bị ngán.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hế, ${nameCharacter[11]}? Tôi cũng như mọi người đã rất bất ngờ khi lần đầu thấy nhỏ nói một tràng như vậy. Mà... nhỏ là ẩm thực gia à? Chắc cậu ấy đói lắm ha. Được khen như vậy tôi cũng thấy hơi ngại, rồi mọi người cũng thử và...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ta chưa bao giờ ăn một món nào ngon như vậy cả.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Đúng là ngon thật.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Ngon thật đó Shu! Khi con bảo mẹ làm mấy món đơn giản mẹ không nghĩ lại làm ra món ngon như vậy.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Đúng đó nya. Nhưng mà mình thấy món này hơi đậm nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Mẹ cũng nghĩ vậy, chắc lần sau con nên bớt ít muối lại.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Món đầu thành công, giờ đến món cuối cùng. Mọi thứ đều theo như kế hoạch của tôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy thì mọi người hãy thử món cuối của con đây ${nameFood[0]}. Món gồm các nguyên liệu có trong tên.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Hừm... Món này hơi nhạt đó con.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu quên cho muối rồi nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Biết ngay mọi người sẽ nghĩ như vậy mà. Đúng là tôi đã không cho muối vào, nhưng mà...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `K-không thể nào...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cậu ổn chứ?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Thiên tài...`
			},
			{
				color: colorCharacter[9],
				name: [ `Cả nhà` ],
				content: `Thiên tài? (Nya?)`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ ${nameCharacter[11]} là người duy nhất nhận ra lí do tôi làm món đó nhưu vậy. Nhỏ có giác quan nhạy bén thật đấy.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Món hầm đậm. Món rau nhạt. Chỉ khi mọi người ăn riêng.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Nếu vậy ý con là...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Chúng ta sẽ ăn cả hai món cùng nhau.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy là mọi người đã nhận ra ý đồ, trung hòa vị giác là thứ mà tôi đang nhắm tới.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Ái chà! Con nói đúng. Ăn ngon hơn nhiều thật.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Đúng thật này. Ban đầu ăn món hầm đậm nhưng sau đó ăn thêm miếng rau vào cảm giác vị dịu đi hẳn. Đồng thời có vị ngọt từ ngô ngay sau đó nữa.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Con giỏi thật đấy Shu. Lần đầu nấu ăn lại làm ra món ngon như vầy.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu cũng nhan hiểm đó nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người quá khen, dù đây là lần đầu, hihi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sự thật là ở kiếp trước tôi nấu ăn suốt nên quen rồi.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Thật mừng vì đã được tồn tại để ăn món này. Mình không còn gì luyến tiếc nữa.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Này, mình nghĩ nói thế là hơi quá rồi đó. Còn nhiều món ngon hơn mà.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Vậy cậu làm được món khác còn ngon hơn nữa?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ấy, lỡ miệng rồi... Đúng là có nhiều món khác nhưng...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À... thì... nếu mình nghĩ được ra món nào đó khác. Ha ha ha...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Vậy mình sẽ là người đầu tiên thử nha?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} nhìn thẳng vào tôi, nhỏ trông có vẻ hào hứng khi đôi tai lá trúc khẽ vẩy nhẹ lên xuống. Mặc dù biểu cảm nhỏ không khớp với hành động lắm nhưng mà trông đáng yêu thật. Vả lại có bông tuyết lấp lánh xung quanh nhỏ nữa, trông thật thú vị. Tôi khẽ gật đầu.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À ừm... được thôi, nếu cậu không chê.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình mong chờ nó.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cảm giác được ai đó trông chờ thật là hạnh phúc. Nhưng tim tôi vừa lỡ một nhịp thì phải... Lạ thật...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Nhất con rồi nhá Shu.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Con trai ta giỏi thiệt, hahaha!`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Ối ối, sướng nya. ${nameCharacter[9]} thấy đúng vậy không nya?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Hả? Mình mải ăn quá, mọi người đang nói gì vậy?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Đồ ngốc Konyashi!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Trời! Đừng trêu con nữa mọi người!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thật ấm áp khi được ngồi ăn cũng những người tôi quen. Ở kiếp trước tôi cũng khó có được khung cảnh như hiện giờ.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Mình tò mò... tại sao cậu lại dùng bát và hai... cái que để ăn vậy?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Chết, tôi quên mất thói quen cũ hồi trước. Tại vui quá khi được dùng ${nameItem[2]} nên quên béng mất.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À... thực ra đây được gọi là đôi đũa, có thể dùng để gắp thức ăn. Bát và đũa là từ ${nameItem[2]} của mình nên muốn thử dùng xem sao.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đũa tôi không có thấy trong thị trấn nên đành kiếm tạm cành cây rồi dùng dao gọt. Đó là lí do tôi mới lấy được ra từ ${nameItem[2]}.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Trông nó khó cầm quá nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Thi thoảng ${nameCharacter[1]} khá là... kì lạ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Hế? Trông mình... kì lạ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người gật đầu. Tôi cũng chả biết phải phản bác lại thế nào, với nhận thức và thể xác không đồng bộ nhau khó mà tránh được cái nhìn của người khác.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Rồi rồi. Ăn đi mọi người trước khi đồ ăn nguội hết.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Thế là đêm hôm đó, mọi người đều nghĩ đến món ăn mà ${nameCharacter[1]} đã nấu. Còn ${nameCharacter[11]} lại nghĩ đến người đã làm ra món ăn đó...`
			}
		]
	},
	{
		chapter: 8,
		title: `Cột mốc quan trọng (2)`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[12]} nhìn về phía chúng tôi với vẻ mặt đầy tự hào khi nó có được chức nghiệp tốt. ${nameJob[2]} cho phép yểm kỹ năng tạm thời lên vũ khí và dùng kỹ năng từ vũ khí đó không tốn ma lực. Tất nhiên lúc yểm có tốn ma lực. Có thể thay đổi linh hoạt kỹ năng yểm vào vũ khí. Tùy thuộc vào chất lượng vũ khí có thể chịu nổi kỹ năng hay không, vũ khí sẽ vỡ vụn nếu không chịu được.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Không ngờ ${nameCharacter[12]} có chức nghiệp tốt như vậy.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Làm sao đây nya.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Thật khó chịu.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nào nào bình tĩnh nào các cậu.`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `Người tiếp theo.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ đến lượt mình rồi. Mình lên đây.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi bước lên bục, đặt tay lên quả cầu, nhắm mắt và cảm nhận... Không thấy gì cả. Ít nhất tôi cũng biết quả cầu chỉ ban cho những ai chưa có chức nghiệp. Thế nên tôi đành bịa ra vài câu nói.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Tiếng cắt thái nguyên liệu. Lửa lúc nhỏ lúc to. Mùi thơm khi chế biến.`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `Hừm... Thật lạ, quả cầu không hiện ra chức nghiệp...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người xung quanh bắt đầu bàn tán khiến tôi lo lắng. Thất thần một hồi, tôi nhớ ra đang ẩn thông tin chức nghiệp, liền mở ${statusBoard} để hủy che giấu. Hi vọng quả cầu sẽ hiện chức nghiệp của tôi, không thì mọi thứ sẽ rất rắc rối.`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `À, quả cầu hiện rồi. ${nameJob[0]} là chức nghiệp của con. Tiện thể thì tạm dừng một chút, ta kiểm tra quả cầu xem thế nào.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nhẹ cả người, may quả cầu vẫn hiện. Tôi về chỗ ngồi, quay ra đám bạn tôi để xem họ phản ứng thế nào thì...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ôi không...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu ổn chứ nya?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Đừng buồn nha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đây không phải là phản ứng tôi mong muốn.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ờm...? Mình vẫn ổn? Sao các cậu lạ thế?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cậu thật là lạc quan, ${nameCharacter[1]}.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Đúng đó nya. Nếu là mình thì mình sẽ rất buồn đó nya.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]} thật tuyệt vời.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ờm... Quá khen?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi hoàn toàn không hiểu gì hết cả...`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `Ta đã kiểm tra xong, buổi lẽ tiếp tục nào. Người tiếp theo.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tiếp theo là ${nameCharacter[11]}, nhỏ có thể dùng băng thuật nên chức nghiệp ${nameJob[6]} hay ${nameJob[7]} sẽ rất hợp đây.`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `${nameJob[4]} là chức nghiệp của con.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Không ngờ là đoán lệch hết luôn. Dù sao thì chức nghiệp này kết hợp băng thuật cũng sẽ rất thú vị cho coi.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình sẽ bảo vệ ${nameCharacter[1]}.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ờm ừm...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi vẫn không hiểu chuyện gì xảy ra...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tiếp theo đến lượt ${nameCharacter[10]}. Để xem nhỏ này có chức nghiệp gì nào.`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `${nameJob[3]} là chức nghiệp của con.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ồ, chắc vì ${nameCharacter[10]} dùng kiếm giỏi đây mà. Có kĩ thuật dùng kiếm và khả năng của nhỏ thì sẽ như thi triển kiếm vũ vậy.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Đúng như mình mong muốn rồi các cậu nya. Đừng có buồn nha ${nameCharacter[1]}, mình cũng sẽ bảo vệ cậu nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Được thôi?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thật đấy? Các cậu ấy đang nói về chuyện gì vậy?`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `Người cuối cùng.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Đó là mình rồi. Mình lên đây.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Người cuối cùng là ${nameCharacter[9]} à, không biết cậu ta sẽ nhận được gì đây. Quả cầu đột nhiên phát sáng, mọi người đều kinh ngạc trước sự việc vừa diễn ra.`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `Điều này... Thật hiếm gặp... ${nameJob[5]} là chức nghiệp của con. Đồng thời con nhận được danh hiệu ${nameTitle[3]} từ quả cầu. Không, đúng hơn thì đây là phước lành từ thần ${nameCharacter[8]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ai ai nghe xong cũng ngạc nhiên, há hốc mồm. ${nameCharacter[9]} đi xuống, vẻ mặt của cậu đơ cả ra.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu thật tuyệt vời Konyashi. Giờ cậu trở thành người nổi tiếng rồi nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Đây có phải là mơ không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cảm giác trở thành người được chọn thế nào ${nameCharacter[9]}?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]}aa... Đừng nói vậy chứ! Nghe như cậu sắp nghỉ chơi với mình vậy...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ơ khoan, không có chuyện đấy đâu. Sao cậu lại nghĩ vậy chứ?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Tại... tại vì mình có chức nghiệp tốt hơn cậu...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình tuy không hiểu lắm nhưng không có chuyện vì mấy điều này mà nghỉ chơi với các cậu đâu.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]}aa...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình sẽ không bao giờ nghỉ chơi với ${nameCharacter[1]} đâu.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À ừm, được thôi? Dù sao thì cũng kết thúc rồi, về thôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi bước ra khỏi cửa, đang định gọi cha mẹ thì họ đã ôm lấy tôi mất rồi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Con đừng buồn nha Shu. Mọi thứ không như con dự định rồi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ta đúng thật là vô dụng mà, dù đã dạy cho con mọi thứ về kiếm thuật. Cuối cùng thì cũng không thể giúp con có được chức nghiệp ${nameJob[3]} như ta. Ta xin lỗi con.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Trời ạ! Mọi người đang nói cái gì thế? Con chả hiểu cái gì hết cả! Mọi người nói rõ ra cho con với!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi bắt đầu thấy khó chịu vì không thể hiểu mọi người đang nói về vấn đề gì. Trong lúc mọi người còn đang an ủi về vấn đề gì đó mà tôi không hình dùng nổi thì ${nameCharacter[12]} đến phá.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Hahaha! Giấc mơ làm ${nameJob[8]} của ngươi tan vỡ rồi ${nameCharacter[1]}!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Này đủ rồi đấy, ${nameCharacter[1]} đang rất buồn đó.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu muốn gây sự hả nya?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Chân giò này muốn bị cuốn chỉ hả?`
			},
			{
				color: colorOther[2],
				name: [ `Quản gia` ],
				content: `Cậu chủ! Xin đừng gây thêm rắc rối nữa! Tôi thực sự xin lỗi mọi người về hành động của cậu chủ nhà tôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hầy... Tôi chỉ muốn về nhà và nằm ngay lên giường nghỉ... Cần phải giải quyết vụ này nhanh mới được.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Được rồi mọi người. ${nameCharacter[12]}, nói nghe xem tại sao giấc mơ của mình tan vỡ đi.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Ngươi bị ngu hả? Là một ${nameJob[0]} thì làm sao có thể chiến đấu được ngoài nấu ăn. Kể cả ngươi có cố gắng học chiến đấu thế nào thì vẫn chỉ làm vướng chân người khác thôi. Tỉ lệ những người có chức nghiệp không tăng được khả năng chiến đấu đều chết sớm cả. Mau mau từ bỏ giấc mơ mà mở quán ăn và nghe tin tức vĩ đại của ta đi, hahaha!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thì ra ý mọi người là như vậy. Làm mọi người lo lắng cho tôi rồi, trừ thằng ${nameCharacter[12]} ra. Nếu vậy chỉ còn cách chứng minh thôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Được rồi, nếu mình chứng minh là có đủ khả năng thì sao?`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Ngươi? Ha, muốn chứng mình kiều gì? Đấu với ta sao? Không có cửa...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đúng đấy. Tôi thách đấu cậu một trận cận chiến.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người nghe vậy ai cũng bất ngờ hết cả, kể cả ${nameCharacter[12]}. Khuôn mặt to bè của ${nameCharacter[12]} dường như hơi giãn ra, trước khi tiếng cười khùng khục.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Hahaha! Được thôi, ta chấp nhận.`
			},
			{
				color: colorOther[2],
				name: [ `Quản gia` ],
				content: `Khoan đã cậu chủ...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Khoan khoan khoan! Con đừng có liều như vậy.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]} bình tĩnh lại đi. Nói gì đó đi ${nameCharacter[11]}.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình tin ${nameCharacter[1]} sẽ làm được.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi và mọi người khá bất ngờ khi ${nameCharacter[11]} nói vậy. Lâu rồi mới được người khác tin tưởng vào tôi như vậy.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Tại sao cậu tin vào ${nameCharacter[1]} vậy nya?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Vì ${nameCharacter[1]} đáng tin tưởng. Vậy thôi.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu nói phải nya. Cố lên nha Shuunya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Các cậu... Hầy, đã nói thế rồi thì chúc may mắn nha, ${nameCharacter[1]}.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Trời ạ! Con đúng là không thể lường trước được. Nếu vậy ta sẽ làm trọng tài cho trận đấu.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[12]}, nghe ổn không?`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Được thôi.`
			},
			{
				color: colorOther[2],
				name: [ `Quản gia` ],
				content: `Cậu chủ...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người sau đó đã di chuyển ra trước sân cô nhi viện. Những người đã nghe về cuộc cãi cọ của chúng tôi cũng đến xem trận đấu. Đứng trước mặt tôi là ${nameCharacter[12]} đang khua khua thanh kiếm trên tay, với vẻ mặt dương dương tự đắc.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Nhìn cho kĩ thanh kiếm của ta đây, ngươi sẽ phải cúi đầu trước chiến thắng của ta. Còn ngươi dùng gì?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi mỉm cười vào giây phút này. Cuối cùng, tôi đã chờ suốt mười năm để có thể đường đường chính chính rút con dao bếp trong ${nameItem[2]} từ chức nghiệp ${nameJob[0]} ra mà không cần phải giấu.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Của mình là... “thanh kiếm” này đây.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người đến xem đều bật cười trước thứ tôi đang cầm. Cha mẹ tôi ngạc nhiên và đám bạn thì không biết nói gì.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Hahaha! Ngươi đùa ta chắc? Con dao ngắn này thì sao đọ kiếm được?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Nè, con cần ta chạy về lấy kiếm không? Mà con lấy con dao đó từ đâu vậy?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha không cần lo đâu. “Thanh kiếm” này, là từ chức nghiệp của con.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ánh nhìn của người cha ái ngại nhưng cũng chỉ có thể thở dài. Mẹ và bộ đôi thì trông có vẻ hơi lo, còn lại là ${nameCharacter[11]}... Tôi không hiểu được nhỏ đang nghĩ gì, ánh mắt đó chẳng hề thay đổi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Vậy thì ta sẽ phổ biến trận đấu. Đây là trận đấu cận chiến một đấu một. Có thể sử dụng kỹ năng nhưng không được là loại tầm xa và gây ảnh hưởng đến tính mạng. Ai vi phạm sẽ xử thua. Ta sẽ dùng kỹ năng${nameSkill[8]}lên hai đứa, ai mất giáp ma lực bao bọc cơ thể trước sẽ thua. Mọi người đã rõ chưa?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}`, `${nameCharacter[12]}` ],
				content: `Đã rõ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Vậy... trận đấu bắt đầu!`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Trận đấu sẽ kết thúc ngay tại đây.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[12]} ngay lấp tức dùng${nameSkill[6]}và yểm${nameSkill[9]}lên kiếm, lao lên định kết liễu tôi ngay lập tức. Nhưng...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy à?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tất nhiên tôi đã né được bằng cách... lùi lại một bước.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Sao ngươi lại tránh được? Đã thế... hãy xem đây!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[12]} bắt đầu chém tôi dồn dập. Kĩ thuật của ${nameCharacter[12]} không tệ mặc dù với cơ thể nặng nề. Nhưng tốc độ thì chậm hơn cha tôi nên tôi có thể né được dễ dàng. Mọi người bắt đầu bàn tán việc tôi có thể né dễ dàng. Còn mẹ tôi và nhóm bạn đang hô hào cổ vũ.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `NGƯƠI CÓ THỂ ĐỨNG YÊN CHO TA CHÉM ĐƯỢC KHÔNG? ĐỪNG CÓ NÉ NỮA!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Rất sẵn lòng.${nameSkill[10]}`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Khi sử dụng kỹ năng${nameSkill[10]}phải canh đúng thời điểm để hủy thì mới có hiệu quả. Nếu thành công thì địch sẽ bị choáng trong khoảng thời gian ngắn. Tôi đã có được kỹ năng này khi đấu với cha nhưng đây là lần đầu tiên sử dụng. Và may thay, tôi thành công và ${nameCharacter[12]} đã bị choáng. Ngay lập tức tôi liền đưa dao chém vào cổ của ${nameCharacter[12]} và kết liễu cậu. Tất nhiên chỉ mất phần giáp ma lực thôi, ${nameCharacter[12]} vẫn ổn ngoại trừ cậu đang rất là cay cú. Giáp ma lực của tôi cũng hết tác dụng ngay sau đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Trận đấu kết thúc. Phần thắng thuộc về ${nameCharacter[1]}!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đám đông reo hò vì tôi đã làm điều khó tin nhất mà họ từng thấy. Dao đấu với kiếm, ai mà ngờ được chứ.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Mình... thua... nó... Thua... ${nameJob[0]}... KHÔNG THỂ THA THỨ!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[12]} cầm cây kiếm lên, dùng${nameSkill[6]}để nhanh chóng lao tới đâm sau lưng tôi. Chuyện xảy ra quá nhanh, mọi người thấy nhưng không ai kịp phản ứng để cảnh báo tôi. Và rồi trong chớp nhoáng... tôi đã... né được bằng cách nhảy ngược lên không trung. Thực ra, trước khi ${nameCharacter[12]} đâm tôi thì đã có một cơn gió thổi qua chứa đầy sát khí, nên là tôi đoán ${nameCharacter[12]} chuẩn bị đâm phía sau. Tôi vờ như không biết gì và dùng${nameSkill[6]}học được từ cha, nhảy bật ngược đồng thời dùng${nameSkill[4]}cắt lưỡi kiếm của ${nameCharacter[12]} ra làm nhiều mảnh, đáp đất an toàn.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Món ăn đã xong. Chúc mọi người ăn ngon miệng.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi cảm giác như vừa nói một câu rất ngầu nhưng mà không ai phản ứng gì. Cảm giác ngại thật đấy. Mà, chắc do pha vừa nãy còn đang làm mọi người sốc nên không ai thèm nghe tôi luôn...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[12]}, cậu thua rồi. Chấp nhận đi. Ông quản gia, phiền ông đưa ${nameCharacter[12]} về.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Ta...`
			},
			{
				color: colorOther[2],
				name: [ `Mọi người` ],
				content: `Phải đó, chấp nhận thua đi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[12]} vừa tức giận, vừa xấu hổ. Hắn nắm chặt bàn tay lại, nghiến răng trong cay cú.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `${nameCharacter[1]}... NGƯƠI SẼ PHẢI HỐI HẬN! TẤT CẢ CÁC NGƯƠI!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế rồi ${nameCharacter[12]} chạy đi với bộ dạng không thể tơi tả hơn, theo sau là ông quản gia. Các bạn của tôi tiến tới khen nọ kia, còn mọi người vỗ tay hô hào. Tôi ngước nhìn lên bầu trời, dơ tay phải lên và nắm chặt lại.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vượt qua rồi... cột mốc đầu tiên!`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Chú diều hâu đậu trên cành cây, nhìn xuống đám đông đang bao quanh ${nameCharacter[1]}. Chú thấy cậu đang nắm chặt lấy con đường phía trước của mình...`
			}
		]
	},
	{
		chapter: 7,
		title: `Cột mốc quan trọng (1)`,
		dialogue: [
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Shu! Mau ra ăn sáng đi con. Hôm nay là ngày trọng đại đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hiện tại tôi đang mười tuổi và hôm nay là ngày ban phát chức nghiệp tại nhà thờ. Đồng thời cũng là cột mốc quan trọng của mọi đứa trẻ ở thị trấn. Tôi bước vào phòng ăn thì thấy cha đang ngồi đó. Đáng lẽ ra giờ này cha phải đi làm rồi mới phải.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ơ cha! Sao nay cha chưa đi làm à?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ta đã xin phép nghỉ sáng nay để có thể đi đến nhà thờ cùng con đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đừng nói với con cả mẹ cũng đi cùng nha.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Tất nhiên là có rồi. Hôm nay là ngày quan trọng của con mà. Chẳng lẽ... con không thích cha mẹ đi cùng sao?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cũng không hẳn... Con thấy hơi ngại...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tất nhiên là ngại rồi! Nếu trong tôi là mười tuổi thật thì không phải nói, rất vui là đằng khác.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ngại gì chứ. Đứa trẻ nào cũng có cha mẹ đi cùng mà. Ta thấy có mỗi con lạ thôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Phải đó, việc chứng kiến sự kiện cuộc đời của con cái cha mẹ nào cũng quan tâm hết. Nếu con không muốn thì cha mẹ có thể đợi...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À không! Hãy đi cùng con. Lâu rồi cả nhà mới được đi chung với nhau như vậy mà.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thật tình thì tôi vừa ngại vừa vui, cảm xúc đang lẫn lộn hết cả.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau bữa sáng, cả nhà đã cùng đến nhà thờ gần cô nhi viện. Khi tới nơi, tôi đã thấy hội bạn của mình đang đợi ở trước cửa.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}`, `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]}, chào buổi sáng (nya)!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi nghe vậy liền chạy nhanh đến chỗ đám bạn.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chào mọi người. Làm mọi người đứng đợi mình rồi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Đứng một lúc có sao đâu. A, cháu chào hai bác.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cháu chào hai bác nya.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Con chào hai bác.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha mẹ tôi theo sau đến nơi, vui vẻ tươi cười đáp lại.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Chào các cháu nha.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ừm. Chào các cháu. Các cháu có háo hức khi sắp nhận chức nghiệp không?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Tất nhiên là cháu háo hức rồi. Nhưng đồng thời cũng hơi lo lắng...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Phải đó nya. Cháu hi vọng nhận được chức nghiệp gì có lợi để làm ${nameJob[8]}.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình cũng vậy. Mình muốn đi phiêu lưu cùng ${nameCharacter[1]} và các cậu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} sau khi chơi cùng với mấy bọn tôi thì cũng nghe kể về dự định sắp tới. Nhỏ nghe chúng tôi làm ${nameJob[8]} nên cũng muốn tham gia cùng. Và thế là cả đám quyết định sẽ cùng nhau làm ${nameJob[8]} bằng bất cứ giá nào.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ta rất mong đợi từ các cháu đó nha. Haha.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Con có những người bạn tuyệt vời thật đó Shu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Những người bạn tuyệt vời à... Tôi cũng không rõ lắm nhưng có những người bạn như vậy thật tốt.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng! Tất nhiên rồi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Chúng tôi đang trò chuyện thì bóng dáng của của một cậu bé to béo tiến đến chỗ chúng tôi.`
			},
			{
				color: colorOther[1],
				name: [ `Cậu bé` ],
				content: `Vậy ra các ngươi muốn làm ${nameJob[8]} hả? Nếu vậy ta đây sẽ làm một ${nameJob[8]} vĩ đại cho coi. Hahaha!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[12]} hả? Không ngờ cậu cũng muốn làm ${nameJob[8]} đấy. Tưởng cậu chỉ có ăn rồi chơi và nằm thôi chứ?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `${nameJob[8]} vĩ đại cơ đấy nya. Đừng làm mình cười chứ nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đứa trẻ to lớn vừa ngắt lời chúng tôi bằng điệu cười kỳ quái đó là ${nameCharacter[12]} ${nameCharacter[13]}, một nhóc quý tộc sống cách đây không xa. Hình dáng to bè của nó, nếu đột ngột xuất hiện, có lẽ sẽ làm người khác giật mình cùng cái áo măng tô đen nó hay cũng trưng diện ra lúc nào cũng trong trạng thái sắp đứt khuy đến nơi vậy, còn chiếc quần âu nhìn cũng chẳng khá hơn. Mái tóc vàng vốn xoăn tự nhiên của nó được chải phẳng và cắt ngang đến gần mang tai, nhìn chẳng khác gì úp cái bát vàng lên đầu. Ấy thế mà nó lúc nào cũng tư hào với kiểu tóc “hợp mốt” của mình. Điểm gỡ gạc thể diện duy nhất của nó là đôi mắt màu lục sáng đặc trưng của nhà ${nameCharacter[13]}...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Kể cả vậy, vẻ mặt nó lúc nào cũng vênh váo, và ánh mắt của nó lúc nào cũng nhìn người khác với vẻ coi thường thấy rõ. Cho rằng mình đứng trên tất cả, ${nameCharacter[12]} thường xuyên gây hấn với mấy đứa trẻ ở cô nhi viện. Nhiều khi nhóm tôi phải nhảy vào can thiệp trước khi xảy ra ẩu đả, dù thực sự mà nói, dính với quý tộc như nó chỉ mang lại rắc rối cho chúng tôi thôi.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Sao các ngươi dám! Ta là ${nameCharacter[12]} ${nameCharacter[13]} đấy! Đừng có nói kiểu đấy với ta!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vẻ mặt vênh váo của nó thật khiến bọn tôi muốn đấm một trận. Nhưng vẫn phải hãm lại, nó là quý tộc nên nếu xảy ra chuyện gì thì chúng tôi lãnh tất. Ánh mắt xanh của nó ngay lập tức nhìn tới ${nameCharacter[11]}...`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `À, cô bé tóc bạch kim xinh xắn đang núp sau thằng ${nameCharacter[1]} ẻo lả kia! Cô xinh đẹp thế này nên bỏ đám thường dân mà theo ta đi. Cô có thể sống sung sướng cùng với ta ở căn biệt thự mà không cần lo nghĩ. Cô chỉ có thể sánh bước với một mình ta mà thôi. Lời ta nói không thể nào sai được!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha mẹ tôi đứng bên cạnh thì thầm.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Nè em, anh có thể đập thằng nhóc này không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Bình tĩnh nào anh, thắng nhóc chỉ là trẻ con thôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha mẹ tôi trông có vẻ bình tĩnh nhưng thực chất đang đằng đằng sát khí nhìn ${nameCharacter[12]}. Làm gì có chuyện cha mẹ nào lại không bực khi nghe con mình bị nói vậy. Rồi tôi cảm nhận được một nguồn sát khí lạnh buốt từ đằng sau...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Nè chân giò! Cậu dám nói ${nameCharacter[1]} của mình là thằng ẻo lả hả? Chân giò cuốn chỉ này!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} trừng mắt nhìn ${nameCharacter[12]} khiến cậu ta cũng phải run rẩy. Để mà nói thì bị ánh nhìn lạnh lùng của ${nameCharacter[11]} tia phải cũng đủ khiến đối phương hồn phiêu phách lạc, chẳng cần dùng đến kỹ năng.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `${nameCharacter[11]} trông đáng sợ quá à nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nè ${nameCharacter[11]} bình tĩnh lại nào.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} này, cảm ơn cậu đã giận hộ mình nha. Cậu... có thể bình tĩnh lại được không?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Ừm...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} khẽ gật đầu, không hiểu sao nhỏ chỉ nghe mỗi mình tôi. Bất chợt, một người đàn ông ăn mặc lịch sự trông như quản gia xuất hiện.`
			},
			{
				color: colorOther[2],
				name: [ `Ông quản gia` ],
				content: `Cậu chủ ${nameCharacter[12]}, xin cậu đừng gây rắc rối nữa.`
			},
			{
				color: colorCharacter[12],
				name: [ `${nameCharacter[12]}` ],
				content: `Cô được lắm... Tí nữa ta sẽ cho các ngươi thấy ai mới là người có chức nghiệp tuyệt vời nhất ở đây. Đi thôi!`
			},
			{
				color: colorOther[2],
				name: [ `Ông quản gia` ],
				content: `Vâng thưa cậu chủ. Xin lỗi cậu chủ nhà tôi đã làm phiền mọi người.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ông quản gia cúi người chào chúng tôi và rời đi cùng ${nameCharacter[12]}. Ông ấy thật tốt, tội nghiệp khi phải theo hầu tên ${nameCharacter[12]}.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Mà ${nameCharacter[11]} này, con sống ở đây được gần hai năm rồi vậy con thấy ổn không?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mẹ tôi mặc dù hay đến cô nhi viện nhưng số lần bắt chuyện với ${nameCharacter[11]} rất ít. Chắc là do ${nameCharacter[11]} vẫn chưa quen nói chuyện với người khác.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Dạ, hiện tại con đang rất vui. Hơn nữa... con đã coi cô nhi viện là nhà của con rồi. Mọi người ai cũng tốt cả.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Vậy thì tốt cho con rồi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nghe ${nameCharacter[11]} nói vậy tôi cũng nhẹ lòng, dường như bệnh trầm cảm của nhỏ không còn nữa. Cách nói của ${nameCharacter[11]} cũng đã bớt đi phần xa lánh nhưng tôi vẫn chưa thấy được rõ cảm xúc trên khuôn mặt của nhỏ. Vẫn lạnh lùng như thường nhưng không theo hướng tiêu cực...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Tiện thể thì tại sao con đứng sát Shu vậy, ${nameCharacter[11]}?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mà mẹ nói con mới để ý... Nè ${nameCharacter[11]}... sao cậu hay đứng sát mình vậy?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Kể từ lúc tôi tìm được kẹp tóc cho ${nameCharacter[11]} và kết bạn với nhỏ thì cậu ấy thường hay bám lấy tôi. Chắc là vì tôi giống nhỏ đều người dùng kỹ năng sớm chăng?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình cũng không biết nữa. Chỉ là... khi đứng gần ${nameCharacter[1]}... mình cảm thấy thoải mải nhất.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ờm... Mình không hiểu lắm...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Ái chà chà, ${nameCharacter[11]} đáng yêu quá à. Cho ta ôm con với.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} chưa kịp đáp lại thì mẹ đã ôm lấy nhỏ, khiến cả bốn đứa tụi tôi đều giật mình khi mẹ làm vậy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mẹ này! Đừng có ôm người ta như vậy chứ! Xin lỗi nha ${nameCharacter[11]}, mẹ mình thường không như này.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Không có sao đâu. Cảm giác giống như mẹ đang ôm mình vậy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Vậy con có thể gọi bác là mẹ.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mẹ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `${nameCharacter[11]} cưng quá à!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hể? Chuyện gì vừa xảy ra thế nhỉ? Tôi không biết phải phản ứng thế nào nữa... Mẹ thích có con gái hơn hay sao?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thôi nào mẹ, chúng con phải vào nhà thờ rồi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `À ừm, các con đi đi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Chúc may mắn nha mấy nhóc.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Chúng tôi bước vào nhà thờ vẻ đơn sơ mộc mạc. Tường được làm bằng đá, cửa số làm từ gỗ với kính màu có thể đóng mở, các thanh xà ở phía trên cũng được làm từ gỗ, mái được lợp ngói. Vì là thị trấn nên nhà thờ không có hoành tráng như ở những nơi như thành phố. Vừa bước vào có thể thấy ngay một bức tượng đá tạc vị thần ${nameCharacter[8]} được đặt lên bệ đá trên bục giảng. Và mục sư ${nameCharacter[14]} đang đứng trên đấy cùng với quả cầu gì đó đợi đến đúng thời điểm. Còn phía dưới có hai hàng ghế dài, mỗi hàng có năm cái ghế và mỗi ghế được bốn người ngồi. Như vậy sức chứa của nhà thờ là khoảng hơn bốn mươi người. Đối với hôm nay thì các hàng ghế sẽ được nhường cho các đứa trẻ, còn người lớn sẽ đứng đợi ở bên ngoài xem qua cửa sổ và cửa chính. Lúc này sơ ${nameCharacter[5]} đang hướng dẫn đám trẻ ngồi vào chỗ.`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `Mọi người từ ngoài vào trong xin hãy yên lặng. Đã đến giờ bắt đầu nghi thức.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Lời nói của mục sư thật có trọng lượng. Ai ai cũng nghe theo cả.`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `Trước khi bắt đầu ta sẽ phổ biến lại quy luật nhận chức nghiệp. Chức nghiệp có thể được thừa hưởng từ cha hoặc mẹ hoặc thông qua làm việc gì đó nhiều lần. Và một vài trường hợp hiếm sẽ nhận ngẫu nhiên chức nghiệp. Vậy giờ ta sẽ bắt đầu buổi lễ ban chức nghiệp. Bắt đầu từ hàng ghế đầu tiên. Mời con.`
			},
			{
				color: colorOther[2],
				name: [ `Đứa trẻ đầu tiên` ],
				content: `Vâng!`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `Con hãy đặt tay lên ${nameItem[1]}, nhắm mắt lại, cảm nhận từ quả cầu, nói ra những gì con thấy và nó sẽ xuất hiện trên quả cầu.`
			},
			{
				color: colorOther[2],
				name: [ `Đứa trẻ đầu tiên` ],
				content: `Tiếng kim loại va đập. Ngọn lửa cháy bừng bừng. Mùi hương kim loại cháy.`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `${nameJob[1]} là chức nghiệp của con. Hãy nghĩ ${statusBoard} trong đầu, thông tin về con sẽ xuất hiện. Giờ con có thể ra về rồi.`
			},
			{
				color: colorOther[2],
				name: [ `Đứa trẻ đầu tiên` ],
				content: `Con cảm ơn mục sư.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thì ra đây là cách nhận chức nghiệp. Mà tôi đã có chức nghiệp ${nameJob[0]} từ lúc đến thế giới này rồi, thậm chí là có thể sử dụng luôn ý chứ. Chắc không được nhận thêm chức nghiệp nào nữa đâu nhỉ?`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `Người tiếp theo.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ như người tiếp theo là ${nameCharacter[12]}, để xem tên này có chức nghiệp gì nào.`
			},
			{
				color: colorCharacter[14],
				name: [ `${nameCharacter[14]}` ],
				content: `${nameJob[2]} là chức nghiệp của con.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Trong gian phòng đó, chú diều hâu đậu ở trên thanh xà gỗ, nhìn xuống dưới nhóm ${nameCharacter[1]} đang lo lắng không biết chuyện gì sẽ xảy ra tiếp theo...`
			}
		]
	},
	{
		chapter: 6,
		title: `Cô bé “lạnh” lùng (2)`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bữa tối hôm đó, tôi đang ngồi ăn cùng cả nhà, tiện thể hỏi cha về ${nameCharacter[11]} xem có thêm chút thông tin gì không.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha ơi, cha có biết gì về ${nameCharacter[11]} không ạ? Chắc là cha cũng có chút thông tin về bạn ý nhỉ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Tất nhiên là ta có thông tin về ${nameCharacter[11]} rồi, dù sao ta với binh lính cũng đến nơi xảy ra sự việc mà.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy... cha có thể nói cho con biết được không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Hừm... Ta không thể nói.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thông tin nội bộ à, dù sao đây cũng là trách nhiệm của người lính nên cũng không trách cha được. Mà tôi cũng nghe kha khá từ bộ đôi rồi nên được đến đâu thì đến vậy...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À... nếu không được thì cha không cần phải nói đâu ạ. Chỉ là sáng nay con có thử trò chuyện với ${nameCharacter[11]} nhưng bạn ý né tránh con và mọi người. Nên là con khá lo cho bạn không biết có ổn không.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mẹ dơ tay trái che đi nụ cười sau khi nghe suy nghĩ vừa nãy của tôi và nói đùa.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Ái chà, con mẹ biết lo lắng cho cả cô bé mà chưa hề quen biết đó sao?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `T-thì nhìn bạn trông có vẻ khá tội. ${nameCharacter[11]} chắc có lí do riêng để hành xử như vậy, nên là con muốn tìm hiểu xem thế nào và giúp bạn. Nhưng với cái tính lạnh lùng của ${nameCharacter[11]} thì con cũng đang bó tay đây.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Con thực sự quan tâm tới cô bé ${nameCharacter[11]} nhỉ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tuy mẹ đã che miệng đi nhưng tôi vẫn có thể nghe được tiếng cười tủm tỉm dù nó nhỏ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Theo suy đoán của tôi thì có vẻ ${nameCharacter[11]} đang bị chấn thương tâm lí và cái tên để chỉ vấn đề này là trầm cảm. Có thể khái niệm “trầm cảm” chưa xuất hiện tại nơi đây nên không ai có đủ sự quan tâm dành cho ${nameCharacter[11]}. Các triệu chứng có thể thấy rõ như là tránh giao tiếp với người khác, tự thu mình lại. Nhưng nguy hiểm nhất là càng về lâu về dài, ${nameCharacter[11]} sẽ có những suy nghĩ lệch lạc để rồi không còn cảm thấy gì nữa và rất có thể... cô không còn muốn sống nữa.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ta thấy con quan tâm nhiều như vậy chắc có lẽ kể một chút cũng chẳng sao.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ơ, cha chắc chưa đó? Con tưởng đấy là thông tin nội bộ nên cha không nói được ra mà.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Có sao đâu chứ, miễn là cả nhà không kể lung tung cho người khác biết là được. Haha!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi xin rút lại những lời đã nói về cha tôi một lúc trước. Đúng là cha tôi mà...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha đã kể lại những gì có được nhưng cũng không có thêm thông tin gì mới. Tôi đã nghe từ ${nameCharacter[9]} rồi, tính ra binh lính cũng không cẩn thận khi hỏi ${nameCharacter[11]} ở cô nhi viện. Nhưng cha cũng cho tôi thêm một thông tin mới.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Không hiểu sao những lời bàn tán về ${nameCharacter[11]} bắt đầu diễn ra. Chắc binh lính của ta đã bất cẩn hoặc ai đó trong nội bộ đã tiết lộ ra.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hẳn là vậy rồi...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Nói mới nhớ, mẹ cũng nghe loáng thoáng mọi người đang nói về một cô bé tám tuổi đã bộc phát kỹ năng. Và tự hạ một đàn ma thú ${nameMob[0]} đang trong trạng thái không ổn định chỉ với một đón. Điều này sẽ khiến ${nameCharacter[11]} gặp chút rắc rối đây.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đối với đứa trẻ quý tộc trước mười tuổi có thể dùng kỹ năng thì mọi người sẽ coi đó là sự tài giỏi, thiên tài. Còn đối với trẻ thường dân trước mười tuổi có thể dùng kỹ năng thì chỉ có số ít xuất sắc được biết đến bởi nhiều người thì mới coi như có tài, còn lại sẽ bị coi như là mối nguy hại. Đó là lí do tôi không sử dụng kỹ năng và giấu nó đi. Và tôi thật không thể tài nào hiểu nổi lý lẽ của mọi người ở đây. Chắc có lẽ đã từng xảy ra vụ việc gì đó mới khiến mọi người có định kiến này. Mải trôi theo dòng suy nghĩ, tôi lỡ tự nhủ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mọi người nghĩ như thế nào về ${nameCharacter[11]}...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Suy nghĩ hồi lâu, ngước lên thì thấy cha mẹ đang nhìn tôi chằm chằm. Tôi bối rối tự hỏi đã làm gì, để rồi nhận ra suy nghĩ của mình đã thành lời.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `A! Con chỉ đang suy nghĩ... Ý con là...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ta nghĩ cô bé giỏi đấy chứ. Sau này chắc sẽ làm ${nameJob[6]} đây.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Đối với mẹ thì cô bé khá đáng thương khi vừa mất đi người thân. Còn con nghĩ sao?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Con...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi thầm nghĩ, dù định kiến có tồn tại thì mỗi người đều có một ý riêng trong lòng. Thật tốt khi nghe được cha mẹ nói ra suy nghĩ của mình.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Con cũng nghĩ giống với hai người thôi ạ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Và sau đấy tôi đã bị cha mẹ trêu chọc suốt bữa tối...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sáng hôm sau, trên đường đến cô nhi viện, tôi đã nghe nhiều lời bàn tán về ${nameCharacter[11]} và sự nguy hiểm của cô. Tôi đã khá tức giận nhưng đồng thời cũng bất lực vì không làm gì được. Chỉ còn nước thở dài, chân bước thật nhanh và cố lờ đi nhiều nhất có thể. Khi đến nơi, tôi thấy ${nameCharacter[11]} đang cặm cụi tìm gì đó gần cái cây ở sân trước. Tôi tiến lại gần với một nụ cười hi vọng có thể bắt chuyện.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nè ${nameCharacter[11]}, bạn đang tìm gì đó? Có cần mình giúp không?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} ngước lên, khuôn mặt vẫn không cảm xúc kể từ lần cuối tôi nói chuyện.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Chẳng phải mình đã nói đừng trò chuyện với mình sao?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình biết bạn đã nói vậy, nhưng thấy bạn đang gặp khó khăn nên mình mong có thể giúp đỡ chút ý mà.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} dừng tìm, đứng dậy và nhìn thẳng vào mặt tôi. Lúc đó, tôi đã nhận ra ${nameCharacter[11]} đã bị mất cái kẹo tóc có gắn viên pha lê màu lục nhạt trên đầu.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Vậy giúp mình việc này đi. Đừng cười gượng gạo như thế nữa được không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ý-ý bạn là gì vậy?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Bạn đang che giấu gì đó đúng không? Lúc nào cũng cười như vậy, thật khó chịu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} thực sự đã đánh trúng tim đen của tôi. Là một ${nameTitle[0]} nên cơ thể và nhận thức không giống nhau, đồng thời cũng có thể dùng kỹ năng từ sớm. Đó là lí do tôi luôn cố tươi cười để che giấu đi sự thật nhưng nó thật nhức nhối khi không thể nói với ai... Tôi cố đánh trống lảng đi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình không hiểu bạn đang nói gì cả. Bọn mình quay lại việc tìm đồ bị mất của bạn được không?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Vậy là bạn không thể giúp mình.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Thật phiền phức.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nói xong, ${nameCharacter[11]} liền đi khỏi, tôi định đuổi theo nhưng mọi thứ có lẽ sẽ tệ hơn. Giác quan của ${nameCharacter[11]} nhạy bén đến mức đáng sợ và những lời cô nói đúng hết... Dẫu vậy tôi vẫn quyết định tìm kẹp tóc cho ${nameCharacter[11]}, rất có thể đó là món đồ quan trọng của cô. Trong lúc tôi tìm xung quanh ở sân trước thì ${nameCharacter[9]} đã tới bắt chuyện.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Này ${nameCharacter[1]}, đang tìm gì à?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cái kẹp tóc của ${nameCharacter[11]}.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `À, thì ra ${nameCharacter[11]} đang tìm cái đó. Vậy bạn ý nhờ cậu à?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Không... Lại bị từ chối lần hai rồi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nghe đau thật đấy. Được rồi, để mình bảo ${nameCharacter[10]} tìm cùng và hỏi mấy đứa kia có nhặt được kẹp tóc hay không.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cậu không cần phải giúp mình đâu.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Này, đừng có hiểu lầm. Mình đang giúp ${nameCharacter[11]} chứ có giúp cậu đâu.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Phải... Vậy cảm ơn cậu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi bắt đầu từ xung quanh sân, chầm chậm vạch từng bụi cỏ tìm thật kĩ. Khoảng một tiếng trôi qua, tôi vẫn không thấy gì cả. Trời hôm nay nắng hơn mọi khi khiến tôi thấy khá mệt mỏi. Nằm xuống gần cái cây, ngước nhìn lên và thở dài. Từ trên cây, một chiếc lông vũ nửa trắng nửa lam rơi xuống. Cầm lên tay, tôi ngắm nhìn nó và tự hỏi nên tìm kẹp tóc ở đâu bây giờ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ngắm nghía chiếc lông chán, tôi hạ tay xuống thì một thứ gì đó lấp lánh trên cây đập vào mắt tầm tôi. Liệu nó có phải là kẹp tóc? Tôi cất lông vũ vào túi rồi đứng dậy, nhìn xung quanh có người không rồi dùng phong thuật${nameSkill[3]}để lấy thứ đang lấp lánh kia. Tôi biết mình đã cố gắng che giấu thân phận nhưng vì lí do gì đó đã thúc đẩy bản thân hãy quên nó đi và giúp ${nameCharacter[11]}. Thứ lấp lánh đó rơi vào tay tôi và đó đúng là cái kẹp tóc của cô ấy. Tôi thắc mắc sao nó lại ở trên đó, mà chuyện đó không còn quan trọng. Vậy là nhiệm vụ hoàn thành và giờ tôi đi tìm ${nameCharacter[11]} để trả lại.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi chạy ra sân sau, thấy ${nameCharacter[11]} vẫn đang tìm. Khi tiến lại gần, ${nameCharacter[11]} thấy vậy thì định chạy đi. Ngay lập tức tôi nói lớn hi vọng cô dừng trách né.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Khoan đã ${nameCharacter[11]}, mình tìm thấy kẹp tóc của cậu rồi này!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} đang định chạy nghe vậy liền khựng lại. Rồi đứng quay về hướng tôi nhưng mặt hơi cúi xuống, còn tay ôm chặt con thỏ bông.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Tại sao? Tại sao lại giúp mình? Bạn rốt cuộc muốn gì ở mình?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình chỉ đơn giản là muốn giúp, vậy thôi.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Tại sao? Sau những gì mình đã nói vậy mà bạn vẫn giúp?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi tiến lại gần ${nameCharacter[11]}, vừa nói vừa cài lại kép tóc lên trên đoạn tóc tết.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Bạn đã mất quá nhiều rồi, mình không muốn bạn mất thêm bất cứ thứ gì nữa.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau câu nói đó tôi chỉ lẳng lặng rời khỏi không nán lại. Đầu tôi lúc này đang hơi choáng, chắc vì nay quá nóng. Lại gần ngồi dưới cái cây trước sân, nhắm mắt lại nghỉ ngơi mà lỡ ngủ từ lúc nào không hay. Rồi xung quanh tôi tự nhiên thật dễ chịu và mát mẻ... Chợt bừng tỉnh, quay đầu sang phải thì thấy ${nameCharacter[11]} đang ngồi ôm con thỏ bông cạnh tôi. Bối rối, bất ngờ và giật mình là tôi hiện giờ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ế ${nameCharacter[11]}? S-sao bạn lại ngồi đây vậy?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Đây là nơi mình vẫn hay ngồi một mình.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À, phải ha... Vậy mình ra chỗ khác nha.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Không... Bạn có thể ngồi ở đây...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hể? ${nameCharacter[11]} vừa bảo tôi ở lại đúng không nhỉ? Cô ấy vừa mở lòng phải không? Đây có thể là dấu hiệu tốt, tôi nên nắm bắt lúc này để giúp ${nameCharacter[11]}.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình định tới để cảm ơn. Nhưng bạn lại ngủ, nên mình ngồi đợi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Bạn không cần phải cảm ơn đâu. Ngược lại mình phải cảm ơn bạn vừa nãy dùng băng thuật lên mình mới phải. Nay trời nóng quá làm mình hơi bị choáng.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình không có dùng được băng thuật... Vì vẫn chưa kiểm soát được.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy thì lạ thật... Chẳng lẽ là do rò rỉ ma lực? Hay là do kỹ năng nội tại? Trời! Nay đau đầu quá, mấy cái này tôi sẽ xử lí sau vậy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Bỏ qua chuyện đấy đi ha. Nếu có thể thì nói cho mình biết tại sao bạn lại muốn xa lánh mọi người được không?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Dường như ${nameCharacter[11]} vẫn còn lưỡng lự, gần lắm rồi... Đây có lẽ là cơ hội cuối cùng trước khi ${nameCharacter[11]} thu mình lại lần nữa. Tôi ngồi trầm ngâm nghĩ cách rồi nhớ lại câu hỏi của ${nameCharacter[11]}... Đây là cách cuối cùng, hy vọng thành công...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `“Cậu đang che giấu gì đó đúng không?”. Đây là câu cậu đã hỏi và mình không muốn nói về nó nhưng... Hãy để ý xung quanh nhé.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Yên lặng... Những lá cây... đang bay?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Bất chấp nỗ lực che giấu, tôi đã tiết lộ bí mật có thể dùng kỹ năng. Tất nhiên là tôi sẽ không nói gì về vụ chuyển sinh, chỉ là chưa đến lúc...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình cũng là người có thể sử dụng kỹ năng sớm. Hai phong thuật mình vừa mới dùng là${nameSkill[2]}ngăn âm thanh và${nameSkill[3]}di chuyển vật. Vì định kiến nên mình đã giấu đi và bạn là người đầu tiên biết bí mật này của mình.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Tại sao bạn lại kể nó cho mình?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Những gì bạn nói lúc trước khiến mình suy nghĩ nhiều. Để che giấu đi bí mật này thì mình đã đeo lên một chiếc mặt nạ. Mọi thứ đều thuận lợi nhưng đâu đó trong lòng mình cảm thấy thật khó chịu và nhức nhối. Rồi mình quyết định kể cho bạn nghe về nó, thế nên là đừng nói cho ai về bí mật này nha. À mà mình cũng không hiểu sao mình lại muốn kể cho bạn nghe nữa, ha ha...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Không. Cảm ơn đã kể mình nghe... Lí do mình cố xa lánh mọi người... là vì một phần lời bàn tán. Nhưng đồng thời mình cũng sợ khi những người mình quen dần biến mất trước mắt. Người thân duy nhất là cha mẹ mình cũng đã ra đi. Còn lại là sự trống rỗng... chất chứa nỗi cô đơn... Không sao... thế này mình sẽ không còn cảm thấy gì khi ai đó lại biến mất nữa.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Bạn thực sự thấy ổn về điều đó chứ?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi cứ ngồi đấy, đan chéo tay đặt lên người, chờ đợi ${nameCharacter[11]}. Ngước nhìn lên bầu trời, tôi tự nhủ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình sẽ ngồi nghỉ ở đây thêm một lúc nữa. Dù sao thì ngồi gần bạn cũng mát hơn là ra chỗ khác... Và mình sẽ lắng nghe... nếu cần.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} ôm chắc con thỏ, từ từ nhích lại gần. Rồi cô ngả đầu vào vai tôi, vừa khóc vừa nói những điều đã kìm nén mãi trong lòng.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Nó không hề ổn... Mình không muốn... Đau đớn lắm...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Phong thuật${nameSkill[2]}vẫn đang được kích hoạt, vậy nên sẽ chỉ có tôi nghe được nỗi lòng của ${nameCharacter[11]}. Trong quãng lặng này, tôi tự hỏi nên nói gì để có thể an ủi cô. Chỉ ngồi im và âm thầm lắng nghe... chắc đó là những gì ${nameCharacter[11]} cần. Sau một hồi giãi bày thì ${nameCharacter[11]} ngồi thẳng người, vùi mặt vào con thỏ bông như để thấm những giọt nước mắt. Rồi cô quay lại vẻ mặt lạnh lùng như thường thấy... tuy đôi tai có chút hơi ửng hồng.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Thật ngại quá... Mình thấy ổn hơn nhiều rồi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Từ giờ bạn sẽ không cần phải cảm thấy cô đơn khi ở đây nữa. Thậm chí hai đứa bạn thân của mình cũng rất muốn được chơi cùng bạn đó.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình không biết nữa. Lần trước mình đã lờ họ nên chắc đã làm các bạn ấy tổn thương.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình chắc chắn họ không bận tâm gì về chuyện đó đâu.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình phải nói gì đây. Do di chuyển liên tục nên mình chưa từng nói chuyện đủ lâu với một ai để có thể gọi là bạn.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chà, nếu vậy thì...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi dừng kích hoạt kỹ năng và đứng dậy, quay về hướng của ${nameCharacter[11]}. Lúc này một cơn gió thổi qua làm mái tóc của tôi tung bay, dơ tay ra và nở nụ cười từ tận đáy lòng.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Một lần nữa. Mình tên ${nameCharacter[1]}, liệu mình có thể là người bạn đầu tiên của cậu được không?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} vẫn còn hơi lưỡng lự việc đưa tay về phía tôi, cô nói nhỏ.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Sau tất cả... liệu mình có thể?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình giống cậu mà, đều là những người che dấu cảm xúc. Nếu cậu có tâm sự gì thì mình sẽ luôn bên cạnh để lắng nghe.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cuối cùng ${nameCharacter[11]} đã nắm lấy, tôi nhẹ nhàng kéo cô đứng dậy.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Chắc cậu đã biết rồi nhưng mình sẽ nói lại lần nữa. Mình tên ${nameCharacter[11]}, rất vui khi được làm bạn với cậu, ${nameCharacter[1]}.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Tuyệt vời! Để mình gọi hai đứa bạn của mình ra, cậu chờ một chút xíu nha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Và thế là tôi đã chạy vào nhà tìm bộ đôi để nói với các cậu ấy làm bạn với ${nameCharacter[11]}.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameCharacter[1]}...`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `${nameCharacter[11]} đứng nhìn ${nameCharacter[1]} chạy đi. Trong một khoảnh khắc ngắn, ${nameCharacter[11]} đã mỉm cười...`
			}
		]
	},
	{
		chapter: 5,
		title: `Cô bé “lạnh” lùng (1)`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Ở ngoài thị trấn ${nameLocation[2]}, một cỗ xe ngựa đang di chuyển với vận tốc rất nhanh hướng về thị trấn. Theo sau đó là đàn ma thú ${nameMob[0]} năm con với đôi mắt đỏ ngầu, bộ lông trắng đã chuyển sang đen. Trong bộ lông đó tích tụ sét để ${nameMob[0]} có thể sử dụng được thông qua hai cái sừng nhô trên đầu chúng nó.`
			},
			{
				color: colorCharacter[11],
				name: [ `Người đàn ông` ],
				content: `Cố lên con, ${nameCharacter[11]}. Chúng ta sắp tới thị trấn rồi. Binh lính ở đó sẽ giúp ta.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Con sợ lắm. Sao đột nhiên đám ${nameMob[0]} lại đuổi theo chúng ta vậy?`
			},
			{
				color: colorCharacter[11],
				name: [ `Cha ${nameCharacter[11]}` ],
				content: `Ta cũng không rõ. Giờ ta đang cố né những tia sét của đám ${nameMob[0]} nên con bám chắc vào. Mặc cái áo choàng có mũ này vào. Nó có kháng một chút sét nếu con bị trúng.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[11]}Father` ],
				content: `Bình thường ${nameMob[0]} là một loài hiền lành nhưng không hiểu vì lí do gì mà đám nó lại thành như vậy. Chúng chỉ hành động như vậy khi mà bộ lông nó cực dày đến nỗi che cả mắt nhưng với đám này lượng lông vẫn ổn. `
			},
			{
				color: colorCharacter[11],
				name: [ `Cha ${nameCharacter[11]}` ],
				content: `Gần lắm rồi, chúng ta sẽ...`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Cha ${nameCharacter[11]} chưa kịp nói hết câu thì một tia sét đã trúng vào ngựa kéo xe khiến nó phát hoảng và lật đổ xe. ${nameCharacter[11]} với vết chảy máu trên đầu cố gượng bò ra ngoài khỏi cỗ xe đang bị cháy do ${nameMob[0]} vẫn đang tấn công.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Lúc này binh lính đi tuần quanh tường thành nghe thấy tiếng động lớn và thấy cột khói bốc lên liền chạy đi báo chỉ huy.`
			},
			{
				color: colorOther[3],
				name: [ `Binh lính` ],
				content: `Trung đội trưởng ${nameCharacter[4]}! Chúng tôi thấy có cột khói bốc lên và những tiếng động lớn phát ra từ đó. Có thể ai đó đã bị tấn công.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Được rồi, nửa đầu tiểu đội đi theo ta, còn nửa còn lại tiếp tục làm nhiệm vụ.`
			},
			{
				color: colorOther[3],
				name: [ `Binh lính` ],
				content: `Rõ!`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `${nameCharacter[11]} từ từ di chuyển đến bên người cha nhưng dường như ông đang hấp hối vì vết thương lớn trên bụng. Mặc kệ đám ${nameMob[0]} vẫn đang tiến đến, ${nameCharacter[11]} ngồi bên cạnh người cha mà khóc nức nở.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Xin cha đừng có rời xa con như mẹ nữa mà.`
			},
			{
				color: colorCharacter[11],
				name: [ `Cha ${nameCharacter[11]}` ],
				content: `Ta... lỗi... Không... thể... vệ... con...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Không! Không muốn đâu! Cha đừng có chết!`
			},
			{
				color: colorCharacter[11],
				name: [ `Cha ${nameCharacter[11]}` ],
				content: `Con... hãy... hạnh... Mau... chạy...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `KHÔNGGGG!!! CHAAAA!!!`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Cha ${nameCharacter[11]} đã trút hơi thở cuối cùng. ${nameCharacter[11]} gào lớn và khóc nức nở trong nỗi đau da diết, mặc kệ đám ${nameMob[0]} ngày càng gần. Cô cứ khóc và hét lớn vì người cha đã mất... Đột ngột xung quanh ${nameCharacter[11]} như tĩnh lặng, cô đứng dậy, mở lòng bàn tay hướng về đám ${nameMob[0]} và cất lên một câu với giọng điệu đầy sát khí.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `${nameSkill[7]}`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Mặt đất xung quanh bỗng đóng băng và chỗ băng đó tiến đến đám ${nameMob[0]} rất nhanh. Khi đám ${nameMob[0]} bước vào vùng bị ảnh hưởng, chúng nó liền bị đóng thành những cột trụ băng. Sau một lúc thì binh lính mới tới nơi xảy ra. ${nameCharacter[11]} quay đầu nhẹ nhìn về hướng binh lính, cơn gió lạnh từ băng đã thổi bay mũ áo choàng để hiện ra khuôn mặt không cảm xúc của cô. Đôi mắt màu lam như băng sáng rực của ${nameCharacter[11]} vẫn đẫm lệ, còn máu từ vết thương trên đầu cô đã khô lại. Trước khi chỉ huy ${nameCharacter[4]} hay binh lính định làm gì thì ${nameCharacter[11]} đã ngã xuống, đôi mắt mất đi ánh sáng và ngất đi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Con đi đến cô nhi viện đây ạ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Được thôi, nhớ về trước bữa tối nhé Shu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hiện tại tôi đang tám tuổi. Tuần vừa rồi tôi đã bị ốm một trận nặng nằm liệt giường nên không biết đã bỏ lỡ những gì. Hoặc có khi tôi gặp may khi không dính phải rắc rối của bộ đôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi đã đến cô nhi viện, trước sân lũ trẻ đang nô đùa chơi với nhau. Liếc qua liếc lại không thấy bộ đôi đâu nên tôi định vào nhà tìm thử. Đột nhiên chú diều hâu vụt qua làm tôi giật mình, theo phản xạ nhìn chú bay đi về hướng cây trước sân.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Trước mắt tôi lúc này, là một cô bé bí ẩn ngồi tựa mình vào gốc cây. Đôi tay nhỏ bé nhẹ ôm lấy chú thỏ bông trắng trong tay, cô bé hướng ánh mắt lam nhạt băng giá của mình lên bầu trời phía xa, như thể đang tìm kiếm câu trả lời cho một câu hỏi cô không thể giải đáp, mái tóc chấm vai trắng như tuyết mùa đông nhẹ nhàng lay động trong cơn gió mùa hạ thổi qua. Khuôn mặt cô bé không hề biểu lộ gì ngoài chút cảm xúc khó có thể diễn tả, đôi tai thuôn dài như lá trúc cũng không hề động đậy. Nhìn đôi tai nhỏ xinh đó, tôi đoán chắc trước mắt mình lúc này là một cô bé Elf. Viên pha lê màu lục hình thoi gắn trên kẹp tóc của cô bé dường như phát sáng nhè nhẹ dưới ánh nắng hè, khi làn gió mát thổi qua đoạn tóc tết gọn gàng ngay dưới chiếc kẹp đó bên vai cô...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi tự hỏi tại sao cô bé lại ngồi một mình ở đó mà không chơi với mấy đứa trẻ... hay là cô bị bắt nạt? Tôi vừa nghĩ vừa tiến tới chỗ cô để bắt chuyện.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chào bạn, tại sao...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi chưa kịp nói hết câu thì cô bé quay ra nhìn liếc tôi với vẻ lạnh lùng và cắt ngang lời tôi nói.`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Đừng bắt chuyện với mình.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ơ khoan, bình...`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Mình nói rồi đừng nói chuyện với mình.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nhưng... tại sao vậy?`
			},
			{
				color: colorCharacter[11],
				name: [ `${nameCharacter[11]}` ],
				content: `Phiền thật.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cô bé vừa dứt câu thì đứng dậy đi chỗ khác. Tôi đã khá sốc, còn cơ thể thì bất động không hiểu mình vừa làm gì sai, thật là một cô bé lạnh lùng. Một lúc sau ${nameCharacter[9]} và ${nameCharacter[10]} bước ra từ nhà.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ủa ${nameCharacter[1]}? Sao lại đứng ngây người ở đây thế.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Nhìn mặt ${nameCharacter[1]} trắng bệch ra luôn nè nya. Cảm giác như vừa bị ai từ chối vậy đó nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đúng vậy...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}` ],
				content: `Ế (nya)?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau khi tôi lấy lại được sự bình tĩnh thì đã kể lại chuyện vừa nãy. Bộ đôi cũng cho tôi một số thông tin về cô, tên là ${nameCharacter[11]}, đã đến cô nhi viện được khoảng vài ngày từ sau vụ tai nạn với đám ma thú ${nameMob[0]}. Vào ngày hôm sau khi ${nameCharacter[11]} ở đây, binh lính đã tới hỏi cô một số câu hỏi và đã biết thêm một số thông tin khác.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hiện tại ${nameCharacter[11]} đang tám tuổi, bằng tuổi của tôi và bộ đôi. Mẹ ${nameCharacter[11]} là Elf đã mất sau khi sinh ra ${nameCharacter[11]} theo lời người cha, còn cha ${nameCharacter[11]} là con người nên ${nameCharacter[11]} là nửa người nửa Elf. Cha ${nameCharacter[11]} là một thương nhân đang trên đường đến ${nameLocation[2]} để xem có thể định cư và mở cửa hàng nơi đây không. Còn đám ma thú ${nameMob[0]} không hiểu lí do gì đã đuổi theo và điều đó dẫn đến cái chết của cha ${nameCharacter[11]}. Rồi sự việc xảy ra sau đó cô cũng chỉ nhớ mang máng là mình đã bất giác dùng băng thuật. Đây lần đầu tiên nên cô đã không thể kiểm soát được nó, ${nameCharacter[11]} cũng thử dùng lại nhưng không được. Mẹ ${nameCharacter[11]} có khả năng dùng băng thuật theo lời người cha, nên chắc cô kế thừa khả năng này. Về phần ${nameMob[0]} thì bên binh lính đang điều tra chỗ xác bị đóng băng do cô.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nhưng điều phải chú ý đến nhất là biểu cảm không cảm xúc trên khuôn mặt của ${nameCharacter[11]}. Cái cảm giác lạnh lùng mỗi lần cố giao tiếp với cô. Tôi nghĩ ${nameCharacter[11]} đang bị sang chấn tâm lý sau những gì vừa xảy ra. Nhưng tôi vẫn không hiểu phần ${nameCharacter[11]} tỏ vẻ xua đuổi mọi người.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Mình cũng đã thử trò chuyện với ${nameCharacter[11]} nhưng không thể.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Mình cũng vậy nya. Lúc cậu ấy nhìn mình trông đáng sợ lắm nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Hừm... Chắc ${nameCharacter[11]} cần thêm chút thời gian để mở lòng với mọi người. Cũng giống với các cậu đã từng như vậy thôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[11]} đang đứng núp ở góc nhà bên ngoài nhìn về phía nhóm chúng tôi đang trò chuyện. Tôi thấy vậy định dơ tay vẫy thì ${nameCharacter[11]} liền quay đi nên tôi cũng đành chấp nhận tình hình hiện tại.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Còn ${nameCharacter[11]} vừa đi vừa ôm con thỏ bông vừa suy nghĩ gì đó trầm tư nên đã bị vấp ngã. Cái kẹp tóc có gắn viên pha lê màu lục nhạt của ${nameCharacter[11]} bị rơi và cô đã không để ý nó. ${nameCharacter[11]} đứng dậy, phủi quần áo và con thỏ rồi lại đi tiếp trong khi suy nghĩ gì đó.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Chú diều hâu từ trên trời thấy một vật gì đó lóe sáng lên từ phía dưới. Chú lao xuống đó, nhìn chằm chằm vào cái kẹo tóc rồi cắp nó mang đi...`
			}
		]
	},
	{
		chapter: 4.5,
		title: `Muộn`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Lúc này trời đã sáng, ${nameCharacter[9]} vẫn còn đang ngủ và có một giấc mơ êm ái.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Êm quá... Đám mây này tôi sẽ không thả tay ra đâu. Muốn ôm mãi cơ...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Nya...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Ra là đám mây này biết nya... Ủa khoan đã sao lại kêu nya? Mà đám mây này khiến mũi tôi hơi khó chịu...`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Thế là ${nameCharacter[9]} đã hắt hơi và khiến cậu tỉnh dây. Đầu óc mơ màng, mắt nhắm mắt mở, nhìn xung quanh thì thấy ${nameCharacter[10]} đang nằm cạnh cậu. ${nameCharacter[9]} vẫn chưa tỉnh ngủ hẳn nên đã kéo chăn đắp cho nhỏ và nằm tiếp. Mất một lúc sau cậu mới nhận ra là ${nameCharacter[10]} đang nằm cạnh mình nên cậu đã hoảng và ngã khỏi giường.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ai dà... đau quá... ${nameCharacter[10]}! Dậy mau!`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Nya? Chào buổi sáng Konyashi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nói mình nghe sao cậu lại nằm ngủ cùng mình vậy?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `À thì... mình định gọi cậu dậy nhưng nhìn cậu ngủ ngon quá nên lỡ nằm ngủ cùng luôn nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Thật tình. Xuống dưới ăn sáng trước đi, mình gấp chăn xong rồi xuống.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Không không nya. Cậu xuống đi, mình gấp hộ cho nya. Do mình khiến cậu ngủ lâu hơn mà nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cũng không hẳn... Mà thôi, cảm ơn nha vậy mình đi rửa mặt.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Sau khi ${nameCharacter[10]} gấp gọn chăn xong thì xuống ăn sáng cùng ${nameCharacter[9]}. Lúc này sơ ${nameCharacter[5]} bước vào.`
			},
			{
				color: colorCharacter[5],
				name: [ `${nameCharacter[5]}` ],
				content: `Cuối cùng thì cũng chịu dậy rồi à ${nameCharacter[9]}. Ta bảo ${nameCharacter[10]} đánh thức con rồi mà.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `À tại ${nameCharacter[9]} ngủ ngon quá nya.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Thế cơ à?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Tha mình lần này đi nya.`
			},
			{
				color: colorCharacter[5],
				name: [ `${nameCharacter[5]}` ],
				content: `Ta không hiểu chuyện gì đã xảy ra nhưng sau khi ăn xong thì nhớ rửa chỗ đĩa kia nhé.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}`, `${nameCharacter[10]}` ],
				content: `Vâng (nya)!`
			},
			{
				color: colorCharacter[5],
				name: [ `${nameCharacter[5]}` ],
				content: `À mà hình như nay các con qua nhà bạn ${nameCharacter[1]} để tập luyện chiến đấu đúng không? Chắc trưa nay các con không về đây ăn rồi.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Sơ ${nameCharacter[5]} vừa nói xong câu đó thì đã bước ra khỏi phòng ăn rồi. ${nameCharacter[9]} chợt nhớ ra và hớt hải.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ôi chết, mình quên mất có hẹn với ${nameCharacter[1]} luyện tập cùng cha cậu. ${nameCharacter[10]} ăn nhanh lên nào.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Rồi, mình biết rồi nya.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Cả hai ăn nhanh chóng rồi mau mau rửa đồ. Sau khi xong việc liền phóng ra khỏi nhà chạy thắng đến nhà ${nameCharacter[1]}. Trên tay ${nameCharacter[9]} thì cầm một cái khiên gỗ còn ${nameCharacter[10]} cầm một cái kiếm gỗ.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Nhưng trên quãng đường đến nhà ${nameCharacter[1]}, ${nameCharacter[10]} tình cờ nhìn thấy một chú diều hâu bay qua. Theo bản năng của nhỏ, liền thả kiếm ra và đuổi theo chú diều hâu đó.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Này cậu làm rơi... Ế? Lại nữa hả?`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `${nameCharacter[9]} thấy vậy nhặt cây kiếm, liền đuổi theo, hét lớn giúp nhỏ lấy lại lý trí.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Này ${nameCharacter[10]}! Tỉnh lại đi! Này!`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Tất nhiên ${nameCharacter[10]} đã không nghe thấy gì và thậm chí cũng không để ý đến xung quanh.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Trời ạ! Cậu chạy nhanh quá. Dừng lại mau!`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Chú diều hâu bay qua hàng cây vượt ra khỏi tầm mắt ${nameCharacter[10]}. Tưởng thế là kết thúc nhưng nào ngờ nhỏ cũng nhảy lên và di chuyển trên hàng cây. Nhỏ cứ nhảy qua cây này đến cây kia và cho đến cú nhảy cuối cùng. ${nameCharacter[10]} gần như đã với tới chú diều hâu đó rồi nhưng trước khi chạm tới nó thì nhỏ đã rơi xuống. Thay vì đáp lên cây thì phía dưới là một con sông. ${nameCharacter[10]} bừng tỉnh và phát hoảng không kịp xử lí thế nào.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `${nameCharacter[9]} chạy đến vừa kịp lúc, cậu nhảy lên từ bờ sông bên này, cài cái kiếm vào khiên vứt xuống dưới sông chỗ ${nameCharacter[10]} rơi và đáp xuống phía đó. Cậu liền đỡ được ${nameCharacter[10]} và nhảy qua bờ sông bên kia. Nhưng khoảng cách chân ${nameCharacter[9]} với bờ bên kia không thể đáp tới nên cậu chỉ còn cách ôm chặt lấy phần đầu và lưng của ${nameCharacter[10]}. Thay vì đáp bằng chân thì ${nameCharacter[9]} đã dùng lưng của cậu để đáp đất và lăn vài vòng trước khi dừng lại. ${nameCharacter[9]} trong khi đang đau đớn đã hỏi ${nameCharacter[10]} với giọng nói hơi nhỏ.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]}, cậu ổn chứ? Có bị đau ở chỗ nào không?`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `${nameCharacter[10]} lúc này đang hơi hoảng. Nhỏ liền ngồi dậy, kéo ${nameCharacter[9]} ngồi lên. Đôi mắt cô đẫm lệ, đôi tai dạt xuống. Nhỏ cúi mặt, nói nhỏ với ${nameCharacter[9]} bằng giọng điệu đầy hối lỗi.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Mình xin... lỗi... Vì mình lại... khiến cậu... bị thương nữa... rồi...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Không sao đâu. Đừng có khóc mà. Chỉ là cậu vẫn chưa kiểm soát được bản năng của mình thôi.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Nhưng mà... mình luôn khiến cậu... gặp rắc rối vì... mình cả...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Đúng là thế nhỉ? Nếu cậu biết bơi thì mình sẽ bớt lo lắng cho cậu hơn. Nhưng mà chúng ta là “${nameTitle[2]}”, đôi khi mình cũng gây rắc rối cho cậu nữa mà. Dù sao thì mình sẽ luôn bên cạnh cậu khi gặp rắc rối. Và ngược lại cậu cũng vậy nhỉ?`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `${nameCharacter[10]} sau khi nghe xong thì bất ngờ, tai và đuôi dựng đứng lên. Cô dừng khóc và chín đỏ cả mặt. ${nameCharacter[9]} không nhận ra ${nameCharacter[10]} đã hết buồn nên vẫn cứ nói.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Phải rồi, thay vì nói “xin lỗi” thì cậu nên nói “cảm ơn” cho những lúc thế này.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `${nameCharacter[10]} mỉm cười, ngẩng đầu lên trong khi mặt cô vẫn còn hơi đỏ còn đuôi cô thì đung đưa. Cô đưa ngón tay lên mắt, gạt đi những giọt nước mắt và nở nụ cười với ${nameCharacter[9]}.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Đúng là ${nameCharacter[9]} mà, cảm ơn nha!`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `${nameCharacter[9]} nhìn vẻ mặt đó của ${nameCharacter[10]} liền đơ ra một lúc, mặt cậu cũng hơi đỏ chút. Dường như tim của cậu đã đập lệch một nhịp, ${nameCharacter[9]} lần đầu tiên có cảm giác như vậy. Cậu tự hỏi liệu có phải đây là do lần đầu ${nameCharacter[10]} nói không có “nya” cuối câu hay do khuôn mặt của ${nameCharacter[10]} đã hút hồn cậu. ${nameCharacter[9]} lấy lại nhận thức và đánh trống lảng.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `P-phải rồi... M-mình đi lấy lại cái kiếm và khiên ở cuối dòng đây. C-cậu cứ đợi mình ở đây nha.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Vừa nói dứt lời ${nameCharacter[9]} đã đứng dậy chạy đi luôn. ${nameCharacter[10]} cứ thế vừa nhìn theo hướng ${nameCharacter[9]} chạy vừa đứng dậy, rồi cô tự nhủ.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Luôn bên mình à...`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `${nameCharacter[1]} lúc này đang tập vung kiếm cạnh con hình nhân gỗ. Cậu đột ngột khựng lại.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình cảm nhận được đã có chuyện gì đó xảy ra giữa ${nameCharacter[9]} và ${nameCharacter[10]}.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Sau khi lấy lại được kiếm và khiên thì họ đã đến được nhà ${nameCharacter[1]}. Trước khi bước vào nhà thì ${nameCharacter[10]} đã kéo áo ${nameCharacter[9]}.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Về chuyện vừa nãy khá là xấu hổ... đừng có kể cho Shuunya...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `À ừm... được thôi mình hứa...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Nya. Thưa bác, cháu đến tập luyện cùng Shuunya!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[9]}` ],
				content: `Tại sao vừa nãy mình không thể trả lời bình thường được nhỉ? Thôi, tập trung nào, với chiến thuật vừa bàn với ${nameCharacter[10]} thì chắc chắn sẽ đánh bại được cha ${nameCharacter[1]} thôi. Tập trung... tập trung...`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Dường như một thứ gì đó đã mắc kẹt trong tâm trí của ${nameCharacter[9]}... Cậu sẽ phải mất kha khá thời gian để có thể hiểu rõ cảm giác vừa qua.`
			}
		]
	},
	{
		chapter: 4,
		title: `Buổi huấn luyện`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hiện tại tôi đang bảy tuổi và cha đã được thăng quân hàm lên làm Thượng úy đội trưởng của một trung đội lính. Và hôm nay, nhân dịp có ngày nghỉ nên tôi đã nhờ cha huấn luyện chiến đấu. Tiếng của kiếm gỗ va đập vào nhau, cùng những tiếng kêu đau đớn... của tôi... Tất nhiên rồi, những lúc như này thì tôi sẽ là người ăn hành mà. Cũng chả trách được khi nói đến huấn luyện thì cha cực kì nghiêm khắc. Dù sao cũng là để tôi có thể sinh tồn nên mới nghiêm túc thế này. Mỗi tội nó khổ quá...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đỡ này cha.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Có sơ hở!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ha, không trúng con đâu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cứ ngỡ tôi có thể phản đòn sau cú né, ấy vậy mà cha bứt tốc tiến lên ngay tức khắc.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ta đây chỉ nhử con thôi. Đỡ cú này thử xem.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Một cú vung mạnh đập thẳng vào bụng, tôi đau đớn ngã khuỵu.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Au au au... Con xin hàng...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ai mà ngờ được pha đó là để nhử tôi mất cảnh giác chứ. Không hổ danh cha được thăng chức, quả thật rất xứng đáng.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Cũng đã được nửa năm từ lúc con nhờ ta, kỹ năng chiến đấu của con đã được cải thiện hơn đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thì con muốn ít nhất phải đánh trúng cha một phát. Nhưng có vẻ lần nào con cũng chỉ suýt thôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Hahaha! Vậy cố lên nha con, đường còn dài lắm.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng vâng.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi tiu nghỉu điều cha vừa nói, ngẫm lại thì đúng là như vậy thật. Còn vùng bụng của tôi cũng đã đỡ đau hơn nhiều.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Mà hai đứa bạn của con đâu rồi? Con có bảo hai đứa nó sẽ qua đây luyện tập cùng mà.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ý cha là “${nameTitle[2]}” đó hả? Con tin rằng họ vẫn đang ngủ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Vậy à? Thế con muốn nghỉ ngơi chút không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Phần bụng con đỡ hơn rồi và con vẫn cử động được. Tiếp tục nào, con tin lần này sẽ đánh trúng cha một phát.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Được! Khí thế rất tốt! Ta rất sẵn lòng, lên nào con!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tuy nói là vậy nhưng hiện tại với trình độ tôi một đấu một với cha là không thể. Tôi muốn sử dụng kỹ năng lắm đấy nhưng mà thân phận cần che giấu, ít nhất là cho đến năm mười tuổi. Thế nên tôi đành tập trung vào cải thiện kỹ năng chiến đấu và phán đoán tình huống.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Bước di chuyển khá đó. Cứ tiếp tục cho đến khi không cử động được thì thôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cơ thể sau khi chuyển sinh có năng lực thể chất tốt thật. May mà năng lực thể chất ở thế giới cũ không theo tôi đến đây.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `So với lần trước thì con có vẻ cầm cự lâu hơn chút. Nhưng mà...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha tôi dùng cả cánh tay trái quật cả người tôi xuống. Tôi nằm bất động một lúc vì bị đau lẫn cả phía trước và sau.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Trọng tâm của con không được chắc chắn. Nó sẽ tạo sơ hở cho người khác dễ dàng hạ con chỉ với một pha quật tay như ta đã làm. Mà... con còn ổn chứ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Lưng con... đau...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ha ha. Nằm đó mà nghỉ ngơi chút đi. Ta vào nhà uống chút nước, khi nào bạn con đến thì sẽ tiếp tục sau.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy là cha tiến vào trong nhà, còn tôi nằm đó nhìn lên bầu trời xanh thoảng qua là cơn gió mát làm dịu đi những cơn đau. Trong lúc ngắm nhìn những đám mây trôi đi như thời gian của cuộc đời, tôi đã tự nhủ khi suy nghĩ vu vơ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế là đã bảy năm rồi nhỉ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cơn đau đã dịu đi chút nên tôi đứng dậy, tập vung kiếm và đâm chém vào con hình nhân gỗ của cha. Cùng lúc đó, tôi cũng suy nghĩ tới việc nên dùng kỹ năng thế nào trong lúc chiến đấu. Rồi một ý tưởng đã nảy ra trong đầu tôi, ngó nhìn xung quanh xem có ai đang ở gần không để triển khai kỹ năng.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi đứng cách con hình nhân gỗ một khoảng gần. Đầu tiên hai tay tôi cầm chắc kiếm, đưa nó lên qua đầu. Sau đó tôi sử dụng${nameSkill[1]}để điều khiển gió bao quanh lưỡi kiếm làm tăng áp lực giữa lưỡi kiếm và gió bao bọc. Đồng thời kích hoạt kỹ thuật${nameSkill[4]}là một kỹ năng của chức nghiệp ${nameJob[0]}, truyền ma lực vào vũ khí tăng khả năng chém mạnh lên nhiều lần và chỉ áp dụng lên vũ khí sắc có thể vung. Rồi tôi vung kiếm theo hướng chéo phải qua trái. Trong khi chuyển động thì lưỡi kiếm tăng áp lực lên gió bao bọc, đẩy gió tách khỏi lưỡi kiếm di chuyển theo hướng chém đó. Chắc tôi sẽ gọi kỹ năng này là${nameSkill[5]}vì phần gió bay đi khá giống lưỡi kiếm.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ngước lên nhìn con hình nhân gỗ, mong có vài vết xước vậy mà trông nó vẫn ổn. Có lẽ là đã thất bại rồi, dù sao đây cũng là lần thử đầu. Tôi đang định chạm tay vào để sờ xem có vết xước nhỏ tí nào không thì giọng nói từ đằng sau cất lên làm tôi giật thót tim.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Bọn mình tới rồi này. Xin lỗi vì nay đễ trễ nha. Tại ngủ quên và một số chuyện đã xảy ra với Asa...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu hứa không kể rồi mà nya! Mà mình cũng xin lỗi vì đến trễ nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Không... sao đâu...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]}? Cậu ổn chứ? Sao trông cậu toàn nhiều mô hôi thế này?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À... Mình nãy... luyện tập hơi nhiều... đó mà. Haha...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Cậu chăm chỉ thật đó nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `May quá không ai phát hiện ra tôi vừa dùng kỹ năng xong. Tim tôi vẫn còn đang đập rất nhanh nữa chứ. Mấy cậu này từ hôm tôi kể chuyện luyện tập cùng cha thì mắt họ sáng lên muốn luyện cùng. Thì ra “${nameTitle[2]}” cũng muốn làm ${nameJob[8]} cùng tôi. Rồi cha bước ra từ trong nhà.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Được rồi! Các con đã sẵn sàng chưa?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `À bác, ${nameCharacter[1]} chắc cần được nghỉ ngơi chút. Bạn ý luyện tập suốt rồi ạ.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Đúng đó nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Thằng nhóc này, ta bảo con nghỉ ngơi rồi mà. Thôi, ngồi xem ta với bạn con luyện tập đi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Xét khả năng chiến đấu của “${nameTitle[2]}” thì tôi vẫn hơn do đã được huấn luyện trước. Nhưng khi nói đến phối hợp thì chắc không ai bằng hai người họ được. ${nameCharacter[9]} thường sử dụng khiên, chuyên làm người đỡ đòn bởi sức khỏe của cậu. Còn ${nameCharacter[10]} thì dùng kiếm nhưng vì là miêu nhân nên tốc độ phản xạ và sự dẻo dai làm cho cô có một lợi thế lớn. Tất nhiên cả khiên và kiếm hiện tại đều là từ gỗ bởi đây chỉ là luyện tập.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ cha tôi ra đòn trước nhưng ${nameCharacter[9]} liền đỡ đòn. Từ phía sau cậu ấy, ${nameCharacter[10]} liền nhảy lên và vung kiếm xuống. Cha tôi có vẻ đã nhận ra liền nhảy giật lùi lại.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Chiến thuật mấy đứa khá lắm.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Chúng cháu cảm ơn nya.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vừa dứt câu thì ${nameCharacter[10]} đã lao lên nhanh chóng chém tới tấp cha tôi rồi nhảy giật lùi. Sau đó ${nameCharacter[9]} lại lao lên đỡ đòn và khống chế cha. ${nameCharacter[10]} lại ở sau đó nhảy lên và họ cứ lặp đi lặp lại chiến thuật như vậy. Chiến thuật thì hay thật nhưng đối với cha là người có kinh nghiệm chiến đấu thì việc lặp lại nhiều lần như thế sẽ tìm được ra sơ hở. Và đúng như tôi nghĩ, lần này cha đã không còn nhảy giật lùi mà thay vào đó cha đạp lên khiên của ${nameCharacter[9]} và nhảy ra phía sau cậu. ${nameCharacter[10]} lúc này chuẩn bị nhảy liền giật mình nên đã mất thăng bằng và bị cha cho một chém. Còn ${nameCharacter[9]} chưa kịp phản ứng sau cú vừa nãy liền bị ăn một đạp từ phía sau bởi cha và một chém. Thế là trận đấu kết thúc.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Mấy đứa phối hợp với nhau tốt lắm nhưng mà không nên dùng liên tục một chiến thuật. Ta có thể đọc được bước di chuyển sau đó và tìm cách phá vỡ nó đấy.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Chúng cháu biết rồi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hai cậu ấy ỉu sìu luôn rồi. Sau khi ngồi quan sát thì tôi cũng nãy ra chiến thuật mới, đựng dậy phủi bụi bám trên quần và hướng về phía bộ đôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Mình thấy khỏe hơn rồi. Có thể cho mình nhập hội cùng không?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Tất nhiên là được rồi nya. Nhưng mà chiến thuật bây giờ thế nào đây nya?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Phải đó, chiến thuật mình nghĩ ra bị phá mất rồi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đừng lo, mình đã có kế hoạch. Đầu tiên...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau một hồi thảo luận chiến thuật thì mọi thứ cũng đã xong.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha! Bọn con xong rồi, tiếp tục nào.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Được thôi. Hãy cho ta thấy chiến thuật mới nào.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha có thể lên trước được không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Vậy thì đỡ lấy này. ${nameCharacter[9]} vẫn đỡ đòn đầu tiên nhỉ?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]}! Lên đi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Vẫn là chiến thuật cũ nhỉ? Chẳng phải ta đã bảo...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Bác nghĩ vậy à nya?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Chiến thuật của tôi là như này. Vẫn sử dụng chiến thuật cũ nhưng lần này ${nameCharacter[9]} sau khi đỡ đòn sẽ gọi tên ${nameCharacter[10]}. Lí do là để cha tôi chú ý đến chi tiết ${nameCharacter[10]} sẽ nhảy từ phía sau lên. Trong lúc cha đang tập trung vào ${nameCharacter[10]} thì tôi từ phía sau có thể tiến lên áp sát cha. Đúng như dự đoán cha tôi đã phải nhảy giật lùi lại.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Lần này ta có vẻ mất cảnh giác rồi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vẫn chưa xong đâu cha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} sau cú nhảy trên cao liền đáp xuống khiên của ${nameCharacter[9]}. Nhỏ liền lấy đà để lao tới cha tôi, đồng thời ${nameCharacter[9]} cũng dùng lực để đẩy ${nameCharacter[10]} luôn. ${nameCharacter[10]} sau đó lao nhanh về phía cha, do chưa kịp lấy lại thăng bằng nên sau pha hất ngược ${nameCharacter[10]} ra phía sau thì đã bị ngã. ${nameCharacter[9]} sau đó liền tiến lên dùng khiên và cả người đè cha tôi xuống. Tôi và ${nameCharacter[10]} chuẩn bị chém cha và có được phát đánh trúng lần đầu, nhưng...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `${nameSkill[6]}`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đột ngột cha đứng dậy, nâng ${nameCharacter[9]} lên ném vào tôi. ${nameCharacter[10]} vung kiếm nhưng cha đã lộn nhào ngược về phía kiếm gỗ làm rơi trước đó. Sau khi chộp được thì cha liền lao thẳng về phía chúng tôi và mỗi người đều bị một chém ngay tức khắc.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Không ngờ các con phải ép ta dùng đến kỹ năng để thoát khỏi thế trận vừa nãy.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Không công bằng, bọn con đâu có kỹ năng!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Nào nào. Khi chiến đấu không ai nhường ai đâu. Thế có tiếp tục không nào?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế là ba bọn tôi luyện tập với cha miệt mài cho đến tầm trưa.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Mọi người tập luyện thế đủ rồi, vào ăn trưa nào.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Các con nghe rồi đó, vào nhà nghỉ ngơi đi. Ta dọn dẹp chỗ này rồi sẽ vào sau.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}`, `${nameCharacter[9]}`, `${nameCharacter[10]}` ],
				content: `Vâng (nya)!`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Chú diều hâu từ đâu bay tới đậu trên con hình nhân gỗ. Người cha tiến lại gần thấy chú diều hâu kì lạ đứng nhìn ngắm một chút.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ủa? Sao lại có chú diều hâu ở đây vậy? Vùng này chắc chắn không có loại chim này ở đây. Hừm...`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Người cha mải ngắm nhìn một hồi, rồi chú diều hâu bay đi mất. Nhưng kì lạ thay con hình nhân gỗ bị đổ mất nửa phần trên ngay sau đó, người cha đã rất ngạc nhiên.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Trời! Phải mua một con khác rồi. Nhưng thật lạ, vết cắt rất phẳng... Chẳng lẽ do con trai mình? Hay một trong đứa bạn của nó? Mà kệ đi, chắc con hình nhân này cũ rồi, vào ăn thôi.`
			}
		]
	},
	{
		chapter: 3,
		title: `Buổi tối của tôi`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Lúc này mọi người đều ngồi quanh bàn ăn và đây cũng là lúc cả nhà kể những câu chuyện đã gặp ngày hôm nay. Và cha luôn là người mở đầu.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ta đã được bảo là trong thời gian tới ta sẽ được thăng quân hàm lên làm Thượng úy đội trưởng của một trung đội lính đấy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Thật hả anh? Đây đúng là tin tốt thật mà.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha tài thật đấy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Tất nhiên rồi, cha con mà lại. Sắp tới cả nhà sẽ được ăn những món ngon hơn rồi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cả nhà tôi đều rất vui mừng với cơ hội thăng tiến của cha. Như vậy điều kiện sống của gia đình sẽ được cải thiện thêm chút. Vừa thưởng thức súp vừa vui mừng thì đột nhiên cha hỏi một câu khiến cho tôi có linh cảm không lành sau đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Mà nhân tiện con cũng đã sáu tuổi rồi, ta và mẹ con đang thắc mắc mai sau con sẽ làm gì?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Đúng rồi đó con, mẹ cũng đang muốn hỏi con.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Làm gì là sao à?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ý ta là con có dự định vào làm lính không? Ta có thể giúp con vào một vị trí nào đó.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thì ra ý cha mẹ tôi là vậy. Chắc là vì dạo gần đây tôi có nhờ cha huấn luyện một chút để biết thêm về cách chiến đấu cũng như cách phòng vệ thế nào. Hiện tại cứ trả lời xem sao vậy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thực ra con không hề có ý định làm lính. Con đang hướng đến làm một ${nameJob[8]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha mẹ tôi sau khi xong câu đó thì đã ngạc nhiên. Cha tôi thì đập bàn và lên tiếng.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Khoan đã! Con có biết làm ${nameJob[8]} nguy hiểm đến tính mạng thế nào không!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy là linh cảm của tôi đã đúng. Cha mẹ rất yêu thương tôi nhưng đặc biệt là cha thì có phần hơi bao bọc quá. Chắc cha muốn tôi đi lính để có thể dễ trông chừng... mặc dù đây là ý tốt và không phải lo gì nhiều. Nhưng... đây là cuộc sống thứ hai của tôi... Tôi muốn tự bước đi bằng chính bản thân mình mà kiếp trước chưa từng dám. Vậy nên, tôi nghiêm túc nhìn thẳng và cha và dõng dạc nói về hướng đi của mình.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Con biết nó sẽ rất dễ gây nguy hiểm đến tính mạng. Nhưng dù có vậy... con vẫn muốn được làm ${nameJob[8]} và đi phiêu lưu khắp nơi. Đây đã là bước đường mà bản thân con quyết định rồi ạ!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Con đúng thật là...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hầy... Những cuộc nói chuyện như thế này thì thường rất khó để một đứa trẻ có thể thắng được. Tôi biết điều đó nên cố thử nghĩ xem làm thế nào để thuyết phục được cha, rồi mẹ lên tiếng.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Bình tĩnh nào anh. Hãy nhìn kĩ đôi mắt của nó kìa. Mỗi lần nghiêm túc thì nó lại trưng ánh mắt như vậy đó.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha sau khi nghe xong câu nói đó của mẹ liền dừng nói. Cha nhắm mắt lại, đắn đo suy nghĩ rồi thở dài.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Con nghiêm túc chứ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đây chính là cú chốt hạ của tôi. Cảm ơn mẹ nhiều!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng! Con hoàn toàn nghiêm túc những điều con vừa nói. Xin cha mẹ cho phép con theo con đường đã chọn.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha nhìn tôi với vẻ mặt bất lực, hơi cúi đầu suy nghĩ chút. Rồi ngẩng lên cùng ánh mắt chấp nhận trước cậu con trai đang tràn đầy kiên định.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Thôi được rồi... Con nghiêm túc như vậy thì ta cũng đành chấp nhận. Nếu thay đổi ý định thì cứ bảo ta.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cứ ngỡ thế là tạm thời an toàn nhưng rồi tôi vẫn bị chọc.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Nhưng mà hiếm có đứa trẻ nào vẫn còn giữ được bình tĩnh như vậy sau khi bị lớn tiếng như vậy đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À thì... Con cũng hơi sợ chứ. Nhưng vì đam mê nên con đã gạt nỗi sợ và bình tĩnh nói với cha mẹ thôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi vừa nói vừa cười gượng gạo để che giấu đi nỗi lo lắng của mình về việc bị nghi ngờ không giống như một đứa trẻ. `
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Vậy à. Con trai mẹ ngầu quá đi. Giờ đến lượt chuyện của mẹ nè. Hôm nay á...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau khi ăn xong bữa tối thì tôi đã đi tắm và rồi quay về phòng ngủ của mình. Nằm lên giường, tôi nhìn lên trần nhà và nghĩ đến ${statusBoard}. Rồi mọi thông tin đã xuất hiện trước mắt tôi...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tên, tuổi, giới tính, ... đều hiện ra hết. Các dạng thông tin về thể trạng thì được chia làm nhiều thành phần và được chuyển thành số liệu để có thể dễ dàng theo dõi... chắc cũng chỉ mang tính tương đối.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Về cái tên ${nameCharacter[1]} ${nameCharacter[2]}, tuy đã đăng ký trước khi chuyển sinh vào${nameLocation[0]}nhưng vì gia đình tôi chỉ là thường dân nên cái họ là ${nameCharacter[2]} không được nhắc đến. Chỉ những tầng lớp quý tộc mới có tên họ nên tôi đã ẩn phần thông tin này đi để tránh gặp rắc rối. Tiện thể tôi cũng ẩn hết luôn các phần đáng lẽ mà một đứa trẻ chưa có như chức nghiệp, kỹ năng và danh hiệu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mà tại sao tôi lại có thể ẩn được thông tin thì là do quyền lợi đặc biệt của danh hiệu ${nameTitle[0]}. Cho phép ẩn hoàn toàn các thông tin trong ${statusBoard} bạn muốn mà không sợ thứ gì có thể đọc được. Để một đứa trẻ có quá nhiều thông tin trước mười tuổi là không hề bình thường. Nhất là khi có thể bị ai đó lỡ dùng kỹ năng${nameSkill[0]}lên thì to chuyện mất. Ý tôi là tôi không muốn bị trở thành trung tâm bàn tán, làm thường dân hiện tại là đủ rồi. Cho đến khi tôi trưởng thành thì các thông tin cần ẩn vẫn sẽ bị ẩn.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau khi xem lại một số thông tin của bản thân thì tôi bắt đầu luyện tập sử dụng các kỹ năng vào mỗi tối như thường lệ. Danh hiệu ${nameTitle[1]} là điều ước đầu tiên của tôi, cho phép triển khai phong thuật nhanh và tiêu thụ ít ma lực hơn. Hồi đầu khi sử dụng phong thuật thì tôi đã làm rối tung hết cả căn phòng lên, tất nhiên là không bị phát hiện nhưng đã bị cha mắng cho một trận vì căn phòng bừa bộn. Dần dần tôi đã kiểm soát được và có được kỹ năng${nameSkill[1]}là thiên phú chuyên nguyên tố phong. Đây là ma pháp cho phép tôi điều khiển gió theo ý mình muốn ở mức cơ bản. Mục đích của phong thuật này để tôi có thể định hình gió ở một dạng nhất định, nói dễ hiểu hơn thì phát triển ma pháp mới từ sự định hình đó. Và hiện tại tôi đã phát triển được thêm hai phong thuật mới là${nameSkill[2]}và${nameSkill[3]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ma pháp${nameSkill[2]}ngăn không cho âm thanh lọt ra ngoài hoặc vào trong. Bây giờ tôi đang dùng nó trong phòng ngủ của mình để cha mẹ không nghe thấy. Và tất nhiên kết giới này chỉ ngăn âm thanh.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Ma pháp${nameSkill[3]}kiểm soát gió xung quanh vật khiến nó bay lên và di chuyển đến nơi mình muốn. Nghe có vẻ thú vị nhưng xét về mặt kĩ thuật thì nó vô cùng khó. Cần điều chỉnh lượng gió thế nào để phù hợp với trọng lượng và đặc điểm của vật để không phá hủy nó. Còn chưa kể đến lúc di chuyển vật cần phải tập trung để kiếm soát tốc độ. Đồng thời còn phải trung hòa gió với môi trường xung quanh như khi có một cơn gió khác thổi qua hoặc độ ẩm không khí... Nếu thành thục thì có thể áp dụng lên nhiều vật cùng lúc. Nhưng mà bây giờ tôi mới chỉ dùng được lên một vật và đang luyện tập với cái ghế gần giường.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Trong khi tôi đang hăng say luyện tập thì cửa bắt đầu mở. Cũng may là tôi đang ngồi hướng nhìn về phía cửa nên đã mau chóng hủy hết ma pháp và nằm xuống giường. À, ra đó là mẹ tôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Shu, con có ổn không? Nãy mẹ gọi con không có thấy trả lời.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À... nay con chơi vui quá nên là vừa nằm ngủ thiếp đi ạ. Thế mẹ gọi con có chuyện gì ạ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Xin lỗi mẹ nhiều! Thực ra con luyện dùng ma pháp cơ, lỡ làm mẹ lo lắng không đâu mất rồi...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Mẹ có gọt ít táo đem vào cho con nè.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `A, con cảm ơn, làm mẹ mất công đem vào cho con rồi. Mẹ ăn cùng con không?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Mẹ ăn phần của mẹ rồi, con cứ ăn đi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `À mà cảm ơn mẹ lúc nói chuyện với cha, mẹ cứu con một phen rồi đó. Con cứ tưởng sẽ thành thảm họa cơ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Mẹ cũng biết tính cha con mà. Với cả con cũng chưa từng đòi hỏi gì nên mẹ đã rất vui khi con nói vậy. Tất nhiên, nếu con muốn nói gì thì cha mẹ đều sẽ lắng nghe con từ tận đáy lòng.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi tự hỏi liệu bản thân sau này có thể làm gì để có thể báo hiếu lại cho cha mẹ. Thật là may mắn khi đây là gia đình của tôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng, con biết rồi ạ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Thôi giờ mẹ đi ngủ đây, ăn xong thì cứ để đĩa đấy mai rửa cũng được.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy thì con chúc mẹ ngủ ngon.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Chúc Shu ngủ ngon nha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mẹ hiểu chuyện và quan tâm tôi nhiều thật. Lần sau phải chú ý ngồi trò chuyện với mẹ nhiều hơn nữa mới được. Còn giờ thì ăn hết chỗ táo và luyện ma pháp cho đến khi hết chỗ ma lực còn lại thôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau khi hết chỗ ma lực thì tôi liền lăn ra ngủ lập tức. Mục đích là để gia tăng giới hạn ma lực, cho dù tỉ lệ tăng còn chưa đến một phần trăm. Nếu thành công thì giới hạn cũng chỉ tăng được thêm một chỉ số. Thậm chí nhược điểm của việc cho bay sạch ma lực là khiến cơ thể bị đuối sức kèm khả năng cao ngất đi. Thế nên luyện tập xong rồi đi ngủ là rất hợp lí, đồng thời cũng học được cách nhớ giới hạn năng lượng để lúc thi triển ma pháp sẽ dễ dàng hơn. Và đó là hoạt động bí mật mỗi buổi tối của tôi.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Trong không gian ban đêm, chú diều hâu đậu trên cành cây, nhìn qua cửa số thẳng vào phòng ${nameCharacter[1]} một hồi lâu, rồi chú tung cánh mà bay đi để lại sợi lông vũ rơi lên gờ cửa sổ...`
			},

		]
	},
	{
		chapter: 2.5,
		title: `Kết bạn`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Lúc này đang là tầm chiều, mặt trời cũng đã sắp sửa lặn. Một vài đứa trẻ đang chơi ném bóng ở sân, còn tôi thì đang ngồi dưới gốc cây, kể lại chuyện vì sao sáng nay đến muộn với hai đứa bạn của tôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `... Và đó là lí do sáng nay mình đến muộn.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ra là thế. Nếu là mình thì khua chân múa tay và hét toáng lên để khiến cho nó sợ.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Còn mình thì sẽ dùng móng vuốt để xua đuổi nó đi nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Phải rồi, nếu mà thấy đàn chim thì chắc cậu sẽ đuổi theo nó đi mất.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Haha! Phải đó.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Đừng có trêu mình nữa nya! Chẳng qua... mình không thể kiểm soát được bản thân khi thấy nó thôi nya...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Trong lúc bọn tôi đang trêu ${nameCharacter[10]} thì từ đâu quả bóng bay về phía này. Với giác quan nhạy bén của nhỏ, ngay khi đôi tai vểnh lên thì quả bóng đã nằm gọn trong tay mà không cần phải ngoảnh lại. Rồi một đứa trẻ với vẻ mặt sợ sệt, lo lắng qua chỗ chúng tôi.`
			},
			{
				color: colorOther[2],
				name: [ `Đứa trẻ` ],
				content: `E-em xin lỗi! Anh chị có bị sao không ạ? Q-quả bóng là do em ném qua đây...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Quả bóng này làm sao có thể khiến cho anh chị bị thương được chứ nya. Của em nè nya.`
			},
			{
				color: colorOther[2],
				name: [ `Đứa trẻ` ],
				content: `C-cảm ơn chị nhiều và em xin lỗi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cậu giỏi thật ha, ${nameCharacter[10]}. Mình chả thể nào bắt được mà không cần nhìn đâu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} sau khi nghe vậy thì mặt nhỏ rất tươi, tai dựng đứng lên, còn đuôi thì đung đưa. Cứ mỗi khi được khen hoặc đang vui thì ${nameCharacter[10]} sẽ như vậy.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Khen mình nữa đi nya.`
			},
			{
				color: colorOther[2],
				name: [ `Đứa trẻ` ],
				content: `Mà cho em hỏi sao ba anh chị lại trở thành bạn của nhau vậy?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Hừm... tại sao ta?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Để mà nói ra thì... Hừm... chuyện hơi dài...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Mình tự hỏi có nên kể không ta nya?`
			},
			{
				color: colorOther[2],
				name: [ `Đứa trẻ` ],
				content: `Ơ? Đừng làm em tò mò nữa mà. Kể đi anh chị.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Thôi được rồi. Trước tiên là hoàn cảnh của anh thì lúc đó là một năm trước, anh đang năm tuổi...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha mẹ của ${nameCharacter[9]} đã bị sát hại trong một chuyến đi bởi một băng đạo tặc. Mặc dù cậu đã cố bảo vệ mẹ đến phút cuối cùng nhưng vẫn không qua khỏi. Và khi cậu sắp bị giết thì một người lạ mặt với cây thương đã xuất hiện cứu cậu trong gang tấc, rồi đưa cậu về sống ở cô nhi viện này. Còn về người bí ẩn đó không ai biết rõ chi tiết. Đó là những gì đã xảy ra trước khi tôi gặp ${nameCharacter[9]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Rồi vài hôm trôi qua, tôi cùng mẹ đến cô nhi viện để xem có giúp được gì không thì bắt gặp cậu ấy đang đứng dựa tường với ánh nhìn xa xăm lên trời. Lúc đó trông cậu rất khó gần, cảm giác như đang xua đuổi mấy đứa trẻ khác vậy. Tôi liền thử tới bắt chuyện nhưng cậu lại tỏ vẻ đáng sợ như đang muốn bảo đừng làm phiền vậy. Dẫu vậy tôi vẫn đến bên cạnh cố nói vài câu nhưng cậu cũng chả phản hồi gì, làm như không nghe thấy gì cả. Nếu cậu ấy không quan tâm thì tôi cũng không nên làm phiền nữa và rời đi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tình cờ lúc đó có một chú diều hâu đang tha một quả táo. Có vẻ như cuống của quả táo không chịu được nữa nên đã đứt. Quả táo rơi xuống mái nhà, đập trúng vào một cái mái ngói khiến nó bị rơi và vị trí rơi lại là nơi tôi đi. Sau khi nghe thấy âm thanh lạ ở phía trên, tôi chưa kịp phản ứng gì thì mình đã bị đẩy ngã. Tôi hơi choáng sau cú ngã đó, nhìn qua cạnh chân mình thì đó là một cái mái ngói. À, thì ra cậu ấy vừa cứu tôi. Không biết tại sao cậu lại tỏ vẻ như vậy khi vẫn có để ý đến tôi. Đứng dậy phủi bụi qua, rồi kéo cậu ấy dậy và nói chuyện.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nè, vậy là cậu có nghe thấy mình nói nhỉ? Tại sao cậu lại lờ mình vậy?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Chỉ là... mình đang có chút suy nghĩ...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy có phiền không khi kể cho mình nghe? Dù sao thì chia sẻ cho người khác cậu sẽ cảm thấy đỡ hơn khi giữ trong lòng đó. À, tất nhiên nếu cậu muốn thôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cậu ấy quay mặt đi, tỏ ra lưỡng lự, dường như không muốn nói về nó. Im lặng hồi lâu, cậu nói tiếp...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Thực ra là về cha mẹ mình...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế là tôi đã nghe hết câu chuyện của cậu ta và việc tự dằn vặt bản thân ra sao khi không đủ mạnh mẽ để bảo vệ cha mẹ của cậu.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Nè, cậu nghĩ hơi quá rồi. Cậu mới chỉ có năm tuổi thôi đấy. Việc đứng ra để bảo vệ cũng đã là một hành động can đảm lắm đó.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nhưng... mình không bảo vệ được người thân thì nó còn có ý nghĩa gì chứ...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi có thể thấu hiểu được lời cậu nói, mất đi người thân là mất đi một nơi để trở về. Nhưng mà cậu ấy lại không biết rằng bản thân lại dũng cảm đến nhường nào khi làm điều đó.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vậy việc vừa nãy thì sao? Cậu vừa cứu mình một phen đấy. Cho dù hành động này không như việc đứng lên bảo vệ của cậu nhưng cũng đã cứu mình. Và cảm ơn cậu, mình nợ cậu lần này.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Tớ... đã cứu cậu nhỉ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đúng vậy. Mặc dù sẽ mất thời gian để cậu thay đổi suy nghĩ về vụ đó nhưng trước tiên thì mình tên là ${nameCharacter[1]}, cậu muốn làm bạn với mình không?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Được thôi, mình tên ${nameCharacter[9]} và cậu nợ mình một lần đấy.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Quay trở lại thực tại, câu chuyện về tôi và ${nameCharacter[9]} đã kể xong và tôi khá bất ngờ ...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `... Đó là cách bọn anh đã quen... Ế! Sao mọi người lại ngồi quanh đây hết rồi thế này?`
			},
			{
				color: colorOther[2],
				name: [ `Đứa trẻ` ],
				content: `Tại truyện của mấy anh chị hay quá nên thành ra ai cũng muốn lắng nghe. Và anh ${nameCharacter[9]} ngầu quá đi!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ngầu thế mà lại. Và ${nameCharacter[1]} vẫn còn nợ mình nhỉ? Hihi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Xem nào, nếu không nhầm thì nợ mình đã hết rồi. Hồi trước có cái vụ mà cậu...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `A! Đừng kể nó! Cậu hứa rồi mà! C-cậu không còn nợ mình gì nữa đâu... chỉ đùa chút thôi...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế mới phải chứ. Đừng nghĩ mình quên nha.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Không công bằng...`
			},
			{
				color: colorOther[2],
				name: [ `Đứa trẻ` ],
				content: `Tiếp theo là đến chuyện về chị ${nameCharacter[10]}!`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `À ừm... Nè ${nameCharacter[1]}, chúng ta có nên kể không nhỉ? Tại vì cứ mỗi lần...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} tuy là tinh nghịch nhưng khi nói về chuyện này thì cô lại cảm thấy có trách nhiệm trong những hành động ở quá khứ. Nhưng...`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Mọi chuyện sẽ ổn thôi, mình cũng không có ý định giấu giếm gì cả nya. Đó là khoảng nửa năm trước, chị đang năm tuổi...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Gia đình của ${nameCharacter[10]} đã bị nhóm săn nô lệ đuổi bắt. Nhờ cha mẹ nhỏ cầm chân nhóm săn nên ${nameCharacter[10]} đã chạy trốn được vào rừng. Nhỏ đã chạy liên tục không ngừng nghỉ vì trong rừng nhiều ma thú nguy hiểm. May mắn thay nhỏ đã ra khỏi rừng an toàn nhưng sức lực của ${nameCharacter[10]} đã đến giới hạn nên gục ngã ngay sau đó. Về thông tin cha mẹ của nhỏ thì chưa có gì, theo suy đoán chắc đã bị bọn săn nô lệ bắt lại. May vào lúc đó binh lính tuần tra quanh thành đã bắt gặp ${nameCharacter[10]} đang nằm gục ở gần bìa rừng nên đã đưa về cô nhi viện.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cùng hôm đó, tôi đang chơi với ${nameCharacter[9]} và vài đứa trẻ ở ngoài sân thì binh lính từ đâu chạy hối hả đến cô nhi viện. Trong đó có người lính trên tay đang bế một cô bé thú nhân trên mình có kha khá vết thương.`
			},
			{
				color: colorOther[3],
				name: [ `Binh lính` ],
				content: `Sơ ${nameCharacter[5]}! Khẩn cấp! Sơ xem giúp được gì cho bé này được không?`
			},
			{
				color: colorCharacter[5],
				name: [ `${nameCharacter[5]}` ],
				content: `Chuyện khẩn cấp gì vậy? Ôi! Anh hãy đặt cô bé đó lên giường ở đắng kia, còn tôi sẽ lấy ${nameItem[0]} ngay.`
			},
			{
				color: colorOther[3],
				name: [ `Binh lính` ],
				content: `Cảm ơn sơ, phiền sơ rồi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Chúng tôi lúc này đứng ở bên ngoài nhìn qua cửa sổ, tò mò chuyện vừa diễn ra. ${nameCharacter[9]} chưa kịp nghe tôi nói dứt thì cậu đã chạy vào.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Chúng ta thử vào ngó đi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ê khoan đã! Này! Hầy... đừng làm phiền người ốm chứ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế là tôi cũng chạy vào, sơ ${nameCharacter[5]} đang cho cô bé đó uống thuốc và tình trạng của cô đã đỡ hơn nhiều. Nhưng khi cô có lại ý thức thì liền nhảy một phát vào góc tường, đuôi dựng đứng lên xù như bông lau còn đôi tai dạt ra sau, móng vuốt thì nhô ra và đang thủ sẵn thế tấn công. Người cô như đang co rúm lại nhưng đồng thời cũng sẵn sàng cào xé bất cứ ai dám tiếp cận. Bầu không khí trong căn phòng bỗng nặng nề hơn bao giờ hết.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Bình tĩnh nào bạn, mọi người ở đây sẽ không làm hại bạn đâu.`
			},
			{
				color: colorOther[3],
				name: [ `Binh lính` ],
				content: `Lùi lại đi nhóc, cô bé này đang ở trạng thái nửa tỉnh nửa mơ nên không phân biệt ai là bạn hay thù đâu. Nguy hiểm lắm...`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Thực ra các chú mặc giáp đứng trước cô bé đang co rúm như kia thì cô ấy sẽ thấy sợ nhiều hơn đấy.`
			},
			{
				color: colorOther[3],
				name: [ `Binh lính` ],
				content: `Cháu... nói cũng phải...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Trong khi mọi người đang nghĩ cách để khiến cô bé bình tĩnh lại thì ${nameCharacter[9]} đã chầm chậm tiến đến chỗ cô ấy. Tôi cố nói khẽ nhất để không làm ${nameCharacter[9]} giật mình.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Đồ ngốc ${nameCharacter[9]} này! Có kế hoạch gì không mà đã tiếp cận thế hả?`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Cứ tin ở mình.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cậu ấy đã đi được nửa đường rồi nên đành theo dõi xem sao vậy. ${nameCharacter[9]} ngày một đến gần hơn, cô bé nhe nanh, giơ vuốt đã tung một đòn và may là cậu ấy né được. Cậu từ từ chìa tay ra, mặc cho cái nhìn đầy nghi hoặc của cô bé, rồi ôm chầm lấy cô.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Bình tĩnh nào bạn. Mọi người thực sự đều là người tốt. Họ đã cứu bạn đó, bình tĩnh nào. Mọi chuyện sẽ ổn thôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mặc kệ việc cậu đang bị cô cào nhiều phát sau lưng, vết thương kha khá nhiều nhưng cậu vẫn ôm cô thật chặt. Và sau một lúc cô đã dừng lại và ngất đi. Dường như cô đã cảm nhận được điều gì đó như là sự chân thành từ ${nameCharacter[9]} nên cô đã bình tĩnh lại mà thả lỏng người. Và ${nameCharacter[9]} sau đó cũng ngất đi vì quá đau. Chú diều hâu đậu ở cửa sổ chứng kiến mọi việc đã bay đi...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Quay về hiện tại thì ${nameCharacter[9]} đang quay người lại và vén áo lên để hiện ra tấm lưng đầy những vết cào của ${nameCharacter[10]}.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Mọi người có thể thấy đây là những vết thương hồi đó. Sau khi anh tỉnh dậy thì thấy ${nameCharacter[10]} và ${nameCharacter[1]} đang ngồi cạnh bên giường. Và lúc đó anh và ${nameCharacter[1]} đã làm bạn với ${nameCharacter[10]}.`
			},
			{
				color: colorOther[2],
				name: [ `Đứa trẻ` ],
				content: `${nameCharacter[9]} đúng là ngầu nhất luôn đó!`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Xin lỗi cậu hồi đó, Konyashi. Tất cả là tại mình mà cậu đã bị thương nya...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} khi mà buồn hay cảm thấy hối lỗi những việc sai thì khuôn mặt nhỏ trông rất ủ rũ, đôi tai dạt xuống và đuôi thì thu gọn lại gần hông. ${nameCharacter[9]} thấy thế liền đưa tay xoa đầu ${nameCharacter[10]}.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[10]}, cậu vẫn đang để tâm đến chuyện này à?`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Ừm nya...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Vậy hãy lắng nghe mình này. Những vết thương này không là gì so với việc bảo vệ được cậu. Mình không hề hối hận những hành động của mình.`
			},
			{
				color: colorCharacter[10],
				name: [ `${nameCharacter[10]}` ],
				content: `Ừm cảm ơn nya...`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Bên cạnh đó thì mình đã có mục tiêu để bảo vệ đó là những người quan trọng đối với mình. Nhất là ${nameCharacter[10]}, ${nameCharacter[1]}, sơ ... Ủa? Sao cậu lại quay người lại vậy? Mình vừa nói gì khiến cậu bực à? Nè?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `${nameCharacter[10]} sau khi nghe đến tên mình xuất hiện đầu tiên liền chín đỏ cả mặt. Cô liền quay người đi, ngồi ôm chân, đôi tai thì dựng đứng lên còn đuôi thì vung vẩy. Và đó là ${nameCharacter[10]} khi bị dính “đòn chí mạng” từ ${nameCharacter[9]}.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Này ${nameCharacter[1]}, mình vừa nói gì khiến ${nameCharacter[10]} bực mình à?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Cậu đúng là ngốc mà. Thậm chí mấy đứa trẻ đang ngồi đây còn hiểu được chuyện gì đang xảy ra.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Ơ vậy mình đã nói gì?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Tự tìm hiểu đi Ko-wa-shi.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `Nói mình đi mà!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ồ, mặt trời sắp lặn rồi kìa, cũng gần bữa tối nên mình phải về ngay đây. Hẹn gặp lại mọi người.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thế là tôi đã chạy một phát đi để mặc ${nameCharacter[9]} bối rối không hiểu đã nói gì sai.`
			},
			{
				color: colorCharacter[9],
				name: [ `${nameCharacter[9]}` ],
				content: `${nameCharacter[1]}! MÌNH ĐÃ NÓI GÌ SAI VẬY?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nếu mọi người hỏi tại sao tôi vẫn chơi với “${nameTitle[2]}” thì đó là vì “bữa ăn rất ngon”. Đúng vậy, lí do chính của tôi đó.`
			}
		]
	},
	{
		chapter: 2,
		title: `Mọi người và nơi tôi sống`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Trên con đường đất quen thuộc, một cậu bé tóc ngắn với mái vắt chéo qua trái đang thong dong trên đường đến cô nhi viện, chính là tôi đây. Thong thả vừa đi vừa ngắm nhìn bầu trời trong xanh điểm một vài vệt mây bông trắng đang trôi nhè nhẹ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Một chú chim dáng giống diều hâu có lông màu nửa trắng phần chân và lam phần đầu. Nó bay vèo xuyên thủng qua những đám mây rồi đột ngột chuyển hướng lao về phía tôi. Tôi giật mình, đứng lại và thắc mắc tại sao diều hâu lại lao tới hướng của mình. Ngay lập tức, tôi chuyển sang thế thủ vì dù có chạy nhanh đến thế nào thì tôi cũng chả tránh được tốc độ bay của nó. Diều hâu đang lao tới, tôi nhắm mắt và chấp nhận việc bị thương.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Đột ngột, tôi cảm nhận được một làn gió dường như rất quen thuộc. Cảm giác này... tôi không thể hiểu... nhưng có thể cảm nhận được. Cảm tưởng như nó đang thì thầm tôi điều gì đó. Diều hâu lúc này đã rất gần rồi nhưng tôi không cảm thấy sát khí của nó. Thế nên tôi đã thả lỏng cơ thể, quan sát nó và đúng như linh cảm. Diều hâu bay qua đem theo làn gió mát mẻ cùng sự tự do. Tôi bất giác quay người nhìn chú bay đi khuất tầm khỏi mắt, hoài nghi về điều vừa xảy ra, liệu nó là một trò chơi khăm của ai đó hay là thử thách sự can đảm dành cho tôi? Giờ tôi chả có chứng cứ gì nên đành gác lại và nhanh tới cô nhi viện.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ tôi đã đến kịp lúc trước khi vào học. Cùng lúc đó thì sơ ${nameCharacter[5]} đứng trước cửa đang lắc chiếc chuông cầm tay để gọi mấy đứa trẻ từ sân trước vào học. Còn tôi thì đang hơi mệt sau khi chạy nên đã đứng lại một lúc, tay chống đầu gối và thở hổn hển. Vừa bình tâm được một chút thì có hai bàn tay của ai đó đập mạnh vào lưng làm tôi giật bắn mình.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Ui da... Ai làm vậy đấy?`
			},
			{
				color: colorOther[1],
				name: [ `Cậu bé` ],
				content: `Đáng đời! Làm câu giật mình rồi hả? Tụi này đợi cậu mãi để chơi cùng mà không thấy đâu.`
			},
			{
				color: colorOther[1],
				name: [ `Cô bé` ],
				content: `Đúng rồi đó nya. Sao hôm nay cậu lại đến muộn vậy nya?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Hai cậu... CÓ BIẾT ĐAU LẮM KHÔNG!`
			},
			{
				color: colorOther[1],
				name: [ `Cậu bé` ],
				content: `Xin lỗi nha, nhưng tại sao đến muộn vậy?`
			},
			{
				color: colorOther[1],
				name: [ `Cô bé` ],
				content: `Xin lỗi xin lỗi nya. Tớ cũng tò mò vì hiếm khi thấy cậu đi muộn như này nya.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Hầy... Chuyện là...`
			},
			{
				color: colorCharacter[5],
				name: [ `${nameCharacter[5]}` ],
				content: `Ba em kia! Còn đứng ở đấy nói chuyện nữa, đến giờ vào học rồi, mau vào thôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}`, `Cậu bé`, `Cô bé` ],
				content: `Vâng (nya)!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Để tí nữa mình nói cho nha.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sơ ${nameCharacter[5]} hơn tuổi mẹ tôi nhiều nên chắc đã ngoài bốn mươi cùng mái tóc vàng đã phai dần. Trang phục thường mặc của sơ là áo choàng dài đen phủ toàn cơ thể với dây buộc quanh eo, kèm mũ trùm đen che đi một phần trán với tóc thể hiện sự giản dị, không lưu luyến vật chất. Sơ ${nameCharacter[5]} là một người nhân hậu và luôn ân cần giang tay giúp đỡ những đứa trẻ mồ côi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cô nhi viện hiện đang được quản lý bởi sơ ${nameCharacter[5]} và đồng thời cũng là người chăm sóc cho các đứa trẻ ở đây. Cơ sở vật chất ở nơi đây cũng có thể nói là ổn, không quá thiếu thốn. Có một khu vườn trồng rau củ quả ở phía sau để có thể ăn hoặc mang đi bán chút. Đôi khi cô nhi viện cũng nhận được một chút quyên góp của người dân xung quanh như là đồ ăn, quần áo, ...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Hiện tại đang có khoảng chục đứa trẻ sống ở đây và tuổi của chúng chênh lệch nhau một đến hai tuổi. Trong đó thì có hai người bạn thân cùng tuổi vừa gây sự với tôi hồi sáng.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cậu bạn với mái tóc xù xì màu lá phong là ${nameCharacter[9]}. Đôi mắt lúc nào cũng sáng rực như ánh nắng ban mai, và ánh nhìn của cậu nhiều khi cũng dứt khoát như những hành động cậu làm vậy. Tóc cậu ta khá xù xì và khó chải, nên cậu đành cứ để vậy. Dù cũng xuề xòa về phục trang như những cậu bé khác, nhưng ít nhất là ${nameCharacter[9]} cũng khá cầu toàn về khoản này. Trang phục của cậu lúc nào trông cũng khá là chỉn chu. Tuy còn đó sự bồng bột của tuổi trẻ nhưng cậu lại là người bạn chính trực và đáng tin cậy. Mọi lời ${nameCharacter[9]} nói những lúc không đùa cợt đều như đinh đóng cột, luôn rạch ròi đúng sai kèm theo đó là những hành động mà cậu cho cần thiết.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Theo như lời cha tôi kể thì cha mẹ của cậu đã bị sát hại trong chuyến đi bởi một băng đạo tặc. Mặc dù cậu đã cố bảo vệ mẹ đến phút cuối cùng nhưng vẫn không qua khỏi. Và khi cậu sắp bị giết thì một người lạ mặt với cây thương đã xuất hiện cứu cậu trong gang tấc, rồi đưa cậu về sống ở cô nhi viện này. Còn về người bí ẩn đó không ai biết rõ chi tiết.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cô bạn nhỏ nhắn luôn đi cùng ${nameCharacter[9]} có tên là ${nameCharacter[10]}. Cô là một Miêu nhân, một chủng tộc người thú với thể chất khá vượt trội, dù bề ngoài của nhỏ thật chẳng khác những cô bé cùng trang lứa là bao. Mái tóc cắt ngắn tím thẫm như bầu trời đêm với hai búi tóc thả dài đằng trước. Còn phía trên là đôi tai nhọn gần như lúc nào cũng vểnh cao có lẽ là điểm ấn tượng lớn nhất của mọi người về cô bé, cũng như chiếc đuôi nhỏ xinh đôi khi vung vẩy theo gió. Phần mái dài phía trước trán cô bé không thể nào che nổi nét tinh nghịch và vui vẻ trong đôi mắt lục bảo sáng như những vì sao của nhỏ. Khi nhìn ánh mắt đó, mọi người có thể thấy rõ nhiệt huyết của tuổi trẻ cũng như là sự ranh mãnh của một chú mèo con ham vui vậy. Hết mình là thế, nhưng cô bé cũng rất thấu hiểu, và biết điểm dừng khi mọi thứ dần đi quá giới hạn.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha tôi kể rằng nhỏ đã chạy trốn khỏi một nhóm săn nô lệ. Cha mẹ của cô thì chưa có thông tin gì, theo suy đoán chắc đã bị bọn săn nô lệ bắt lại. Binh lính tuần tra quanh thành đã bắt gặp cô đang nằm gục ở gần bìa rừng nên đã đưa về đây.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cả hai người đều là những người bạn quan trọng của tôi nhưng để mà nói thì các cậu ấy là “${nameTitle[2]}”. Đúng vậy, bộ đôi rất tinh nghịch và hay quậy phá. Chắc vì họ vẫn là trẻ con nên hành xử như vậy là đúng với tuổi. Không như tôi... Dù sao thì hành động của độ đôi không vượt quá giới hạn và cũng biết lúc nào phải dừng lại nên không có ai ghét họ cả.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Quay lại việc tại sao tôi đến cô nhi viện thì trong khuôn sân ở đây có một ngôi nhà dùng dạy học và sơ ${nameCharacter[5]} là người chỉ bảo. Thực ra đây là sự tự nguyện của sơ vì nơi đây không có trường học và chỉ những quý tộc mới có đủ tiền để thuê giáo viên về dạy. Vì tự nguyện nên học phí không có, thay vào đó thì người dân có thể quyên góp nếu muốn. Những thứ tôi được học ở đây gồm cách viết đọc nói, tính toán, tiền tệ, lịch sử, địa lý và tín ngưỡng nơi đây.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Về cách viết đọc nói thì sau khi chuyển sinh tôi đã có thể hiểu mọi người đang nói gì. Nhưng tôi vẫn phải học lại cách viết và đọc bởi nó không giống với bất cứ ngôn ngữ nào mà tôi biết trước kia.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Về tính toán thì chỉ là phép cơ bản nhất như cộng hoặc trừ. Tôi đã từng hỏi sơ về phép nhân và chia thì sơ bảo không biết. Chắc chỉ có thương nhân hoặc những người hay tiếp xúc với các con số sẽ biết phép này. Hoặc là trình độ nơi đây vẫn còn hơi yếu.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Về tiền tệ ở đây sử dụng dạng xu gồm bốn loại là đồng thấp nhất, rối đến bạc, vàng và bạch kim với giá trị cao nhất. Cứ một trăm loại xu giá trị thấp sẽ đổi được một xu giá trị cao hơn một bậc.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Về lịch sử, thị trấn có tên là ${nameLocation[2]}. Hiện tại đang được cai trị bởi lãnh chúa có tên là ${nameCharacter[6]} ${nameCharacter[7]}. Từng là một chỉ huy gan dạ và tài ba trên chiến trường, với vị trí hiện tại là một lãnh chúa thì Ngài luôn cố gắng giúp cho thị trấn phát triển. Nhưng có vẻ không phải việc gì cũng thuận theo ý Ngài bởi thị trấn vẫn phải phụ thuộc nhiều vào tài nguyên của quý tộc. Tình hình trị an trong thị trấn khá tương đối ổn định. Thay vào đó thì sự phân chia giàu nghèo một cách rõ ràng giữa thường dân với quý tộc và tất nhiên không phải quý tộc nào cũng xấu. Đồng thời, nơi đây đa dạng chủng loại cùng sinh sống.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thị trấn được bao bọc bởi tường thành hình sao sáu cánh và cứ giữa mỗi cánh sẽ có tháp tam giác hướng nhìn ra ngoài thành. Đây là một chiến lược phòng thủ rất tốt để ngăn chặn việc bị tấn công... theo cha nói thì là vậy. Thị trấn có ba cổng thành gồm cổng phía Nam, Đông Bắc và Tây Bắc được canh gác rất cẩn thận. Ngoài thị trấn thì còn có cảng giao thương hàng hóa lớn đồng thời cũng là nơi di chuyển qua các vùng biển và cảng mang tên ${nameLocation[3]} ở hướng Nam.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Về địa lý thì trị trấn nằm trên thảo nguyên thảm cỏ xanh tươi bạt ngàn. Thị trấn giáp biển hướng từ Đông đến Nam, hướng Bắc giáp rừng có ma thú và hầm ngục quái, hướng Tây là thảo nguyên rộng với đa dạng thực vật cũng có ma vật xuất hiện rải rác. Ở hướng Nam có cảng ${nameLocation[3]}. Ở hướng Đông có bãi biển tuyệt đẹp để có thể vui chơi, nghỉ ngơi thỏa thích tại nơi đó.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cuối cùng là về tín ngưỡng, thị trấn đang tôn thờ một vị thần tên là ${nameCharacter[8]}. Đây là vị thần biểu tượng cho công lý hay có thể nói là sự bảo vệ, che chở dành cho người khác. Cụ thể thì họ tin rằng thần ${nameCharacter[8]} đã luôn bảo vệ và che chở cho nơi đây được những tháng ngày bình yên. Và có những tin đồn rằng tường thành sao sáu cánh của thị trấn chính là lời sấm từ thần ${nameCharacter[8]} sau khi lãnh chúa đời trước đã cầu nguyện tới vị thần này. Thực hư ra sao thì tôi cũng không rõ nhưng mà có đức tin vào một ai đó như thần ${nameCharacter[8]} thì cũng không quá tệ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau một khoảng thời gian học và chơi ở cô nhi viện từ sáng đến chiều tối thì tôi đã về nhà. Vừa mở cửa ra thì tôi đã ngửi thấy mùi bánh mì và súp rau củ bay ra từ bếp.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Con đã về nhà rồi thưa mẹ. Ủa, cha vẫn chưa về à mẹ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Chào con nha. Cha cũng sắp về rồi, con mau vào dọn bàn hộ mẹ với nhé.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi nhanh chóng cởi giày và vào giúp mẹ. Sau một hồi dọn bàn thì cha tôi về nhà, như thường lệ vẫn luôn ồn ào.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ta về rồi đây! Và... nay ta có tin tốt!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Chào anh yêu, mau thay đồ rồi vào ăn tối nào.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tin tốt hả? Hừm... Đúng là hôm nay cha tôi vui vẻ hơn mọi khi. Thật là tò mò về tin tốt của cha đó mà.`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Trong không gian tối tăm của bầu trời đen, một gia đình cùng quây quần bên bàn ăn. Họ thưởng thức bữa ăn cùng nhau và chia sẻ các câu chuyện đã xảy ra ngày hôm nay...`
			}
		]
	},
	{
		chapter: 1,
		title: `Cuộc sống mới`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thật là ấm áp... Đốm sáng yếu ớt dần xua tan bóng tối quanh tôi. Mở mắt ra và thứ đầu tiên có thể thấy là người phụ nữ tóc dài đang bồng tôi. Dường như đây là người đã hạ sinh tôi... Cơ thể nhỏ bé này hiện tại khá yếu... Vậy là tôi đã được chuyển sinh thật rồi! Căn phòng hơi tối nên tôi không nhìn rõ được gì nhiều.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Thử liếc nhẹ qua căn phòng thì tường, trần nhà và sàn có vẻ chủ yếu đều được làm từ gỗ. Một cơn gió nhẹ thổi qua... tấm rèm bay nhè nhẹ... À, ra là cửa sổ đang mở. Trời tiết tối nay có vẻ sẽ lạnh đây nhưng tôi đang được bồng trong lòng nên khá là ấm áp. Nhân tiện thì cửa sổ cũng được làm từ kính kết hợp với khung làm từ gỗ. Còn căn phòng thì hơi nhỏ nên đồ đạc cũng không có gì nhiều ngoài một cái giường sát tường cạnh cửa sổ, một tủ nhỏ cạnh giường, một bộ bàn ghế gồm một bàn hai ghế và một tủ quần áo...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mà khoan! Tôi mải để ý đến mấy thứ khác quá, vẫn còn một vài người khác trong phòng đang nói chuyện to nhỏ. Lúc này một người đàn ông đang vừa nói, vừa khóc... trong hạnh phúc?`
			},
			{
				color: colorCharacter[1],
				name: [ `Người đàn ông` ],
				content: `Cảm ơn sơ ${nameCharacter[5]} rất nhiều đã giúp ${nameCharacter[3]} sinh ra đứa con của chúng tôi an toàn. Tôi thực sự cảm ơn sơ nhiều!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sơ ${nameCharacter[5]} mỉm cười nhẹ trước sự trân thành của người đàn ông đó.`
			},
			{
				color: colorCharacter[5],
				name: [ `${nameCharacter[5]}` ],
				content: `Không việc gì phải cảm ơn tôi đâu, anh ${nameCharacter[4]}. Đỡ đẻ là nghĩa vụ của chúng tôi ý mà. Ngược lại tôi còn phải cảm ơn vợ anh vì luôn giúp đỡ bên cô nhi viện chứ.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Có vẻ người phụ nữ đang bồng tôi đúng là mẹ rồi, tên ${nameCharacter[3]} và người đàn ông kia là cha tên ${nameCharacter[4]}. Bà cô sơ thì tên ${nameCharacter[5]}, trông có vẻ đó là người quen của cha mẹ tôi. Trong khi đấy, sơ ${nameCharacter[5]} dường như đang lo lắng điều gì đó.`
			},
			{
				color: colorCharacter[5],
				name: [ `${nameCharacter[5]}` ],
				content: `Nhưng thật kì lạ là đứa trẻ nó không khóc. Đây có lẽ là trường hợp đầu tiên mà tôi gặp phải sau khi đỡ đẻ rất nhiều. Liệu đứa trẻ có ổn không nhỉ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi đã giật mình sau khi nghe xong câu đó. Đừng nói điều rủi như thế chứ sơ... Không ổn rồi! Đúng thật là kì lạ khi một đứa trẻ mới sinh ra mà lại không khóc. Chắc phải giả khóc thôi... mặc dù nó sẽ rất là kì lạ... Hầy... có lí do gì khiến cho tôi có thể giả khóc được không đây... Người cha cũng mất bình tĩnh sau khi nghe điều đó từ sơ và đã nói lớn.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `CON TÔI BỊ VẤN ĐỀ GÌ Ư? CON ƠI! CON ĐỪNG BỊ GÌ NHÉ! CON LÀ ĐỨA CON ĐẦU TIÊN MÀ TA CÓ ĐÓ!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Không ngờ tôi có người cha ồn ào như vậy, đang ban đêm đấy nói nhỏ lại thôi chứ cha. Tôi còn đang bận phải nghĩ kế hoạch giả... mà khoan đã, đây là lúc thích hợp để giả khóc mà. Tôi đã giãy giụa và giả tiếng khóc.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `OE... OE OE!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mẹ tôi thấy vậy liền vỗ về để tôi nín.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Nhìn này, con khóc mất rồi. Anh à, anh nên nói nhỏ lại, con khóc rồi này. Nín đi con yêu, mẹ vừa mắng cha con rồi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Người cha thấy hối lỗi liền lấy tay bịt miệng và nói nhỏ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Ơ... Anh xin lỗi em! Con ơi nín đi con, cha sẽ không nói to nữa đâu...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sơ ${nameCharacter[5]} đã suýt bật cười, thay vào đó là mỉm cười rồi cất gọn đồ đạc để chuẩn bị ra về.`
			},
			{
				color: colorCharacter[5],
				name: [ `${nameCharacter[5]}` ],
				content: `Ái chà, có vẻ đứa trẻ khóc rồi. Chắc là nó không bị gì đâu, mọi người không cần phải lo lắng nữa. Thôi, tôi xin phép về không làm phiền gia đình nữa.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi lúc này thấy nhẹ cả người vì vở kịch bé nhỏ đã thành công.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Vậy hẹn gặp lại chị, thứ lỗi vì em không ra tiễn được. Trời tối rồi, anh đưa sơ về nhà hộ em nha.`
			},
			{
				color: colorCharacter[5],
				name: [ `${nameCharacter[5]}` ],
				content: `A, không cần đưa tôi về nhà đâu, chỉ cần tiễn ra cửa là được rồi. Vợ anh vừa mới sinh nên cơ thể sẽ còn rất yếu, anh nên ở lại.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Vậy... một lần nữa cảm ơn sơ rất nhiều!`
			},
			{
				color: colorCharacter[5],
				name: [ `${nameCharacter[5]}` ],
				content: `Hẹn gặp lại cả nhà.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau đó cha và sơ rời khỏi phòng, tiến ra trước cửa nhà. Tôi cảm nhận được cha mẹ và sơ ${nameCharacter[5]} đều là người tốt cả. Thật tuyệt khi được chuyển sinh đến nơi đây... Mí mắt tôi sụp xuống, bản thân đang cảm thấy dần mệt mỏi... Chắc là vì cơ thể mới sinh này. Rồi người cha quay lại.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Sơ ${nameCharacter[5]} đi...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mẹ thấy tôi đang hơi liu diu, đưa ngón tay lên môi như để ra hiệu nói khẽ và nói nhỏ với cha.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Suỵt... Con nó sắp ngủ anh à.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Người cha thấy vậy nên đã nhẹ nhàng đi đến bên giường và ngồi cạnh mẹ.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Nhìn khuôn mặt thằng bé trông thật giống em.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Thằng bé cũng giống anh nữa mà, nó có đôi mắt lam tuyệt đẹp như của anh vậy.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[4]}` ],
				content: `Thật tuyệt khi chúng ta cũng đã có con.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Mẹ mỉm cười và gật đầu một cái nhẹ. Đó là những điều cuối cùng tôi nghe trước khi đôi mắt nhắm chặt lại và chìm vào giấc ngủ...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Buổi tối ngày hôm đó trôi qua... Mặt trời đã ló rạng được hồi lâu, chiếu những tia sáng xuyên qua những ô cửa kính soi rọi bên trong ngôi nhà.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Shu! Bữa sáng xong rồi. Xuống ăn sáng đi con!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng! Con xuống liền!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi vừa đi vừa nghĩ vu vơ... Hiện tại tôi đang sáu tuổi, đồng nghĩa với việc đã được sáu năm kể từ khi được chuyển sinh. Hiện tại tên tôi là ${nameCharacter[1]} và là một đứa nhóc.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Cha tôi tên ${nameCharacter[4]}, đến nay đã được hai mươi sáu tuổi. Hiện đang làm lính canh gác ở cổng hướng Nam, đến bữa tối mới có thể về nhà.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Còn mẹ tên ${nameCharacter[3]}, đến nay là hai mươi tư tuổi. Là một thợ may vá và cũng là nội trợ của gia đình. Khi rảnh thường hay giúp đỡ bên cô nhi viện do sơ ${nameCharacter[5]} hiện đang quản lý.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Nguồn thu nhập chính đều đến từ cha. Có thể nói gia đình tôi có đủ để sống qua ngày, theo lời cha nói là vậy. Tôi đang ở thị trấn có tên gọi là ${nameLocation[2]}... và tất cả thông tin tôi biết chỉ có đến vậy.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tiện thể thì tôi thừa hưởng đôi mắt lam tựa nước biển từ cha và mái tóc màu đá lưu ly của mẹ. Đang mải nghĩ thì có mùi trứng thoang thoảng từ căn bếp khiến cho bụng tôi kêu réo lên.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Chào buổi sáng, Shu. Mẹ có làm món trứng con thích này.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Chào buổi sáng, mẹ ạ... Oa! Mẹ làm trứng ấy ạ? Ngon quá, con cảm ơn mẹ! Mời cả nhà ăn sáng!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tất cả chỉ là diễn cả, tuy cảm giác hơi không thoải mái khi tỏ vẻ trẻ con so với tuổi thật nhưng... Tôi mới chỉ có sáu tuổi, biết sao được. Món trứng này tuy không được cuộn lại nhưng nó thực sự ngon, dù sao thì tôi thích ăn trứng là thật. Sau khi ăn xong bữa sáng thì mẹ có nhẹ nhàng nhắc tôi.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Hình như hôm nay con sẽ đến cô nhi viện để học nhỉ?`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Vâng, đúng rồi ạ! À, mẹ ăn xong cứ để đấy để con dọn cho.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Con mẹ ngoan quá đi à. Không có nhiều đứa trẻ như con ở độ tuổi này đâu. Mẹ thấy con trưởng thành nhanh quá... Có cảm giác con sắp xa mẹ rồi ý. Mà mẹ đi may vá đây, cảm ơn con nhé.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Sau câu nói đó tôi cảm thấy hơi nhột. Việc che giấu sự thật đúng là khó khăn... Nhưng được mẹ khen như vậy tôi cũng thấy sướng. Sau một hồi rửa bát, tôi nhanh chóng tiến ra phía cửa nhà và nói lớn vọng vào trong.`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[1]}` ],
				content: `Con đi đây thưa mẹ!`
			},
			{
				color: colorCharacter[1],
				name: [ `${nameCharacter[3]}` ],
				content: `Nhớ về trước bữa tối nha con!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi cầm lấy tay nắm cửa kéo vào, cánh cửa gỗ kêu kót két được mở ra, ánh nắng chiếu rọi vào nhà... Và tôi đã bước chân qua cánh cửa đó với một tâm thế không biết điều gì tuyệt vời sẽ xảy ra...`
			}

		]
	},
	{
		chapter: 0,
		title: `${nameLocation[1]}`,
		dialogue: [
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Lạnh quá... Tôi muốn ôm lấy bản thân để bớt lạnh nhưng tại sao tay mình không cử động được? Có tiếng người nói gì đó rất lớn vang vọng về phía tôi... Mọi người đang nói gì vậy? Không thể nghe rõ... mệt quá... muốn nhắm mắt... muốn ngủ... Tôi có thể cảm nhận được nhịp đập của tim mình đang ngày một yếu dần... Và rồi, bản thân như rơi vào cõi hư vô, không còn cảm thấy gì nữa...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Lấy lại nhận thức, tôi giật bắn mình ngồi dậy, mắt nhắm mắt mở nhìn mọi thứ xung quanh nhưng đều là một màu trắng xóa. Bối rối với khung cảnh hiện tại, tôi từ từ đứng dậy, ngó nghiêng trái phải một hồi, rồi dưới chân đột ngột xuất hiện một con đường lát gạch dẫn đi đâu đó. Mọi thứ đều rối bời, không thể hình dung được tình hình hiện tại ra sao nên để tìm câu trả lời, thì chắc chỉ còn cách đi trên con đường hiện ra. Vừa đi vừa nghĩ vu vơ, cố hiểu tình hình hiện tại nhưng chả thể nào nghĩ được gì hợp lí cả. Thậm chí tôi cũng không thể nhớ chuyện gì đã xảy ra, rồi tiếng gõ bàn phím từ đâu vang lên. Như một bản năng, tôi đã chạy thật nhanh về hướng đó để tìm câu trả lời.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Và chỉ một cái chớp mắt, tôi đã ở trong một không gian kín trông như là văn phòng làm việc. Một chàng trai lạ với mái tóc bạch kim trong bộ công sở trắng đang ngồi chăm chú gõ phím ở bàn làm việc. Tôi tiến lại gần, người lạ ấy dừng gõ, hướng ánh nhìn về phía tôi cùng nụ cười thân thiện.`
			},
			{
				color: colorOther[1],
				name: [ `Chàng trai lạ` ],
				content: `Xin chào bạn, có vẻ như bạn đang bối rối đây là đâu nhỉ?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Lời nói của anh thật điềm tĩnh trông như anh ấy đang đợi tôi đến nơi đây vậy.`
			},
			{
				color: colorCharacter[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Anh là ai... đây là đâu... ?`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Hân hạnh được giới thiệu, tôi là nhân viên ${nameCharacter[1]} ${nameCharacter[2]}, họ là ${nameCharacter[2]} và tên là ${nameCharacter[1]}. Chào mừng đến với ${nameLocation[1]}, bạn có thể gọi tôi là ${nameCharacter[2]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Tôi lúc này đang cực kì bối rối. Nhân viên? ${nameLocation[1]} là văn phòng gì cơ?`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Nói ngắn gọn thì bạn đã gặp phải cái chết không thể ngờ tới trước tuổi ba mươi và mang trong mình nhiều nuối tiếc chưa thể thực hiện được khi còn sống. Vậy nên bạn đã được xuất hiện tại nơi đây của chúng tôi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Tôi giật mình sau khi nghe anh ${nameCharacter[2]} nói vậy, chắc đây chỉ là đùa thôi nhỉ? Định đáp lại lời của anh nhân viên, những dòng kí ức trước khi tôi có lại nhận thức đột ngột ùa về...`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Lúc này tôi đang trên đường đi về nhà còn trời thì mưa tầm tã. Có vẻ như lúc đó có một chiếc xe máy băng qua đường và dường như không để ý tôi nên tai nạn đã xảy ra. May thay là người đó có phanh kịp lúc nên cả hai sau khi va chạm chỉ bị ngã và xây xát nhẹ đôi chỗ. Khi tôi gượng đứng dậy, ánh đèn chói lóa từ đâu tiến đến trước mắt. Một chiếc xe máy khác đi cùng chiều có vẻ không thấy tai nạn phía trước nên đã không kịp phản ứng. Cú đâm này khiến tôi bị văng đi một đoạn ngắn, không thể cử động và rồi mất dần ý thức.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Nhớ lại cảm giác lúc đó thật đau đớn... Sốc? Bực tức? Tôi chả biết nữa... Chắc là có hơi nuối tiếc khi cuộc đời dừng ở mốc hai mươi... Thở dài ngao ngán, tôi chỉ còn cách chấp nhận hiện thực phũ phàng này. Giọng nói của tôi giờ đây tràn đầy chán nản.`
			},
			{
				color: colorCharacter[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Thế... đây là thiên đàng... Nơi đây hiện đại hơn tôi nghĩ...`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Đáng tiếc đây không phải là thiên đàng. Nhưng mà... chúng tôi sẽ cho bạn cuộc sống thứ hai ở đại vũ trụ mang tên${nameLocation[0]}do bọn tôi mới tạo ra.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Tôi đã rất ngạc nhiên nhưng mà cũng hơi băn khoăn. Giọng điệu chán nản của tôi tuy không còn nhưng đã chuyển sang ngờ vực.`
			},
			{
				color: colorCharacter[0],
				name: [ `${nameCharacter[0]}` ],
				content: `A-anh ${nameCharacter[2]}... anh nói thật chứ?.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Người nhân viên đó vẫn giữ vẻ điềm tĩnh cùng nụ cười thân thiện. Thật khó đoán được anh ấy đang nghĩ gì, nếu đây là trò đùa thì tôi cũng không bận tâm nhiều bởi chắc muốn làm tôi vui lên chút.`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Vâng, tôi nói thật. Chúng tôi nào đâu có dám đùa trên mất mát của người khác.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Nụ cười điềm tĩnh đó như thắp sáng hi vọng trong tôi vậy. Nếu đó là sự thật...`
			},
			{
				color: colorCharacter[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Liệu... có thể cho tôi về lại thế giới cũ được không?`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Giọng điệu của anh ${nameCharacter[2]} dường như nhẹ nhàng hơn khi đáp lại câu hỏi vừa rồi.`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Chúng tôi rất lấy làm tiếc là không thể. Việc bạn đến được đây là trên con đường một chiều, vì vậy bạn chỉ có thể tiến về phía trước.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Một đi không trở lại à... Tôi còn có thể hi vọng gì nữa đây? Vẻ mặt tôi lúc này tối sầm lại như ngọn lửa sắp tàn. Ấy thế mà nó lại rực sáng lên khi anh ${nameCharacter[2]} vừa đổi tông giọng vui tươi.`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Như đã đề cập trước đó, bạn sẽ được tái sinh vào thế giới mới. Đây là nơi tồn tại những thứ giả tưởng như ma pháp và các sinh vật lạ cùng các định luật vật lý từng chỉ là giả thuyết.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Thế giới mới lạ đầy viễn tưởng? Phản ứng duy nhất sau suy nghĩ kia là nụ cười gượng trên khuôn mặt. Có vẻ sẽ rất thú vị đây...`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Chúng tôi sẽ cung cấp cho bạn một vài quyền lợi, trong số đó là được tùy chỉnh bản thân như diện mạo, chủng loại, thể trạng, chức nghiệp trước khi chuyển sinh.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Được tùy chỉnh bản thân? Cảm giác hơi kì kì nhưng sao cũng được.`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Có khả năng nghe, nói, hiểu ngôn ngữ bản địa.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Quyền lợi này tốt thật, việc tiếp thu nhanh thông tin môi trường xung sẽ giúp tôi rất nhiều.`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `${statusBoard} có tồn tại ở mỗi sinh vật để xem thông tin cá nhân. Chỉ cần nghĩ về ${statusBoard} trong đầu là thông tin sẽ xuất hiện trước mặt bạn. Tất nhiên mọi người sẽ không thấy trừ khi bạn chia sẻ nó hoặc họ có kỹ năng đọc thông tin. Và bạn khả năng truy cập vào ${statusBoard} sớm hơn bình thường.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Thật à... Tồn tại hệ thống kiểu này dễ kiểm tra thông tin hơn thật. Mà khoan... truy cập sớm hơn?`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Có danh hiệu ${nameTitle[0]} cho phép ẩn thông tin tùy chọn trong ${statusBoard} mà không sinh vật có kỹ năng thuộc${nameLocation[0]}có thể nhìn ra được. Ngoại trừ những người được ${nameLocation[1]} chuyển sinh có kỹ năng soi mói.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Đúng là tôi không muốn vài thông tin bị lộ thật, nhất là liên quan đến kiếp trước nếu có. Quyền lợi đang ngày càng tốt hơn bao giờ hết! Chắc tôi sắp không nhịn được mà thốt lên mất.`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Có được ba điều ước và ước được bất cứ điều gì miễn là thỏa mãn các điều kiện gồm không gây ảnh hưởng lên những ${nameTitle[0]} khác, không ảnh hưởng quá lớn lên đại vũ trụ${nameLocation[0]}và nhất là ảnh hưởng lên ${nameLocation[1]}.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Tôi đã cười thầm và nghĩ rằng có thể ước thêm nhiều điều ước nhưng...`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Tất nhiên là không thể ước có thêm điều ước hay những thứ để có thêm điều ước.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Và ngay lập tức cái ý nghĩ lúc đó của tôi đã vụt tắt. Hiển nhiên là không thể có chuyện thêm điều ước được rồi. Tôi lúc này chỉ biết gãi đầu, có quá nhiều thông tin đang xoay vòng vòng.`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Ký ức từ thế giới trước sẽ được giữ lại nhưng điểm bắt đầu sẽ là trẻ sơ sinh. Và bạn không thể quay lại ${nameLocation[1]} kể cả sau khi chết, trừ khi do bên văn phòng triệu tập.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Làm lại từ đầu theo nghĩa đen luôn á! Sắp tới sẽ mệt đây... Nhưng được sống lại cũng không quá tệ... Chắc vậy...`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Vậy bạn có câu hỏi gì không? Xin hãy cân nhắc và hỏi tôi bất cứ câu hỏi gì. Càng hỏi nhiều thì bạn sẽ biết thêm về thế giới bạn sẽ tới.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Sau khi ${nameCharacter[2]} dừng nói thì tôi đã hỏi kha khá câu và biết thêm được một vài điều. Trong đại vũ trụ sẽ có nhiều chiều không gian khác nhau và chiều không gian chính được gọi là Khởi nguyên, nơi phần lớn người chuyển sinh đến. Tuy được chuyển sinh nhưng có thể không chung một lục địa, một hành tinh hoặc thậm chí chiều không gian. Và bằng cách nào đó vẫn có thể gặp được nhau tại bất cứ đâu trong đại vũ trụ này. Có các chiều không gian, hầm ngục quái, làng, rừng, núi, biển, chủng loại, chế độ cai trị, quy luật... khác nhau ở khắp nơi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Tại Khởi nguyên, hành tinh chính mang tên ${nameLocation[4]} là nơi tôi sẽ đến, nằm trong hệ hành tinh Trung tâm gồm một Mặt trời, ít nhất một Mặt trăng cùng các thiên thể khác. Thời điểm hiện tại chưa sinh vật nào có thể đi được một vòng ${nameLocation[4]} hay khai phá vũ trụ. Phần lớn đều cho rằng hình dạng ${nameLocation[4]} là mặt phẳng trải dài vô tận tám hướng. Hệ thống thời gian nơi đây vẫn giống với thế giới trước như số ngày trong năm cùng thời gian trong ngày. Có thể chỉ khác trong việc phân chia tháng và mùa ở từng nơi.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Đó là tất cả thông tin mà tôi có thể nắm bắt. Hoàn thành hồ sơ và sau một khoảng thời gian...`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Cuối cùng, xin hãy đặt tên cho bản thân. Nếu bạn không nghĩ được ra thì có thể để trống và cha mẹ mới sẽ là người đặt tên.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Việc đặt tên luôn là phần khó nhất trong tất thảy. Nghĩ điều ước đủ khó rồi nhưng đặt tên còn khó hơn nữa chứ. Không cẩn thận thì cái tên về sau sẽ thành trò đùa không thể nào quên được... Quên? Một ý nghĩ nảy lên trong đầu tôi khiến tôi phải nhìn thẳng vào ${nameCharacter[2]}.`
			},
			{
				color: colorCharacter[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Tên tôi sẽ là ${nameCharacter[1]} ${nameCharacter[2]} bởi vì anh có thể là người đáng tin cậy cuối cùng mà tôi có thể gặp. Đồng thời... trí nhớ tôi hơi kém nên lấy tên như này thì tôi sẽ không thể nào quên được anh.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Anh ${nameCharacter[2]} chỉ gật đầu nhẹ sau khi nghe tôi nói câu đó.`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Tôi vô cùng cảm kích. Vậy bạn muốn xác nhận cái tên ${nameCharacter[1]} ${nameCharacter[2]}?`
			},
			{
				color: colorCharacter[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Tôi xin xác nhận cái tên đó.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Từ giờ cái tên ${nameCharacter[0]} sẽ chỉ còn là quá khứ mà chỉ tôi và văn phòng này biết. Ít nhất là cho đến ngày ai đó biết được bí mật này.`
			},
			{
				color: colorCharacter[2],
				name: [ `${nameCharacter[2]}` ],
				content: `Vậy thì thông tin của bạn đã được xác nhận xong. Chào mừng đến với${nameLocation[0]}, chúng ta có thể sẽ còn gặp lại nhau.`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[0]}` ],
				content: `Vừa dứt lời thì mọi thứ xung quanh tối dần, còn tôi đang rơi trong khoảng không vô định. Vậy là đang chuyển sinh nhỉ? Tuy cơ thể không cử động, nhưng tôi cảm nhận được sự ấm áp và an toàn... Rồi một giọng nói cất lên.`
			},
			{
				color: colorCharacter[1],
				name: [ `Người đàn ông` ],
				content: `Nó là con trai! Con trai đó!`
			},
			{
				color: colorOther[0],
				name: [ `${nameCharacter[1]}` ],
				content: `Tôi đang rất bối rối và không biết giọng đó là của ai. Tôi cố mở mắt...`
			},
			{
				color: colorCharacter[1],
				name: [ `Người đàn ông` ],
				content: `Được sinh ra trong đêm thu, tên con sẽ là... ${nameCharacter[1]}!`
			},
			{
				color: colorOther[0],
				name: [ `???` ],
				content: `Trong không gian tối đen của mùa thu, ánh sáng yếu ớt lấp ló từ ngôi nhà, một sinh linh bé nhỏ đã ra đời và mang đến làn gió mới...`
			}
		]
	}
]