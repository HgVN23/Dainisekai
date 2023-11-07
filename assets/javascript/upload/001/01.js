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
	// 			class: ``,
	// 			name: [ `` ],
	// 			content: ``
	// 		},
	// 	]
	// },
	{
		chapter: 15.5,
		title: `Chuyện xảy ra sau đó`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau khi kể cho họ về “cuộc phiêu lưu” và xác nhận hoàn thành nhiệm vụ thì tôi cùng Tổ đội ra về. Dường như nhóm tôi đã tạm thời thoát khỏi mớ rắc rối này. Nhưng mà người của hiệp hội Mạo hiểm giả có lẽ sẽ còn hỏi bọn tôi để lấy thêm thông tin. Hơn nữa, tôi còn lỡ để lộ『Kho chứa Không gian』lúc lấy vật phẩm để xác nhận hoàn thành nhiệm vụ nữa chứ. Ẩu thật, sau này cũng bị để ý cho coi. Hầy...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ắt xì!`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]} bị lạnh à?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À không. Chắc cha mẹ nhắc đến mình vì về muộn đây mà.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `... Tiếc là mình không xem được phản ứng của em ý sẽ thế nào.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Trò giải trí của cậu lạ thật. Mà cảm ơn vừa nãy cậu xin xác của Ngân Lang, bọn tôi cần nó để nghiên cứu.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Không có gì, tôi biết bên hiệp hội không thể tự nhiên làm thế được mà. À, để tôi lấy nó ra khỏi『Kho chứa Không gian』.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Ơ khoan... Trời...`
			},
			{
				class: `think`,
				name: [ `${nameC[17]}` ],
				content: `${nameC[16]} lấy ra xác của Ngân Lang đặt trên bàn, máu chảy đầy ra từ những vết thương rồi nhỏ xuống mặt sàn. Tôi muốn mắng cậu ta một trận nhưng đã cất công giúp cho hiệp hội như vậy rồi nên đành bỏ qua. Tôi thở dài...`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Được rồi! Nghĩa vụ của tôi đã xong, giờ xuống uống bia đây!`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Ừ ừ, uống bao nhiêu cũng được. Tôi mời.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Khoan đã anh ${nameC[16]}. Những lần uống bia trước của anh vẫn còn chưa tính tiền. Lần này trưởng hiệp hội có mời anh uống nhưng nó không bao gồm những lần trước đó đâu. Tốt nhất anh nên trả chỗ tiền đó đi.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Thôi nào em, chỉ có hai hay ba cốc thôi đúng chứ. Để ta trả tiền cũng...`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Thùng...`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Thùng?`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Thay vì dùng từ “cốc” thì trưởng hiệp hội nên dùng từ “thùng”. Và trưởng hiệp hội cũng không muốn biết số tiền mà anh ${nameC[16]} phải trả đâu. Tất nhiên số tiền đấy không chỉ tính có mỗi một ngày.`
			},
			{
				class: `think`,
				name: [ `${nameC[17]}` ],
				content: `${nameC[15]} trông có vẻ giận dữ... Không, chắc chắn là đang giận dữ. ${nameC[16]} đột nhiên tiến lại gần ${nameC[15]}, cậu ta đưa tay phải lên nắm vào cằm của em ấy và nhẹ nhàng nâng lên để nhìn thẳng vào mặt. ${nameC[15]} có chút giật mình sau hành động vừa rồi của ${nameC[16]}.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Quý cô xinh đẹp như bông hoa bình minh đây không nên làm mặt cau có như vậy đâu nha. Nếp nhăn sẽ để lại trên khuôn mặt xinh xắn này đó.`
			},
			{
				class: `think`,
				name: [ `${nameC[17]}` ],
				content: `${nameC[15]} sau khi nghe xong lời đó liền đỏ hết mặt lên rồi gạt tay của ${nameC[16]} ra. Em bắt đầu lúng túng, không thể nhìn thẳng vào mặt của ${nameC[16]} và lời nói không còn dõng dạc như trước nữa.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `X-xinh đẹp? A-anh chỉ n-nói vậy để e-em không còn b-bực nữa thôi đúng không?`
			},
			{
				class: `think`,
				name: [ `${nameC[17]}` ],
				content: `${nameC[16]} đột ngột nắm chặt đôi bàn tay của ${nameC[15]}. Cậu ta khiến em ấy phải nhìn thẳng vào mắt cậu.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Không. Em đúng là xinh đẹp thật mà. Sẽ có khối đứa đàn ông muốn theo đuổi em đó, chỉ có kẻ ngốc mới không chọn em thôi. Riêng anh thì... chắc không thể nào sánh ngang được với vẻ đẹp của em, ${nameC[15]} à.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `V-vậy à...`
			},
			{
				class: `think`,
				name: [ `${nameC[17]}` ],
				content: `${nameC[15]} ngại ngùng không còn nhìn thẳng mặt của ${nameC[16]} nữa.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Như vầy đi, anh mời em bữa tối nay được không? Dù sao em cũng vẫn chưa ăn gì nhỉ?`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Ừm... được thôi...`
			},
			{
				class: `think`,
				name: [ `${nameC[17]}` ],
				content: `${nameC[15]} dường như còn lẩm bầm gì đó nho nhỏ.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `N-nếu là anh thì đ-được thôi. E-em biết có một nhà hàng gần đây... nếu anh không ngại liệu có thể...`
			},
			{
				class: `think`,
				name: [ `${nameC[17]}` ],
				content: `${nameC[15]} dùng hết can đảm đưa mắt nhìn thẳng mặt ${nameC[16]} nhưng từ lúc nào cậu ta đã không còn trước mặt em ấy nữa mà đứng ở ngoài cửa.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Tuyệt vời! Vậy anh chờ em dưới tầng, anh đi gọi món trước đây và... BIA MIỄN PHÍ! TA TỚI ĐÂY!`
			},
			{
				class: `think`,
				name: [ `${nameC[17]}` ],
				content: `Và thế là ${nameC[16]} chạy xuống dưới tầng, đúng thật là... ${nameC[15]} sau đó cũng di chuyển ra cửa. Tôi không nhìn thấy mặt em ấy nên không rõ biểu cảm ra sao.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `À phải rồi, em có thể bảo ai đó lên dọn đống...`
			},
			{
				class: `think`,
				name: [ `${nameC[17]}` ],
				content: `${nameC[15]} nắm chắc tay nắm cửa, từ từ quay mặt nhìn về phía tôi. Đôi mắt đầy sát khí như muốn lấy mạng ai đó khiến tôi phải rùng mình. Chắc chắn là không ổn rồi ${nameC[16]}, cậu đã làm gì thế này!`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Ta nghĩ lại rồi, em nên đi ăn, ta sẽ lo...`
			},
			{
				class: `think`,
				name: [ `${nameC[17]}` ],
				content: `Tôi chưa dứt lời thì ${nameC[15]} đóng sầm cửa lại.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `... chỗ bày bừa này...`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Mặt trời đã lặn từ lâu, chỉ còn lại ánh sáng le lói từ những ngôi nhà và từ đèn đường chứa đá phát quang soi sáng nền đất. Chú diều hâu bay qua nhóm của ${nameC[1]} vẫn còn đang trên đường về nhà và họ đang nói chuyện gì đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `... Phải rồi ${nameC[9]}, cậu có đề cập đến việc gặp thần? Thế chính xác nó là như thế nào?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Chắc đó chỉ là tưởng tượng lung tung của mình thôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thôi nào, cậu cứ kể đi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Thì... Sau khi đỡ cho ${nameC[10]} thì mình đã bị ngất...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Khi tôi mở mắt ra thì thấy bản thân đang đứng trên thảo nguyên. Không núi, không cây, không sông, chỉ có bãi phẳng thảo nguyên xanh tươi dưới bầu trời xanh không mây. Nhìn xuống dưới chân để ý kĩ mới nhận ra tôi đang đứng ở giữa hình sao sáu cánh được tạo nên từ cỏ màu đậm hơn bình thường.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Đây chẳng phải là tường thành của thị trấn mình sao?`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Đang mải suy nghĩ thì có bóng dáng ai đó tiếp cận từ đằng sau. Tôi cảm nhận được liên bật nhảy ra đằng trước, quay người lại tạo thế thủ. Lấy khiên và chùy ra nhưng nó đã không xuất hiện?`
			},
			{
				class: `unknown`,
				name: [ `???` ],
				content: `Chính xác. Ta đã cho lãnh chúa hiện tại một lời gợi ý.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Vậy... ngài... là thần ${nameC[8]}?`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Ngài trông thật già, râu và tóc đều trắng dài qua cổ. Trang phục thật đơn sơ khi chỉ choàng tấm vải trắng lên người và buộc dây quanh eo. Không thể tin được mình gặp thần... Có lẽ cũng không tệ sau khi mình hi sinh ha.`
			},
			{
				class: `${nameC[8]}`,
				name: [ `${nameC[8]}` ],
				content: `Là ta đây. Cháu có vẻ ngạc nhiên hơn ta nghĩ.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Hừm... Sao bức tượng tạc có dáng người to lớn lực lưỡng mà sao ngài trông...`
			},
			{
				class: `${nameC[8]}`,
				name: [ `${nameC[8]}` ],
				content: `Này! Chưa có ai gặp ta trực tiếp nên làm sao biết được ta như nào mà tạc tượng đâu.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cũng đúng, vậy ngài có giận không?`
			},
			{
				class: `${nameC[8]}`,
				name: [ `${nameC[8]}` ],
				content: `Sao ta có thể giận được chứ? Có hình dạng thế nào cũng được, miễn là vẫn có tín đồ là được, haha.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Ngài dễ tính quá vậy? Hình ảnh về thần nó quan trọng lắm mà, sao ngài có thể cho qua dễ thế được...`
			},
			{
				class: `${nameC[8]}`,
				name: [ `${nameC[8]}` ],
				content: `Ta dễ tính lắm và có lẽ cháu sắp tỉnh lại rồi đó.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Ơ... ngài đọc được suy nghĩ của cháu? Và tỉnh lại?`
			},
			{
				class: `${nameC[8]}`,
				name: [ `${nameC[8]}` ],
				content: `Cháu nghĩ đây là điểm đến cuối cùng? Không phải đâu, linh hồn của cháu chỉ ở tạm đây khi chúc phúc ta ban cho được kích hoạt thôi. Cơ thể của cháu đang được hồi phục.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `NẾU VẬY THÌ HÃY CHO CHÁU TỈNH NHANH LÊN! CÁC BẠN CHÁU CÓ LẼ VẪN CÒN GẶP NGUY...`
			},
			{
				class: `${nameC[8]}`,
				name: [ `${nameC[8]}` ],
				content: `Cháu không cần phải vội đâu, các bạn cháu đã được an toàn rồi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Vậy thì tốt... Ơ... sao cơ thể cháu đang dần tan biến?`
			},
			{
				class: `${nameC[8]}`,
				name: [ `${nameC[8]}` ],
				content: `Như ta đã nói, cháu đang tỉnh lại.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Vậy tại sao ngài lại cho cháu chúc phúc? Chắc chắn cháu có nghĩa vụ gì đó cần hoàn thành phải không?`
			},
			{
				class: `${nameC[8]}`,
				name: [ `${nameC[8]}` ],
				content: `Tại sao à... Đơn giản thì cháu là người được chọn trong vòng quay. Còn nghĩa vụ của cháu là đến đây nói chuyện để ta đỡ buồn, ở đây chỉ có một mình cũng cô đơn lắm.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `XIN NGÀI ĐỪNG CÓ ĐÙA...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Các giác quan của tôi tự nhiên chậm dần và gần như không còn cảm nhận được nữa. Trong khoảnh khắc, tôi vẫn thấy ngài đang nói gì đó mà không thể nghe được.`
			},
			{
				class: `${nameC[8]}`,
				name: [ `${nameC[8]}` ],
				content: `Một lúc nào đó, cháu sẽ tìm được câu trả lời cho bản thân.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Và đó là những gì mình đã gặp trong lúc ngất.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi sẽ vờ như đó chỉ là tưởng tượng của ${nameC[9]}. Thần gì mà nghe kì lạ thật, tôi cũng chả biết phải phản hồi lại thế nào nữa. Não tôi không xử lí kịp thông tin kì lạ này.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[10]}, cậu nghĩ sao?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} nắm chặt áo của ${nameC[9]}, có lẽ nhỏ không muốn nghe gì nữa về chuyện liên quan đến cậu ta. ${nameC[10]} chắc vẫn không chấp nhận chuyện xảy đến ${nameC[9]}. Cậu ấy cũng cảm nhận được điều đó nên đã đổi sang chủ đề khác.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Phải rồi ${nameC[1]}, từ lúc nào mà cậu làm nhiệm vụ thu thập『Thảo dược Hồi phục』vậy?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À, chuyện đó...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Quay lại lúc sau khi “bộ đôi rắc rối” chạy vào rừng và ${nameC[11]} bảo tôi phải đuổi theo họ ngay lập tức.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `... Bộ đôi đó tốt nhất là nên chưa đi quá sâu vào trong khu rừng... Ơ, kia là『Thảo dược Hồi phục』nhỉ?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi vội vã chạy tới kiểm tra xem có đúng là nó không. Phần thân thì giống cây giá đỗ nhưng màu lục và dài hơn một gang tay của người trưởng thành. Trên đó ở khoảng giữa sẽ có hai lá cây viền răng cưa rộng bằng hai ngón tay cái. Còn phần đầu cây sẽ xoắn lại và số vòng xoắn càng nhiều thì thuốc làm ra sẽ càng chất lượng.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Chỉ có hai vòng xoắn à. Chị ${nameC[15]} nói đúng thật, khó mà có thể tìm được hơn ba vòng xoắn ở thảo nguyên.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau đó tôi lấy cái kéo từ『Bộ dụng cụ Nhà bếp』ra cắt cây ở gần sát mặt đất nhất. Lí do tôi không dùng tay bứt luôn là vì có thể sẽ làm gãy thân phần trên và ảnh hưởng tới chất lượng.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thế là được một cây『Thảo dược Hồi phục』, ${nameC[11]} cậu nghĩ... ${nameC[11]}?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi quay ra thì thấy ${nameC[11]} đang nằm trên mặt đất. Giật mình và tự hỏi tại sao nhỏ lại nằm đấy... A. Nhớ lại thì lúc đấy ${nameC[11]} đang đẩy tôi và rồi tôi chạy đi... Mau chóng tiến tới, tôi nhấc nhỏ lên... nhẹ thật...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `『Làm sạch』! Xin lỗi nha, mình không để ý.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Không sao. Mình đang đợi ${nameC[1]}. Vậy giờ đuổi theo bộ đôi nhỉ?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Phải rồi, bộ đôi...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Và thế là bọn tôi chạy vào rừng đuổi theo bộ đôi nhưng được một quãng thì...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `A!『Thảo dược Hồi phục』kìa! Đợi mình chút mình qua lấy.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]}! Nhanh lên!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Lại thêm ở đằng kia nữa, ở đây, ở kia.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]}!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình biết rồi, đợi mình thêm chút... ba xoắn! Có lẽ nào sẽ tìm được cây chất lượng cao quanh đây? Cho mình thêm vài phút... Hí!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mũi tên băng bay sượt qua bên tai trái tôi, đâm trúng vào chỗ『Thảo dược Hồi phục』và đóng băng chúng. Tôi từ từ quay đầu nhìn về phía ${nameC[11]}... Cảm giác như đang nhìn vào cơn bão tuyết vậy.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]}?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]}. Mình nghĩ thu thập đủ『Thảo dược Hồi phục』rồi đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À, nghĩ lại thì cậu nói đúng ha. E hèm. Chúng ta đuổi theo bộ đôi thôi...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau đó tôi chạy thật nhanh đuổi theo bộ đôi bởi nếu chạy chậm có lẽ tôi sẽ bị ăn phát tên mất.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `... Và đó là toàn bộ mọi thứ mà các cậu cần biết.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Hahaha! Mình không nhịn được cười! Không ngờ có ngày cậu cũng phải sợ ${nameC[11]}. Hahaha!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cậu phải thấy vẻ mặt lúc đó của ${nameC[11]} cơ. Đáng sợ lắm đó... Ái ái ái!`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]} nói ai đáng sợ cơ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nừng néo ná nình nữa, ngã nây nờ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi nhìn liếc qua ${nameC[10]} thì thấy nhỏ đang cười khúc khích. Có vẻ bọn tôi đã thành công làm ${nameC[10]} cười trở lại dù chỉ là một chút. Tôi nháy mắt để ra hiệu cho ${nameC[9]} và cậu ta cười mỉm, gật đầu nhẹ một cái. Cuộc trò chuyện kết thúc cũng vừa đúng lúc đến nhà của tôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Được rồi, Các cậu qua nhà mình ăn tối đi. Nay ${nameC[9]} săn nhiều Thỏ Sừng nên chắc mình sẽ có thể làm được món gì đó ngon đấy.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Nhưng mà cậu biết phân tách không đấy?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Chắc mẹ mình sẽ biết... Nếu không ổn thì đành bỏ chỗ nguyên liệu dùng để bán thôi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cũng được. Miễn là cậu nấu ngon.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Chắc chắn là ngon. ${nameC[1]} mà.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Con về rồi!`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Đúng là đồ ăn của ${nameC[1]} nấu ngon thật. Ăn một lần sẽ khó mà quên được hương vị đặc biệt mà cậu ấy làm ra. Tôi mong chờ được ăn món tối nay quá!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `... mai bọn mình sẽ lại qua mà. Chúc may mắn nha.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Tôi đã thay đổi ý định và phóng về cô nhi viện. Có lẽ để lúc khác ăn món do ${nameC[1]} nấu vậy.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Tại sao cậu lại chạy đi vậy nya?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Mình có linh cảm không ổn lắm nếu bước vào. Mà ${nameC[1]} có ${nameC[11]} rồi nên chắc sẽ ổn thôi.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `${nameC[11]} đang ở đằng sau bọn mình nè nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Hả? ${nameC[11]}! Sao cậu lại đi cùng bọn mình rồi?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Một ngày nào đó bọn mình sẽ gặp lại nhau.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Đừng nói như kiểu cậu ấy không còn ngày mai nữa chứ! Hầy... Ngay mai chúng ta tiêu rồi.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Tại sao vậy nya?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cậu đã quên vẻ mặt đáng sợ của ${nameC[1]} rồi à?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Phải rồi... Mình không muốn nhớ lại đâu nya...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]} đáng sợ?`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[10]} đã nhảy xuống khỏi người tôi và đi cùng ${nameC[11]}. Có vẻ nhỏ đã trở lại bình thường rồi, thật tốt... Nhưng lưng tôi đau quá...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cậu sẽ không muốn nhìn thấy một ${nameC[1]} với vẻ mặt vui vẻ nhưng lạnh sống lưng đâu nya... Nhớ lại mình cũng thấy rùng cả mình rồi nya.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mặt khác của ${nameC[1]}! Mình muốn thấy!`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Sao cậu có thể tích cực như vậy được nhỉ nya? Mà về đến nhà rồi nya. Thưa sơ, bọn con về... rồi... nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Vừa mở cánh cửa ra thì sơ ${nameC[5]} đã đứng ngay đó. Chúng tôi không dám nói thêm gì vì mặt sơ đã nói hết tất cả. Có lẽ sơ đã qua nhà của ${nameC[1]} hỏi vài chuyện... Và thế là tối nay bọn tôi đã không thể ăn ngon miệng.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Biết thế ăn ở nhà ${nameC[1]}!`
			}
		]
	},
	{
		chapter: 15,
		title: `Nhiệm vụ hoàn thành`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hiện tại Tổ đội của tôi đang ở trong phòng gặp riêng tư cùng anh ${nameC[16]}, chị ${nameC[15]} và trưởng hiệp hội tên là ${nameC[17]}. Bác ${nameC[17]} vừa bảo bọn tôi kể về “cuộc phiêu lưu” ngày hôm nay.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]}, để mình kể cho nha?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À ừm. Cậu kể đi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Bên hiệp hội đang thu thập thông tin đây mà, đúng như anh ${nameC[16]} đã nói trước đó. Có lẽ họ nghĩ bọn tôi còn trẻ con không hiểu chuyện nên mới nói kiểu như vậy. Chị ${nameC[15]} dường như đang ghi chép mọi thứ, thôi thì cứ làm theo họ để giải quyết nhanh chóng vậy.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau khi ${nameC[9]} kể xong thì tôi và ${nameC[11]} bổ sung thêm một vài chi tiết vào “cuộc phiêu lưu” dưới góc nhìn của bản thân. Còn ${nameC[10]} thì vẫn không nói gì.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Chỉ có một con Ngân Lang thôi à?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng? Chỉ có một con.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Hừm... Có lẽ các cháu may mắn đó, bình thường bọn chúng đi theo đàn cơ. Ít nhất là ba con chứ không bao giờ đi lẻ đâu.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mắt con đó đỏ.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Mắt đỏ?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Bác biết gì về nó à?`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `À, nó chỉ là căn bệnh hiếm xảy ra ở ma vật thôi. Nó khiến cho ma vật điên dại hơn bình thường, nếu các cháu mà gặp một con nào như vậy thì nên né ra và báo lại với bên hiệp hội của bác nhé.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Chỉ là một căn bệnh... liệu nó có đúng là như vậy không nhỉ...? Cảm giác như bác ${nameC[17]} đang giấu giếm điều gì đó.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Rồi rồi, đến lượt tôi kể nha!`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Hầy... Cậu cứ như đứa trẻ to xác vậy.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `... Sau đó tôi vào rừng theo lời em trai kia. Đến nơi thì thấy em ${nameC[1]} đang cầm dao bếp đấu với Ngân Lang. Thật đấy, anh hơi bất ngờ khi có người cầm dao bếp ra chiến đấu đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Kiếm em vỡ tan rồi, biết sao được.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Được rồi, sau đó tôi chạy đến cho một đấm vào đầu con Ngân Lang và thế là nó tiêu.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Một đấm? Anh nói thật chứ?`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `${nameC[16]} không nói đùa đâu. Bác biết thực lực của cậu ta.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[16]}... chẳng lẽ anh là người đấm phát xong việc luôn... Tôi bắt đầu hơi lo nếu như gây sự với anh ${nameC[16]}...`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Sau đó thì ${nameC[1]} ngất chắc vì kiệt sức và vết thương ở tay trái nên là tôi đã cho em uống『Thuốc Ma lực』và『Thuốc Thánh Hồi phục』. Rồi...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Khoan khoan đã! Anh vừa cho em uống gì cơ?`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `『Thuốc Ma lực』và『Thuốc Thánh Hồi phục』?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `『Thuốc Thánh Hồi phục』! Anh đâu cần phải cho em uống loại nghe có vẻ đắt như thế này! Em nhớ không nhầm thì em chỉ bị thương nhẹ ở tay trái thôi mà!`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Không sao đâu, bạn của em cũng có phần mà. Đừng có lo nữa nha.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Cháu cứ gật đầu và chấp nhận đi, bác đã bó tay trước thứ gọi là “bình thường” của cậu ta rồi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `... Anh kể tiếp đi...`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `... Thấy cả ba em còn lại đang nằm nên tôi cũng cho các em uống thuốc. Sau đó thì các mạo hiểm giả ứng cứu cũng tới, phần còn lại cậu cũng biết rồi đó, ${nameC[17]}.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Có vẻ chúng ta cũng nắm rõ câu truyện rồi.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Thực ra có một vấn đề tôi đang băn khoăn... Trước khi cho em ${nameC[9]} uống thuốc thì... tim em ấy đã ngừng đập.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mọi người ai sau khi nghe xong cũng bất ngờ, mặt ai cũng ngơ ngác hết. Chị ${nameC[15]} đang ghi chép cũng phải dừng tay.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `A... anh nói đùa gì vậy. Em vẫn còn ngồi đây cơ mà, hết ${nameC[10]} rồi lại đến lượt anh.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Chắc anh chưa nói cái này cho bọn em nhưng anh không bao giờ nói đùa về mạng sống cả.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Anh... thật à..? Vậy... chẳng lẽ em đang là xác sống?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `CẬU KHÔNG PHẢI LÀ XÁC SỐNG!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cuối cùng ${nameC[10]} cũng chịu nói... ít nhất là nhỏ vẫn ổn... phần nào đó...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `A-${nameC[10]} m-mình chỉ đùa thôi... Đừng buồn nữa, mình vẫn đang nói chuyện với cậu đây đúng không?`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `À ừm... Anh cứ tưởng thật cho đến khi tim em đột nhiên đập lại và vết thương lớn trước ngực tự lành. Thấy vậy anh liền đổ thuốc lên vết thương để em hồi phục nhanh hơn.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `C-cháu có phải là con người không vậy?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cháu... để cháu kiểm tra Bảng trạng thái xem sao... Ủa? Mọi người xem này!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi và mọi người cùng xem Bảng trạng thái của ${nameC[9]} thì thấy cậu vẫn là con người. Nhưng khi lướt xuống phần kỹ năng thì thấy cậu có『Tái sinh』, cho phép người dùng sống lại và hồi nửa lượng máu của bản thân cùng vết thương. Tự động kích hoạt khi hi sinh bảo vệ mạng sống khác và dùng được lại khi bình minh của ngày hôm sau ló rạng. Sao cậu lại có kỹ năng như vậy được chứ? Tôi lướt tiếp xuống đến phần danh hiệu thì thấy『Đấng cứu thế』và phần mô tả ghi “Chúc phúc của thần ${nameC[8]}”. Ra là vậy... có vẻ vấn đề đã được giải quyết.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Chúc phúc từ thần ${nameC[8]}... Ra cháu là cậu bé sáng nhất ở nhà thờ hôm qua.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Từ khi nào mà mình lại có『Tái sinh』vậy nhỉ?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ơ khoan... Vậy là không phải cậu có từ hôm qua?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Không.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Vậy chẳng lẽ... từ lúc cậu ngất... thật đó hả? Tôi nghĩ sẽ nói chuyện này với ${nameC[9]} sau, giờ nói ra chắc sẽ lại thêm rắc tối cho mà xem. Tôi phải kết thúc cuộc điều tra này ngay mới được.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mệt mỏi quá, mình nghĩ mình không còn sức để nghe thêm gì nữa rồi.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Hình như đến giờ các em ý ăn tối rồi thì phải?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tuyệt vời anh ${nameC[16]}, đẩy hay lắm! Cảm ơn anh nhiều!`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `À phải, nói chuyện với các cháu vui quá nên bác không để ý. Các cháu về đi không người nhà lại lo lắng.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng! Nhưng trước đó thì chị ${nameC[15]}, chị xác nhận hoàn thành nhiệm vụ của tụi em được không?`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Được thôi nhưng mà chị đâu thấy...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đây là số『Ma thạch』,『Thảo dược Hồi phục』và bốn『Thẻ Mạo hiểm giả』của bọn em.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Hả! E-em có『Kho chứa Không gian』?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Chị ơi? Xác nhận...`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `À phải rồi, em có muốn bán vật phẩm từ ma vật các em săn không?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Em chỉ có xác của ma vật chưa được phân tách thôi ạ.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Nếu vậy thì em có thể nhờ nhân viên hiệp hội phân tách hộ ở dưới tầng. Thôi, chị đi xác nhận cho bọn em liền đây.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Và thế là chị ${nameC[15]} cầm chỗ vật phẩm tôi đưa và vội vã bước ra khỏi phòng.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Cháu nên cẩn thận khi dùng『Kho chứa Không gian』trước người khác, có thể người xấu sẽ nhắm tới đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cháu biết và cháu tin mọi người ở đây sẽ không nói gì ra ngoài đâu, nhỉ?`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Liệu có không ta?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Em tin anh mà... một nửa.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Không ngờ anh không đáng tin như vậy, anh buồn quá. À mà cho anh xác của Ngân Lang nha, được không?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À, mời anh. Dù sao thì anh cũng là người họ nó để cứu tụi em... Và dùng nhiều lọ thuốc trông rất đắt nữa, làm em thấy hơi áy náy...`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Anh đã bảo rồi, anh còn nhiều lắm mà dùng chả hết. Đây, em xem này.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `A-anh cũng có『Kho chứa Không gian』?`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Ối! Lộ mất tiêu rồi. Giữ bí mật cho anh nhé mấy em.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sao tôi có cảm giác anh ${nameC[16]} cố tình để lộ ra thế nhỉ? Bọn tôi đang nói chuyện với trưởng hiệp hội và anh ${nameC[16]} thì chị ${nameC[15]} từ bên ngoài bước vào với một khay đựng xu đồng, xu vàng và thẻ định danh... Khoan! Xu vàng?`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Chị đã xác nhận xong và xin chúc mừng các em đã hoàn thành nhiệm vụ đầu tiên nhé. Đây là số tiền thu mua vật phẩm mà em đưa.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Em cảm ơn... nhưng em cảm thấy chỗ xu hơi sai... Nhất là một xu vàng này.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Phải rồi, chỗ『Thảo dược Hồi phục』của em đang trong điều kiện rất tốt nên là được tăng thêm xu đồng. Còn xu vàng này thưởng thêm từ trưởng hiệp hội vì cứu người dân thị trấn.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Các cháu xứng đáng mà nên hãy nhận nó nhé.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vậy thì cháu xin nhận. Bọn cháu xin phép ra về, đi nào các cậu.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[10]}, mình nghĩ cậu sẽ không buông mình ra nên bám chắc vào nha. Mình sẽ cõng cậu về nha luôn.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Ừm.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]} giúp! Mình tê chân quá...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thế là tôi quyết định cõng ${nameC[11]} về, một phần cũng là để cảm ơn trước lúc tôi tỉnh lại. Và ${nameC[10]} chắc mai sẽ lại như bình thường thôi... tôi mong vậy.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Lũ trẻ bây giờ khác xưa thật. Cậu nghĩ sao ${nameC[16]}?`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Hừm... Theo tôi nghĩ... mấy em ấy đáng để tôi ở lại hiệp hội một thời gian và theo dõi đó.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Cậu nghiêm túc được không? Tôi đang nói đến vụ Ngân Lang và mắt đỏ.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Tôi đùa tí thôi mà. Làm gì mà căng thế chứ, cậu sẽ lại già hơn bây giờ.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Thế...?`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `A hèm. Cho em xin phép được báo cáo kết luận lí do Ngân Lang chỉ có một mình. Theo như câu truyện của tụi nhỏ và kết hợp với điều tra của hiệp hội thì chính con Ngân Lang mắt đỏ đã sát hại cả đàn của nó.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Chà, tàn nhẫn thật đấy. Vụ này lần đầu anh mới biết.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Vậy là cậu cũng gặp các vụ mắt đỏ à?`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Ừ, ở một số nơi tôi đi qua cũng có bắt gặp ma thú mắt đỏ ở một cá thể hoặc cả đàn, chưa từng thấy trường hợp cá thể trong đàn tàn sát đồng loại. Tôi cảm thấy dường như có thứ gì đó đang tác động tới bọn nó.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Vụ này bọn tôi vẫn đang hợp tác điều tra cùng lãnh chúa. Và có vẻ phía bên vương quốc đã có hành động rồi.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Bí mật nhỉ?`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Một phần, những ai có báo cáo gặp mắt đỏ thì bên hiệp hội đều sẽ hồi đáp lại nó chỉ là căn bệnh hiếm.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Giống như vừa nãy à?`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Tụi trẻ không nên lo lắng về mấy vấn đề này. Người lớn sẽ lo, mấy đứa nó chỉ cần sống thật vui vẻ là được.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Cậu nói phải. Tôi sẽ giải quyết tụi mắt đỏ nhanh thôi, một đấm là được.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Dù sao thì... cậu có biết cô bé ${nameC[11]} là một trong nạn nhân của vụ mắt đỏ hai năm về trước không? Cô bé đó đã mất hết tất cả.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Cô bé tội nghiệp. Nhưng mà, có lẽ em ${nameC[11]} đã tìm ra thứ quý giá sẽ luôn ở bên cạnh em ấy. Nhìn mặt của em trông hạnh phúc lắm.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Mà... hình như tôi quên nói gì đó với nhóc ${nameC[1]} thì phải...`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `À cái đó... chắc sẽ ổn thôi. Tiếc là tôi không xem được phản ứng của em ý sẽ thế nào.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Chú diều hâu đậu ở trên mái nhà của ${nameC[1]} nhìn thấy Tổ đội đã về đến nhà cậu. Dường như ${nameC[1]} đã mời họ qua dùng bữa tối.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Con về rồi!`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ta cần nói chuyện với con chút về vấn đề chiều nay. Ta đợi con trong phòng khách.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thôi rồi thôi rồi! Sao cha lại biết thế này! Tôi cần phải né vụ này mới được!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ờm... mời các cậu vào...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cậu biết gì không, nay ${nameC[10]} trông không khỏe lắm nên mình xin từ chối lời mời nha. Mình về trước đây.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ơ nhưng còn tiền...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cậu cứ giữ đi, mai bọn mình sẽ lại qua mà. Chúc may mắn nha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Vừa dứt lời thì ${nameC[9]} cõng ${nameC[10]} chạy vút đi. Đúng thật là... Không sao, tôi vẫn còn ${nameC[11]}, xin lỗi vì đã lôi cậu vào vụ này.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ chỉ còn cậu thôi... ${nameC[11]}?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Chân mình hết tê rồi. Mai gặp lại.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Từ lúc nào ${nameC[11]} đã xuống khỏi lưng tôi mà không hề hay biết luôn. Nhỏ cũng chạy theo sau nhóm ${nameC[9]}. Nhưng tại sao... ĐỒ PHẢN BỘI! Bỗng một bàn tay ở phía sau nắm chặt vào vai trái tôi.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ồ, có vẻ bạn con nay không qua ăn tối rồi. Chúng ta sẽ có nhiều thời gian nói chuyện đây.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Và thế là tôi đã bị cha nói suốt hơn một tiếng với cái bụng đói meo. May mà mẹ tôi cũng nói đỡ lời nên cuối cùng cả nhà cũng được ăn. Sau đó tôi ngay lập tức leo lên giường ngủ luôn vì đã quá kiệt sức. Thật là một ngày đáng nhớ.`
			}
		]
	},
	{
		chapter: 14,
		title: `Giải cứu thành công`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thanh kiếm đã vỡ, chỉ còn con dao trên tay... Tôi sẽ kết liễu nó... Tôi... có thể...? Đó là những suy nghĩ trước khi tôi từ bỏ bởi nanh vuốt đã sát trước mắt. Vậy mà từ đâu, chàng trai mặc áo choàng dài xanh lá xuất hiện trước mặt tôi. Nắm đấm tay phải đầy máu vẫn còn đang dơ ra trước mắt. Dường như, anh ta đã hạ Ngân Lang chỉ với một đấm?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Rốt cuộc là ai... vậy...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ơ...? Mọi thứ sao lại mờ đi hết rồi...? Tôi mất thăng bằng và ngã ngửa ra sau. Nhưng ngay lập tức anh ấy đã tới đỡ trước khi tôi gục xuống mặt đất.`
			},
			{
				class: `unknown`,
				name: [ `Chàng trai` ],
				content: `Em nghỉ ngơi đi, việc còn lại hãy để mọi người lo nốt nha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Có nên tin vào người này không? Anh ta nói gì đó về “mọi người” nhưng xung quanh đây chỉ có mỗi anh ấy. Dù người này đã cứu tôi trong gang tấc nhưng nó lại khiến tôi không ngừng băn khoăn... Tôi cần phải... tỉnh... táo... Tôi không còn đủ sức lực để mà suy nghĩ gì nữa và đã ngất từ lúc nào không hay.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Khu rừng tuyết...? Tại sao tôi lại nằm ở đây vậy? Chẳng lẽ đã xảy ra chuyện gì sau khi tôi ngất? Chú diều hâu kia sao cứ bay vòng quanh trên trời vậy? Tôi bối rối định ngồi dậy để xem tình hình xung quanh ra sao nhưng mà không cử động được. Rồi một lúc sau có giọng nói từ hướng nào đó phát ra. Tôi cố gắng cất tiếng nói nhưng không nên lời. Và bóng của một sinh vật nào đó đã xuất hiện trước mắt tôi. Nó chỉ nhìn chằm chằm vào mặt tôi và chạm vào tóc. Tôi không hiểu sinh vật đó định làm gì nhưng có vẻ là vô hại...? Tôi nheo mắt để cố nhìn rõ thì xung quanh bắt đầu mờ dần và cái bóng đó hiện ra là... ${nameC[11]}?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]} ngủ ngon không?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cuối cùng cậu cũng chịu tỉnh rồi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ngủ? Mà khoan, chúng ta đang ở đâu đây?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Bọn mình đang ở trong phòng gặp riêng của hiệp hội Mạo hiểm giả.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Phòng gặp riêng, nếu tôi không nhầm thì phòng này thường dùng cho các cuộc trao đổi quan trọng. Ở chính giữa phòng thì có một cái bàn vuông, xung quanh bàn là ghế đệm dài đủ cho ba người ngồi và bên còn lại là ghế đệm đơn dường như là dành cho nhân vật quan trọng.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi nằm trên ghế nhìn liếc qua căn phòng trong khi vẫn còn đang gối đùi ${nameC[11]}. ${nameC[10]} thì bám lấy phía sau ${nameC[9]}, cậu ấy đang mang vẻ mặt bất lực và họ đang ngồi đối diện tôi... Ngày hôm nay không thể kì lạ hơn được nữa... Mà tại sao tôi lại đang gối trên đùi của ${nameC[11]} vậy?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ra là chúng ta được người bên hiệp hội cứu... Mà ${nameC[9]}, cậu đã làm gì ${nameC[10]} vậy?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Mình cũng không biết nữa. Cậu ấy nói gì đó về hình phạt và sẽ không buông ra cho đến khi nào thỏa mãn thì thôi...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cậu nói rõ hơn xem nào.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Hừm... nói sao ta. Sau khi đỡ cho ${nameC[10]} thì mình đã bị ngất và gặp ai đó tự xưng là thần trong tiềm thức...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Hả?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `À... bỏ qua chi tiết đấy đi, chắc do mình tưởng tượng. Sau đó mình tỉnh dậy trên ghế đệm trong phòng này, vừa nhổm người lên thì ${nameC[10]} đã lao thẳng vào mình. Nhỏ cứ nói gì đó về việc mình làm khiên rồi tí thì không còn bao giờ tỉnh lại nữa. Rồi ${nameC[10]} quàng lấy cổ mình và nói đây là hình phạt để mình không bỏ nhỏ. Và từ lúc đấy ${nameC[10]} không nói gì thêm.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Từ lúc tôi tỉnh lại ${nameC[10]} chưa có nói gì cả. Tôi nhìn nhỏ, khuôn mặt đượm buồn trông như đang lo lắng điều gì đó quan trọng sẽ lại rời xa một lần nữa. Nếu những lời ${nameC[9]} vừa nói là sự thật thì... cậu ấy thực sự suýt nữa mất mạng... Tôi đã ra một quyết định sai lầm...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Này! Nừng nó néo ná nình nữa Nyouka!`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]}, bớt suy nghĩ lại và nghỉ chút đi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Làm sao mình có thể không suy nghĩ sau những gì đã... NAU NAU NAU!`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]}. Nghỉ. Ngơi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nược nồi nược nồi.`
			},
			{
				class: `unknown`,
				name: [ `Chàng trai` ],
				content: `Em trai mà nghe lời trước đó thì có phải không bị đau rồi không?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Có lẽ vậy... Khoan! Ai AU!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi giật mình ngã lăn xuống sàn bởi giọng nói này vừa quen nhưng cũng vừa lạ. Cảm giác như là người tôi mới gặp gần đây.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `À, đó là anh ${nameC[16]}, người đã cứu bọn mình đấy.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi ngồi lại lên ghế, nhìn kĩ anh ${nameC[16]} thì trông anh rất trẻ tầm khoảng hai mươi tuổi. Anh có mái tóc màu xanh lá pha chút màu nâu cùng với đôi mắt đen tuyền. Trang phục thì dường như anh lấy tông xanh lá làm chủ đạo kết hợp với màu nâu, đen với trắng. Anh còn đang mặc thêm áo choàng màu lục đậm dài đến cổ chân có mũ trùm đầu. Có lẽ thứ làm tôi tò mò nhất chính là kính chắn gió anh đang đeo để ở trên đầu, không biết tại sao anh đeo nó. Tôi cứ nhìn chằm chằm vào anh ${nameC[16]} cho đến khi tôi nhận ra hành động này có hơi thô lỗ nhưng anh chỉ nở một nụ cười đáp lại. Đây đúng là người đã cứu tôi lúc đó, cái nụ cười này của người trước mặt tôi không thể nào nhầm lẫn được.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Em xin lỗi, em không nhận ra anh ngồi đấy. À ừm, anh tên ${nameC[16]} nhỉ? Em tên là ${nameC[1]}. Thay mặt cả Tổ đội, em cảm ơn anh rất nhiều vì đã cứu Tổ đội của bọn em.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}`, `${nameC[9]}` ],
				content: `Em cũng cảm ơn anh lần nữa.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Anh tên ${nameC[16]}, hân hạnh được làm quen với em. Anh nghĩ người các em nên cảm ơn là cậu em trai đã đến báo với hiệp hội á.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vậy là cậu ta an toàn thoát khỏi rừng... may quá.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Anh chưa rõ sự tình lắm nhưng tí nữa người bên hiệp hội sẽ qua hỏi lấy thông tin đó. Tiện thể thì cảm ơn đã chiêu đãi anh nha.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Chiêu đãi? Ý anh là sao?`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Không có gì đâu. Chỉ là... anh được ngồi xem hai đứa tán tỉnh nhau thôi. Mấy đứa trông đáng yêu lắm!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `BỌN EM KHÔNG TÁN TỈNH NHAU!`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Nào nào, nếu mà anh nói sai thì mặt đâu cần phải đỏ lên như thế đúng không?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ anh ${nameC[16]} cũng có sở thích giống tôi, thi thoảng tôi cũng hay trêu như vậy với “bộ đôi rắc rối”. Nhưng bị trêu ngược lại thì có phần ngại thật. Hành động của ${nameC[11]} hơi bất cẩn... không, tôi cũng có phần hơi tự nhiên khi cứ thế mà trôi theo. Tôi quay ra liếc nhìn ${nameC[11]} thì mặt nhỏ vẫn “lạnh” như bình thường, tất nhiên là ngoại trừ đôi tai lá trúc đỏ chót nổi bật trên nền tóc trắng của nhỏ.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Em trai thấy bé tuyết này đang lúng túng có dễ thương không nè?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Tất nhiên là cậu ấy siêu dễ... A...`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Hửm...? Em định nói gì ấy nhỉ? Anh và cô bé dễ thương này nghe không rõ, em nói lại được không?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Anh được lắm...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Từ lúc nào mà anh ${nameC[16]} đã đứng ở phía sau ghế tôi đang ngồi. Tệ thật, không ngờ anh ${nameC[16]} lại có thể khiến tôi mất cảnh giác dễ dàng như vậy được. Anh giỏi đấy nhưng sẽ không có lần sau nữa đâu. Mà nhìn lại thì ${nameC[11]} dễ thương thật... KHOAN GIỜ KHÔNG PHẢI LÚC NGHĨ VỀ NÓ!`
			},
			{
				class: `unknown`,
				name: [ `???` ],
				content: `${nameC[16]}, cậu thôi trêu mấy đứa nó được không?`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Thôi nào ${nameC[17]}, nói chuyện với mấy đứa này vui lắm.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Một người đàn ông trung niên cao lớn tầm ngoài bốn mươi bước vào căn phòng. Vóc dáng của người đó trông thật vạm vỡ cứ như chiến binh xuất thân từ chiến trường. Mái tóc nâu cạo hai bên mai tạo cảm giác trẻ trung, còn đôi mắt cùng màu lại tạo ánh nhìn có chút đáng sợ. Trang phục thì... đồng phục của hiệp hội? Vậy ra người này là nhân viên của hiệp hội. Theo như anh ${nameC[16]} gọi thì tên là ${nameC[17]} nhỉ? Mà rốt cuộc anh ${nameC[16]} và người này có mối quan hệ thế nào? Hay có mối quan hệ mật thiết gì đó với hiệp hội chăng? Cảm giác lúc nói chuyện cứ như là bạn bè của nhau thay vì kiểu xã giao trong công việc, anh ${nameC[16]} bí ẩn thật.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Một lúc sau thì chị ${nameC[15]} bước vào phòng, chị tiến lại gần bác ${nameC[17]} nói gì đó rồi quay ra đóng cửa. Bác ${nameC[17]} và anh ${nameC[16]} sau đó cũng dừng nói chuyện và về chỗ ngồi của mình. Riêng bác ${nameC[17]} thì ngồi ở ghế đơn, còn chị ${nameC[15]} thì đứng ở bên trái của bác ${nameC[17]}. Đột nhiên bầu không khí cảm giác ngột ngạt hơn khi bác ${nameC[17]} ngồi xuống.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Cậu bỏ vẻ mặt hằm hằm đi được không ${nameC[17]}? Mấy nhóc này bị cậu dọa sợ rồi nè, chẳng trách đứa trẻ nào cứ thấy mặt cậu thì y như rằng chạy mất dép.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Cái này có phải do tôi đâu, chẳng qua do đôi mắt này đấy chứ.`
			},
			{
				class: `${nameC[16]}`,
				name: [ `${nameC[16]}` ],
				content: `Tiếc ghê ta, dù cậu có quý trẻ con đi nữa nhưng mà mấy đứa nó lại né cậu.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Hầy... Biết sao giờ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Không thể tin được bầu không khí trước đó đang rất bí bức vậy mà anh ${nameC[16]} nói vài câu mà cả phòng thoải mái hẳn. Tôi cứ nghĩ anh ${nameC[16]} chỉ là người thích trêu trọc chứ ai ngờ anh còn đọc được cả tâm trạng nữa. Thậm chí còn dẫn dắt lời nói để bọn tôi hiểu được thêm về người đàn ông ngồi ở kia.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `E hèm... Ta vào việc chính thôi nhỉ?`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `À, phải rồi. Bác tên là ${nameC[17]}, là trưởng hiệp hội Mạo hiểm giả của thị trấn Dawn Horizon. Còn bên đây là thư kí của bác, chắc các cháu biết tên rồi nhỉ?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ế? Thư kí? Mình cứ tưởng chị ${nameC[15]} chỉ là nhân viên bên quầy tiếp tân thôi chứ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cho em hỏi chị ${nameC[15]} chút là sao chị lại ở bên quầy tiếp tân vậy?`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `À, chẳng qua là chị muốn nhìn mọi người và đánh giá bằng chính con mắt này. Ngồi trong văn phòng làm việc với mỗi giấy tờ thì khả năng đánh giá sẽ không toàn diện và cũng chán lắm chứ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Bất ngờ thật, chị ${nameC[15]} đúng là thực sự nghiêm túc trong công việc. Chắc chắn chị sẽ trở thành nhân viên siêu ưu tú cho mà xem.`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Trước tiên thì bác muốn cảm ơn Tổ đội『Log Horizon』đã cứu người dân của thị trấn này. Nếu mà không có các cháu thì cậu nhóc kia chắc đã không thể trở về được rồi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Không có gì đâu ạ, cứu người là chuyện đương nhiên mà.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Phải rồi. Các em vừa mới đăng ký làm mạo hiểm giả. Vì một lí do gì đó mà vào rừng. Sau đó cứu người rồi cả Tổ đội đấu với Ngân Lang với cấp độ chênh lệch. Cuối cùng thì tí cả nhóm không còn đường trở về.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi không biết phải đáp lại như nào nữa. Chị ${nameC[15]} đột nhiên trông đáng sợ quá, chắc tại sáng nay chị đã khuyên không nên làm gì nguy hiểm đây mà...`
			},
			{
				class: `${nameC[17]}`,
				name: [ `${nameC[17]}` ],
				content: `Nào nào, quan trọng là tụi nhỏ đã an toàn trở về rồi mà. À, các cháu có thể kể bác nghe về cuộc phiêu lưu hôm nay của các cháu được không?`
			}
		]
	},
	{
		chapter: 13,
		title: `Bảo vệ điều quan trọng`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Ngân Lang, một con ma thú mắt đỏ lần đầu bọn tôi phải đối mặt. Ngay bây giờ tôi, ${nameC[1]}, ${nameC[10]} đang vây quanh nó còn ${nameC[11]} đang ở sau tôi hỗ trợ từ khoảng cách xa. Cả hai bên đều chờ nhau xem ai sẽ khai mở cuộc chiến này trước. Và có vẻ Ngân Lang hành động trước, nó lao thẳng đến phía ${nameC[1]} chắc vì đòn tấn công trước đó của cậu.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]} vẫn đứng im? Cậu ta có kế hoạch gì à? Con ma thú thì ngày càng tới gần. Ngân Lang giơ vuốt phải của nó lên và trước khi tôi định dùng『Che chở』thì ${nameC[1]} đã xoay người về bên phải và nhảy giật lùi về hướng tôi ngay thời điểm nó áp sát. Ngân Lang đã vồ vào tường băng mà ${nameC[11]} đã dựng trước đó. Thì ra cậu muốn làm chậm đi chuyển động của nó một chút. Cứ ngỡ là thành công nào ngờ chân phải của Ngân Lang bám vào tường đưa cả ba chân còn lại lên rồi lấy đà phóng thẳng tới ${nameC[1]}.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Để mình lo cho.『Che chở』.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Tôi mau chóng đỡ đòn lao tới cắn của ma thú cho ${nameC[1]}. Tuy Ngân Lang có bất ngờ nhưng nhờ phản xạ nhanh nó vẫn kịp xử lí tình huống. Nó đổi tư thế giơ hai chân trước đáp vào tấm khiên của tôi rồi hai chân sau đạp lên khiên lấy đà bật ngửa ra sau. Sau khi đáp đất, Ngân Lang lập tức tấn công tôi dồn dập. ${nameC[1]} từ đằng sau lấy lại được thăng bằng ngay lập tức lao thẳng lên bên trái tôi, tay phải cầm kiếm định đâm vào đầu của con ma thú. Chẳng cần phải nói thêm, Ngân Lang liền bật ngược ra sau né được cú đâm đó.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Trượt rồi. Cậu cần phải nhanh hơn nữa đấy.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đây là tốc độ nhanh nhất của mình rồi. Mà, chỉ cần vậy là đủ.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Tôi quay ra nhìn thì thấy ${nameC[1]} đang cười nhếch mép, cậu đang nói cái... Phập! Mũi tên băng của ${nameC[11]} bay thẳng vào bả vai phải của Ngân Lang và trong giây lát nó đã bị lúng túng. Ngân Lang né qua bên trái để quan sát phát bắn từ đâu. ${nameC[10]} từ bên trái của nó liền áp sát được, hai tay nhỏ cầm chắc thanh trọng kiếm về bên trái và vung thẳng vào phần ngực con ma thú, đồng thời cũng kích hoạt kỹ năng『Cường Trảm』. Cú vung của ${nameC[10]} lực đến nỗi Ngân Lang bị bắn đi xuyên qua mấy hàng cây. Chú diều hâu và các loài biết bay bay đầy trên bầu trời do từng hàng cây bị đổ dập. Sau phát chém đó ${nameC[10]} chạy lại chỗ chúng tôi với khuôn mặt hớn hở.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Các cậu có thấy gì không nya? Mình vừa kết liễu con ma thú một cách hoành tráng đó nya! Cụng tay nào nya!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Rồi rồi, bọn mình thấy hết mà. Thấy kế hoạch của mình thế nào?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Quá tuyệt vời luôn nya!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Khoan... toàn bộ trận vừa rồi là kế hoạch của cậu? Sao mình lại không biết vậy?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thì lúc đó cậu chạy ra trước rồi còn đâu.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `... Ra là vậy, cậu tài thật đó. Vậy vừa nãy việc cậu suýt bị tấn công và mình đỡ đòn cho cũng nằm trong kế hoạch của cậu rồi đúng không?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À... Tất nhiên rồi, mọi thứ đều nằm trong kế hoạch của mình mà. Đúng vậy, chắc chắn mình không tính sai đâu.`
			},
			{
				class: `think`,
				name: [ `${nameC[11]}`, `${nameC[10]}` ],
				content: `Chắc chắn là nói xạo (nya).`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Với cú chém của ${nameC[10]} thì không thể nào nó cử... ba vệt sáng?`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Từ trong vùng tối của khu rừng nơi hàng cây gãy đổ, ba vệt ánh tím đen sáng dần. Rồi từ nơi đó, lao thẳng tới chỗ chúng tôi là ba đường lưỡi liềm song song. Ba đứa bọn tôi vì đã chủ quan nên đã không phản ứng kịp. Bùm! Đòn tấn công đã bị hủy do va chạm với cột băng của ${nameC[11]}. Thật không ngờ ngay khi đường lưỡi liềm thoát ra khỏi vùng tối, nhỏ đã bắn một phát mũi tên băng. Mũi tên đó bay đi được nửa khoảng đường thì chạm vào mặt đất, một cột băng từ dưới đâm lên chắn đòn tấn công đó.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mừng hơi sớm rồi đấy các cậu. Nó đến kìa.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Ngân Lang bước đi chầm chậm ra khỏi phần tối của khu rừng. Nó vừa đi vừa gầm gừ đe dọa, lông thì xù hết lên còn ánh mắt đầy sát khí nhìn thẳng về phía bọn tôi như muốn ăn tươi nuốt sống hết cả đám. Cả ba đứa bọn tôi đều sốc và có lẽ người sốc nhất là ${nameC[10]}. Nhỏ lúc này đang vừa bất ngờ vừa lo lắng vừa buồn vì đòn kết liễu không thành công. Đôi tai dạt với đuôi cong xuống đã nói hết lên cảm xúc lúc này của ${nameC[10]}.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Không thể nào... nó vẫn cử động được nya...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Này này... Không đùa đấy chứ, giờ nó nghiêm túc thật rồi...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `MỌI NGƯỜI CHÚ Ý! NÓ ĐANG ĐẾN KÌA!`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Ngân Lang hú ầm lên một phát khiến bọn tôi đều phải tập trung hết vào nơi nó đứng. Và khi tiếng hú dứt, không biết từ lúc nào con ma thú đã ở trên không. Ngân Lang cuộn mình về trước xoay một vòng, móng vuốt chân trước của nó bỗng sáng lên và từ đó phóng ra sáu đường lưỡi liềm. Tốc độ của chúng nhanh hơn lần trước và với khoảng cách gần như này thì ${nameC[11]} cũng không ứng cứu kịp. Tệ rồi đây...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]} từ đằng sau tiến lên trước, cậu đưa đường kiếm từ trái qua phải hướng lên trên phóng ra một lưỡi chém hủy đường lưỡi liềm của Ngân Lang. Có vẻ đó là kỹ năng『Phong Đao』mà ${nameC[1]} đã bảo hồi sáng. Không biết từ lúc nào con ma thú đã ở dưới mặt đất và lao thẳng tấn công ${nameC[1]}. ${nameC[1]} lúc này đang bị đứng chôn chân, chỉ có thể đưa thanh kiếm lên đỡ những đòn vuốt cào liên tiếp từ nó. Mũi tên của ${nameC[11]} bay tới Ngân Lang thì nó liền dừng tấn công và né qua trái. ${nameC[10]} nhân cơ hội lao lên nhưng Ngân Lang đã nhảy lên đúng lúc nhỏ vung kiếm. Ma thú nhận thấy có sở hở, nó giơ vuốt lên định cào ${nameC[10]} thì đòn phong của ${nameC[1]} đã làm cản trở rồi cậu cũng lao lên phản công.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Mọi người lúc này đều đã quá kiệt sức rồi, vậy mà Ngân Lang vẫn không có dấu hiệu bị đuối. Thậm chí sau khi lãnh một đòn của ${nameC[10]} vậy mà... không có vết chém? Tại sao vậy? Vết bắn mũi tên của ${nameC[11]} vẫn còn mà?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]} lùi lại!『Che chở』. Mình không hiểu sao đòn tấn công của ${nameC[10]} và ${nameC[11]} lại khác biệt đến vậy.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Khác biệt... Mình hiểu rồi. ${nameC[11]} dùng “cái đó” đi.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `“Cái đó”? Hi vọng “cái đó” mà ${nameC[1]} nói giải quyết được con này. Sau khi tôi đỡ đòn của của Ngân Lang thì ${nameC[10]} từ mạn phải tôi vung kiếm tấn công. Như thường lệ nó lại né được nhưng từ lúc nào ${nameC[1]} đã áp sát được và trong tay trái cầm con Slime bị đóng băng trước đó đập thẳng vào mặt con ma thú. Chất nhầy của Slime che đi tầm nhìn của Ngân Lang khiến nó mất phương hướng tạm thời. Dù đã mau chóng né nhưng cậu vẫn bị dính một cào từ nó vào cánh tay trái sau khi cố áp sát như vậy.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `NGAY BÂY GIỜ ${nameC[11]}!`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Không rõ kế hoạch này là như nào nhưng khi tôi nhìn về hướng ${nameC[11]} thì thấy nhỏ có vẻ đang dồn hết sức cho phát bắn cuối này. ${nameC[11]} từ đằng xa bắn một đường mũi tên cong lên trời. Khi mũi tên đã bay đủ cao, nó tách ra thành nhiều mũi tên rơi xuống Ngân Lang. Những mũi tên nào không trúng ma thú va chạm với mặt đất sẽ tan vỡ và tỏa ra hơi lạnh bao quanh nơi đó. Vậy là kết thúc rồi...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Tôi thở dài hạ khiên xuống, ai nấy cũng đều đuối sức cả. ${nameC[11]} thì chắc không còn đủ ma lực để bắn cung nữa, nhỏ ngã quỵ rồi. Còn ${nameC[1]} chắc cũng đang cảm thấy khá đau sau khi bị như vậy. Kiếm cắm thẳng xuống đất và cậu dồn hết lực vào tay phải để tựa cố đứng thẳng. Và ${nameC[10]} thậm chí còn ngồi hẳn xuống đất, dù sao thì nhỏ cũng là người đã tấn công liên tục trong suốt trận chiến. Rồi tôi quay ra nhìn lại màn sương lạnh giá bao trùm Ngân Lang, tuy không rõ con ma thú trong đó nhưng có ánh sáng tím le lói... không... đừng đùa chứ... Nó đang hướng đến ${nameC[10]}... Tôi phải chạy... phải bảo vệ... điều quan trọng... chạy... chạy... CHẠY!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `『Che chở』. 『Che chở』. 『Che chở』. 『Che chở』!`
			},
			{
				class: `think`,
				name: [ `${nameC[10]}` ],
				content: `Tôi mệt quá nya. Chúng ta thắng rồi nhỉ nya? Tôi chả muốn đánh nữa đâu nya. Sao trời đột nhiên tối vậy nya? Máu? Sao lại có máu nhỏ... Tôi ngước nhìn lên thì thấy ${nameC[9]} đang đứng trước mặt...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Sao cậu ở đây... Sao cậu lại chảy máu? Nè, trả lời mình đi... `
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `“Tấm khiên” này sẽ luôn bảo vệ cậu. Mình chưa kịp nói xong thì đã bị ${nameC[1]} chen ngang. Tấm khiên của mình nát rồi, nhưng... mình đã bảo vệ được cậu nhỉ?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Kowa...`
			},
			{
				class: `think`,
				name: [ `${nameC[10]}` ],
				content: `Tôi chưa kịp phản hồi lại thì ${nameC[9]} đã ngã về phía trước. ${nameC[9]}? Cậu chỉ mệt thôi đúng không? Nè... Tôi bò đến ${nameC[9]}, lật cậu ta lại. Trước ngực có một vết cắt ngang lớn... Tôi đưa tay lên ngực phải của ${nameC[9]}... không cảm thấy gì...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cậu không phải “tấm khiên” của mình, đồ ngốc...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Chuyện gì vừa xảy ra vậy... Tôi chỉ vừa ngước lên thôi mà... Sao ${nameC[9]} lại nằm vậy? ${nameC[10]} đang nói gì với ${nameC[9]} à? Ngân Lang ra sao rồi... nó vẫn đứng...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]}! Ngân Lang VẪN... ${nameC[10]}?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} đứng dậy, tay của nhỏ có nhỏ máu xuống mặt đất. ${nameC[10]} bị thương à? Không... Móng vuột của nhỏ đột nhiên dài ra... Tai dựng đứng và đuôi thì xù lông lên... Nhỏ quay người lại, lần đầu tiên tôi thấy ${nameC[10]} giận dữ như vậy. Nhỏ đang khóc... nước mắt tuôn chảy từ đôi mắt vô hồn.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ngân Lang, trên mình găm đầy mũi tên từ trong màn sương băng lao thẳng đến ${nameC[10]}. Và ${nameC[10]} cũng không ngần ngại lao thẳng tới khô máu với nó. Cả hai bên cào xé nhau chẳng còn né tránh nữa, mặc kệ vết thương càng ngày càng nhiều.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi rút cây kiếm, chết đứng bất lực nhìn vào toàn cảnh trước mặt. Chết tiệt... Chết tiệt! Chết tiệt! Tại vì tôi... Nếu tôi chọn rời khỏi rừng... chúng ta đã có thể ăn tối cùng nhau... Thỏ Sừng của ${nameC[9]} trông ngon lắm...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ha ha... Nực cười thật.... Mình thật ích kỉ... Mình... không thể bảo vệ bất kì ai...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} thở hổn hển, sức lực của nhỏ có vẻ đã đến giới hạn. Ngân Lang bằng cách nào đó vẫn trên cơ ${nameC[10]} và nhỏ đã gục ngã. Ngay khi Ngân Lang định kết liễu ${nameC[10]} thì một bức tường băng được dựng lên từ hướng của ${nameC[11]} ngăn cách ${nameC[10]} với ma thú.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Chút ma lực còn lại. Mai gặp lại.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Vừa dứt lời thì ${nameC[11]} đã bất tỉnh. Mai gặp lại à... Tôi mỉm cười, cầm chắc cây kiếm trên tay phải lao đến Ngân Lang. Nó thấy tôi di chuyển nên cũng chuyển hướng qua tấn công tôi. Cả hai bên đều đã mệt mỏi nhưng vẫn cố chạy. Tôi giơ ngang thanh kiếm, dồn nén phong cũng như sức mạnh còn lại bao bọc lưỡi kiếm. Con ma thú tiến đến gần và há mõm ra định cắn tôi. Quyết định rồi, chém nó ra làm đôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `BIẾN ĐIIIIIIII!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Keng! Tôi chạy lướt qua Ngân Lang cùng với kiếm trên tay. Xong rồi... Kết thúc rồi... Thanh kiếm của tôi...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Đã vỡ tan... Vứt “thanh kiếm” đi, tôi lôi con dao bếp ra, quay ra nhìn con ma thú, chờ đợi nó lao đến. Tôi đứng đợi... chờ đợi... Tôi nhắm mắt lại, nó còn đang đứng yên và khi mở mắt ra vuốt của nó đã ở trước mặt tôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Tạm biệt.`
			},
			{
				class: `unknown`,
				name: [ `???` ],
				content: `Chúng ta vừa mới gặp nhau mà sao đã tạm biệt rồi?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Trước mắt tôi là một anh chàng mặc áo choàng dài màu xanh lá với mũ trùm đầu che khuôn mặt đã bị gió thổi lật ngược. Khoan... còn Silver... đầu của nó... đâu mất rồi... Còn mỗi phần thân của con ma thú dưới chân tôi... Người này rốt cuộc là ai...?`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Từ hàng cây đằng xa, một bóng đen bí ẩn núp đằng sau đó chứng kiến tất cả mọi thứ. Bóng đen đó dường như đang dùng một loại ma cụ liên lạc.`
			},
			{
				class: `unknown`,
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
				class: `think`,
				name: [ `???` ],
				content: `Khiên và dao găm, tôi chỉ cần vậy là đủ nhưng... tại sao... Tôi chỉ vào rừng để tìm chút nguyên liệu thôi mà. Giờ thì hiểu tại sao cha bảo nên ủy thác cho các mạo hiểm giả rồi. Cũng may “thứ đó” đang bận ăn mấy con ma vật khác, tôi phải rời khỏi rừng ngay mới được.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Cậu trai mặt nhợt nhạt đang nấp sau hàng cây chầm chậm di chuyển tránh xa “thứ đó”. Sau một hồi di chuyển, cậu đã khuất khỏi tầm quan sát của nó. Cậu nhẹ nhõm được phần nào khi đã ra xa con ma thú. Cạch! Cành cây mảnh nằm trên mặt đất đã bị gãy làm đôi do cậu giẫm phải. Một vật thể xám lao nhanh tới cậu với vận tốc không thể nào tránh được nữa. Và thứ duy nhất cậu có thể làm ngay lúc này là bám lấy tấm khiên đeo sau lưng và cố sống sót...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Nếu mình không nhầm thì con Slime đó nhảy về... hướng này nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cậu... nhanh... quá... Đợi mình...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `A ha nya! Tìm thấy Slime...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[10]} đang định nói gì đó rồi nhỏ đột nhiên im lặng. Tôi tiến lại gần ${nameC[10]} với hơi thở hổn hển vì phải chạy đuổi theo. Nhìn nhỏ trông hơi nhợt nhạt, đôi tai thì đang dạt xuống còn đuôi thì nhỏ đang nắm chặt. Tôi đặt tay trái lên vai phải ${nameC[10]} định hỏi xem chuyện gì đã xảy ra thì tay tôi bắt đầu run... ${nameC[10]}? Nhỏ đang sợ hãi? Nhỏ đã chứng kiến điều gì vậy? Tôi hít một hơi thật sâu để lấy lại sự tỉnh táo sau khi chạy quá nhiều. Một mùi tanh nồng xộc thẳng vào mũi làm tôi suýt thì ói ra. Nhưng cũng nhờ mùi tanh đó mà tôi đã tỉnh hẳn khỏi cơn choáng...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `C-chuyện gì đã xảy ra thế này?`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Khung cảnh trước mặt tôi là một bãi cỏ đỏ thẫm, điểm trên đó là các xác chết không toàn thây nằm la liệt mỗi nơi vài mảnh. Tuy đây không phải là lần đầu tôi nhìn thấy máu hay xác chết nhưng... thế này thật là ngoài sức tưởng tượng. Tôi cúi xuống dưới chân thì thấy một bãi nhầy cùng dấu vết để lại. Đây có lẽ là con Slime bọn tôi đang đuổi đã bị một sinh vật không rõ dẫm bẹp. Chạm thử vào dấu chân mà con ma vật đó để lại, vẫn còn ấm, tức là nó chỉ vừa mới rời đi. Tôi tự hỏi cuộc chiến nào đã diễn ra ở đây trước khi chúng tôi đến. Đó là một cuộc chiến sinh tồn hay đây là một cuộc tàn sát? Dù còn nhiều câu hỏi trong đầu nhưng ngay lúc này, tôi biết rằng sinh vật trong cuộc chiến đó vẫn còn đang sống và có thể đang ở rất gần. Tôi liền đứng dậy, hai tay bám vào hai bên vai của ${nameC[10]} từ đằng trước và xoay nhỏ hướng nhìn thẳng vào mặt tôi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Bọn mình phải ra khỏi đây ngay lập tức. Và báo lại với bên hiệp hội Mạo hiểm giả để họ điều tra được chứ.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Ừm...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[10]} có vẻ vẫn còn ám ảnh trước cảnh tượng quá sức vừa rồi. Tôi cần phải nói gì đó an ủi nhỏ mới được, trông nhỏ tội nghiệp quá.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[10]}! Nhìn mình này. Chừng nào còn mình bên cạnh thì “tấm khiên” này sẽ luôn bảo...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Trong khi tôi còn đang nói thì một bàn tay xuất hiện chạm vào vai tôi từ đằng sau. Giọng nói cất lên kề sát bên tai tôi.`
			},
			{
				class: `unknown`,
				name: [ `Người đằng sau` ],
				content: `Cấm chạy!`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Tôi giật mình, hất bàn tay trên vai đi. Trong đầu tôi lúc này chỉ nghĩ đến việc bảo vệ ${nameC[10]}. Tay phải tôi bám lấy vai phải của ${nameC[10]} kéo nhỏ sát vào người tôi. ${nameC[10]} có hơi chút bất ngờ sau hành động vừa rồi, tai và đuôi nhỏ dựng đứng hết cả lên. Tôi ôm chắc ${nameC[10]} vào lòng và nhảy ngược hướng ra sau của nhỏ, còn tay trái thủ sẵn khiên che phía trước đề phòng có đòn tấn công ngay sau đấy.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `NGƯƠI LÀ AI! NGƯƠI ĐỊNH... ${nameC[1]}?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Bình tĩnh nào, mình đây. Sao hai cậu căng... Chuyện gì đã xảy ra ở đây vậy? Do hai cậu làm?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mùi... Mình sẽ qua chỗ khác đứng đợi...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Nếu là do hai đứa này thì đã tốt. Chuyện gì đó tồi tệ đã xảy ra, cần rời khỏi đây ngay lập tức.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình có linh cảm chẳng lành, cần phải rời khỏi đây. Nhưng trước đó thì... ${nameC[10]} còn ổn chứ?`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `A! Tôi quên mất mình vẫn đang còn ôm ${nameC[10]}. Tôi vội vàng bỏ tay ra khỏi nhỏ và né sang trái. Phải nói gì đây? Tự nhiên chẳng biết phải nói gì trong tình huống thế này...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Mình nghĩ mình ổn nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Đôi tai của nhỏ lại thẳng đứng và đuôi thì đung đưa như bình thường. Chắc là nhỏ hết sợ thật rồi, tốt quá.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình không rõ chuyện gì đã xảy ra nhưng rời khỏi đây...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Suỵt!`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Đôi tai của ${nameC[10]} dường như đang nghe ngóng điều gì đó. Nhỏ quay người theo hướng đôi tai đang xác định âm thanh và chỉ tay đến. Sao tôi thấy cảnh này quen quen...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Có tiếng phát ra ở đằng kia, mọi người có nghe thấy gì không nya?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}`, `${nameC[1]}` ],
				content: `Không.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình có nghe thấy. Ngoài mắt thì tai mình cũng khá thính. Tính sao đây ${nameC[1]}?`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]} đến lúc phải đưa ra quyết định rồi, rời đi hay là đến nơi mà ${nameC[10]} chỉ. Mà bọn tôi cũng đã biết câu trả lời rồi, là bạn từ bao năm nên cũng không còn lạ gì lựa chọn của cậu, trưởng nhóm. À không, gọi là trưởng Tổ đội thì mới đúng chứ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Di chuyển nào mọi người, rời khỏi chỗ này thôi. ${nameC[10]} đi đầu đoàn dẫn đường, ${nameC[9]} ở giữa phòng thủ phía sau, sau đó là ${nameC[11]} tấn công từ xa và mình sẽ ở cuối đoàn lo thủ ở sau và hỗ trợ từ xa, đồng thời sẽ tham chiến nếu diễn biến phức tạp. Nếu không ai ý kiến gì thêm thì dẫn đường đi, ${nameC[10]}.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]} thích khiến mọi người đi từ bất ngờ này đến bất ngờ khác thật sự. Nghe câu đầu cứ ngỡ là ra khỏi rừng chứ. Mà đương nhiên không có một ai ý kiến thêm gì về quyết định cũng như đội hình cả. Thế rồi Tổ đội bắt đầu di chuyển vào sâu hơn trong rừng.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Có vẻ hướng đi của chúng tôi trùng với dấu chân mà con ma thú nào đó để lại. Tại sao bọn tôi cho rằng đó là ma thú thì là vì hình dáng của dấu chân. Khu rừng khá là im ắng đến lạ thường, không biết lũ ma vật đâu hết rồi... Chẳng lẽ là do sự hiện con ma thú kia ở gần đây? Càng đi sâu thì dấu chân bắt đầu đứt quãng dần, thay vào đó là các dấu vết ở trên thân cây. Cách di chuyển của nó thật là kì lạ. Những tiếng gừ, tiếng nói ai đó, tiếng va đập vào nhau ngày càng rõ hơn và lớn dần, lớn dần...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Ngay trước mắt chúng tôi là một bãi đất trống đang diễn ra cuộc chiến giữa một cậu bạn và một con ma thú mà bọn tôi không hề biết. Nhìn qua thì có vẻ cậu bạn đó không có kinh nghiệm trong chiến đấu, kĩ thuật dùng khiên của cậu để lộ nhiều điểm mù quá. Bọn tôi núp sau hàng cây, quan sát tình hình cuộc chiến trước mặt.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ đây là con ma thú mà chúng ta đang tìm. Nhìn giống sói, có bộ lông màu xám khói, mắt thì đỏ ngầu như muốn ăn tươi nuốt sống mọi thứ.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mắt đỏ... Không thể nào... Nó giống hệt con mắt của Ligheep hồi trước đuổi theo mình và cha thì...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[11]} nắm chắc tay áo của ${nameC[1]}, dường như một phần kí ức mà ${nameC[11]} không muốn nhớ hiện ra. Hi vọng con sói này không liên quan đến bọn Ligheep.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Tôi tiếp tục quan sát, cậu bạn kia có vẻ đã thấm mệt sau khi đỡ những đòn vuốt cào liên hồi của con sói. Mà sao cậu ta không có phản công? Nếu cứ đỡ như vậy chẳng mấy chốc tấm khiên sẽ... Chết không ổn rồi!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]}! Mình phải ra cứu cậu ta ngay!『Cường hóa Thể chất』.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `A... chạy đi mất rồi. ${nameC[10]} theo cậu ta đi, khi ${nameC[9]} đỡ đòn thì cậu sẽ tấn công con ma thú đó. ${nameC[11]} và mình sẽ đưa cậu bạn kia rời khỏi trận chiến, rồi mình sẽ qua hỗ trợ sau.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Tuân lệnh nya.『Cường hóa Thể chất』.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Chết tiệt! Khiên của cậu bạn kia vỡ rồi. Chỉ còn một chút nữa là đến chỗ cậu bạn kia, cố lên... một chút nữa... trong tầm rồi!『Che chở』. Đây là kỹ năng đưa bản thân xuất hiện trước đòn tấn công vào mục tiêu được tôi lựa chọn để có thể đỡ đòn ngay lập tức.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Mặc dù tôi đã xuất hiện kịp thời để đỡ đòn tấn công nhưng không ngờ cú cào của nó lại lực như vậy. Tôi cùng cậu bạn sau lưng bị nó đẩy lùi một khoảng. Sau đòn đó tôi hơi loạng choạng và chưa kịp định hình lại thì con ma thú đó đã ngay lập tức xông thẳng tới định cắn tôi. Cũng may ${nameC[10]} đến kịp, hai tay nhỏ cầm chắc thanh trọng kiếm vung vào ma thú. Cảm thấy bị đe dọa, nó liền lộn ngược lại về phía sau và né thành công cú vung kiếm của nhỏ. Mặc kệ trúng hay trượt, hiện giờ ${nameC[10]} đang liên tục tấn công con ma thú để câu thêm thời gian cho bọn tôi. Cả hai bọn họ người lúc tấn công người lúc né không ai nhường ai.`
			},
			{
				class: `unknown`,
				name: [ `Cậu bạn` ],
				content: `Cứ tưởng Ngân Lang cho mình tiêu đời rồi chứ. Phải rồi, về bộ lông các cậu không...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Cậu bạn này nói nhanh quá, chắc vẫn còn hơi sốc vì suýt nữa thì bị giết. Mà theo như lời của cậu bạn thì con ma thú kia là Ngân Lang.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Bình tĩnh nào. Dừng lại một chút để thở đi đã.`
			},
			{
				class: `unknown`,
				name: [ `Cậu bạn` ],
				content: `Không, cậu không hiểu, về bộ lông...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nghe mình này, giờ mình cần cậu lập tức về thị trấn báo cáo với hiệp hội Mạo hiểm giả ngay. Bọn mình sẽ ở đây cầm chân Ngân Lang, con này không dễ xơi đâu.`
			},
			{
				class: `unknown`,
				name: [ `Cậu bạn` ],
				content: `Nhưng... Thôi được rồi, cảm ơn ${nameC[9]} và mọi người nhiều. Mình đi về báo cáo với hiệp hội ngay.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Mà khoan... sao cậu ta biết tên tôi? Hay là ai đó vừa nãy nói tên tôi? Cậu bạn sau khi nói cảm ơn liền lập tức chạy về hướng ra khỏi khu rừng mà ${nameC[1]} đã chỉ. Ngân Lang từ xa đang tấn công ${nameC[10]}, thấy cậu ta chạy lẻ liền nhảy vòng qua người nhỏ và đuổi theo.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Trước khi tôi định dùng『Che chở』thì một mũi tên băng từ đằng sau tôi bay đến giữa cậu bạn với con ma thú. Trên đường mũi tên bay, đằng sau của nó tỏa ra các bông tuyết rơi xuống mặt đất và từ đó đâm lên các cột băng nhọn. Một kỹ năng dựng tường để phòng thủ diện rộng. Nhưng nào ngờ, trước khi Ngân Lang bị chặn lại thì nó đã bật nhảy. Cú nhảy của nó có thể qua cả tường bằng? Không ổn rồi! Tôi phải chạy đến... ${nameC[1]} ở mặt bên kia tường băng nhảy qua đúng thời điểm Ngân Lang đang ở trên không. Cậu dùng phong thuật để thổi bay con ma thú về mặt đất. Tuy là đòn phong đó không gây được sát thương bởi Ngân Lang trước khi đáp đất đã kịp thời phản xạ tránh được va chạm. Nhưng mục tiêu ban đầu đã thành công. Và như vậy, cậu bạn đó đã thoát khỏi cuộc chiến an toàn.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Chú diều hâu đậu trên cây quan sát Tổ đội『Log Horizon』đang bao vậy con ma thú. Giữ chắc tấm khiên, cầm chắc trọng kiếm, giương sẵn cây cung và sẵn sàng cào xé. Giờ trận chiến của họ mới thực sự bắt đầu.`
			}
		]
	},
	{
		chapter: 11,
		title: `Nhiệm vụ đầu tiên (2)`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} đánh thức tôi dậy sau một giấc ngủ trưa. Có vẻ như cả đám đã nghỉ ngơi đủ để tiếp tục hoàn thành nhiệm vụ. Còn tôi vẫn đang còn nửa tỉnh nửa mơ vì nằm dưới tán cây mát mẻ cùng làn gió nhè nhẹ thoang thoảng thổi qua. Thật là dễ chịu, tôi không hề muốn di chuyển khỏi chốn thư thái này. Cho dù là thế, tôi vẫn còn việc cần phải làm. Nếu chỉ có một mình thì tôi sẽ vẫn nằm tiếp nhưng với cương vị trưởng Tổ đội, quản lý mọi người hoàn thành nhiệm vụ là ưu tiên hàng đầu. ${nameC[11]} đưa tay ra, có vẻ như nhỏ muốn kéo tôi dậy. Tôi đưa tay ra nắm lấy, bàn tay của ${nameC[11]} thật là mềm mại và ấm áp mà không hề lạnh. Tôi đứng dậy với cơ thể còn hơi nhức mỏi, chắc bởi ngồi tựa vào cây ngủ, tôi vặn mình để cơ thể thoải mái hơn chút. Được rồi, sẵn sàng cho nhiệm vụ tiếp theo.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nghe này các cậu, theo kế hoạch đã bàn sáng nay thì tiếp theo chúng ta sẽ hỗ trợ ${nameC[10]} và ${nameC[11]} làm nhiệm vụ săn Slime. Trước tiên chúng ta cần...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi chưa kịp nói xong thì ${nameC[10]} đã cắt lời. Trông nhỏ có vẻ rất hào hứng, tai thì dựng đứng còn mắt cứ sáng lên trông như không thể đợi được thêm nữa.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Không cần phải nói thêm nữa nya. Trước tiên chúng ta cần phải tìm ra Slime đúng không nya?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Vậy thì mình sẽ tìm cùng cậu, coi như là cảm ơn trước đó đã giúp mình nha.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Được thôi nya. Vậy thì hai bọn mình chạy trước đây, tìm được vị trí thì mình sẽ báo lại sau nya.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ê khoan đã hai cậu! Ý mình muốn nói là trước tiên chúng ta phải dọn dẹp chỗ này đã!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thế là “bộ đôi rắc rồi” đã chạy vút đi mà không nghe thấy tôi nói gì. Bộ đôi đó đúng là nhanh nhảu thật. Dù sao thì tôi cũng không hẳn là trưởng Tổ đội, bọn tôi chưa bàn về vấn đề này. Chẳng qua tôi có cảm giác như vậy vì tôi đứng ra làm một số việc như là đăng ký và đặt tên Tổ đội, lập ra kế hoạch thời gian làm nhiệm vụ, mang một số đổ tiếp tế như là đồ ăn nước uống và một vài vật dụng... Ủa khoan? Đó có phải là những thứ mà trường Tổ đội hay làm không ta? Sao cảm giác nó sai sai thế nào ấy nhỉ? Mà thôi... phải dọn nhanh để ra chỗ bọn họ thôi. Tôi thở dài, nhìn về phía chỗ bọn tôi nghỉ ngơi thì thấy ${nameC[11]} đang dọn dẹp đồ đạc. Tôi cứ tưởng ${nameC[11]} cũng đi theo bộ đôi ngay sau đó vì đây là nhiệm vụ của nhỏ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ờm... ${nameC[11]}? Sao cậu vẫn còn ở đây vậy? ${nameC[10]} đi làm nhiệm vụ săn Slime rồi kìa?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Phải dọn đống đồ bày ra trước. Bộ đôi đó sung sức lắm. Lể cả có nghe thì cũng làm cho mau chóng để đi làm mấy việc của các cậu ấy muốn.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vậy là cậu có nghe thấy lúc mình nói một mình à... Ngại thật đấy...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Bị ${nameC[11]} thấy tôi nói một mình ngại thật... Mà may là ${nameC[11]} có nghe thấy tôi nói, có thêm người ở lại giúp dọn dẹp thì sẽ nhanh thôi. Cần phải dọn nhanh rồi còn ra chỗ của bộ đôi mới được.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Không. Mình nghe thấy lúc trước khi ${nameC[1]} bị ngắt lời do ${nameC[10]}.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nhưng... mình còn chưa đề cập gì mà?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình đã ở bên ${nameC[1]} khá lâu để hiểu ${nameC[1]} muốn nói gì mà.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Vậy ${nameC[11]} hiểu tôi đến vậy cơ á? Còn tôi... tôi vẫn chưa thể thấu hiểu nhiều về ${nameC[11]}, có lẽ cả “bộ đôi rắc rối” mà thậm chí là cả bản thân... Tôi sau khi nghe vậy nhịp tim dường như đã lệch một nhịp. Phải chăng đây là cảm giác bị người khác nắm thóp... Hay là cảm xúc... chắc không phải đâu.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]} có điều gì muốn nói không? Mình đang chờ nghe ${nameC[1]} nói.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À... ừm... Cảm ơn cậu đã ở lại giúp mình nha, ${nameC[11]}.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Không phải là điều mình muốn nghe nhưng vậy cũng được. Không có gì.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Xung quanh ${nameC[11]} xuất hiện vài bông tuyết lấp lánh và đôi tai lá trúc lại ve vẩy. Nhưng... không phải lời cảm ơn ư? Tôi vẫn không thể hiểu nổi nhỏ... Con gái đúng là khó hiểu thật.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Chú diều hâu đậu ở trên cây nơi mọi người nghỉ ngơi đã tung cánh bay qua nơi ${nameC[10]} đang làm nhiệm vụ săn Slime. Bộ đôi trông có vẻ như vẫn đang tìm kiếm Slime.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Tại sao mãi không thấy Slime đâu nya! Chị ${nameC[15]} bảo có nhiều lắm mà nya!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Chị có bảo là nhiều chứ không bảo dễ kiếm. Nhưng thường Slime phải nhiều mà ta... Thậm chí nó còn to khoảng bằng đầu con người. Chẳng lẽ các mạo hiểm giả khác săn hết rồi?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cũng không trách được bởi Slime săn dễ, mà số lượng cũng nhiều nữa nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Slime ở vùng này có màu giống cỏ nên hơi khó tìm. Chắc chúng ta chưa tìm kĩ thôi. Phải chi có manh mối xung quanh đây...`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `${nameC[9]} vừa bước đi vừa nói vừa ngó nhìn xung quanh nên đã không để ý đường trước mặt. Rồi cậu đã trượt chân và ngã ra đằng sau. Cú ngã khiến cho ${nameC[10]} nghe thấy từ xa phải chạy vội tới xem có chuyện gì.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `NYA! ${nameC[9]}, CÓ SAO... Nya! Cậu vừa dẫm phải con Slime này nya. À không... đây chỉ là chất nhầy Slime thôi nya. Nhưng chúng ta chỉ cần lần theo vệt nhầy của Slime là được rồi, ${nameC[9]} tuyệt thật đó nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Mình mà lại. Cậu có thể tiếp tục khen mình... sau khi giúp mình đứng lên được không?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Nya...`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Sau khi ${nameC[10]} kéo ${nameC[9]} đứng dậy thì bộ đôi lần theo vết nhầy của Slime để lại và đã dẫn họ đến một bãi đá nhỏ gần bìa rừng. Ở đó đang có bầy Slime tụ tập lại xung quanh và có vẻ bọn chúng đang trốn khỏi thứ gì đó. Thường thì Slime hay di chuyển vô định nhưng nếu có cảm giác bị đe dọa thì chúng sẽ tìm nơi để trốn.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Có vẻ đám Slime này đang trốn mạo hiểm giả xuất hiện trước đó thì phải. Trông có vẻ đông đó, có lẽ chúng ta nên đợi... Này!`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Chưa dứt lời, ${nameC[10]} đã chạy thẳng lên tảng đá lớn mà bọn Slime đang trốn sau đó. Hai tay cô nắm chắc thanh trọng kiếm, đưa đường kiếm hướng từ bên phải phía dưới lên phía trên quá đầu trong khi bật nhảy khỏi tảng đá. Trên không trung, cô vung kiếm đập mạnh xuống mặt đất khiến xung quanh tỏa ra trấn động. Tuy rằng cú vung không trúng con Slime nào vì khi ${nameC[10]} ở trên không trung, bọn Slime đã nhận ra và nhảy ra hướng khác. Nhưng, những con mà gần ${nameC[10]} nhất đã không né được trấn động từ cú vung kiếm xuống mặt đất nên đã bị choáng và mất phương hướng. Và đó là kỹ năng『Cường Trảm』mà ${nameC[10]} đã sử dụng. Sau cú đập kiếm đó, ${nameC[10]} liền đổi tư thế ngay lập tức, cô cầm chắc thanh trọng kiếm trong tay, vung một vòng từ trái qua phải kết liễu các con Slime đang bị choáng ngay lập tức.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Tuyệt vời nya! Mình săn đủ số con yêu cầu trong nhiệm vụ cùng lúc luôn nè nya! A, mấy con khác bỏ chạy rồi, mình đuổi theo đây nya!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Từ từ đã ${nameC[10]}, nếu không cậu sẽ... Biết ngay mà... Hầy...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[10]} vội vàng định đuổi theo bọn Slime trốn chạy thì đã trượt chân và ngã. Tuy phản xạ của nhỏ thường rất sắc bén nhưng do cầm thanh trọng kiếm trong tay, trọng lượng cơ thể bị thay đổi khiến cho ${nameC[10]} không còn phản ứng kịp. Và có vẻ nhỏ chưa quen với thanh trọng kiếm, dù gì cũng mới nhận được chức nghiệp cũng như vũ khí ngày hôm qua nên chưa thể làm quen được.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Để mình lùa bọn Slime lại cho. Còn cậu cố loại bỏ chất nhầy dích trên người của cậu đi ha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[9]} đuổi theo bọn Slime đang chạy trốn thì... Phập! Phập! Phập! 3 phát mũi tên từ đâu bay tới găm thẳng vào đám Slime và kết liễu chúng. Mũi tên vừa găm vào thì ngay lập tức đóng băng toàn cơ thể của Slime. Mũi tên băng đó được bắn ra từ kỹ năng『Băng Tiễn』của ${nameC[11]}. Tôi và ${nameC[11]} đã dọn dẹp xong và đến nơi bộ đôi đang săn Slime.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Còn vài con nữa là xong nhiệm vụ. ${nameC[10]}... đã làm gì để ra nông nỗi thế này?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} lúc này đang ngồi dưới đất cố gỡ chất nhầy đang dính trên người. Do cách tấn công mạnh của ${nameC[10]} nên chất nhầy trong cơ thể Slime đã bắn lên người nhỏ. Còn ${nameC[11]} tấn công từ xa nên sẽ không cần lo việc bị dính phải.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Ai đó giúp mình với nya! Lông mình nhớt quá và mình không đứng lên được nya... Ở gần đây có hồ nước nào không để mình nhảy tạm xuống nya...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ gần đây không có. Nhưng mình sẽ thử cách này xem.『Làm sạch』`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi dơ lòng bàn tay phải hướng về phía ${nameC[10]}, một luồng gió xoáy nhẹ xung quanh xuất hiện quanh người nhỏ. Chất nhầy dần dần tách ra khỏi lông và trang bị của ${nameC[10]}. Tôi đã học được kỹ năng này trong khi dọn dẹp nhà cửa.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nếu mình dùng được thêm thủy thuật thì『Làm sạch』có thể làm sạch luôn mọi thứ, còn phong thuật của mình chỉ có thể tách vật bám nhất định ra được thôi.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `${nameC[1]} tuyệt vời nya! Tạm thời thế là ổn với mình rồi nya! À mà mình săn đủ yêu cầu rồi nên giờ giúp nốt Hyoukya. Còn cần mấy con nữa vậy nya?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Còn hai con... Đính chính. Còn một con, mình vừa tiện tay bắn thêm lúc ${nameC[1]} dùng『Làm sạch』.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Tính ra bọn mình chưa từng thấy cậu dùng cung bao giờ mà. Sao cậu có thể bắn chuẩn như vậy được?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mắt của Elf khá tinh đó.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Trong lúc mọi người đang nói chuyện thì tôi tiến tới chỗ đám Slime bị ${nameC[11]} hạ, cầm một con lên nhìn kĩ. Có vẻ băng của ${nameC[11]} chỉ đóng băng bề ngoài nhưng dường như Slime không chịu được lạnh nên đã bị hạ. Tôi lấy dao bếp từ『Bộ dụng cụ Nhà bếp』ra, khoét một lỗ đủ lớn để tôi thò hai ngón tay vào lấy『Ma thạch』. Lí do tại sao không đổ chất nhầy của Slime ra ngoài để dễ lấy『Ma thạch』thì là vì tôi định giữ lại để thí nghiệm nó vào lúc nào đấy, rồi cất vào『Kho chứa Không gian』. Tuy là chị ${nameC[15]} có nói nó không có giá trị gì nhưng có lẽ nó sẽ có ích trong vài trường hợp. Và tôi đã lặp lại như thế với các con Slime còn lại của ${nameC[11]}.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Được rồi,『Ma thạch』của Slime mình đã nhặt hết. Giờ chỉ cần một con nữa là...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Suỵt!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi chưa kịp nói xong thì lại bị ngắt lời, có vẻ ${nameC[10]} đã nghe được tiếng gì đó. Đôi tai của nhỏ vểnh lên, định hướng xem âm thanh phát ra ở phía nào. Rồi ${nameC[10]} đã xác định được và chỉ về hướng đó báo hiệu cho ${nameC[11]}.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Bắn về hướng kia nya!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} giương cung lên bắn, mũi tên bay thẳng về hướng Slime đang nhảy vào rừng. Tiếc là nó đã nhảy ra phía sau cây nên cú bắn đó đã bị trượt. ${nameC[10]} thấy vậy liền đuổi theo Slime sâu vào trong rừng và ${nameC[9]} thấy vậy cũng theo sau đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ơ! HAI CẬU QUAY LẠI NGAY! TRONG RỪNG NGUY HIỂM LẮM! CHÚNG TA CÓ THỂ TÌM CON SLIME KHÁC MÀ! NÀY!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Một lần nữa, bộ đôi lại không nghe tôi nói. Tôi thở dài, bất lực và nhìn xuống đất. Tự hỏi vị trí trưởng Tổ đội chắc không hợp với tôi. ${nameC[11]} đặt hai bàn tay sau lưng tôi, đẩy tôi về trước như đang bảo phải đuổi theo họ ngay vậy. Chị ${nameC[15]} có bảo người mới không nên vào rừng vội, có nhiều ma vật nguy hiểm tồn tại trong đó. Gác suy nghĩ vu vơ sang một bên, tôi cần phải đuổi theo họ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Rồi rồi. Không cần phải đẩy mình nữa đâu. Bộ đôi đó tốt nhất là nên chưa đi quá sâu vào trong khu rừng.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Chú Slime bị ${nameC[11]} bắn hụt đang nhảy sâu vào trong rừng. Chú cứ nhảy mãi cho đến khi cắt đuôi được Tổ đội của ${nameC[1]}. Rồi, một bàn chân của ma thú có bộ lông bạc từ đâu dẫm bẹp chú Slime. Mồm của con ma thú đó đang nhai ngấu nghiến một con ma thú khác bằng bộ hàm sắc nhọn có thể thấy từ bên ngoài. Còn đôi mắt thì đỏ ngầu như màu máu tươi vậy. Con ma thú vừa bước đi vừa nhai rồi biến mất khỏi nơi chú Slime tội nghiệp đã bị dẫm bẹp.`
			}
		]
	},
	{
		chapter: 10.5,
		title: `Nếu như ta chưa từng gặp nhau`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nếu như, chúng ta chưa từng gặp nhau thì giờ đây tôi sẽ đi về đâu nhỉ? Liệu rằng, tôi có thể trở thành con người như bây giờ nếu thiếu các cậu? ${nameC[9]}, ${nameC[10]} và ${nameC[11]}... những cái tên này... họ là ai vậy nhỉ?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi tên ${nameC[1]}, là một người chuyển sinh đến thế giới này bởi Văn phòng Re:Life. Cha tôi tên ${nameC[4]} là một người lính. Và mẹ tôi tên ${nameC[3]} là thợ may vá và cũng là nội trợ của gia đình. Tôi đang ở thị trấn có tên gọi là Dawn Horizon. Ngày qua ngày là chuỗi ngày bình yên sống bên cha mẹ mới của tôi. Luyện kiếm cùng cha, giúp đỡ việc nhà cùng mẹ, âm thầm luyện ma pháp vào ban đêm.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mặc dù, tôi không gây rắc rối gì cho cha mẹ, nhưng có thể nhận thấy sự lo lắng qua lời nói của họ. Chắc vì... cách nói của tôi không bình thường so với các đứa trẻ khác. Tôi ít giao tiếp với người khác ngoài gia đình và đồng thời cũng không có bạn bè. Cơ thể tôi tuy như đứa trẻ nhưng linh hồn bên trong lại là người trưởng thành nên cách cư xử có phần không phù hợp. Tôi thay vì lựa chọn đeo lên chiếc mặt nạ để diễn vở kịch thay đổi bản thân mà ai cũng muốn xem, thì tôi lại lựa chọn không thay đổi và vẫn là chính mình như ở kiếp trước. Có một cơ hội để thay đổi bản thân vậy mà tôi lại không nắm lấy. Thật thảm hại làm sao...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Vào năm mười tuổi, sau khi được ban chức nghiệp tại nhà thờ, tôi liền đăng ký làm mạo hiểm giả. Vào khoảng thời gian đó mọi mạo hiểm giả tại hiệp hội đều coi thường tôi vì có chức nghiệp là『Đầu bếp』. Một『Đầu bếp』được coi là không có khả năng chiến đấu chỉ có thể làm chân sai vặt trong Tổ đội mà thôi. Còn những nhân viên trong hiệp hội tuy không có ác ý gì khi cũng đưa ra lời khuyên cho tôi nhưng trong tôi cảm thấy khá nhói. Mặc kệ những lời nói, tôi vẫn chọn con đường mạo hiểm giả.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau khoảng thời gian làm nhiệm vụ thì tôi đang ở hạng Đồng và đã đủ điều kiện làm bài thi lên hạng Bạc. Nhưng đen đủi làm sao khi bài thi yêu cầu cần phối hợp làm việc với đồng đội. Tôi không quen ai và cũng không có bạn bè nào để nhờ vả. Có nhiều mạo hiểm giả ở hội chắc sẽ sẵn lòng giúp tôi hoàn thành bài thi nhỉ? Không có chuyện đó đâu. Lời bàn tán về tôi là một『Đầu bếp』làm mạo hiểm giả vẫn đang là chủ đề chưa hết nóng trong đây. Từ những người đã biết sẽ truyền đến tai những người chưa biết rồi cũng sẽ biết đến tôi. Và không ai rảnh đến nỗi đi giúp một đứa như tôi để rồi cũng bị cuốn theo những lời đồn. Lời đồn chính là con dao hai lưỡi, danh tiếng lẫy lừng hoặc sự nghiệp tan vỡ nếu bạn dính phải. Tôi đã không nhờ ai và chấp nhận sự thật. Tất nhiên, tôi không từ bỏ làm mạo hiểm giả và vẫn nhận được nhiệm vụ như thường. Nhưng việc thăng hạng sẽ bị tạm hoãn vô thời hạn bởi tôi không có đủ sự tin tưởng dành cho một ai, ngoại trừ gia đình.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Rồi thời gian trôi đi đến năm mười tám tuổi, tôi quyết định rời xa thị trấn để thực hiện mong muốn phiêu lưu khắp nơi của bản thân. Nhưng trước đó, tôi đã quyết định nhận một nhiệm vụ cuối cùng tại nơi đây. Nội dung nhiệm vụ là hộ tống đoàn vận chuyển quặng sắt đến thành phố『Kardia Tou Dasous』, hành trình đi ước lượng mất khoảng ba ngày nếu không phát sinh vấn đề. Thời gian bắt đầu di chuyển vào sáng sớm ngày mai và điểm hẹn là cổng phía Tây Bắc. Tối hôm trước nhiệm vụ, tôi đã nấu bữa tối cho cha mẹ coi như là tiệc chia tay trước khi tôi lên đường, đồng thời cũng chuẩn bị sẵn đồ ăn cho hành trình. Sáng sớm hôm sau, tôi đã tạm biệt cả nhà và đến điểm hẹn. Khi đến nơi, tôi đã thấy một đoàn xe ngựa có ba xe ở giữa đang chất đầy quặng sắt. Và hai xe còn lại ở trước và sau đoàn là xe trống dùng để chở mạo hiểm giả. Mỗi xe chở được sáu người không tính người đánh xe. Có vẻ như xe trước đã đủ người rồi mà xe cuối còn thiếu một nên tôi đành tham gia nhóm đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Tôi có thể ngồi xe cùng mọi người được không? Tôi tên ${nameC[1]}, nhận nhiệm vụ hộ tống đoàn xe.`
			},
			{
				class: `villager`,
				name: [ `Mạo hiểm giả` ],
				content: `Này Viktor, lại xem thằng nhóc này nè.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Từ trên xe, một bóng dáng to lớn của người đàn ông đầu trọc ngoài ba mươi có nước da ngăm đen. Hắn mặc một chiếc áo dạng tanktop ba lỗ cỡ lớn đi kèm với một chiếc quần lửng có cả tá vết rách ở phần đùi, nhìn về phía tôi mà nói với giọng đầy tự cao.`
			},
			{
				class: `villager`,
				name: [ `Viktor` ],
				content: `Mày, người nhỏ con như mày mà cũng muốn làm mạo hiểm giả hả? Nhìn lại bản thân mình đi. Mà... nếu ta không nhầm thì ngươi là『Đầu bếp』mà mọi người vẫn hay nói thì phải?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Phải, vậy có vấn đề gì?`
			},
			{
				class: `villager`,
				name: [ `Viktor` ],
				content: `À không có vấn đề gì đâu... CHỈ LÀ MÀY SẼ CHỈ TỔ VƯỚNG CHÂN MÀ THÔI! Để có thể làm cái nghề này ít nhất phải là có chức nghiệp『Chiến binh』như ta hoặc là『Kiếm sĩ』,『Pháp sư』,『Cung thủ』nhưng『Đầu bếp』ư? VỀ MÀ HỌC NẤU ĂN ĐI!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ngay từ điệu bộ đầu khi hắn và mọi người nói chuyện, tôi đã nhận ra ngay chuyến đi này sẽ đầy rắc rối cho coi.`
			},
			{
				class: `villager`,
				name: [ `Viktor` ],
				content: `Mà ta còn nghe nói ngươi chỉ làm nhiệm vụ một mình nhỉ? Chắc mày phải yếu đuối lắm và là một gánh nặng đến nỗi không có ai cho vào cùng Tổ đội ha.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đừng lo. Tôi sẽ không cản trở đâu.`
			},
			{
				class: `villager`,
				name: [ `Viktor` ],
				content: `Đừng có đứng đấy khoác lác, ngươi mau vác chỗ đồ kia lên xe đi. Thể hiện mình là người có ích đi. Còn bọn bây cứ kệ nó để cho tự vác lên.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thế rồi cả đám cười lớn và lên xe để mặc tôi tự bê những thùng hàng nặng và đồ đạc của bọn họ lên xe. Vì không muốn tạo rắc rối nên tôi chỉ âm thầm nghe theo. Tôi âm thầm sử dụng kỹ năng『Cường hóa Thể chất』để bê vác nên cũng không khó khăn gì. Bọn họ cũng chả bận tâm gì tới việc tôi có thể tự bê chỗ đồ nặng đó. Người đánh xe của tôi thấy chuyện xảy ra như vậy cũng không thể nói được gì bởi cũng chỉ là người được thuê. Rồi đoàn xe đã bắt đầu di chuyển.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Đoàn xe băng qua cánh rừng phía Bắc của thị trấn, hai hàng cây bên đường vụt qua mắt tôi. Và rồi vượt qua khu rừng, một thảo nguyên rộng lớn hiện ra trước mắt. Đoàn xe cứ đi, băng qua những ngọn đồi lớn rồi qua những đồi hoa tràn đầy màu sắc. Cả một bầu trời bao la đầy những con thú bay lượn như chú diều hâu lông nửa trắng nửa lam, còn trên mặt đất trải dài đầy những con thú đang gặm cỏ hay đang nằm nghỉ tận hưởng làn gió mát nhè nhẹ. Không gian này khiến cho chuyến đi trong nhiệm vụ thật là thư giãn. Ngoại trừ việc khoảng không gian hiếm có này đã bị phá hỏng bởi những tiếng nói lớn của hội Viktor.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Trong suốt chuyến đi, Viktor cứ nói mãi về các chiến tích hắn có trong sự nghiệp mạo hiểm giả. Còn đám bạn của hẳn cứ tung hô ca ngợi những điều hắn nói mà chả thèm quan tâm độ chính xác là bao nhiêu. Chắc là đám đó muốn theo kẻ mạnh như Viktor để còn có người bảo kê hộ. Hoặc chỉ đơn giản là không muốn gặp rắc rối với Viktor. Và theo như cuộc trò chuyện đám đó thì Viktor sắp được thăng lên hạng Bạc. Có vẻ Viktor cũng không phải là dạng chỉ biết nói mà không biết làm, ít nhất đó là điều tôi đã nghĩ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mặc kệ cuộc trò chuyện của đám đó, tôi ngồi dựa lưng vào thành xe, trống hai cánh tay lên thành và hướng nhìn về phía trước cố tận hưởng khung cảnh cùng làn gió mát mẻ này. Rồi cả đoàn xe đã dừng lại bên hồ nước có cây táo gần đó để nghỉ ăn trưa. Tôi mở thùng đồ trên xe, đưa tay vào để lấy một ổ bánh mì thì Viktor nắm chắc cánh tay của tôi, kéo lên và đẩy mạnh tôi vào thành xe làm xém thì bị ngã khỏi xe.`
			},
			{
				class: `villager`,
				name: [ `Viktor` ],
				content: `Mày là『Đầu bếp』mà, tự mình kiếm hay nấu cái gì đó mà ăn đi. Chỗ lương thực này là của bọn tao.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Người đánh xe nghe thấy vậy cũng đành phải lên tiếng nói lại với Viktor.`
			},
			{
				class: `villager`,
				name: [ `Người đánh xe` ],
				content: `Thưa ngài, chỗ lương thực này là của chúng tôi chuẩn bị dành cho sáu người mà...`
			},
			{
				class: `villager`,
				name: [ `Viktor` ],
				content: `Hả? Ngươi nói lại cho ta xem nào?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi mau đứng dậy, đưa tay phải đặt lên vai của người đánh xe để ám chỉ rằng đừng nói thêm gì. Rồi tôi bước xuống xe tiến đến chỗ cây táo, ngước nhìn lên cây kiểm tra quả nào đang ở trạng thái tốt nhất. Nếu mọi người mà nhìn tôi lúc này thì chắc nghĩ tôi trông cứ như đứa ất ơ nào đó nhìn chằm chằm vào đồ ăn treo trên cây mà không thể với tới được vậy. Cô gái tóc vàng từ nhóm mạo hiểm giả phía trên chứng kiến việc vừa xảy ra giữa tôi và Viktor thì tiến đến tôi cùng hai ổ bánh mì trên tay.`
			},
			{
				class: `villager`,
				name: [ `Cô gái` ],
				content: `Bạn gì ơi. Mình thấy bạn có vẻ đang gặp chút rắc rối nên mình có mang theo chút đồ ăn cho bạn.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mặc kệ lời cô gái vừa nói, tôi tìm được vài quả táo đang ở trạng thái tốt liền cúi người nhặt một hòn đá nhỏ gần đó, ném thẳng vào cuống quả táo. Quả táo rơi thẳng vào lòng bàn tay trái tôi, rồi tôi lại nhặt một hòn đá nhỏ khác lên để ném đồng thời cũng phản hồi cô gái.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đừng có dính dáng tới tôi nếu không muốn gặp rắc rối.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nói xong tôi lại ném đá để lấy thêm mấy quả táo nữa. Rồi tôi ngồi tựa lưng vào cây ngược hướng đoàn xe nhìn ra mặt hồ để thưởng thức các quả táo vừa hái. Cô gái sau khi nghe tôi nói thì không nói thêm gì mà quay về với nhóm của cô cùng hai ổ bánh mì đem theo.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau khi cả đoàn xe đã nghỉ trưa xong thì lại lên đường cho đến khi trời tối sầm. Cả đoàn xe quyết định sẽ dựng lều qua đêm trên thảo nguyên. Và đến bữa tối tôi biết mình không thể ăn cùng hội Viktor nên tự rời đi ngồi ăn ở chỗ khác. Viktor thấy vậy liền cười lên.`
			},
			{
				class: `villager`,
				name: [ `Viktor` ],
				content: `Ngươi cũng biết thân biết phận không như trưa nay nhỉ? Hahaha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Dù sao tôi cũng chả muốn ăn cùng với hội Viktor nên điều này lại tốt cho tôi. Tôi ngồi ở một góc tối, lấy ra『Bánh mì kẹp trứng』đã làm từ tối hôm trước ăn một mình. Buổi trưa tôi đã không lấy ra ăn vì tôi không muốn ai nhìn thấy việc sử dụng『Kho chứa Không gian』. Sau khi mọi người đã ăn uống no nê thì nhóm bắt đầu phân chia ca gác và tất nhiên tôi đã bị bắt gác đến tận sáng hôm sau luôn.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Tôi bị bắt gác đến tận bình minh. Tại sao vậy?`
			},
			{
				class: `villager`,
				name: [ `Viktor` ],
				content: `Hả? Bọn tao còn phải giữ sức để nếu có nguy hiểm còn bảo vệ được đoàn xe chứ? Mày thì làm được gì? Mỗi gác như này mà không làm được thì mày đúng là vô dụng!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi không nói thêm gì và ngồi gác ở cuối đoàn xe. Ở trên đoàn cũng có người đang gác và anh bạn đó cũng lên tiếng hỏi tôi có ổn không. Và tôi chỉ đơn giản là không đáp lại gì, giơ ngón tay cái lên. Anh bạn đó thấy vậy không nói gì thêm.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Bình minh lên và đoàn xe lại tiếp tục di chuyển. Tôi mắt nhắm mắt mở cố ngồi thẳng người nhưng không thể. Viktor thấy thế thì lại gần, vỗ vào vai tôi và dùng giọng mỉa mai nói.`
			},
			{
				class: `villager`,
				name: [ `Viktor` ],
				content: `Tối qua bọn tao ngủ ngon lắm. Cảm ơn “bạn” nha. `
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `“Bạn” à? Không biết liệu tôi có thể đủ tin tưởng một ai để có thể gọi là “bạn” không nhỉ? Và rồi tôi đã chìm vào giấc ngủ trong khi đang suy ngẫm về thứ được gọi là “bạn”. Một giọng nói vang lên trong đầu tôi, ai đó đang gọi tên tôi. Rồi giọng nói lớn dần khiến tôi phải mở mắt ra.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]}! ${nameC[1]}! Dậy đi nào. Bọn mình nghỉ ngơi đủ rồi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hóa ra là ${nameC[11]} gọi tôi dậy, Tổ đội đang trong nhiệm vụ nhỉ? Giấc mơ vừa rồi thật là chân thực làm sao...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Xin lỗi nha. Ngoài này thoải mái quá nên mình lỡ chìm quá sâu haha. Được rồi các cậu, chuẩn bị săn Slime nào.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}`, `${nameC[9]}`, `${nameC[10]}` ],
				content: `Đã rõ (nya)!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Gửi đến tôi trong giấc mơ. Nếu giấc mơ đó là hiện thực thì tôi mong ${nameC[1]} ở thế giới đó sẽ có được sự công nhận xứng đáng và nhất là có được một người đáng tin cậy để có thể gọi là “bạn”.`
			},
		]
	},
	{
		chapter: 10,
		title: `Nhiệm vụ đầu tiên (1)`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tổ đội『Log Horizon』của tôi đang đứng ngơ ngác trước sáu bảng lớn treo trên tường, đính chằng chịt trên đó là những tờ nhiệm vụ. Mỗi bảng đại diện cho từng hạng, còn nhiệm vụ đều được phân chia hợp lí, tùy vài trường hợp bị đánh giá sai. Bảng phía xa quầy tiếp tân nhất là dành cho hạng Sắt và gần nhất là dành cho hạng Mythril. Bọn tôi tiến tới bảng hạng Sắt, liếc đi liếc lại tìm nhiệm vụ thích hợp cho bản thân.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Được rồi, mình sẽ lấy nhiệm vụ săn Thỏ Sừng. Phần thưởng tuy chỉ có vài xu đồng nhưng chúng ta có thể bán nguyên liệu từ ma vật và nhất là『Ma thạch』`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `『Ma thạch』là nơi chứa ma lực hoặc có thể nói là sinh mệnh của ma vật. Đây là nguồn tài nguyên thiết yếu để có thể chế tạo ra các ma cụ và vài thứ khác. Thế nên, việc thu mua『Ma thạch』là chưa bao giờ giảm sức hút.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Còn mình thì chọn nhiệm vụ diệt Slime nya. Có vẻ phần thưởng cũng tương đương như nhiệm vụ mà ${nameC[9]} chọn nya.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình lấy nhiệm vụ giống ${nameC[10]}. Nhiều nhiệm vụ lặp đính trên bảng thật. ${nameC[1]} chọn nhiệm vụ nào?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À, mình chọn thu thập『Thảo dược Hồi phục』. Vừa đơn giản, vừa nhẹ nhàng để khởi đầu, cũng không quá tệ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi ngước lên nhìn đám bạn sau khi đọc tờ nhiệm vụ thì thấy đầu họ đang hơi cúi xuống trông cứ như vừa làm gì có lỗi vậy. Tôi khá bối rối khi bầu không khí tự nhiên lại thành ra như này, thật khó xử.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ờm... Các cậu? Có chuyện gì à? Sự hào hứng vừa nãy đi đâu hết rồi?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cậu không chọn nhiệm vụ đi săn cùng bọn mình vì đang giận lúc hồi sáng à? Mình xin lỗi, chắc bọn mình đùa hơi quá trớn rồi.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}`, `${nameC[11]}` ],
				content: `Xin lỗi cậu (nya)...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ngày hôm nay thật hết sức lạ. Các cậu ấy khiến tôi bối rối hơi nhiều trong sáng nay rồi, đến nỗi phải thốt lên.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Dừng lại một chút để mình suy nghĩ cái. Ngày hôm nay các cậu quay mình mấy vòng rồi đấy.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nghĩ lại xem hồi sáng đã có chuyện gì... Chắc là lúc ở trước cửa rồi. Trời, làm mọi người hiểu lầm hết rồi. Lúc đó tôi chỉ bối rối khi các cậu ấy nói vậy chứ không có lí do gì để giận cả. Ngược lại, tôi còn thấy vui khi được quan tâm như vậy. Giờ cần phải giải thích thế nào để phá tan bầu không khí này mới được đây... Tôi vỗ tay nhẹ để mọi người chú ý.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Được rồi. Về hồi sáng trước cửa nhà thì mình không có giận, chỉ là mình bất ngờ và bối rối thôi. Thế nên là các cậu đừng bận tâm về vấn đề đó nữa, nhé?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Nếu cậu đã nói vậy... Thế thì... sao cậu không chọn nhiệm vụ đi săn cùng bọn mình vậy?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi nở nụ cười, đưa tay trái lên sau đầu và giơ tờ nhiệm vụ đang cầm bên tay phải lên.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Chỉ là... khởi đầu mình muốn làm nhiệm vụ gì đó nhẹ nhàng đôi chút ý mà.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cả đám đã ngỡ ngàng trước câu trả lời đơn giản của tôi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Vậy thôi à...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Ra là vậy... nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nụ cười vừa nãy của tôi thật là gượng gạo. Không biết đã bao lần tôi sử dụng nó như là một lí do để tránh né rồi. Sự thật là... tôi chưa từng xuống tay với sinh vật sống nào... trừ các con côn trùng làm phiền tôi. Có vẻ trong thế giới này, đây là việc hết sức bình thường và hiển nhiên. Và sẽ đến một lúc nào đó tôi cũng sẽ phải như vậy vì nhiều lí do khác nhau phải ép buộc làm vậy.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]}, chỉ mỗi thế thôi nhỉ?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} đang nhìn chằm chằm vào tôi. Dường như cô ấy đã nhận ra gì đó. Tôi biết ${nameC[11]} có trực giác nhạy bén nhưng không nghĩ mình dễ bị đọc vị như vậy. Tôi cố đánh trống lảng để né câu nói của ${nameC[11]}.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À mà... chúng ta đã chọn được nhiệm vụ rồi thì đem đến cho chị ${nameC[15]} xác nhận vào thẻ đi nhỉ?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `... Cậu nói phải.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} không còn hỏi thêm gì, chắc linh cảm mình đã nhầm. Cả Tổ đội sau đó đến bên chỗ chị ${nameC[15]} để xác nhận nhiệm vụ vào thẻ và hỏi thêm một vài thông tin cần thiết về nhiệm vụ. Rồi cả nhóm rời khỏi hiệp hội, đích đến là thảo nguyên gần cánh rừng nên Tổ đội quyết định ra thị trấn từ cổng Tây Bắc. Bóng dáng của một người bí ẩn lướt nhanh qua Tổ đội. Tôi bất giác quay đầu lại nhìn, người bí ẩn đó đang mặc áo choàng dài trùm đầu màu lục dần biến mất sau cánh cửa của hiệp hội. Tôi thẫn thờ đứng yên nhìn cánh cửa đóng lại, điều gì đó mách bảo thân thế của người này không bình thường. Đám bạn của tôi thấy vậy liền đứng lại gọi, tôi không bận tâm nữa mà tiếp tục di chuyển đến cổng Tây Bắc.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau khi ra khỏi thị trấn, khung cảnh hiện ra trước mắt chúng tôi trông thật là tự do. Thảo nguyên thì xanh tươi bạt ngàn, còn bầu trời thật trong xanh với những đám mây trôi nhè nhẹ. Chúng tôi đứng một lúc, cảm nhận cơn gió mát thổi từ ngoài biển vào tận gần đến cánh rừng. Từng loại cây cỏ hoa lá nhẹ nhàng đung đưa theo gió trên mặt đất. Đôi chỗ có những tảng đá to nhỏ nhấp nhổm nằm trên thảo nguyên. Và cũng có vài cái cây trơ vơ một mình trên cánh đồng, trông cứ như là cái ô lớn dành cho những ai mệt mỏi có thể dừng chân lại nghỉ ngơi vậy. Cảm giác này thật khiến tôi phải thốt lên.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thật là sảng khoái đó mà.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}`, `${nameC[10]}`, `${nameC[11]}` ],
				content: `Phải (ny)ha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mọi người gật đầu đồng ý quan điểm với tôi, rồi Tổ đội cũng bắt tay vào làm nhiệm vụ.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Được rồi, như đã bàn trên đường thì mọi người sẽ hỗ trợ mình làm nhiệm vụ đầu tiên nhỉ?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Đúng rồi nya. Sau đó sẽ đến nhiệm vụ của mình và Hyoukya. Và cuối cùng là Shuunya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Theo như chị ${nameC[15]} đã nói thì bọn tôi có thể hỗ trợ nhau để hoàn thành nhiệm vụ nhưng chỉ ở mức vừa phải. Chị có lí giải là nếu hỗ trợ quá mức thì kinh nghiệm chiến đấu của người nhận nhiệm vụ sẽ giảm. Đồng thời để hoàn thành nhiệm vụ săn thì người nhận nhiệm vụ sẽ phải là người kết liễu cuối cùng nếu đó không phải là nhiệm vụ yêu cầu Tổ đội. Lí do là vì hiệp hội sẽ kiểm tra lịch sử ma thú đã săn trong thẻ để xem có phải đúng người đó hoàn thành nhiệm vụ hay không.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Vì buổi sáng đã xảy ra nhiều thứ nên giờ chỉ kịp hoàn thành nhiệm vụ của ${nameC[9]}. Trưa chúng ta sẽ ăn uống và nghỉ ngơi. Rồi chiều sẽ hoàn thành nốt chỗ nhiệm vụ còn lại.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Xin lỗi mọi người nya. Vì mình sáng nay nên bị tốn thời gian nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Đôi tai của ${nameC[10]} dạt xuống và đuôi không còn đung đưa, đó là biểu hiện của nhỏ khi buồn hoặc hối lỗi. Tôi và ${nameC[11]} thì khó mà khiến ${nameC[10]} phấn chấn lên dễ dàng được nhưng đối với người còn lại thì...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[10]}, cậu cũng đâu có cố ý đâu. Hay như này đi, cậu hãy giúp mình tìm hố của Thỏ Sừng được không? Chỗ này cỏ hơi dày nên mình khó mà để ý được. Mình tin cậu sẽ tìm được nhanh chóng thôi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} nghe ${nameC[9]} nói vậy liền tươi tỉnh hẳn, đôi tai dựng đứng và đuôi lại đung đưa.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Được rồi, mình sẽ cố hết sức để tìm ra hố một cách nhanh chóng nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} nói xong liền phóng đi tìm luôn. Cả ${nameC[11]} và tôi đều giơ ngón cái của tay phải hướng về phía ${nameC[9]}, tất nhiên là cậu ta không hiểu được ý của bọn tôi. Sau một vài phút cả Tổ đội đi tìm hố thì ${nameC[10]} đã tìm ra được một chỗ.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Tuyệt vời thật đấy ${nameC[10]}. Cậu siêu thật.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Hehe, xoa đầu và khen mình tiếp đi nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ ${nameC[10]} đã quen với việc ${nameC[9]} xoa đầu rồi nên có thể coi đây là việc thường ngày. Dù sao thì thấy “bộ đôi rắc rối” thân nhau cũng tốt. Tôi cũng muốn xem tiếp vở kịch này lắm nhưng mà nhiệm vụ cần hoàn thành.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[9]}, bắt lấy hòn đá nhỏ này mà ném vào hố dụ nó ra đi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Rồi, cảm ơn nhiều. Mọi người hãy tránh xa ra nha. Cẩn thận Thỏ Sừng đổi mục tiêu tấn công sang các cậu đấy.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau câu nói đó mọi người liền lùi lại, còn cậu ta đứng cách hố một khoảng rồi ném hòn đá vào. Một lúc sau có một cái đầu nhô lên, Thỏ Sừng nhìn chằm chằm vào ${nameC[9]} một lúc rồi lao lên như tên bắn. Cũng may ${nameC[9]} đã cản được nhờ tấm khiên nên cậu không bị thương. Nhưng phải công nhận lực bật nhảy của Thỏ Sừng đúng là rất khỏe, đến nỗi ${nameC[9]} còn tí thì bị ngã sau khi đỡ.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Tê tay thật. May mà cha ${nameC[1]} dạy chiến đấu không thì không đỡ nổi mất. Có lẽ mình đã bất cẩn rồi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thỏ Sừng giống với loài thỏ ở thế giới trước, chỉ khác là trên đầu nó có một cái sừng nhỏ bằng một đốt ngón tay cái và có khả năng dùng kỹ năng. Ở vùng của tôi thì nó có bộ lông nâu nhạt, đôi mắt đen óng, đuôi xù lông như cục bông và đôi tai dài che được cả mắt nó. Loài này khá là thù địch, chỉ cần có động vật hay con người ở trước mặt đều sẽ tấn công. Mà phương thức tấn công của Thỏ Sừng là dùng kỹ năng『Cường hóa Bật nhảy』để tăng sức bật nhảy húc đầu vào đối thủ. Tuy sừng của chúng ngắn nhưng nếu đâm trúng những chỗ hiểm cũng đủ để khiến đối thủ chịu thiệt thòi lớn. Hơn thế nữa phần sọ của Thỏ Sừng khá cứng nên sau mỗi lần húc chúng sẽ không bị choáng, thậm chí khi chúng chạm được mặt đất sẽ ngay lập tức tấn công tiếp. Nếu mà đánh cả bầy Thỏ Sừng thì khả năng thua là rất cao trừ khi phòng thủ của bạn cực tốt. Theo lời của chị ${nameC[15]} nói về Thỏ Sừng là như vậy.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau một hồi quan sát ${nameC[9]} thì tôi đã phát hiện ra điểm yếu của Thỏ Sừng, tôi hét lớn.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[9]}! Đừng để chạm đất!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[9]} liền hiểu ý của tôi ngay lập tức. Khi Thỏ Sừng tấn công, cậu đã hướng cái khiên chéo lên đẩy nó bay lên. Giờ thì ở trên không nó không thể làm gì được nữa, ${nameC[9]} cầm chắc cái chùy ở tay phải vung lên kết liễu chỉ trong một phát. Với khả năng hỗ trợ thì tôi có thể điều khiển gió để hất tung Thỏ Sừng lên hộ nhưng điều đó sẽ khiến ${nameC[9]} thiếu hụt khả năng. Cho gợi ý thế này là tốt nhất.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[9]} lấy một con dao nhỏ, rạch phần ngực ra để lấy『Ma thạch』.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cuối cùng cũng được... Hết cả hơi... Không ngờ chiến đấu với người và ma thú lại khác biệt đến thế.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cứ để con đó mình cầm hộ cho. Còn vài con nữa thôi là hoàn thành nhiệm vụ rồi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Phải rồi... Mình quên mất yêu cầu của nhiệm vụ . Trời ạ!`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Để mình tìm hố giúp cho, cậu cứ nghỉ ngơi chút đi nya.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình với ${nameC[1]} đi chuẩn bị đồ ăn trưa ở chỗ bóng cây đằng kia. Cố găng lên.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Hầy... Cảm ơn nhiều. Được rồi, tiếp tục thôi nào!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau khi săn được thêm vài con nữa thì ${nameC[9]} đã thấm mệt. Cậu cùng ${nameC[10]} đang cầm chỗ vừa săn tới nơi bóng cây nơi tôi với ${nameC[11]} dọn để ăn trưa.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Nhiệm vụ hoàn thành. Mình chưa bao giờ xuống sức như này cả.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Chắc cậu chỉ đang đói thôi nya. Tí ăn đồ do ${nameC[1]} làm là lại khỏe ngay mà nya.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]}, cậu có thể đưa mình chỗ Thỏ Sừng cậu đang cầm được không?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Được thôi nya. Nè cầm lấy... NYA! ĐÂU MẤT RỒI NYA? CẬU VỪA LÀM GÌ VẬY NYA?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Bình tĩnh nào ${nameC[10]}. Mình chỉ cho vào『Kho chứa Không gian』để cho gọn và giữ cho thịt vẫn tươi ý mà.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `『Kho chứa Không gian』là điều ước thứ hai của tôi. Và đúng như tên gọi, vật phẩm ở trong không gian đó sẽ được giữ nguyên trạng thái như lúc cho vào. Đặc biệt, không thể chứa sinh vật có nhận thức đang còn sống. Lúc này, bộ đôi mặt đơ ra không tin vào điều vừa chứng kiến.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Thì ra là vậy... Mình chả hiểu gì hết cả! Cậu có biết số người có thể dùng『Kho chứa Không gian』chỉ đếm được trên đầu ngón tay không?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Phải đó nya. Và cậu lại là một trong số đó nya... Nè ${nameC[11]}, chắc cậu đã biết trước rồi nhỉ nya?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Ừm... Từ vài phút trước đấy khi ${nameC[1]} cất con Thỏ Sừng. Rồi lấy ra thảm trải để ngồi cùng hai giỏ đồ ăn và bốn túi đựng nước.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Hẳn nào, mình tự hỏi ${nameC[1]} lấy mấy thứ này từ đâu ra... Giờ thì biết rồi. Cậu còn có thể làm gì để khiến bọn mình ngạc nhiên nữa nhỉ?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mọi người đều quay ra nhìn tôi. Có vẻ tôi đã trở thành tâm điểm mất rồi. Thôi thì các cậu ấy đang có tâm trạng vui nên là vào tiết mục chính thôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Được rồi, hãy nhìn vào hai giỏ đồ ăn đây. Trưa nay chúng ta sẽ ăn『Bánh mì kẹp trứng』.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nguyên liệu gồm bánh mì, trứng gà, cà chua và rau xà lách. Đầu tiên bóc rau xà lách ra, sau đó rửa sạch và để ráo nước. Cà chua thì cũng rửa sạch rồi thái lát thành miếng nhỏ. Trứng đập vào bát, cho muối nếu ăn đậm hoặc cho đường nếu ăn ngọt, khuấy đều rồi tráng trứng cuộn. Cuối cùng bánh mì rạch một đoạn ở giữa và cho trứng, cà chua và xà lách vào phân chia đều nhau là được.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À, bên phải là mình làm vị ngọt, còn bên trái là làm đậm. Mình vẫn chưa biết khẩu vị của các cậu thế nào nên đành làm hai loại.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Nhìn trông đơn giản vậy mà sao không có ai làm nhỉ. Thôi mình đói rồi, mời các cậu ăn... Ồ! Ngon thật.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Ngon quá đi nya.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Bên trong trứng vẫn mềm nên ăn cùng với bánh mì sẽ dễ ăn hơn. Có cả cà chua kèm theo nên bánh mì ăn sẽ đỡ khô. Còn xà lách làm nhạt đi vị trong miệng để lúc sau ăn lại thấy ngon miệng, không bị dễ chán.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} lại trở thành nhà phê bình ẩm thực nữa rồi. Mà tôi thấy vui khi họ thích đồ ăn tôi làm. Đồng thời tôi cũng biết được một chút khẩu vị của mọi người. Bộ đôi có vẻ là thích ăn đậm, còn ${nameC[11]} giống tôi thích ăn đồ hơi ngọt. Được rồi, phải cố gắng làm thêm nhiều món hơn nữa mới được.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Nè, ai ăn hộ mình xà lách được không? Mình không thích ăn... Ủa nó đâu rồi?`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Chú diều hâu vụt bay qua cắp rau xà lách của ${nameC[9]} và đem lên cây ăn. Còn ${nameC[1]} nằm dưới tán cây, nhìn lên bầu trời và mắt cậu nhắm lại từ lúc nào không hay. Liệu cậu có thể đang mơ gì nhỉ?`
			}
		]
	},
	{
		chapter: 9,
		title: `Hiệp hội Mạo hiểm giả`,
		dialogue: [
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Ái chà, nay dậy sớm thế Shu? Con đang làm bữa trưa đó à?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Chào buổi sáng, mẹ. Hôm qua con có nói nay đi đăng ký làm mạo hiểm giả rồi mà?`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Phải ha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nhóm tôi đã quyết định sau khi nhận được chức nghiệp sẽ đăng ký làm mạo hiểm giả cùng nhau luôn. Vừa đúng lúc tôi làm xong đồ ăn trưa thì các cậu ấy cũng đã đến.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thôi con đi đây, các bạn ý đang đợi ở ngoài rồi. À mà con có làm bữa sáng cho mẹ đó. Con chào mẹ.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Vậy mẹ cảm ơn nhé. Đi đường an toàn nha Shu.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Đám bạn đứng đợi tôi trước cửa nhà và như mọi khi, “bộ đôi rắc rối” vẫn to mồm như thường.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình đây! Các cậu có thể nhỏ mồm chút được không?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Xin lỗi nha! Mà nhìn tấm khiên lớn và cái chùy gai của mình nè. Mình đã quyết định đây là vũ khí của『Thánh kị sĩ』.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nhìn mọi người trông thật hào hứng với vũ khí mới trong tay. Vật phẩm là vũ khí hoặc công cụ liên quan đến chức nghiệp tạo được ra bằng ma lực. Chúng có thể chuyển hóa ngược lại thành ma lực nếu không bị tổn hại lớn. Nghe có vẻ tiện lợi nhưng cái tên mà mọi người gán cho những món đồ này là vật phẩm khởi đầu. Lí do là vì không thể tạo vật phẩm khác ngoài loại ban đầu, không thể tạo thêm nếu vật phẩm trước còn tồn tại và không thể tinh chỉnh vật phẩm.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Còn mình dùng trọng kiếm của『Kiếm sĩ』nya. Nhìn trông có vẻ nặng nhưng khi cầm lên thì khá là nhẹ đó nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Một phần cũng là do chức nghiệp tương thích với vũ khí. Nhưng tôi nghĩ là do thể chất đặc biệt của ${nameC[10]} nên cầm mới không thấy quá nặng. Nhìn nhỏ cầm trọng kiếm một tay cứ khua khua trông hãi thật...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vũ khí của các cậu trông ổn lắm. Còn của ${nameC[11]} thì... cung nhỉ?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Cung phép của『Cung thủ』. Chỉ cần truyền ma lực vào cung để tạo mũi tên bắn là được.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cây cung hay đó. Nhưng... khá tốn ma lực nhỉ?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Đúng là vậy... Còn vũ khí của ${nameC[1]} là... dao bếp?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ờm... Nói sao đây... Mình chọn công cụ『Bộ dụng cụ Nhà bếp』của『Đầu bếp』nên là chỉ có dụng cụ nấu ăn thôi, haha...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `『Bộ dụng cụ Nhà bếp』của『Đầu bếp』được tôi tùy chỉnh bản thân trước khi chuyển sinh. Cho phép tôi tốn ma lực để lấy bất cứ dụng cụ nhà bếp tồn tại trong『Dainisekai』.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nhìn vẻ mặt của các cậu ấy thì chắc đang tỏ vẻ thương hại tôi đây. Có lẽ nên nói gì đó để mọi người bớt lo lắng lại.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình vẫn sẽ ổn thôi. Nhìn này, mình có kiếm của cha đưa và con dao bếp mà. Thậm chí là cha có dạy mình vài đường tự vệ rồi nên đừng lo.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Thực ra mình đang băn khoăn với cái công cụ cậu chọn cơ. Nhưng mà nếu gặp nguy hiểm thì mình sẽ dùng tấm khiên này bảo vệ cậu.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cả mình nữa nya. Mình sẽ dùng trọng kiếm này chém bay nguy hiểm luôn nya.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình sẽ không để thứ gì nguy hiểm tiếp cận ${nameC[1]}.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Các cậu ấy hào hứng quá ha... Nhưng... tôi vui khi được mọi người quan tâm nhiều đến vậy.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À... ừm... Cảm ơn mọi người. Thế giờ chúng ta đến... Sao lại có diều hâu bay quanh đây nhỉ?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Ê ${nameC[1]}! Đừng nói ra chứ!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} đang cố kiềm chế bản năng của tôi nhưng có vẻ không thể rồi. Có lẽ sẽ cần thêm vài năm nữa...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Trời! Đuổi theo ${nameC[10]} mau!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Bằng một cách nào đó thì cả nhóm tôi cũng đã đến hiệp hội Mạo hiểm giả. hiệp hội thật lớn cùng bảng hiệu to đùng trước mặt tiền, mặc dù nơi đây chỉ là thị trấn. Nhìn qua kiến trúc thì vật liệu chủ yếu là từ gỗ nhưng không mất đi sự tinh tế. Khi vào bên trong, đông đúc mạo hiểm giả với những phong cách ăn mặc và chủng loài khác nhau. Thậm chí ở đây có cả quầy đồ ăn nhẹ cho mạo hiểm giả nữa, chắc đó là một phần lí do hiệp hội mới lớn như vậy.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Hiệp hội trông tuyệt thật đấy.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Phải đó nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thẫn thờ một lúc, tôi ra hiệu mọi người di chuyển do các mạo hiểm giả xung quanh dần để ý đến. Tiến vào sâu hơn, tôi bắt đầu nghe thấy vài tiếng xì xào về cậu bé『Đầu bếp』đã đánh thắng nhóc quý tộc ${nameC[12]} trong trận giả chiến. Tôi tạm thời coi như không nghe thấy gì để né rắc rối.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Có quầy trống kìa, đi theo mình nào các cậu.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Các quầy xung quanh còn đông đúc, nên chúng tôi quyết định đến quầy còn khá vắng phía bên phải. Sau một hồi chờ đợi, trước mắt chúng tôi là nụ cười niềm nở của chị tiếp tân khá xinh đẹp với mái tóc dài vàng óng, cùng đôi mắt xanh sáng như pha lê nhìn chúng tôi với sự vui vẻ lại thoáng chút tò mò. Bộ trang phục cũng thật đơn giản, không khác biệt quá nhiều so với những tiếp tân, nhưng cũng tôn lên dáng vẻ đầy sức sống của một thiếu nữ tuổi đôi mươi. Không ngạc nhiên lắm khi nhiều mạo hiểm giả nán lại quầy chút ít sau khi nhận nhiệm vụ, nhưng với họ, chị vẫn giữ nguyên được phong thái chuyên nghiệp, cũng như nụ cười tự tin.`
			},
			{
				class: `unknown`,
				name: [ `Tiếp tân` ],
				content: `Chào mừng các em đến với hiệp hội Mạo hiểm giả chi nhánh Dawn Horizon. Có vẻ... các em lần đầu đến đây nhỉ?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Sao chị biết hay vậy nya?`
			},
			{
				class: `unknown`,
				name: [ `Tiếp tân` ],
				content: `Chị làm ở đây cũng được một khoảng thời gian rồi và khả năng nhớ của chị khá tốt đó.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Chúng tôi phải thừa nhận chị dễ gần thật và nụ cười của chị thật khiến người khác cảm thấy thoải mái.`
			},
			{
				class: `unknown`,
				name: [ `Tiếp tân` ],
				content: `Vậy chị xin giới thiệu chị tên là ${nameC[15]}. Các em muốn đăng ký làm mạo hiểm giả nhỉ?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `Cả nhóm` ],
				content: `Đúng rồi ạ (nya).`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Nếu vậy thì mời các em lần lượt chạm vào『Quả cầu Trạng thái』. Nó sẽ hiện thông tin Bảng trạng thái của các em và truyền thông tin vào『Thẻ Mạo hiểm giả』.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Lần lượt mỗi người trong nhóm tôi lên làm và rồi khi đến lượt tôi...`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Xem nào... ${nameC[1]}, chức nghiệp『Đầu bếp』... Khoan đã『Đầu bếp』ư?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng? Có vấn đề gì không ạ?`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `À ừm... Em có chắc về việc làm mạo hiểm giả không? Ý chị là chức nghiệp không có kèm kỹ năng chiến đấu khá là bất lợi cho em. Và khả năng gặp nguy hiểm sẽ còn cao hơn bình thường. Tất nhiên em vẫn có thể đăng ký, chị chỉ muốn em cân nhắc lại thôi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Làm chị ${nameC[15]} lo cho tôi mất rồi. Mà nói về chức nghiệp này yếu cũng không sai. Vài trường hợp xấu có thể khiến đồng đội gặp rắc rối và nguy hiểm vì không thể tự đảm bảo an toàn. Nhưng tôi tin kỹ năng của mình sẽ bù vào thiếu sót đó. Trước khi tôi kịp mở miệng thì ${nameC[9]} đã lên tiếng.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Chị không phải lo cho『Đầu bếp』của nhóm em đâu. Bạn ý khá lắm.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Đúng đó nya. ${nameC[1]} còn đánh thắng cả ${nameC[12]} trong trận đấu kiếm nữa mà nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Đúng đó.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Vừa dứt lời, tôi cho mỗi người một cái “cốp” vào đầu.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Bộ đôi ngốc này! Sao cậu lại nói ra chứ?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `Bộ đôi` ],
				content: `Đau! Sao lại đánh mình (nya)?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Không gian gần quầy tiếp tân bỗng im lặng sau khi nghe bộ đôi nói vậy. Trời ạ! Sẽ rắc rối lắm đây... Một hệ thống được tạo ra sẽ gồm các thành phần có vị trí nhất định và nếu các thành phần đó đảo vị trí cho nhau sẽ loạn hết lên. Tương tự như chức nghiệp, không thể nào『Đầu bếp』lại có thể đánh bại『Ma kiếm sĩ』được. Tôi cứ ngỡ sẽ gặp rắc rối lớn nhưng mọi người xung quanh bỗng ồ lên.`
			},
			{
				class: `villager`,
				name: [ `Mạo hiểm giả` ],
				content: `Ra kia là nhóc đầu bếp đã thách đấu quý tộc đó.`
			},
			{
				class: `villager`,
				name: [ `Mạo hiểm giả` ],
				content: `Phải đó, thậm chí cậu nhóc còn đánh thắng nữa chứ.`
			},
			{
				class: `villager`,
				name: [ `Mạo hiểm giả` ],
				content: `Hôm qua tôi có dừng chân xem, trận đấu tuy kết thúc chóng vánh nhưng ở pha cuối cậu『Đầu bếp』xử lí thần sầu lắm.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Xung quanh tôi bắt đầu bàn tán sôi động hẳn, những người ở xa hơn cũng trở nên tò mò. Mọi chuyện diễn ra không tệ như tôi đã nghĩ... Còn chị ${nameC[15]} đột nhiên cúi người xuống khiến nhóm tôi giật mình và khó xử.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Chị thành thật xin lỗi đã đánh giá em hơi sớm. Là một tiếp tân chị không nên nói những lời như vậy. Thực sự xin lỗi em nhiều.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `A... Chị không cần xin lỗi đâu! Em hiểu chị nói vậy vì không muốn em gặp nguy hiểm thôi, nên là xin chị đừng cúi nữa!`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Nhưng...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Khó xử quá, chị ${nameC[15]} đúng là nghiêm túc trong công việc mà. Làm sao đây... Mọi người xung quanh đang nhìn chằm chằm kìa.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Thưa chị... ${nameC[1]} thực sự sẽ không để tâm đến mấy chuyện như này. Chị là người tốt. Bọn em cũng nghĩ vậy.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `Bộ đôi` ],
				content: `Đúng đó chị! (nya!)`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Nếu các em đã nói vậy... chị xin phép.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mọi người xung quanh cũng không còn để ý đến bên đây nữa. Tôi nhích lại gần ${nameC[11]}, nói nhỏ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cảm ơn cậu nhiều nha, ${nameC[11]}.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Từ lúc nào, tay tôi đã ở trên đầu ${nameC[11]} và xoa nhẹ. Đến khi tôi nhận ra, mặt nhỏ đã ửng đỏ thì...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `A! Xin lỗi nha, tự nhiên mình lại xoa đầu cậu...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Không có sao...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Đôi tai lá trúc của ${nameC[11]} cũng đã ửng hồng, vẫy lên xuống. Chị ${nameC[15]} cũng nhận ra gì đó, chỉ cười thầm.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Vậy sau đây, chị nói về một vài nội dung chính mà một mạo hiểm giả cần biết.`
			},
			{
				class: `think`,
				name: [ `${nameC[15]}` ],
				content: `Về hạng mạo hiểm giả được chia làm sáu loại, thấp nhất là hạng Sắt, rồi tăng lên Đồng, Bạc, Vàng, Bạch kim và Mythril là hạng cao nhất.`
			},
			{
				class: `think`,
				name: [ `${nameC[15]}` ],
				content: `Để có thể thăng hạng phải hoàn thành một trăm nhiệm vụ cùng bậc hoặc hơn bậc. Sau đó số lượng yêu cầu hoàn thành nhiệm vụ sẽ tăng thêm một trăm mỗi lần thăng hạng. Đồng thời cũng phải trải qua một bài kiểm tra đánh giá của hiệp hội để có thể chính thức thăng hạng. Đặc biệt, nếu có thành tích xuất sắc kèm tín cử từ hạng Bạch kim hoặc Mythril hoặc từ những người có quyền lực sẽ được xem xét thăng hạng, bỏ qua các điều kiện cần.`
			},
			{
				class: `think`,
				name: [ `${nameC[15]}` ],
				content: `Sau một khoảng thời gian không làm nhiệm vụ sẽ bị tụt hạng, lần lượt từ hạng Sắt là một tháng, rồi hạng Đồng là ba tháng, sáu tháng, chín tháng và hạng Bạch kim là một năm. Riêng hạng Sắt nếu lâu không làm nhiệm vụ sẽ phải nộp phí để hoạt động lại, còn hạng Mythril sẽ không bị tụt.`
			},
			{
				class: `think`,
				name: [ `${nameC[15]}` ],
				content: `Ở vài hạng nhất định sẽ có quyền lợi đặc biệt như hạng Bạch kim và Mythril sẽ được trả phí sửa chữa đồ cùng phí chữa trị sau khi hoàn thành nhiệm vụ. Còn riêng hạng Mythril sẽ có thêm quyền lợi là hưởng lương hưu mỗi tháng khi người đó chính thức nộp đơn nghỉ không hoạt động làm mạo hiểm giả nữa. Tất nhiên họ vẫn có thể rút đơn và hoạt động tiếp nhưng lương hưu sẽ tạm dừng, sau đó vẫn có thể nộp lại đơn nếu muốn. Đổi lại, họ sẽ sẽ bị buộc triệu tập làm nhiệm vụ khi xảy ra trong bất cứ hoàn cảnh nào.`
			},
			{
				class: `think`,
				name: [ `${nameC[15]}` ],
				content: `Về nhiệm vụ, sẽ được phân loại sao cho phù hợp với thứ hạng của mạo hiểm giả. Có thể nhận nhiệm vụ cao hơn một hạng nhưng không thể nhận nhiệm vụ thấp hạng. Nhiệm vụ cao hạng hơn có thể làm nếu được mời tham gia vào Tổ đội hạng đó nhưng phải cân nhắc nếu quá chênh lệch trình độ.`
			},
			{
				class: `think`,
				name: [ `${nameC[15]}` ],
				content: `Sau khi hoàn thành nhiệm vụ sẽ nhận được tiền thưởng ghi trong yêu cầu. Tùy vào nhiệm vụ sẽ có gia hạn thời gian hoàn thành hoặc không. Đối với nhiệm vụ yêu cầu từ người khác sẽ cần chữ kí của họ để xác nhận hoàn thành nhiệm vụ. Nếu nhiệm vụ bị thất bại sẽ bị trừ một điểm tiến trình nhiệm vụ đã hoàn thành, đây là điểm cần để tham gia vào bài kiểm tra thăng hạng.`
			},
			{
				class: `think`,
				name: [ `${nameC[15]}` ],
				content: `Về Tổ đội, có thể tạo tạm thời hoặc lâu dài. Không giới hạn số lượng thành viên trong Tổ đội. Khi làm nhiệm vụ có yêu cầu Tổ đội sẽ được bên hiệp hội thưởng thêm cho mỗi thành viên trong Tổ đội tham gia nhiệm vụ, trừ trưởng Tổ đội. Còn nhận nhiệm vụ không có yêu cầu Tổ đội sẽ không thưởng thêm. Số tiền thưởng tự bên Tổ đội chia đều cho các thành viên.`
			},
			{
				class: `think`,
				name: [ `${nameC[15]}` ],
				content: `Về luật của riêng Bang hộ, mất thẻ phải nộp phí để làm lại. Các trường hợp như dùng thẻ của người khác, các mạo hiểm giả gây gổ với nhau dẫn đến bạo lực bộc phát, khiến người khác bị liên lụy khi đang làm nhiệm vụ đều phải nộp phạt và đình chỉ tạm thời.`
			},
			{
				class: `think`,
				name: [ `${nameC[15]}` ],
				content: `Trường hợp bỏ rơi người trong nhiệm vụ hộ tống hoặc bỏ rơi thành viên Tổ đội trong tình thế nguy hiểm khi có thể cứu phải nộp phạt, đình chỉ tạm thời và tụt hạng.`
			},
			{
				class: `think`,
				name: [ `${nameC[15]}` ],
				content: `Trường hợp giả mạo thẻ sẽ bị cấm vĩnh viễn làm mạo hiểm giả. Đặc biệt nếu sát hại người vô tội sẽ bị cấm vĩnh viễn làm mạo hiểm giả và bị xử theo luật của đất nước.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Và đó là tất cả những thông tin các em cần biết. Các em có câu hỏi gì không?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cả nhóm tôi đang hơi bị đơ sau khi nghe một đống thông tin. Chị ${nameC[15]} nhiệt tình quá ha...`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `À... nếu các em chưa nhớ được từng đó thông tin thì có thể đọc ở『Sổ tay Mạo hiểm giả』này. Những gì chị nói chỉ là chút thông tin cơ bản.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thật luôn đấy hả? Nhìn cuốn sổ trông vừa bàn tay của người trưởng thành mà cũng dày ngang bằng ngón tay cái.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vậy... cho em xin một cuốn. Tiện thể bọn em muốn tạo một Tổ đội lâu dài luôn.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Được rồi, vậy tên của Tổ đội em sẽ là gì nào?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Tên là『Log Horizon』ạ!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Mình biết là chúng ta đã bàn trước cái tên nhưng... nó có ý nghĩa gì vậy?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Nói đi nào Shuunya! Sao lại đặt tên đó nya? Ai cũng tò mò về cái tên cả nya...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]}?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} nhìn tôi, đôi mắt ánh lên tò mò xen lẫn háo hức. Tuy đúng là có làm tôi hơi lung lay nhưng...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nào nào, đây là bí mật quyết định kết cục của Tổ đội đó. Khi nào đến lúc thích hợp nhất thì mình sẽ tiết lộ ý nghĩa sau nha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi càng khiến cho cái tên trở nên bí ẩn hơn. Và cả ba cậu ấy chỉ có thể nhìn chằm chằm vào tôi mà không làm được gì.`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Vậy là xong thủ tục rồi, đây là thẻ của các em. Đừng đánh mất nhé!.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cầm cái thẻ lên, dường như được làm từ nguyên liệu dựa theo thứ hạng. Thẻ làm từ Sắt đại diện cho hạng hiện tại của chúng tôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Hừm... Liệu thẻ này có bị phá hủy hay thay đổi thông tin được không nhỉ?`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `Thẻ được phù phép『Không thể Phá hủy』nên không hỏng được. Và thẻ được liên kết với linh hồn của người đăng kí nên thông tin không đổi được. Đồng thời chỉ những dụng cụ chuyên dụng của hiệp hội mới có thể can thiệp được một phần thẻ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ra là vậy. Công nghệ hay thật...`
			},
			{
				class: `${nameC[15]}`,
				name: [ `${nameC[15]}` ],
				content: `E hèm. Vậy thì xin chúc mừng các em đã hoàn thành đăng ký làm Mạo hiểm giả. Giờ các em hãy qua bên phải và chọn lấy nhiệm vụ đầu tiên nào.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Và thế là hành trình đầu tiên của『Log Horizon』đã bắt đầu. Nhiệm vụ mà Tổ đội chọn đó là...`
			}
		]
	},
	{
		chapter: 8.5,
		title: `Lần đầu nấu ăn`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ngày hôm nay thật mệt mỏi, rất nhiều chuyện đã xảy ra. Hiện tại tôi đang mười tuổi và cuối cùng tôi cũng có thể sử dụng những kỹ năng tôi đã ẩn đi bấy lâu nay. Thế nên, tối nay tôi sẽ nấu ăn sau một khoảng thời gian không động tới. Tiện thể, hôm nay nhóm của tôi cũng qua ăn tối cùng.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Con có chắc không đó. Đây là lần đầu con nấu ăn mà. Hay để mẹ nấu còn con cứ ra chơi với bạn đi ha.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mẹ cứ tin con, con nhìn mẹ nấu ăn nhiều rồi mà. Mấy món đơn giản con làm được hết.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Ừm... Nếu thế thì để mẹ dọn bàn ăn.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mẹ dọn xong thì cứ ra phòng khách nghỉ ngơi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi lấy『Bộ dụng cụ Nhà bếp』từ chức nghiệp『Đầu bếp』, cầm con dao đã chiến đấu với ${nameC[12]} lên tay, ngắm nhìn nó.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Con dao đó là lúc con chiến đấu với ${nameC[12]} nhỉ?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đúng rồi ạ. Và tất cả chỗ dụng cụ này đều từ chức nghiệp『Đầu bếp』của con.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Mẹ hiểu rồi. Giao lại căn bếp cho con nhé, Shu muốn làm món gì cũng được. Miễn là ăn xong không phải gọi mục sự ${nameC[14]} đến là được.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng vâng.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi bắt đầu sơ chế ngay khi mẹ rời đi. Nguyên liệu trên bếp không khác quá nhiều so với thế giới trước, khác chăng chỉ là hình thái của “nguồn nguyên liệu” đó mà thôi. Với những nguyên liệu có được,『Bắp cải trộn ngô』và『Bò hầm』là hai lựa chọn của tôi. Giờ, đã đến lúc vận dụng các kỹ năng từ chức nghiệp của tôi rồi... Cầm “thanh gươm chiến thắng” trong tay, tôi nhịp nhàng cắt rau củ đã gọt vỏ rửa sạch, thành các miếng vừa miệng, rồi chia rõ từng thứ ra: rau và ngô được để riêng cho món trộn, còn những miếng khoai tây với cà rốt vuông vức đặt sẵn trong nồi gang, chuẩn bị cho món hầm. Trút sẵn nước sạch vào nồi, tôi lập tức thi triển『Lục phong Tinh thông』sau khi nhóm lửa, vừa chuẩn bị luôn cho nồi thịt bò cũng đã cắt miếng, rửa sạch và ướp chút hương liệu. Một nồi để sơ chế thịt, một nồi hầm sẵn rau củ cho mềm. Nhanh chóng vớt rau đã chín, chuyển khoai và cà rốt sang, nhẹ nhàng rắc muối lên nồi thịt ngả màu nâu sẫm đang bập bùng, theo cái cách mà tôi đã chứng kiến ở tiền kiếp. Đã nấu thì không chỉ phải ngon, mà cũng phải thật “kiểu cách”, tôi nghĩ vậy.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Con nấu xong rồi, mời mọi người vào ăn.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Để xem con ta lần đầu nấu ăn thế nào đây. Haha.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Mẹ có thể ngửi thấy mùi thơm từ trong bếp.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Thơm quá nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Làm mình đói quá rồi này.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Đồ ăn của ${nameC[1]}, mình phải ăn!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ mọi người thực sự đói ha... Rồi mọi người tiến vào bàn ăn, đúng như tôi nghi ngờ, họ có vẻ đang đề phòng bởi ai cũng lo lắng khi là người thử món. Còn riêng ${nameC[11]} thì... tôi không thể đọc được tâm trạng của nhỏ đang thế nào nữa. Dường như có vài bông tuyết đang lấp lánh quanh nhỏ thì phải? Dù sao mấy món này chắc lần đầu họ thấy nên có lẽ phải giới thiệu qua. Tôi cũng hơi lo lắng khi người khác thử món do mình làm.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Được rồi mọi người, món đầu tiên là『Bò hầm』. Món này gồm thịt bò, khoai, cà rốt và hành tây. Và chúng ta sẽ ăn cùng với bánh mì nhúng vào nước hầm.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi muốn ăn với cơm cơ nhưng có vẻ ở đây không ai biết cơm là gì. Hi vọng chỗ nào đó trong『Dainisekai』có tồn tại gạo hoặc một thứ tương tự như vậy.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Hừm... Mùi thì thơm thật nhưng màu lạ quá. Ăn chắc ổn nhỉ?`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Sẽ ổn thôi... em nghĩ vậy?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Ờ... Hai cậu nghĩ...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[9]} chưa nói hết câu thì ${nameC[11]} đã cắt ngang.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Ngon tuyệt! Thịt, khoai, cà rốt rất mềm và được cắt rất vừa miệng. Ăn miếng nào thì tan chảy miếng đó. Còn bánh mì chấm vào nước hầm khiến nó không bị khô và khó ăn. Thêm nữa có hành trong món khiến việc ăn nhiều không bị ngán.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hế, ${nameC[11]}? Tôi đã rất bất ngờ khi lần đầu thấy nhỏ nói một tràng như vậy. Mà... nhỏ là ẩm thực gia à? Chắc cậu ấy đói lắm ha. Được khen như vậy tôi cũng thấy hơi ngại, rồi mọi người cũng thử và...`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ta chưa bao giờ ăn một món nào ngon như vậy cả.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Đúng là ngon thật.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Ngon thật đó Shu! Khi con bảo mẹ làm mấy món đơn giản mẹ không nghĩ lại làm ra món ngon như vậy.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Đúng đó nya. Nhưng mà mình thấy món này hơi đậm nya.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Mẹ cũng nghĩ vậy, chắc lần sau con nên bớt ít muối lại.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Món đầu thành công, giờ đến món cuối cùng. Mọi thứ đều theo như kế hoạch của tôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vậy thì mọi người hãy thử món cuối của con đây『Bắp cải trộn ngô』. Món gồm các nguyên liệu có trong tên.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Hừm... Món này hơi nhạt đó con.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cậu quên cho muối rồi nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Biết ngay mọi người sẽ nghĩ như vậy mà. Đúng là tôi đã không cho muối vào.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Không.... không thể nào...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cậu ổn chứ?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Thiên tài...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `Cả nhà` ],
				content: `Thiên tài? (Nya?)`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ ${nameC[11]} là người duy nhất nhận ra lí do tôi làm món rau nhạt. Cậu có giác quan nhạy bén thật đấy.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Món hầm đậm. Món rau nhạt. Đó là khi mọi người ăn riêng.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Nếu vậy ý con là...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Chúng ta sẽ ăn cả hai món cùng nhau.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Vậy là mọi người đã nhận ra ý đồ, trung hòa vị giác là thứ mà tôi đang nhắm tới.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Ái chà! Con nói đúng. Ăn ngon hơn nhiều thật.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Đúng thật này. Ban đầu ăn món hầm đậm nhưng sau đó ăn thêm miếng rau vào cảm giác vị dịu đi hẳn. Đồng thời có vị ngọt từ ngô ngay sau đó nữa.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Con giỏi thật đấy Shu. Lần đầu nấu ăn lại làm ra món ngon như vầy.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cậu cũng nhan hiểm đó nya.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mọi người quá khen, dù đây là lần đầu mình nấu, hihi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sự thật là ở kiếp trước tôi nấu ăn suốt nên quen rồi.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Thật mừng vì đã được tồn tại để ăn món này. Mình không còn gì luyến tiếc nữa.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Này, mình nghĩ nói thế là hơi quá rồi đó. Còn nhiều món ngon hơn mà.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Vậy cậu làm được món khác còn ngon hơn nữa?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ấy, lỡ miệng rồi... Đúng là có nhiều món khác nhưng...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À... thì... nếu mình nghĩ được ra món nào đó khác. Ha ha ha...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Vậy mình sẽ là người đầu tiên thử nha?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} nhìn thẳng vào tôi, nhỏ trông có vẻ hào hứng. Mặc dù biểu cảm nhỏ không đúng với hành động lắm nhưng mà trông đáng yêu thật. Vả lại có bông tuyết lấp lánh xung quanh nhỏ nữa, trông thật thú vị. Tôi khẽ gật đầu.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À ừm... được thôi, nếu cậu không chê.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình mong chờ nó.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cảm giác được ai đó trông chờ thật là hạnh phúc. Nhưng tim tôi vừa lỡ một nhịp thì phải... Lạ thật...`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Nhất con rồi nhá Shu.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Con trai ta giỏi thiệt, hahaha!`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Ối ối, sướng nya. ${nameC[9]} thấy đúng vậy không nya?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Hả? Mình mải ăn quá, mọi người đang nói gì vậy?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Đồ ngốc Konyashi!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Trời! Đừng trêu con nữa mọi người.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thật ấm áp khi được ngồi ăn cũng những người tôi quen. Ở kiếp trước tôi cũng khó có được khung cảnh như hiện giờ.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Mình tò mò... tại sao cậu lại dùng bát và hai... cái que để ăn vậy?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Chết, tôi quên mất thói quen cũ hồi trước. Tại vui quá khi được dùng『Bộ dụng cụ Nhà bếp』nên quên béng mất.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À... thực ra đây được gọi là đôi đũa, có thể dùng để gắp thức ăn. Bát đũa là từ『Bộ dụng cụ Nhà bếp』của mình nên muốn thử dùng xem sao.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Trông nó khó cầm quá nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Thi thoảng ${nameC[1]} khá là... kì lạ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Hế? Trông mình... kì lạ?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mọi người gật đầu. Tôi cũng chả biết phải phản bác lại thế nào, với nhận thức và thể xác không đồng bộ nhau khó mà tránh được cái nhìn của người khác.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Rồi rồi. Ăn đi mọi người trước khi đồ ăn nguội hết.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Thế là đêm hôm đó, mọi người đều nghĩ đến món ăn mà ${nameC[1]} đã nấu. Còn ${nameC[11]} lại nghĩ đến ${nameC[1]} đang nấu ăn...`
			}
		]
	},
	{
		chapter: 8,
		title: `Cột mốc quan trọng (2)`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[12]} nhìn về phía chúng tôi với vẻ mặt đầy tự hào khi nó có được chức nghiệp tốt.『Ma kiếm sĩ』cho phép yểm kỹ năng tạm thời lên vũ khí và dùng kỹ năng từ vũ khí đó không tốn ma lực. Tất nhiên lúc yểm có tốn ma lực. Có thể thay đổi linh hoạt kỹ năng yểm vào vũ khí. Tùy thuộc vào chất lượng vũ khí có thể chịu nổi kỹ năng hay không, vũ khí sẽ vỡ vụn nếu không chịu được.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Không ngờ ${nameC[12]} có chức nghiệp tốt như vậy.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Làm sao đây nya.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Thật khó chịu.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nào nào bình tĩnh nào các cậu.`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `Người tiếp theo.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ đến lượt mình rồi. Mình lên đây.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi bước lên bục, đặt tay lên quả cầu, nhắm mắt và cảm nhận... Không thấy gì cả. Ít nhất tôi cũng biết quả cầu chỉ ban cho những ai chưa có chức nghiệp. Thế nên tôi đành bịa ra vài câu nói.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Tiếng cắt thái nguyên liệu. Lửa lúc nhỏ lúc to. Mùi thơm khi chế biến.`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `Hừm... Thật lạ, quả cầu không hiện ra chức nghiệp...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mọi người xung quanh bắt đầu bàn tán khiến tôi lo lắng. Thất thần một hồi, tôi nhớ ra đang ẩn thông tin chức nghiệp, liền mở Bảng trạng thái để hủy che giấu. Hi vọng quả cầu sẽ hiện chức nghiệp của tôi, không thì mọi thứ sẽ rất rắc rối.`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `A, quả cầu hiện rồi.『Đầu bếp』là chức nghiệp của con. Tiện thể thì tạm dừng một chút, ta kiểm tra quả cầu xem thế nào.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nhẹ cả người, may quả cầu vẫn hiện. Tôi về chỗ ngồi, quay ra đám bạn tôi để xem họ phản ứng thế nào thì...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Ôi không...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cậu ổn chứ nya?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Đừng buồn nha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Đây không phải là phản ứng tôi mong muốn.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ờm...? Mình vẫn ổn? Sao các cậu lạ thế?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cậu thật là lạc quan, ${nameC[1]}.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Đúng đó nya. Nếu là mình thì mình sẽ rất buồn đó nya.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]} thật tuyệt vời.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ờm... Quá khen?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi hoàn toàn không hiểu gì hết cả...`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `Ta đã kiểm tra xong, buổi lẽ tiếp tục nào. Người tiếp theo.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tiếp theo là ${nameC[11]}, nhỏ có thể dùng băng thuật nên chức nghiệp『Pháp sư』hay『Phù thủy』sẽ rất hợp đây.`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `『Cung thủ』là chức nghiệp của con.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Không ngờ là đoán lệch hết luôn. Dù sao thì chức nghiệp này kết hợp băng thuật cũng sẽ rất thú vị cho coi.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình sẽ bảo vệ ${nameC[1]}.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ờm ừm...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi vẫn không hiểu chuyện gì xảy ra...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tiếp theo đến lượt ${nameC[10]}. Để xem nhỏ này có chức nghiệp gì nào.`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `『Kiếm sĩ』là chức nghiệp của con.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ồ, chắc vì ${nameC[10]} dùng kiếm giỏi đây mà. Có kĩ thuật dùng kiếm và khả năng của nhỏ thì sẽ như thi triển kiếm vũ vậy.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Đúng như mình mong muốn rồi các cậu nya. Đừng có buồn nha ${nameC[1]}, mình cũng sẽ bảo vệ cậu nya.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Được thôi?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thật đấy? Các cậu ấy đang nói về chuyện gì vậy?`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `Người cuối cùng.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Đó là mình rồi. Mình lên đây.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Người cuối cùng là ${nameC[9]} à, không biết cậu ta sẽ nhận được gì đây. Quả cầu đột nhiên phát sáng, mọi người đều kinh ngạc trước sự việc vừa diễn ra.`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `Điều này... Thật hiếm gặp...『Thánh kị sĩ』là chức nghiệp của con. Đồng thời con nhận được danh hiệu『Đấng cứu thế』từ quả cầu. Không, đúng hơn thì đây là phước lành từ thần ${nameC[8]}.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ai ai nghe xong cũng ngạc nhiên, há hốc mồm. ${nameC[9]} đi xuống, vẻ mặt của cậu đơ cả ra.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cậu thật tuyệt vời Konyashi. Giờ cậu trở thành người nổi tiếng rồi nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Đây có phải là mơ không?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cảm giác trở thành người được chọn thế nào ${nameC[9]}?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]}aa... Đừng nói vậy chứ! Nghe như cậu sắp nghỉ chơi với mình vậy...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ơ khoan, không có chuyện đấy đâu. Sao cậu lại nghĩ vậy chứ?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Tại... tại vì mình có chức nghiệp tốt hơn cậu...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình tuy không hiểu lắm nhưng không có chuyện vì mấy điều này mà nghỉ chơi với các cậu đâu.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]}aa...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình sẽ không bao giờ nghỉ chơi với ${nameC[1]} đâu.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À ừm, được thôi? Dù sao thì cũng kết thúc rồi, về thôi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi bước ra khỏi cửa, đang định gọi cha mẹ thì họ đã ôm lấy tôi mất rồi.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Con đừng buồn nha Shu. Mọi thứ không như con dự định rồi.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ta đúng thật là vô dụng mà, dù đã dạy cho con mọi thứ về kiếm thuật. Cuối cùng thì cũng không thể giúp con có được chức nghiệp『Kiếm sĩ』như ta. Ta xin lỗi con.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Trời ạ! Mọi người đang nói cái gì thế? Con chả hiểu cái gì hết cả! Mọi người nói rõ ra cho con với!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi bắt đầu thấy khó chịu vì không thể hiểu mọi người đang nói về vấn đề gì. Trong lúc mọi người còn đang an ủi về vấn đề gì đó mà tôi không hình dùng nổi thì ${nameC[12]} đến phá.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Hahaha! Giấc mơ làm mạo hiểm giả của ngươi tan vỡ rồi ${nameC[1]}!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Này đủ rồi đấy, ${nameC[1]} đang rất buồn đó.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cậu muốn gây sự hả nya?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Chân giò này muốn bị cuốn chỉ hả?`
			},
			{
				class: `villager`,
				name: [ `Quản gia` ],
				content: `Cậu chủ! Xin đừng gây thêm rắc rối nữa! Tôi thực sự xin lỗi mọi người về hành động của cậu chủ nhà tôi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hầy... Tôi chỉ muốn về nhà và nằm ngay lên giường nghỉ... Cần phải giải quyết vụ này nhanh mới được.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Được rồi mọi người. ${nameC[12]}, giải thích mình nghe xem tại sao giấc mơ của mình tan vỡ đi.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Ngươi bị ngu hả? Là một『Đầu bếp』thì làm sao có thể chiến đấu được ngoài nấu ăn. Kể cả ngươi có cố gắng học chiến đấu thế nào thì vẫn chỉ làm vướng chân người khác thôi. Tỉ lệ những người có chức nghiệp không tăng được khả năng chiến đấu đều chết sớm cả. Mau mau từ bỏ giấc mơ mà mở quán ăn và nghe tin tức vĩ đại của ta đi, hahaha!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thì ra ý mọi người là như vậy. Làm mọi người lo lắng cho tôi rồi, trừ thằng ${nameC[12]} ra. Nếu vậy chỉ còn cách chứng minh thôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Được rồi, nếu mình chứng minh là có đủ khả năng thì sao?`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Ngươi? Ha, muốn chứng mình kiều gì? Đấu với ta sao? Không có cửa...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đúng đấy. Tôi thách đấu cậu một trận cận chiến.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mọi người nghe vậy ai cũng bất ngờ hết cả, kể cả ${nameC[12]}. Khuôn mặt to bè của ${nameC[12]} dường như hơi giãn ra, trước khi tiếng cười khùng khục.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Hahaha! Được thôi, ta chấp nhận.`
			},
			{
				class: `villager`,
				name: [ `Quản gia` ],
				content: `Khoan đã cậu chủ...`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Khoan khoan khoan! Con đừng có liều như vậy.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]} bình tĩnh lại đi. Nói gì đó đi ${nameC[11]}.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình tin ${nameC[1]} sẽ làm được.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi và mọi người khá bất ngờ khi ${nameC[11]} nói vậy. Lâu rồi mới được người khác tin tưởng vào tôi như vậy.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Tại sao cậu tin vào ${nameC[1]} vậy nya?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Vì ${nameC[1]} đáng tin tưởng. Vậy thôi.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cậu nói phải nya. Cố lên nha Shuunya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Các cậu... Hầy, đã nói thế rồi thì chúc may mắn nha, ${nameC[1]}.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Trời ạ! Con đúng là không thể lường trước được. Nếu vậy ta sẽ làm trọng tài cho trận đấu.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[12]}, nghe ổn không?`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Được thôi.`
			},
			{
				class: `villager`,
				name: [ `Quản gia` ],
				content: `Cậu chủ...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mọi người sau đó đã di chuyển ra trước sân cô nhi viện. Những người đã nghe về cuộc cãi cọ của chúng tôi cũng đến xem trận đấu. Đứng trước mặt tôi là ${nameC[12]} đang khua khua thanh kiếm trên tay, với vẻ mặt dương dương tự đắc.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Nhìn cho kĩ thanh kiếm của ta đây, ngươi sẽ phải cúi đầu trước chiến thắng của ta. Còn ngươi dùng gì?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi mỉm cười vào giây phút này. Cuối cùng, tôi đã chờ suốt mười năm để có thể đường đường chính chính rút con dao bếp trong『Bộ dụng cụ Nhà bếp』từ chức nghiệp『Đầu bếp』ra mà không cần phải giấu.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Của mình là... “thanh kiếm” này đây.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mọi người đến xem đều bật cười trước thứ tôi đang cầm. Cha mẹ tôi ngạc nhiên và đám bạn thì không biết nói gì.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Hahaha! Ngươi đùa ta chắc? Con dao ngắn này thì sao đọ kiếm được?`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Nè, con cần ta chạy về lấy kiếm không? Mà con lấy con dao đó từ đâu vậy?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cha không cần lo đâu. “Thank kiếm” này, là từ chức nghiệp của con.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ánh nhìn của người cha ái ngại nhưng cũng chỉ có thể thở dài. Mẹ và bộ đôi thì trông có vẻ hơi lo, còn lại là ${nameC[11]}... Tôi không hiểu được nhỏ đang nghĩ gì, ánh mắt đó chẳng hề thay đổi.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Vậy thì ta sẽ phổ biến trận đấu. Đây là trận đấu cận chiến một đấu một. Có thể sử dụng kỹ năng nhưng không được là loại tầm xa và gây ảnh hưởng đến tính mạng. Ai vi phạm sẽ xử thua. Ta sẽ dùng kỹ năng『Giáp Ma lực』lên hai đứa, ai mất giáp ma lực bao bọc cơ thể trước sẽ thua. Mọi người đã rõ chưa?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}`, `${nameC[12]}` ],
				content: `Đã rõ.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Vậy... trận đấu bắt đầu!`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Trận đấu sẽ kết thúc ngay tại đây.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[12]} ngay lấp tức dùng『Cường hóa Thể chất』và yểm『Hỏa』lên kiếm, lao lên định kết liễu tôi ngay lập tức. Nhưng...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vậy à?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tất nhiên tôi đã né được bằng cách... lùi lại một bước.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Sao ngươi lại tránh được? Đã thế... hãy xem đây!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[12]} bắt đầu chém tôi dồn dập. Kĩ thuật của ${nameC[12]} không tệ mặc dù với cơ thể nặng nề. Nhưng tốc độ thì chậm hơn cha tôi nên tôi có thể né được dễ dàng. Mọi người bắt đầu bàn tán việc tôi có thể né dễ dàng. Còn mẹ tôi và nhóm bạn đang hô hào cổ vũ.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `NGƯƠI CÓ THỂ ĐỨNG YÊN CHO TA CHÉM ĐƯỢC KHÔNG? ĐỪNG CÓ NÉ NỮA!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Rất sẵn lòng.『Phản đòn』.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Khi sử dụng kỹ năng『Phản đòn』phải canh đúng thời điểm để hủy thì mới có hiệu quả. Nếu thành công thì địch sẽ bị choáng trong khoảng thời gian ngắn. Tôi đã có được kỹ năng này khi đấu với cha nhưng đây là lần đầu tiên sử dụng. Và may thay, tôi thành công và ${nameC[12]} đã bị choáng. Ngay lập tức tôi liền đưa dao chém vào cổ của ${nameC[12]} và kết liễu cậu. Tất nhiên chỉ mất phần giáp ma lực thôi, ${nameC[12]} vẫn ổn ngoại trừ cậu đang rất là cay cú. Giáp ma lực của tôi cũng hết tác dụng ngay sau đó.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Trận đấu kết thúc. Phần thắng thuộc về ${nameC[1]}!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Đám đông reo hò vì tôi đã làm điều khó tin nhất mà họ từng thấy. Dao đấu với kiếm, ai mà ngờ được chứ.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Mình... thua... nó... Thua... đầu bếp... KHÔNG THỂ THA THỨ!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[12]} cầm cây kiếm lên, dùng『Cường hóa Thể chất』để nhanh chóng lao vào đâm sau lưng tôi. Mọi chuyện xảy ra quá nhanh. Mọi người thấy nhưng không ai kịp phản ứng để cảnh báo tôi. Và rồi trong chớp nhoáng... tôi đã... né được bằng cách nhảy ngược lên không trung. Thực ra, trước khi ${nameC[12]} đâm tôi thì đã có một cơn gió thổi qua chứa đầy sát khí, nên là tôi đoán ${nameC[12]} chuẩn bị đâm phía sau. Tôi vờ như không biết gì và dùng『Cường hóa Thể chất』, rồi nhảy bật ngược đồng thời dùng『Trảm』cắt lưỡi kiếm của ${nameC[12]} ra làm nhiều mảnh, đáp đất an toàn.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Món ăn đã xong. Chúc mọi người ăn ngon miệng.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi cảm giác như vừa nói một câu rất ngầu nhưng mà không ai phản ứng gì. Cảm giác ngại thật đấy. Mà, chắc do pha vừa nãy còn đang làm mọi người sốc nên không ai thèm nghe tôi luôn...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[12]}, cậu thua rồi. Chấp nhận đi. Ông quản gia, phiền ông đưa ${nameC[12]} về.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Ta...`
			},
			{
				class: `villager`,
				name: [ `Mọi người` ],
				content: `Phải đó, chấp nhận thua đi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[12]} vừa tức giận, vừa xấu hổ. Hắn nắm chặt bàn tay, nghiến răng trong cay cú.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `${nameC[1]}... NGƯƠI SẼ PHẢI HỐI HẬN! TẤT CẢ CÁC NGƯƠI!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thế rồi ${nameC[12]} chạy đi với bộ dạng không thể tơi tả hơn, theo sau là ông quản gia. Các bạn của tôi tiến tới khen nọ kia, còn mọi người vỗ tay hô hào. Tôi ngước nhìn lên bầu trời, dơ tay phải lên và nắm chặt lại.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vượt qua rồi... cột mốc đầu tiên!`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Chú diều hâu đậu trên cành cây, nhìn xuống đám đông đang bao quanh ${nameC[1]}. Chú thấy cậu đang nắm chặt lấy con đường phía trước của mình...`
			}
		]
	},
	{
		chapter: 7,
		title: `Cột mốc quan trọng (1)`,
		dialogue: [
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Shu! Mau ra ăn sáng đi con. Hôm nay là ngày trọng đại đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hiện tại tôi đang mười tuổi và hôm nay là ngày ban phát chức nghiệp tại nhà thờ. Đồng thời cũng là cột mốc quan trọng của mọi đứa trẻ ở thị trấn. Tôi bước vào phòng ăn thì thấy cha đang ngồi đó. Đáng lẽ ra giờ này cha phải đi làm rồi mới phải.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ơ cha! Sao nay cha chưa đi làm à?`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ta đã xin phép nghỉ sáng nay để có thể đi đến nhà thờ cùng con đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đừng nói với con cả mẹ cũng đi cùng nha.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Tất nhiên là có rồi. Hôm nay là ngày quan trọng của con mà. Chẳng lẽ... con không thích cha mẹ đi cùng sao?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cũng không hẳn... Con thấy hơi ngại...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tất nhiên là ngại rồi! Nếu trong tôi là mười tuổi thật thì không phải nói, rất vui là đằng khác.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ngại gì chứ. Đứa trẻ nào cũng có cha mẹ đi cùng mà. Ta thấy có mỗi con lạ thôi.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Phải đó, việc chứng kiến sự kiện cuộc đời của con cái cha mẹ nào cũng quan tâm hết. Nếu con không muốn thì cha mẹ có thể đợi...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À không! Hãy đi cùng con. Lâu rồi cả nhà mới được đi chung với nhau như vậy mà.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thật tình thì tôi vừa ngại vừa vui, cảm xúc đang lẫn lộn hết cả.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau bữa sáng, cả nhà đã cùng đến nhà thờ gần cô nhi viện. Khi tới nơi, tôi đã thấy hội bạn của mình đang đợi ở trước cửa.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}`, `${nameC[10]}`, `${nameC[11]}` ],
				content: `${nameC[1]}, chào buổi sáng (nya)!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi nghe vậy liền chạy nhanh đến chỗ đám bạn.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Chào mọi người. Làm mọi người đứng đợi mình rồi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Đứng một lúc có sao đâu. A, cháu chào hai bác.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cháu chào hai bác nya.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Con chào hai bác.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cha mẹ tôi theo sau đến nơi, vui vẻ tươi cười đáp lại.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Chào các cháu nha.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ừm. Chào các cháu. Các cháu có háo hức khi sắp nhận chức nghiệp không?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Tất nhiên là cháu háo hức rồi. Nhưng đồng thời cũng hơi lo lắng...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Phải đó nya. Cháu hi vọng nhận được chức nghiệp gì có lợi để làm mạo hiểm giả.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình cũng vậy. Mình muốn đi phiêu lưu cùng ${nameC[1]} và các cậu.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} sau khi chơi cùng với mấy bọn tôi thì cũng nghe kể về dự định sắp tới. Nhỏ nghe chúng tôi muốn làm mạo hiểm giả nên cũng muốn tham gia cùng. Và thế là cả đám quyết định sẽ cùng nhau làm mạo hiểm giả bằng bất cứ giá nào.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ta rất mong đợi từ các cháu đó nha. Haha.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Con có những người bạn tuyệt vời thật đó Shu.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Những người bạn tuyệt vời à... Tôi cũng không rõ lắm nhưng có những người bạn như vậy thật tốt.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng! Tất nhiên rồi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Chúng tôi đang trò chuyện thì bóng dáng của của một cậu bé to béo tiến đến chỗ chúng tôi.`
			},
			{
				class: `unknown`,
				name: [ `Cậu bé` ],
				content: `Vậy ra các ngươi muốn làm mạo hiểm giả hả? Nếu vậy ta đây sẽ làm một mạo hiểm giả vĩ đại cho coi. Hahaha!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[12]} hả? Không ngờ cậu cũng muốn làm mạo hiểm giả đấy. Tưởng cậu chỉ có ăn rồi chơi và nằm thôi chứ?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Mạo hiểm giả vĩ đại cơ đấy nya. Đừng làm mình cười chứ nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Đứa trẻ to lớn vừa ngắt lời chúng tôi bằng điệu cười kỳ quái đó là ${nameC[12]} ${nameC[13]}, một nhóc quý tộc sống cách đây không xa. Hình dáng to bè của nó, nếu đột ngột xuất hiện, có lẽ sẽ làm người khác giật mình cùng cái áo măng tô đen nó hay cũng trưng diện ra lúc nào cũng trong trạng thái sắp đứt khuy đến nơi vậy, còn chiếc quần âu nhìn cũng chẳng khá hơn. Mái tóc vàng vốn xoăn tự nhiên của nó được chải phẳng và cắt ngang đến gần mang tai, nhìn chẳng khác gì úp cái bát vàng lên đầu. Ấy thế mà nó lúc nào cũng tư hào với kiểu tóc “hợp mốt” của mình. Điểm gỡ gạc thể diện duy nhất của nó là đôi mắt xanh lục sáng đặc trưng của nhà ${nameC[13]}...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Kể cả vậy, vẻ mặt nó lúc nào cũng vênh váo, và ánh mắt của nó lúc nào cũng nhìn người khác với vẻ coi thường thấy rõ. Cho rằng mình đứng trên tất cả, ${nameC[12]} thường xuyên gây hấn với mấy đứa trẻ ở cô nhi viện. Nhiều khi nhóm tôi phải nhảy vào can thiệp trước khi xảy ra ẩu đả, dù thực sự mà nói, dính với quý tộc như nó chỉ mang lại rắc rối cho chúng tôi thôi.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Sao các ngươi dám! Ta là ${nameC[12]} ${nameC[13]} đấy! Đừng có nói kiểu đấy với ta!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Vẻ mặt vênh váo của nó thật khiến bọn tôi muốn đấm một trận. Nhưng vẫn phải hãm lại, nó là quý tộc nên nếu xảy ra chuyện gì thì chúng tôi lãnh tất. Ánh mắt xanh của nó ngay lập tức nhìn tới ${nameC[11]}...`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `À, cô bé tóc trắng xinh xắn đang núp sau thằng ${nameC[1]} ẻo lả kia! Cô xinh đẹp thế này nên bỏ đám thường dân mà theo ta đi. Cô có thể sống sung sướng cùng với ta ở căn biệt thự mà không cần lo nghĩ. Cô chỉ có thể sánh bước với một mình ta mà thôi. Haha!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cha mẹ tôi đứng bên cạnh thì thầm.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Nè em, anh có thể đập thằng nhóc này không?`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Bình tĩnh nào anh, thắng nhóc chỉ là trẻ con thôi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cha mẹ tôi trông có vẻ bình tĩnh nhưng thực chất đang đằng đằng sát khí nhìn ${nameC[12]}. Làm gì có chuyện cha mẹ nào lại không bực khi nghe con mình bị nói vậy. Rồi tôi cảm nhận được một nguồn sát khí lạnh buốt từ đằng sau...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Nè chân giò! Cậu dám nói ${nameC[1]} của mình là thằng ẻo lả hả? Chân giò cuốn chỉ này!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} trừng mắt nhìn ${nameC[12]} khiến cậu cũng phải run rẩy. Để mà nói thì bị ánh nhìn lạnh lùng của ${nameC[11]} tia phải cũng đủ khiến đối phương hồn phiêu phách lạc, chẳng cần dùng đến kỹ năng.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `${nameC[11]} trông đáng sợ quá à nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Nè ${nameC[11]} bình tĩnh lại nào.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} này, cảm ơn cậu đã giận hộ mình nha. Cậu... có thể bình tĩnh lại được không?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Ừm...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} khẽ gật đầu, không hiểu sao nhỏ chỉ nghe mỗi mình tôi. Bất chợt, một người đàn ông ăn mặc lịch sự trông như quản gia xuất hiện.`
			},
			{
				class: `villager`,
				name: [ `Ông quản gia` ],
				content: `Cậu chủ ${nameC[12]}, cậu đừng gây rắc rối nữa.`
			},
			{
				class: `${nameC[12]}`,
				name: [ `${nameC[12]}` ],
				content: `Cô được lắm... Tí nữa ta sẽ cho các ngươi thấy ai mới là người có chức nghiệp tuyệt vời nhất ở đây. Đi!`
			},
			{
				class: `villager`,
				name: [ `Ông quản gia` ],
				content: `Vâng thưa cậu chủ. Xin lỗi đã làm phiền mọi người.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ông quản gia cúi người chào chúng tôi và rời đi cùng ${nameC[12]}. Ông ấy thật tốt, tội nghiệp khi phải theo hầu thằng ${nameC[12]}.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Mà ${nameC[11]} này, con sống ở đây được gần hai năm rồi vậy con thấy ổn không?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mẹ tôi mặc dù hay đến cô nhi viện nhưng số lần bắt chuyện với ${nameC[11]} rất ít. Chắc là do ${nameC[11]} vẫn chưa quen nói chuyện với người khác.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Dạ, hiện tại con đang rất vui. Hơn nữa... con đã coi cô nhi viện là nhà của con rồi. Mọi người ai cũng tốt cả.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Vậy thì tốt cho con rồi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nghe ${nameC[11]} nói vậy tôi cũng nhẹ lòng, dường như bệnh trầm cảm của nhỏ không còn nữa. Cách nói của ${nameC[11]} cũng đã bớt đi phần xa lánh nhưng tôi vẫn chưa thấy được rõ cảm xúc trên khuôn mặt của nhỏ. Vẫn lạnh lùng như thường nhưng không theo hướng tiêu cực...`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Tiện thể thì tại sao con đứng sát Shu vậy, ${nameC[11]}?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mà mẹ nói con mới để ý... Nè ${nameC[11]}... sao cậu hay đứng sát mình vậy?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Kể từ lúc tôi tìm được kẹp tóc cho ${nameC[11]} và kết bạn với nhỏ thì cậu ấy thường hay bám lấy tôi. Chắc là vì tôi giống nhỏ đều người dùng kỹ năng sớm chăng?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình cũng không biết nữa. Chỉ là... khi đứng gần ${nameC[1]}... mình cảm thấy thoải mải nhất.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ờm... Mình không hiểu lắm...`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Ái chà, ${nameC[11]} đáng yêu quá à. Cho ta ôm con với.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} chưa kịp đáp lại thì mẹ đã ôm lấy nhỏ, khiến cả bốn đứa tụi tôi đều giật mình khi mẹ làm vậy.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mẹ này! Đừng có ôm người ta như vậy chứ! Xin lỗi nha ${nameC[11]}, mẹ mình thường không như này.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Không có sao đâu. Cảm giác giống như mẹ đang ôm mình vậy.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Vậy con có thể gọi bác là mẹ.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mẹ?`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `${nameC[11]} cưng quá à!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hể? Chuyện gì vừa xảy ra thế nhỉ? Tôi không biết phải phản ứng thế nào nữa... Mẹ thích có con gái hơn hay sao?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thôi nào mẹ, chúng con phải vào nhà thờ rồi.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `À ừm, các con đi đi.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Chúc may mắn nha mấy nhóc.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Chúng tôi bước vào nhà thờ vẻ đơn sơ mộc mạc. Tường được làm bằng đá, cửa số làm từ gỗ với kính màu có thể đóng mở, các thanh xà ở phía trên cũng được làm từ gỗ, mái được lợp ngói. Vì là thị trấn nên nhà thờ không có hoành tráng như ở những nơi như thành phố. Vừa bước vào có thể thấy ngay một bức tượng đá tạc vị thần ${nameC[8]} được đặt lên bệ đá trên bục giảng. Và mục sư ${nameC[14]} đang đứng trên đấy cùng với quả cầu gì đó đợi đến đúng thời điểm. Còn phía dưới có hai hàng ghế dài, mỗi hàng có năm cái ghế và mỗi ghế được bốn người ngồi. Như vậy sức chứa của nhà thờ là khoảng hơn bốn mươi người. Đối với hôm nay thì các hàng ghế sẽ được nhường cho các đứa trẻ, còn người lớn sẽ đứng đợi ở bên ngoài xem qua cửa sổ và cửa chính. Lúc này sơ ${nameC[5]} đang hướng dẫn đám trẻ ngồi vào chỗ.`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `Mọi người từ ngoài vào trong xin hãy yên lặng. Đã đến giờ bắt đầu nghi thức.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Lời nói của mục sư thật có trọng lượng. Ai ai cũng nghe theo cả.`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `Trước khi bắt đầu ta sẽ phổ biến lại quy luật nhận chức nghiệp. Chức nghiệp có thể được thừa hưởng từ cha hoặc mẹ hoặc thông qua làm việc gì đó nhiều lần. Và một vài trường hợp hiếm sẽ nhận ngẫu nhiên chức nghiệp. Vậy giờ ta sẽ bắt đầu buổi lễ ban chức nghiệp. Bắt đầu từ hàng ghế đầu tiên. Mời con.`
			},
			{
				class: `villager`,
				name: [ `Đứa trẻ đầu tiên` ],
				content: `Vâng!`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `Con hãy đặt tay lên『Quả cầu ban chức nghiệp』, nhắm mắt lại, cảm nhận từ quả cầu, nói ra những gì con thấy và nó sẽ xuất hiện trên quả cầu.`
			},
			{
				class: `villager`,
				name: [ `Đứa trẻ đầu tiên` ],
				content: `Tiếng kim loại va đập. Ngọn lửa cháy bừng bừng. Mùi hương kim loại cháy.`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `『Thợ rèn』là chức nghiệp của con. Hãy nghĩ Bảng trạng thái trong đầu, thông tin về con sẽ xuất hiện. Giờ con có thể ra về rồi.`
			},
			{
				class: `villager`,
				name: [ `Đứa trẻ đầu tiên` ],
				content: `Con cảm ơn mục sư.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thì ra đây là cách nhận chức nghiệp. Mà tôi đã có chức nghiệp『Đầu bếp』từ lúc đến thế giới này rồi, thậm chí là có thể sử dụng luôn ý chứ. Chắc không được nhận thêm chức nghiệp nào nữa đâu nhỉ?`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `Người tiếp theo.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ như người tiếp theo là ${nameC[12]}, để xem thằng này có chức nghiệp gì nào.`
			},
			{
				class: `${nameC[14]}`,
				name: [ `Mục sư ${nameC[14]}` ],
				content: `『Ma kiếm sĩ』là chức nghiệp của con.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Trong gian phòng đó, chú diều hâu đậu ở trên thanh xà gỗ, nhìn xuống dưới nhóm ${nameC[1]} đang lo lắng không biết chuyện gì sẽ xảy ra tiếp theo...`
			}
		]
	},
	{
		chapter: 6,
		title: `Cô bé “lạnh” lùng (2)`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hiện giờ đang là bữa tối và tôi đang ngồi ăn cùng cả nhà. Tiện thể hỏi luôn cha về ${nameC[11]}, hi vọng sẽ có chút thông tin gì đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cha ơi, cha có biết gì về ${nameC[11]} không ạ? Chắc là cha cũng có chút thông tin về bạn ý nhỉ?`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Tất nhiên là ta có thông tin về ${nameC[11]} rồi, dù sao binh lính của ta và ta cũng đến nơi xảy ra sự việc mà.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vậy cha có thể nói cho con biết được không?`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Hừm... Ta không thể nói.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thông tin nội bộ à, dù sao đây cũng là trách nhiệm của người lính nên cũng không trách cha được. Mà tôi cũng nghe kha khá từ bộ đôi rồi nên được đến đâu thì đến vậy...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À... nếu không được thì cha không cần phải nói đâu ạ. Chỉ là sáng nay con có thử trò chuyện với ${nameC[11]} nhưng bạn ý né tránh con và mọi người. Nên là con khá lo cho bạn không biết có ổn không.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mẹ dơ tay trái che đi nụ cười sau khi nghe suy nghĩ vừa nãy của tôi và nói đùa.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Ái chà, con mẹ biết lo lắng cho cả cô bé mà chưa hề quen biết đó sao?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thì... nhìn bạn trông có vẻ khá tội. ${nameC[11]} chắc có lí do riêng để hành xử như vậy, nên là con muốn tìm hiểu xem thế nào và giúp bạn. Nhưng với cái tính lạnh lùng của ${nameC[11]} thì con cũng đang bó tay đây.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Con thực sự quan tâm tới cô bé ${nameC[11]} nhỉ?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Theo suy đoán của tôi thì có vẻ ${nameC[11]} đang bị chấn thương tâm lí và cái tên để chỉ vấn đề này là trầm cảm. Có thể khái niệm “trầm cảm” chưa xuất hiện tại nơi đây nên không ai có đủ sự quan tâm dành cho ${nameC[11]}. Các triệu chứng có thể thấy rõ như là tránh giao tiếp với người khác, tự thu mình lại. Nhưng nguy hiểm nhất là càng về lâu về dài, ${nameC[11]} sẽ có những suy nghĩ lệch lạc để rồi không còn cảm thấy gì nữa và rất có thể... cô không còn muốn sống nữa.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ta thấy con quan tâm nhiều như vậy chắc có lẽ kể cho con một chút cũng không sao.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ơ, cha chắc chưa đó? Con tưởng đấy là thông tin nội bộ nên cha không nói được ra mà.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Có sao đâu chứ, miễn là cả nhà không kể lung tung cho người khác biết là được. Haha!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi xin rút lại những lời đã nói về cha tôi một lúc trước. Đúng là cha tôi mà...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cha đã kể lại những gì có được nhưng cũng không có thêm thông tin gì mới. Tôi đã nghe từ ${nameC[9]} rồi, tính ra binh lính cũng không cẩn thận khi hỏi ${nameC[11]} ở cô nhi viện. Nhưng cha cũng cho tôi thêm một thông tin mới.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Không hiểu sao những lời bàn tán về ${nameC[11]} bắt đầu diễn ra. Chắc binh lính của ta đã bất cẩn hoặc ai đó trong nội bộ đã tiết lộ ra.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hẳn là vậy rồi...`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Nói mới nhớ mẹ cũng nghe loáng thoáng mọi người đang nói về một cô bé tám tuổi đã bộc phát kỹ năng. Và tự hạ một đàn ma thú Ligheep đang trong trạng thái không ổn định chỉ với một đón. Điều này sẽ khiến ${nameC[11]} gặp chút rắc rối đây.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Câu cuối cùng mẹ vừa nói hoàn toàn đúng. Đối với đứa trẻ quý tộc trước mười tuổi có thể dùng kỹ năng thì mọi người sẽ coi đó là sự tài giỏi, thiên tài. Còn đối với trẻ thường dân trước mười tuổi có thể dùng kỹ năng thì chỉ có số ít xuất sắc được biết đến bởi nhiều người thì mới coi như có tài, còn lại sẽ bị coi như là mối nguy hại. Đó là lí do tôi không sử dụng kỹ năng và giấu nó đi. Và tôi thật không thể tài nào hiểu nổi lý lẽ của mọi người ở đây. Chắc có lẽ đã từng xảy ra vụ việc gì đó mới khiến mọi người có định kiến này. Tôi đang mải suy nghĩ và tự nhủ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mọi người nghĩ như thế nào về ${nameC[11]}...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Suy nghĩ hồi lâu, ngước lên thì thấy cha mẹ đang nhìn tôi chằm chằm. Tôi bối rối tự hỏi đã làm gì, để rồi nhận ra suy nghĩ của mình đã thành lời.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `A! Con chỉ đang suy nghĩ... Ý con là...`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ta nghĩ cô bé giỏi đấy chứ. Sau này chắc sẽ làm pháp sư đây.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Đối với mẹ thì cô bé khá đáng thương khi vừa mất đi người thân. Còn con nghĩ sao?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Con... `
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi thầm nghĩ, dù định kiến có tồn tại thì mỗi người đều có một cái ý riêng trong lòng. Thật tốt khi nghe được cha mẹ nói ra suy nghĩ của mình.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Con cũng nghĩ giống với hai người thôi ạ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Và sau đấy tôi đã bị cha mẹ trêu chọc suốt bữa tối...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sáng hôm sau, trên đường đến cô nhi viện, tôi đã nghe nhiều lời bàn tán về ${nameC[11]} và sự nguy hiểm của cô. Tôi đã khá tức giận nhưng đồng thời cũng bất lực vì không làm gì được. Chỉ còn nước thở dài, chân bước thật nhanh và cố lờ đi nhiều nhất có thể. Khi đến nơi, tôi thấy ${nameC[11]} đang cặm cụi tìm gì đó gần cái cây ở sân trước. Tôi tiến lại gần với một nụ cười hi vọng có thể bắt chuyện.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nè ${nameC[11]}, cậu đang tìm gì đó? Có cần mình giúp không?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} ngước lên, khuôn mặt vẫn không cảm xúc kể từ lần cuối tôi nói chuyện.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Chẳng phải mình đã nói đừng trò chuyện với mình sao?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình biết là vậy nhưng thấy cậu đang gặp khó khăn chút nên mình mong có thể giúp đỡ cậu ý mà.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} dừng tìm, đứng dậy và nhìn thẳng vào mặt tôi. Lúc đó, tôi đã nhận ra ${nameC[11]} đã bị mất cái kẹo tóc gắn viên pha lê xanh lục nhạt trên đầu.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Vậy giúp mình việc này đi. Cậu có thể đừng cười gượng gạo như thế nữa được không?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ý... cậu là gì vậy?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Cậu đang che giấu gì đó đúng không? Cậu lúc nào cũng cười như vậy hết. Thật khó chịu.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} thực sự đã đánh trúng tim đen của tôi. Tôi là một người chuyển sinh nên cơ thể và nhận thức không giống nhau, đồng thời cũng có thể dùng kỹ năng từ sớm. Đó là lí do tôi luôn cố tươi cười để che giấu đi sự thật nhưng nó thật nhức nhối khi không thể nói với ai... Tôi cố đánh trống lảng đi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình không hiểu cậu đang nói gì cả. Bọn mình quay lại việc tìm đồ cậu mất được không?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Vậy là cậu không thể giúp mình.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Thật phiền phức.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nói xong ${nameC[11]} liền đi qua chỗ khác. Giác quan của ${nameC[11]} nhạy bén đến mức đáng sợ và những lời cô nói đúng hết. Dẫu vậy tôi vẫn quyết định tìm kẹp tóc cho ${nameC[11]}, rất có thể đó là món đồ quan trọng của cô. Trong lúc tôi tìm xung quanh ở sân trước thì ${nameC[9]} đã tới bắt chuyện với tôi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Này ${nameC[1]}, đang tìm gì à?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cái kẹp tóc của ${nameC[11]}.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `À, thì ra ${nameC[11]} đang tìm cái đó. Vậy bạn ý nhờ cậu à?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Không... Lại bị từ chối lần hai rồi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Nghe đau thật đấy. Được rồi, để mình bảo ${nameC[10]} tìm cùng và hỏi mấy đứa kia có nhặt được kẹp tóc hay không.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cậu không cần phải giúp mình đâu.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Này, đừng có hiểu lầm. Mình đang giúp ${nameC[11]} chứ có giúp cậu đâu.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Phải ha. Vậy cảm ơn cậu.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi bắt đầu từ xung quanh sân, chầm chậm vạch từng bụi cỏ tìm thật kĩ. Một tiếng đồng hồ trôi qua, tôi vẫn không thấy gì cả. Trời hôm nay nắng hơn mọi khi khiến tôi thấy khá mệt mỏi. Nằm xuống gần cái cây, ngước nhìn lên và thở dài. Từ trên cây, một chiếc lông vũ nửa trắng nửa lam rơi xuống. Cầm lên tay, tôi ngắm nhìn nó và tự hỏi nên tìm kẹp tóc ở đâu bây giờ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ngắm nghía chiếc lông chán, tôi hạ tay xuống thì một thứ gì đó lấp lánh trên cây đập vào mắt tầm tôi. Liệu nó có phải là kẹp tóc? Tôi cất lông vũ vào túi, đứng dậy, nhìn xung quanh có người không rồi dùng phong thuật『Trôi nổi』để lấy thứ đang lấp lánh kia. Tôi biết mình đã cố gắng che giấu thân phận nhưng vì lí do gì đó đã thúc đẩy bản thân hãy quên nó đi và giúp ${nameC[11]}. Thứ lấp lánh đó rơi vào tay tôi và đó đúng là cái kẹp tóc của ${nameC[11]}. Tôi thắc mắc sao nó có thể ở trên đó nhưng mà nó không còn quan trọng. Vậy là nhiệm vụ hoàn thành và giờ tôi đi tìm ${nameC[11]} để trả lại.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi chạy ra sân sau, thấy ${nameC[11]} vẫn đang tìm. Tôi tiến lại gần, ${nameC[11]} thấy tôi định chạy đi nhưng tôi đã nói lớn.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Khoan đã ${nameC[11]}, mình tìm thấy kẹp tóc của cậu rồi này!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} đang định chạy nghe vậy liền khựng lại. Rồi đứng quay về hướng tôi nhưng đầu cúi xuống còn tay ôm chặt con thỏ bông.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Tại sao? Tại sao cậu lại giúp mình? Cậu rốt cuộc muốn gì ở mình?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình chỉ đơn giản là muốn giúp cậu, vậy thôi.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Tại sao? Sau những gì mình đã nói vậy mà cậu vẫn giúp?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi tiến lại gần ${nameC[11]}, vừa nói vừa cài lại kép tóc lên đầu cho cô.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cậu đã mất quá nhiều rồi, mình không muốn cậu mất thêm bất cứ thứ gì nữa.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau câu nói đó tôi chỉ lẳng lặng bước đi. Đầu tôi lúc này đang hơi choáng, chắc vì nay quá nóng. Lại gần ngồi dưới cái cây trước sân, nhắm mắt lại nghỉ ngơi mà lỡ ngủ từ lúc nào không hay. Rồi xung quanh tôi tự nhiên thật dễ chịu và mát mẻ. Tôi chợt bừng tỉnh, quay đầu sang phải thì thấy ${nameC[11]} đang ngồi ôm con thỏ bông cạnh tôi. Bối rối, bất ngờ và giật mình là tôi hiện giờ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ế ${nameC[11]}? Sao cậu lại ngồi đây vậy?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Đây là nơi mình vẫn hay ngồi một mình.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À, phải ha... Vậy mình ra chỗ khác nha.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Không... Cậu có thể ngồi ở đây.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hể? ${nameC[11]} vừa bảo tôi ở lại đúng không nhỉ? Cô ý vừa mở lòng phải không? Đây có thể là dấu hiệu tốt, tôi nên nắm bắt lúc này để giúp ${nameC[11]}.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình định tới để cảm ơn. Nhưng cậu lại ngủ, nên mình ngồi đợi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cậu không cần phải cảm ơn đâu. Ngược lại mình phải cảm ơn cậu vừa nãy dùng băng thuật lên mình mới phải. Nay trời nóng quá làm mình bị say nắng.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình không có dùng được băng thuật. Mình vẫn chưa kiểm soát được.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Vậy thì lạ thật... Chẳng lẽ là do rò rỉ ma lực? Hay là do kỹ năng nội tại? Trời! Nay đau đầu quá, mấy cái này tôi sẽ xử lí sau vậy.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Bỏ qua chuyện đấy đi ha. Nếu có thể thì cậu nói cho mình biết tại sao lại muốn xa lánh mọi người được không?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Dường như ${nameC[11]} vẫn còn lưỡng lự, gần lắm rồi... Đây có lẽ là cơ hội cuối cùng trước khi ${nameC[11]} thu mình lại. Tôi ngồi trầm ngâm nghĩ cách rồi nhớ lại câu hỏi của ${nameC[11]}... Đây là cách cuối cùng, hy vọng thành công...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `“Cậu đang che giấu gì đó đúng không?”. Đây là câu cậu đã hỏi và mình không muốn nói về nó nhưng... Hãy để ý xung quanh nhé.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Âm thanh... yên lặng... Những lá cây... đang bay?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Bất chấp nỗ lực che giấu, tôi đã tiết lộ bí mật có thể dùng kỹ năng. Tất nhiên là tôi sẽ không nói gì về vụ chuyển sinh, chỉ là chưa đến lúc...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình cũng là người có thể sử dụng kỹ năng sớm. Hai phong thuật mình vừa mới dùng là『Hòa âm Kết giới』ngăn âm thanh và『Trôi nổi』di chuyển vật. Vì định kiến nên mình đã giấu đi và cậu là người đầu tiên biết bí mật này của mình.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Tại sao cậu lại kể nó cho mình?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Những gì cậu nói lúc trước khiến mình suy nghĩ nhiều. Để che giấu đi bí mật này thì mình đã đeo lên một chiếc mặt nạ. Mọi thứ đều thuận lợi nhưng đâu đó trong lòng mình cảm thấy thật khó chịu và nhức nhối. Rồi mình quyết định kể cho cậu nghe về nó, thế nên là đừng nói cho ai về bí mật này nha. À mà mình cũng không hiểu sao mình lại muốn kể cho cậu nghe nữa, ha ha...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Không. Cảm ơn đã kể mình nghe. Lí do mình cố xa lánh mọi người... là vì một phần lời bàn tán. Nhưng đồng thời mình cũng sợ khi những người mình quen dần biến mất trước mắt. Người thân duy nhất là cha mẹ mình cũng đã ra đi. Còn lại là sự trống rỗng... chất chứa nỗi cô đơn... Không sao... thế này mình sẽ không còn cảm thấy gì khi ai đó lại biến mất nữa.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cậu thực sự thấy ổn về điều đó chứ?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình sẽ ngồi nghỉ ở đây thêm một lúc nữa. Dù sao thì ngồi gần cậu cũng mát hơn là ra chỗ khác... Và mình sẽ lắng nghe... nếu cần.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} ôm chắc con thỏ, từ từ nhích lại gần. Rồi cô ngả đầu vào vai tôi, vừa khóc vừa nói những điều cô kìm nén mãi trong lòng.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Nó không hề ổn... Mình không muốn... Đau đớn lắm...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `『Hòa âm Kết giới』vẫn đang được kích hoạt, vậy nên sẽ chỉ có tôi nghe được nỗi lòng của ${nameC[11]}. Trong quãng lặng này, tôi tự hỏi nên nói gì để có thể an ủi cô. Chỉ ngồi im và âm thầm lắng nghe... chắc đó là những gì ${nameC[11]} cần. Sau một hồi giãi bày thì ${nameC[11]} ngồi thẳng người, vùi mặt vào con thỏ bông dường như để thấm những giọt nước mắt. Rồi cô quay lại vẻ mặt lạnh lùng như thường thấy... tuy đôi tai có chút hơi ửng hồng.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Thật ngại quá... Mình thấy ổn hơn nhiều rồi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Từ giờ cậu sẽ không cần phải cảm thấy cô đơn khi ở đây nữa. Thậm chí hai đứa bạn thân của mình cũng rất muốn làm bạn với cậu đó.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình không biết nữa. Lần trước mình đã lờ họ nên chắc đã làm các bạn ý tổn thương.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình chắc chắn họ không bận tâm gì về chuyện đó đâu.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình phải nói gì đây. Do di chuyển liên tục nên mình chưa từng nói chuyện đủ lâu với một ai để có thể gọi là bạn.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Chà, nếu vậy thì...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi dừng kích hoạt kỹ năng và đứng dậy, quay về hướng của ${nameC[11]}. Lúc này một cơn gió thổi qua làm mái tóc của tôi tung bay, dơ tay ra và nở nụ cười từ tận đáy lòng.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Một lần nữa. Mình tên ${nameC[1]}, liệu mình có thể là người bạn đầu tiên của cậu được không?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} vẫn còn hơi lưỡng lự việc đưa tay về phía tôi, cô nói nhỏ.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Sau tất cả liệu mình có thể?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình giống cậu mà, đều là những người che dấu cảm xúc. Nếu cậu có tâm sự gì thì mình sẽ luôn bên cạnh để lắng nghe.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cuối cùng ${nameC[11]} đã nắm lấy tay tôi, nhẹ nhàng kéo cô đứng dậy.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình tên ${nameC[11]}. Mình rất vui khi được làm bạn với cậu, ${nameC[1]}.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Tuyệt vời! Để mình gọi hai đứa bạn của mình ra, cậu chờ một chút xíu nha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Và thế là tôi đã chạy vào nhà tìm bộ đôi để nói với các cậu ấy làm bạn với ${nameC[11]}.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `${nameC[1]}...`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `${nameC[11]} đứng nhìn ${nameC[1]} chạy đi. Trong một khoảnh khắc, ${nameC[11]} đã mỉm cười...`
			}
		]
	},
	{
		chapter: 5,
		title: `Cô bé “lạnh” lùng (1)`,
		dialogue: [
			{
				class: `think`,
				name: [ `???` ],
				content: `Ở ngoài thị trấn Dawn Horizon, một cỗ xe ngựa đang di chuyển với vận tốc rất nhanh hướng về thị trấn. Theo sau đó là đàn ma thú Ligheep giống cừu năm con với đôi mắt đỏ ngầu, bộ lông trắng đã chuyển sang đen. Trong bộ lông đó tích tụ sét để Ligheep có thể sử dụng được thông qua hai cái sừng nhô ra trên đầu chúng nó.`
			},
			{
				class: `${nameC[11]}Father`,
				name: [ `Người đàn ông` ],
				content: `Cố lên con, ${nameC[11]}. Chúng ta sắp tới thị trấn rồi. Binh lính ở đó sẽ giúp ta.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Con sợ lắm. Sao đột nhiên đám Ligheep lại đuổi theo chúng ta vậy?`
			},
			{
				class: `${nameC[11]}Father`,
				name: [ `Cha ${nameC[11]}` ],
				content: `Ta cũng không rõ. Giờ ta đang cố né những tia sét của đám Ligheep nên con bám chắc vào. Mặc cái áo choàng có mũ này vào. Nó có kháng một chút sét nếu con bị trúng.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Bình thường Ligheep là một loài hiền lành nhưng không hiểu vì lí do gì mà đám nó lại thành như vậy. Chúng chỉ hành động như vậy khi mà bộ lông nó cực dày đến nỗi che cả mắt nhưng với đám này lượng lông vẫn ổn. `
			},
			{
				class: `${nameC[11]}Father`,
				name: [ `Cha ${nameC[11]}` ],
				content: `Gần lắm rồi, chúng ta sẽ...`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Cha ${nameC[11]} chưa kịp nói hết câu thì một tia sét đã trúng vào ngựa kéo xe khiến nó phát hoảng và lật đổ xe. ${nameC[11]} với vết chảy máu trên đầu cố gượng bò ra ngoài khỏi cỗ xe đang bị cháy do Ligheep vẫn đang bắn sét.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Lúc này binh lính đi tuần quanh tường thành nghe thấy tiếng động lớn và thấy cột khói bốc lên liền chạy đi báo chỉ huy.`
			},
			{
				class: `soldiers`,
				name: [ `Binh lính` ],
				content: `Trung đội trưởng ${nameC[4]}! Chúng tôi thấy có cột khói bốc lên và những tiếng động lớn phát ra từ đó. Có thể đã xảy ra tai nạn hoặc ai đó đã bị tấn công.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `${nameC[4]} (Cha ${nameC[1]})` ],
				content: `Được rồi, nửa đầu tiểu đội đi theo ta, còn nửa còn lại tiếp tục làm nhiệm vụ.`
			},
			{
				class: `soldiers`,
				name: [ `Binh lính` ],
				content: `Rõ!`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `${nameC[11]} từ từ di chuyển đến bên người cha nhưng dường như ông đang hấp hối vì vết thương lớn trên bụng. Mặc kệ đám Ligheep vẫn đang tiến đến, ${nameC[11]} ngồi bên cạnh người cha mà khóc nức nở.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Cha đừng có rời xa con như mẹ nữa mà.`
			},
			{
				class: `${nameC[11]}Father`,
				name: [ `Cha ${nameC[11]}` ],
				content: `Ta... lỗi... Không... thể... vệ... con...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Không! Không muốn đâu! Cha đừng chết!`
			},
			{
				class: `${nameC[11]}Father`,
				name: [ `Cha ${nameC[11]}` ],
				content: `Con... hãy... hạnh... Mau... chạy...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `KHÔNGGGG!!! CHAAAA!!!`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Cha ${nameC[11]} đã trút hơi thở cuối cùng. ${nameC[11]} kêu gào và khóc lớn mặc kệ đám Ligheep ngày càng gần. Cô cứ khóc và hét lớn vì người cha đã mất. Rồi đột nhiên xung quanh ${nameC[11]} như tĩnh lặng, cô đứng dậy, mở lòng bàn tay hướng về đám Ligheep và cất lên một câu với giọng điệu đầy sát khí.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `『Đóng băng』`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Mặt đất xung quanh bỗng đóng băng và chỗ băng đó đã tiến đến đám Ligheep rất nhanh. Khi đám Ligheep bước vào đoạn đất bị đóng băng, chúng nó liền bị đóng thành những cột trụ băng. Sau một lúc thì binh lính mới tới nơi xảy ra. ${nameC[11]} quay đầu nhẹ nhìn về hướng binh lính, cơn gió lạnh từ băng đã thổi bay mũ áo choàng để hiện ra khuôn mặt không cảm xúc của cô. Đôi mắt ${nameC[11]} vẫn đẫm lệ, máu từ vết thương trên đầu cô đã khô lại. Trước khi chỉ huy ${nameC[4]} định làm gì thì ${nameC[11]} đã ngã xuống và ngất đi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Con đi đến cô nhi viện đây ạ.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Được thôi, con đi đường cẩn thận.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hiện tại tôi đang tám tuổi. Tuần vừa rồi tôi đã bị ốm một trận nặng nằm liệt giường nên không biết đã bỏ lỡ những gì. Hoặc có khi tôi gặp may khi không dính phải rắc rối của bộ đôi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi đã đến cô nhi viện, trước sân lũ trẻ đang nô đùa chơi với nhau. Liếc qua liếc lại không thấy bộ đôi đâu nên tôi định vào nhà tìm thử. Đột nhiên chú diều hâu vụt qua làm tôi giật mình, theo phản xạ nhìn chú bay đi về hướng cây trước sân.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Trước mắt tôi lúc này, là một cô bé bí ẩn ngồi tựa mình vào gốc cây. Đôi tay nhỏ bé nhẹ ôm lấy chú thỏ bông trắng trong tay, cô bé hướng ánh mắt lam nhạt băng giá của mình lên bầu trời phía xa, như thể đang tìm kiếm câu trả lời cho một câu hỏi cô không thể giải đáp, mái tóc chấm vai trắng như tuyết mùa đông nhẹ nhàng lay động trong cơn gió mùa hạ thổi qua. Khuôn mặt cô bé không hề biểu lộ gì ngoài chút cảm xúc khó có thể diễn tả, đôi tai thuôn dài như lá trúc cũng không hề động đậy. Nhìn đôi tai nhỏ xinh đó, tôi đoán chắc trước mắt mình lúc này là một cô bé Elf. Viên pha lê xanh lục hình quả trám gắn trên kẹp tóc của cô bé dường như phát sáng nhè nhẹ dưới ánh nắng hè, khi làn gió mát thổi qua đoạn tóc tết gọn gàng bên vai cô...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi tự hỏi tại sao cô bé lại ngồi một mình ở đó mà không chơi với mấy đứa trẻ... hay là cô bị bắt nạt? Tôi vừa nghĩ vừa tiến tới chỗ cô để bắt chuyện.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Chào bạn, tại sao...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi chưa kịp nói hết câu thì cô bé quay ra nhìn liếc tôi với một vẻ lạnh lùng và cắt ngang câu tôi nói.`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Đừng bắt chuyện với mình.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ơ khoan, bình...`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Mình nói rồi đừng nói chuyện với mình.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nhưng tại sao?`
			},
			{
				class: `${nameC[11]}`,
				name: [ `${nameC[11]}` ],
				content: `Phiền thật.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cô bé vừa dứt câu thì đã đứng dậy đi chỗ khác. Tôi đã khá sốc còn cơ thể thì bất động, thật là một cô bé lạnh lùng. Một lúc sau ${nameC[9]} và ${nameC[10]} bước ra từ nhà.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Ủa ${nameC[1]}? Sao lại đứng ngây người ở đây thế.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Nhìn mặt ${nameC[1]} trắng bệch ra luôn nè nya. Cảm giác như vừa bị ai từ chối vậy đó nya.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đúng vậy...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}`, `${nameC[10]}` ],
				content: `Ế (nya)?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau khi tôi lấy lại được sự bình tĩnh thì đã kể lại chuyện vừa nãy. Bộ đôi cũng cho tôi một số thông tin về cô, tên là ${nameC[11]}, đã đến cô nhi viện được khoảng hay ngày từ sau vụ tai nạn với đám ma thú Ligheep. Vào ngày hôm sau khi ${nameC[11]} ở đây, binh lính đã tới hỏi cô một số câu hỏi và đã biết thêm một số thông tin khác.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hiện tại ${nameC[11]} đang tám tuổi, bằng tuổi của tôi và bộ đôi. Mẹ ${nameC[11]} là Elf đã mất sau khi sinh ra ${nameC[11]}, còn cha ${nameC[11]} là con người nên ${nameC[11]} là nửa người nửa Elf. Cha ${nameC[11]} là một thương nhân đang trên đường đến Dawn Horizon để xem có thể định cư và mở cửa hàng nơi đây không. Còn đám ma thú Ligheep không hiểu lí do gì đã đuổi theo và điều đó dẫn đến cái chết của cha ${nameC[11]}. Rồi sự việc xảy ra sau đó cô cũng chỉ nhớ mang máng là mình đã dùng băng thuật như mẹ mình nhưng đã không thể kiểm soát được nó. ${nameC[11]} cũng đã thử dùng lại nhưng không được. Về phần Ligheep thì bên binh lính đang điều tra chỗ xác bị đóng băng do ${nameC[11]}. Nhưng điều phải chú ý đến nhất là biểu cảm không cảm xúc trên khuôn mặt của ${nameC[11]}. Cái cảm giác lạnh lùng mỗi lần cố giao tiếp với cô. Tôi nghĩ ${nameC[11]} đã bị sang chấn tâm lý sau những gì vừa xảy ra. Nhưng tôi vẫn không hiểu phần ${nameC[11]} tỏ vẻ xua đuổi mọi người.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Mình cũng đã thử trò chuyện với ${nameC[11]} nhưng không thể.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Mình cũng vậy nya. Lúc cậu ý nhìn mình trông đáng sợ lắm nya.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Hừm... Chắc ${nameC[11]} cần thời gian.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[11]} đang đứng núp ở góc nhà bên ngoài nhìn về phía nhóm chúng tôi đang trò chuyện. Tôi thấy vậy định dơ tay vẫy thì ${nameC[11]} lại quay đi nên tôi cũng chỉ đành chấp nhận.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Còn ${nameC[11]} vừa đi vừa ôm con thỏ bông vừa suy nghĩ gì đó trầm tư nên đã bị vấp ngã. Cái kẹp tóc gắn viên pha lê xanh lục nhạt của cô đã bị rơi và cô đã không để ý nó. ${nameC[11]} đứng dậy, phủi quần áo và con thỏ rồi lại đi tiếp trong khi suy nghĩ gì đó.`
			},
			{
				class: `think`,
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
				class: `think`,
				name: [ `???` ],
				content: `Lúc này trời đã sáng, ${nameC[9]} vẫn còn đang ngủ và có một giấc mơ êm ái.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Êm quá... Đám mây này tôi sẽ không thả tay ra đâu. Muốn ôm mãi cơ...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Nya...`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}` ],
				content: `Phải rồi... Đám mây kêu nya thật... Ủa khoan đã sao lại kêu nya? Mà sao tự nhiên đám mây khiến tôi muốn hắt hơi...`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Thế là ${nameC[9]} đã hắt hơi và khiến cậu tỉnh dây. Đầu óc mơ màng, mắt nhắm mắt mở, nhìn xung quanh thì thấy ${nameC[10]} đang nằm cạnh cậu. Cậu vẫn chưa tỉnh ngủ hẳn nên đã kéo chăn đắp cho nhỏ. Mất một lúc sau cậu mới nhận ra là ${nameC[10]} đang nằm cạnh mình nên cậu đã hoảng và ngã khỏi giường.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `A đau quá... ${nameC[10]}! Dậy mau!`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Nya? Chào buổi sáng Konyashi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Nói mình nghe sao cậu lại nằm ngủ cùng mình vậy?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `À thì... mình định gọi cậu dậy nhưng nhìn cậu ngủ ngon quá nên lỡ nằm ngủ cùng luôn nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Thật tình. Xuống dưới ăn sáng trước đi, mình gấp chăn xong rồi xuống.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Không không nya. Cậu xuống đi, mình gấp hộ cho nya. Do mình khiến cậu ngủ lâu hơn mà nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cũng không hẳn... Mà thôi, cảm ơn nha vậy mình đi rửa mặt.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Sau khi ${nameC[10]} gấp gọn chăn xong thì xuống ăn sáng cùng ${nameC[9]}. Lúc này sơ ${nameC[5]} bước vào.`
			},
			{
				class: `${nameC[5]}`,
				name: [ `Sơ ${nameC[5]}` ],
				content: `Cuối cùng thì cũng chịu dậy rồi à ${nameC[9]}. Ta bảo ${nameC[10]} đánh thức con rồi mà.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `À tại ${nameC[9]} ngủ ngon quá à nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Thế cơ à?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Tha mình lần này đi nya.`
			},
			{
				class: `${nameC[5]}`,
				name: [ `Sơ ${nameC[5]}` ],
				content: `Ta không hiểu chuyện gì đã xảy ra nhưng sau khi ăn xong thì nhớ rửa chỗ đĩa kia cho ta.`
			},
			{
				class: `think`,
				name: [ `${nameC[9]}`, `${nameC[10]}` ],
				content: `Vâng (nya)!`
			},
			{
				class: `${nameC[5]}`,
				name: [ `Sơ ${nameC[5]}` ],
				content: `À mà hình như nay các con qua nhà bạn ${nameC[1]} để tập luyện chiến đấu đúng không? Chắc trưa nay các con không về đây ăn rồi.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Sơ ${nameC[5]} vừa nói xong câu đó thì đã bước ra khỏi phòng ăn rồi. ${nameC[9]} chợt nhớ ra và hớt hải.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Ôi chết, mình quên mất có hẹn với ${nameC[1]} luyện tập cùng cha cậu. ${nameC[10]} ăn nhanh lên nào.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Rồi, mình biết rồi nya.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Cả hai ăn nhanh chóng rồi mau mau rửa đồ. Sau khi xong việc liền phóng ra khỏi nhà chạy thắng đến nhà ${nameC[1]}. Trên tay ${nameC[9]} thì cầm một cái khiên gỗ còn ${nameC[10]} cầm một cái kiếm gỗ.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Nhưng trên quãng đường đến nhà ${nameC[1]}, ${nameC[10]} tình cờ nhìn thấy một chú diều hâu bay qua. Theo bản năng của nhỏ, liền thả kiếm ra và đuổi theo chú diều hâu đó.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Này cậu làm rơi... Ế? Lại nữa hả?`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `${nameC[9]} thấy vậy nhặt cây kiếm, liền đuổi theo, hét lớn giúp nhỏ lấy lại lý trí để tỉnh lại.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Này ${nameC[10]}! Tỉnh lại đi! Này!`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Tất nhiên ${nameC[10]} đã không nghe thấy gì và thậm chí cũng không để ý đến xung quanh.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Trời ạ. Cậu chạy nhanh quá. Dừng lại mau!`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Chú diều hâu bay qua hàng cây vượt ra khỏi tầm mắt ${nameC[10]}. Tưởng thế là kết thúc nhưng nào ngờ nhỏ cũng nhảy lên và di chuyển trên hàng cây. Nhỏ cứ nhảy qua cây này đến cây kia và cho đến cú nhảy cuối cùng. ${nameC[10]} gần như đã với tới chú diều hâu đó rồi nhưng trước khi chạm tới nó thì nhỏ đã rơi xuống. Thay vì đáp lên cây thì phía dưới là một con sông. ${nameC[10]} bừng tỉnh và phát hoảng không kịp xử lí thế nào.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `${nameC[9]} chạy đến vừa kịp lúc, cậu nhảy lên từ bờ sông bên này, cài cái kiếm vào khiên vứt xuống dưới sông chỗ ${nameC[10]} rơi và đáp xuống phía đó. Cậu liền đỡ được ${nameC[10]} và nhảy qua bờ sông bên kia. Nhưng khoảng cách chân ${nameC[9]} với bờ bên kia không thể đáp tới nên cậu chỉ còn cách ôm chặt lấy phần đầu và lưng của ${nameC[10]}. Thay vì đáp bằng chân thì ${nameC[9]} đã dùng lưng của cậu để đáp đất và lăn vài vòng trước khi dừng lại. ${nameC[9]} trong khi đang đau đớn đã hỏi ${nameC[10]} với giọng nói hơi nhỏ.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[10]}, cậu ổn chứ? Có bị đau ở chỗ nào không?`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `${nameC[10]} lúc này đang hơi hoảng. Nhỏ liền ngồi dậy, kéo ${nameC[9]} ngồi lên. Đôi mắt cô đẫm lệ, đôi tai dạt xuống. Nhỏ cúi mặt, nói nhỏ với ${nameC[9]} bằng giọng điệu đầy hối lỗi.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Mình xin... lỗi nya... Vì mình lại... khiến cậu... bị thương nữa... rồi nya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Không sao đâu. Đừng có khóc mà. Chỉ là cậu vẫn chưa kiểm soát được hành vi của mình thôi.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Nhưng mà... mình luôn khiến cậu... gặp rắc rối vì... mình cả nya... `
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Đúng là thế nhỉ? Nếu cậu biết bơi thì mình sẽ bớt lo lắng cho cậu hơn. Nhưng mà chúng ta là “bộ đôi rắc rối”, đôi khi mình cũng gây rắc rối cho cậu nữa mà. Dù sao thì mình sẽ luôn bên cạnh cậu khi gặp rắc rối. Và ngược lại cậu cũng vậy nhỉ?`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `${nameC[10]} sau khi nghe xong thì bất ngờ, tai và đuôi dựng đứng lên. Cô dừng khóc và chín đỏ cả mặt. ${nameC[9]} không nhận ra ${nameC[10]} đã hết buồn nên vẫn cứ nói.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Phải rồi, thay vì nói “xin lỗi” thì cậu nên nói “cảm ơn” cho những lúc thế này.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `${nameC[10]} mỉm cười, ngẩng đầu lên trong khi mặt cô vẫn còn hơi đỏ còn đuôi cô thì đung đưa. Cô đưa ngón tay lên mắt, gạt đi những giọt nước mắt và nở nụ cười với ${nameC[9]}.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Đúng là ${nameC[9]} mà, cảm ơn nha!`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `${nameC[9]} nhìn vẻ mặt đó của ${nameC[10]} liền đơ ra một lúc, mặt cậu cũng hơi đỏ chút. Dường như tim của cậu đã đập lệch một nhịp, ${nameC[9]} lần đầu tiên có cảm giác như vậy. Cậu tự hỏi liệu có phải đây là do lần đầu ${nameC[10]} nói không có “nya” cuối câu hay do khuôn mặt của ${nameC[10]} đã hút hồn cậu. ${nameC[9]} lấy lại nhận thức và đánh trống lảng.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `A... Phải rồi... Mình đi lấy lại cái kiếm và khiên ở cuối dòng đây. Cậu... cứ đợi mình ở đây.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Vừa nói dứt lời ${nameC[9]} đã đứng dậy chạy đi luôn. ${nameC[10]} cứ thế vừa nhìn theo hướng ${nameC[9]} chạy vừa đứng dậy rồi cô tự nhủ.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Luôn bên mình à...`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `${nameC[1]} lúc này đang tập vung kiếm cạnh con hình nhân gỗ. Cậu đột ngột khựng lại.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình cảm nhận được đã có chuyện gì đó xảy ra giữa ${nameC[9]} và ${nameC[10]}.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Sau khi lấy lại được kiếm và khiên thì họ đã đến được nhà ${nameC[1]}. Trước khi bước vào nhà thì ${nameC[10]} đã kéo áo ${nameC[9]}.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Về chuyện vừa nãy đừng có kể cho Shuunya.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `À ừm, được thôi mình hứa.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Nya. Thưa bác, cháu đến tập luyện cùng Shuunya!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `...`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Dường như một thứ gì đó đã mắc kẹt trong tâm trí của ${nameC[9]}...`
			}
		]
	},
	{
		chapter: 4,
		title: `Buổi huấn luyện`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hiện tại tôi đang bảy tuổi và cha đã được thăng quân hàm lên làm Thượng úy đội trưởng của một trung đội lính. Và hôm nay, nhân dịp có ngày nghỉ nên tôi đã nhờ cha huấn luyện chiến đấu. Tiếng của kiếm gỗ va đập vào nhau, cùng những tiếng kêu đau đớn... của tôi... Tất nhiên rồi, những lúc như này thì tôi sẽ là người ăn hành mà. Cũng chả trách được khi huấn luyện thì cha cực kì nghiêm khắc. Dù sao cũng là vì để tôi có thể sinh tồn nên mới nghiêm túc thế này. Mỗi tội nó khổ quá...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đỡ này cha.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Sơ hở!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ha, không trúng con đâu.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ta đây chỉ nhử con thôi. Đỡ cú này thử xem.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đau đau đau! Con xin hàng.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cứ tưởng sau cú né tôi có thể trả đòn nhưng ai ngờ pha đó là để nhử tôi. Không hổ danh cha được thăng chức, quả thật rất xứng đáng.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Cũng đã được nửa năm từ lúc con nhờ ta, kỹ năng chiến đấu của con đã được cải thiện hơn đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thì con muốn ít nhất phải đánh trúng cha một phát. Nhưng có vẻ lần nào con cũng chỉ suýt thôi.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ha ha ha! Vậy cố lên nha con, đường còn dài lắm.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng vâng.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Mà hai đứa bạn của con đâu rồi? Con có bảo hai đứa nó sẽ qua đây luyện tập cùng mà.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ý cha là “bộ đôi rắc rối” đó hả? Con tin rằng họ vẫn đang ngủ.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Vậy à? Thế con muốn nghỉ ngơi chút không?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Con vẫn ổn. Tiếp tục nào cha, con tin lần này sẽ đánh trúng cha một phát.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Được! Ta rất sẵn lòng, lên nào con!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mặc dù nói vậy nhưng hiện tại với trình độ tôi một đấu một với cha là không thể. Tôi muốn sử dụng kỹ năng lắm đấy nhưng mà thân phận cần che giấu, ít nhất là cho đến năm mười tuổi. Thế nên tôi đành tập trung vào cải thiện kỹ năng chiến đấu và phán đoán tình huống.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Bước di chuyển khá đó. Cứ tiếp tục cho đến khi không cử động được thì thôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cơ thể sau khi chuyển sinh có năng lực thể chất tốt thật. May mà năng lực thể chất ở thế giới cũ không theo tôi đến đây.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `So với lần trước thì con có vẻ cầm cự lâu hơn chút. Nhưng mà...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cha tôi dùng cả cánh tay trái quật cả người tôi xuống. Tôi nằm bất động một lúc vì bị đau cả phía trước và phía sau.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Trọng tâm của con không được chắc chắn. Nó sẽ tạo sơ hở cho người khác dễ dàng hạ con chỉ với một pha quật tay như ta đã làm. Mà con còn ổn chứ?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đau... lưng con...`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ha ha. Nằm đó mà nghỉ ngơi chút đi. Ta vào nhà nghỉ chút đây. Khi nào bạn con đến thì sẽ tiếp tục sau.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi nằm đó nhìn lên bầu trời xanh, cơn gió mát thổi qua làm dịu đi những cơn đau. Ngắm nhìn những đám mây trôi đi như thời gian của cuộc đời tôi vậy. Trong khi suy nghĩ vu vơ tôi đã tự nhủ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thế là đã bảy năm rồi nhỉ?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cơn đau của tôi đã dịu đi chút nên đã đứng dậy, tập vung kiếm và tập đâm chém vào con hình nhân gỗ của cha. Cùng lúc đó, tôi cũng suy nghĩ tới việc nên dùng kỹ năng thế nào trong lúc chiến đấu. Rồi một ý tưởng đã nảy ra trong đầu tôi, ngó nhìn xung quanh xem có ai đang ở gần không để triển khai kỹ năng.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi đứng cách con hình nhân gỗ một khoảng gần. Đầu tiên hai tay tôi cầm chắc kiếm, đưa nó lên qua đầu. Sau đó tôi sử dụng『Lục phong Tinh thông』để điều khiển gió bao quanh lưỡi kiếm làm tăng áp lực giữa lưỡi kiếm và gió bao bọc. Đồng thời kích hoạt luôn kỹ năng『Trảm』. Đây là một kỹ năng của chức nghiệp『Đầu bếp』, truyền ma lực vào vũ khí tăng khả năng chém mạnh lên nhiều lần và chỉ áp dụng lên vũ khí sắc có thể vung. Rồi tôi vung kiếm theo hướng chéo phải qua trái. Trong khi chuyển động thì lưỡi kiếm tăng áp lực lên gió bao bọc, đẩy gió tách khỏi lưỡi kiếm di chuyển theo hướng chém đó. Tôi ngước nhìn lên con hình nhân gỗ thì thấy nó vẫn ổn. Có lẽ là đã thất bại rồi, dù sao đây cũng là lần thử đầu. Tôi đang định chạm tay vào để sờ xem có vết xước không thì giọng nói từ đằng sau cất lên làm tôi giật thót tim.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Bọn mình tới rồi này. Xin lỗi vì nay đễ trễ nha. Tại ngủ quên và một số chuyện đã xảy ra với Asa...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cậu hứa không kể rồi mà nya! Mà mình cũng xin lỗi vì đến trễ nya.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Không... sao đâu...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]}? Cậu ổn chứ? Sao trông cậu lo lắng và toàn nhiều mô hôi thế này?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À... Mình nãy... luyện tập hơi nhiều... đó mà. Haha...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Cậu chăm chỉ thật đó nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `May quá không ai phát hiện ra tôi vừa dùng kỹ năng xong. Tim tôi vẫn còn đang đập rất nhanh nữa chứ. Mấy đứa này từ hôm tôi kể chuyện luyện tập cùng cha thì mắt họ sáng lên muốn luyện cùng. Thì ra “bộ đôi rắc rối” cũng muốn làm mạo hiểm giả cùng tôi, rồi cha bước ra từ trong nhà.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Được rồi! Các con đã sẵn sàng chưa?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `À bác, ${nameC[1]} chắc cần được nghỉ ngơi chút. Bạn ý luyện tập suốt rồi ạ.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Đúng đó nya.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Thằng nhóc này, ta bảo con nghỉ ngơi rồi mà. Thôi ngồi xem ta với bạn con luyện tập đi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Xét khả năng chiến đấu của “bộ đôi rắc rối” thì tôi vẫn hơn do đã được huấn luyện trước. Nhưng khi nói đến phối hợp thì chắc không ai bằng hai người họ được. ${nameC[9]} thường sử dụng khiên, chuyên làm người đỡ đòn bởi sức khỏe của cậu. Còn ${nameC[10]} thì dùng kiếm nhưng vì là miêu nhân nên tốc độ phản xạ và sự dẻo dai làm cho cô có một lợi thế lớn. Tất nhiên cả khiên và kiếm hiện tại đều là từ gỗ bởi đây chỉ là luyện tập.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ cha tôi ra đòn trước nhưng ${nameC[9]} liền đỡ đòn. Từ phía sau ${nameC[9]}, ${nameC[10]} liền nhảy lên và vung kiếm xuống. Cha tôi có vẻ đã nhận ra liền nhảy giật lùi lại.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Chiến thuật mấy đứa khá lắm.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Chúng cháu cảm ơn nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Vừa dứt câu thì ${nameC[10]} đã lao lên nhanh chóng chém tới tấp cha tôi rồi nhảy giật lùi. Sau đó ${nameC[9]} lại lao lên đỡ đòn và khống chế cha. ${nameC[10]} lại ở sau đó nhảy lên và họ cứ lặp đi lặp lại chiến thuật như vậy. Chiến thuật thì hay thật nhưng đối với cha là người có kinh nghiệm chiến đấu thì việc lặp lại nhiều lần như thế sẽ tìm được ra sơ hở. Và đúng như tôi nghĩ, lần này cha đã không còn nhảy giật lùi mà thay vào đó cha đạp lên khiên của ${nameC[9]} và nhảy ra phía sau cậu. ${nameC[10]} lúc này chuẩn bị nhảy liền giật mình nên đã mất thăng bằng và bị cha cho một chém. Còn ${nameC[9]} chưa kịp phản ứng sau cú vừa nãy liền bị ăn một đạp từ phía sau bởi cha và một chém. Thế là trận đấu kết thúc.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Mấy đứa phối hợp với nhau tốt lắm nhưng mà không nên dùng liên tục một chiến thuật. Ta có thể đọc được bước di chuyển sau đó và tìm cách phá vỡ nó đấy.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Chúng cháu biết rồi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Mình thấy khỏe hơn rồi. Có thể cho mình nhập hội cùng không?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Tất nhiên là được rồi nya. Nhưng mà chiến thuật bây giờ thế nào đây nya?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Phải đó, chiến thuật mình nghĩ ra còn bị phá mất rồi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đừng lo, mình đã có kế hoạch. Đầu tiên...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau một hồi thảo luận chiến thuật thì mọi thứ cũng đã xong.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cha! Bọn con xong rồi, tiếp tục nào.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Được thôi. Hãy cho ta thấy chiến thuật mới nào.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vậy mời cha lên trước.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Vậy thì đỡ này. ${nameC[9]} vẫn đỡ đòn đầu tiên nhỉ?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[10]}! Lên đi.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Vẫn là chiến thuật cũ nhỉ? Chẳng phải ta đã bảo...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Bác nghĩ vậy à nya?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Chiến thuật của tôi là như này. Vẫn sử dụng chiến thuật cũ nhưng lần này ${nameC[9]} sau khi đỡ đòn sẽ gọi tên ${nameC[10]}. Lí do là để cha tôi chú ý đến chi tiết ${nameC[10]} sẽ nhảy từ phía sau lên. Trong lúc cha đang tập trung vào ${nameC[10]} thì tôi từ phía sau có thể tiến lên áp sát cha. Đúng như dự đoán cha tôi đã phải nhảy giật lùi lại.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Lần này ta có vẻ mất cảnh giác rồi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vẫn chưa xong đâu cha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} sau cú nhảy trên cao liền đáp xuống khiên của ${nameC[9]}. Nhỏ liền lấy đà để lao tới cha tôi, đồng thời ${nameC[9]} cũng dùng lực để đẩy ${nameC[10]} luôn. ${nameC[10]} sau đó lao nhanh về phía cha, do chưa kịp lấy lại thăng bằng nên sau pha hất ngược ${nameC[10]} ra phía sau thì đã bị ngã. ${nameC[9]} sau đó liền tiến lên dùng khiên và cả người đè cha tôi xuống. Tôi và ${nameC[10]} chuẩn bị chém cha và có được phát đánh trúng lần đầu, nhưng...`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `『Cường hóa Thể chất』`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Đột ngột cha đứng lên, nâng ${nameC[9]} lên ném vào tôi. ${nameC[10]} vung kiếm nhưng cha tôi đã lộn nhào ngược về phía kiếm gỗ cha làm rơi trước đó. Sau khi chộp được thì cha liền lao thẳng về phía chúng tôi và mỗi người đều bị một chém ngay tức khắc.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Không ngờ các con phải ép ta dùng đến kỹ năng để thoát khỏi thế trận vừa nãy.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Không công bằng, bọn con đâu có kỹ năng!`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Nào nào. Khi chiến đấu không ai nhường ai đâu. Thế có tiếp tục không nào?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thế là ba bọn tôi luyện tập với cha miệt mài cho đến tầm trưa.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Mọi người tập luyện thế đủ rồi, vào ăn trưa nào.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Các con nghe rồi đó. Vào nhà nghỉ ngơi đi. Ta đi cất con hình nhân gỗ.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}`, `${nameC[9]}`, `${nameC[10]}` ],
				content: `Vâng (nya)!`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Chú diều hâu từ đâu bay tới đậu trên con hình nhân gỗ. Người cha tiến lại gần thấy chú diều hâu kì lạ đứng nhìn ngắm một chút.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ủa? Sao lại có chú diều hâu ở đây vậy? Vùng này chắc chắn không có loại chim này ở đây. Hừm...`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Người cha đang ngắm nhìn thì chú diều hâu đó đã bay đi mất. Nhưng kì lạ thay con hình nhân gỗ đó bị đổ mất nửa phần trên.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `A! Phải mua một con khác rồi. Nhưng thật lạ, vết cắt rất phẳng... Chẳng lẽ do con trai mình? Hay một trong đứa bạn của nó? Mà kệ đi, vào ăn trưa thôi. Mình đói rồi.`
			}
		]
	},
	{
		chapter: 3,
		title: `Buổi tối của tôi`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Lúc này mọi người đều ngồi quanh bàn ăn và đây cũng là lúc cả nhà kể những câu truyện đã gặp ngày hôm nay. Và cha luôn là người mở đầu.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ta đã được bảo là trong thời gian tới ta sẽ được thăng quân hàm lên làm Thượng úy đội trưởng của một trung đội lính đấy.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Thật hả anh? Đây đúng là tin tốt thật mà.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cha tài thật đấy.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Tất nhiên rồi, cha con mà lại. Sắp tới cả nhà sẽ được ăn những món ngon hơn rồi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cả nhà tôi đều rất vui mừng với cơ hội thăng tiến của cha. Như vậy điều kiện sống của gia đình tôi sẽ được cải thiện thêm chút. Tôi đang vừa thưởng thức súp vừa vui cho cha thì đột nhiên cha hỏi tôi một câu khiến cho tôi có linh cảm không lành sau đó. `
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Mà nhân tiện con cũng đã sáu tuổi rồi, ta và mẹ con đang thắc mắc mai sau con sẽ làm gì?`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Đúng rồi đó con, mẹ cũng đang muốn hỏi con.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Làm gì là sao à?`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ý ta là con có dự định vào làm lính không? Ta có thể giúp con vào một vị trí nào đó.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thì ra ý cha mẹ tôi là vậy. Chắc là vì dạo gần đây tôi có nhờ cha huấn luyện một chút để biết thêm về cách chiến đấu cũng như cách phòng vệ thế nào. Hiện tại cứ trả lời xem sao vậy.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thực ra con không hề có ý định làm lính. Con đang hướng đến làm một mạo hiểm giả.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cha mẹ tôi sau khi xong câu đó thì đã ngạc nhiên. Cha tôi thì đập bàn và lên tiếng.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Khoan đã! Con có biết làm mạo hiểm giả nguy hiểm đến tính mạng thế nào không!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Vậy là linh cảm của tôi đã đúng. Cha mẹ rất yêu thương tôi nhưng đặc biệt là cha thì có phần hơi bao bọc tôi quá. Chắc cha muốn tôi đi lính để có thể trông chừng tôi... mặc dù đây là ý tốt và tôi sẽ không phải lo gì nhiều. Nhưng... đây là cuộc sống thứ hai của tôi... Tôi muốn tự bước đi bằng chính bản thân mình mà kiếp trước chưa từng dám. Vậy nên, tôi nghiêm túc nhìn thẳng và cha và dõng dạc nói về hướng đi của mình.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Con biết nó sẽ rất dễ gây nguy hiểm đến tính mạng. Nhưng dù có vậy thì con vẫn muốn được làm mạo hiểm giả và đi phiêu lưu khắp nơi. Đây đã là bước đường mà bản thân con quyết định rồi ạ!`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Con đúng thật là...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hầy... Những cuộc nói chuyện như thế này thì thường rất khó để một đứa trẻ có thể thắng được. Tôi biết điều đó nên cố thử nghĩ xem làm thế nào để thuyết phục được cha, rồi mẹ lên tiếng.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Bình tĩnh nào anh. Hãy nhìn kĩ đôi mắt của nó kìa. Mỗi lần nghiêm túc thì nó lại trưng ánh mắt như vậy đó.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cha sau khi nghe xong câu nói đó của mẹ liền dừng nói. Cha nhắm mắt lại, đắn đo suy nghĩ rồi thở dài.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Con nghiêm túc chứ?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Đây chính là cú chốt hạ của tôi. Cảm ơn mẹ nhiều!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng! Con hoàn toàn nghiêm túc những điều con vừa nói. Xin cha mẹ cho phép con theo con đường đã chọn.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cha nhìn tôi với vẻ mặt bất lực, hơi cúi đầu suy nghĩ chút. Rồi ngẩng lên cùng ánh mắt chấp nhận trước cậu con trai đang tràn đầy kiên định.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Thôi được rồi, con nghiêm túc như vậy thì ta cũng đành chấp nhận. Nếu thay đổi ý định thì cứ bảo ta.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cứ ngỡ thế là tạm thời an toàn nhưng rồi tôi vẫn bị chọc.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Nhưng mà hiếm có đứa trẻ nào vẫn còn giữ được bình tĩnh như vậy sau khi bị lớn tiếng như vậy đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À thì... Con cũng hơi sợ chứ. Nhưng vì đam mê nên con đã gạt nỗi sợ và bình tĩnh nói với cha mẹ thôi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi vừa nói vừa cười gượng gạo để che giấu đi nỗi lo lắng của mình về việc bị nghi ngờ không giống như một đứa trẻ. `
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Vậy à. Con trai mẹ ngầu quá đi. Giờ đến lượt chuyện của mẹ nè. Hôm nay á...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau khi ăn xong bữa tối thì tôi đã đi tắm và rồi quay về phòng ngủ của mình. Nằm lên giường, tôi nhìn lên trần nhà và nghĩ Bảng trạng thái. Rồi mọi thông tin đã xuất hiện trước mắt tôi...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tên, tuổi, giới tính, ... đều hiện ra hết. Các dạng thông tin về thể chất thì được chia làm nhiều thành phần và được chuyển thành số liệu để có thể dễ dàng theo dõi... chắc cũng chỉ mang tính tương đối.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Về cái tên ${nameC[1]} ${nameC[2]}, tuy đã đăng ký trước khi chuyển sinh vào『Dainisekai』nhưng vì gia đình tôi chỉ là thường dân nên cái họ là ${nameC[2]} không được nhắc đến. Chỉ những tầng lớp quý tộc mới có tên họ nên tôi đã ẩn phần thông tin này đi để tránh gặp rắc rối. Tiện thể tôi cũng ẩn hết luôn các phần đáng lẽ mà một đứa trẻ chưa có như chức nghiệp, kỹ năng và danh hiệu.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mà tại sao tôi lại có thể ẩn được thông tin thì là do quyền lợi đặc biệt của danh hiệu Người chuyển sinh. Cho phép ẩn hoàn toàn các thông tin trong Bảng trạng thái bạn muốn mà không sợ thứ gì có thể đọc được. Để một đứa trẻ có quá nhiều thông tin trước mười tuổi là không hề bình thường. Nhất là khi có thể bị ai đó lỡ dùng kỹ năng『Giám định』lên thì to chuyện mất. Ý tôi là tôi không muốn bị trở thành trung tâm bàn tán, làm thường dân hiện tại là đủ rồi. Cho đến khi tôi trưởng thành thì các thông tin cần ẩn vẫn sẽ bị ẩn.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau khi xem lại một số thông tin của bản thân thì tôi bắt đầu luyện tập sử dụng các kỹ năng vào mỗi tối như thường lệ. Danh hiệu Lục phong Chúc phúc là điều ước đầu tiên của tôi, cho phép triển khai phong thuật nhanh và tiêu thụ ít ma lực hơn. Hồi đầu khi sử dụng phong thuật thì tôi đã làm rối tung hết cả căn phòng lên, tất nhiên là không bị phát hiện nhưng đã bị cha mắng cho một trận vì căn phòng bừa bộn. Dần dần tôi đã kiểm soát được và có được kỹ năng『Lục phong Tinh thông』. Đây là ma pháp cho phép tôi điều khiển gió theo ý mình muốn ở mức cơ bản. Mục đích của phong thuật này để tôi có thể định hình gió ở một dạng nhất định, nói dễ hiểu hơn thì phát triển ma pháp mới từ sự định hình đó. Và hiện tại tôi đã phát triển được thêm hai phong thuật mới là『Hòa âm Kết giới』và『Trôi nổi』.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `『Hòa âm Kết giới』là ma pháp ngăn không cho âm thanh lọt ra ngoài hoặc vào trong. Bây giờ tôi đang dùng nó trong phòng ngủ của mình để cha mẹ không nghe thấy. Và tất nhiên kết giới này chỉ ngăn âm thanh.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `『Trôi nổi』là ma pháp kiểm soát gió xung quanh vật khiến nó bay lên và di chuyển đến nơi mình muốn. Nghe có vẻ thú vị nhưng xét về mặt kĩ thuật thì nó vô cùng khó. Cần điều chỉnh lượng gió thế nào để phù hợp với trọng lượng và đặc điểm của vật để không phá hủy nó. Còn chưa kể đến lúc di chuyển vật cần phải tập trung để kiếm soát tốc độ. Đồng thời còn phải trung hòa gió với môi trường xung quanh như khi có một cơn gió khác thổi qua hoặc độ ẩm không khí... Nếu thành thục thì có thể áp dụng lên nhiều vật cùng lúc. Nhưng mà bây giờ tôi mới chỉ dùng được lên một vật và đang luyện tập với cái ghế gần giường.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Trong khi tôi đang hăng say luyện tập thì cửa bắt đầu mở. Cũng may là tôi đang ngồi hướng nhìn về phía cửa nên đã mau chóng hủy hết ma pháp và nằm xuống giường. À, ra đó là mẹ tôi.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Shu, con có ổn không? Nãy mẹ gọi con không có thấy trả lời.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À, nay con chơi vui quá nên là vừa nằm ngủ thiếp đi ạ. Thế mẹ gọi con có chuyện gì ạ?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Xin lỗi mẹ nhiều! Thực ra con luyện dùng ma pháp cơ, lỡ làm mẹ lo lắng không đâu mất rồi...`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Mẹ có gọt ít táo đem vào cho con nè.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `A, con cảm ơn, làm mẹ mất công đem vào cho con rồi. Mẹ ăn cùng con không?`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Mẹ ăn phần của mẹ rồi, con cứ ăn đi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `À mà cảm ơn mẹ lúc nói chuyện với cha, mẹ cứu con một phen rồi đó. Con cứ tưởng sẽ thành thảm họa cơ.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Mẹ cũng biết tính cha con mà. Với cả con cũng chưa từng đòi hỏi gì nên mẹ đã rất vui khi con nói vậy. Tất nhiên, nếu con muốn nói gì thì cha mẹ đều sẽ lắng nghe con từ tận đáy lòng.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi tự hỏi liệu bản thân sau này có thể làm gì để có thể báo hiếu lại cho cha mẹ. Thật là may mắn khi đây là gia đình của tôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng, con biết rồi ạ.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Thôi giờ mẹ đi ngủ đây, ăn xong thì cứ để đĩa đấy mai rửa cũng được.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vậy thì con chúc mẹ ngủ ngon.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Chúc Shu ngủ ngon nha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mẹ hiểu chuyện và quan tâm tôi nhiều thật. Lần sau phải chú ý ngồi trò chuyện với mẹ nhiều hơn nữa mới được. Còn giờ thì ăn hết chỗ táo và luyện ma pháp cho đến khi hết chỗ ma lực còn lại thôi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau khi hết chỗ ma lực thì tôi liền lăn ra ngủ lập tức. Mục đích là để gia tăng giới hạn ma lực, cho dù tỉ lệ tăng còn chưa đến một phần trăm. Nếu thành công thì cũng chỉ tăng được thêm một chỉ số. Thậm chí nhược điểm của việc cho bay sạch ma lực là khiến cơ thể bị đuối sức mà ngất đi. Thế nên luyện tập xong rồi đi ngủ là rất hợp lí, đồng thời cũng học được cách nhớ giới hạn năng lượng để lúc thi triển ma pháp sẽ dễ dàng hơn. Và đó là hoạt động bí mật mỗi buổi tối của tôi.`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Trong không gian ban đêm, chú diều hâu đậu trên cành cây, nhìn qua cửa số thẳng vào phòng ${nameC[1]} một hồi lâu, rồi chú tung cánh mà bay đi để lại sợi lông vũ rơi lên gờ cửa sổ...`
			},

		]
	},
	{
		chapter: 2.5,
		title: `Kết bạn`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Lúc này đang là tầm chiều, mặt trời cũng đã sắp sửa lặn. Một vài đứa trẻ đang chơi ném bóng ở sân, còn tôi thì đang ngồi dưới gốc cây, kể lại chuyện vì sao sáng nay đến muộn với hai đứa bạn của tôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `... Và đó là lí do sáng nay mình đến muộn.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Ra là thế. Nếu là mình sẽ hét toáng lên để khiến cho nó sợ.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Còn mình thì sẽ dùng móng vuốt để xua đuổi nó đi nya.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Phải rồi, nếu mà thấy đàn chim chắc cậu sẽ đuổi theo nó đi mất.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Haha! Phải đó.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Đừng có trêu mình nữa mà nya. Chẳng qua mình không thể kiểm soát được bản thân khi thấy nó thôi nya.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Trong lúc chúng tôi đang trêu ${nameC[10]} thì từ đâu quả bóng bay lại phía này. Với giác quan nhạy bén của ${nameC[10]} thì cô đã giơ tay ra bắt lấy nó mà không cần phải ngoảnh lại. Rồi một đứa trẻ với vẻ mặt sợ sệt, lo lắng qua chỗ chúng tôi.`
			},
			{
				class: `villager`,
				name: [ `Đứa trẻ` ],
				content: `Em xin lỗi! Anh chị có bị sao không ạ? Quả bóng là do em ném qua đây...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Quả bóng này làm sao có thể khiến cho anh chị bị thương được chứ nya. Của em nè nya.`
			},
			{
				class: `villager`,
				name: [ `Đứa trẻ` ],
				content: `Cảm ơn chị nhiều và em xin lỗi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cậu giỏi thật ha, ${nameC[10]}. Mình chả thể nào bắt được mà không cần nhìn đâu.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} sau khi nghe xong thì mặt cô rất tươi, tai dựng đứng lên, còn đuôi thì đung đưa. Cứ mỗi khi được khen hoặc đang vui thì ${nameC[10]} sẽ như vậy.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Khen mình nữa đi nya.`
			},
			{
				class: `villager`,
				name: [ `Đứa trẻ` ],
				content: `Mà cho em hỏi sao ba anh chị lại trở thành bạn của nhau vậy?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Hừm... tại sao ta?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Để mà nói ra thì... Hừm... chuyện hơi dài...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Mình tự hỏi có nên kể không ta nya?`
			},
			{
				class: `villager`,
				name: [ `Đứa trẻ` ],
				content: `Ơ? Đừng làm em tò mò nữa mà. Kể đi anh chị.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Thôi được rồi. Trước tiên là hoàn cảnh của anh thì lúc đó là một năm trước, anh đang năm tuổi...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cha mẹ của ${nameC[9]} đã bị sát hại trong một chuyến đi bởi một băng đạo tặc. Mặc dù cậu đã cố bảo vệ mẹ đến cuối cùng nhưng mẹ cậu vẫn không qua khỏi. Và khi cậu sắp bị giết thì có một người lạ mặt với cây thương đã cứu cậu trong gang tấc. Sau đó đưa cậu về sống ở cô nhi viện. Đó là những gì đã xảy ra trước khi tôi gặp ${nameC[9]}.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Rồi ngày hôm sau đó, tôi cùng mẹ đến cô nhi viện để xem có giúp được gì không thì tôi đã gặp cậu ý đang đứng khoanh tay dựa tường. Lúc đó cậu trông rất khó gần, cảm giác như đang xua đuổi mấy đứa trẻ khác vậy. Tôi liền thử tới bắt chuyện nhưng cậu lại tỏ vẻ đáng sợ như đang muốn bảo đừng làm phiền vậy. Tôi đến bên cạnh nói vài câu nhưng cậu cũng chả phản hồi gì, làm như không nghe thấy tôi vậy. Thế nên là tôi đã rời đi. Nhưng tình cờ lúc đó có một chú diều hâu đang tha một quả táo. Có vẻ như cuống của quả táo không chịu được nữa nên đã đứt. Quả táo rơi xuống mái nhà, đập trúng vào một cái mái ngói khiến nó bị rơi và vị trí rơi lại là nơi tôi đi. Sau khi nghe thấy âm thanh lạ ở phía trên, tôi chưa kịp phản ứng gì thì mình đã bị đẩy ngã. Tôi hơi choáng sau cú ngã đó, nhìn qua cạnh chân mình thì đó là một cái mái ngói. À, thì ra cậu ta vừa cứu tôi. Không biết tại sao cậu lại tỏ vẻ như vậy. Tôi đứng dậy, kéo cậu đứng lên và nói chuyện.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nè, vậy là cậu có nghe thấy mình nói nhỉ? Tại sao cậu lại lờ mình vậy?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Chỉ là mình đang có chút suy nghĩ...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vậy có phiền không khi kể cho mình nghe? Dù sao thì chia sẻ cho người khác cậu sẽ cảm thấy đỡ hơn khi giữ trong lòng đó. Tất nhiên là nếu cậu muốn thôi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cậu ấy quay mặt đi, tỏ ra lưỡng lự, dường như không muốn nói về nó. Im lặng hồi lâu, cậu nói tiếp...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Thực ra là về cha mẹ mình...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thế là tôi đã nghe hết câu chuyện của cậu ta và việc tự dằn vặt bản thân ra sao khi không đủ mạnh mẽ để bảo vệ cha mẹ của cậu.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Nè, cậu nghĩ hơi quá rồi. Cậu mới chỉ có năm tuổi thôi đấy. Việc đứng ra để bảo vệ cũng đã là một hành động can đảm lắm đó.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Nhưng mình không bảo vệ được người thân thì nó còn có ý nghĩa gì chứ...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi có thể thấu hiểu được lời cậu nói, mất đi người thân là mất đi một nơi để trở về. Nhưng mà cậu ấy lại không biết rằng bản thân lại dũng cảm đến nhường nào khi làm điều đó.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vậy việc vừa nãy thì sao? Cậu vừa cứu mình một phen đấy. Cho dù hành động này không như việc đứng lên bảo vệ của cậu nhưng cũng đã cứu mình. Và cảm ơn cậu, mình nợ cậu lần này.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Tớ đã cứu cậu nhỉ?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đúng vậy. Mặc dù sẽ mất thời gian để cậu thay đổi suy nghĩ về vụ đó nhưng trước tiên mình tên là ${nameC[1]}, cậu muốn làm bạn với mình không?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Mình tên ${nameC[9]}, làm bạn của nhau nha và cậu nợ mình một lần đấy.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Quay trở lại thực tại, câu chuyện về tôi và ${nameC[9]} đã kể xong và tôi đã bất ngờ...`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `... Đó là cách bọn anh đã quen... Ế! Sao mọi người lại ngồi quanh đây hết rồi thế này?`
			},
			{
				class: `villager`,
				name: [ `Đứa trẻ` ],
				content: `Tại truyện của mấy anh chị hay quá nên thành ra ai cũng muốn lắng nghe. Và anh ${nameC[9]} ngầu quá đi!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Ngầu thế mà lại. Và ${nameC[1]} vẫn còn nợ mình nhỉ? Hihi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Xem nào, nếu không nhầm thì nợ mình đã hết rồi. Hồi trước có cái vụ mà cậu...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `A! Đừng kể nó! Cậu hứa rồi mà! Cậu không còn nợ mình gì nữa đâu!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thế mới đúng chứ. Đừng nghĩ mình quên nha.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Rồi rồi...`
			},
			{
				class: `villager`,
				name: [ `Đứa trẻ` ],
				content: `Tiếp theo là đến chuyện về chị ${nameC[10]}!`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `À ừm... Nè ${nameC[1]}, chúng ta có nên kể không nhỉ? Tại vì cứ mỗi lần...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} tuy là tinh nghịch nhưng khi nói về chuyện này thì cô lại cảm thấy có trách nhiệm trong những hành động ở quá khứ. Nhưng...`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Mọi chuyện sẽ ổn thôi, trước sau gì mình cũng định kể nó ra mà nya. Đó là khoảng nửa năm trước, chị đang năm tuổi...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Gia đình của ${nameC[10]} đã bị nhóm săn nô lệ đuổi bắt. Nhờ cha mẹ cô cầm chân nhóm săn nên cô ấy đã chạy trốn được vào rừng. Cô đã chạy liên tục không ngừng nghỉ vì trong rừng nhiều ma thú nguy hiểm. May thay cô đã ra khỏi rừng an toàn nhưng sức lực của cô đã đến giới hạn nên là đã gục ngã. Về thông tin cha mẹ của cô thì chưa có gì, theo suy đoán chắc đã bị bắt. May vào lúc đó binh lính tuần tra quanh thành đã bắt gặp cô đang nằm gục ở gần bìa rừng nên đã đưa về cô nhi viện.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cùng hôm đó, tôi đang chơi với ${nameC[9]} và vài đứa trẻ ở ngoài sân thì một vài binh lính chạy hối hả đang bế một cô bé thú nhân vào cô nhi viện.`
			},
			{
				class: `soldiers`,
				name: [ `Binh lính` ],
				content: `Sơ ${nameC[5]}! Khẩn cấp! Cô xem giúp được gì cho bé này được không?`
			},
			{
				class: `${nameC[5]}`,
				name: [ `${nameC[5]}` ],
				content: `Chuyện khẩn cấp gì vậy? Ôi! Mau đưa cô bé đó lên giường mau. Tôi sẽ lấy Thuốc Hồi phục ngay.`
			},
			{
				class: `soldiers`,
				name: [ `Binh lính` ],
				content: `Cảm ơn sơ, phiền sơ rồi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Chúng tôi lúc này đứng ở bên ngoài nhìn qua cửa sổ, tò mò chuyện gì xảy ra. ${nameC[9]} chưa kịp nghe tôi nói dứt thì cậu đã chạy vào.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Chúng ta thử vào ngó đi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ê khoan đã! Này! Hầy... đừng làm phiền người ốm chứ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thế là tôi cũng chạy vào, sơ ${nameC[5]} đang cho cô bé đó uống thuốc và tình trạng của cô đã đỡ hơn nhiều. Nhưng khi cô có lại ý thức thì cô đã nhảy một phát vào góc tường, đuôi dựng đứng lên xù như bông lau còn đôi tai dạt ra sau, móng vuốt thì nhô ra và cô đang thủ sẵn thế tấn công. Người cô như đang co rúm lại nhưng đồng thời cũng sẵn sàng cào xé bất cứ ai dám tiếp cận. Bầu không khí trong căn phòng bỗng nặng nề hơn.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Bình tĩnh nào cậu, mọi người ở đây sẽ không làm hại cậu đâu.`
			},
			{
				class: `soldiers`,
				name: [ `Binh lính` ],
				content: `Lùi lại đi nhóc, cô bé này đang ở trạng thái nửa tỉnh nửa mơ nên không phân biệt ai là bạn ai là thù đâu. Nguy hiểm lắm.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Thực ra các chú mặc giáp như thế đứng trước cô bé đang như kia thì cô ý sẽ thấy sợ nhiều hơn đấy.`
			},
			{
				class: `soldiers`,
				name: [ `Binh lính` ],
				content: `À...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Trong khi mọi người đang nghĩ cách để khiến cô bé bình tĩnh lại thì ${nameC[9]} đã chầm chậm tiến đến chỗ cô ý. `
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Đồ ngốc ${nameC[9]} này! Có kế hoạch gì không mà đã tiếp cận thế hả?`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Cứ tin ở mình.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[9]} ngày một đến gần hơn, cô bé nhe nanh, giơ vuốt đã tung một đòn và may là ${nameC[9]} né được. Cậu từ từ chìa tay ra, mặc cho cái nhìn đầy nghi hoặc của cô bé, rồi ôm chầm lấy cô.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Bình tĩnh nào cậu. Mọi người thực sự đều là người tốt. Họ đã cứu cậu đó, bình tĩnh nào. Mọi chuyện sẽ ổn thôi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mặc kệ việc cậu đang bị cô cào nhiều phát sau lưng, vết thương kha khá nhiều thì cậu vẫn ôm cô thật chặt. Và sau một lúc cô đã dừng lại và ngất đi. Dường như cô đã cảm nhận được điều gì đó như là sự chân thành từ ${nameC[9]} nên cô đã bình tĩnh lại mà thả lỏng người. Và ${nameC[9]} sau đó cũng ngất đi vì quá đau. Chú diều hâu đậu ở cửa sổ chứng kiến mọi việc đã bay đi...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Quay về hiện tại thì ${nameC[9]} đang quay người lại và vén áo lên để hiện ra tấm lưng đầy những vết cào của ${nameC[10]}.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Mọi người có thể thấy đây là những vết thương hồi đó. Sau khi anh tỉnh dậy thì thấy ${nameC[10]} và ${nameC[1]} đang ngồi cạnh bên giường. Và lúc đó anh và ${nameC[1]} đã làm bạn với ${nameC[10]}.`
			},
			{
				class: `villager`,
				name: [ `Đứa trẻ` ],
				content: `${nameC[9]} đúng là ngầu nhất luôn đó!`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Xin lỗi cậu hồi đó, Konyashi. Tất cả là tại mình mà cậu đã bị thương nya...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} khi mà buồn hay cảm thấy hối lỗi những việc sai thì khuôn mặt cô trông rất ủ rũ, đôi tai dạt xuống và đuôi thì thu gọn lại gần hông. ${nameC[9]} thấy thế liền đưa tay xoa đầu ${nameC[10]}.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[10]}, cậu vẫn đang để tâm đến chuyện này à?`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Ừm nya...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Vậy hãy lắng nghe mình này. Những vết thương này không là gì so với việc bảo vệ được cậu. Mình không hề hối hận những hành động của mình.`
			},
			{
				class: `${nameC[10]}`,
				name: [ `${nameC[10]}` ],
				content: `Ừm cảm ơn nya...`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Bên cạnh đó thì mình đã có mục tiêu để bảo vệ đó là những người quan trọng đối với mình. Nhất là ${nameC[10]}, ${nameC[1]}, sơ ... Ủa? Sao cậu lại quay người lại vậy? Mình vừa nói gì khiến cậu bực à? Nè?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `${nameC[10]} sau khi nghe đến tên mình xuất hiện đầu tiên liền chín đỏ cả mặt. Cô liền quay người đi, ngồi ôm chân, đôi tai thì dựng đứng lên còn đuôi thì vung vẩy. Và đó là ${nameC[10]} khi bị dính “đòn chí mạng” từ ${nameC[9]}.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Này ${nameC[1]}, mình vừa nói gì khiến ${nameC[10]} bực mình à?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Cậu đúng là ngốc mà. Thậm chí mấy đứa trẻ đang ngồi đây còn hiểu được chuyện gì đang xảy ra.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Ơ vậy mình đã nói gì?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Tự tìm hiểu đi Ko-wa-shi.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `Nói mình đi mà!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ô nhìn thời gian này, sắp đến bữa tối rồi mình phải về ngay đây. Hẹn gặp lại mọi người.`
			},
			{
				class: `${nameC[9]}`,
				name: [ `${nameC[9]}` ],
				content: `${nameC[1]}! MÌNH ĐÃ NÓI GÌ SAI VẬY?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thế là tôi đã chạy một phát đi để mặc ${nameC[9]} bối rối không hiểu đã nói gì sai.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nếu mọi người hỏi tại sao tôi vẫn chơi với “cặp đôi rắc rối” thì đó là vì “bữa ăn rất ngon”. Đúng vậy, lí do chính của tôi đó.`
			}
		]
	},
	{
		chapter: 2,
		title: `Mọi người và nơi tôi sống`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hiện giờ tôi đang đi trên con đường đất quen thuộc để đến cô nhi viện. Tôi ngẩng đầu, ngắm nhìn bầu trời trong xanh điểm một vài vệt mây bông trắng đang trôi nhè nhẹ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Một chú chim dáng giống diều hâu có lông màu nửa trắng phần chân và lam phần đầu. Nó bay vèo xuyên thủng qua những đám mây rồi đột ngột chuyển hướng lao về phía tôi. Tôi giật mình, đứng lại và thắc mắc tại sao diều hâu lại lao tới hướng của mình. Ngay lập tức, tôi chuyển sang thế thủ vì dù có chạy nhanh đến thế nào thì tôi cũng chả tránh được tốc độ bay của nó. Diều hâu đang lao tới, tôi nhắm mắt và chấp nhận việc bị thương. Đột ngột tôi cảm nhận được một làn gió dường như rất quen thuộc. Cảm giác này... tôi không thể hiểu... nhưng tôi cảm nhận được. Dường như nó đang thì thầm tôi điều gì đó. Diều hâu lúc này đã rất gần rồi nhưng tôi lại không cảm thấy sát khí của bọn nó. Thế nên tôi đã thả lỏng cơ thể, quan sát nó và đúng như linh cảm của tôi. Diều hâu đã bay qua đem theo làn gió mát mẻ cùng sự tự do. Tôi bất giác quay người nhìn chú bay đi khuất tầm mắt nữa, hoài nghi về điều vừa xảy ra, liệu nó là một trò chơi khăm của ai đó hay là thử thách sự can đảm dành cho tôi? Giờ tôi chả có chứng cứ gì nên đành gác lại và nhanh tới cô nhi viện.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ tôi đã đến kịp lúc trước khi vào học. Cùng lúc đó thì sơ ${nameC[5]} đứng trước cửa đang lắc chiếc chuông cầm tay để gọi mấy đứa trẻ từ sân trước vào học. Còn tôi thì đang hơi mệt sau khi chạy nên tôi đã đứng lại một lúc, tay chống đầu gối và thở hổn hển. Vừa bình tâm được một chút thì có hai bàn tay của ai đó đập mạnh vào lưng tôi làm giật bắn mình.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Ui da... Ai làm vậy đấy?`
			},
			{
				class: `unknown`,
				name: [ `Cậu bé` ],
				content: `Đáng đời! Làm câu giật mình rồi hả? Tụi này đợi cậu mãi để chơi cùng mà không thấy đâu.`
			},
			{
				class: `unknown`,
				name: [ `Cô bé` ],
				content: `Đúng rồi đó nya. Sao hôm nay cậu lại đến muộn vậy nya?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Hai cậu... CÓ BIẾT ĐAU LẮM KHÔNG!`
			},
			{
				class: `unknown`,
				name: [ `Cậu bé` ],
				content: `Xin lỗi nha, nhưng tại sao đến muộn vậy?`
			},
			{
				class: `unknown`,
				name: [ `Cô bé` ],
				content: `Xin lỗi xin lỗi nya. Tớ cũng tò mò vì hiếm khi thấy cậu đi muộn như này nya.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Hầy... Chuyện là...`
			},
			{
				class: `${nameC[5]}`,
				name: [ `Sơ ${nameC[5]}` ],
				content: `Ba em kia! Còn đứng ở đấy nói chuyện nữa, đến giờ vào học rồi, mau vào thôi.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}`, `Cậu bé`, `Cô bé` ],
				content: `Vâng (nya)!`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Để tí nữa mình nói cho nha.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sơ ${nameC[5]} hơn tuổi mẹ tôi nhiều nên chắc đã ngoài bốn mươi cùng mái tóc vàng đã phai dần. Trang phục thường mặc của sơ là áo choàng dài đen phủ toàn cơ thể với dây buộc quanh eo, cùng mũ trùm đen che đi một phần trán và tóc thể hiện sự giản dị, không lưu luyến vật chất. Sơ ${nameC[5]} là một người nhân hậu và luôn ân cần giang tay giúp đỡ những đứa trẻ mồ côi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cô nhi viện hiện đang được quản lý bởi sơ ${nameC[5]} và đồng thời cũng là người chăm sóc cho các đứa trẻ ở đây. Cơ sở vật chất ở nơi đây cũng có thể nói là ổn, không quá thiếu thốn. Có một khu vườn trồng rau củ quả ở phía sau để có thể ăn hoặc mang đi bán chút. Đôi khi cô nhi viện cũng nhận được một chút quyên góp của người dân xung quanh như là đồ ăn, quần áo, ...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Hiện tại đang có tám đứa trẻ sống ở đây và tuổi của chúng chênh lệch nhau một đến hai tuổi. Trong đó thì có hai người bạn thân cùng tuổi mà tôi vừa gặp hồi sáng.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cậu bạn với mái tóc xù xì màu lá phong là ${nameC[9]}. Đôi mắt lúc nào cũng sáng rực như ánh nắng ban mai, và ánh nhìn của cậu nhiều khi cũng dứt khoát như những hành động cậu làm vậy. Tóc cậu ta khá xù xì và khó chải, nên cậu đành cứ để vậy. Dù cũng xuề xòa về phục trang như những cậu bé khác, nhưng ít nhất là ${nameC[9]} cũng khá cầu toàn về khoản này. Trang phục của cậu lúc nào trông cũng khá là chỉn chu. Tuy còn đó sự bồng bột của tuổi trẻ nhưng cậu lại là người bạn chính trực và đáng tin cậy. Mọi lời ${nameC[9]} nói những lúc không đùa cợt đều như đinh đóng cột, luôn rạch ròi đúng sai kèm theo đó là những hành động mà cậu cho cần thiết.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Theo như lời cha tôi kể thì cha mẹ của cậu đã bị sát hại trong chuyến đi bởi một băng đạo tặc. Mặc dù cậu đã cố bảo vệ mẹ đến phút cuối cùng nhưng mẹ cậu vẫn không qua khỏi. Và khi cậu sắp bị giết thì có một người lạ mặt với cây thương đã cứu cậu trong gang tấc. Sau đó đưa cậu về sống ở cô nhi viện này.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cô bạn nhỏ nhắn luôn đi cùng ${nameC[9]} có tên là ${nameC[10]}. Cô là một Miêu nhân, một chủng tộc người thú với thể chất khá vượt trội, dù bề ngoài của cô thật chẳng khác những cô bé cùng trang lứa là bao. Mái tóc cắt ngắn tím thẫm như bầu trời đêm với hai búi tóc thả dài trước, trên là đôi tai nhọn gần như lúc nào cũng vểnh cao có lẽ là điểm ấn tượng lớn nhất của mọi người về cô bé, cũng như chiếc đuôi nhỏ xinh đôi khi vung vẩy theo gió. Phần mái dài phía trước trán cô bé không thể che đi nét tinh nghịch và vui vẻ trong đôi mắt lục bảo sáng như những vì sao của cô. Khi nhìn ánh mắt đó, mọi người có thể thấy rõ nhiệt huyết của tuổi trẻ cũng như là sự ranh mãnh của một chú mèo con ham vui vậy. Hết mình là thế, nhưng cô bé cũng rất thấu hiểu, và biết điểm dừng khi mọi thứ dần đi quá giới hạn.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cha tôi kể rằng cô ấy đã chạy trốn khỏi một nhóm săn nô lệ. Cha mẹ của cô thì chưa có thông tin gì, theo suy đoán chắc đã bị bắt. Binh lính tuần tra quanh thành đã bắt gặp cô đang nằm gục ở gần bìa rừng nên đã đưa về đây.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cả hai người đều là những người bạn quan trọng của tôi nhưng để mà nói thì các cậu ấy là “bộ đôi rắc rối”. Đúng vậy, bộ đôi rất tinh nghịch và hay quậy phá. Chắc vì họ vẫn là trẻ con nên hành xử như vậy là đúng với tuổi. Không như tôi... Dù sao thì hành động của độ đôi cũng không vượt quá giới hạn và cũng biết lúc nào nên dừng lại những hành động nên là cũng không có ai ghét họ cả.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Quay lại việc tại sao tôi đến cô nhi viện để học thì trong khuôn sân ở đây có một ngôi nhà dùng dạy học và sơ ${nameC[5]} là người chỉ bảo. Thực ra đây là sự tự nguyện của sơ vì nơi đây không có trường học và chỉ những quý tộc mới có đủ tiền để thuê giáo viên về dạy. Vì tự nguyện nên học phí không có, thay vào đó thì người dân có thể quyên góp nếu muốn. Những thứ tôi được học ở đây gồm cách viết đọc nói, tính toán, tiền tệ ở khu vực này, lịch sử, địa lý và tín ngưỡng nơi đây.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Về cách viết đọc nói thì sau khi chuyển sinh tôi đã có thể hiểu mọi người đang nói gì. Nhưng tôi vẫn phải học lại cách viết và đọc bởi nó không giống với bất cứ ngôn ngữ nào mà tôi biết trước kia.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Về tính toán thì chỉ là phép cộng hoặc trừ bởi tôi đã từng hỏi sơ về phép nhân và chia thì sơ bảo không biết. Tôi đã nghĩ chắc thương nhân hoặc những người hay tiếp xúc với các con số sẽ biết phép này. Hoặc là trình độ nơi đây vẫn còn hơi yếu.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Về tiền tệ ở đây sử dụng dạng xu gồm bốn loại là đồng thấp nhất, rối đến bạc, vàng và bạch kim với giá trị cao nhất. Cứ một trăm loại xu giá trị thấp sẽ đổi được một xu giá trị cao hơn một bậc.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Về lịch sử, thị trấn có tên là Dawn Horizon. Hiện tại đang được cai trị bởi lãnh chúa có tên là ${nameC[6]} Konishi. Từng là một chỉ huy gan dạ và tài ba trên chiến trường, với vị trí hiện tại là một lãnh chúa thì Ngài luôn cố gắng giúp cho thị trấn phát triển. Nhưng có vẻ không phải việc gì cũng thuận theo ý Ngài bởi thị trấn vẫn phải phụ thuộc nhiều vào tài nguyên của quý tộc. Tình hình trị an trong thị trấn khá tương đối ổn định. Thay vào đó thì sự phân chia giàu nghèo một cách rõ ràng giữa thường dân với quý tộc và tất nhiên không phải quý tộc nào cũng xấu. Đồng thời, nơi đây đa dạng chủng loài cùng sinh sống.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Thị trấn được bao bọc bởi tường thành hình sao sáu cánh và cứ giữa mỗi cánh sẽ có tháp tam giác hướng nhìn ra ngoài thành. Đây là một chiến lược phòng thủ rất tốt để ngăn chặn việc bị tấn công... theo cha nói thì là vậy. Thị trấn có ba cổng thành gồm cổng phía Nam, Đông Bắc và Tây Bắc được canh gác rất cẩn thận. Ngoài thị trấn thì còn có cảng giao thương hàng hóa lớn đồng thời cũng là nơi di chuyển qua các vùng biển và cảng mang tên Over Horizon ở hướng Nam.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Về địa lý thì trị trấn nằm trên thảo nguyên thảm cỏ xanh tươi bạt ngàn. Thị trấn giáp biển hướng từ Đông đến Nam, hướng Bắc giáp rừng có ma thú và hầm ngục quái, hướng Tây là thảo nguyên rộng với đa dạng thực vật cũng có ma vật xuất hiện rải rác. Ở hướng Nam có cảng Over Horizon. Ở hướng Đông có bãi biển tuyệt đẹp để có thể vui chơi, nghỉ ngơi thỏa thích tại nơi đó.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Cuối cùng là về tín ngưỡng, thị trấn đang tôn thờ một vị thần tên là ${nameC[8]}. Đây là vị thần biểu tượng cho công lý hay có thể nói là sự bảo vệ, che chở dành cho người khác. Cụ thể thì họ tin rằng thần ${nameC[8]} đã luôn bảo vệ và che chở cho nơi đây được những tháng ngày bình yên. Và có những tin đồn rằng tường thành sao sáu cánh của thị trấn chính là lời sấm từ thần ${nameC[8]} sau khi lãnh chúa đời trước đã cầu nguyện tới vị thần này. Thực hư ra sao thì tôi cũng không rõ nhưng mà có đức tin vào một ai đó như thần ${nameC[8]} thì cũng không quá tệ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau một khoảng thời gian học và chơi ở cô nhi viện từ sáng đến chiều tối thì tôi đã về nhà. Vừa mở cửa ra thì tôi đã ngửi thấy mùi bánh mì và súp rau củ bay ra từ bếp.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Con đã về nhà rồi thưa mẹ. Ủa, cha vẫn chưa về à mẹ?`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Mừng con về nhà. Cha cũng sắp về rồi, con mau vào dọn bàn hộ mẹ với nhé.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi nhanh chóng cởi giày và vào giúp mẹ. Và rồi cha tôi về nhà, như thường lệ vẫn luôn ồn ào như thường.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ta về rồi đây! Và... nay ta có tin tốt!`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Mừng anh về, mau thay đồ rồi vào ăn tối nào.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tin tốt hả? Hừm... Đúng là hôm nay cha tôi vui vẻ hơn mọi khi thật. Thật là tò mò về tin tốt của cha đó mà.`
			},
			{
				class: `think`,
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
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Ấm áp quá... Ánh sáng... Tôi đã có thể mở mắt và trước mắt tôi là một người phụ nữ tóc dài đang ôm tôi? Dường như đây là mẹ... Cơ thể tôi hiện tại khá yếu... Đúng là tôi đã được chuyển sinh thật rồi! Căn phòng hơi tối nên tôi không nhìn rõ được khuôn mặt.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi thử liếc nhẹ qua căn phòng thì tường, trần nhà và sàn có vẻ chủ yếu đều được làm từ gỗ. Một cơn gió nhẹ thổi qua... tấm rèm bay nhè nhẹ. À, ra là cửa sổ đang mở. Trời tiết tối nay có vẻ sẽ lạnh đây nhưng hiện tại tôi đang được ôm nên khá là ấm áp. Nhân tiện thì cửa sổ cũng được làm từ kính kết hợp với khung làm từ gỗ. Còn căn phòng thì hơi nhỏ nên đồ đạc cũng không có gì nhiều ngoài một cái giường sát tường cạnh cửa sổ, một tủ nhỏ cạnh giường, một bộ bàn ghế gồm một bàn hai ghế và một tủ quần áo.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mà khoan! Tôi đã mải nghĩ quá rồi nên không để ý đến những tiếng nói xung quanh, phải lắng nghe mới được. Lúc này một người đàn ông đang vừa nói, vừa khóc trong hạnh phúc.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Người đàn ông` ],
				content: `Cảm ơn sơ ${nameC[5]} rất nhiều đã giúp ${nameC[3]} sinh ra đứa con của chúng tôi an toàn. Tôi thực sự cảm ơn sơ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sơ ${nameC[5]} mỉm cười nhẹ trước sự trân thành của người đàn ông đó.`
			},
			{
				class: `${nameC[5]}`,
				name: [ `Sơ ${nameC[5]}` ],
				content: `Không việc gì phải cảm ơn tôi đâu, anh ${nameC[4]}. Đỡ đẻ là nghĩa vụ của chúng tôi ý mà. Ngược lại tôi còn phải cảm ơn vợ anh vì luôn giúp đỡ bên cô nhi viện chứ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Có vẻ người phụ nữ đang ôm tôi đúng là mẹ rồi, tên ${nameC[3]} và người đàn ông kia là cha tên ${nameC[4]}. Bà cô sơ thì tên ${nameC[5]}, trông có vẻ đó là người quen của cha mẹ tôi. Trong khi đấy, sơ ${nameC[5]} dường như đang lo lắng điều gì đó.`
			},
			{
				class: `${nameC[5]}`,
				name: [ `Sơ ${nameC[5]}` ],
				content: `Nhưng thật kì lạ là đứa trẻ nó không khóc. Đây có lẽ là trường hợp đầu tiên mà tôi gặp phải sau khi đỡ đẻ rất nhiều. Liệu đứa trẻ có ổn không nhỉ?`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi đã giật mình sau khi nghe xong câu đó. Đừng nói điều rủi như thế chứ sơ... Không ổn rồi! Đúng thật là kì lạ khi một đứa trẻ mới sinh ra mà lại không khóc. Chắc tôi phải giả khóc thôi... mặc dù nó sẽ rất là kì lạ... Hầy... có lí do gì khiến cho tôi có thể giả khóc được không đây... Người cha cũng bối rối sau khi nghe xong điều đó từ sơ và đã nói to.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `CON TÔI BỊ VẤN ĐỀ GÌ Ư? CON ƠI! CON ĐỪNG BỊ GÌ NHÉ! CON LÀ ĐỨA CON ĐẦU TIÊN MÀ TA CÓ ĐÓ!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Không ngờ tôi có người cha ồn ào như vậy, đang ban đêm đấy nói nhỏ lại thôi chứ cha. Tôi còn đang bận phải nghĩ kế hoạch giả... mà khoan đã, đây là lúc thích hợp để giả khóc mà. Tôi đã giãy giụa và giả tiếng khóc.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `OE OE OE!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mẹ tôi đã giật mình và vỗ về để tôi nín.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Nhìn này, con khóc mất rồi. Anh à, anh nên nói nhỏ lại, xem anh vừa khiến cho con khóc rồi này. Nín đi con yêu, mẹ vừa mắng cha con rồi.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Người cha thấy hối lỗi liền lấy tay bịt miệng và nói nhỏ.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Ơ... Anh xin lỗi em! Con ơi nín đi con, cha sẽ không nói to nữa đâu...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sơ ${nameC[5]} đã suýt bật cười, thay vào đó là mỉm cười rồi cất gọn đồ đạc để chuẩn bị ra về.`
			},
			{
				class: `${nameC[5]}`,
				name: [ `Sơ ${nameC[5]}` ],
				content: `Ái chà, có vẻ đứa trẻ khóc rồi. Chắc là nó không bị gì đâu, mọi người không cần phải lo lắng nữa. Thôi tôi xin phép về.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi lúc này thấy nhẹ cả người vì vở kịch bé nhỏ đã thành công.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Vậy hẹn gặp lại sơ. Xin lỗi vì tôi không tiễn được. Anh, trời tối rồi, anh đưa sơ về nhà hộ em nha.`
			},
			{
				class: `${nameC[5]}`,
				name: [ `Sơ ${nameC[5]}` ],
				content: `A, không cần đưa tôi về nhà đâu, chỉ cần tiễn tôi ra cửa là được rồi. Vợ anh vừa mới sinh nên có thể cơ thể sẽ còn rất yếu, anh nên ở lại.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Vậy xin thứ lỗi! Hẹn gặp lại sơ.`
			},
			{
				class: `${nameC[5]}`,
				name: [ `Sơ ${nameC[5]}` ],
				content: `Ừm, hẹn gặp lại cả nhà.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Sau đó cha và sơ rời khỏi phòng, tiến ra trước cửa nhà. Tôi cảm nhận được cha mẹ và sơ ${nameC[5]} đều là người tốt cả. Thật tuyệt khi được chuyển sinh đến nơi đây... Mí mắt tôi sụp xuống, bản thân đang cảm thấy mệt mỏi... Chắc là vì cơ thể mới này. Rồi người cha quay lại.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Sơ ${nameC[5]} đi...`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mẹ thấy tôi đang ngủ nên liền đưa ngón tay lên môi và nói nhỏ với cha.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Suỵt... Con nó đang ngủ anh à.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Người cha thấy vậy nên đã nhẹ nhàng đi đến bên giường và ngồi cạnh mẹ, nói nhỏ.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Khuôn mặt thằng bé trông thật giống em.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mẹ mỉm cười nhẹ và đáp lại.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Thằng bé cũng giống anh nữa mà, nó có đôi mắt lam tuyệt đẹp như của anh vậy.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Cha` ],
				content: `Thật tuyệt khi chúng ta cũng đã có con.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Mẹ tôi vẫn mỉm cười và gật đầu một cái nhẹ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Và thế là 6 năm đã trôi qua...`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Shu! Bữa sáng xong rồi. Ra ăn sáng đi con.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng! Con ra liền!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi vừa đi vừa nghĩ vu vơ... Hiện tại tôi đang sáu tuổi và đồng nghĩa với việc đã được sáu năm kể từ khi tôi đến『Dainisekai』. Hiện tại tên tôi là ${nameC[1]}.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Theo lời cha thì cha tên ${nameC[4]}, cha có đôi mắt màu lam, hai mươi sau tuổi, là một người lính thường làm canh gác ở cổng hướng Nam, đến bữa tối mới có thể về nhà.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Còn mẹ tên ${nameC[3]}, mẹ có mái tóc lam dài, hai mươi tư tuổi, là thợ may vá và cũng là nội trợ của gia đình. Khi rảnh thường hay giúp đỡ bên cô nhi viện do sơ ${nameC[5]} hiện đang quản lý.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Nguồn thu nhập chính đều đến từ cha. Có thể nói gia đình tôi có đủ để sống qua ngày, theo lời cha nói là vậy. Tôi đang ở thị trấn có tên gọi là Dawn Horizon. Và tất cả thông tin tôi biết chỉ có đến vậy. Tiện thể thì tôi thừa hưởng đôi mắt lam của cha và mái tóc màu lam của mẹ.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Đang mải nghĩ thì có mùi trứng thoang thoảng từ căn bếp khiến cho bụng tôi kêu réo lên.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Chào buổi sáng, Shu. Mẹ có làm món trứng con thích này.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Chào buổi sáng, mẹ ạ... Oa! Mẹ làm trứng ấy ạ? Ngon quá, con cảm ơn mẹ! Mời cả nhà ăn sáng!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tất cả chỉ là diễn cả, tuy cảm giác hơi không thoải mái khi tỏ vẻ trẻ con so với tuổi thật nhưng... Tôi mới chỉ có sáu tuổi, biết sao được. Món trứng này tuy không được cuộn lại nhưng nó ngon thật, dù sao thì tôi thích ăn trứng là thật. Sau khi ăn xong bữa sáng thì mẹ có nhẹ nhàng nhắc tôi.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Hình như hôm nay con sẽ đến cô nhi viện để học nhỉ?`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Vâng, đúng rồi ạ! À, mẹ ăn xong cứ để đấy để con dọn cho.`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Con mẹ ngoan quá đi à. Không có nhiều đứa trẻ như con ở độ tuổi này đâu. Mẹ cảm giác con trưởng thành nhanh quá... Có cảm giác con sắp xa mẹ rồi ý. Mà mẹ đi may vá đây, cảm ơn con nhé.`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi sau khi nghe xong câu đó cũng hơi nhột. Việc che giấu sự thật đúng là khó khăn... Nhưng được mẹ khen như vậy tôi cũng thấy sướng. Sau một hồi rửa bát, tôi nhanh chóng tiến ra phía cửa nhà và nói lớn vọng vào trong.`
			},
			{
				class: `${nameC[1]}`,
				name: [ `${nameC[1]}` ],
				content: `Con đi đây thưa mẹ!`
			},
			{
				class: `${nameC[1]}Mother`,
				name: [ `Mẹ` ],
				content: `Đi đường cẩn thận nha con!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi cầm lấy tay nắm cửa kéo vào, cánh cửa gỗ kêu kót két được mở ra, ánh nắng chiếu rọi vào nhà... Và tôi đã bước chân qua cánh cửa đó với một tâm thế không biết điều gì tuyệt vời sẽ xảy ra...`
			}

		]
	},
	{
		chapter: 0,
		title: `Văn phòng Re:Life`,
		dialogue: [
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Lạnh quá... Tôi muốn ôm lấy bản thân để bớt lạnh nhưng tại sao tay mình không cử động được? Tôi nghe thấy có tiếng người nói gì đó rất lớn... Mọi người đang nói gì vậy? Tôi không thể nghe rõ... mệt quá... muốn nhắm mắt... muốn ngủ... Tôi có thể cảm nhận được nhịp đập của tim mình đang ngày một yếu dần... Và rồi, tôi không còn cảm thấy gì nữa...`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Tôi giật bắn mình, ngồi dậy, mắt nhắm mắt mở nhìn mọi thứ xung quanh nhưng đều là một màu trắng xóa. Tôi bối rối từ từ đứng lên, quay qua quay lại và sau một hồi thì dưới chân đột ngột xuất hiện một con đường lát gạch dẫn đi đâu đó. Mọi thứ đều rối bời, không thể hình dung được tình hình hiện tại ra sao nên để tìm câu trả lời, thì chắc chỉ còn cách đi trên con đường tôi thấy. Vừa đi vừa nghĩ vu vơ, cố hiểu tình hình hiện tại nhưng chả thể nào nghĩ được gì. Thậm chí tôi cũng không thể nhớ chuyện gì đã xảy ra, rồi tiếng gõ bàn phím từ đâu vang lên. Như một bản năng, tôi đã chạy thật nhanh để đến được hướng đó.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Và chỉ một cái chớp mắt, tôi đã ở trong một căn phòng trông như là văn phòng làm việc. Một chàng trai lạ với mái tóc bạch kim đang ngồi gõ bàn phím ở bàn làm việc, tôi tiến lại gần... Người lạ ấy dừng gõ bàn phím, hướng mắt nhìn về phía tôi.`
			},
			{
				class: `unknown`,
				name: [ `Chàng trai lạ` ],
				content: `Xin chào bạn, có vẻ như bạn đang bối rối đây là đâu nhỉ?`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Lời nói của anh thật điềm tĩnh, tôi có thể cảm nhận được sự quan tâm người đó dành cho mình.`
			},
			{
				class: `${nameC[0]}`,
				name: [ `${nameC[0]}` ],
				content: `Anh là ai và đây là đâu?`
			},
			{
				class: `unknown`,
				name: [ `Chàng trai lạ` ],
				content: `Tôi là nhân viên ${nameC[1]} ${nameC[2]}, họ là ${nameC[2]} và tên là ${nameC[1]}. Chào mừng đến với Văn phòng Re:Life. Bạn có thể gọi tôi là ${nameC[2]}.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Tôi lúc này đang cực kì bối rối. Nhân viên? Văn phòng? Re:Life là văn phòng gì cơ?`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Nói ngắn gọn thì bạn đã chết, nhưng vì tuổi đời chưa quá ba mươi nên được xuất hiện tại đây.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Tôi giật mình sau khi nghe anh ${nameC[2]} nói vậy, chắc đây chỉ là đùa thôi nhỉ? Định đáp lại lời của anh, những dòng kí ức trước khi tôi chết đột nhiên bỗng ùa về... Lúc này tôi đang trên đường đi về nhà còn trời thì mưa tầm tã. Có vẻ như lúc đó có một chiếc xe máy băng qua đường và dường như không để ý tôi nên tai nạn đã xảy ra. Cả hai người sau khi va chạm đều bị ngã, vết thương chỉ xây xát đôi chỗ nên không quá nghiêm trọng. Tôi gượng đứng dậy, một ánh đèn chói lóa từ đâu tiến đến trước mắt. Đó là một chiếc xe máy đi cùng chiều có vẻ đã không thấy tai nạn phía trước nên đã không phanh kịp và tông thẳng vào tôi. Cú đâm này khiến tôi bị văng đi một đoạn ngắn, không thể cử động và rồi mất dần ý thức. Cuộc đời dừng ở mốc hai mươi... Tôi đã rất sốc, phải chấp nhận hiện thực và chỉ biết thở dài ngao ngán.`
			},
			{
				class: `${nameC[0]}`,
				name: [ `${nameC[0]}` ],
				content: `Vậy việc tôi không còn sống nữa là thật rồi...`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Đúng như bạn nói. Nhưng! Văn phòng chúng tôi sẽ cho bạn cuộc đời thứ hai. Đó sẽ là cuộc sống ở vũ trụ khác có tên là『Dainisekai』.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Tôi đã rất ngạc nhiên khi nghe điều đó và đã thốt lên.`
			},
			{
				class: `${nameC[0]}`,
				name: [ `${nameC[0]}` ],
				content: `Hể! Tôi cứ tưởng cái thứ gọi là thế giới khác chỉ là giả tưởng thôi chứ. Bất ngờ thật, tôi còn tưởng mình sẽ sống lại ở thế giới cũ chứ.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Anh nhân viên vẫn giữ vẻ điềm tĩnh dù cho tôi có thốt lớn lên.`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Thật ra chúng tôi có thể đưa bạn về thế giới cũ, nhưng một vài điều luật đã thay đổi nên chúng tôi không còn làm điều đó nữa.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Tôi đã quên mất rằng mình còn đang đứng ở nơi đáng lẽ ra không tồn tại. Hiển nhiên là họ có thể làm được những thứ như vậy rồi.`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Thế giới mới sẽ có ma pháp và nhiều chủng loài đa dạng mà nơi bạn từng ở không tồn tại. Bảng trạng thái có tồn tại ở mỗi người để xem các thông tin cá nhân. Chỉ cần nghĩ về Bảng trạng thái trong đầu là thông tin sẽ xuất hiện trước mặt bạn. Tất nhiên mọi người sẽ không thấy trừ khi bạn chia sẻ nó hoặc họ có kỹ năng đọc thông tin.`
			},
			{
				class: `${nameC[0]}`,
				name: [ `${nameC[0]}` ],
				content: `Thế giới này đậm chất giả tưởng và kì ảo thật ha.`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Chúng tôi sẽ cung cấp cho bạn một vài quyền lợi gồm: tùy chỉnh bản thân như diện mạo, chủng loài, thể trạng, chức nghiệp trước khi chuyển sinh và ba điều ước.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Tôi đã vô cùng thích thú trước những quyền lợi trên. Mọi thứ đang dần trở nên rất thú vị.`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Về điều ước, bạn có thể ước bất kì thứ gì nhưng vẫn phải trong sự suy xét của tôi.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Tôi đã cười thầm và nghĩ rằng có thể ước thêm nhiều điều ước nhưng...`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Tất nhiên là không thể ước có thêm điều ước hay những thứ để có thêm điều ước.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Và ngay lập tức cái ý nghĩ lúc đó của tôi đã vụt tắt. Hiển nhiên là không thể có chuyện thêm điều ước được rồi.`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Vì là thế giới của sự giả tưởng nên sẽ có các kỹ năng, bạn có thể ước có thêm kỹ năng. Hay là ước có vật phẩm hoặc là bất cứ cái gì bạn có thể nghĩ ra. Bạn không thể ước điều gì có thể gây ảnh hưởng lên những người chuyển sinh khác, ảnh hưởng quá lớn lên vũ trụ『Dainisekai』và ảnh hưởng lên Văn phòng Re:Life. Tôi sẽ xem xét kĩ lưỡng điều ước nên chỉ cần bạn có trí tưởng tượng và suy tính là được.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Tôi lúc này chỉ biết gãi đầu, có quá nhiều thông tin đang xoay vòng vòng quanh tôi.`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Cuối cùng là một chút lưu ý. Ký ức từ thế giới trước sẽ được giữ lại nên hãy yên tâm bạn vẫn là bạn. Vì là chuyển sinh nên điểm bắt đầu sẽ từ trẻ sơ sinh. Và nếu bạn chết thì là hết, không thể quay lại Văn phòng Re:Life.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Làm lại từ đầu theo nghĩa đen luôn á! Sắp tới sẽ mệt đây... Nhưng được sống lại cũng không quá tệ... Chắc vậy... `
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Vậy bạn có câu hỏi gì không? Xin hãy cân nhắc và hỏi tôi bất cứ câu hỏi gì. Càng hỏi nhiều thì bạn sẽ biết thêm về thế giới bạn sẽ tới.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Sau khi ${nameC[2]} dừng nói thì tôi đã hỏi kha khá câu và tôi biết thêm được một vài điều. Vũ trụ『Dainisekai』quy tụ mọi người chuyển sinh nhưng có thể không chung một địa điểm, lục địa hoặc thậm chí không gian. Điều đó chứng tỏ thế giới của những người chuyển sinh vào vũ trụ này sẽ có các quy luật riêng. Nhưng đồng thời vẫn có thể giao thoa nhau bằng cách nào đó. Có các chiều không gian, hầm ngục quái, làng, rừng, núi, biển, chủng loài, chế độ cai trị, quy luật... khác nhau ở khắp nơi.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Hệ thống thời gian ở『Dainisekai』vẫn giống với thế giới trước nơi tôi từng tồn tại. Trái đất... Không. Nơi tôi sẽ đến có dạng phẳng trải dài vô tận mọi hướng cùng địa hình đa dạng. Phía trên cao là vũ trụ, nhìn từ trên xuống sẽ thấy rõ địa hình dài vô tận như đã nói, vì đây không phải là trái đất hay là địa cầu. Tôi có thắc mắc về hệ thống ngày đêm mặt trời và mặt trăng thì anh ${nameC[2]} chỉ mỉm cười...`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Đó là tất cả thông tin mà tôi có thể nắm bắt. Rồi tôi hoàn thành hồ sơ và sau một khoảng thời gian...`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Cuối cùng, xin hãy đặt tên cho bản thân khi đến『Dainisekai』. Nếu bạn không nghĩ được ra thì có thể để trống và cha mẹ mới của bạn sẽ là người đặt tên.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Việc đặt tên luôn là phần khó nhất trong tất thảy. Nghĩ điều ước đủ khó rồi nhưng đặt tên còn khó hơn nữa chứ. Không cẩn thận thì cái tên về sau sẽ thành trò đùa không thể nào quên được... Quên? Một ý nghĩ nảy lên trong đầu tôi khiến tôi phải nhìn thẳng vào ${nameC[2]}.`
			},
			{
				class: `${nameC[0]}`,
				name: [ `${nameC[0]}` ],
				content: `Tên tôi sẽ là ${nameC[1]} ${nameC[2]} bởi vì anh có thể là người đáng tin cậy cuối cùng mà tôi có thể gặp. Đồng thời... trí nhớ tôi hơi kém nên lấy tên như này thì tôi sẽ không thể nào quên được anh.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Anh ${nameC[2]} chỉ mỉm cười nhẹ sau khi nghe tôi nói câu đó.`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Tôi vô cùng cảm kích. Vậy bạn muốn xác nhận cái tên ${nameC[1]} ${nameC[2]}?`
			},
			{
				class: `${nameC[0]}`,
				name: [ `${nameC[0]}` ],
				content: `Tôi xin xác nhận cái tên đó.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Từ giờ cái tên ${nameC[0]} sẽ chỉ còn là quá khứ mà chỉ tôi và văn phòng này biết. Ít nhất là cho đến ngày ai đó biết được bí mật của tôi.`
			},
			{
				class: `${nameC[2]}`,
				name: [ `${nameC[2]}` ],
				content: `Vậy thì thông tin của bạn đã được xác nhận xong. Chào mừng đến với『Dainisekai』, chúng ta có thể sẽ còn gặp lại nhau.`
			},
			{
				class: `think`,
				name: [ `${nameC[0]}` ],
				content: `Vừa dứt lời thì mọi thứ xung quanh tối dần, còn tôi đang rơi trong khoảng không vô định. Vậy là đang chuyển sinh nhỉ? Tuy cơ thể không cử động, nhưng tôi cảm nhận được sự ấm áp và an toàn... Rồi một giọng nói cất lên.`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Người đàn ông` ],
				content: `Nó là con trai! Con trai đó!`
			},
			{
				class: `think`,
				name: [ `${nameC[1]}` ],
				content: `Tôi đang rất bối rối và không biết giọng đó là của ai. Tôi cố mở mắt...`
			},
			{
				class: `${nameC[1]}Father`,
				name: [ `Người đàn ông` ],
				content: `Được sinh ra trong đêm thu, tên con sẽ là... ${nameC[1]}!`
			},
			{
				class: `think`,
				name: [ `???` ],
				content: `Trong không gian tối đen của mùa thu, ánh sáng yếu ớt lấp ló từ ngôi nhà, một sinh linh bé nhỏ đã ra đời và mang đến làn gió mới...`
			}
		]
	}
]