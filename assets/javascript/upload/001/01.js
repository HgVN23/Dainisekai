const mark = '001/01';
const formatStyle = 'dialogue';
const name = 'New life in wonderful world';
const volume = [
	// {
	// 	chapter: ,
	// 	title: '',
	// 	dialogue: [
	// 		{
	// 			class: '',
	// 			name: [ '' ],
	// 			content: ''
	// 		},
	// 	]
	// },
	{
		chapter: 15.5,
		title: 'Chuyện xảy ra sau đó',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khi kể cho họ về “cuộc phiêu lưu” và xác nhận hoàn thành nhiệm vụ thì tôi cùng Party ra về. Dường như nhóm tôi đã tạm thời thoát khỏi mớ rắc rối này. Nhưng mà người của Guild mạo hiểm giả có lẽ sẽ còn hỏi bọn tôi để lấy thêm thông tin. Hơn nữa tôi còn lỡ để lộ Inventory lúc lấy vật phẩm để xác nhận hoàn thành nhiệm vụ nữa chứ. Ẩu thật, sau này cũng bị để ý cho coi. Hầy... '
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ắt xì!'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya bị lạnh à?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À không. Chắc cha mẹ nhắc đến mình vì về muộn đây mà.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: '... Tiếc là mình không xem được phản ứng của em ý sẽ thế nào.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Trò giải trí của cậu lạ thật. Mà cảm ơn vừa nãy cậu xin xác của Silver Wolf, bọn tôi cần nó để nghiên cứu.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Không có gì, mình biết bên Guild không thể tự nhiên làm thế được mà. À, để mình lấy nó ra khỏi Inventory.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Ơ khoan... Trời...'
			},
			{
				class: 'think',
				name: [ 'Katsumi' ],
				content: 'Itsuki lấy ra xác của Silver Wolf đặt trên bàn, máu chảy đầy ra từ những vết thương rồi nhỏ xuống mặt sàn. Tôi muốn mắng cậu ta một trận nhưng đã cất công giúp cho Guild như vậy rồi nên đành bỏ qua. Tôi thở dài...'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Được rồi! Nghĩa vụ của mình đã xong, giờ xuống uống bia đây!'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Ừ ừ, uống bao nhiêu cũng được. Tôi mời.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Khoan đã anh Itsuki. Những lần uống bia trước của anh vẫn còn chưa tính tiền. Lần này trưởng Guild có mời anh uống nhưng nó không bao gồm những lần trước đó đâu. Tốt nhất anh nên trả chỗ tiền đó đi.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Thôi nào em, chỉ có 2 hay 3 cốc thôi đúng chứ. Để ta trả tiền cũng...'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Thùng...'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Thùng?'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Thay vì dùng từ “cốc” thì trưởng Guild nên dùng từ “thùng”. Và trưởng Guild cũng không muốn biết số tiền mà anh Itsuki phải trả đâu. Tất nhiên số tiền đấy không chỉ tính có mỗi 1 ngày đâu.'
			},
			{
				class: 'think',
				name: [ 'Katsumi' ],
				content: 'Maki trông có vẻ giận dữ... Không, chắc chắn là đang giận dữ. Itsuki đột nhiên tiến lại gần Maki, cậu ta đưa tay phải lên nắm vào cằm của em ấy và nhẹ nhàng nâng lên để nhìn thẳng vào mặt. Maki có chút giật mình sau hành động vừa rồi của Itsuki.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Quý cô xinh đẹp như bông hoa bình minh đây không nên làm mặt cau có như vậy đâu nha. Nếp nhăn sẽ để lại trên khuôn mặt xinh xắn này đó.'
			},
			{
				class: 'think',
				name: [ 'Katsumi' ],
				content: 'Maki sau khi nghe xong lời đó liền đỏ hết mặt lên rồi gạt tay của Itsuki ra. Em bắt đầu lúng túng, không thể nhìn thẳng vào mặt của Itsuki và lời nói không còn dõng dạc như trước nữa.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'X... xinh đẹp? A... anh chỉ n... nói vậy để e... em không còn b... bực nữa thôi đúng không?'
			},
			{
				class: 'think',
				name: [ 'Katsumi' ],
				content: 'Itsuki đột ngột dùng hai bàn tay của mình nắm chặt đôi bàn tay của Maki. Cậu ta khiến em ấy phải nhìn thẳng vào mắt cậu.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Không. Em đúng là xinh đẹp thật mà. Sẽ có khối đứa đàn ông muốn theo đuổi em đó, chỉ có kẻ ngốc mới không chọn em thôi. Riêng anh thì chắc không thể nào sánh ngang được với vẻ đẹp của em, Maki à.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'V... vậy à...'
			},
			{
				class: 'think',
				name: [ 'Katsumi' ],
				content: 'Maki ngại ngùng không còn nhìn thẳng mặt của Itsuki nữa.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Như vầy đi, anh mời em bữa tối nay được không? Dù sao em cũng vẫn chưa ăn gì nhỉ?'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Ừm... được thôi...'
			},
			{
				class: 'think',
				name: [ 'Katsumi' ],
				content: 'Maki dường như còn lẩm bầm gì đó nho nhỏ.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'N... nếu là anh thì đ... được thôi. E... em biết có một nhà hàng gần đây... nếu anh không ngại liệu có thể...'
			},
			{
				class: 'think',
				name: [ 'Katsumi' ],
				content: 'Maki dùng hết can đảm đưa mắt nhìn thẳng mặt Itsuki nhưng từ lúc nào cậu ta đã không còn trước mặt em ấy nữa mà đứng ở ngoài cửa.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Tuyệt vời! Vậy anh chờ em dưới tầng, anh đi gọi món trước đây và... BIA MIỄN PHÍ! TA TỚI ĐÂY!'
			},
			{
				class: 'think',
				name: [ 'Katsumi' ],
				content: 'Và thế là Itsuki chạy xuống dưới tầng, đúng thật là... Maki sau đó cũng di chuyển ra cửa. Tôi không nhìn thấy mặt em ấy nên không rõ biểu cảm ra sao.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'À phải rồi, em có thể bảo ai đó lên dọn đống...'
			},
			{
				class: 'think',
				name: [ 'Katsumi' ],
				content: 'Maki nắm chắc tay nắm cửa, từ từ quay mặt nhìn về phía tôi. Đôi mắt đầy sát khí như muốn lấy mạng ai đó khiến tôi phải rùng mình. Chắc chắn là không ổn rồi Itsuki, cậu đã làm gì thế này!'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Ta nghĩ lại rồi, em nên đi ăn, ta sẽ lo...'
			},
			{
				class: 'think',
				name: [ 'Katsumi' ],
				content: 'Tôi chưa dứt lời thì Maki đóng sầm cửa lại.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: '... chỗ bày bừa này...'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Mặt trời đã lặn từ lâu, chỉ còn lại ánh sáng le lói từ những ngôi nhà và từ đèn đường chứa đá phát quang soi sáng nền đất. Chú diều hâu bay qua nhóm của Shuuya vẫn còn đang trên đường về nhà và họ đang nói chuyện gì đó.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: '... Phải rồi Kowashi, cậu có đề cập đến việc gặp thần? Thế chính xác nó là như thế nào?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Chắc đó chỉ là tưởng tượng lung tung của mình thôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thôi nào, cậu cứ kể đi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Thì... Sau khi đỡ cho Asahi thì mình đã bị ngất...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Khi tôi mở mắt ra thì thấy bản thân đang đứng trên thảo nguyên. Không núi, không cây, không sông, chỉ có bãi phẳng thảo nguyên xanh tươi dưới bầu trời xanh không mây. Nhìn xuống dưới chân để ý kĩ mới nhận ra tôi đang đứng ở giữa hình sao sáu cánh được tạo nên từ cỏ màu đậm hơn bình thường.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Đây chẳng phải là tường thành của thị trấn mình sao?'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Đang mải suy nghĩ thì có bóng dáng ai đó tiếp cận từ đằng sau. Tôi cảm nhận được liên bật nhảy ra đằng trước, quay người lại tạo thế thủ. Lấy khiên và chùy ra nhưng nó đã không xuất hiện?'
			},
			{
				class: 'unknown',
				name: [ '???' ],
				content: 'Chính xác. Ta đã cho lãnh chúa hiện tại một lời gợi ý.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Vậy... ngài... là thần Iwao?'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Ngài trông thật già, râu và tóc đều trắng dài qua cổ. Trang phục thật đơn sơ khi chỉ cuốn tấm vải trắng quanh người và buộc dây quanh eo. Không thể tin được mình gặp thần... Có lẽ cũng không tệ sau khi mình hi sinh ha.'
			},
			{
				class: 'Iwao',
				name: [ 'Iwao' ],
				content: 'Chuẩn rồi cháu. Bất ngờ không nào.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Hừm... Sao bức tượng tạc có dáng người to lớn lực lưỡng mà sao ngài trông...'
			},
			{
				class: 'Iwao',
				name: [ 'Iwao' ],
				content: 'Này! Chưa có ai gặp ta trực tiếp nên làm sao biết được ta như nào mà tạc tượng đâu.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cũng đúng, vậy ngài có giận không?'
			},
			{
				class: 'Iwao',
				name: [ 'Iwao' ],
				content: 'Sao ta có thể giận được chứ? Có hình dạng thế nào cũng được, miễn là vẫn có tín đồ là được, haha.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Ngài dễ tính quá vậy? Hình ảnh về thần nó quan trọng lắm mà, sao ngài có thể cho qua dễ thế được...'
			},
			{
				class: 'Iwao',
				name: [ 'Iwao' ],
				content: 'Ta dễ tính lắm và có lẽ cháu sắp tỉnh lại rồi đó.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Ơ ngài đọc được suy nghĩ của cháu? Và tỉnh?'
			},
			{
				class: 'Iwao',
				name: [ 'Iwao' ],
				content: 'Cháu nghĩ đây là điểm đến cuối cùng? Không phải đâu, linh hồn của cháu chỉ ở tạm đây khi phước lành ta ban cho cháu kích hoạt thôi. Cơ thể của cháu đang được hồi phục.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'NẾU VẬY THÌ HÃY CHO CHÁU TỈNH NHANH LÊN! CÁC BẠN CHÁU CÓ LẼ VẪN CÒN GẶP NGUY...'
			},
			{
				class: 'Iwao',
				name: [ 'Iwao' ],
				content: 'Cháu không cần phải vội đâu, các bạn cháu đã được an toàn rồi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Vậy thì tốt... Ơ... sao cơ thể cháu đang dần tan biến?'
			},
			{
				class: 'Iwao',
				name: [ 'Iwao' ],
				content: 'Như ta đã nói, cháu đang tỉnh lại.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Vậy tại sao ngài lại ban phước lành cho cháu? Rốt cuộc nghĩa vụ của cháu là gì?'
			},
			{
				class: 'Iwao',
				name: [ 'Iwao' ],
				content: 'Vì cháu là người được chọn trong vòng quay và nghĩa vụ của cháu là đến đây nói chuyện để ta đỡ buồn. Ở đây chỉ có một mình cũng cô đơn lắm.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'NGÀI ĐỪNG CÓ ĐÙA...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Các giác quan của tôi tự nhiên chậm dần và gần như không còn cảm nhận được nữa. Trong khoảnh khắc tôi vẫn thấy ngài đang nói gì đó mà không thể nghe được.'
			},
			{
				class: 'Iwao',
				name: [ 'Iwao' ],
				content: 'Một lúc nào đó, cháu sẽ tìm được câu trả lời cho bản thân.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Và đó là những gì mình đã gặp trong lúc ngất.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi sẽ vờ như đó chỉ là tưởng tượng của Kowashi. Thần gì mà nghe kì lạ thật, tôi cũng chả biết phải phản hồi lại thế nào nữa. Não tôi không xử lí kịp thông tin kì lạ này.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Asahi, cậu nghĩ sao?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi nắm chặt áo của Kowashi, có lẽ nhỏ không muốn nghe gì nữa về chuyện liên quan đến cậu ta. Asahi chắc vẫn không chấp nhận chuyện xảy đến Kowashi. Kowashi cũng cảm nhận được điều đó nên đã đổi sang chủ đề khác.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Phải rồi Shuuya, từ lúc nào mà cậu làm nhiệm vụ thu thập Heal Herb vậy?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À, chuyện đó...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Quay lại lúc sau khi “bộ đôi rắc rối” chạy vào rừng và Hyouka bảo tôi phải đuổi theo họ ngay lập tức.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: '... Bộ đôi đó tốt nhất là nên chưa đi quá sâu vào trong khu rừng... Ơ, kia là Heal Herb nhỉ?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi vội vã chạy tới kiểm tra xem có đúng là nó không. Phần thân thì giống cây giá đỗ nhưng màu lục và dài hơn một gang tay của người trưởng thành. Trên đó ở khoảng giữa sẽ có hai lá cây viền răng cưa rộng bằng hai ngón tay cái. Còn phần đầu cây sẽ xoắn lại và số vòng xoắn càng nhiều thì thuốc làm ra sẽ càng chất lượng.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Chỉ có 2 vòng xoắn à. Chị Maki nói đúng thật, khó mà có thể tìm được hơn 3 vòng xoắn ở thảo nguyên.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau đó tôi lấy cái kéo từ『Cooking Set』ra cắt cây ở gần sát mặt đất nhất. Lí do tôi không dùng tay bứt luôn là vì có thể sẽ làm gãy thân phần trên và ảnh hưởng tới chất lượng.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thế là được 1 cây Heal Herb, Hyouka cậu nghĩ... HYOUKA?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi quay ra thì thấy Hyouka đang nằm trên mặt đất. Tôi đã giật mình và tự hỏi tại sao nhỏ lại nằm đấy... A. Nhớ lại thì lúc đấy Hyouka đang đẩy tôi và rồi tôi chạy đi... Tôi tiến tới và nhấc nhỏ lên... nhẹ thật...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Xin lỗi nha, mình không để ý.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Không sao. Mình đang đợi Shuuya thôi. Vậy giờ đuổi theo bộ đôi thôi nhỉ?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Phải rồi, bộ đôi...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Và thế là bọn tôi chạy vào rừng đuổi theo bộ đôi nhưng được một quãng thì...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'A! Heal Herb kìa! Đợi mình chút mình qua lấy.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya! Nhanh lên!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Lại thêm ở đằng kia nữa, ở đây, ở kia.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình biết rồi, đợi mình thêm chút... 3 xoắn! Có lẽ nào sẽ tìm được cây chất lượng cao quanh đây? Cho mình thêm vài phút... Hí!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mũi tên băng bay sượt qua bên tai trái tôi đâm trúng vào chỗ Heal Herb và đóng băng chúng. Tôi từ từ quay đầu nhìn về phía Hyouka... Cảm giác như đang nhìn vào cơn bão tuyết vậy.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Hyouka?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya, mình nghĩ cậu thu thập đủ Heal Herb rồi đó.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À, nghĩ lại thì cậu nói đúng ha. E hèm. Chúng ta đuổi theo bộ đôi thôi...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau đó tôi chạy thật nhanh đuổi theo bộ đôi bởi nếu chạy chậm có lẽ tôi sẽ bị ăn phát tên mất.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: '... Và đó là toàn bộ mọi thứ mà các cậu cần biết.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Hahaha! Mình không nhịn được cười! Không ngờ có ngày cậu cũng phải sợ Hyouka. Hahaha!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cậu phải thấy vẻ mặt lúc đó của Hyouka cơ. Đáng sợ lắm đó... Ái ái ái!'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya nói ai đáng sợ cơ.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nừng néo ná nình nữa, ngã nây nờ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi nhìn liếc qua Asahi thì thấy nhỏ đang cười khúc khích. Có vẻ bọn tôi đã thành công làm Asahi cười trở lại dù chỉ là một chút. Tôi nháy mắt để ra hiệu cho Kowashi và cậu ta cười mỉm, gật đầu nhẹ một cái. Cuộc trò chuyện kết thúc cũng vừa đúng lúc đến nhà của tôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Được rồi, Các cậu qua nhà mình ăn tối đi. Nay Kowashi săn nhiều Horned Rabbit nên chắc mình sẽ có thể làm được món gì đó ngon đấy.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nhưng mà cậu biết phân tách không đấy?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Chắc mẹ mình sẽ biết... Nếu không ổn thì đành bỏ chỗ nguyên liệu dùng để bán thôi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cũng được. Miễn là cậu nấu ngon.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Chắc chắn là ngon. Shuuya mà lại.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Con về rồi!'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Đúng là đồ ăn của Shuuya nấu ngon thật. Ăn một lần sẽ khó mà quên được hương vị đặc biệt mà cậu ấy làm ra. Mình mong chờ được ăn món tối nay quá!'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: '... mai bọn mình sẽ lại qua mà. Chúc may mắn nha.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Tôi đã thay đổi ý định và phóng về cô nhi viện. Có lẽ để lúc khác ăn món do Shuuya nấu vậy.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Tại sao cậu lại chạy đi vậy nya?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Mình có linh cảm không ổn lắm nếu bước vào. Mà Shuuya có Hyouka rồi nên chắc sẽ ổn thôi.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Hyouka đang ở đằng sau bọn mình nè nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Hả? Hyouka! Sao cậu lại đi cùng bọn mình rồi?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Một ngày nào đó bọn mình sẽ gặp lại nhau.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Đừng nói như kiểu cậu ấy không còn ngày mai nữa chứ! Hầy... Ngay mai chúng ta tiêu rồi.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Tại sao vậy nya?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cậu đã quên vẻ mặt đáng sợ của Shuuya rồi à?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Phải rồi... Mình không muốn nhớ lại đâu nya...'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya đáng sợ?'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Asahi đã nhảy xuống khỏi người tôi và đi cùng Hyouka. Có vẻ nhỏ đã trở lại bình thường rồi, thật tốt... Nhưng lưng mình đau quá...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cậu sẽ không muốn nhìn thấy một Shuuya với vẻ mặt vui vẻ nhưng lạnh sống lưng đâu nya... Nhớ lại mình cũng thấy rùng cả mình rồi nya.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Ô! Mặt khác của Shuuya mà mình chưa thấy! Mình muốn thấy!'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Sao cậu có thể tích cực như vậy được nhỉ nya? Mà về đến nhà rồi nya. Thưa sơ, bọn con về... rồi... nya.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Vừa mở cánh cửa ra thì sơ Celia đã đứng ngay đó. Chúng tôi không dám nói thêm gì vì mặt sơ đã nói hết tất cả. Có lẽ sơ đã qua nhà của Shuuya hỏi vài chuyện... Và thế là tối nay bọn tôi đã không thể ăn ngon miệng.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Biết thế ăn ở nhà Shuuya!'
			}
		]
	},
	{
		chapter: 15,
		title: 'Nhiệm vụ hoàn thành',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hiện tại Party của tôi đang ở trong phòng gặp riêng tư cùng anh Itsuki, chị Maki và trưởng Guild tên là Katsumi. Bác Katsumi vừa bảo bọn tôi kể về “cuộc phiêu lưu” ngày hôm nay.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Shuuya, để mình kể cho nha?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À ừm. Cậu kể đi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Bên Guild đang thu thập thông tin đây mà, đúng như anh Itsuki đã nói trước đó. Có lẽ họ nghĩ bọn mình còn trẻ con không hiểu chuyện nên mới nói kiểu như vậy. Chị Maki dường như đang ghi chép mọi thứ, thôi thì cứ làm theo họ để giải quyết nhanh chóng vậy.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khi Kowashi kể xong thì tôi và Hyouka bổ sung thêm một vài chi tiết vào “cuộc phiêu lưu” dưới góc nhìn của bản thân. Còn Asahi thì vẫn không nói gì.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Chỉ có một con Silver Wolf thôi à?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng? Chỉ có một con.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Hừm... Có lẽ các cháu may mắn đó, bình thường bọn chúng đi theo đàn cơ. Ít nhất là ba con chứ không bao giờ đi lẻ đâu.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mắt con đó đỏ.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Mắt đỏ?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'biết gì về nó à?'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'À, nó chỉ là căn bệnh hiếm xảy ra ở ma vật thôi. Nó khiến cho ma vật điên dại hơn bình thường, nếu các cháu mà gặp một con nào như vậy thì nên né ra và báo lại với bên Guild của bác nhé.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Chỉ là một căn bệnh... liệu nó có đúng là như vậy không nhỉ...? Cảm giác như bác Katsumi đang giấu giếm điều gì đó. '
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Rồi rồi, đến lượt tôi kể nha!'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Hầy... Cậu cứ như đứa trẻ to xác vậy.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: '... Sau đó tôi vào rừng theo lời em trai kia. Đến nơi thì thấy em Shuuya đang cầm dao bếp đấu với Silver Wolf. Thật đấy, anh hơi bất ngờ khi có người cầm dao bếp ra chiến đấu đó.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Kiếm em vỡ tan rồi, biết sao được.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Được rồi, sau đó tôi chạy đến cho một đấm vào đầu con Silver Wolf và thế là nó tiêu.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Một đấm? Anh nói thật chứ?'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Itsuki không nói đùa đâu. Bác biết thực lực của cậu ta.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Itsuki... chẳng lẽ anh là người đấm phát xong việc luôn... Tôi bắt đầu hơi lo nếu như gây sự với anh Itsuki...'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Sau đó thì Shuuya ngất chắc vì kiệt sức và vết thương ở tay trái nên là tôi đã cho em uống『Mana Potion』và『Holy Heal Potion』. Rồi...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Khoan khoan đã! Anh vừa cho em uống gì cơ?'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: '『Mana Potion』và『Holy Heal Potion』'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: '『Holy Heal Potion』! Anh đâu cần phải cho em uống loại nghe có vẻ đắt như thế này! Em nhớ không nhầm thì em chỉ bị thương nhẹ ở tay trái thôi mà!'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Không sao đâu, bạn của em cũng có phần mà. Đừng có lo nữa nha.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Cháu cứ gật đầu và chấp nhận đi, bác đã bó tay trước thứ gọi là “bình thường” của cậu ta rồi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: '... Anh kể tiếp đi...'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: '... Thấy cả ba em còn lại đang nằm nên tôi cũng cho các em uống thuốc. Sau đó thì các mạo hiểm giả ứng cứu cũng tới và phần còn lại cậu cũng biết rồi đó, Katsumi.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Có vẻ chúng ta cũng nắm rõ câu truyện rồi.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Thực ra có một vấn đề tôi đang băn khoăn... Trước khi cho em Kowashi uống thuốc thì... tim em ấy đã ngừng đập.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mọi người ai sau khi nghe xong cũng bất ngờ, mặt ai cũng ngơ ngác hết. Chị Maki đang ghi chép cũng phải dừng tay.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'A... anh nói đùa gì vậy. Em vẫn còn ngồi đây cơ mà, hết Asahi rồi lại đến lượt anh.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Chắc anh chưa nói cái này cho bọn em nhưng anh không bao giờ nói đùa về mạng sống cả.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Anh... thật à..? Vậy... chẳng lẽ em đang là xác sống?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'CẬU KHÔNG PHẢI LÀ XÁC SỐNG!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cuối cùng Asahi cũng chịu nói... ít nhất là nhỏ vẫn ổn... phần nào đó...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'A... Asahi m... mình chỉ đùa thôi... Đừng buồn nữa, mình vẫn đang nói chuyện với cậu đây đúng không?'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'À ừm... Anh cứ tưởng thật cho đến khi tim em đột nhiên đập lại và vết thương lớn trước ngực tự lành. Thấy vậy anh liền đổ thuốc lên vết thương để em hồi phục nhanh hơn.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'C... cháu có phải là con người không vậy?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cháu... để cháu kiểm tra Status xem sao... Ủa? Mọi người xem này!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi và mọi người cùng xem Status của Kowashi thì thấy cậu vẫn là con người. Nhưng khi lướt xuống phần Skill thì thấy cậu có『Revival』, cho phép người dùng sống lại và hồi nửa lượng máu của bản thân cùng vết thương. Tự động kích hoạt khi hi sinh bảo vệ mạng sống khác và dùng được lại khi bình minh của ngày hôm sau ló rạng. Sao cậu lại có Skill như vậy được chứ? Tôi lướt tiếp xuống đến phần danh hiệu thì thấy 『The Savior』và phần mô tả ghi “Phước lành của thần Iwao”. Ra là vậy... có vẻ vấn đề đã được giải quyết.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Chúc phúc từ thần Iwao... Ra cháu là cậu bé sáng nhất ở nhà thờ hôm qua.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Từ khi nào mà mình lại có『Revival』vậy nhỉ?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ơ khoan... Vậy là không phải cậu có từ hôm qua?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Không.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Vậy chẳng lẽ... từ lúc cậu ngất... thật đó hả? Mình nghĩ sẽ nói chuyện này với Kowashi sau, giờ nói ra chắc sẽ lại thêm rắc tối cho mà xem. Mình phải kết thúc cuộc điều tra này ngay mới được.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mệt mỏi quá, mình nghĩ mình không còn sức để nghe thêm gì nữa rồi.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Hình như đến giờ các em ý ăn tối rồi thì phải?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tuyệt vời anh Itsuki, đẩy hay lắm! Cảm ơn anh nhiều!'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'À phải, nói chuyện với các cháu vui quá nên bác không để ý. Các cháu về đi không người nhà lại lo lắng.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng! Nhưng trước đó thì chị Maki, chị xác nhận hoàn thành nhiệm vụ của tụi em được không?'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Được thôi nhưng mà chị đâu thấy...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đây là số『Crystal』,『Heal Herb』và bốn thẻ định danh của bọn em.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Hả! E... em có Inventory?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'ơi? Xác nhận...'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'À phải rồi, em có muốn bán vật phẩm từ ma vật các em săn không?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Em chỉ có xác của ma vật chưa được phân tách thôi ạ.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Nếu vậy thì em có thể nhờ nhân viên Guild phân tách hộ ở dưới tầng. Thôi, chị đi xác nhận cho bọn em liền đây.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Và thế là chị Maki cầm chỗ vật phẩm tôi đưa và vội vã bước ra khỏi phòng.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Cháu nên cẩn thận khi dùng Inventory trước người khác, có thể người xấu sẽ nhắm tới đó.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cháu biết và cháu tin mọi người ở đây sẽ không nói gì ra ngoài đâu nhỉ?'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Liệu có không ta?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Em tin anh mà... một nửa.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Không ngờ anh không đáng tin như vậy, anh buồn quá. À mà cho anh xác của Silver Wolf nha, được không?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À, mời anh. Dù sao thì anh cũng là người đã cứu tụi em và cũng là người hạ nó... Và dùng nhiều lọ thuốc trông rất đắt nữa làm em thấy hơi áy náy...'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'đã bảo rồi, anh còn nhiều lắm mà dùng chả hết. Đây, em xem này.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'A... anh cũng có Inventory?'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Ối! Lộ mất tiêu rồi. Giữ bí mật cho anh nhé mấy em.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sao mình có cảm giác anh Itsuki cố tình để lộ ra thế nhỉ? Bọn tôi đang nói chuyện với trưởng Guild và anh Itsuki thì chị Maki từ bên ngoài bước vào với một khay đựng xu đồng, xu vàng và thẻ định danh... Khoan! Xu vàng?'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'đã xác nhận xong và xin chúc mừng các em đã hoàn thành nhiệm vụ đầu tiên nha. Đây là số tiền thu mua vật phẩm mà em đưa.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Em cảm ơn... nhưng em cảm thấy chỗ xu hơi sai... Nhất là 1 xu vàng này.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Phải rồi, chỗ『Heal Herb』của em đang trong điều kiện rất tốt nên là được tăng thêm xu đồng. Còn 1 xu vàng này thưởng thêm từ trưởng Guild vì cứu người dân thị trấn.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Các cháu xứng đáng mà nên hãy nhận nó nhé.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vậy thì cháu xin nhận. Bọn cháu xin phép ra về, đi nào các cậu.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Asahi, mình nghĩ cậu sẽ không buông mình ra nên bám chắc vào nha. Mình sẽ cõng cậu về nha luôn.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Ừm.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya giúp! Mình tê chân quá...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thế là tôi quyết định cõng Hyouka về, một phần cũng là để cảm ơn trước lúc tôi tỉnh lại. Và Asahi chắc mai sẽ lại như bình thường thôi... tôi mong vậy.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Lũ trẻ bây giờ khác xưa thật. Cậu nghĩ sao Itsuki?'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Hừm... Theo mình nghĩ... mấy em ấy đáng để mình ở lại Guild một thời gian và theo dõi đó.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Cậu nghiêm túc được không? Tôi đang nói đến vụ Silver Wolf và mắt đỏ.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Mình đùa tí thôi mà. Làm gì mà căng thế chứ, cậu sẽ lại già hơn bây giờ.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Thế...?'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'A hèm. Cho em xin phép được báo cáo kết luận lí do Silver Wolf chỉ có một mình. Theo như câu truyện của tụi nhỏ và kết hợp với điều tra của Guild thì chính con Silver Wolf mắt đỏ đã sát hại cả đàn của nó.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Chà, tàn nhẫn thật đấy. Vụ này lần đầu anh mới biết.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Vậy là cậu cũng gặp các vụ mắt đỏ à?'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Ừ, ở một số nơi mình đi qua cũng có bắt gặp ma thú mắt đỏ ở một cá thể hoặc cả đàn chứ chưa thấy cá thể trong đàn tàn sát đồng loại. Mình cảm thấy dường như có thứ gì đó đang tác động tới bọn nó.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Vụ này bọn tôi vẫn đang hợp tác điều tra cùng lãnh chúa. Và có vẻ phía bên vương quốc đã có hành động rồi.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Bí mật nhỉ?'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Một phần, những ai có báo cáo gặp mắt đỏ thì bên Guild đều sẽ hồi đáp lại nó chỉ là căn bệnh hiếm.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Giống như vừa nãy nhỉ?'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Tụi trẻ không nên lo lắng về mấy vấn đề này. Người lớn sẽ lo, mấy đứa nó chỉ cần sống thật vui vẻ là được.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Cậu nói phải. Mình sẽ giải quyết tụi mắt đỏ nhanh thôi, một đấm là được.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Dù sao thì... cậu có biết cô bé Hyouka là một trong nạn nhân của vụ mắt đỏ 2 năm trước không? Cô bé đó đã mất hết tất cả.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Cô bé tội nghiệp. Nhưng mà, có lẽ em Hyouka đã tìm ra thứ quý giá sẽ luôn ở bên cạnh em ấy. Nhìn mặt của em trông hạnh phúc lắm.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Mà hình như tôi quên nói gì đó với nhóc Shuuya thì phải...'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'À cái đó... chắc sẽ ổn thôi. Tiếc là mình không xem được phản ứng của em ý sẽ thế nào.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Chú diều hâu đậu ở trên mái nhà của Shuuya nhìn thấy cậu và cùng bạn đã về đến nhà cậu. Dường như Shuuya đã mời họ qua dùng bữa tối.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Con về rồi!'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ta cần nói chuyện với con chút về vấn đề chiều nay. Ta đợi con trong phòng khách.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thôi rồi thôi rồi! Sao cha lại biết thế này! Mình cần phải né vụ này mới được!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ờm... mời các cậu vào...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cậu biết gì không, nay Asahi trông không khỏe lắm nên mình xin từ chối lời mời nha. Mình về trước đây.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ơ nhưng còn tiền...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cậu cứ giữ đi, mai bọn mình sẽ lại qua mà. Chúc may mắn nha.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Vừa dứt lời thì Kowashi cõng Asahi chạy vút đi. Đúng thật là... Không sao mình vẫn còn Hyouka, xin lỗi vì đã lôi cậu vào vụ này.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Có vẻ chỉ còn cậu thôi... Hyouka?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Chân mình hết tê rồi. Mai gặp lại.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Từ lúc nào Hyouka đã xuống khỏi lưng tôi mà không hề hay biết luôn. Nhỏ cũng chạy theo sau nhóm Kowashi. Nhưng tại sao... ĐỒ PHẢN BỘI! Bỗng một bàn tay ở phía sau nắm chặt vào vai trái tôi.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ồ, có vẻ bạn con nay không qua ăn tối rồi. Chúng ta sẽ có nhiều thời gian nói chuyện đây.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Và thế là tôi đã bị cha nói suốt hơn một tiếng với cái bụng đói meo. May mà mẹ tôi cũng nói đỡ lời nên cuối cùng cả nhà cũng được ăn. Sau đó tôi ngay lập tức leo lên giường ngủ luôn vì đã quá kiệt sức. Thật là một ngày đáng nhớ.'
			}
		]
	},
	{
		chapter: 14,
		title: 'Giải cứu thành công',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thanh kiếm đã vỡ, chỉ còn con dao trên tay... Mình sẽ kết liễu nó... Mình... có thể...? Đó là những suy nghĩ trước khi tôi từ bỏ bởi nanh vuốt đã sát trước mắt. Vậy mà từ đâu, chàng trai mặc áo choàng dài xanh lá xuất hiện trước mặt tôi. Nắm đấm tay phải đầy máu vẫn còn đang dơ ra trước mắt. Dường như anh ta đã hạ Silver Wolf chỉ với một đấm?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'rốt cuộc là ai... vậy...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ơ...? Mọi thứ sao lại mờ đi hết rồi...? Tôi mất thăng bằng và ngã ngửa ra sau. Nhưng ngay lập tức anh ấy đã tới đỡ trước khi tôi gục xuống mặt đất.'
			},
			{
				class: 'unknown',
				name: [ '???' ],
				content: 'Em nghỉ ngơi đi, việc còn lại hãy để mọi người lo nốt nha.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Có nên tin vào người này không? Anh ta nói gì đó về “mọi người” nhưng xung quanh đây chỉ có mỗi anh ấy. Dù người này đã cứu mình trong gang tấc nhưng nó lại khiến mình không ngừng băn khoăn... Mình cần phải... tỉnh... táo... Tôi không còn đủ sức lực để mà suy nghĩ gì nữa và đã ngất từ lúc nào không hay.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Khu rừng tuyết...? Tại sao mình lại nằm ở đây vậy? Chẳng lẽ đã xảy ra chuyện gì sau khi mình ngất? Chú diều hâu kia sao cứ bay vòng quanh trên trời vậy? Tôi bối rối định ngồi dậy để xem tình hình xung quanh ra sao nhưng mà không cử động được. Rồi một lúc sau có giọng nói từ hướng nào đó phát ra. Tôi cố gắng cất tiếng nói nhưng không nên lời. Và bóng của một sinh vật nào đó đã xuất hiện trước mắt tôi. Nó chỉ nhìn chằm chằm vào mặt tôi và chạm vào tóc. Tôi không hiểu sinh vật đó định làm gì nhưng có vẻ là vô hại...? Tôi nheo mắt để cố nhìn rõ thì xung quanh bắt đầu mờ dần và cái bóng đó hiện ra là... Hyouka?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya ngủ ngon không?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cuối cùng cậu cũng chịu tỉnh rồi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ngủ? Mà khoan, chúng ta đang ở đâu đây?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Bọn mình đang ở trong phòng gặp riêng của Guild mạo hiểm giả.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Phòng gặp riêng, nếu mình không nhầm thì phòng này thường dùng cho các cuộc trao đổi quan trọng. Ở chính giữa phòng thì có một cái bàn vuông, xung quanh bàn là ghế đệm dài đủ cho ba người ngồi và bên còn lại là ghế đệm đơn dường như là dành cho nhân vật quan trọng. '
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi nằm trên ghế nhìn liếc qua căn phòng trong khi vẫn còn đang gối đùi Hyouka. Asahi thì bám lấy từ phía sau Kowashi, cậu đang có vẻ mặt bất lực và họ đang ngồi đối diện tôi... Ngày hôm nay không thể kì lạ hơn được nữa... Mà tại sao mình lại gối trên đùi của Hyouka vậy?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ra là chúng ta được người bên Guild cứu... Mà Kowashi, cậu đã làm gì Asahi vậy?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Mình cũng không biết nữa. Cậu ấy nói gì đó về hình phạt và sẽ không buông ra cho đến khi nào thỏa mãn thì thôi...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cậu nói rõ hơn xem nào.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Hừm... nói sao ta. Sau khi đỡ cho Asahi thì mình đã bị ngất và gặp ai đó tự xưng là thần trong tiềm thức...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Hả?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'À... bỏ qua chi tiết đấy đi, chắc do mình tưởng tượng. Sau đó mình tỉnh dậy trên ghế đệm trong phòng này và vừa nhổm người lên thì Asahi đã lao thẳng vào mình. Nhỏ cứ nói gì đó về việc mình làm khiên rồi tí thì không còn bao giờ tỉnh lại nữa. Rồi Asahi quàng lấy cổ mình và nói đây là hình phạt để mình không bỏ nhỏ. Và từ lúc đấy Asahi không nói gì thêm.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Từ lúc tôi tỉnh lại Asahi chưa có nói gì cả. Tôi nhìn nhỏ, khuôn mặt đượm buồn trông như đang lo lắng điều gì đó quan trọng sẽ lại rời xa một lần nữa. Nếu những lời Kowashi vừa nói là sự thật thì... cậu ấy thực sự suýt nữa mất mạng... Tôi đã ra một quyết định sai lầm...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Này! Nừng nó néo ná nình nữa Nyouka!'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya, bớt suy nghĩ lại và nghỉ chút đi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Làm sao mình có thể không suy nghĩ sau những gì đã... NAU NAU NAU!'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya. Nghỉ. Ngơi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nược nồi nược nồi.'
			},
			{
				class: 'unknown',
				name: [ '???' ],
				content: 'Em trai mà nghe lời trước đó thì có phải không bị đau rồi không?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Có lẽ vậy... Khoan! Ai AU!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi giật mình ngã lăn xuống sàn bởi giọng nói này vừa quen nhưng cũng vừa lạ. Cảm giác như là người tôi mới gặp gần đây.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'À, đó là anh Itsuki, người đã cứu bọn mình đấy.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi ngồi lại lên ghế, nhìn kĩ anh Itsuki thì trông anh rất trẻ tầm khoảng 20 tuổi. Anh có mái tóc màu xanh lá pha chút màu nâu cùng với đôi mắt đen tuyền. Trang phục thì dường như anh lấy tông xanh lá làm chủ đạo kết hợp với màu nâu, đen với trắng. Anh còn đang mặc thêm áo choàng màu lục đậm dài đến cổ chân có mũ chùm đầu. Có lẽ thứ làm tôi tò mò nhất chính là kính chắn gió anh đang đeo để ở trên đầu, không biết tại sao anh đeo nó. Tôi cứ nhìn chằm chằm vào anh Itsuki cho đến khi tôi nhận ra hành động này có hơi thô lỗ nhưng anh chỉ nở một nụ cười đáp lại. Đây đúng là người đã cứu tôi lúc đó, cái nụ cười này của người trước mặt tôi không thể nào nhầm lẫn được.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Em xin lỗi, em không nhận ra anh ngồi đấy. À ừm, anh tên Itsuki nhỉ? Em tên là Shuuya. Thay mặt cả Party, em cảm ơn anh rất nhiều vì đã cứu Party của bọn em.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka', 'Kowashi' ],
				content: 'Em cũng cảm ơn anh lần nữa.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'tên Itsuki, hân hạnh được làm quen với em. Anh nghĩ người các em nên cảm ơn là cậu em trai đã đến báo với Guild á.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vậy là cậu ta an toàn thoát khỏi rừng... may quá.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'chưa rõ sự tình lắm nhưng tí nữa người bên Guild sẽ qua hỏi lấy thông tin đó. Tiện thể thì cảm ơn đã chiêu đãi anh nha.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Chiêu đãi? Ý anh là sao?'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Không có gì đâu. Chỉ là... anh được ngồi xem hai đứa tán tỉnh nhau thôi. Mấy đứa trông đáng yêu lắm!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'BỌN EM KHÔNG TÁN TỈNH NHAU!'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Nào nào, nếu mà anh nói sai thì mặt đâu cần phải đỏ lên như thế đúng không?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Có vẻ anh Itsuki cũng có sở thích giống mình, thi thoảng mình cũng hay trêu như vậy với “bộ đôi rắc rối”. Nhưng bị trêu ngược lại thì có phần ngại thật. Hành động của Hyouka hơi bất cẩn... không, mình cũng có phần hơi tự nhiên khi cứ thế mà trôi theo. Tôi quay ra liếc nhìn Hyouka thì mặt nhỏ vẫn “lạnh” như bình thường, tất nhiên là ngoại trừ đôi tai dài đỏ chót nổi bật trên nền tóc trắng của nhỏ.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Em trai thấy bé tuyết này đang lúng túng có dễ thương không nè?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Tất nhiên là cậu ấy siêu dễ... A...'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Hửm...? Em định nói gì ấy nhỉ? Anh và cô bé dễ thương này nghe không rõ, em nói lại được không?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'được lắm...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Từ lúc nào mà anh Itsuki đã đứng ở phía sau ghế tôi đang ngồi. Tệ thật, không ngờ anh Itsuki lại có thể khiến mình mất cảnh giác dễ dàng như vậy được. Anh giỏi đấy nhưng sẽ không có lần sau nữa đâu. Mà nhìn lại thì Hyouka dễ thương thật... KHOAN GIỜ KHÔNG PHẢI LÚC NGHĨ VỀ NÓ!'
			},
			{
				class: 'unknown',
				name: [ '???' ],
				content: 'Itsuki, cậu thôi trêu mấy đứa nó được không?'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Thôi nào Katsumi, nói chuyện với mấy đứa này vui lắm.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Một người đàn ông trung niên cao lớn tầm ngoài 40 bước vào căn phòng. Vóc dáng của người đó trông thật vạm vỡ cứ như chiến binh xuất thân từ chiến trường. Mái tóc nâu cạo hai bên mai tạo cảm giác trẻ trung còn đôi mắt cùng màu lại tạo ánh nhìn có chút đáng sợ. Trang phục thì... đồng phục của Guild? Vậy ra người này là nhân viên của Guild. Theo như anh Itsuki gọi thì tên là Katsumi nhỉ? Mà rốt cuộc anh Itsuki và người này có mối quan hệ thế nào? Hay có mối quan hệ mật thiết gì đó với Guild chăng? Cảm giác lúc nói chuyện cứ như là bạn bè của nhau thay vì kiểu xã giao trong công việc, anh Itsuki bí ẩn thật.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Một lúc sau thì chị Maki bước vào phòng, chị tiến lại gần bác Katsumi nói gì đó rồi quay ra đóng cửa. Bác Katsumi và anh Itsuki sau đó cũng dừng nói chuyện và về chỗ ngồi của mình. Riêng bác Katsumi thì ngồi ở ghế đơn, còn chị Maki thì đứng ở bên trái của bác Katsumi. Đột nhiên bầu không khí cảm giác ngột ngạt hơn khi bác Katsumi ngồi xuống.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Cậu bỏ vẻ mặt hằm hằm đi được không Katsumi? Mấy nhóc này bị cậu dọa sợ rồi nè, chẳng trách đứa trẻ nào cứ thấy mặt cậu thì y như rằng chạy mất dép.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Cái này có phải do tôi đâu, chẳng qua do đôi mắt này đấy chứ.'
			},
			{
				class: 'Itsuki',
				name: [ 'Itsuki' ],
				content: 'Tiếc ghê ta, dù cậu có quý trẻ con đi nữa nhưng mà mấy đứa nó lại né cậu.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Hầy... Biết sao giờ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Không thể tin được bầu không khí trước đó đang rất bí bức vậy mà anh Itsuki nói vài câu mà cả phòng thoải mái hẳn. Mình cứ nghĩ anh Itsuki chỉ là người thích trêu trọc chứ ai ngờ anh còn đọc được cả tâm trạng nữa. Thậm chí còn dẫn dắt lời nói để bọn tôi hiểu được thêm về người đàn ông ngồi ở kia.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'E hèm... Ta vào việc chính thôi nhỉ?'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'À, phải rồi. Bác tên là Katsumi, là trưởng Guild mạo hiểm giả của thị trấn『Dawn Horizon』. Còn bên đây là thư kí của bác, chắc các cháu biết tên rồi nhỉ?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ế? Thư kí? Mình cứ tưởng chị Maki chỉ là nhân viên bên quầy tiếp tân thôi chứ.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cho em hỏi chị Maki chút là sao chị lại ở bên quầy tiếp tân vậy?'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'À, chẳng qua là chị muốn nhìn mọi người và đánh giá bằng chính con mắt này. Ngồi trong văn phòng làm việc với mỗi giấy tờ thì khả năng đánh giá sẽ không toàn diện và cũng chán lắm chứ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Bất ngờ thật, chị Maki đúng là thực sự nghiêm túc trong công việc. Chắc chắn chị sẽ trở thành nhân viên siêu ưu tú cho mà xem.'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Trước tiên thì bác muốn cảm ơn Party『Log Horizon』đã cứu người dân của thị trấn này. Nếu mà không có các cháu thì cậu nhóc kia chắc đã không thể trở về được rồi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Không có gì đâu ạ, cứu người là chuyện đương nhiên mà.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Phải rồi. Các em vừa mới đăng ký làm mạo hiểm giả. Vì một lí do gì đó mà vào rừng. Sau đó cứu người rồi cả Party đấu với Silver Wolf với cấp độ chênh lệch. Cuối cùng thì tí cả nhóm không còn đường trở về.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi không biết phải đáp lại như nào nữa. Chị Maki đột nhiên trông đáng sợ quá, chắc tại sáng nay chị đã khuyên không nên làm gì nguy hiểm đây mà...'
			},
			{
				class: 'Katsumi',
				name: [ 'Katsumi' ],
				content: 'Nào nào, quan trọng là tụi nhỏ đã an toàn trở về rồi mà. À, các cháu có thể kể bác nghe về cuộc phiêu lưu hôm nay của các cháu được không?'
			}
		]
	},
	{
		chapter: 13,
		title: 'Bảo vệ điều quan trọng',
		dialogue: [
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Silver Wolf, một con ma thú mắt đỏ lần đầu bọn tôi phải đối mặt. Ngay bây giờ tôi, Shuuya, Asahi đang vây quanh nó còn Hyouka đang ở sau tôi hỗ trợ từ khoảng cách xa. Cả hai bên đều chờ nhau xem ai sẽ khai mở cuộc chiến này trước. Và có vẻ Silver Wolf hành động trước, nó lao thẳng đến phía Shuuya chắc vì đòn tấn công trước đó của cậu.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Shuuya vẫn đứng im? Cậu ta có kế hoạch gì à? Con ma thú thì ngày càng tới gần. Silver Wolf giơ vuốt phải của nó lên và trước khi tôi định dùng『Cover』thì Shuuya đã xoay người về bên phải và nhảy giật lùi về hướng tôi ngay thời điểm nó áp sát. Silver Wolf đã vồ vào tường băng mà Hyouka đã dựng trước đó. Thì ra cậu muốn làm chậm đi chuyển động của nó một chút. Cứ ngỡ là thành công nào ngờ chân phải của Silver Wolf bám vào tường đưa cả ba chân còn lại lên rồi lấy đà phóng thẳng tới Shuuya. '
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Để mình lo cho.『Cover』.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Tôi mau chóng đỡ đòn lao tới cắn của ma thú cho Shuuya. Tuy Silver Wolf có bất ngờ nhưng nhờ phản xạ nhanh nó vẫn kịp xử lí tình huống. Nó đổi tư thế giơ hai chân trước đáp vào tấm khiên của tôi rồi hai chân sau đạp lên khiên lấy đà bật ngửa ra sau. Sau khi đáp đất, Silver Wolf lập tức tấn công tôi dồn dập. Shuuya từ đằng sau lấy lại được thăng bằng ngay lập tức lao thẳng lên bên trái tôi, tay phải cầm kiếm định đâm vào đầu của con ma thú. Chẳng cần phải nói thêm, Silver Wolf liền bật ngược ra sau né được cú đâm đó.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Trượt rồi. Cậu cần phải nhanh hơn nữa đấy.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đây là tốc độ nhanh nhất của mình rồi. Mà, chỉ cần vậy là đủ.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Tôi quay ra nhìn thì thấy Shuuya đang cười nhếch mép, cậu đang nói cái... Phập! Mũi tên băng của Hyouka bay thẳng vào bả vai phải của Silver Wolf và trong giây lát nó đã bị lúng túng. Silver Wolf né qua bên trái để quan sát phát bắn từ đâu. Asahi từ bên trái của nó liền áp sát được, hai tay nhỏ cầm chắc thanh trọng kiếm về bên trái và vung thẳng vào phần ngực con ma thú, đồng thời cũng kích hoạt Skill『Heavy Slash』. Cú vung của Asahi lực đến nỗi Silver Wolf bị bắn đi xuyên qua mấy hàng cây. Chú diều hâu và các loài biết bay bay đầy trên bầu trời do từng hàng cây bị đổ dập. Sau phát chém đó Asahi chạy lại chỗ chúng tôi với khuôn mặt hớn hở.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Các cậu có thấy gì không nya? Mình vừa kết liễu con ma thú một cách hoành tráng đó nya! Cụng tay nào nya!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Rồi rồi, bọn mình thấy hết mà. Thấy kế hoạch của mình thế nào?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Quá tuyệt vời luôn nya!'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Khoan... toàn bộ trận vừa rồi là kế hoạch của cậu? Sao mình lại không biết vậy?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thì lúc đó cậu chạy ra trước rồi còn đâu.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: '... Ra là vậy, cậu tài thật đó. Vậy vừa nãy việc cậu suýt bị tấn công và mình đỡ đòn cho cũng nằm trong kế hoạch của cậu rồi đúng không?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À... Tất nhiên rồi, mọi thứ đều nằm trong kế hoạch của mình mà. Đúng vậy, chắc chắn mình không tính sai đâu.'
			},
			{
				class: 'think',
				name: [ 'Hyouka', 'Asahi' ],
				content: 'Chắc chắn là nói xạo (nya).'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Với cú chém của Asahi thì không thể nào nó cử... ba vệt sáng?'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Từ trong vùng tối của khu rừng nơi hàng cây gãy đổ, ba vệt ánh tím đen sáng dần. Rồi từ nơi đó, lao thẳng tới chỗ chúng tôi là ba đường lưỡi liềm song song. Ba đứa bọn tôi vì đã chủ quan nên đã không phản ứng kịp. Bùm! Đòn tấn công đã bị hủy do va chạm với cột băng của Hyouka. Thật không ngờ ngay khi đường lưỡi liềm thoát ra khỏi vùng tối, nhỏ đã bắn một phát mũi tên băng. Mũi tên đó bay đi được nửa khoảng đường thì chạm vào mặt đất, một cột băng từ dưới đâm lên chắn đòn tấn công đó.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mừng hơi sớm rồi đấy các cậu. Nó đến kìa.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Silver Wolf bước đi chầm chậm ra khỏi phần tối của khu rừng. Nó vừa đi vừa gầm gừ đe dọa, lông thì xù hết lên còn ánh mắt đầy sát khí nhìn thẳng về phía bọn tôi như muốn ăn tươi nuốt sống hết cả đám. Cả ba đứa bọn tôi đều sốc và có lẽ người sốc nhất là Asahi. Nhỏ lúc này đang vừa bất ngờ vừa lo lắng vừa buồn vì đòn kết liễu không thành công. Đôi tai cụp với đuôi cong xuống đã nói hết lên cảm xúc lúc này của Asahi.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Không thể nào... nó vẫn cử động được...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Này này... Không đùa đấy chứ, giờ nó nghiêm túc thật rồi...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'MỌI NGƯỜI CHÚ Ý! NÓ ĐANG ĐẾN KÌA!'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Silver Wolf hú ầm lên một phát khiến bọn tôi đều phải tập trung hết vào nơi nó đứng. Và khi tiếng hú dứt, không biết từ lúc nào con ma thú đã ở trên không. Silver Wolf cuộn mình về trước xoay một vòng, móng vuốt chân trước của nó bỗng sáng lên và từ đó phóng ra sáu đường lưỡi liềm. Tốc độ của chúng nhanh hơn lần trước và với khoảng cách gần như này thì Hyouka cũng không ứng cứu kịp. Tệ rồi đây...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Shuuya từ đằng sau tiến lên trước, cậu đưa đường kiếm từ trái qua phải hướng lên trên phóng ra một lưỡi chém hủy đường lưỡi liềm của Silver Wolf. Có vẻ đó là Skill『Wind Blade』mà Shuuya đã bảo hồi sáng. Không biết từ lúc nào con ma thú đã ở dưới mặt đất và lao thẳng tấn công Shuuya. Shuuya lúc này đang bị đứng chôn chân, chỉ có thể đưa thanh kiếm lên đỡ những đòn vuốt cào liên tiếp từ nó. Mũi tên của Hyouka bay tới Silver Wolf thì nó liền dừng tấn công và né qua trái. Asahi nhân cơ hội lao lên nhưng Silver Wolf đã nhảy lên đúng lúc nhỏ vung kiếm. Ma thú nhận thấy có sở hở, nó giơ vuốt lên định cào Asahi thì đòn phong của Shuuya đã làm cản trở rồi cậu cũng lao lên phản công.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Mọi người lúc này đều đã quá kiệt sức rồi, vậy mà Silver Wolf vẫn không có dấu hiệu bị đuối. Thậm chí sau khi lãnh một đòn của Asahi vậy mà... không có vết chém? Tại sao vậy? Vết bắn mũi tên của Hyouka vẫn còn mà?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Shuuya lùi lại!『Cover』. Mình không hiểu sao đòn tấn công của Asahi và Hyouka lại khác biệt đến vậy.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Khác biệt... Mình hiểu rồi. Hyouka dùng “cái đó” đi.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: '“Cái đó”? Hi vọng “cái đó” mà Shuuya nói giải quyết được con này. Sau khi tôi đỡ đòn của của Silver Wolf thì Asahi từ mạn phải tôi vung kiếm tấn công. Như thường lệ nó lại né được nhưng từ lúc nào Shuuya đã áp sát được và trong tay trái cầm con Slime bị đóng băng trước đó đập thẳng vào mặt con ma thú. Chất nhầy của Slime che đi tầm nhìn của Silver Wolf khiến nó mất phương hướng tạm thời. Dù đã mau chóng né nhưng cậu vẫn bị dính một cào từ nó vào cánh tay trái sau khi cố áp sát như vậy.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'NGAY BÂY GIỜ HYOUKA!'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Không rõ kế hoạch này là như nào nhưng khi tôi nhìn về hướng Hyouka thì thấy nhỏ có vẻ đang dồn hết sức cho phát bắn cuối này. Hyouka từ đằng xa bắn một đường mũi tên cong lên trời. Khi mũi tên đã bay đủ cao, nó tách ra thành nhiều mũi tên rơi xuống Silver Wolf. Những mũi tên nào không trúng ma thú va chạm với mặt đất sẽ tan vỡ và tỏa ra hơi lạnh bao quanh nơi đó. Vậy là kết thúc rồi...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Tôi thở dài hạ khiên xuống, ai nấy cũng đều đuối sức cả. Hyouka thì chắc không còn đủ Mana để bắn cung nữa, nhỏ ngã quỵ rồi. Còn Shuuya chắc cũng đang cảm thấy khá đau sau khi bị như vậy. Kiếm cắm thẳng xuống đất và cậu dồn hết lực vào tay phải để tựa cố đứng thẳng. Và Asahi thậm chí còn ngồi hẳn xuống đất, dù sao thì nhỏ cũng là người đã tấn công liên tục trong suốt trận chiến. Rồi tôi quay ra nhìn lại màn sương lạnh giá bao trùm Silver Wolf, tuy không rõ con ma thú trong đó nhưng có ánh sáng tím le lói... không... đừng đùa chứ... Nó đang hướng đến Asahi... Tôi phải chạy... phải bảo vệ... điều quan trọng... chạy... chạy... CHẠY!'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: '『Cover』. 『Cover』. 『Cover』. 『Cover』!'
			},
			{
				class: 'think',
				name: [ 'Asahi' ],
				content: 'Mình mệt quá nya. Chúng ta thắng rồi nhỉ nya? Mình chả muốn đánh nữa đâu nya. Sao trời đột nhiên tối vậy nya? Máu? Sao lại có máu nhỏ... Tôi ngước nhìn lên thì thấy Kowashi đang đứng trước mặt...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Sao cậu ở đây... Sao cậu lại chảy máu? Nè, trả lời mình đi... '
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: '“Tấm khiên” này sẽ luôn bảo vệ cậu. Mình chưa kịp nói xong thì đã bị Shuuya chen ngang. Tấm khiên của mình nát rồi, nhưng... mình đã bảo vệ được cậu nhỉ?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Kowa...'
			},
			{
				class: 'think',
				name: [ 'Asahi' ],
				content: 'Tôi chưa kịp phản hồi lại thì Kowashi đã ngã về phía trước. Kowashi? Cậu chỉ mệt thôi đúng không? Nè... Tôi bò đến Kowashi, lật cậu ta lại. Trước ngực có một vết cắt ngang lớn... Tôi đưa tay lên ngực phải của Kowashi...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cậu không phải “tấm khiên” của mình, đồ ngốc...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Chuyện gì vừa xảy ra vậy... Mình chỉ vừa ngước lên thôi mà... Sao Kowashi lại nằm vậy? Asahi đang nói gì với Kowashi à? Silver Wolf ra sao rồi... nó vẫn đứng...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'ASAHI! SILVER WOLF VẪN... Asahi?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi đứng dậy, tay của nhỏ có nhỏ máu xuống mặt đất. Asahi bị thương à? Không... Móng vuột của nhỏ đột nhiên dài ra... Tai dựng đứng và đuôi thì xù lông lên... Nhỏ quay người lại, lần đầu tiên tôi thấy Asahi giận dữ như vậy. Nhỏ đang khóc... nước mắt tuôn chảy từ đôi mắt vô hồn.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Silver Wolf trên mình găm đầy mũi tên từ trong màn sương băng lao thẳng đến Asahi. Và Asahi cũng không ngần ngại lao thẳng tới khô máu với nó. Cả hai bên cào xé nhau chẳng còn né tránh nữa, mặc kệ vết thương càng ngày càng nhiều.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi rút cây kiếm, chết đứng bất lực nhìn vào toàn cảnh trước mặt. Chết tiệt... Chết tiệt! Chết tiệt! Tại vì mình... Nếu mình chọn rời khỏi rừng... chúng ta đã có thể ăn tối cùng nhau... Horned Rabbit của Kowashi trông ngon lắm...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ha ha... Nực cười thật.... Mình thật ích kỉ... Mình... không thể bảo vệ bất kì ai...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi thở hổn hển, sức lực của nhỏ có vẻ đã đến giới hạn. Silver Wolf bằng cách nào đó vẫn trên cơ Asahi và nhỏ đã gục ngã. Ngay khi Silver Wolf định kết liễu Asahi thì một bức tường băng được dựng lên từ hướng của Hyouka ngăn cách Asahi với ma thú.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Chút Mana còn lại. Mai gặp lại.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Vừa dứt lời thì Hyouka đã bất tỉnh. Mai gặp lại à... Tôi mỉm cười, cầm chắc cây kiếm trên tay phải lao đến Silver Wolf. Nó thấy tôi di chuyển nên cũng chuyển hướng qua tấn công tôi. Cả hai bên đều đã mệt mỏi nhưng vẫn cố chạy. Tôi giơ ngang thanh kiếm, dồn nén phong cũng như sức mạnh còn lại bao bọc lưỡi kiếm. Con ma thú tiến đến gần và há mõm ra định cắn tôi. Quyết định rồi, chém nó ra làm đôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'BIẾN ĐIIIIIIII!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Keng! Tôi chạy lướt qua Silver Wolf cùng với kiếm trên tay. Xong rồi... Kết thúc rồi... Thanh kiếm của tôi...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Đã vỡ tan... Vứt “thanh kiếm” đi, tôi lôi con dao bếp ra, quay ra nhìn con ma thú, chờ đợi nó lao đến. Tôi đứng đợi... chờ đợi... Tôi nhắm mắt lại nó còn đang đứng yên và khi mở mắt ra vuốt của nó đã ở trước mặt tôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Tạm biệt.'
			},
			{
				class: 'unknown',
				name: [ '???' ],
				content: 'Chúng ta vừa mới gặp nhau mà sao đã tạm biệt rồi?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Trước mắt tôi là một anh chàng mặc áo choàng dài màu xanh lá với mũ trùm đầu che khuôn mặt đã bị gió thổi lật ngược. Khoan... còn Silver... đầu của nó... đâu mất rồi... Còn mỗi phần thân của con ma thú dưới chân tôi... Người này rốt cuộc là ai...?'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Từ hàng cây đằng xa, một bóng đen bí ẩn núp đằng sau đó chứng kiến tất cả mọi thứ. Bóng đen đó dường như đang dùng một loại ma cụ liên lạc.'
			},
			{
				class: 'unknown',
				name: [ '???' ],
				content: 'Thử nghiệm thành công. Hết.'
			}
		]
	},
	{
		chapter: 12,
		title: 'Trước cơn bão',
		dialogue: [
			{
				class: 'think',
				name: [ '???' ],
				content: 'Khiên và dao găm, mình chỉ cần vậy là đủ nhưng... tại sao... Mình chỉ vào rừng để tìm chút nguyên liệu thôi mà. Giờ thì hiểu tại sao cha bảo nên ủy thác cho các mạo hiểm giả rồi. Cũng may “thứ đó” đang bận ăn mấy con ma vật khác, mình phải rời khỏi rừng ngay mới được.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Cậu trai mặt nhợt nhạt đang nấp sau hàng cây chầm chậm di chuyển tránh xa “thứ đó”. Sau một hồi di chuyển, cậu đã khuất khỏi tầm quan sát của nó. Cậu nhẹ nhõm được phần nào khi đã ra xa con ma thú. Cạch! Cành cây mảnh nằm trên mặt đất đã bị gãy làm đôi do cậu dẫm phải. Một vật thể xám lao nhanh tới cậu với vận tốc không thể nào tránh được nữa. Và thứ duy nhất cậu có thể làm ngay lúc này là bám lấy tấm khiên mà cậu đeo sau lưng và cố sống sót...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Nếu mình không nhầm thì con Slime đó nhảy về hướng này nya. '
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cậu... nhanh... quá... Đợi mình...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'A ha nya! Tìm thấy Slime...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Asahi đang định nói gì đó rồi nhỏ đột nhiên im lặng. Tôi tiến lại gần Asahi với hơi thở hổn hển vì phải chạy đuổi theo. Nhìn nhỏ trông hơi nhợt nhạt, đôi tai thì đang cụp xuống còn đuôi thì nhỏ đang nắm chặt. Tôi đặt tay trái lên vai phải Asahi định hỏi xem chuyện gì đã xảy ra thì tay tôi bắt đầu run... Asahi? Nhỏ đang sợ hãi? Nhỏ đã chứng kiến điều gì vậy? Tôi hít một hơi thật sâu để lấy lại sự tỉnh táo sau khi chạy quá nhiều. Một mùi tanh nồng xộc thẳng vào mũi làm tôi suýt thì ói ra. Nhưng cũng nhờ mùi tanh đó mà tôi đã tỉnh hẳn khỏi cơn choáng...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'C... chuyện gì đã xảy ra thế này?'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Khung cảnh trước mặt tôi là một bãi cỏ đỏ thẫm, điểm trên đó là các xác chết không toàn thây nằm la liệt mỗi nơi vài mảnh. Tuy đây không phải là lần đầu tôi nhìn thấy máu hay xác chết nhưng... thế này thật là ngoài sức tưởng tượng. Tôi cúi xuống dưới chân thì thấy một bãi nhầy cùng dấu chân. Đây có lẽ là con Slime bọn mình đang đuổi đã bị một sinh vật không rõ dẫm bẹp. Chạm thử vào dấu chân mà con ma vật đó để lại, vẫn còn ấm tức là nó chỉ vừa mới rời đi. Tôi tự hỏi cuộc chiến nào đã diễn ra ở đây trước khi chúng tôi đến. Đó là một cuộc chiến sinh tồn hay đây là một cuộc tàn sát? Dù còn nhiều câu hỏi trong đầu nhưng ngay lúc này, tôi biết rằng sinh vật trong cuộc chiến đó vẫn còn đang sống và có thể đang ở rất gần. Tôi liền đứng dậy, hai tay bám vào hai bên vai của Asahi từ đằng trước và xoay nhỏ hướng nhìn thẳng vào mặt tôi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Bọn mình phải ra khỏi đây ngay lập tức. Và báo lại với bên Guild mạo hiểm giả để họ điều tra được chứ.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Ừm...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Asahi có vẻ vẫn còn ám ảnh trước cảnh tượng quá sức vừa rồi. Mình cần phải nói gì đó an ủi nhỏ mới được, trông nhỏ tội nghiệp quá.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Asahi! Nhìn mình này. Chừng nào còn mình bên cạnh thì “tấm khiên” này sẽ luôn bảo...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Trong khi tôi còn đang nói thì một bàn tay xuất hiện chạm vào vai tôi từ đằng sau. Giọng nói cất lên kề sát bên tai tôi.'
			},
			{
				class: 'unknown',
				name: [ 'Người đằng sau' ],
				content: 'Cấm chạy!'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Tôi giật mình, hất bàn tay trên vai đi. Trong đầu tôi lúc này chỉ nghĩ đến việc bảo vệ Asahi. Tay phải tôi bám lấy vai phải của Asahi kéo nhỏ sát vào người tôi. Asahi có hơi chút bất ngờ sau hành động vừa rồi, tai và đuôi nhỏ dựng đứng hết cả lên. Tôi ôm chắc Asahi vào lòng và nhảy ngược hướng ra sau của nhỏ, còn tay trái thủ sẵn khiên che phía trước đề phòng có đòn tấn công ngay sau đấy.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'NGƯƠI LÀ AI! NGƯƠI ĐỊNH... Shuuya?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Bình tĩnh nào, mình đây. Sao hai cậu căng... Chuyện gì đã xảy ra ở đây vậy? Do hai cậu làm?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mùi... Mình sẽ qua chỗ khác đứng đợi...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nếu là do hai đứa này thì đã tốt. Chuyện gì đó tồi tệ đã xảy ra, cần rời khỏi đây ngay lập tức.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình có linh cảm chẳng lành, cần phải rời khỏi đây. Nhưng trước đó thì... Asahi còn ổn chứ?'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'A! Tôi quên mất mình vẫn đang còn ôm Asahi. Tôi vội vàng bỏ tay ra khỏi nhỏ và né sang trái. Phải nói gì đây? Tự nhiên chẳng biết phải nói gì trong tình huống thế này...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Mình nghĩ mình ổn nya.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Đôi tai của nhỏ lại thẳng đứng và đuôi thì ngoe nguẩy như bình thường rồi. Chắc là nhỏ hết sợ thật rồi, tốt quá.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình không rõ chuyện gì đã xảy ra nhưng rời khỏi đây...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Suỵt!'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Đôi tai của Asahi dường như đang nghe ngóng điều gì đó. Nhỏ quay người theo hướng đôi tai đang xác định âm thanh và chỉ tay đến. Sao mình thấy cảnh này quen quen...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Có tiếng phát ra ở đằng kia, mọi người có nghe thấy gì không nya?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi', 'Shuuya' ],
				content: 'Không.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình có nghe thấy. Ngoài mắt thì tai mình cũng khá thính. Tính sao đây Shuuya?'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Shuuya đến lúc phải đưa ra quyết định rồi, rời đi hay là đến nơi mà Asahi chỉ. Mà bọn mình cũng đã biết câu trả lời rồi, là bạn từ bao năm nên cũng không còn lạ gì lựa chọn của cậu, trưởng nhóm. À không, gọi là trưởng Party thì mới đúng chứ.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Di chuyển nào mọi người, rời khỏi chỗ này thôi. Asahi đi đầu đoàn dẫn đường, Kowashi ở giữa phòng thủ phía sau, sau đó là Hyouka tấn công từ xa và mình sẽ ở cuối đoàn lo thủ ở sau và hỗ trợ từ xa, đồng thời sẽ tham chiến nếu diễn biến phức tạp. Nếu không ai ý kiến gì thêm thì dẫn đường đi, Asahi.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Shuuya thích khiến mọi người đi từ bất ngờ này đến bất ngờ khác thật sự. Nghe câu đầu cứ tưởng là ra khỏi rừng chứ. Mà đương nhiên không có một ai ý kiến thêm gì về quyết định cũng như đội hình cả. Thế rồi Party bắt đầu di chuyển vào sâu hơn trong rừng.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Có vẻ hướng đi của chúng tôi trùng với dấu chân mà con ma thú nào đó để lại. Tại sao bọn tôi cho rằng đó là ma thú thì là vì hình dáng của dấu chân. Khu rừng khá là im ắng đến lạ thường, không biết lũ ma vật đâu hết rồi... Chẳng lẽ là do sự hiện con ma thú kia ở gần đây? Càng đi sâu thì dấu chân bắt đầu đứt quãng dần, thay vào đó là các dấu vết ở trên thân cây. Cách di chuyển của nó thật là kì lạ. Những tiếng gừ, tiếng nói ai đó, tiếng va đập vào nhau ngày càng rõ hơn và lớn dần, lớn dần...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Ngay trước mắt chúng tôi là một bãi đất trống đang diễn ra cuộc chiến giữa một cậu bạn và một con ma thú mà bọn tôi không hề biết. Nhìn qua thì có vẻ cậu bạn đó không có kinh nghiệm trong chiến đấu, kĩ thuật dùng khiên của cậu để lộ nhiều điểm mù quá. Bọn tôi núp sau hàng cây, quan sát tình hình cuộc chiến trước mặt.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Có vẻ đây là con ma thú mà chúng ta đang tìm. Nhìn giống sói, có bộ lông màu xám khói, mắt thì đỏ ngầu như muốn ăn tươi nuốt sống mọi thứ.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mắt đỏ... Không thể nào... Nó giống hệt con mắt của Ligheep hồi trước đuổi theo mình và cha thì...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Hyouka nắm chắc tay áo của Shuuya, dường như một phần kí ức mà Hyouka không muốn nhớ hiện ra. Hi vọng con sói này không liên quan đến bọn Ligheep.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Tôi tiếp tục quan sát, cậu bạn kia có vẻ đã thấm mệt sau khi đỡ những đòn vuốt cào liên hồi của con sói. Mà sao cậu ta không có phản công? Nếu cứ đỡ như vậy chẳng mấy chốc tấm khiên sẽ... Chết không ổn rồi!'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Shuuya! Mình phải ra cứu cậu ta ngay!『Physical Enhancement』.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'A... chạy đi mất rồi. Asahi theo cậu ta đi, khi Kowashi đỡ đòn thì cậu sẽ tấn công con ma thú đó. Hyouka và mình sẽ đưa cậu bạn kia rời khỏi trận chiến, rồi mình sẽ qua hỗ trợ sau.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Tuân lệnh nya.『Physical Enhancement』.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Chết tiệt! Khiên của cậu bạn kia vỡ rồi. Chỉ còn một chút nữa là đến chỗ cậu bạn kia, cố lên... một chút nữa... trong tầm rồi!『Cover』. Đây là Skill đưa bản thân xuất hiện trước đòn tấn công vào mục tiêu được tôi lựa chọn để có thể đỡ đòn ngay lập tức.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Mặc dù tôi đã xuất hiện kịp thời để đỡ đòn tấn công nhưng không ngờ cú cào của nó lại lực như vậy. Tôi cùng cậu bạn sau lưng bị nó đẩy lùi một khoảng. Sau đòn đó tôi hơi loạng choạng và chưa kịp định hình lại thì con ma thú đó đã ngay lập tức xông thẳng tới định cắn tôi. Cũng may Asahi đến kịp, hai tay nhỏ cầm chắc thanh trọng kiếm vung vào ma thú. Cảm thấy bị đe dọa, nó liền lộn ngược lại về phía sau và né thành công cú vung kiếm của nhỏ. Mặc kệ trúng hay trượt, hiện giờ Asahi đang liên tục tấn công con ma thú để câu thêm thời gian cho bọn tôi. Cả hai bọn họ người lúc tấn công người lúc né không ai nhường ai.'
			},
			{
				class: 'villager',
				name: [ 'Cậu bạn' ],
				content: 'Cứ tưởng Silver Wolf cho mình tiêu đời rồi chứ. Phải rồi, về bộ lông các cậu không...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Cậu bạn này nói nhanh quá, chắc vẫn còn hơi sốc vì suýt nữa thì chầu trời. Mà theo như lời của cậu bạn thì con ma thú kia là Silver Wolf.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Bình tĩnh nào. Dừng lại một chút để thở đi đã.'
			},
			{
				class: 'villager',
				name: [ 'Cậu bạn' ],
				content: 'Không, cậu không hiểu, về bộ lông...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nghe mình này, giờ mình cần cậu lập tức về thị trấn báo cáo với Guild mạo hiểm giả ngay. Bọn mình sẽ ở đây cầm chân Silver Wolf, con này không dễ xơi đâu.'
			},
			{
				class: 'villager',
				name: [ 'Cậu bạn' ],
				content: 'Nhưng... Thôi được rồi, cảm ơn Kowashi và mọi người nhiều. Mình đi về báo cáo với Guild ngay.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Mà khoan... sao cậu ta biết tên mình? Hay là ai đó vừa nãy nói tên mình? Cậu bạn sau khi nói cảm ơn liền lập tức chạy về hướng ra khỏi khu rừng mà Shuuya đã chỉ. Silver Wolf từ xa đang tấn công Asahi, thấy cậu ta chạy lẻ liền nhảy vòng qua người nhỏ và đuổi theo.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Trước khi tôi định dùng『Cover』thì một mũi tên băng từ đằng sau tôi bay đến giữa cậu bạn với con ma thú. Trên đường mũi tên bay, đằng sau của nó tỏa ra các bông tuyết rơi xuống mặt đất và từ đó đâm lên các cột băng nhọn. Một Skill dựng tường để phòng thủ diện rộng. Nhưng nào ngờ, trước khi Silver Wolf bị chặn lại thì nó đã bật nhảy. Cú nhảy của nó có thể qua cả tường bằng? Không ổn rồi! Mình phải chạy đến... Shuuya ở mặt bên kia tường băng nhảy qua đúng thời điểm Silver Wolf đang ở trên không. Cậu dùng phong kĩ để thổi bay con ma thú về mặt đất. Tuy là đòn phong đó không gây được sát thương bởi Silver Wolf trước khi đáp đất đã kịp thời phản xạ tránh được va chạm. Nhưng mục tiêu ban đầu đã thành công. Và như vậy, cậu bạn đó đã thoát khỏi cuộc chiến an toàn.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Chú diều hâu đậu trên cây quan sát Party『Dawn Horizon』đang bao vậy con ma thú. Giữ chắc tấm khiên, cầm chắc thanh kiếm, giương sẵn cây cung và sẵn sàng cào xé. Giờ trận chiến của họ mới thực sự bắt đầu.'
			}
		]
	},
	{
		chapter: 11,
		title: 'Nhiệm vụ đầu tiên (2)',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka đánh thức tôi dậy sau một giấc ngủ trưa. Có vẻ như cả đám đã nghỉ ngơi đủ để tiếp tục hoàn thành nhiệm vụ. Còn tôi vẫn đang còn nửa tỉnh nửa mơ vì nằm dưới tán cây mát mẻ cùng làn gió nhè nhẹ thoang thoảng thổi qua. Thật là dễ chịu, tôi không hề muốn di chuyển khỏi chốn thư thái này. Cho dù là thế tôi vẫn còn việc cần phải làm. Nếu chỉ có một mình thì tôi sẽ vẫn nằm tiếp nhưng với cương vị trưởng Party, quản lý mọi người hoàn thành nhiệm vụ là ưu tiên hàng đầu. Hyouka đưa tay ra, có vẻ như nhỏ muốn kéo tôi dậy. Tôi đưa tay ra nắm lấy bàn tay ấy, bàn tay của Hyouka thật là mềm mại và ấm áp mà không hề lạnh. Tôi đứng dậy với cơ thể còn hơi nhức mỏi chắc bởi ngồi tựa vào cây ngủ nên tôi vặn mình để cơ thể thoải mái hơn chút. Được rồi, sẵn sàng cho nhiệm vụ tiếp theo.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nghe này các cậu, theo kế hoạch đã bàn sáng nay thì tiếp theo chúng ta sẽ hỗ trợ Asahi và Hyouka làm nhiệm vụ săn Slime. Trước tiên chúng ta cần...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi chưa kịp nói xong thì Asahi đã cắt lời. Trông nhỏ có vẻ rất hào hứng, tai thì dựng đứng còn mắt cứ sáng lên trông như không thể đợi được thêm nữa.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Không cần phải nói thêm nữa nya. Trước tiên chúng ta cần phải tìm ra Slime đúng không nya?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Vậy thì mình sẽ tìm cùng cậu, coi như là cảm ơn trước đó đã giúp mình nha.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Được thôi nya. Vậy thì hai bọn mình chạy trước đây, tìm được vị trí thì mình sẽ báo lại sau nya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ê khoan đã hai cậu! Ý mình muốn nói là trước tiên chúng ta phải dọn dẹp chỗ này đã!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thế là “bộ đôi rắc rồi” đã chạy vút đi mà không nghe thấy tôi nói gì. Bộ đôi đó đúng là nhanh nhảu thật. Dù sao thì tôi cũng không hẳn là trưởng Party, bọn tôi chưa bàn về vấn đề này. Chẳng qua tôi có cảm giác như vậy vì tôi đứng ra làm một số việc như là đăng ký và đặt tên Party, lập ra kế hoạch thời gian làm nhiệm vụ, mang một số đổ tiếp tế như là đồ ăn nước uống và một vài vật dụng... Ủa khoan? Đó có phải là những thứ mà trường Party hay làm không ta? Sao cảm giác nó sai sai thế nào ấy nhỉ? Mà thôi... Phải dọn nhanh để ra chỗ bọn họ thôi. Tôi thở dài, nhìn về phía chỗ bọn tôi nghỉ ngơi thì thấy Hyouka đang dọn dẹp đồ đạc. Tôi cứ tưởng Hyouka cũng đi theo bộ đôi ngay sau đó vì đây là nhiệm vụ của nhỏ.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ờm... Hyouka? Sao cậu vẫn còn ở đây vậy? Asahi đi làm nhiệm vụ săn Slime rồi kìa?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Phải dọn đống đồ bày ra trước. Bộ đôi đó sung sức lắm nên kể cả có nghe thế cũng sẽ làm cho mau chóng để đi làm mấy việc của các cậu ấy muốn thôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vậy là cậu có nghe thấy lúc mình nói một mình à... Ngại thật đấy...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Bị Hyouka thấy mình nói một mình ngại thật... Mà may là Hyouka có nghe thấy mình nói, có thêm người ở lại giúp dọn dẹp thì sẽ nhanh thôi. Cần phải dọn nhanh rồi còn ra chỗ của bộ đôi mới được.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Không. Mình nghe thấy lúc trước khi Shuuya bị ngắt lời do Asahi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nhưng... mình còn chưa đề cập gì mà?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình đã ở bên Shuuya khá lâu để hiểu Shuuya muốn nói gì mà.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Vậy Hyouka hiểu mình đến vậy cơ á? Còn tôi... tôi vẫn chưa thể thấu hiểu nhiều về Hyouka, có lẽ cả “bộ đôi rắc rối” mà thậm chí là cả bản thân... Tôi sau khi nghe vậy nhịp tim dường như đã lệch một nhịp. Phải chăng đây là cảm giác bị người khác nắm thóp... Hay là cảm xúc... chắc không phải đâu.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Thế Shuuya có điều gì muốn nói không? Mình đang chờ nghe Shuuya nói.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À... ừm... Cảm ơn cậu đã ở lại giúp mình nha, Hyouka.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Không phải là điều mình muốn nghe nhưng vậy cũng được. Không có gì.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Xung quanh Hyouka xuất hiện vài bông tuyết lấp lánh và đôi tai dài của nhỏ đang ve vẩy. Nhưng... Không phải ư? Mình vẫn không thể hiểu nổi nhỏ... Con gái đúng là khó hiểu thật.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Chú diều hâu đậu ở trên cây nơi mọi người nghỉ ngơi đã tung cánh bay qua nơi Asahi đang làm nhiệm vụ săn Slime. Bộ đôi trông có vẻ như vẫn đang tìm kiếm Slime.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Tại sao mãi không thấy Slime đâu nya! Chị Maki bảo có nhiều lắm mà nya!'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'có bảo là nhiều chứ không bảo dễ kiếm. Nhưng thường Slime phải nhiều mà ta... Thậm chí nó còn to khoảng bằng đầu con người. Chẳng lẽ các mạo hiểm giả khác săn hết rồi?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cũng không trách được bởi Slime săn dễ, mà số lượng cũng nhiều nữa nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Slime ở vùng này có màu giống cỏ nên hơi khó tìm. Chắc chúng ta chưa tìm kĩ thôi. Phải chi có manh mối xung quanh đây...'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Kowashi vừa bước đi vừa nói vừa ngó nhìn xung quanh nên đã không để ý đường trước mặt. Rồi cậu đã trượt chân và ngã ra đằng sau. Cú ngã khiến cho Asahi nghe thấy từ xa phải chạy vội tới xem có chuyện gì.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'NYA! KOWASHI, CÓ SAO... A nya! Cậu vừa dẫm phải con Slime này nya. À không... đây chỉ là chất nhầy Slime thôi nya. Nhưng chúng ta chỉ cần lần theo vệt nhầy của Slime là được rồi, Kowashi tuyệt thật đó nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Mình mà lại. Cậu có thể tiếp tục khen mình... sau khi giúp mình đứng lên được không?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Nya...'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Sau khi Asahi kéo Kowashi đứng dậy thì bộ đôi lần theo vết nhầy của Slime để lại và đã dẫn họ đến một bãi đá nhỏ gần bìa rừng. Ở đó đang có bầy Slime tụ tập lại xung quanh và có vẻ bọn chúng đang trốn khỏi thứ gì đó. Thường thì Slime hay di chuyển vô định nhưng nếu có cảm giác bị đe dọa thì chúng sẽ tìm nơi để trốn.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Có vẻ đám Slime này đang trốn mạo hiểm giả xuất hiện trước đó thì phải. Trông có vẻ đông đó, có lẽ chúng ta nên đợi... Này!'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Chưa dứt lời, Asahi đã chạy thẳng lên tảng đá lớn mà bọn Slime đang trốn sau đó. Hai tay cô nắm chắc thanh đại kiếm, đưa đường kiếm hướng từ bên phải phía dưới lên phía trên quá đầu trong khi bật nhảy khỏi tảng đá. Trên không trung, cô vung kiếm đập mạnh xuống mặt đất khiến xung quanh tỏa ra trấn động. Tuy rằng cú vung không trúng con Slime nào vì khi Asahi ở trên không trung, bọn Slime đã nhận ra và nhảy ra hướng khác. Nhưng, những con mà gần Asahi nhất đã không né được trấn động từ cú vung kiếm xuống mặt đất nên đã bị choáng và mất phương hướng. Và đó là Skill『Heavy Slash』mà Asahi đã sử dụng. Sau cú đập kiếm đó, Asahi liền đổi tư thế ngay lập tức, cô cầm chắc thanh trọng kiếm trong tay, vung một vòng từ trái qua phải kết liễu các con Slime đang bị choáng ngay lập tức.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Tuyệt vời nya! Mình săn được 5 con cùng lúc luôn nè nya! A mấy con khác bỏ chạy rồi, mình đuổi theo đây nya!'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Từ từ đã Asahi, nếu không cậu sẽ... Biết ngay mà... Hầy...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Asahi vội vàng định đuổi theo bọn Slime trốn chạy thì đã trượt chân và ngã. Tuy phản xạ của nhỏ thường rất sắc bén nhưng cầm thanh trọng kiếm trong tay, trọng lượng cơ thể bị thay đổi khiến cho Asahi không còn phản ứng kịp. Và có vẻ nhỏ chưa quen với thanh trọng kiếm, dù gì cũng mới nhận được chức nghiệp cũng như vũ khí ngày hôm qua nên chưa thể làm quen được.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Để mình lùa bọn Slime lại cho. Còn cậu cố loại bỏ chất nhầy dích trên người của cậu đi ha.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Kowashi đuổi theo bọn Slime đang chạy trốn thì... Phập! Phập! Phập! 3 phát mũi tên từ đâu bay tới găm thẳng vào đám Slime và kết liễu chúng. Mũi tên vừa găm vào thì ngay lập tức đóng băng toàn cơ thể của Slime. Mũi tên băng đó được bắn ra từ Skill『Ice Arrow』của Hyouka. Tôi và Hyouka đã dọn dẹp xong và đến nơi bộ đôi đang săn Slime.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Còn 2 con nữa là xong nhiệm vụ. Mà Asahi đã làm gì để ra nông nỗi thế này?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi lúc này đang ngồi dưới đất cố gỡ chất nhầy đang dính trên người. Do cách tấn công mạnh của Asahi nên chất nhầy trong cơ thể Slime đã bắn lên người nhỏ. Còn Hyouka tấn công từ xa nên sẽ không cần lo việc bị dính phải.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Ai đó giúp mình với nya! Lông mình nhớt quá và mình không đứng lên được nya... Ở gần đây có hồ nước nào không để mình nhảy tạm xuống nya...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Có vẻ gần đây không có. Nhưng mình sẽ thử cách này xem.『Cleanse』'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi dơ lòng bàn tay phải hướng về phía Asahi, một luồng gió xoáy nhẹ xung quanh xuất hiện quanh người nhỏ. Chất nhầy dần dần tách ra khỏi lông và trang bị của Asahi. Tôi đã học được Skill này trong khi dọn dẹp nhà cửa.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nếu mình dùng được thủy kĩ thì『Cleanse』có thể làm sạch luôn mọi thứ, còn phong kĩ của mình chỉ có thể tách vật bám nhất định ra được thôi.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Shuuya tuyệt vời nya! Tạm thời thế là ổn với mình rồi nya! À mà mình săn đủ yêu cầu rồi nên giờ giúp nốt Hyouka nya. Còn cần mấy con nữa vậy nya?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Còn 2 con... Đính chính. Còn 1 con, mình vừa tiện tay bắn thêm lúc Shuuya dùng『Cleanse』.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Tính ra bọn mình chưa từng thấy cậu dùng cung bao giờ mà. Sao cậu có thể bắn chuẩn như vậy được?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mắt của Elf khá tinh đó.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Trong lúc mọi người đang nói chuyện thì tôi tiến tới chỗ đám Slime bị Hyouka hạ, cầm một con lên nhìn kĩ. Có vẻ băng của Hyouka chỉ đóng băng bề ngoài nhưng dường như Slime không chịu được lạnh nên đã bị hạ. Tôi lấy dao bếp từ『Cooking Set』ra, khoét một lỗ đủ lớn để tôi thò hai ngón tay vào để lấy『Crystal』. Lí do tại sao tôi không đổ chất nhầy của Slime ra ngoài để dễ lấy『Crystal』thì là vì tôi định giữ lại để thí nghiệm nó vào lúc nào đấy, rồi cất vào Inventory. Tuy là chị Maki có nói nó không có giá trị gì nhưng có lẽ nó sẽ có ích trong vài trường hợp. Và tôi đã lặp lại như thế với các con Slime còn lại của Hyouka. '
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Được rồi,『Crystal』của Slime mình đã nhặt hết. Giờ chỉ cần 1 con nữa là...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Suỵt!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi chưa kịp nói xong thì lại bị ngắt lời. Có vẻ Asahi đã nghe được tiếng gì đó. Đôi tai của nhỏ đang định hướng xem âm thanh phát ra ở phía nào. Rồi Asahi đã xác định được và chỉ về hướng đó báo hiệu cho Hyouka.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Bắn về hướng kia nya!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka giương cung lên bắn, mũi tên thẳng về hướng Slime đang nhảy vào rừng. Tiếc là nó đã nhảy ra phía sau cây nên cú bắn đó đã bị trượt. Asahi thấy vậy liền đuổi theo Slime sâu vào trong rừng và Kowashi thấy vậy cũng theo sau đó.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ơ! HAI CẬU QUAY LẠI NGAY! TRONG RỪNG NGUY HIỂM LẮM! CHÚNG TA CÓ THỂ TÌM CON SLIME KHÁC MÀ! NÀY!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Một lần nữa, bộ đôi lại không nghe tôi nói. Tôi thở dài, bất lực và nhìn xuống đất. Tự hỏi vị trí trưởng Party chắc không hợp với mình. Hyouka đặt hai bàn tay của nhỏ sau lưng tôi, đẩy tôi về trước như đang bảo phải đuổi theo họ ngay vậy. Chị Maki có bảo người mới không nên vào rừng vội, có nhiều ma vật nguy hiểm tồn tại trong đó. Gác suy nghĩ vu vơ sang một bên, tôi cần phải đuổi theo họ.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Rồi rồi. Không cần phải đẩy mình nữa đâu. Bộ đôi đó tốt nhất là nên chưa đi quá sâu vào trong khu rừng.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Chú Slime bị Hyouka bắn hụt đang nhảy sâu vào trong rừng. Chú cứ nhảy mãi cho đến khi đã cắt đuôi được Party của Shuuya. Rồi, một bàn chân của ma thú có bộ lông bạc từ đâu dẫm bẹp chú Slime đó. Mồm của con ma thú đó đang nhai ngấu nghiến một con ma thú khác với bộ hàm sắc nhọn có thể thấy từ bên ngoài. Còn đôi mắt thì đỏ ngầu như màu máu tươi vậy. Con ma thú vừa bước đi vừa nhai rồi biến mất khỏi nơi chú Slime tội nghiệp đã bị dẫm bẹp.'
			}
		]
	},
	{
		chapter: 10.5,
		title: 'Nếu như ta chưa từng gặp nhau',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Nếu như chúng ta chưa từng gặp nhau thì giờ đây tôi sẽ đi về đâu nhỉ? Liệu rằng tôi có thể trở thành con người như bây giờ nếu thiếu các cậu? Kowashi, Asahi và Hyouka... những cái tên này... họ là ai vậy nhỉ?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi tên『Shuuya』, là một người chuyển sinh đến thế giới này bởi văn phòng Re:Life. Cha tôi tên『Haruka』là một người lính. Và mẹ tôi tên『Sara』là thợ may vá và cũng là nội trợ của gia đình. Tôi đang ở thị trấn có tên gọi là『Dawn Horizon』. Ngày qua ngày là chuỗi ngày bình yên sống bên cha mẹ mới của tôi. Luyện kiếm cùng cha, giúp đỡ việc nhà cùng mẹ, âm thầm luyện Skill vào ban đêm.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mặc dù tôi không gây rắc rối gì cho cha mẹ nhưng tôi có thể nhận thấy sự lo lắng dành cho tôi qua lời nói của họ. Chắc vì cách nói của tôi không bình thường so với các đứa trẻ khác. Tôi ít giao tiếp với người khác ngoài gia đình và đồng thời cũng không có bạn bè. Cơ thể tôi tuy như đứa trẻ nhưng linh hồn bên trong lại là người trưởng thành nên cách cư xử có phần không phù hợp. Tôi thay vì lựa chọn đeo lên chiếc mặt nạ để diễn vở kịch thay đổi bản thân mà ai cũng muốn xem, thì tôi lại lựa chọn không thay đổi và vẫn là chính mình như ở kiếp trước. Có một cơ hội để thay đổi bản thân vậy mà tôi lại không nắm lấy. Thật thảm hại làm sao...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Vào năm 10 tuổi, sau khi được ban chức nghiệp tại nhà thờ, tôi liền đăng ký làm mạo hiểm giả. Vào khoảng thời gian đó mọi mạo hiểm giả tại Guild đều coi thường tôi vì chức nghiệp của tôi là『Chef』, một đầu bếp được coi là không có khả năng chiến đấu chỉ có thể làm chân sai vặt trong Party mà thôi. Còn những nhân viên trong Guild tuy không có ác ý gì khi cũng đưa ra lời khuyên cho tôi nhưng trong tôi cảm thấy khá nhói. Mặc kệ những lời nói, tôi vẫn chọn con đường mạo hiểm giả.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khoảng thời gian làm nhiệm vụ thì tôi đang ở hạng Bronze và đã đủ điều kiện làm bài thi lên hạng Silver. Nhưng đen đủi làm sao khi bài thi yêu cầu cần phối hợp làm việc với đồng đội. Tôi không quen ai và cũng không có bạn bè nào để nhờ vả. Có nhiều mạo hiểm giả ở hội chắc sẽ sẵn lòng giúp tôi hoàn thành bài thi nhỉ? Không có chuyện đó đâu. Lời bàn tán về tôi là một đầu bếp làm mạo hiểm giả vẫn đang là chủ đề chưa hết nóng trong đây. Từ những người đã biết sẽ truyền đến tai những người chưa biết rồi cũng sẽ biết đến tôi. Và không ai rảnh đến nỗi đi giúp một đứa như tôi để rồi cũng bị cuốn theo những lời đồn. Lời đồn chính là con dao hai lưỡi, danh tiếng lẫy lừng hoặc sự nghiệp tan vỡ nếu bạn dính phải. Tôi đã không nhờ ai và chấp nhận sự thật. Tất nhiên tôi không bỏ làm mạo hiểm giả và vẫn nhận được nhiệm vụ như thường. Nhưng việc thăng hạng sẽ bị tạm hoãn vô thời hạn bởi tôi không có đủ sự tin tưởng dành cho một ai ngoại trừ gia đình.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Rồi thời gian trôi đi đến năm 18 tuổi, tôi quyết định rời xa thị trấn để thực hiện mong muốn phiêu lưu khắp nơi của bản thân. Nhưng trước đó tôi đã quyết định nhận một nhiệm vụ cuối cùng tại nơi đây. Nội dung nhiệm vụ là hộ tống đoàn vận chuyển quặng sắt đến thành phố『Kardia Tou Dasous』, hành trình đi ước lượng mất khoảng 3 ngày nếu không phát sinh vấn đề. Thời gian bắt đầu di chuyển vào sáng sớm ngày mai và điểm hẹn là cổng phía Tây Bắc. Tối hôm trước nhiệm vụ tôi đã nấu bữa tối cho cha mẹ tôi coi như là tiệc chia tay trước khi tôi lên đường, đồng thời cũng chuẩn bị sẵn đồ ăn cho hành trình. Sáng sớm hôm sau, tôi đã tạm biệt cả nhà và đến điểm hẹn. Khi đến nơi, tôi đã thấy một đoàn xe ngựa có ba xe ở giữa đang chất đầy quặng sắt. Và hai xe còn lại ở trước và sau đoàn là xe trống dùng để chở mạo hiểm giả. Mỗi xe chở được 6 người không tính người đánh xe. Có vẻ như xe trước đã đủ người rồi mà xe cuối còn thiếu một nên tôi đành tham gia nhóm đó.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Tôi có thể ngồi xe cùng mọi người được không? Tôi tên Shuuya, tôi nhận nhiệm vụ hộ tống đoàn xe.'
			},
			{
				class: 'villager',
				name: [ 'Mạo hiểm giả' ],
				content: 'Này Viktor, lại xem thằng nhóc này nè.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Từ trên xe, một bóng dáng to lớn của người đàn ông đầu trọc ngoài 30 có nước da ngăm đen. Hắn mặc một chiếc áo dạng tanktop ba lỗ cỡ lớn đi kèm với một chiếc quần lửng có cả tá vết rách ở phần đùi, nhìn về phía tôi mà nói với giọng đầy tự cao.'
			},
			{
				class: 'villager',
				name: [ 'Viktor' ],
				content: 'Mày, người nhỏ con như mày mà cũng muốn làm mạo hiểm giả hả? Nhìn lại bản thân mình đi. Mà nếu ta không nhầm thì ngươi là đầu bếp mà mọi người vẫn hay nói thì phải?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Phải, vậy có vấn đề gì?'
			},
			{
				class: 'villager',
				name: [ 'Viktor' ],
				content: 'À không có vấn đề gì đâu... CHỈ LÀ MÀY SẼ CHỈ TỔ VƯỚNG CHÂN MÀ THÔI. Để có thể làm cái nghề này ít nhất phải là có chức nghiệp chiến binh như ta hoặc là kiếm sĩ, pháp sư, cung thủ nhưng đầu bếp ư? VỀ MÀ HỌC NẤU ĂN ĐI!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ngay từ điệu bộ đầu khi hắn và mọi người nói chuyện với tôi thì chuyến đi này sẽ đầy rắc rối cho tôi đây.'
			},
			{
				class: 'villager',
				name: [ 'Viktor' ],
				content: 'Mà ta còn nghe nói ngươi chỉ làm nhiệm vụ một mình nhỉ? Chắc mày phải yếu đuối lắm và là một gánh nặng đến nỗi không có ai cho vào cùng Party ha.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đừng lo. Tôi sẽ không cản trở đâu.'
			},
			{
				class: 'villager',
				name: [ 'Viktor' ],
				content: 'Đừng có đứng đấy khoác lác, ngươi mau vác chỗ đồ kia lên xe đi. Thể hiện mình là người có ích đi. Còn bọn bây cứ kệ nó để cho tự vác lên.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thế rồi cả đám cười lớn và lên xe để mặc tôi tự bê những thùng hàng nặng và đồ đạc của bọn họ lên xe. Vì không muốn tạo rắc rối nên tôi chỉ âm thầm nghe theo. Tôi sử dụng Skill『Physical Enhancement』để bê vác nên cũng không khó khăn gì. Bọn họ cũng chả bận tâm gì tới việc tôi có thể tự bê chỗ đồ nặng đó. Người đánh xe của tôi thấy chuyện xảy ra như vậy cũng không thể nói được gì bởi cũng chỉ là người được thuê. Rồi đoàn xe đã bắt đầu di chuyển.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Đoàn xe băng qua cánh rừng phía Bắc của thị trấn, hai hàng cây bên đường vụt qua mắt tôi. Và rồi vượt qua khu rừng, một thảo nguyên rộng lớn hiện ra trước mắt. Đoàn xe cứ đi, băng qua những ngọn đồi lớn rồi qua những đồi hoa tràn đầy màu sắc. Cả một bầu trời bao la đầy những con thú bay lượn như chú diều hâu lông nửa trắng nửa lam, còn trên mặt đất trải dài đầy những con thú đang gặm cỏ hay đang nằm nghỉ tận hưởng làn gió mát nhè nhẹ. Không gian này khiến cho chuyến đi trong nhiệm vụ thật là thư giãn. Ngoại trừ việc khoảng không gian hiếm có này đã bị phá hỏng bởi tiếng nói lớn của hội Viktor.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Trong suốt chuyến đi, Viktor cứ nói mãi về các chiến tích hắn có trong sự nghiệp mạo hiểm giả. Còn đám bạn của hẳn cứ tung hô ca ngợi những điều hắn nói mà chả thèm quan tâm độ chính xác là bao nhiêu. Chắc là đám đó muốn theo kẻ mạnh như Viktor để còn có người bảo kê hộ. Hoặc chỉ đơn giản là không muốn gặp rắc rối với Viktor. Và theo như cuộc trò chuyện đám đó thì Viktor sắp được thăng lên hạng Silver. Có vẻ Viktor cũng không phải là dạng chỉ biết nói mà không biết làm, ít nhất đó là điều tôi đã nghĩ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mặc kệ cuộc trò chuyện của đám đó, tôi ngồi dựa lưng vào thành xe, trống hai cánh tay lên thành và hướng nhìn về phía trước cố tận hưởng khung cảnh cùng làn gió mát mẻ này. Rồi cả đoàn xe đã dừng lại bên hồ nước có cây táo gần đó để nghỉ ăn trưa. Tôi mở thùng đồ trên xe, đưa tay vào để lấy 1 cái bánh mì thì Viktor nắm lấy chắc cánh tay của tôi, kéo lên và đẩy mạnh tôi vào thành xe làm xém thì bị ngã khỏi xe.'
			},
			{
				class: 'villager',
				name: [ 'Viktor' ],
				content: 'Mày là đầu bếp mà, tự mình kiếm hay nấu cái gì đó mà ăn đi. Chỗ lương thực này là của bọn tao.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Người đánh xe nghe thấy vậy cũng đành phải lên tiếng nói lại với Viktor.'
			},
			{
				class: 'villager',
				name: [ 'Người đánh xe' ],
				content: 'Thưa ngài, chỗ lương thực này là của chúng tôi chuẩn bị dành cho 6 người mà...'
			},
			{
				class: 'villager',
				name: [ 'Viktor' ],
				content: 'Hả? Ngươi nói lại cho ta xem nào?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi mau đứng dậy, đưa tay phải đặt lên vai của người đánh xe để ám chỉ rằng đừng nói thêm gì. Rồi tôi bước xuống xe tiến đến chỗ cây táo, ngước nhìn lên cây và dùng『Appraisal』để kiểm tra quả nào đang ở trạng thái tốt nhất. Nếu mọi người mà nhìn tôi lúc này thì chắc nghĩ tôi trông cứ như đứa ất ơ nào đó nhìn chằm chằm vào đồ ăn treo trên cây mà không thể với tới được vậy. Cô gái tóc vàng từ nhóm mạo hiểm giả phía trên chứng kiến việc vừa xảy ra giữa tôi và Viktor thì tiến đến tôi với 2 cái bánh mì trên tay.'
			},
			{
				class: 'villager',
				name: [ 'Cô gái' ],
				content: 'Bạn gì ơi. Mình thấy bạn có vẻ đang gặp chút rắc rối nên mình có mang theo chút đồ ăn cho bạn.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mặc kệ lời cô gái vừa nói, tôi tìm được vài quả táo đang ở trạng thái tốt liền cúi người nhặt một hòn đá nhỏ gần đó ném thẳng vào cuống quả táo. Quả táo rơi thẳng vào lòng bàn tay trái tôi, rồi tôi lại nhặt một hòn đá nhỏ khác lên để ném đồng thời cũng phản hồi cô gái.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đừng có dính dáng tới tôi nếu không muốn gặp rắc rối.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Nói xong tôi lại ném đá để lấy thêm mấy quả táo nữa. Rồi tôi ngồi tựa lưng vào cây ngược hướng đoàn xe nhìn ra mặt hồ để thưởng thức các quả táo vừa hái. Cô gái sau khi nghe tôi nói thì không nói thêm gì mà quay về với nhóm của cô với 2 cái bánh mì trên tay.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khi cả đoàn xe đã nghỉ trưa xong thì lại lên đường cho đến khi trời tối sầm. Cả đoàn xe quyết định sẽ dựng lều qua đêm trên thảo nguyên. Và đến bữa tối tôi biết mình không thể ăn cùng hội Viktor nên tôi đã tự rời đi ngồi ăn ở chỗ khác. Viktor thấy vậy liền cười lên.'
			},
			{
				class: 'villager',
				name: [ 'Viktor' ],
				content: 'Ngươi cũng biết thân biết phận không như trưa nay nhỉ? Hahaha.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Dù sao tôi cũng chả muốn ăn cùng với hội Viktor nên điều này lại tốt cho tôi. Tôi ngồi ở một góc tối, lấy ra『Bánh mì kẹp trứng』đã làm từ tối hôm trước ăn một mình. Buổi trưa tôi đã không lấy ra ăn vì tôi không muốn ai nhìn thấy việc sử dụng Inventory. Sau khi mọi người đã ăn uống no nê thì nhóm bắt đầu phân chia ca gác và tất nhiên tôi đã bị bắt gác đến tận sáng hôm sau luôn.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Tôi bị bắt gác đến tận bình minh. Tại sao vậy?'
			},
			{
				class: 'villager',
				name: [ 'Viktor' ],
				content: 'Hả? Bọn tao phải giữ sức để nếu có nguy hiểm còn bảo vệ được đoàn xe chứ? Mày thì làm được gì? Mỗi gác như này mà không làm được thì mày đúng là vô dụng!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi không nói thêm gì và ngồi gác ở cuối đoàn xe. Ở trên đoàn cũng có người đang gác và anh bạn đó cũng lên tiếng hỏi tôi có ổn không. Và tôi chỉ đơn giản là không đáp lại gì và giơ ngón tay cái lên. Anh bạn đó thấy vậy không nói gì thêm.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Bình minh lên và đoàn xe lại tiếp tục di chuyển. Tôi mắt nhắm mắt mở cố ngồi thẳng người nhưng không thể. Viktor thấy thế thì lại gần, vỗ vào vai tôi và dùng giọng mỉa mai nói.'
			},
			{
				class: 'villager',
				name: [ 'Viktor' ],
				content: 'Tối qua bọn tao ngủ ngon lắm. Cảm ơn “bạn” nha. '
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: '“Bạn” à? Không biết liệu mình có thể đủ tin tưởng một ai để có thể gọi là “bạn” không nhỉ? Và rồi tôi đã chìm vào giấc ngủ trong khi đang suy ngẫm về thứ được gọi là “bạn”. Một giọng nói vang lên trong đầu tôi, ai đó đang gọi tên tôi. Rồi giọng nói lớn dần khiến tôi phải mở mắt ra.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya! Shuuya! Dậy đi nào. Bọn mình nghỉ ngơi đủ rồi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hóa ra là Hyouka gọi mình dậy, Party mình đang trong nhiệm vụ nhỉ? Giấc mơ vừa rồi thật là chân thực làm sao...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Xin lỗi nha. Ngoài này thoải mái quá nên mình lỡ chìm quá sâu haha. Được rồi các cậu, chuẩn bị săn Slime nào.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka', 'Kowashi', 'Asahi' ],
				content: 'Đã rõ (nya)!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Gửi đến tôi trong giấc mơ. Nếu giấc mơ đó là hiện thực thì tôi mong Shuuya ở thế giới đó sẽ có được sự công nhận xứng đáng và nhất là có được một người đáng tin cậy để có thể gọi là “bạn”.'
			},
		]
	},
	{
		chapter: 10,
		title: 'Nhiệm vụ đầu tiên (1)',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Party『Log Horizon』của tôi đang đứng ngơ ngác trước sáu bảng lớn treo trên tường được đính chằng chịt những tờ nhiệm vụ. Mỗi bảng đại diện cho từng hạng và nhiệm vụ đều được phân chia hợp lí theo khả năng của hạng đó. Tỉ lệ nhầm lẫn khi phân chia xảy ra là rất hiếm. Bảng phía xa quầy tiếp tân nhất là dành cho hạng Iron và gần quầy nhất là dành cho hạng Mythril. Bọn tôi tiến tới bảng hạng Iron, liếc đi liếc lại tìm nhiệm vụ thích hợp cho bản thân.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Được rồi, mình sẽ lấy nhiệm vụ săn Horned Rabbit. Yêu cầu săn ít nhất 3 con là hoàn thành nhiệm vụ. Phần thưởng là 5 xu đồng. Thêm nữa ở đây ghi có thể bán 3 Crystal của chúng cho 1 xu đồng.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Còn mình thì chọn nhiệm vụ diệt Slime nya. Yêu cầu diệt ít nhất 5 con để hoàn thành nhiệm vụ nya. Phần thưởng là 5 xu đồng nya. Ở đây cũng nói bán 5 Crystal được 1 xu đồng nya.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình lấy nhiệm vụ giống Asahi. Có nhiều nhiệm vụ lặp đính trên bảng thật. Shuuya, cậu chọn nhiệm vụ nào?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À, mình chọn thu thập Heal Herb. Yêu cầu thu thập ít nhất 10 cây là xong nhiệm vụ. Phần thưởng là 5 xu đồng. Đem bán 10 cây sẽ được 1 xu đồng.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi ngước lên nhìn đám bạn sau khi đọc tờ nhiệm vụ thì thấy đầu họ đang hơi cúi xuống trông cứ như vừa làm gì có lỗi vậy. Tôi đang rất bối rối, tự nhiên bầu không khí lại thành ra như này, thật khó xử.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ờm... Các cậu? Có chuyện gì à? Sao tự nhiên các cậu xuống sắc thế này?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cậu không chọn nhiệm vụ đi săn cùng bọn mình vì đang giận lúc hồi sáng à? Mình xin lỗi, chắc bọn mình đùa hơi quá trớn rồi.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi', 'Hyouka' ],
				content: 'Xin lỗi cậu (nya)...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ngày hôm nay thật là lạ quá. Họ khiến tôi bối rối hơi nhiều trong sáng nay rồi đấy, đến nỗi mà tôi phải thốt lên.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Dừng lại một chút để mình suy nghĩ cái. Ngày hôm nay các cậu quay mình mấy vòng rồi đấy.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi đang nghĩ lại xem hồi sáng đã có chuyện gì... Chắc là lúc ở trước cửa rồi. Trời, làm họ hiểu lầm hết rồi. Lúc đó tôi chỉ bối rối khi họ nói vậy chứ tôi không có lí do gì để giận cả. Ngược lại tôi còn thấy vui khi họ quan tâm tới tôi đấy chứ. Giờ cần phải giải thích để phá tan bầu không khí này mới được. Tôi vỗ tay để họ chú ý đến tôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Được rồi. Về hồi sáng trước cửa nhà mình thì mình không có giận, chỉ là mình bất ngờ và bối rối thôi. Thế nên là các cậu đừng bận tâm về vấn đề đó nữa nha?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nếu cậu đã nói vậy... Thế thì sao cậu không chọn nhiệm vụ đi săn cùng bọn mình vậy?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi nở nụ cười, đưa tay trái lên đầu và giơ tờ nhiệm vụ tôi đang cầm bên tay phải lên.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Chỉ là khởi đầu mình muốn làm nhiệm vụ gì đó nhẹ nhàng đôi chút ý mà.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cả đám đã ngỡ ngàng trước câu trả lời đơn giản của tôi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Vậy à...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Thì ra là vậy nya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Nụ cười vừa nãy của tôi thật gượng gạo. Không biết đã bao lần tôi sử dụng nó như một chiếc mặt nạ rồi. Sự thật là tôi chưa từng xuống tay với sinh vật sống nào trừ các con côn trùng làm phiền tôi. Có vẻ trong thế giới này, đó là việc hết sức bình thường và hiển nhiên. Và sẽ đến một lúc nào đó tôi cũng sẽ phải như vậy vì nhiều lí do khác nhau phải ép buộc tôi làm vậy.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya, chỉ mỗi thế thôi nhỉ?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka đang nhìn chằm chằm vào tôi. Dường như cô ấy đã nhận ra gì đó. Tôi biết Hyouka có trực giác nhạy bén nhưng tôi không nghĩ mình dễ bị đọc vị như vậy. Tôi đành đánh trống lảng để né câu nói của Hyouka.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À mà chúng ta đã chọn được nhiệm vụ rồi thì đem đến cho chị Maki xác nhận vào thẻ đi nhỉ?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Cậu nói phải.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka không còn hỏi thêm gì, chắc linh cảm là mình đã nhầm. Cả Party sau đó đến bên chỗ chị Maki để xác nhận nhiệm vụ vào thẻ và hỏi thêm một vài thông tin cần thiết về nhiệm vụ. Rồi cả nhóm bước ra khỏi Guild, đích đến là thảo nguyên gần cánh rừng nên Party quyết định ra thị trấn từ cổng Tây Bắc. Bóng dáng của một người bí ẩn lướt nhanh qua Party của tôi. Tôi bất giác quay đầu lại nhìn, người bí ẩn đó đang mặc áo choàng dài có mũ đang đội màu lục dần biến mất sau cánh cửa của Guild. Tôi thẫn thờ đứng im nhìn cánh cửa đóng lại, điều gì đó mách bảo tôi thân thế của người bí ẩn đó không bình thường. Đám bạn của tôi thấy vậy liền đứng lại gọi nên tôi không bận tâm nữa mà tiếp tục di chuyển đến cổng Tây Bắc.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khi ra khỏi thị trấn, khung cảnh hiện ra trước mắt chúng tôi trông thật là tự do. Thảo nguyên thì xanh tươi bạt ngàn. Còn bầu trời thật trong xanh với những đám mây trôi nhè nhẹ. Chúng tôi đứng một lúc, cảm nhận cơn gió mát thổi từ ngoài biển vào tận gần đến cánh rừng. Từng loại cây cỏ hoa lá nhẹ nhàng đung đưa theo gió trên mặt đất. Đôi chỗ có những tảng đá to nhỏ nhấp nhổm nằm trên thảo nguyên. Và cũng có vài cái cây trơ vơ một mình trên cánh đồng, trông cứ như là cái ô lớn dành cho những ai mệt mỏi có thể dừng chân lại nghỉ ngơi vậy. Cảm giác này thật khiến tôi phải thốt lên.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thật là sáng khoải đó mà.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi', 'Asahi', 'Hyouka' ],
				content: ' Phải ha (nya).'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mọi người gật đầu đồng ý quan điểm với tôi và rồi bọn tôi cũng bắt tay vào làm nhiệm vụ.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Được rồi, như đã bàn trên đường thì mọi người sẽ hỗ trợ mình làm nhiệm vụ đầu tiên nhỉ?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Đúng rồi nya. Sau đó sẽ đến nhiệm vụ của mình và Hyouka nya. Và cuối cùng là Shuuya nya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Theo như chị Maki đã nói thì bọn tôi có thể hỗ trợ nhau để hoàn thành nhiệm vụ nhưng chỉ ở mức vừa phải. Chị có lí giải là nếu hỗ trợ quá mức thì kinh nghiệm chiến đấu của người nhận nhiệm vụ sẽ giảm. Đồng thời để hoàn thành nhiệm vụ săn thì người nhận nhiệm vụ sẽ phải là người kết liễu cuối cùng nếu đó không phải là nhiệm vụ yêu cầu Party. Lí do là vì Guild sẽ kiểm tra lịch sử ma thú đã săn trong thẻ để xem có phải đúng người đó hoàn thành nhiệm vụ hay không.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Vì buổi sáng đã xảy ra nhiều thứ nên giờ chỉ kịp hoàn thành nhiệm vụ của Kowashi. Trưa chúng ta sẽ ăn uống và nghỉ ngơi. Rồi chiều sẽ hoàn thành nốt chỗ nhiệm vụ còn lại.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Xin lỗi mọi người nya. Vì mình sáng nay nên mọi người bị tốn thời gian nya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Đôi tai của Asahi cụp xuống và đuôi không còn ngoe nguẩy, đó là biểu hiện của cô bạn khi buồn hoặc hối lỗi. Đối với tôi và Hyouka thì khó mà khiến Asahi phấn chấn lên dễ dàng được nhưng đối với người còn lại thì...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Asahi, cậu cũng đâu có cố ý đâu. Hay như này đi, cậu hãy giúp mình tìm hố của Horned Rabbit được không? Chỗ này cỏ hơi dày nên mình khó mà để ý được. Mình tin cậu sẽ tìm được nhanh chóng thôi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi nghe Kowashi nói vậy liền tươi tỉnh hẳn, đôi tai dựng đứng và đuôi lại ngoe nguẩy.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Được rồi, mình sẽ cố hết sức để tìm ra hố một cách nhanh chóng nya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi nói xong liền phóng đi tìm luôn. Cả Hyouka và tôi đều giơ ngón cái của tay phải hướng về phía Kowashi, tất nhiên là cậu ta không hiểu được ý của bọn tôi. Sau một vài phút cả Party đi tìm hố thì Asahi đã tìm ra được một chỗ.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Tuyệt vời thật đấy Asahi. Cậu siêu thật.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Hehe, xoa đầu và khen mình tiếp đi nya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Có vẻ Asahi đã quen với việc Kowashi xoa đầu rồi nên có thể coi đây là việc thường ngày. Dù sao thì thấy “bộ đôi rắc rối” thân nhau cũng tốt. Tôi cũng muốn xem tiếp vở kịch này lắm nhưng mà nhiệm vụ cần hoàn thành.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Kowashi, bắt lấy hòn đá nhỏ này mà ném vào hố dụ nó ra đi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Rồi, cảm ơn nhiều. Mọi người hãy tránh xa ra nha. Cẩn thận Horned Rabbit đổi mục tiêu tấn công các cậu đấy.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Kowashi nói xong mọi người liền lùi lại, còn cậu ta đứng cách hố một khoảng rồi ném hòn đá đó vào. Một lúc sau có một cái đầu 	nhô lên, Horned Rabbit nhìn chằm chằm vào Kowashi một lúc rồi lao lên như tên bắn. Cũng may Kowashi đã cản được nhờ tấm khiên nên cậu không bị thương. Nhưng phải công nhận lực bật nhảy của Horned Rabbit đúng là rất khỏe đến nỗi Kowashi còn tí thì bị ngã sau khi đỡ.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Tê tay thật. May mà mình có cha Shuuya dạy chiến đấu rồi không thì không đỡ nổi mất. Có lẽ mình đã bất cẩn rồi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Horned Rabbit giống với loài thỏ ở thế giới trước, chỉ khác là trên đầu nó có một cái sừng nhỏ bằng một đốt ngón tay cái và có khả năng dùng Skill. Ở vùng của tôi thì nó có bộ lông nâu nhạt, đôi mắt đen óng, đuôi xù lông như cục bông và đôi tai dài che được cả mắt nó. Loài này khá là thù địch, chỉ cần có động vật hay con người ở trước mặt đều sẽ tấn công. Mà phương thức tấn công của Horned Rabbit là dùng Skill『Jump Boost』để tăng sức bật nhảy húc đầu vào đối thủ. Tuy sừng của chúng ngắn nhưng nếu đâm trúng những chỗ hiểm cũng đủ để khiến đối thủ chịu thiệt thòi lớn. Hơn thế nữa phần sọ của Horned Rabbit khá cứng nên sau mỗi lần húc chúng sẽ không bị choáng, thậm chí khi chúng chạm được mặt đất sẽ ngay lập tức tấn công tiếp. Nếu mà đánh cả bầy Horned Rabbit thì khả năng thua là rất cao trừ khi phòng thủ của bạn cực tốt. Theo lời của chị Maki nói về Horned Rabbit là như vậy.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau một hồi quan sát Kowashi thì tôi đã phát hiện ra điểm yếu của Horned Rabbit, tôi đã hét lớn.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Kowashi! Đừng để chạm đất!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Kowashi liền hiểu ý của tôi ngay lập tức. Khi Horned Rabbit tấn công, cậu đã hướng cái khiên chéo lên đẩy nó bay lên. Giờ thì ở trên không nó không thể làm gì được nữa, Kowashi cầm chắc cái chùy ở tay phải vung lên kết liễu chỉ trong một phát. Với khả năng hỗ trợ thì tôi có thể điều khiển gió để hất tung Horned Rabbit lên hộ nhưng điều đó sẽ khiến Kowashi thiếu hụt khả năng mất. Cho gợi ý thế này là tốt nhất.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Kowashi lấy một con dao nhỏ, rạch phần ngực ra để lấy Crystal.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cuối cùng cũng được... Hết cả hơi... Không ngờ chiến đấu với người và ma thú lại khác biệt đến thế.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cứ để con đó mình cầm hộ cho. Còn 2 con nữa thôi là hoàn thành nhiệm vụ rồi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Phải rồi... Mình quên mất nhiệm vụ yêu cầu săn 3 con. Trời ạ.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Để mình tìm hố giúp cho, cậu cứ nghỉ ngơi chút đi nya.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình với Shuuya đi chuẩn bị đồ ăn trưa ở chỗ bóng cây đằng kia. Cố găng lên.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Hầy... Cảm ơn nhiều. Được rồi, tiếp tục thôi nào!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khi săn được thêm 5 con nữa thì Kowashi đã thấm mệt. Cậu cùng Asahi đang cầm chỗ vừa săn tới nơi bóng cây tôi với Hyouka dọn để ăn trưa.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nhiệm vụ hoàn thành. Mình chưa bao giờ xuống sức như này cả.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Chắc cậu chỉ đang đói thôi nya. Tí ăn đồ do Shuuya làm là lại khỏe ngay mà nya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Asahi, cậu có thể đưa mình chỗ Horned Rabbit cậu đang cầm được không?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Được thôi nya. Nè cầm lấy... NYA! ĐÂU MẤT RỒI NYA? CẬU VỪA LÀM GÌ VẬY NYA?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Bình tĩnh nào Asahi. Mình cho vào Inventory để cho gọn và giữ cho thịt vẫn tươi ý mà.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Kowashi và Asahi mặt đơ ra không tin vào việc tôi có thể dùng Inventory.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Thì ra là vậy... Mình chả hiểu gì hết cả! Cậu có biết số người tồn tại có thể dùng Inventory chỉ đếm được trên đầu ngón tay không?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Phải đó nya. Và cậu lại là một trong số đó nya... Nè Hyouka, chắc cậu đã biết trước rồi nhỉ nya?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Ừm... Từ vài phút trước đấy khi Shuuya cất con Horned Rabbit, rồi lấy ra thảm trải để ngồi, hai giỏ đồ ăn và bốn túi đựng nước.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Hẳn nào, mình tự hỏi Shuuya lấy mấy thứ này từ đâu ra... Giờ thì biết rồi. Cậu còn có thể làm gì để khiến bọn mình ngạc nhiên nữa nhỉ?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mọi người đều quay ra nhìn tôi. Có vẻ tôi đã trở thành tâm điểm mất rồi. Thôi thì mọi người đang có tâm trạng vui nên là vào tiết mục chính thôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Được rồi, hãy nhìn vào hai giỏ đồ ăn đây. Trưa nay chúng ta sẽ ăn『Bánh mì kẹp trứng』.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Nguyên liệu gồm bánh mì, trứng gà, cà chua và rau xà lách. Đầu tiên bóc rau xà lách ra, sau đó rửa sạch và để ráo nước. Cà chua thì cũng rửa sạch rồi thái lát thành miếng nhỏ. Trứng đập vào bát, cho muối nếu ăn đậm hoặc cho đường nếu ăn ngọt, khuấy đều rồi tráng trứng cuộn. Cuối cùng bánh mì rạch một đoạn ở giữa và cho trứng, cà chua và xà lách vào phân chia đều nhau là được.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À bên phải là mình làm vị ngọt còn bên trái là làm đậm. Mình vẫn chưa biết khẩu vị của các cậu thế nào nên đành làm hai loại.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nhìn trông đơn giản vậy mà sao không có ai làm nhỉ. Thôi mình đói rồi, mời các cậu ăn... Ồ! Ngon thật.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Ngon quá đi nya.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Bên trong trứng vẫn mềm nên ăn cùng với bánh mì sẽ dễ ăn hơn. Có cả cà chua kèm theo nên bánh mì ăn sẽ đỡ khô. Còn xà lách làm nhạt đi vị trong miệng để lúc sau ăn lại thấy ngon miệng, không bị dễ chán.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka lại trở thành nhà phê bình ẩm thực nữa rồi. Mà tôi thấy vui khi họ thích đồ ăn tôi làm. Đồng thời tôi cũng biết được một chút khẩu vị của mọi người. “Bộ đôi” có vẻ là thích ăn đậm còn Hyouka giống mình thích ăn đồ hơi ngọt. Được rồi, phải cố gắng làm thêm nhiều món hơn nữa mới được.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nè, ai ăn hộ mình xà lách được không? Mình không thích ăn... Ủa nó đâu rồi?'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Chú diều hâu vụt bay qua cắp rau xà lách của Kowashi và đem lên cây ăn. Còn Shuuya nằm dưới tán cây, nhìn lên bầu trời và cậu đã nhắm mắt ngủ từ lúc nào không hay. Liệu cậu có thể đang mơ gì nhỉ?'
			}
		]
	},
	{
		chapter: 9,
		title: 'Guild mạo hiểm giả',
		dialogue: [
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Ái chà, nay dậy sớm thế Shu? Đang làm bữa trưa đó à?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Chào buổi sáng mẹ. Hôm qua con có nói nay đi đăng ký làm mạo hiểm giả rồi mà?'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Phải ha.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi và nhóm tôi đã quyết định sau khi nhận được chức nghiệp sẽ đăng ký làm mạo hiểm giả cùng nhau luôn. Vừa đúng lúc tôi làm xong đồ ăn trưa thì nhóm tôi cũng đã đến trước nhà tôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thôi con đi đây, nhóm con gọi con rồi. À mà con có làm bữa sáng cho mẹ rồi đó. Con chào mẹ.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Vậy mẹ cảm ơn nha. Đi đường an toàn nha Shu.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Nhóm tôi đang đợi tôi trước cửa và như thường lệ "bộ đôi rắc rối" vẫn to mồm như thường.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình đây. Các cậu có thể nhỏ mồm chút được không?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Xin lỗi mà. Nhìn tấm khiên và cái chùy gai của mình nè. Nó từ chức nghiệp『Paladin』.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Của mình thì có cây kiếm từ『Swordsman』nè nya. Nhìn trông có vẻ nặng nhưng khi cầm nó thì thực sự nhẹ nya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đồ của các cậu trông ổn đó. Còn Hyouka thì sao?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Của mình thì có cây cung từ『Archer』. Thay vì dùng tên thường để bắn thì mình có thể truyền Mana vào cung để hình thành tên để bắn.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cây cung hay đó. Nhưng mỗi tội nó khá tốn Mana nhỉ?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Đúng vậy. Thế còn vũ khí của cậu?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À... Vì là『Chef』nên mình chỉ có dụng cụ nấu ăn thôi haha...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Nhìn vẻ mặt của họ thì chắc họ đang tỏ vẻ thương hại tôi. Có lẽ nên nói gì đó để họ bớt lo lắng lại.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình vẫn sẽ ổn thôi. Nhìn này, mình có kiếm của cha đưa và con dao bếp mà.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nếu vậy thì khi cậu gặp nguy hiểm mình sẽ dùng tấm khiên này để bảo vệ cậu.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cả mình nữa nya.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Còn mình sẽ xiên bất cứ thứ gì làm hại đến Shuuya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka đáng sợ quá... Nhưng mà tôi đã rất vui khi mọi người nói vậy.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À... ừm... Cảm ơn mọi người. Thế giờ chúng ta đến... Chú diều hâu lông nửa trắng nửa lam kìa.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'A Shuuya! Đừng nói ra chứ!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi đang cố kiềm chế bản năng của bản thân nhưng có vẻ không thể rồi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Chết lỗi mình. Đuổi theo Asahi mau.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Bằng cách nào đó cả nhóm tôi cũng đến Guild mạo hiểm giả. Guild to thật mặc dù nơi đây chỉ là thị trấn. Nhìn qua kiến trúc thì vật liệu chủ yếu được làm từ gỗ. Khi vào bên trong mọi thứ trông thật nhộn nhịp. Thậm chí ở đây có cả quầy bán đồ ăn nữa, chắc đó là lí do Guild nó mới to như vậy. Có rất nhiều người với phong cách ăn mặc và chủng loại khác nhau.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Guild trông tuyệt thật đấy.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Phải đó nya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Rồi tôi bắt đầu nghe thấy vài tiếng thì thầm về việc một cậu bé là đầu bếp đã đánh bại nhóc quý tộc Fig. Tôi tạm thời cứ lơ đi để tránh gặp rắc rối.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'A, có quầy trống kìa. Mọi người mau qua đó thôi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Chúng tôi đến bên quầy đó để đăng ký. Và trước mắt chúng tôi là chị tiếp tân tóc dài vàng trông rất xinh đẹp và còn rất trẻ nữa. Chị thấy chúng tôi liền nở nụ cười rất tươi. Đúng là tiếp tân chuyên nghiệp có khác.'
			},
			{
				class: 'Maki',
				name: [ 'tiếp tân' ],
				content: 'Chào mừng các em đến với Guild mạo hiểm giả chi nhánh『Dawn Horizon』. Có vẻ như các em lần đầu đến đây nhỉ?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Sao chị biết hay vậy nya?'
			},
			{
				class: 'Maki',
				name: [ 'tiếp tân' ],
				content: 'làm ở đây cũng được một khoảng thời gian rồi và khả năng nhớ của chị khá tốt đó.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Chúng tôi phải thừa nhận chị dễ gần thật và nụ cười của chị thật khiến người khác cảm thấy thoải mái.'
			},
			{
				class: 'Maki',
				name: [ 'tiếp tân' ],
				content: 'Vậy chị xin giới thiệu chị tên là Maki. Các em muốn đăng ký làm mạo hiểm giả nhỉ?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya', 'Hyouka', 'Kowashi', 'Asahi' ],
				content: 'Đúng rồi ạ (nya).'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Nếu vậy thì mời các em lần lượt chạm vào『Quả cầu đăng ký』. Nó sẽ hiện thông tin Status của các em và truyền thông tin vào thẻ mạo hiểm giả.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Lần lượt mỗi người trong nhóm tôi lên làm và rồi khi đến lượt tôi...'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Xem nào, Shuuya, chức nghiệp『Chef』... Khoan đã đầu bếp ư?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng? Có vấn đề gì không ạ?'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'À ừm... Em có chắc về việc làm mạo hiểm giả không? Ý chị là chức nghiệp không có kèm kĩ năng chiến đấu khá là bất lợi cho em. Và khả năng gặp nguy hiểm sẽ còn cao hơn bình thường. Tất nhiên em vẫn có thể đăng ký, chị chỉ muốn em cân nhắc lại thôi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Làm chị Maki lo cho mình mất rồi. Mà nói về chức nghiệp này yếu cũng không sai. Vài trường hợp xấu có thể khiến đồng đội gặp rắc rối và nguy hiểm vì không thể tự đảm bảo an toàn. Nhưng tôi tin kĩ năng của mình sẽ bù vào thiếu sót đó. Trước khi tôi kịp mở miệng thì Kowashi đã lên tiếng.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'không phải lo cho đầu bếp của nhóm em đâu. Cậu ta khá lắm.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Đúng đó nya. Cậu ta còn đánh thắng cả Fig nữa mà nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Đúng đó.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'A!!! Bộ đôi ngốc này! Sao cậu lại nói ra chứ?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi', 'Asahi' ],
				content: 'Hể (nya)?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Không gian trong Guild đột nhiên im lặng sau khi nghe bộ đôi nói vậy. Trời ạ, sẽ rắc rối lắm đây. Một hệ thống được tạo ra sẽ gồm các thành phần có vị trí nhất định và nếu các thành phần đó đảo vị trí cho nhau sẽ loạn hết lên. Tương tự như chức nghiệp, không thể nào『Chef』lại có thể đánh bại『Magic Swordsman』được. Tôi cứ ngỡ về sau tôi sẽ gặp rắc rối lớn nhưng đột nhiên cả Guild ồ lên.'
			},
			{
				class: 'villager',
				name: [ 'Mạo hiểm giả' ],
				content: 'Nhìn kìa, kia là cậu đầu bếp đã thách đấu quý tộc đó.'
			},
			{
				class: 'villager',
				name: [ 'Mạo hiểm giả' ],
				content: 'Phải đó, thậm chí cậu ta còn đánh thắng nữa chứ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cả Guild bắt đầu bàn tán về tôi sôi động. Tôi cũng chả biết phải nói gì trong tình cảnh này. Còn chị Maki đột nhiên cúi người xuống khiến tôi khó xử.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'thành thật xin lỗi đã đánh giá em hơi sớm. Là một tiếp tân chị không nên nói thế. Thực sự xin lỗi em nhiều.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'A... Chị không cần xin lỗi đâu, em không để tâm đâu, xin chị đừng cúi nữa ạ.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Nhưng...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Khó xử quá, chị Maki đúng là nghiêm túc trong công việc mà. Làm sao đây...'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'ơi, Shuuya thực sự sẽ không để tâm đến mấy chuyện như này đâu. Chị đừng cúi nữa có được không?'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Nếu các em đã nói vậy, chị xin phép.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cảm ơn cậu nhiều nha, Hyouka.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi thực sự biết ơn Hyouka đã giúp tôi lần này nên tôi đã lỡ tay xoa đầu nhỏ.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'A! Xin lỗi nha, tự nhiên mình lại muốn xoa đầu cậu...'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Không có sao...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mặt của Hyouka trông hơi đỏ, còn tai thì vẫy lên xuống. Chị Maki cũng đã nhận ra gì đó và chỉ cười thầm.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Vậy sau đây để chị giải thích về hạng cũng như nhiệm vụ, luật, ...'
			},
			{
				class: 'think',
				name: [ 'Maki' ],
				content: 'Về hạng mạo hiểm giả được chia làm 6 loại, thấp nhất là Iron < Bronze < Silver < Gold < Platinum < Mythril là cao nhất.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Để có thể thăng hạng phải hoàn thành 100 nhiệm vụ cùng cấp hoặc hơn cấp. Sau đó số lượng yêu cầu hoàn thành nhiệm vụ sẽ tăng thêm 100 mỗi lần thăng hạng. Đồng thời cũng phải trải qua 1 bài kiểm tra đánh giá của Guild để có thể chính thức thăng hạng. Đặc biệt nếu có thành tích xuất sắc với được tín cử từ hạng Platinum hoặc Mythril hoặc từ những người có quyền sẽ được xem xét thăng hạng, bỏ qua các yêu cầu cần.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Sau một khoảng thời gian không làm nhiệm vụ sẽ bị tụt hạng, lần lượt là 1 tháng < 3 tháng < 6 tháng < 9 tháng < 1 năm. Đối với Iron nếu lâu không làm sẽ phải nộp phí là 10 xu bạc, còn đối với Mythril sẽ không bị tụt khi lâu không làm nhiệm vụ.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Ở vài hạng nhất định sẽ có quyền lợi đặc biệt như hạng Platinum và Mythril sẽ được trả phí sửa chữa đồ và phí chữa trị sau khi hoàn thành nhiệm vụ. Còn riêng hạng Mythril sẽ có thêm quyền lợi là hưởng lương hưu 3 xu vàng mỗi tháng khi người hạng đó chính thức nộp đơn nghỉ không hoạt động làm mạo hiểm giả nữa. Tất nhiên họ vẫn có thể rút đơn và hoạt động tiếp nhưng lương hưu sẽ tạm dừng, sau đó vẫn có thể nộp lại đơn. Đổi lại họ sẽ sẽ bị buộc triệu tập đến chiến trường khi nó xảy ra nếu sức khỏe còn tốt.'
			},
			{
				class: 'think',
				name: [ 'Maki' ],
				content: 'Về nhiệm vụ sẽ được phân loại để phù hợp với thứ hạng.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Có thể nhận nhiệm vụ cao hơn 1 hạng nhưng không thể nhận nhiệm vụ thấp hạng. Có thể làm nhiệm vụ cao hạng hơn nếu được mời tham gia vào Party nhưng phải cân nhắc nếu quá chênh lệch trình độ.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Sau khi hoàn thành nhiệm vụ sẽ được nhận tiền thưởng ghi trong yêu cầu.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Tùy vào nhiệm vụ sẽ có gia hạn thời gian hoàn thành hoặc không.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Đối với nhiệm vụ yêu cầu từ người khác sẽ cần chữ kí của họ để xác nhận hoàn thành nhiệm vụ.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Nếu nhiệm vụ bị thất bại sẽ bị trừ 1 điểm tiến trình nhiệm vụ đã hoàn thành.'
			},
			{
				class: 'think',
				name: [ 'Maki' ],
				content: 'Về Party có thể tạo tạm thời hoặc lâu dài.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Không giới hạn số lượng thành viên trong Party.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Khi làm nhiệm vụ có yêu cầu Party sẽ được bên Guild thưởng thêm 5% tiền thưởng cho mỗi thành viên trong Party tham gia nhiệm vụ, trừ trưởng Party. Còn nhận nhiệm vụ không có yêu cầu Party sẽ không thưởng thêm.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Số tiền thưởng tự bên Party chia đều cho các thành viên.'
			},
			{
				class: 'think',
				name: [ 'Maki' ],
				content: 'Về các vi phạm.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Mất thẻ phạt 50 xu bạc để làm lại.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Dùng thẻ của người khác phạt 1 xu vàng và 1 tuần đình chỉ.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Giả mạo thẻ sẽ bị cấm vĩnh viễn làm mạo hiểm giả.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Các mạo hiểm giả gây gổ với nhau dẫn đến bạo lực bộc phát phạt 1 xu vàng và 1 tuần đình chỉ.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Khiến người khác bị liên lụy khi đang làm nhiệm vụ phạt 3 xu vàng và 1 tháng đình chỉ.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Bỏ rơi người yêu cầu trong nhiệm vụ hộ tống hoặc bỏ rơi thành viên Party trong tình thế nguy hiểm khi có thể cứu phạt 10 xu vàng, tụt 1 hạng và 3 tháng đình chỉ.'
			},
			{
				class: 'info',
				name: [ 'Maki' ],
				content: 'Sát hại người vô tội sẽ bị cấm vĩnh viễn làm mạo hiểm giả và bị xử theo luật của đất nước.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Và đó là tất cả những thông tin các em cần biết. Các em có câu hỏi gì không?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi và cả nhóm đang hơi bị đơ sau khi nghe một đống thông tin. Chị Maki nhiệt tình quá ha...'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'À nếu các em chưa nhớ được từng đó thông tin thì có thể đọc cuốn『Sổ tay mạo hiểm giả』này.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vậy cho em xin một cuốn. Tiện thể bọn em muốn tạo một Party lâu dài luôn.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Thế tên của Party sẽ là gì nào?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nó sẽ tên là『Log Horizon』'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Ủa mà tên có ý nghĩa gì vậy?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Nói đi nào Shuuya, sao lại đặt tên đó nya?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nào nào, đây là bí mật. Khi nào đến lúc mình sẽ tiết lộ ý nghĩa sau nha.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cả 3 người họ đều nhìn chằm chằm vào tôi. Và tôi càng khiến nó bí ẩn hơn.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Xong rồi, các em chỉ cần nhỏ máu vào thẻ nữa là xong thủ tục.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Có vẻ như thẻ được làm từ nguyên liệu dựa theo thứ hạng luôn.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Hừm... Liệu thẻ này có bị phá hủy hay thay đổi thông tin được không nhỉ?'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'Thẻ được phù phép『Unbreakable』rồi nên không hỏng được. Và thẻ được liên kết với linh hồn của người nhỏ máu nên thông tin không đổi được. Đồng thời chỉ những dụng cụ chuyên dụng của Guild mới có thể can thiệp được một phần thẻ.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ra là vậy. Công nghệ hay nha.'
			},
			{
				class: 'Maki',
				name: [ 'Maki' ],
				content: 'E hèm. Vậy thì xin chúc mừng các em đã hoàn thành đăng ký làm mạo hiểm giả. Giờ các em hãy qua bên phải và chọn lấy nhiệm vụ đầu tiên nào.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Và thế là『Log Horizon』đã bắt đầu nhiệm vụ đầu tiên. Và nhiệm vụ đó là...'
			}
		]
	},
	{
		chapter: 8.5,
		title: 'Lần đầu nấu ăn',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ngày hôm nay thật mệt mỏi, rất nhiều chuyện đã xảy ra. Hiện tại tôi đang 10 tuổi, cuối cùng tôi cũng có thể sử dụng『Inventory』và Skill tôi đã ẩn đi bấy lâu nay. Thế nên tối nay tôi sẽ nấu ăn sau một khoảng thời gian không nấu. Tiện thể hôm nay nhóm của tôi cũng qua ăn tối cùng.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Con có chắc không đó. Đây là lần đầu con nấu ăn mà. Hay để mẹ nấu còn con cứ ra chơi với bạn đi ha.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mẹ cứ tin con, con nhìn mẹ nấu ăn nhiều rồi mà. Mấy món đơn giản con làm được hết.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Hừm... Nếu thế thì để mẹ dọn bàn ăn.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mẹ dọn xong thì cứ ra phòng khách nghỉ ngơi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi lấy『Cooking Set』ra khỏi Inventory. Tôi cầm con dao đã chiến đấu với Fig lên tay, ngắm nhìn nó.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Con dao đó là lúc con chiến đấu với Fig nhỉ?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đúng rồi ạ. Và tất cả chỗ dụng cụ này đều từ chức nghiệp『Chef』của con.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Mẹ hiểu rồi. Vậy mẹ giao lại bếp cho con, đừng làm món gì có Debuff nha Shu.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng vâng.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khi mẹ tôi rời đi cũng là lúc bắt tay vào sơ chế. Nguyên liệu chỉ có thịt bò, trứng gà, cà rốt, khoai, bắp cải, ngô, hành tây. Cũng may ở thế giới này vẫn có mấy loại thực phẩm từ thế giới trước. Chỉ là động vật ở đây có hình dáng khác thôi. Sau một hồi suy nghĩ tôi đã nảy ra 2 món ăn là『Bắp cải xào trứng ngô』và『Bò hầm』. Trong quá trình nấu ăn tôi sẽ dùng『Wind mastery』. Đầu tiên là rửa sạch rau củ rồi dùng gió để làm khô. Sau đó gọt vỏ, thái, cắt rau củ. Riêng ngô thì tách hạt ra khỏi lõi. Trong khi đang tách hạt thì chú diều hâu bay đến đậu bên cửa sổ, tôi thấy vậy liền cho chú ăn một vài hạt ngô rồi chú bay đi. Tiếp theo tôi lấy nước vào hai nồi, một nồi luộc ngô để làm hạt mềm và một nồi luộc thịt để mấy thứ bám bẩn tách ra khỏi thịt, mục đích là làm sạch thịt. Bếp thì bằng đá dùng củi để đốt nên là tôi dùng gió để điều chỉnh lửa cho phù hợp với nhiệt cần dùng. Sau khi luộc xong tôi vớt ngô ra tạm cái đĩa còn thịt tôi đặt lên thớt và thái nó thành những khối vuông cho vừa vào miệng. Tôi rắc chút muối lên thịt để thịt đậm vị hơn. Nhận tiện thì thế giới này không có gia vị nào khác ngoài muối hoặc đó là tôi nghĩ thế. Tiếp theo tôi chưng nước đường để món hầm có màu nâu. Sau đó xào hành tây lên để món hầm có mùi thơm. Cuối cùng đập trứng vào bát và khuấy đều lên để tí cho vào món xào.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Công đoạn sơ chế đã xong. Giờ chính thức nấu ăn.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Về món hầm, tôi cho nước đường và hành tây vào nồi, đổ thêm lượng nước vừa đủ để nước hầm sền sệt, cho thêm muối và ít đường và đun lên. Sau khi nước đã sôi cho thịt, cà rốt và khoai vào hầm. Trong lúc đợi món hầm hoàn thiện thì tôi tranh thủ làm món xào. Cho mỡ lợn vào chảo, đổ chỗ rau bắp cải đã thái. Sau một lúc rau mềm ra thì đổ trứng và ngô vào, đảo đều và thế là xong. Cùng lúc đó món hầm cũng đã xong. Đã hoàn tất 2 món và giờ tôi sẽ đi gọi mọi người vào.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Con nấu xong rồi, mời mọi người vào ăn.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Để xem con ta lần đầu nấu ăn thế nào đây. Haha.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Mẹ có thể ngửi thấy mùi thơm từ trong bếp.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Thơm quá nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Làm mình đói quá rồi này.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Đồ ăn của Shuuya, mình phải ăn!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Có vẻ mọi người thực sự đói ha... Rồi mọi người tiến vào bàn ăn. Và đúng như tôi nghi ngờ, họ có vẻ đang đề phòng bởi ai cũng sẽ phải lo lắng khi là người thử món. Còn riêng Hyouka tôi không thể đọc được tâm trạng của nhỏ đang thế nào nữa. Hình như có vài bông tuyết đang lấp lánh quanh nhỏ thì phải? Dù sao thì mấy món này chắc lần đầu họ thấy nên có lẽ phải giới thiệu qua các món. Tôi cũng hơi lo lắng khi người khác thử món do mình làm.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Được rồi mọi người, món đầu tiên là『Bò hầm』. Món này gồm thịt bò, khoai, cà rốt và hành tây. Và chúng ta sẽ ăn cùng với bánh mì nhúng vào nước hầm.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi muốn ăn với cơm cơ nhưng có vẻ ở đây không ai biết cơm là gì. Hi vọng chỗ nào đó trong『Dainisekai』có tồn tại gạo hoặc một thứ tương tự như vậy.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Hừm... Mùi thì thơm thật nhưng màu lạ quá. Ăn chắc ổn nhỉ?'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Sẽ ổn thôi... em nghĩ vậy?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Ờ... Hai cậu nghĩ...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Kowashi chưa nói hết câu thì Hyouka đã cắt ngang.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Ngon tuyệt! Thịt, khoai, cà rốt rất mềm và được cắt rất vừa miệng. Ăn miếng nào thì tan chảy miếng đó. Còn bánh mì chấm vào nước hầm khiến nó không bị khô và khó ăn. Thêm nữa có hành trong món khiến việc ăn nhiều không bị ngán.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ế Hyouka? Nhỏ là ẩm thực gia à? Mà thật là ngại khi có người khen như vậy. Chắc nhỏ đói lắm ha. Mọi người sau đó cũng thử và...'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ta chưa bao giờ ăn một món nào ngon như vậy cả.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Đúng là ngon thật.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Ngon thật đó Shu! Khi con bảo mẹ làm mấy món đơn giản mẹ không nghĩ lại làm ra món ngon như vậy.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Đúng đó nya. Nhưng mà mình thấy món này hơi đậm nya.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Mẹ cũng nghĩ vậy, chắc lần sau con nên bớt ít muối lại.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Món đầu thành công, giờ đến món cuối cùng. Mọi thứ đều theo như kế hoạch của tôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vậy thì mọi người hãy thử món cuối của con đây『Bắp cải xào trứng ngô』. Món gồm các nguyên liệu có trong tên.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Hừm... Món này hơi nhạt đó con.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cậu quên cho muối rồi nya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Biết ngay mọi người sẽ nghĩ như vậy mà. Đúng là tôi đã không cho muối vào.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Không.... không thể nào...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cậu ổn chứ?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Thiên tài...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi', 'Asahi', 'Cha', 'Mẹ' ],
				content: 'Thiên tài? (Nya?)'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Có vẻ Hyouka đã nhận ra lí do tôi làm món rau nhạt. Cậu có giác quan nhạy bén thật đấy.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mọi người bảo món hầm đậm và món rau nhạt đúng không? Nhưng đó là khi mọi người ăn riêng thôi.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Nếu vậy ý con là...'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Đúng vậy. Thay vì ăn riêng chúng ta sẽ ăn cả hai cùng lúc.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Vậy là mọi người đã nhận ra ý đồ của tôi. Trung hòa vị giác là thứ tôi đang nói tới.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Ái chà! Con nói đúng. Ăn ngon hơn nhiều thật.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Đúng thật này. Ban đầu ăn món hầm đậm nhưng sau đó ăn thêm miếng rau vào cảm giác vị dịu đi hẳn. Đồng thời có vị ngọt từ ngô ngay sau đó nữa.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Con giỏi thật đấy Shu. Lần đầu nấu ăn lại nghĩ ra món ngon như vầy.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Tính ra cậu cũng nhan hiểm đó nya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mọi người quá khen dù đây là lần đầu mình nấu hihi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sự thật là ở kiếp trước tôi nấu ăn suốt nên quen rồi.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Thật mừng vì đã được tồn tại để ăn món này. Mình không còn gì luyến tiếc nữa.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Này, mình nghĩ nói thế là hơi quá rồi đó. Còn nhiều món ngon hơn mà.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Vậy cậu làm được món khác còn ngon hơn nữa?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ấy, lỡ miệng rồi... Đúng là có nhiều món khác nhưng...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À... thì... nếu mình nghĩ được ra món nào đó khác ha ha ha...'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Vậy mình sẽ là người đầu tiên thử nha?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka nhìn thẳng vào tôi, nhỏ trông có vẻ hào hứng. Mặc dù biểu cảm không đúng với hành động từ nhỏ nhưng mà trông đáng yêu thật. Và lại có bông tuyết lấp lánh xung quanh nhỏ nữa. Thú vị thật.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À ừm... được thôi nếu cậu không chê.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình mong chờ nó từ cậu đó, Shuuya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cảm giác được ai đó trông chờ thật là hạnh phúc. Nhưng tim mình vừa lỡ một nhịp thì phải... Lạ thật...'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Nhất con rồi nhá Shu.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Con trai ta giỏi thiệt, hahaha!'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Ối ối, sướng nha nya. Kowashi thấy đúng vậy không nya?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Hả? Mình mải ăn quá, mọi người đang nói gì vậy?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Đồ ngốc Kowashi nya!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Trời!!! Đừng trêu con nữa mọi người.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thật ấm áp khi được ngồi ăn cũng những người mình quen. Ở kiếp trước tôi cũng khó có được khung cảnh như hiện giờ.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Mình đang tò mò tại sao cậu lại ăn bằng bát và bằng hai cái que vậy?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ối, tôi quên mất thói quen cũ hồi trước. Tại tôi vui quá khi dùng được Inventory nên quên béng mất.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À thực ra đây được gọi là đôi đũa, có thể dùng cái này để gắp thức ăn. Bát đũa là từ『Cooking Set』của mình nên mình muốn thử dùng xem sao.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Trông nó khó cầm quá nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Thi thoảng trông Shuuya dị thật đấy.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Hế? Trông mình dị lắm à?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mọi người gật đầu. Tôi cũng đành chấp nhận vì nhận thức và thể xác tôi khác nhau hoàn toàn.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Rồi rồi. Ăn đi mọi người trước khi đồ ăn nguội hết.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Thế là đêm hôm đó mọi người đều nghĩ đến món ăn mà Shuuya nấu. Còn Hyouka lại nghĩ đến Shuuya đang nấu ăn...'
			}
		]
	},
	{
		chapter: 8,
		title: 'Cột mốc quan trọng (2)',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Fig nhìn về phía chúng tôi với vẻ mặt đầy tự hào khi nó có được chức nghiệp tốt.『Magic Swordsman』cho phép yểm Skill tạm thời lên vũ khí và dùng Skill từ vũ khí đó không tốn Mana. Tất nhiên lúc yểm có tốn Mana. Có thể thay đổi linh hoạt Skill yểm vào vũ khí. Tùy thuộc vào chất lượng vũ khí có thể chịu nổi Skill hay không, vũ khí sẽ vỡ vụn nếu không chịu được.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Không ngờ Fig có chức nghiệp tốt như vậy.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Làm sao đây nya.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Thật khó chịu.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nào nào bình tĩnh nào các cậu.'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: 'Người tiếp theo.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Có vẻ đến lượt mình rồi. Mình lên đây.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi bước lên bục, đặt tay lên quả cầu, nhắm mắt và cảm nhận... Không thấy gì cả. Ít nhất tôi cũng biết quả cầu chỉ ban cho những ai chưa có chức nghiệp. Thế nên tôi đành bịa ra vài câu nói.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Tiếng cắt thái nguyên liệu. Lửa lúc nhỏ lúc to. Mùi thơm khi chế biến.'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: 'Hừm... Thật lạ, quả cầu không hiện ra chức nghiệp...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mọi người xung quanh bắt đầu bàn tán nhau. Tôi bắt đầu lo lắng rồi nhớ ra tôi đang ẩn thông tin chức nghiệp của tôi. Tôi mở『Status』->『Jobs』.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: '※ == • == • == • ==『Shuuya <span style="color: grey">Tamada</span>』== • == • == • == ※\n[ Job ]\n\t『Chef』\n\t\t『Cooking』\n\t\t『???』\n\t\t『Slash』\n\t\t<span style="color: grey">『Absorb』</span>\n\t\t『Heat Resistance』\n\t\t『Cooking Set』'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi đã để hiện một vài thông tin rồi. Hi vọng quả cầu sẽ hiện chức nghiệp của tôi, không thì mọi thứ sẽ rất rắc rối.'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: 'A, quả cầu hiện rồi.『Chef』. Chức nghiệp của con là đầu bếp. Tiện thể thì tạm dừng một chút, ta kiểm tra quả cầu xem thế nào.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Nhẹ cả người, may quả cầu vẫn hiện. Tôi về chỗ ngồi, quay ra đám bạn tôi để xem họ phản ứng thế nào thì...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Ôi không...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cậu ổn chứ nya?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Đừng buồn nha.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Đây không phải là phản ứng tôi mong muốn.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ờm...? Mình vẫn ổn? Sao các cậu lạ thế?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cậu thật là lạc quan, Shuuya.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Đúng đó nya. Nếu là mình thì mình sẽ rất buồn đó nya.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Shuuya thật tuyệt vời.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Hừm... Quá khen rồi? '
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi hoàn toàn không hiểu gì hết cả...'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: 'Ta đã kiểm tra xong, buổi lẽ tiếp tục nào. Người tiếp theo.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tiếp theo là đến Hyouka, nhỏ có thể dùng băng kĩ nên không biết có thể có chức nghiệp『Mage』hay『Witch』không đây.'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: '『Archer』. Chức nghiệp của con là cung thủ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Không ngờ là đoán lệch hết luôn. Dù sao thì chức nghiệp này kết hợp băng kĩ cũng sẽ rất thú vị cho coi.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Yay. Mình sẽ bảo vệ cậu Shuuya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ờm ừm...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi vẫn không hiểu chuyện gì xảy ra...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tiếp theo đến lượt Asahi. Để xem nhỏ này có chức nghiệp gì nào'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: '『Swordsman』. Chức nghiệp của con là kiếm sĩ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ồ, chắc vì Asahi dùng kiếm giỏi đây mà. Có kĩ thuật dùng kiếm và khả năng của nhỏ thì sẽ như đang nhảy điệu múa kiếm vậy.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Đúng như mình mong muốn rồi các cậu nya. Đừng có buồn nha Shuuya, mình cũng sẽ bảo vệ cậu nya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Được thôi?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thật đấy? Bọn họ đang nói về chuyện gì vậy???'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: 'Người cuối cùng.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Đó là mình rồi. Mình lên đây.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Người cuối cùng là Kowashi à, không biết cậu ta sẽ nhận được gì đây. Quả cầu đột nhiên phát sáng, mọi người đều kinh ngạc trước sự việc vừa diễn ra.'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: 'Điều này... Thật hiếm gặp...『Paladin』. Chức nghiệp của con là vệ sĩ. Đồng thời con nhận được danh hiệu『The Savior』từ quả cầu. Không, đúng hơn thì đây là phước lành từ thần Iwao.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ai ai nghe xong cũng ngạc nhiên, há hốc mồm. Kowashi đi xuống, vẻ mặt của cậu đơ cả ra.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cậu thật tuyệt vời Kowashi nya. Giờ cậu trở thành người nổi tiếng rồi nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Đây có phải là mơ không?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cảm giác trở thành người được chọn thế nào Kowashi?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Shuuyaaa... Đừng nói vậy chứ. Nghe như cậu sắp nghỉ chơi với mình vậy...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ơ khoan, không có chuyện đấy đâu. Sao cậu lại nghĩ vậy chứ?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Tại... tại vì mình có chức nghiệp tốt hơn cậu...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình tuy không hiểu lắm nhưng không có chuyện vì mấy thứ này mà nghỉ chơi với các cậu đâu.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Shuuyaaa...'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình sẽ không bao giờ nghỉ chơi với Shuuya đâu.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À ừm, được thôi? Dù sao thì cũng kết thúc rồi, về thôi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi bước ra khỏi cửa, đang định gọi cha mẹ thì họ đã ôm lấy tôi mất rồi.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Con đừng buồn nha Shu. Mọi thứ không như con dự định rồi.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ta đúng là vô dụng mà. Ta đã dạy con mọi thứ về kiếm vậy mà ta không thể giúp con có được chức nghiệp『Swordsman』như ta. Ta xin lỗi con.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Trời ạ!!! Mọi người đang nói cái gì thế??? Con chả hiểu cái gì hết cả! Mọi người nói rõ ra cho con với!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi thực sự không thể hiểu mọi người đang nói về vấn đề gì. Trong lúc mọi người còn đang an ủi tôi về vấn đề gì đó mà tôi không hình dùng nổi thì Fig đến phá.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Hahaha! Giấc mơ làm mạo hiểm giả của ngươi tan vỡ rồi Shuuya!'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Này đủ rồi đấy, Shuuya đang rất buồn đó.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cậu muốn gây sự hả nya?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Con lợn này muốn làm thịt xiên hả?'
			},
			{
				class: 'villager',
				name: [ 'Quản gia' ],
				content: 'Cậu chủ! Xin đừng gây thêm rắc rối nữa! Tôi thực sự xin lỗi mọi người về hành động của cậu chủ nhà tôi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi thực sự không hề buồn tí nào... Mệt thật đấy... Mình cần giải quyết vụ này nhanh mới được.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Khoan đã các cậu. Fig, giải thích mình nghe xem tại sao giấc mơ của mình tan vỡ.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Ngươi bị ngu hả? Là một đầu bếp thì làm sao có thể chiến đấu được ngoài nấu ăn. Kể cả ngươi có cố gắng học chiến đấu thế nào thì vẫn chỉ làm vướng chân người khác thôi. Tỉ lệ những người có chức nghiệp không có tăng khả năng chiến đấu đều chết sớm cả. Mau mau từ bỏ giấc mơ mà mở quán ăn và nghe tin tức vĩ đại từ ta đi hahaha!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thì ra ý mọi người là như vậy. Làm mọi người lo lắng cho mình rồi, trừ thằng Fig ra. Nếu vậy chỉ còn cách chứng minh thôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Được rồi, nếu mình chứng minh là có đủ khả năng thì sao?'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Ngươi? Ha, muốn chứng mình kiều gì? Đấu với ta sao? Không có cửa...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đúng đấy. Tôi thách đấu cậu một trận cận chiến.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mọi người nghe vậy ai cũng bất ngờ hết cả.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Hahaha! Được thôi, ta chấp nhận.'
			},
			{
				class: 'villager',
				name: [ 'Quản gia' ],
				content: 'Khoan đã cậu chủ...'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Khoan đã! Con đừng có liều như vậy.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Shuuya bình tĩnh lại đi. Nói gì đó đi Hyouka.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình tin Shuuya sẽ làm được.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi và mọi người bất ngờ khi Hyouka nói vậy. Lâu rồi mới được người khác tin tưởng vào mình như vậy.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Tại sao cậu tin vào Shuuya vậy nya?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Đó là Shuuya của chúng ta mà.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cậu nói phải nya. Cố lên nha Shuuya nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Các cậu... Hầy, đã nói thế rồi thì chúc may mắn Shuuya.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Trời ạ! Con đúng là không thể lường trước được. Nếu vậy ta sẽ làm trọng tài cho trận đấu.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Fig, nghe ổn không?'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Được thôi.'
			},
			{
				class: 'villager',
				name: [ 'Quản gia' ],
				content: 'Cậu chủ...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mọi người sau đó đã di chuyển ra trước sân cô nhi viện. Những người đã nghe về cuộc cãi cọ của chúng tôi cũng đến xem trận đấu.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Hãy xem thanh kiếm của ta đây. Còn ngươi dùng gì?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi mỉm cười vào giây phút này. Cuối cùng, tôi đã chờ suốt 10 năm để có thể dùng được『Inventory』. Tôi lấy con dao bếp từ trong『Cooking Set』ra.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Của mình là con dao này.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mọi người đến xem đều bật cười trước thứ tôi đang cầm. Cha mẹ tôi ngạc nhiên và đám bạn thì không biết nói gì.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Hahaha! Ngươi đùa ta chắc? Con dao ngắn này thì sao đọ kiếm được?'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Nè con cần ta chạy về lấy kiếm của ta không? Mà con lấy con dao đó từ đâu vậy?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cha không cần lo đâu và con dao này là từ chức nghiệp của con.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Vậy thì ta sẽ phổ biến trận đấu. Đây là trận đấu cận chiến một đấu một. Có thể sử dụng Skill nhưng không được là loại tầm xa và gây ảnh hưởng đến tính mạng. Ai vi phạm sẽ xử thua. Ta sẽ dùng Skill『Mana armor』lên hai đứa, ai mất giáp Mana bao bọc cơ thể trước sẽ thua. Mọi người đã rõ chưa?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya', 'Fig' ],
				content: 'Đã rõ.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Vậy trận đấu bắt đầu.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Trận đấu sẽ kết thúc ngay tại đây. '
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Fig ngay lấp tức dùng『Physical Enhancement』và yểm『Flame』lên kiếm và lao lên định kết liễu tôi ngay lập tức nhưng...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vậy à?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tất nhiên tôi đã né được bằng cách lùi lại một bước.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Sao ngươi lại tránh được? Đã thế hãy xem đây.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Fig bắt đầu chém tôi dồn dập. Kĩ thuật của Fig không tệ mặc dù với cơ thể nặng nề. Nhưng tốc độ thì chậm hơn cha tôi nên tôi có thể né được dễ dàng. Mọi người bắt đầu bàn tán việc tôi có thể né dễ dàng. Còn mẹ tôi và nhóm bạn tôi đang hô hào cổ vũ.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'NGƯƠI CÓ THỂ ĐỨNG YÊN CHO TA CHÉM ĐƯỢC KHÔNG? ĐỪNG CÓ NÉ NỮA!!!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Rất sẵn lòng.『Counter』.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: '『Counter』là kĩ thuật hủy đòn tấn công của địch. Khi sử dụng Skill này phải canh đúng thời điểm để hủy thì mới có hiệu quả. Nếu thành công địch sẽ bị choáng trong 2 giây. Tôi đã có được Skill này khi đấu với cha tôi nhưng đây là lần đầu tiên tôi sử dụng. Và may thay tôi đã thành công và Fig đã bị choáng. Ngay lập tức tôi liền đưa dao chém vào cổ của Fig và kết liễu cậu. Tất nhiên chỉ mất phần giáp Mana thôi, Fig vẫn ổn ngoại trừ cậu khá cay cú. Giáp Mana của tôi cũng hết tác dụng ngay sau đó.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Trận đấu kết thúc. Phần thắng thuộc về Shuuya!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Đám đông reo hò vì tôi đã làm điều khó tin nhất mà họ từng thấy. Dao đấu với kiếm, ai mà ngờ được chứ.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Mình... thua... nó... Thua... đầu bếp... KHÔNG THỂ THA THỨ!!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Fig cầm cây kiếm lên, dùng『Physical Enhancement』để nhanh chóng lao vào đâm sau lưng tôi. Mọi chuyện xảy ra quá nhanh. Mọi người thấy nhưng không ai kịp phản ứng để cảnh báo tôi. Và rồi trong chớp nhoáng... tôi đã... né được bằng cách nhảy ngược lên không trung. Thực ra trước khi Fig đâm tôi thì đã có một cơn gió thổi qua tôi. Nó chứa đầy sát khí nên tôi đoán Fig chuẩn bị đâm phía sau tôi. Thế nên tôi giả vờ không biết gì và dùng『Physical Enhancement』. Sau khi nhảy ngược tôi đã dùng『Slash』cắt lưỡi kiếm của Fig ra làm nhiều mảnh rồi đáp đất.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Món ăn đã xong. Chúc mọi người ăn ngon miệng.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi cảm giác như vừa nói một câu rất ngầu nhưng mà không ai phản ứng gì. Cảm giác ngại thật đấy. Mà chắc do pha vừa nãy còn đang làm mọi người sốc nên không ai thèm nghe tôi luôn...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Fig, cậu thua rồi. Chấp nhận đi. Ông quản gia, phiền ông đưa Fig về.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Ta...'
			},
			{
				class: 'villager',
				name: [ 'Mọi người' ],
				content: 'Phải đó, chấp nhận thua đi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Fig vừa tức giận, vừa xấu hổ. Hắn nắm chặt bàn tay, nghiến răng trong cay cú.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'SHUUYA... RỒI NGƯƠI SẼ PHẢI HỐI HẬN!!!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thế rồi Fig chạy đi với bộ dạng không thể tơi tả hơn, theo sau là ông quản gia. Các bạn của tôi lao vào tôi khen nọ kia. Còn mọi người vỗ tay hô hào. Tôi ngước nhìn lên bầu trời, dơ tay phải lên và nắm chặt lại.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Quả nhiên đây chính là cột mốc quan trọng.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Chú diều hâu đậu trên cành cây, nhìn xuống đám đông đang bao quanh Shuuya. Chú thấy cậu đang nắm chặt lấy con đường phía trước của mình...'
			}
		]
	},
	{
		chapter: 7,
		title: 'Cột mốc quan trọng (1)',
		dialogue: [
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Shu! Mau ra ăn sáng đi con. Hôm nay là ngày trọng đại đó.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hiện tại tôi đang 10 tuổi và hôm nay là ngày ban phát chức nghiệp tại nhà thờ. Đồng thời cũng là cột mốc quan trọng của mọi đứa trẻ ở thị trấn tôi. Tôi bước vào phòng ăn thì thấy cha đang ngồi đó. Đáng lẽ ra giờ này cha tôi phải đi làm rồi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ơ cha! Nay cha không phải đi làm à?'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ta đã xin phép nghỉ sáng nay để có thể đi đến nhà thờ cùng con đó.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đừng nói với con cả mẹ cũng đi cùng nha.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Tất nhiên là có rồi. Hôm nay là ngày quan trọng của con mà. Chẳng lẽ con không thích cha mẹ đi cùng sao?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cũng không hẳn... Con thấy hơi ngại...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi thấy ngại chết đi được. Nếu trong tôi là 10 tuổi thật thì không phải nói, nó vui lắm chứ...'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ngại gì chứ. Đứa trẻ nào cũng có cha mẹ đi cùng mà.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Phải đó, việc chứng kiến sự kiện cuộc đời của con cái cha mẹ nào cũng quan tâm hết. Nếu con không muốn thì cha mẹ có thể đợi...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À không! Hãy đi cùng con. Lâu rồi cả nhà mới được đi chung với nhau như vậy.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi vừa ngại vừa vui, cảm xúc thật lẫn lộn.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau bữa sáng cả nhà đã cùng đi đến nhà thờ gần cô nhi viện. Khi đến nơi tôi đã thấy hội bạn của mình đang đợi tôi ở trước cửa.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi', 'Asahi', 'Hyouka' ],
				content: 'Shuuya chào buổi sáng (nya)!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi nghe vậy liền chạy nhanh đến chỗ bạn của mình.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Chào mọi người. Làm mọi người đứng đợi mình rồi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Đứng một lúc có sao đâu. A, cháu chào hai bác.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cháu chào hai bác nya.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Con chào hai bác.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cha mẹ tôi đã đến nơi, vui vẻ tươi cười đáp lại.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Chào các cháu nha.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ừm. Chào các cháu. Các cháu có háo hức khi sắp nhận chức nghiệp không?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Tất nhiên là cháu háo hức rồi. Nhưng đồng thời cũng hơi lo lắng.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Phải đó nya. Cháu hi vọng nhận được chức nghiệp gì có lợi để làm mạo hiểm giả.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình cũng vậy. Mình muốn đi phiêu lưu cùng Shuuya và các cậu.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka sau khi chơi cùng với mấy bọn tôi thì bọn tôi cũng đã kể về dự định sắp tới. Nhỏ nghe chúng tôi muốn làm mạo hiểm giả nên cũng muốn tham gia cùng. Và thế là cả đám quyết định sẽ cùng nhau làm mạo hiểm giả bằng bất cứ giá nào.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ta rất mong đợi từ các cháu nha. Haha.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Con có những người bạn tuyệt vời thật đó Shu.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Những người bạn tuyệt vời à? Tôi cũng không rõ lắm nhưng có những người bạn như vậy thật tốt.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng! Tất nhiên rồi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Chúng tôi đang trò chuyện thì bóng dáng của của một cậu bé to béo tiến đến chỗ chúng tôi.'
			},
			{
				class: 'unknown',
				name: [ '???' ],
				content: 'Vậy ra các ngươi muốn làm mạo hiểm giả hả? Nếu vậy ta đây sẽ làm một mạo hiểm giả vĩ đại cho coi. Hahaha!'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Fig hả? Không ngờ cậu cũng muốn làm mạo hiểm giả đấy. Tưởng cậu chỉ có ăn rồi chơi và nằm thôi chứ?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Mạo hiểm giả vĩ đại cơ đấy nya. Đừng làm mình cười chứ nya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tên Fig này là con của một quý tộc nên nó lúc nào cũng vênh váo. Đồng thời cũng là đứa hay bắt nạt mấy đứa trẻ ở cô nhi viện. Nhiều lần nhóm tôi phải nhảy vào can thiệp trước khi xảy ra ẩu đả. Dính với quý tộc kiểu này chỉ mang lại rắc rối cho chúng tôi thôi.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Sao các ngươi dám! Ta là Koyama Fig đấy đừng có nói kiểu đấy với ta. À, cô gái tóc trắng xinh đẹp đang núp sau thằng Shuuya ẻo lả kia ơi, cô nên bỏ mấy đứa này và theo tôi đi. Cô chỉ có thể sánh bước với một mình ta thôi. Haha!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cha mẹ tôi đứng bên cạnh thì thầm.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Nè em, anh có thể đập thằng nhóc này không?'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Bình tĩnh nào anh, thắng nhóc chỉ là trẻ con thôi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cha mẹ tôi trông có vẻ bình tĩnh nhưng họ đang tỏ ra đầy sát khí. Làm gì có chuyện cha mẹ nào lại không bực khi nghe con mình bị nói vậy. Rồi tôi cảm nhận được một nguồn sát khí lạnh rất mạnh từ sau tôi...'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Nè con lợn! Cậu dám nói Shuuya của mình là thằng ẻo lả hả? Con lợn béo này!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka trừng mắt nhìn Fig khiến cậu cũng phải run rẩy. Để mà nói thì bị Hyouka trừng mắt cũng đủ để bay hết tinh thần mà không cần dùng đến Skill luôn.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Hyouka trông đáng sợ quá à nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nè Hyouka bình tĩnh lại nào.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Hyouka này, cảm ơn cậu đã giận hộ mình nha. Cậu có thể bình tĩnh lại được không?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Ừm...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Không hiểu sao Hyouka chỉ nghe mỗi mình tôi. Rồi từ đâu một ông ăn mặc trông như quản gia xuất hiện.'
			},
			{
				class: 'villager',
				name: [ 'Quản gia' ],
				content: 'Cậu chủ Fig, cậu đừng gây rắc rối nữa.'
			},
			{
				class: 'Fig',
				name: [ 'Fig' ],
				content: 'Cô được lắm... Tí nữa ta sẽ cho các ngươi thấy ai mới là người có chức nghiệp tuyệt vời nhất ở đây. Đi!'
			},
			{
				class: 'villager',
				name: [ 'Quản gia' ],
				content: 'Vâng thưa cậu chủ. Xin lỗi đã làm phiền mọi người.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ông quản gia cúi người chào chúng tôi và rời đi cùng Fig. Ông quản gia thật tốt, tội nghiệp ông ấy phải theo hầu thằng Fig.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Mà Hyouka này, con sống ở đây được gần hai năm rồi vậy con thấy ổn không?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mẹ tôi mặc dù hay đến cô nhi viện nhưng số lần bắt chuyện với Hyouka rất ít. Chắc là do Hyouka vẫn chưa quen nói chuyện với người khác.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Dạ, hiện tại con đang rất vui. Hơn nữa con đã coi cô nhi viện là nhà của con rồi. Mọi người ai cũng tốt cả.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Vậy thì tốt cho con rồi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Nghe Hyouka nói vậy tôi cũng nhẹ lòng. Có vẻ bệnh trầm cảm của nhỏ đã hết. Cách nói của Hyouka cũng đã bớt đi phần xa lánh nhưng tôi vẫn chưa thấy được rõ cảm xúc trên khuôn mặt của nhỏ. Trông nhỏ vẫn khá lạnh lùng...'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Tiện thể thì tại sao con đứng sát Shu vậy, Hyouka?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mà mẹ nói con mới để ý. Này Hyouka sao cậu hay đứng sát mình vậy?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Kể từ lúc tôi tìm được kẹp tóc cho Hyouka và kết bạn với nhỏ thì nhỏ thường hay bám lấy tôi. Chắc vì tôi giống nhỏ là người dùng Skill sớm chăng?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình cũng không biết nữa. Chỉ là khi đứng gần Shuuya mình cảm thấy dễ chịu lắm'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Hừm... Mình không hiểu lắm...'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Ái chà, Hyouka đáng yêu quá. Cho ta ôm con với.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka chưa kịp nói gì thì mẹ tôi đã ôm lấy nhỏ. Hyouka và tôi giật mình.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mẹ này! Đừng có ôm người ta như vậy chứ! Xin lỗi nha Hyouka, mẹ mình thường không như này.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Không có sao đâu. Cảm giác giống như mẹ đang ôm mình vậy.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Vậy con có thể gọi bác là mẹ.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mẹ?'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Hyouka cưng quá à!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ế? Chuyện gì vừa xảy ra vậy? Tôi đã bất động một lúc. Mẹ mình thích có con gái hơn hả?...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thôi nào mẹ, chúng con phải vào nhà thờ rồi.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'À ừm, các con đi đi.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Chúc may mắn nha mấy nhóc.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Chúng tôi bước vào nhà thờ vẻ đơn sơ mộc mạc. Tường được làm bằng đá, cửa số làm từ gỗ với kính có thể đóng mở, các thanh xà ở phía trên cũng được làm từ gỗ, mái được lợp ngói. Vì là thị trấn nên nhà thờ không có hoành tráng. Vừa bước vào có thể thấy ngay một bức tượng đá tạc vị thần Iwao được đặt lên bệ đá trên bục giảng. Và mục sư Laren đang đứng trên đấy cùng với quả cầu gì đó đợi đến giờ. Còn phía dưới có hai hàng ghế dài, mỗi hàng có năm cái ghế và mỗi ghế được bốn người ngồi. Như vậy sức chứa của nhà thờ là khoảng hơn 40 người. Đối với hôm nay thì các hàng ghế sẽ được nhường cho các đứa trẻ, còn người lớn sẽ đứng đợi ở bên ngoài xem qua cửa sổ và cửa chính. Lúc này sơ Celia đang hướng dẫn đám trẻ ngồi vào chỗ.'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: 'Mọi người từ ngoài vào trong xin hãy yên lặng. Đã đến giờ bắt đầu nghi thức.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Lời nói của mục sư thật có trọng lượng. Ai ai cũng nghe theo cả.'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: 'Trước khi bắt đầu ta sẽ phổ biến lại quy luật nhận chức nghiệp. Chức nghiệp có thể được thừa hưởng từ cha hoặc mẹ hoặc thông qua làm việc gì đó nhiều lần. Và một vài trường hợp hiếm sẽ nhận ngẫu nhiên chức nghiệp. Vậy giờ ta sẽ bắt đầu buổi lễ ban chức nghiệp. Bắt đầu từ hàng ghế đầu tiên. Mời con.'
			},
			{
				class: 'villager',
				name: [ 'Đứa trẻ đầu tiên' ],
				content: 'Vâng!'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: 'Con hãy đặt tay lên『Quả cầu ban chức nghiệp』, nhắm mắt lại, cảm nhận từ quả cầu, nói ra những gì con thấy và nó sẽ xuất hiện trên quả cầu.'
			},
			{
				class: 'villager',
				name: [ 'Đứa trẻ đầu tiên' ],
				content: 'Tiếng kim loại va đập. Ngọn lửa cháy bừng bừng. Mùi hương kim loại cháy.'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: '『Blacksmith』. Chức nghiệp của con là thợ rèn. Hãy nghĩ『Status』trong đầu, thông tin về con sẽ xuất hiện. Giờ con có thể ra về rồi.'
			},
			{
				class: 'villager',
				name: [ 'Đứa trẻ đầu tiên' ],
				content: 'Con cảm ơn mục sư.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thì ra đây là cách nhận chức nghiệp. Mà mình đã có chức nghiệp『Chef』từ lúc đến thế giới này rồi, thậm chí là có thể sử dụng luôn ý chứ. Chắc không được nhận thêm chức nghiệp nào nữa đâu nhỉ?'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: 'Người tiếp theo.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Có vẻ như người tiếp theo là Fig, để xem thằng này có chức nghiệp gì nào.'
			},
			{
				class: 'Laren',
				name: [ 'Mục sư Laren' ],
				content: '『Magic Swordsman』. Chức nghiệp của con là ma kiếm sĩ.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Trong gian phòng đó, chú diều hâu đậu ở trên thanh xà gỗ, nhìn xuống dưới nhóm Shuuya đang lo lắng không biết chuyện gì sẽ xảy ra tiếp theo...'
			}
		]
	},
	{
		chapter: 6,
		title: 'Cô bé “lạnh” lùng (2)',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hiện giờ đang là bữa tối, tôi đang ngồi ăn cùng cả nhà. Tiện thể hỏi luôn cha tôi về Hyouka, hi vọng cha có thể nói về chuyện này.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cha ơi, cha có biết gì về Hyouka không ạ? Chắc là cha cũng có chút thông tin về bạn ý nhỉ?'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Tất nhiên là ta có thông tin về Hyouka rồi, dù sao binh lính của ta và ta cũng đến nơi xảy ra sự việc mà.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vậy cha có thể nói cho con biết được không?'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Hừm... Ta không thể nói.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thông tin nội bộ à, dù sao cha cũng là chỉ huy nên cũng không trách cha được. Mà mình cũng nghe kha khá từ Kowashi rồi...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À nếu không được thì cha không cần phải nói đâu ạ. Chỉ là sáng nay con có thử trò chuyện với Hyouka nhưng bạn ý né tránh con và mọi người. Con khá là lo cho bạn.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mẹ tôi đã dơ tay trái che đi nụ cười sau khi nghe xong câu vừa nãy và nói đùa.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Ái chà, con mẹ thực sự lo lắng nhiều cho cô bé đó nhỉ?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mẹ đừng hiểu lầm ý con. Hyouka đang cô đơn nên con muốn làm bạn với bạn ý. Nhưng với cái tính lạnh lùng của bạn nên con cũng đang bó tay đây.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Con thực sự quan tâm Hyouka nhỉ?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng vâng...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi thực sự quan tâm Hyouka. Hiện tại Hyouka có vẻ đang bị chấn thương tâm lí và để nói ngắn gọn thì là bị trầm cảm. Có thể khái niệm "trầm cảm" chưa xuất hiện tại nơi đây nên không ai có đủ sự quan tâm đến Hyouka. Các triệu chứng của cô giống với bệnh trầm cảm như là tránh giao tiếp với người khác, tự thu mình lại, luôn suy nghĩ nhiều thứ, ... Nhưng nguy hiểm nhất là càng về lâu về dài Hyouka sẽ có những suy nghĩ lệch lạc nhất là về tính mạng của cô. Hyouka có thể sẽ tự sát nếu cứ tiếp tục như vậy.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ta thấy con quan tâm nhiều như vậy chắc có lẽ kể cho con một chút cũng không sao.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ơ, cha chắc chưa đó? Con tưởng đấy là thông tin nội bộ nên cha không nói được ra mà.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Có sao đâu chứ, miễn là cả nhà không kể lung tung cho người khác biết là được. Haha.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi xin rút lại những lời đã nói về cha tôi một lúc trước. Đúng là cha tôi mà...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cha tôi đã kể lại những gì cha biết nhưng cũng không có thêm thông tin gì mới. Tôi đã nghe từ Kowashi rồi, tính ra binh lính cũng không cẩn thận khi hỏi Hyouka ở Cô nhi viện. Nhưng cha tôi cũng cho tôi thêm một thông tin.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Không hiểu sao những lời bàn tán về Hyouka bắt đầu diễn ra. Chắc binh lính của ta đã bất cẩn hoặc ai đó trong nội bộ đã tiết lộ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hẳn là vậy rồi...'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Nói mới nhớ mẹ cũng nghe loáng thoáng mọi người đang nói về một cô bé 8 tuổi đã bộc phát kĩ năng. Và đã tự hạ một đàn ma thú Ligheep đang trong trạng thái không ổn định chỉ với một đón. Điều này sẽ khiến Hyouka gặp chút rắc rối đây.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Câu cuối cùng mẹ tôi vừa nói hoàn toàn đúng. Đối với đứa trẻ quý tộc trước 10 tuổi có thể dùng Skill thì mọi người sẽ coi đó là sự tài giỏi, thiên tài. Còn đối với trẻ thường dân trước 10 tuổi có thể dùng Skill thì chỉ có số ít xuất sắc được biết đến bởi nhiều người thì được coi như có tài, còn lại sẽ bị coi như là mối nguy hại. Đó là lí do tôi không sử dụng Skill và giấu nó đi. Và tôi thật không thể tài nào hiểu nổi lý lẽ của mọi người ở đây. Chắc có lẽ đã từng xảy ra vụ việc gì đó mới khiến mọi người có định kiến này. Tôi mải suy nghĩ nên không biết từ lúc nào miệng tôi đã nói ra.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mọi người nghĩ như thế nào về Hyouka?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Đột nhiên phòng ăn im lặng một hồi. Tôi trở về thực tại thấy cha mẹ đang nhìn tôi chằm chằm. Tôi nhận ra đã nói ra suy nghĩ của mình.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'A! Con chỉ đang suy nghĩ... Ý con là...'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ta nghĩ cô bé giỏi đấy chứ. Sau này sẽ làm pháp sư giỏi đây.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Đối với mẹ thì cô bé khá đáng thương khi vừa mất đi người thân. Còn con nghĩ sao?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Con... '
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi tự nhủ rằng không phải ai cũng giống nhau ha.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Con cũng nghĩa giống với hai người thôi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Và sau đấy tôi đã bị cha mẹ trêu chọc suốt bữa tối.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sáng hôm sau, trên đường đến Cô nhi viện, tôi đã nghe nhiều lời bàn tán về Hyouka và sự nguy hiểm của cô. Tôi đã rất tức giận nhưng đồng thời cũng bất lực vì không làm gì được. Tôi thở dài, bước đi thật nhanh và cố không nghe gì cả. Khi đến nơi tôi thấy Hyouka đang tìm gì đó gần cái cây ở sân trước.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nè Hyouka, cậu đang tìm gì đó? Có cần mình giúp không?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mặt Hyouka vẫn không cảm xúc kể từ lần cuối tôi nói chuyện.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Chẳng phải mình đã nói đừng trò chuyện với mình sao?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình chỉ muốn giúp cậu thôi mà?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka nghe vậy liền dừng tìm, đứng dậy và nhìn vào tôi. Lúc đó tôi đã nhận ra Hyouka đã bị mất cái kẹo tóc.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Vậy giúp mình việc này. Cậu có thể đừng cười gượng gạo như thế nữa được không?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ý... cậu là gì vậy?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Cậu đang che giấu gì đó đúng không? Cậu lúc nào cũng cười như vậy hết. Thật khó chịu.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka thực sự đã đánh trúng tim đen của tôi. Tôi là một người chuyển sinh nên cơ thể và nhận thức không giống nhau, đồng thời cũng có thể dùng Skill từ sớm. Đó là lí do tôi luôn cố tươi cười để che giấu đi sự thật nhưng nó thật nhức nhối khi không thể nói với ai... Tôi cố đánh trống lảng đi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình không hiểu cậu đang nói gì cả. Ta quay lại việc tìm đồ cậu mất được không?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Vậy là cậu không thể giúp mình.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình...'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Thật phiền phức.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Nói xong Hyouka liền đi qua chỗ khác. Giác quan của Hyouka nhạy bén đến mức đáng sợ và những lời cô nói đúng hết. Dẫu vậy tôi vẫn quyết định tìm kẹp tóc cho Hyouka. Trong lúc tôi nhìn xung quanh ở sân trước thì Kowashi đã tới bắt chuyện với tôi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Này Shuuya, đang tìm gì à?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cái kẹp tóc của Hyouka.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'À thì ra Hyouka đang tìm cái đó. Vậy bạn ý nhờ cậu à?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Không... Lại bị từ chối lần hai rồi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nghe đau thật đấy. Được rồi để mình bảo Asahi tìm cùng và hỏi mấy đứa kia có nhặt được kẹp tóc hay không.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cậu không cần phải giúp mình đâu.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Này, đừng có hiểu lầm. Mình đang giúp Hyouka chứ có giúp cậu đâu.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Phải ha. Vậy cảm ơn cậu.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi bắt đầu đi tìm xung quanh sân, chầm chậm vạch từng bụi cỏ tìm thật thật kĩ. Nhưng, một tiếng đồng hồ trôi qua tôi vẫn không thấy gì cả. Trời nay nắng hơn mọi hôm khiến tôi khá mệt mỏi cho dù có『Heat Resistance』. Tôi nằm xuống gần cái cây, ngước nhìn lên và thở dài. Từ trên cây một chiếc lông chim nửa trắng nửa lam rơi xuống. Tôi cầm lên, ngắm nhìn nó và tự hỏi nên tìm kẹp tóc ở đâu bây giờ. Ngắm nghía chiếc lông chán tôi cất vào Inventory, hạ tay xuống thì một thứ gì đó lấp lánh trên cây đập vào mắt tầm tôi. Liệu nó có phải là kẹp tóc? Tôi đứng dậy, nhìn xung quanh có người không rồi dùng『Floating』để lấy thứ đang lấp lánh kia. Tôi biết mình đã cố gắng che giấu thân phận nhưng vì lí do gì đó đã thúc đẩy bản thân hãy quên nó đi và giúp Hyouka. Thứ lấp lánh đó rơi vào tay tôi và đó đúng là cái kẹp tóc của Hyouka. Tôi thắc mắc sao nó có thể ở trên đó nhưng mà nó không còn quan trọng. Vậy là nhiệm vụ hoàn thành và giờ tôi đi tìm Hyouka để trả lại.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi chạy ra sân sau, thấy Hyouka vẫn đang tìm. Tôi tiến lại gần, Hyouka thấy tôi định chạy đi nhưng tôi đã nói lớn.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Khoan đã Hyouka, mình tìm thấy kẹp tóc của cậu rồi này!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka đang định chạy nghe vậy liền khựng lại. Rồi đứng quay về hướng tôi nhưng đầu cúi xuống còn tay ôm chặt con thỏ bông.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Tại sao? Tại sao cậu lại giúp mình? Cậu rốt cuộc muốn gì ở mình?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình chỉ đơn giản là muốn giúp cậu, vậy thôi.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Tại sao? Sau những gì mình đã nói vậy mà cậu vẫn giúp?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi tiến lại gần Hyouka, tôi vừa nói vừa cài lại kép tóc cho cô.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cậu đã mất quá nhiều rồi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau câu nói đó tôi đã không nói thêm gì mà lẳng lặng bước đi. Đầu tôi lúc này đang hơi choáng, chắc vì nay quá nóng. Tôi lại gần ngồi dưới cái cây trước sân, mắt nhắm lại và ngủ từ lúc nào không hay. Rồi xung quanh tôi tự nhiên thật dễ chịu và mát mẻ. Tôi chợt tỉnh giấc, quay đầu sang phải thì thấy Hyouka đang ngồi ôm con thỏ bông cạnh tôi. Tôi đã giật mình.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ế Hyouka? Sao cậu lại ngồi đây vậy?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Đây là chỗ mình vẫn hay ngồi mà.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À, phải ha... Vậy mình ra chỗ khác nha.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Không... Cậu có thể ngồi ở đây.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ế? Hyouka vừa bảo mình ở lại đúng không nhỉ? Cô ý vừa mở lòng nhỉ? Đây có thể là dấu hiệu tốt.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Thực ra mình định tới để cảm ơn cậu nhưng mà cậu lại ngủ mất nên mình đành ngồi đợi cậu dậy.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cậu không cần phải cảm ơn đâu. Ngược lại mình phải cảm ơn cậu vừa nãy dùng băng kĩ lên mình, trời nóng quá làm mình bị say nắng.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình không có dùng Skill nào cả. Mình vẫn chưa kiểm soát được.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Chẳng lẽ đây là sự rò rỉ Mana? Hay là Aura nhỉ? Hay là Skill nội tại? Mấy cái này chắc mình sẽ xử lí sau.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Bỏ qua chuyện đấy đi ha. Giờ cậu có thể cho mình biết tại sao cậu lại muốn xa lánh mọi người không?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nếu cậu không muốn nói thì không cần đâu. Mà cậu còn nhớ câu hỏi lúc trước cậu hỏi mình về bí mật của mình là gì không? Nó đây.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Sao mình không nghe thấy tiếng lá cây nữa vậy? Và những lá cây biết bay?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Bất chấp mọi cố gắng tôi che giấu, tôi đã tiết lộ bí mật của tôi. Tất nhiên là tôi sẽ không nói gì về vụ chuyển sinh. Chỉ là chưa đến lúc...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình cũng là người có thể sử dụng Skill sớm. Hai phong kĩ mình vừa mới dùng là『Silent Barrier』ngăn âm thanh và『Floating』di chuyển vật. Vì định kiến nên mình đã giấu nó đi và cậu là người đầu tiên biết bí mật này của mình.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Tại sao cậu lại kể nó cho mình?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Những gì cậu nói lúc trước khiến mình suy nghĩ nhiều. Để che giấu bí mật thì mình đã đeo lên một chiếc mặt nạ. Mọi thứ đều thuận lợi nhưng đâu đó trong lòng mình thật khó chịu và có chút nhức nhối. Vậy nên mình đã quyết định kể cho cậu nghe về nó. Đừng nói cho ai về bí mật này nha. À mà mình cũng không hiểu sao mình lại muốn kể cho cậu nghe nữa, ha ha... '
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Không. Cảm ơn đã kể mình nghe. Lí do mình cố xa lánh mọi người là vì một phần lời bàn tán. Nhưng đồng thời mình đã sợ khi những người mình quen dần biến mất trước mặt. Người thân duy nhất là cha mẹ mình cũng đã ra đi. Mình đã rất sốc và buồn nên cảm xúc trên khuôn mặt mình đã bị mất đi. Vậy nên mình quyết định chọn lấy cô đơn.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cậu thấy ổn về điều đó?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nếu cậu muốn khóc thì cậu có thể dựa vào mình. Mình vẫn kích hoạt『Silent barrier』nếu cậu không muốn ai nghe thấy.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka đã dựa vào tôi, vừa khóc vừa nói những điều cô kìm nén mãi trong lòng.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Nó không hề ổn... Mình buồn lắm... Đau đớn lắm...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau một lúc thì Hyouka đã bình tĩnh lại.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Thật ngại quá... Mình thấy ổn hơn nhiều rồi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thực ra từ giờ cậu sẽ không còn cảm thấy cô đơn nữa. Ở đây có hai đứa bạn thân của mình cũng rất muốn làm bạn với cậu đó.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình không biết nữa. Lần trước mình đã lờ họ nên chắc đã làm họ tổn thương.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình chắc chắn họ không bận tâm gì về nó đâu.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Nhưng mình phải nói gì đây? Do di chuyển liên tục nên mình chưa từng nói chuyện đủ lâu với một ai để có thể gọi là bạn.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Chà, nếu vậy thì...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi dừng dùng Skill và đứng dậy, quay về hướng của Hyouka. Mái tóc của tôi tung bay trong gió, tôi dơ tay ra và nở nụ cười.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Một lần nữa. Mình là Shuuya, liệu mình có thể là người bạn đầu tiên của cậu được không?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Sau tất cả liệu mình có thể?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình giống cậu mà. Nếu cậu có tâm sự gì thì mình sẽ luôn bên cạnh để lắng nghe.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cuối cùng Hyouka đã nắm lấy tay tôi và đứng dậy.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình là Hyouka, mình rất vui khi được làm bạn với cậu, Shuuya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Tuyệt vời! Để mình gọi hai đứa bạn của mình ra đây. Cậu cứ đợi ở đây nha.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Và thế là tôi đã chạy vào nhà gọi Kowashi và Asahi.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'A...'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Hyouka đứng nhìn Shuuya chạy đi. Trong một khoảnh khắc, Hyouka đã mỉm cười...'
			}
		]
	},
	{
		chapter: 5,
		title: 'Cô bé “lạnh” lùng (1)',
		dialogue: [
			{
				class: 'think',
				name: [ '???' ],
				content: 'Ở ngoài thị trấn『Dawn Horizon』, một cỗ xe ngựa đang di chuyển với vận tốc rất nhanh hướng về thị trấn. Theo sau đó là đàn ma thú Ligheep giống cừu 5 con với đôi mắt đỏ ngầu, bộ lông trắng đã chuyển sang đen. Trong bộ lông đó tích tụ sét để Ligheep có thể sử dụng được thông qua hai cái sừng nhô ra trên đầu chúng nó.'
			},
			{
				class: 'HyoukaFather',
				name: [ 'Giọng người đàn ông' ],
				content: 'Cố lên con, Hyouka. Chúng ta sắp tới thị trấn rồi. Binh lính ở đó sẽ giúp ta.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Con sợ lắm. Sao đột nhiên đám Ligheep lại đuổi theo chúng ta vậy?'
			},
			{
				class: 'HyoukaFather',
				name: [ 'Cha Hyouka' ],
				content: 'Ta cũng không rõ. Giờ ta đang cố né những tia sét của đám Ligheep nên con bám chắc vào. Mặc cái áo choàng có mũ này vào. Nó có kháng một chút sét nếu con bị trúng.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Bình thường Ligheep là một loài hiền lành nhưng không hiểu vì lí do gì mà đám nó lại thành như vậy. Chúng chỉ hành động như vậy khi mà bộ lông nó cực dày đến nỗi che cả mắt nhưng với đám này lượng lông vẫn ổn. '
			},
			{
				class: 'HyoukaFather',
				name: [ 'Cha Hyouka' ],
				content: 'Gần lắm rồi, chúng ta sẽ...'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Cha Hyouka chưa kịp nói hết câu thì một tia sét đã trúng vào ngựa kéo xe khiến nó phát hoảng và lật đổ xe. Hyouka với vết chảy máu trên đầu cố gượng bò ra ngoài khỏi cỗ xe đang bị cháy do Ligheep vẫn đang bắn sét.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Lúc này binh lính đi tuần quanh tường thành nghe thấy tiếng động lớn và thấy cột khói bốc lên liền chạy đi báo chỉ huy.'
			},
			{
				class: 'soldiers',
				name: [ 'Binh lính' ],
				content: 'Thưa chỉ huy Haruka! Chúng tôi thấy có cột khói bốc lên và có những tiếng động. Có thể đã xảy ra tai nạn hoặc ai đó đã bị tấn công.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Hả? Nửa đầu tiểu đội đi theo ta, còn nửa còn lại tiếp tục làm nhiệm vụ.'
			},
			{
				class: 'soldiers',
				name: [ 'Binh lính' ],
				content: 'Rõ!'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Hyouka đang từ từ di chuyển đến bên người cha nhưng dường như ông đang hấp hối vì vết thương lớn trên bụng. Mặc kệ đám Ligheep vẫn đang tiến đến, Hyouka ngồi bên cạnh người cha mà khóc nức nở.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Cha đừng có rời xa con như mẹ nữa mà.'
			},
			{
				class: 'HyoukaFather',
				name: [ 'Cha Hyouka' ],
				content: 'Ta... lỗi... Không... thể... vệ... con...'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Không! Không muốn đâu! Cha đừng chết!'
			},
			{
				class: 'HyoukaFather',
				name: [ 'Cha Hyouka' ],
				content: 'Con... hãy... hạnh... Mau... chạy...'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'KHÔNGGGG!!! CHAAAA!!!'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Cha Hyouka đã trút hơi thở cuối cùng. Hyouka kêu gào và khóc lớn mặc kệ đám Ligheep ngày càng gần. Cô cứ khóc và hét lớn vì người cha đã mất. Rồi đột nhiên Hyouka không còn hét nữa, cô đứng dậy, mở lòng bàn tay hướng về đám Ligheep và cất lên một câu với giọng điệu đầy sát khí.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: '『Freeze』'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Mặt đất xung quanh bỗng đóng băng và chỗ băng đó đã tiến đến đám Ligheep rất nhanh. Khi đám Ligheep bước vào đoạn đất bị đóng băng, chúng nó liền bị đóng thành những cột trụ băng. Sau một lúc thì binh lính mới tới nơi xảy ra. Hyouka quay đầu nhẹ nhìn về hướng binh lính, cơn gió lạnh từ băng đã thổi bay mũ áo choàng để hiện ra khuôn mặt không cảm xúc của cô. Đôi mắt Hyouka vẫn chảy nước mắt, máu từ vết thương trên đầu cô đã khô lại. Trước khi chỉ huy định làm gì thì Hyouka đã ngã xuống và ngất đi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Con đi đến Cô nhi viện đây ạ.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Được thôi, con đi đường cẩn thận.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hiện tại tôi đang 8 tuổi. Tuần vừa rồi tôi đã bị ốm một trận nặng nằm liệt giường. Không biết tôi có bỏ lỡ gì không. Hoặc có khi tôi gặp may khi không gặp rắc rối với “bộ đôi rắc rối”.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi đã đến Cô nhi viện, trước sân lũ trẻ đang nô đùa chơi với nhau. Tôi liếc qua liếc lại không thấy bộ đôi đâu nên tôi định vào nhà tìm thử. Đột nhiên chú diều hâu vụt qua làm tôi giật mình. Tôi theo phản xạ nhìn chú diều hâu bay đi về hướng cây trước sân. Rồi thứ đập vào mắt tôi là một cô bé đang ngồi dựa vào cây, tay ôm con thỏ bông trắng, nhìn lên bầu trời với ánh nhìn xa xăm. Khuôn mặt của cô không biểu lộ cảm xúc gì cả, đôi mắt của cô màu lam nhạt như màu của băng vậy, tai cô dài nên tôi đoán cô là một Elf, mái tóc ngắn trắng như tuyết với bên phải của cô có một đoạn tết tóc và trên đó có cài kẹp tóc gắn viên pha lê màu lục nhạt. Tôi tự hỏi tại sao cô bé lại ngồi một mình ở đó mà không chơi với mấy đứa trẻ hay là cô bị bắt nạt? Tôi vừa nghĩ vừa tiến tới cô để bắt chuyện.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Chào bạn, tại sao...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi chưa kịp nói hết câu thì cô bé quay ra nhìn liếc tôi với một vẻ lạnh lùng và cắt ngang câu tôi nói.'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Đừng bắt chuyện với mình.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ơ khoan, bình...'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Mình nói rồi đừng nói chuyện với mình.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nhưng tại sao?'
			},
			{
				class: 'Hyouka',
				name: [ 'Hyouka' ],
				content: 'Phiền thật.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cô bé vừa dứt câu thì đã đứng dậy đi chỗ khác. Tôi đã khá sốc và cơ thể thì bất động, thật là một cô bé lạnh lùng. Một lúc sau Kowashi và Asahi bước ra từ nhà.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Ủa Shuuya? Sao lại đứng ngây người ở đây thế.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Nhìn mặt Shuuya trắng bệch ra luôn nè nya. Cảm giác như vừa bị ai từ chối vậy nya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đúng vậy...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi', 'Asahi' ],
				content: 'Ế (nya)?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khi tôi lấy lại được sự bình tĩnh thì tôi đã kể lại chuyện vừa nãy. Bộ đôi cũng kể cho tôi một số thông tin về cô. Cô bé đó tên là『Hyouka』, đã đến cô nhi viện được khoảng 2 ngày từ sau vụ tai nạn với đám ma thú Ligheep. Vào ngày hôm sau khi Hyouka ở đây, binh lính đã tới hỏi cô một số câu hỏi và đã biết thêm một số thông tin khác.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hiện tại Hyouka đang 8 tuổi, bằng tuổi của tôi và bộ đôi. Mẹ Hyouka là Elf đã mất sau khi sinh ra Hyouka, còn cha Hyouka là con người nên Hyouka là nửa người nửa Elf. Cha Hyouka là một thương nhân đang trên đường đến『Dawn Horizon』để xem có thể định cư và mở cửa hàng ở đây không. Còn đám ma thú Ligheep không hiểu lí do gì đã đuổi theo và điều đó dẫn đến cái chết của cha Hyouka. Rồi sự việc xảy ra sau đó cô cũng chỉ nhớ mang máng là mình có băng kĩ như mẹ mình nhưng đã không thể kiểm soát được nó. Hyouka thử dùng lại nhưng không được. Về phần Ligheep thì bên binh lính đang điều tra chỗ xác bị đóng băng do Hyouka. Nhưng điều phải chú ý đến nhất là biểu cảm không cảm xúc trên khuôn mặt của Hyouka. Cái cảm giác lạnh lùng mỗi lần cố giao tiếp với cô. Tôi nghĩ Hyouka đã bị sang chấn tâm lý sau những gì vừa xảy ra. Nhưng tôi vẫn không hiểu phần Hyouka tỏ vẻ xua đuổi mọi người.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Mình cũng đã thử trò chuyện với Hyouka nhưng không thể.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Mình cũng vậy nya. Lúc cậu ý nhìn mình trông đáng sợ lắm nya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Hừm... Chắc Hyouka cần thời gian.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hyouka đang đứng núp ở góc nhà bên ngoài nhìn về phía nhóm chúng tôi đang trò chuyện. Tôi thấy vậy định dơ tay vẫy thì Hyouka lại quay đi nên tôi cũng chỉ đành chấp nhận.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Còn Hyouka vừa đi vừa ôm con thỏ vừa suy nghĩ gì đó trầm tư nên đã bị vấp ngã. Cái kẹp tóc gắn viên pha lê xanh lục nhạt của cô đã bị rơi và cô đã không để ý nó. Hyouka đứng dậy, phủi quần áo và con thỏ rồi lại đi tiếp trong khi suy nghĩ gì đó.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Chú diều hâu từ trên trời thấy một vật gì đó lóe sáng lên từ phía dưới. Chú lao xuống đó, nhìn chằm chằm vào cái kẹo tóc rồi cắp nó mang đi...'
			}
		]
	},
	{
		chapter: 4.5,
		title: 'Muộn',
		dialogue: [
			{
				class: 'think',
				name: [ '???' ],
				content: 'Lúc này trời đã sáng, Kowashi vẫn còn đang ngủ và có một giấc mơ êm ái.'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Êm quá... Đám mây này mình sẽ không thả tay ra đâu. Muốn ôm mãi cơ...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Nya...'
			},
			{
				class: 'think',
				name: [ 'Kowashi' ],
				content: 'Phải rồi... Đám mây kêu nya thật... Ủa khoan đã sao lại kêu nya? Mà sao tự nhiên đám mây khiến mình muốn hắt hơi...'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Thế là Kowashi đã bị hắt hơi. Cú hắt hơi đó khiến cậu tỉnh dây. Cậu mơ màng, mắt nhắm mắt mở, nhìn xung quanh và thấy Asahi đang nằm cạnh cậu. Cậu vẫn chưa tỉnh ngủ hẳn nên đã kéo chăn đắp cho cô. Mất một lúc sau cậu mới nhận ra là Asahi đang nằm cạnh mình nên cậu đã hoảng và ngã khỏi giường.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'A đau quá... Asahi! Dậy mau!'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Nya? Chào buổi sáng Kowashi nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nói mình nghe sao cậu lại nằm ngủ cùng mình vậy?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'À thì mình định gọi cậu dậy nhưng nhìn cậu ngủ ngon quá nên lỡ nằm ngủ cùng luôn nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Thật tình. Xuống dưới ăn sáng trước đi, mình gấp chăn xong rồi xuống.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Không không nya. Cậu xuống đi, mình gấp hộ cho nya. Do mình khiến cậu ngủ lâu hơn mà nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cũng không hẳn... Mà thôi, cảm ơn nha vậy mình đi rửa mặt.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Sau khi Asahi gấp gọn chăn xong thì xuống ăn sáng cùng Kowashi. Lúc này sơ Celia bước vào.'
			},
			{
				class: 'Celia',
				name: [ 'Sơ Celia' ],
				content: 'Cuối cùng thì cũng chịu dậy rồi à Kowashi. Ta bảo Asahi đánh thức con rồi mà.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'À tại Kowashi ngủ ngon quá à nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Thế cơ à?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Tha mình lần này đi nya.'
			},
			{
				class: 'Celia',
				name: [ 'Sơ Celia' ],
				content: 'Ta không hiểu chuyện gì đã xảy ra nhưng sau khi ăn xong thì nhớ rửa chỗ đĩa kia cho ta.'
			},
			{
				class: 'think',
				name: [ 'Kowashi', 'Asahi' ],
				content: 'Vâng (nya)!'
			},
			{
				class: 'Celia',
				name: [ 'Sơ Celia' ],
				content: 'À mà hình như nay các con qua nhà bạn Shuuya để huấn luyện chiến đấu đúng không? Chắc trưa nay các con không về đây ăn rồi.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Sơ Celia vừa nói xong câu đó thì đã bước ra khỏi phòng ăn rồi. Kowashi chợt nhớ ra và hớt hải.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Ôi chết, mình quên mất có hẹn với Shuuya luyện tập cùng cha cậu. Asahi ăn nhanh lên nào.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Rồi, mình biết rồi nya.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Cả hai ăn nhanh chóng rồi mau mau rửa đồ. Sau khi xong việc liền phóng ra khỏi nhà chạy thắng đến nhà Shuuya. Trên tay Kowashi thì cầm một cái khiên gỗ còn Asahi cầm một cái kiếm gỗ.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Nhưng trên quãng đường đến nhà Shuuya, Asahi tình cơ nhìn thấy một chú diều hâu bay qua. Theo bản năng của cô thì cô đã thả kiếm ra và đuổi theo chú diều hâu đó.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Này cậu làm rơi... Ế? Lại nữa hả?'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Kowashi thấy vậy nhặt cây kiếm, liền đuổi theo, hét lớn để khiến cô tỉnh lại.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Này Asahi! Tỉnh lại đi! Này!'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Tất nhiên Asahi đã không nghe thấy gì và thậm chí cũng không để ý đến xung quanh.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Trời ạ. Cậu chạy nhanh quá. Dừng lại mau!'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Chú diều hâu bay qua hàng cây vượt ra khỏi tầm mắt Asahi. Tưởng thế là kết thúc nhưng nào ngờ cô cũng nhảy lên cây và di chuyển trên hàng cây. Cô cứ nhảy qua cây này đến cây kia và cho đến cú nhảy cuối cùng. Asahi gần như đã với tới chú diều hâu đó rồi nhưng trước khi chạm tới nó thì cô đã rơi xuống. Thay vì đáp lên cây thì phía dưới là một con sông. Asahi bừng tỉnh và phát hoảng không kịp xử lí thế nào.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Kowashi chạy đến vừa kịp lúc, cậu nhảy lên từ bờ sông bên này, cài cái kiếm vào khiên vứt xuống dưới sông chỗ Asahi rơi và đáp xuống phía đó. Cậu liền đỡ được Asahi và nhảy qua bờ sông bên kia. Nhưng khoảng cách chân Kowashi với bờ bên kia không thể đáp tới nên cậu chỉ còn cách ôm chặt lấy phần đầu và lưng của Asahi. Thay vì đáp bằng chân thì Kowashi đã dùng lưng của cậu để đáp đất và lăn vài vòng trước khi dừng lại. Kowashi trong khi đang đau đớn đã hỏi Asahi với giọng nói hơi nhỏ.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Asahi, cậu ổn chứ? Có bị đau ở chỗ nào không?'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Asahi lúc này đang hơi hoảng. Cô liền ngồi dậy, kéo Kowashi ngồi lên. Đôi mắt cô đẫm lệ, đôi tai cụp xuống. Cô cúi mặt, nói nhỏ với Kowashi bằng giọng điệu đầy hối lỗi.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Mình xin... lỗi nya... Vì mình lại... khiến cậu... bị thương nữa... rồi nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Không sao đâu. Đừng có khóc mà. Chỉ là cậu vẫn chưa kiểm soát được hành vi của mình thôi.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Nhưng mà... mình luôn khiến cậu... gặp rắc rối vì... mình cả nya... '
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Đúng là thế nhỉ? Nếu cậu biết bơi thì mình sẽ bớt lo lắng cho cậu hơn. Nhưng mà chúng ta là “bộ đôi rắc rối”. Đôi khi mình cũng gây rắc rối cho cậu nữa. Dù sao thì mình sẽ luôn bên cạnh cậu khi gặp rắc rối. Và ngược lại cậu cũng vậy nhỉ?'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Asahi sau khi nghe xong thì bất ngờ, tai và đuôi dựng đứng lên. Cô dừng khóc và chín đỏ cả mặt. Kowashi không nhận ra Asahi đã hết buồn nên vẫn cứ nói.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Phải rồi, thay vì nói “xin lỗi” thì cậu nên nói “cảm ơn” cho những lúc thế này.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Asahi mỉm cười, ngẩng đầu lên trong khi mặt cô vẫn còn hơi đỏ còn đuôi cô thì ngoe nguẩy. Cô đưa ngón tay lên mắt, gạt đi những giọt nước mắt và nở nụ cười với Kowashi.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Đúng là Kowashi mà, cảm ơn nha!'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Kowashi nhìn vẻ mặt đó của Asahi liền đơ ra một lúc, mặt cậu cũng hơi đỏ chút. Dường như tim của cậu đã đập lệch một nhịp. Kowashi lần đầu tiên có cảm giác như vậy. Cậu tự hỏi liệu có phải đây là do lần đầu Asahi nói không có "nya" cuối câu hay do khuôn mặt của Asahi đã hút hồn cậu. Kowashi lấy lại nhận thức và đánh trống lảng.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'A... Phải rồi... Mình đi lấy lại cái kiếm và khiên ở cuối dòng đây. Cậu cứ đợi mình ở đây.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Vừa nói dứt lời Kowashi đã đứng dậy chạy đi luôn. Asahi cứ thế vừa nhìn theo hướng Kowashi chạy vừa đứng dậy rồi cô buộc miệng.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Luôn bên mình à...'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Shuuya lúc này đang tập vung kiếm và chém hình nhân gỗ. Cậu đột ngột khựng lại.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình cảm nhận được đã có chuyện gì đó xảy ra giữa Kowashi và Asahi.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Sau khi lấy lại được kiếm và khiên thì họ đã đến được nhà Shuuya. Trước khi bước vào nhà thì Asahi đã kéo áo Kowashi.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Về chuyện vừa nãy đừng kể cho Shuuya nha nya.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'À ừm, được thôi mình hứa.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Nya. Thưa bác, cháu đến tập luyện cùng Shuuya ạ nya!'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: '...'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Dường như một thứ gì đó đã mắc kẹt trong tâm trí của Kowashi...'
			}
		]
	},
	{
		chapter: 4,
		title: 'Buổi huấn luyện',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hiện tại tôi đang 7 tuổi và đang luyện kiếm cùng cha ở sân sau nhà. Cha tôi đã được thăng chức lên làm chỉ huy của tiểu đội. Và hôm nay cha được nghỉ nên tôi nhờ được cha luyện tập cùng. Tiếng của kiếm gỗ va đập vào nhau, cùng những tiếng kêu đau đớn... của tôi... Tất nhiên rồi, những lúc như này tôi sẽ là người ăn hành mà. Cũng chả trách được khi huấn luyện thì cha tôi rất nghiêm khắc. Dù sao thì tất cả là vì để tôi có thể sinh tồn nên cha mới thế này. Mỗi tội nó khổ quá.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đỡ này cha.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Sơ hở!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ha, không trúng con đâu.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ta đây chỉ nhử con thôi. Đỡ cú này thử xem.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đau đau đau! Con xin hàng.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cứ tưởng sau cú né đó tôi có thể trả đòn nhưng ai ngờ đòn đó là để nhử mình. Không hổ danh cha tôi được thăng chức chỉ huy quả thật rất xứng đáng.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Cũng đã được nửa năm từ lúc con nhờ ta, kĩ năng chiến đấu của con đã được cải thiện hơn đó.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thì con muốn ít nhất phải đánh trúng cha một phát. Nhưng có vẻ lần nào con cũng chỉ suýt thôi.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ha ha ha! Vậy cố lên nha con, đường còn dài lắm.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng vâng.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Mà hai đứa bạn của con đâu rồi? Con có bảo hai đứa nó sẽ qua đây luyện tập cùng mà.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ý cha là “bộ đôi rắc rối” đó hả? Con tin rằng họ vẫn đang ngủ.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Vậy à? Thế con muốn nghỉ ngơi chút không?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Con vẫn ổn. Tiếp tục nào cha, con tin lần này sẽ đánh trúng cha một phát.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Được! Ta rất sẵn lòng, lên nào con!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mặc dù nói vậy nhưng hiện tại với trình độ tôi một đấu một với cha là không thể. Tôi muốn sử dụng Skill lắm đấy nhưng mà thân phận cần che giấu, ít nhất là cho đến năm 10 tuổi. Thế nên tôi đành tập trung vào cải thiện kĩ năng chiến đấu và phán đoán tình huống.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Bước di chuyển khá đó. Cứ tiếp tục cho đến khi không cử động được thì thôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cơ thể sau khi chuyển sinh có năng lực thể chất tốt thật. May mà năng lực thể chất ở thế giới cũ không theo tôi đến đây.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'So với lần trước thì con có vẻ cầm cự lâu hơn chút. Nhưng mà...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cha tôi dùng cả cánh tay trái quật cả người tôi xuống. Tôi nằm bất động một lúc vì bị đau cả phía trước và phía sau.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Trọng tâm của con không được chắc chắn. Nó sẽ tạo sơ hở cho người khác dễ dàng hạ con chỉ với một pha quật tay như ta đã làm. Mà con còn ổn chứ?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đau... lưng con...'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ha ha. Nằm đó mà nghỉ ngơi chút đi. Ta vào nhà nghỉ chút đây. Khi nào bạn con đến thì sẽ tiếp tục sau.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi nằm đó nhìn lên bầu trời xanh. Cơn gió mát thổi qua làm dịu đi cơn đau của tôi. Tôi nhìn những đám mây trôi đi như thời gian cuộc đời mình trôi đi vậy. Trong khi suy nghĩ vu vơ tôi đã buộc miệng.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thế là đã 7 năm rồi nhỉ?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cơn đau của tôi đã dịu đi chút nên là tôi đã đứng dậy. Tôi tập vung kiếm và tập đâm chém vào con hình nhân gỗ của cha. Cùng lúc đó tôi cũng suy nghĩ tới việc nên sử dụng Skill của mình thế nào trong lúc chiến đấu. Rồi tôi đã nảy ra một ý tưởng. Tôi ngó nhìn xung quanh xem có ai đang ở gần không để triển khai Skill.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi đứng cách con hình nhân gỗ một khoảng ngắn. Đầu tiên hai tay tôi cầm chắc kiếm, đưa nó lên qua đầu. Sau đó tôi sử dụng『Wind mastery』để điều khiển gió bao quanh lưỡi kiếm làm tăng áp lực giữa lưỡi kiếm và gió bao bọc. Đồng thời kích hoạt luôn『Slash』. Đây là một Skill của chức nghiệp Chef, tăng khả năng chém mạnh lên gấp đôi và chỉ áp dụng lên vũ khí sắc có thể vung. Rồi tôi vung kiếm theo hướng chéo phải qua trái. Trong khi chuyển động thì lưỡi kiếm tăng áp lực lên gió bao bọc, đẩy gió tách khỏi lưỡi kiếm di chuyển theo hướng chém đó. Tôi ngước nhìn lên con hình nhân gỗ thì thấy nó vẫn ổn. Tôi nghĩ chắc nó đã thất bại rồi, dù sao đây cũng là lần thử đầu. Tôi đang định chạm tay vào để sờ xem thì một giọng nói cất lên làm tôi giật thót tim.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Bọn mình tới rồi này. Xin lỗi vì nay đễ trễ nha. Tại ngủ quên và một số chuyện đã xảy ra với Asa...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cậu hứa không kể rồi mà nya! Mà mình cũng xin lỗi vì đến trễ nha nya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Không... sao đâu...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Shuuya? Cậu ổn chứ? Sao trông cậu lo lắng và toàn nhiều mô hôi thế này?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À... Mình nãy... luyện tập hơi nhiều... đó mà. Haha...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Cậu chăm chỉ thật đó nya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'May quá không ai phát hiện ra tôi vừa dùng Skill xong. Tim tôi vẫn còn đang đập rất nhanh nữa chứ. Mấy đứa này từ hôm tôi kể chuyện luyện tập cùng cha thì mắt họ sáng lên muốn luyện cùng. Thì ra “bộ đôi rắc rối” cũng muốn làm mạo hiểm giả. Rồi cha tôi bước ra từ trong nhà.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Được rồi! Các con đã sẵn sàng chưa?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'À bác, Shuuya chắc cần được nghỉ ngơi chút. Bạn ý luyện tập suốt rồi ạ.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Đúng đó nya.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Thằng nhóc này, ta bảo con nghỉ ngơi rồi mà. Thôi ngồi xem ta với bạn con chiến đấu đi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Xét khả năng chiến đấu của “bộ đôi rắc rối” thì tôi vẫn hơn do tôi được huấn luyện trước. Nhưng khi nói đến phối hợp thì chắc không ai bằng hai người họ được. Kowashi thường sử dụng khiên, chuyên làm người đỡ đòn bởi sức khỏe của cậu. Còn Asahi thì dùng kiếm nhưng vì là miêu nhân nên tốc độ phản xạ và sự dẻo dai làm cho cô có một lợi thế lớn. Tất nhiên cả khiên và kiếm hiện tại đều là từ gỗ bởi đây chỉ là luyện tập.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Có vẻ cha tôi ra đòn trước nhưng Kowashi liền đỡ đòn. Từ phía sau Kowashi, Asahi liền nhảy lên và vung kiếm xuống. Cha tôi có vẻ đã nhận ra liền nhảy giật lùi lại.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Chiến thuật mấy đứa khá lắm.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Chúng cháu cảm ơn nya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Vừa dứt câu thì Asahi đã lao lên nhanh chóng chém tới tấp cha tôi rồi nhảy giật lùi. Sau đó Kowashi lại lao lên đỡ đòn và khống chế cha tôi. Asahi lại ở sau đó nhảy lên và họ cứ lặp đi lặp lại chiến thuật như vậy. Chiến thuật thì hay thật nhưng đối với cha tôi là người có kinh nghiệm chiến đấu thì việc lặp lại nhiều lần như thế sẽ khiến ổng tìm được ra sơ hở. Và đúng như tôi nghĩ, lần này cha tôi đã không còn nhảy giật lùi mà thay vào đó cha đạp lên khiên của Kowashi và nhảy ra phía sau cậu. Asahi lúc này chuẩn bị nhảy liền giật mình nên đã mất thăng bằng và bị cha cho một chém. Còn Kowashi chưa kịp phản ứng sau cú vừa nãy liền bị ăn một đạp từ phía sau bởi cha và một chém. Thế là trận đấu kết thúc.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Mấy đứa phối hợp với nhau tốt lắm nhưng mà không nên dùng liên tục một chiến thuật. Ta có thể đọc được bước di chuyển sau đó và tìm cách phá vỡ nó đấy.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Chúng cháu biết rồi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Mình thấy khỏe hơn rồi. Có thể cho mình nhập hội cùng không?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Tất nhiên là được rồi nya. Nhưng mà chiến thuật bây giờ thế nào đây nya?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Phải đó, chiến thuật mình nghĩ ra còn bị phá mất rồi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đừng lo, mình đã có kế hoạch. Đầu tiên...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau một hồi thảo luận chiến thuật thì mọi thứ cũng đã xong.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cha! Bọn con xong rồi. Tiếp tục nào cha.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Được thôi. Hãy cho ta thấy chiến thuật mới nào.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vậy mời cha lên trước.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Vậy thì đỡ này. Kowashi vẫn đỡ đòn đầu tiên nhỉ?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Asahi! Lên đi.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Vẫn là chiến thuật cũ nhỉ? Chẳng phải ta đã bảo...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'nghĩ vậy à nya?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Chiến thuật của tôi là như này. Vẫn sử dụng chiến thuật cũ nhưng lần này Kowashi sau khi đỡ đòn sẽ gọi tên Asahi. Lí do là để cha tôi chú ý đến chi tiết Asahi sẽ nhảy từ phía sau lên. Trong lúc cha đang tập trung vào Asahi thì tôi từ phía sau có thể tiến lên áp sát cha. Đúng như dự đoán cha tôi đã phải nhảy giật lùi lại.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Lần này ta có vẻ mất cảnh giác rồi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vẫn chưa xong đâu cha.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi sau cú nhảy trên cao liền đáp xuống khiên của Kowashi. Cô liền lấy đà để lao tới cha tôi, đồng thời Kowashi cũng dùng lực để đẩy Asahi luôn. Asahi sau đó lao nhanh về phía cha. Cha tôi chưa kịp lấy lại thăng bằng nên sau pha hất ngược Asahi ra phía sau thì đã bị ngã. Kowashi sau đó liền tiến lên dùng khiên và cả người đè cha tôi xuống. Tôi và Asahi chuẩn bị chém cha và có được phát đánh trúng lần đầu. Nhưng...'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: '『Physical Enhancement』'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Đột ngột cha đứng lên, nâng Kowashi lên ném vào tôi. Asahi vung kiếm nhưng cha tôi đã lộn nhào ngược về phía kiếm gỗ cha làm rơi trước đó. Sau khi chộp được thì cha liền lao thẳng về phía chúng tôi và mỗi người đều bị một chém ngay tức khắc.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Không ngờ các con phải ép ta dùng đến Skill để thoát khỏi thế trận vừa nãy.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Không công bằng, bọn con đâu có Skill!'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Nào nào. Khi chiến đấu không ai nhường ai đâu. Thế có tiếp tục không nào?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thế là ba bọn tôi chiến đấu với cha tôi cho đến tầm trưa.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Mọi người tập luyện thế đủ rồi, vào ăn trưa nào.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Các con nghe rồi đó. Vào nhà nghỉ ngơi đi. Ta đi cất con hình nhân gỗ.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya', 'Kowashi', 'Asahi' ],
				content: 'Vâng (nya)!'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Chú diều hâu từ đâu bay tới đậu trên con hình nhân gỗ. Người cha tiến lại gần thấy chú diều hâu kì lạ đứng nhìn ngắm một chút.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ủa? Sao lại có chú diều hâu ở đây vậy? Vùng này chắc chắn không có loại chim này ở đây. Hừm...'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Người cha đang ngắm nhìn thì chú diều hâu đó đã bay đi mất. Nhưng kì lạ thay con hình nhân gỗ đó bị đổ mất nửa phần trên.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'A! Phải mua một con khác rồi. Nhưng thật lạ, vết cắt rất phẳng... Chẳng lẽ do con trai mình? Hay một trong đứa bạn của nó? Mà kệ đi, vào ăn trưa thôi. Mình đói rồi.'
			}
		]
	},
	{
		chapter: 3,
		title: 'Buổi tối của tôi',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Lúc này mọi người đều đã ngồi quanh bàn ăn và đây cũng là lúc cả nhà kể những câu chuyện đã xảy ra xung quanh họ ngày hôm nay. Và cha luôn là người mở đầu câu chuyện.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ta đã được bảo là trong thời gian tới ta sẽ được thăng chức lên làm đội trưởng của một tiểu đội lính đấy.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Thật hả anh? Đây đúng là tin tốt thật mà.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cha tài thật đấy.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Tất nhiên rồi, cha con mà lại. Sắp tới cả nhà sẽ được ăn những món ngon hơn rồi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cả nhà tôi đều rất vui mừng với cơ hội thăng tiến của cha. Như vậy điều kiện sống của gia đình tôi sẽ được cải thiện thêm chút. Tôi đang vừa thưởng thức súp vừa vui cho cha thì đột nhiên cha hỏi tôi một câu khiến cho tôi có linh cảm không lành sau đó. '
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Mà nhân tiện con cũng đã 6 tuổi rồi, ta và mẹ con đang thắc mắc mai sau con sẽ làm gì?'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Đúng rồi đó con, mẹ cũng đang muốn hỏi con.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Làm gì là sao à?'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ý ta là con có dự định vào làm lính không? Ta có thể giúp con vào một vị trí nào đó.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thì ra ý cha mẹ tôi là vậy. Chắc là vì dạo gần đây tôi đã nhờ cha huấn luyện một chút để biết thêm về cách chiến đấu cũng như cách phòng vệ thế nào. Hiện tại cứ trả lời xem sao vậy.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thực ra con không hề có ý định làm lính. Con đang hướng đến làm một mạo hiểm giả.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cha mẹ tôi sau khi xong câu đó thì đã ngạc nhiên. Cha tôi thì đập bàn và lên tiếng.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Khoan đã! Con có biết làm mạo hiểm giả nguy hiểm đến tính mạng thế nào không! Hơn nữa con có thể sẽ rời xa nơi đây.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Vậy là linh cảm của tôi đã đúng. Cha mẹ rất yêu thương tôi nhưng đặc biệt là cha thì có phần hơi bao bọc mình quá. Chắc cha muốn tôi đi lính để cha có thể trông chừng mình đây mà. Nhưng đây là cuộc sống thứ 2 của tôi vậy nên tôi sẽ phải phản kháng lại. Lúc này tôi nghiêm túc nhìn thẳng và cha và dõng dạc nói về hướng đi của mình.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Con biết nó sẽ rất dễ gây nguy hiểm đến tính mạng. Nhưng dù có vậy thì con vẫn muốn được làm mạo hiểm giả và đi phiêu lưu khắp nơi.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Con đúng thật là...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hầy... Tôi biết những cuộc nói chuyện như thế này thì rất khó để thắng được. Nhưng rồi mẹ tôi đã lên tiếng.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Bình tĩnh nào anh. Hãy nhìn kĩ đôi mắt của nó kìa. Mỗi lần nghiêm túc thì nó lại trưng đôi mắt như vậy đó.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cha sau khi nghe xong câu nói đó của mẹ liền dừng nói. Cha nhắm mắt lại, đắn đo suy nghĩ, hít một hơi thật sâu và thở dài.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Con nghiêm túc?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Đây chính là cú chốt hạ của tôi. Cảm ơn mẹ nhiều!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng! Con hoàn toàn nghiêm túc những điều con vừa nói. Xin cha mẹ cho phép con theo con đường đã chọn.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cha với vẻ mặt bất lực khi nghe tôi nên đành chấp nhận.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Thôi được rồi, con nghiêm túc như vậy thì ta cũng đành chấp nhận. Nếu thay đổi ý định thì cứ bảo ta.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cứ ngỡ thế là tạm thời an toàn nhưng rồi tôi vẫn bị chọc.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Nhưng mà hiếm có đứa trẻ nào vẫn còn giữ được bình tĩnh như vậy sau khi bị lớn tiếng như vậy đó.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À thì... Con cũng hơi sợ chứ. Nhưng vì đam mê nên con đã gạt nỗi sợ và bình tĩnh nói với cha mẹ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi vừa nói vừa cười gượng gạo để che giấu đi nỗi lo lắng của mình về việc bị nghi ngờ không giống như một đứa trẻ. '
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Vậy à. Con trai mẹ ngầu quá đi. Giờ đến lượt chuyện của mẹ nè. Hôm nay á...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khi ăn xong bữa tối thì tôi đã đi tắm và rồi quay về phòng ngủ của mình. Tôi nằm lên giường, nhắm mắt lại và nghĩ『Status』. Bảng thông tin đã xuất hiện trước mặt...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: `※ == • == • == • ==『Shuuya <span style="color: grey">Tamada</span>』== • == • == • == ※\n[ Age | 6 ]\n[ Gender | Male ]\n[ Species | Human ]\n[ Jobs ] \n\t<span style="color: grey">『Chef』</span>\n[ Skills ]\n\t<span style="color: grey">『Cooking』<-『Chef』\n\t『???』<-『Chef』\n\t『Slash』<-『Chef』\n\t『Absorb』<-『Chef』\n\t『Heat Resistance』<-『Chef』\n\t『Wind Mastery』\n\t『Silent Barrier』<-『Wind Mastery』\n\t『Floating』<-『Wind Mastery』</span>\n[ Titles ]\n\t<span style="color: grey">『Reincarnator』\n\t『The favor of the Wind』</span>`
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Và đây là các thông tin về tôi. Các phần chữ mờ là do tôi đã ẩn nó nhờ khả năng của bảng thông tin. Để một đứa trẻ có những thứ này trước 10 tuổi là không hề bình thường. Nhất là khi có thể bị ai đó lỡ dùng『Appraisal』lên tôi thì to chuyện mất. Ý tôi là tôi không muốn bị trở thành trung tâm bàn tán, làm thường dân hiện tại là đủ với tôi rồi. Cho đến khi tôi trưởng thành thì tôi sẽ ẩn bớt thông tin đi. Mà thực ra tôi cũng không rõ việc thông tin bị ẩn có qua mắt được『Appraisal』không ý chứ. À tất nhiên nó chỉ ẩn thông tin thôi chứ tôi vẫn có thể sử dụng như thường.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Về cái tên Tamada Shuuya là do tôi đăng ký khi được chuyển sinh vào『Dainisekai』. Nhưng gia đình tôi chỉ là thường dân nên cái họ là Tamada không được nhắc đến. Chỉ những tầng lớp quý tộc mới có họ nên tôi đã ẩn để tránh gặp rắc rối. Còn về phần Jobs, Skills, Titles thì phải ẩn tất cả thông tin vì tôi không muốn bị để ý.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khi xem lại một số thông tin của bản thân thì tôi lại bắt đầu luyện tập sử dụng Skill vào mỗi tối. Cụ thể thì tôi luyện tập dùng các phong kĩ. Danh hiệu『The favor of the Wind』là từ điều ước của tôi, nó cho phép tôi triển khai phong kĩ nhanh và tiêu thụ ít Mana hơn. Hồi đầu khi sử dụng phong kĩ thì tôi đã làm rối tung hết cả căn phòng lên, tất nhiên là không bị phát hiện dùng Skill nhưng đã bị cha mắng cho một trận vì căn phòng bừa bộn. Dần dần tôi đã kiểm soát được và có Skill『Wind Mastery』. Đây là Skill cho phép tôi điều khiển gió theo ý mình muốn ở mức cơ bản. Mục đích của Skill này để tôi có thể định hình gió ở một dạng nhất định, nói dễ hiểu hơn thì phát triển phong kĩ mới từ sự định hình đó. Và hiện tại tôi đã phát triển được hai phong kĩ mới là『Silent Barrier』và『Floating』.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: '『Silent Barrier』thuộc dạng kết giới, ngăn không cho âm thanh lọt ra ngoài hoặc lọt vào trong. Bây giờ tôi đang dùng nó trong phòng ngủ của mình để cha mẹ không nghe thấy. Tất nhiên kết giới này chỉ ngăn âm thanh.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: '『Floating』là kiểm soát gió xung quanh vật khiến nó bay lên và di chuyển đến nơi mình muốn. Nghe có vẻ thú vị đấy nhưng mà về kĩ thuật nó vô cùng khó. Cần điều chỉnh lượng gió thế nào để phù hợp với trọng lượng và đặc điểm của vật để không phá hủy nó. Còn chưa kể đến lúc di chuyển vật cần phải tập trung để kiếm soát tốc độ. Đồng thời còn phải trung hòa gió với môi trường xung quanh như là có một cơn gió khác thổi qua hoặc nhiệt độ, ... Nếu thành thục thì có thể áp dụng lên nhiều vật cùng lúc. Nhưng bây giờ tôi mới chỉ dùng được lên một vật và đang luyện tập với cái ghế gần giường.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Trong khi tôi đang hăng say luyện tập thì cửa bắt đầu mở. Cũng may tôi đang ngồi hướng nhìn về phía cửa nên đã mau chóng hủy hết Skill và nằm xuống giường. À, thì ra đó là mẹ tôi.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Shu, con có ổn không? Nãy mẹ gọi con không có thấy trả lời.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À, nay con chơi vui quá nên là vừa nằm ngủ thiếp đi ạ. Thế mẹ gọi con có chuyện gì ạ?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Xin lỗi mẹ nhiều! Thực ra con luyện dùng Skill cơ. Làm mẹ lo lắng mất rồi.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Mẹ vừa có gọt ít táo đem vào cho con nè.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'A, con cảm ơn, làm mẹ mất công đem vào cho con rồi. Mẹ ăn cùng con không?'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Mẹ ăn phần của mẹ rồi, con cứ ăn đi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'À mà cảm ơn mẹ lúc nói chuyện với cha, mẹ cứu con một phen rồi đó. Con cứ tưởng sẽ thành thảm họa cơ.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Mẹ cũng biết tính cha con mà. Với cả con cũng chưa từng đòi hỏi gì nên mẹ đã rất vui khi con nói vậy. Tất nhiên phải đảm bảo an toàn tính mạng là trên hết nha.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng, con biết rồi ạ.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Thôi giờ mẹ đi ngủ đây, ăn xong thì cứ để đĩa đấy mai rửa cũng được.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vậy thì chúc mẹ ngủ ngon.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Chúc Shu ngủ ngon nha.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mẹ mình hiểu chuyện và quan tâm mình nhiều thật. Lần sau phải chú ý ngồi trò chuyện với mẹ nhiều hơn nữa mới được. Còn giờ thì ăn hết chỗ táo và luyện Skill cho hết chỗ Mana còn lại thôi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khi hết chỗ Mana đó thì tôi đã nằm lăn ra ngủ lập tức. Mục đích để cho bay sạch hết Mana của tôi là gia tăng giới hạn Mana mà tôi có thể có được. Mặc dù tỉ lệ tăng còn chưa đến 1% mà cũng chỉ tăng được thêm 1. Và nhược điểm của việc cho bay sạch Mana là cơ thể sẽ bị đuối sức mà ngất đi. Thế nên luyện tập xong rồi đi ngủ là rất hợp lí. Và đó là mỗi buổi tối của tôi.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Trong không gian ban đêm, chú diều hâu đậu trên cành cây, nhìn qua cửa số thẳng vào phòng Shuuya một hồi lâu, rồi chú tung cánh mà bay đi để lại sợi lông vũ rơi lên gờ cửa sổ...'
			},

		]
	},
	{
		chapter: 2.5,
		title: 'Kết bạn',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Lúc này đang là tầm chiều, mặt trời cũng đã sắp sửa lặn. Một vài đứa trẻ đang chơi ném bóng ở sân, còn tôi thì đang ngồi dưới gốc cây, kể lại chuyện vì sao sáng nay đến muộn với hai đứa bạn của tôi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: '... Và đó là lí do sáng nay mình đến muộn.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Ra là thế. Nếu là mình sẽ hét toáng lên để khiến cho nó sợ.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Còn mình thì sẽ dùng móng vuốt để xua đuổi nó đi nya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Phải rồi, nếu mà thấy đàn chim chắc cậu sẽ đuổi theo nó đi mất.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Ha ha! Phải đó.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Đừng có trêu mình nữa mà nya. Chẳng qua mình không thể kiểm soát được bản thân khi thấy nó thôi nya.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Trong lúc chúng tôi đang trêu Asahi một chút thì từ đâu quả bóng bay lại phía chúng tôi. Với giác quan nhạy bén của Asahi thì cô đã giơ tay ra bắt lấy nó mà không cần phải ngoảnh lại. Rồi một đứa trẻ với vẻ mặt sợ sệt, lo lắng qua chỗ chúng tôi.'
			},
			{
				class: 'villager',
				name: [ 'Đứa trẻ' ],
				content: 'Em xin lỗi! Anh chị có bị sao không ạ? Quả bóng là do em ném qua đây...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Quả bóng này làm sao có thể khiến cho anh chị bị thương được chứ nya. Của em nè nya.'
			},
			{
				class: 'villager',
				name: [ 'Đứa trẻ' ],
				content: 'Cảm ơn chị nhiều và em xin lỗi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cậu giỏi thật ha, Asahi. Mình chả thể nào bắt được mà không cần nhìn đâu.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi sau khi nghe xong thì mặt cô rất tươi, tai dựng đứng lên, còn đuôi thì ngoe nguẩy. Cứ mỗi khi được khen hoặc đang vui thì Asahi sẽ như vậy.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Khen mình nữa đi nya.'
			},
			{
				class: 'villager',
				name: [ 'Đứa trẻ' ],
				content: 'Mà cho em hỏi sao ba anh chị lại trở thành bạn của nhau vậy?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Hừm... tại sao ta?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Để mà nói ra thì... Hừm... chuyện hơi dài...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Mình tự hỏi có nên kể không ta nya?'
			},
			{
				class: 'villager',
				name: [ 'Đứa trẻ' ],
				content: 'Ơ? Đừng làm em tò mò nữa mà. Kể đi anh chị.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Thôi được rồi. Trước tiên là hoàn cảnh của anh thì lúc đó là 1 năm trước, anh đang 5 tuổi...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cha mẹ của Kowashi đã bị sát hại trong một chuyến đi bởi một băng đạo tặc. Mặc dù cậu đã cố bảo vệ mẹ đến cuối cùng nhưng mẹ cậu vẫn không qua khỏi. Và khi cậu sắp bị giết thì có một người lạ mặt với cây thương đã cứu cậu trong gang tấc. Sau đó đưa cậu về sống ở cô nhi viện. Đó là những gì đã xảy ra trước khi tôi gặp Kowashi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Rồi ngày hôm sau đó, tôi cùng mẹ đến cô nhi viện để xem có giúp được gì không thì tôi đã gặp cậu ý đang đứng khoanh tay dựa tường. Lúc đó cậu trông rất khó gần, cảm giác như đang xua đuổi mấy đứa trẻ khác vậy. Tôi liền thử tới bắt chuyện nhưng cậu lại tỏ vẻ đáng sợ như đang muốn bảo đừng làm phiền vậy. Tôi đến bên cạnh nói vài câu nhưng cậu cũng chả phản hồi gì, làm như không nghe thấy tôi vậy. Thế nên là tôi đã rời đi. Nhưng tình cờ lúc đó có một chú diều hâu đang tha một quả táo. Có vẻ như cuống của quả táo không chịu được nữa nên đã đứt. Quả táo rơi xuống mái nhà, đập trúng vào một cái mái ngói khiến nó bị rơi và vị trí rơi lại là nơi tôi đi. Sau khi nghe thấy âm thanh lạ ở phía trên, tôi chưa kịp phản ứng gì thì mình đã bị đẩy ngã. Tôi hơi choáng sau cú ngã đó, nhìn qua cạnh chân mình thì đó là một cái mái ngói. À, thì ra cậu ta vừa cứu mình. Tôi không biết tại sao cậu lại tỏ vẻ như vậy. Tôi đứng dậy, kéo cậu đứng lên và nói chuyện.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nè, vậy là cậu có nghe thấy mình nói nhỉ? Tại sao cậu lại lờ mình vậy?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Chỉ là mình đang có chút suy nghĩ...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vậy có phiền không khi kể cho tớ nghe? Dù sao thì chia sẻ cho người khác cậu sẽ cảm thấy đỡ hơn khi giữ trong lòng đó. Tất nhiên là nếu cậu muốn thôi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Thực ra là về cha mẹ mình...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thế là tôi đã nghe hết câu chuyện của cậu ta và việc tự dằn vặt bản thân ra sao khi không đủ mạnh mẽ để bảo vệ cha mẹ của cậu.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Nè, cậu nghĩ hơi quá rồi. Cậu mới chỉ có 5 tuổi thôi đấy. Việc đứng ra để bảo vệ cũng đã là một hành động can đảm lắm đấy.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nhưng mình không bảo vệ được người thân thì nó còn có ý nghĩa gì chứ...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vậy việc vừa nãy thì sao? Cậu vừa cứu mình một phen đấy. Cho dù hành động này không như việc đứng lên bảo vệ của cậu nhưng cũng đã cứu mình. Và cảm ơn cậu, mình nợ cậu lần này.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Tớ đã cứu cậu nhỉ?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đúng vậy. Mặc dù sẽ mất thời gian để cậu thay đổi suy nghĩ về vụ đó nhưng trước tiên mình tên là Shuuya, cậu muốn làm bạn với mình không?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Mình tên Kowashi, làm bạn của nhau nha và cậu nợ mình một lần đấy.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Quay trở lại thực tại, câu chuyện về tôi và Kowashi đã kể xong và tôi đã bất ngờ...'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: '... Đó là cách bọn anh đã quen... Ế! Sao mọi người lại ngồi quanh đây hết rồi thế này?'
			},
			{
				class: 'villager',
				name: [ 'Đứa trẻ' ],
				content: 'Tại chuyện của mấy anh chị hay quá nên thành ra ai cũng muốn lắng nghe. Và anh Kowashi ngầu quá đi!'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'ngầu thế mà lại. Và Shuuya vẫn còn nợ mình nhỉ? Hihi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Xem nào, nếu không nhầm thì nợ mình đã hết rồi. Hồi trước có cái vụ mà cậu...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'A! Đừng kể nó! Cậu hứa rồi mà! Cậu không còn nợ mình gì nữa đâu!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thế mới đúng chứ. Đừng nghĩ mình quên nha.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Rồi rồi...'
			},
			{
				class: 'villager',
				name: [ 'Đứa trẻ' ],
				content: 'Tiếp theo là đến chuyện về chị Asahi!'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'À ừm... Nè Shuuya, chúng ta có nên kể không nhỉ? Tại vì cứ mỗi lần...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi tuy là tinh nghịch nhưng khi nói về chuyện này thì cô lại cảm thấy có trách nghiệm trong những hành động ở quá khứ. Nhưng...'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Mọi chuyện sẽ ổn thôi, trước sau gì mình cũng định kể nó ra mà nya. Đó là khoảng nửa năm trước, chị đang 5 tuổi...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Gia đình của Asahi đã bị nhóm săn nô lệ đuổi bắt. Nhờ cha mẹ cô cầm chân nhóm săn nên cô ấy đã chạy trốn được vào rừng. Cô đã chạy liên tục không ngừng nghỉ vì trong rừng nhiều ma thú nguy hiểm. May thay cô đã ra khỏi rừng an toàn nhưng sức lực của cô đã đến giới hạn nên là đã gục ngã. Về thông tin cha mẹ của cô thì chưa có gì, theo suy đoán chắc đã bị bắt. May vào lúc đó binh lính tuần tra quanh thành đã bắt gặp cô đang nằm gục ở gần bìa rừng nên đã đưa về cô nhi viện.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cùng hôm đó, tôi đang chơi với Kowashi và vài đứa trẻ ở ngoài sân thì một vài binh lính chạy hối hả đang bế một cô bé thú nhân vào cô nhi viện.'
			},
			{
				class: 'soldiers',
				name: [ 'Binh lính' ],
				content: 'Sơ Celia! Khẩn cấp! Cô xem giúp được gì cho bé này được không?'
			},
			{
				class: 'Celia',
				name: [ 'Celia' ],
				content: 'Chuyện khẩn cấp gì vậy? Ôi! Mau đưa cô bé đó lên giường mau. Tôi sẽ lấy『Lọ thuốc hồi phục』ngay.'
			},
			{
				class: 'soldiers',
				name: [ 'Binh lính' ],
				content: 'Cảm ơn sơ, phiền sơ rồi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Chúng tôi lúc này đứng ở bên ngoài nhìn qua cửa sổ, tò mò chuyện gì xảy ra. Kowashi chưa kịp nghe tôi nói dứt thì cậu đã chạy vào.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Chúng ta thử vào ngó đi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ê khoan đã! Này! Hầy... đừng làm phiền người ốm chứ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thế là tôi cũng chạy vào luôn. Vào đến nơi thì tôi đang thấy sơ Celia đang cho cô bé đó uống thuốc và tình trạng của cô đã đỡ hơn nhiều. Nhưng khi cô có lại ý thức thì cô đã nhảy một phát vào góc tường, móng vuốt nhô ra và cô đang thủ sẵn thế tấn công như đang thể hiện hãy tránh xa ra không thì bị tấn công vậy. Bầu không khí trong căn phòng bỗng nặng nề.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Bình tĩnh nào cậu, mọi người ở đây sẽ không làm hại cậu đâu.'
			},
			{
				class: 'soldiers',
				name: [ 'Binh lính' ],
				content: 'Lùi lại đi nhóc, cô bé này đang ở trạng thái nửa tỉnh nửa mơ nên không phân biệt ai là bạn ai là thù đâu. Nguy hiểm lắm.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Thực ra các chú mặc giáp như thế đứng trước cô bé đang như kia thì cô ý sẽ thấy sợ nhiều hơn đấy.'
			},
			{
				class: 'soldiers',
				name: [ 'Binh lính' ],
				content: 'À...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Trong khi mọi người đang nghĩ cách để khiến cô bé bình tĩnh lại thì Kowashi đã lao thẳng vào chỗ cô ý. '
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Đồ ngốc Kowashi này! Có kế hoạch gì không mà lại lao vào thế hả?'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Cứ tin ở mình.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Kowashi cứ thế là lao tới, cô bé đã tung một đòn và may là Kowashi né được. Sau đó cậu lao thẳng tới ôm cô thật chặt.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Bình tĩnh nào cậu. Mọi người thực sự đều là người tốt. Họ đã cứu cậu đó, bình tĩnh nào. Mọi chuyện sẽ ổn thôi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mặc kệ việc cậu đang bị cô cào nhiều phát sau lưng, vết thương kha khá nhiều thì cậu vẫn ôm cô thật chặt. Và sau một lúc cô đã dừng lại và ngất đi. Dường như cô đã cảm nhận được điều gì đó như là sự chân thành từ Kowashi nên cô đã bình tĩnh lại mà thả lỏng người. Và Kowashi sau đó cũng ngất đi vì quá đau. Chú diều hâu đậu ở cửa sổ chứng kiến mọi việc đã bay đi...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Quay về hiện tại thì Kowashi đang quay người lại và vén áo lên để hiện ra tấm lưng đầy những vết cào của Asahi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Mọi người có thể thấy đây là những vết thương hồi đó. Sau khi anh tỉnh dậy thì thấy Asahi và Shuuya đang ngồi cạnh bên giường. Và lúc đó anh và Shuuya đã làm bạn với Asahi.'
			},
			{
				class: 'villager',
				name: [ 'Đứa trẻ' ],
				content: 'Kowashi đúng là ngầu nhất luôn đó!'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Xin lỗi cậu hồi đó, Kowashi nya. Tất cả là tại mình mà cậu đã bị thương nya...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi khi mà buồn hay cảm thấy hối lỗi những việc sai thì khuôn mặt cô trông rất ủ rũ, đôi tai cụp xuống và đuôi thì không còn ngoe nguẩy. Kowashi thấy thế liền đưa tay xoa đầu Asahi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Asahi, cậu vẫn đang để tâm đến chuyện này à?'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Ừm nya...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Vậy hãy lắng nghe mình này. Những vết thương này không là gì so với việc bảo vệ được cậu. Mình không hề hối hận những hành động của mình.'
			},
			{
				class: 'Asahi',
				name: [ 'Asahi' ],
				content: 'Ừm cảm ơn nya...'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Bên cạnh đó thì mình đã có mục tiêu để bảo vệ đó là những người quan trọng đối với mình. Nhất là Asahi, Shuuya, sơ ... Ủa? Sao cậu lại quay người lại vậy? Mình vừa nói gì khiến cậu bực à? Nè?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Asahi sau khi nghe đến tên mình xuất hiện đầu tiên liền chín đỏ cả mặt. Cô liền quay người đi, ngồi ôm chân, đôi tai thì cụp xuống còn đuôi thì ngoe nguẩy. Và đó là Asahi khi bị dính “đòn chí mạng” từ Kowashi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Này Shuuya, mình vừa nói gì khiến Asahi bực mình à?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Cậu đúng là ngốc mà. Thậm chí mấy đứa trẻ đang ngồi đây còn hiểu được chuyện gì đang xảy ra.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Ơ vậy mình đã nói gì?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Tự tìm hiểu đi Ko-wa-shi.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'Nói mình đi mà!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Ô nhìn thời gian này, sắp đến bữa tối rồi mình phải về ngay đây. Hẹn gặp lại mọi người.'
			},
			{
				class: 'Kowashi',
				name: [ 'Kowashi' ],
				content: 'SHUUYA! MÌNH ĐÃ NÓI GÌ SAI VẬY?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thế là tôi đã chạy một phát đi để mặc Kowashi bối rối không hiểu đã nói gì sai.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Nếu mọi người hỏi tại sao tôi vẫn chơi với “cặp đôi rắc rối” thì đó là vì “cơm rất ngon”. Đúng vậy, lí do chính của tôi đó.'
			}
		]
	},
	{
		chapter: 2,
		title: 'Mọi người và nơi tôi sống',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hiện giờ tôi đang đi trên con đường đất quen thuộc để đến cô nhi viện. Tôi ngẩng đầu, ngắm nhìn bầu trời trong xanh điểm một vài vệt mây bông trắng đang trôi nhè nhẹ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Một chú chim dáng giống diều hâu có lông màu nửa trắng phần chân và lam phần đầu. Nó bay vèo xuyên thủng qua những đám mây rồi đột ngột chuyển hướng lao về phía tôi. Tôi giật mình, đứng lại và thắc mắc tại sao diều hâu lại lao tới hướng của mình. Tôi liền thủ sẵn thế thủ vì dù có chạy nhanh đến thế nào thì tôi cũng chả tránh được tốc độ bay của nó. Diều hâu đang lao tới, tôi nhắm mắt và chấp nhận việc bị thương. Đột ngột tôi cảm nhận được một làn gió dường như rất quen thuộc. Cảm giác này... tôi không thể hiểu... nhưng tôi cảm nhận được. Dường như nó đang thì thầm tôi điều gì đó. Diều hâu lúc này đã rất gần rồi nhưng tôi lại không cảm thấy sát khí của bọn nó. Thế nên tôi đã thả lỏng cơ thể, quan sát nó và đúng như linh cảm của tôi. Diều hâu đã bay qua tôi đem theo làn gió mát mẻ cùng sự tự do. Tôi bất giác quay người nhìn chú bay đi để rồi không còn trong tầm mắt nữa. Tôi đầy hoài nghi về điều vừa xảy ra, liệu nó là một trò chơi khăm của ai đó hay là thử thách sự can đảm dành cho tôi? Giờ tôi chả có chứng cứ gì nên đành gác lại và nhanh tới cô nhi viện.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Có vẻ tôi đã đến kịp lúc trước khi vào học. Cùng lúc đó thì sơ Celia đứng trước cửa đang lắc chuông lắc cầm tay để gọi mấy đứa trẻ từ sân trước vào học. Còn tôi thì đang hơi mệt sau khi chạy nên tôi đã đứng lại một lúc, tay trống đầu gối và thở hổn hển. Vừa bình tâm được một chút thì có hai bàn tay của ai đó đập mạnh vào lưng tôi làm tôi giật cả mình.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'A! Ai vậy? Đau đấy có biết không?'
			},
			{
				class: 'unknown',
				name: [ '???' ],
				content: 'Đáng đời! Làm câu giật mình rồi hả? Bọn tớ đợi cậu mãi để chơi cùng mà không thấy đâu.'
			},
			{
				class: 'unknown',
				name: [ '???' ],
				content: 'Đúng rồi đó nya. Sao hôm nay cậu lại đến muộn vậy nya?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Hai cậu... CÓ BIẾT ĐAU LẮM KHÔNG!'
			},
			{
				class: 'unknown',
				name: [ '???' ],
				content: 'Xin lỗi nha, nhưng tại sao đến muộn vậy?'
			},
			{
				class: 'unknown',
				name: [ '???' ],
				content: 'Xin lỗi xin lỗi nya. Tớ cũng tò mò vì hiếm khi thấy cậu đi muộn như này nya.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Hầy... Chuyện là...'
			},
			{
				class: 'Celia',
				name: [ 'Sơ Celia' ],
				content: 'Ba em kia! Còn đứng ở đấy nói chuyện nữa, đến giờ vào học rồi mau vào đi.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya', '???', '???' ],
				content: 'Vâng (nya)!'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Để tí nữa mình nói cho nha.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cô nhi viện hiện đang được quản lý bởi sơ Celia và đồng thời cũng là người chăm sóc cho các đứa trẻ ở đây. Sơ Celia hơn tuổi mẹ tôi nhiều nên chắc là đã ngoài 40, là một người nhân hậu và ân cần luôn giang tay giúp đỡ những đứa trẻ mồ côi. Cơ sở vật chất ở nơi đây cũng có thể nói là ổn. Có một khu vườn trồng rau củ quả ở phía sau để có thể ăn hoặc mang đi bán. Đôi khi cô nhi viện cũng nhận được một chút quyên góp của người dân xung quanh như là đồ ăn, quần áo, ...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Hiện tại đang có 8 đứa trẻ sống ở đây và tuổi của chúng chênh lệch nhau 1 đến 2 tuổi. Trong đó thì có hai người là bạn thân cùng tuổi với tôi mà sáng nay tôi vừa nói.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Một cậu bạn tên là『Kowashi』. Theo như lời cha tôi kể thì cha mẹ của cậu đã bị sát hại trong một chuyến đi bởi một băng đạo tặc. Mặc dù cậu đã cố bảo vệ mẹ đến cuối cùng nhưng mẹ cậu vẫn không qua khỏi. Và khi cậu sắp bị giết thì có một người lạ mặt với cây thương đã cứu cậu trong gang tấc. Sau đó đưa cậu về sống ở cô nhi viện.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Người bạn còn lại là một cô bạn tên là『Asahi』, chủng loài thú nhân thuộc tộc miêu nhân. Cha tôi kể rằng cô ấy đã chạy trốn khỏi một nhóm săn nô lệ. Cha mẹ của cô thì chưa có thông tin gì, theo suy đoán chắc đã bị bắt. Binh lính tuần tra quanh thành đã bắt gặp cô đang nằm gục ở gần bìa rừng nên đã đưa về đây.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cả hai người họ đều là những người bạn quan trọng của tôi nhưng để mà nói thì họ là “cặp đôi rắc rối”. Đúng vậy, họ rất là tinh nghịch và hay quậy phá. Chắc vì họ vẫn là trẻ con nên hành xử như vậy là đúng với tuổi. Không như mình... Dù sao thì hành động của họ cũng không vượt quá giới hạn và họ biết lúc nào nên dừng lại những hành động nên là cũng không có ai ghét họ cả.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Quay lại việc tại sao tôi lại đến cô nhi viện để học thì trong khuôn sân ở đây có một ngôi nhà dùng để dạy học và sơ Celia là người dạy. Thực ra đây là sự tự nguyện của sơ vì nơi đây không có trường học và chỉ những quý tộc mới có đủ tiền để thuê giáo viên về dạy. Vì là sự tự nguyện nên học phí là không có, thay vào đó là người dân có thể quyên góp nếu muốn. Những thứ tôi được học ở đây gồm cách viết đọc nói, tính toán, tiền tệ ở khu vực này, thị trấn, địa lý và tín ngưỡng nơi đây.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Về cách viết đọc nói thì sau khi chuyển sinh tôi đã có thể hiểu mọi người đang nói gì. Nhưng tôi vẫn phải học lại cách viết và đọc bởi nó không giống với bất cứ ngôn ngữ nào mà tôi biết trước kia.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Về tính toán thì chỉ là các phép cộng hoặc trừ bởi tôi đã từng hỏi sơ về các phép nhân và chia thì sơ bảo không biết. Tôi đã nghĩ chắc thương nhân hoặc những người hay tiếp xúc với các con số sẽ biết các phép này. Hoặc là trình độ nơi đây vẫn còn hơi yếu.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Về tiền tệ ở khu vực này gồm 4 loại đồng, bạc, vàng và bạch kim. Có thể được quy đổi giữa các loại với nhau.'
			},
			{
				class: 'info',
				name: [ 'Shuuya' ],
				content: `100 xu đồng = 1 xu bạc.\n100 xu bạc  = 1 xu vàng.\n100 xu vàng = 1 xu bạch kim.`
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Về thị trấn thì có tên là『Dawn Horizon』. Hiện tại đang được cai trị bởi lãnh chúa có tên là『Tamotsu Konishi』. Từng là một chỉ huy gan dạ và tài ba trên chiến trường, với vị trí hiện tại là một lãnh chúa thì Ngài luôn cố gắng giúp cho thị trấn phát triển. Nhưng có vẻ không phải việc gì cũng thuận theo ý Ngài bởi thị trấn vẫn phải phụ thuộc nhiều vào tài nguyên của quý tộc. Tình hình trị an trong thị trấn khá tương đối ổn định. Thay vào đó thì sự phân chia giàu nghèo một cách rõ ràng giữa thường dân với quý tộc và tất nhiên không phải quý tộc nào cũng xấu. Đồng thời thì nơi đây đa dạng chủng loại cùng sinh sống. Thị trấn được bao bọc bởi tường thành hình sao sáu cánh và cứ giữa mỗi cánh sẽ có tháp tam giác hướng nhìn ra ngoài thành. Đây là một chiến lược phòng thủ rất tốt để ngăn chặn việc bị tấn công. Thị trấn có ba cổng thành gồm cổng phía Nam, Đông Bắc và Tây Bắc được canh gác rất cẩn thận. Ngoài thị trấn thì còn có cảng giao thương hàng hóa lớn đồng thời cũng là nơi di chuyển qua các vùng biển và cảng mang tên『Over Horizon』ở hướng Nam.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Về địa lý thì trị trấn nằm trên thảo nguyên thảm cỏ xanh tươi bạt ngàn. Thị trấn giáp biển hướng từ Đông đến Nam, hướng Bắc giáp rừng có ma thú và Dungeon, hướng Tây là thảo nguyên rộng với đa dạng thực vật cũng có ma thú xuất hiện rải rác. Ở hướng Nam có cảng『Over Horizon』. Ở hướng Đông có bãi biển tuyệt đẹp để có thể vui chơi, nghỉ ngơi thỏa thích tại nơi đó.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cuối cùng là về tín ngưỡng, thị trấn đang tôn thờ một vị thần tên là『Iwao』. Đây là vị thần biểu tượng cho sự cứng rắn hay có thể nói là sự bảo vệ, che chở dành cho người khác. Cụ thể thì họ tin rằng thần Iwao đã luôn bảo vệ và che chở cho nơi đây được những tháng ngày bình yên. Và có những tin đồn rằng tường thành sao 6 cánh của thị trấn chính là lời sấm từ thần Iwao sau khi lãnh chúa đời trước đã cầu nguyện tới vị thần này. Thực hư ra sao thì tôi cũng không rõ nhưng mà có đức tin vào một ai đó như thần Iwao thì cũng không quá tệ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau một khoảng thời gian học và chơi ở cô nhi viện từ sáng đến chiều tối thì tôi đã về nhà. Vừa mở cửa ra thì tôi đã ngửi thấy mùi bánh mì và súp rau củ bay ra từ bếp.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Con đã về nhà rồi thưa mẹ. Ủa cha vẫn chưa về à mẹ?'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Mừng con về nhà. Cha cũng sắp về rồi, con mau vào dọn bàn hộ mẹ với nha.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi nhanh chóng cởi giày và vào giúp mẹ. Và rồi cha tôi về nhà, như thường lệ ổng vẫn luôn ồn ào như thường.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ta đã về rồi đây! Nay ta có tin tốt!'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Mừng anh về, mau cất giáp và vào ăn tối nào.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tin tốt hả? Hừm... Đúng là hôm nay cha tôi vui vẻ hơn mọi khi thật. Thật là tò mò về tin tốt của cha đó mà.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Trong không gian tối tăm của bầu trời đen, một gia đình cùng quây quần bên bàn ăn. Họ thưởng thức bữa ăn cùng nhau và chia sẻ các câu chuyện đã xảy ra ngày hôm nay...'
			}
		]
	},
	{
		chapter: 1,
		title: 'Cuộc sống mới',
		dialogue: [
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Ấm áp quá... Ánh sáng... Tôi đã có thể mở mắt và trước mắt tôi một người phụ nữ tóc dài đang ôm mình? Đây là mẹ mình nhỉ? Cơ thể này thật yếu... Đúng là mình đã được chuyển sinh thật rồi! Căn phòng hơi tối nên mình không nhìn rõ được khuôn mặt.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi thử liếc nhẹ qua căn phòng thì tường, trần nhà và sàn có vẻ chủ yếu đều được làm từ gỗ. Một cơn gió nhẹ thổi qua... tấm rèm bay nhè nhẹ. À thì ra cửa sổ đang mở. Trời tiết tối nay có vẻ sẽ lạnh đây nhưng hiện tại tôi đang được ôm nên khá là ấm áp. Nhân tiện thì cửa sổ cũng được làm từ kính kết hợp với khung làm từ gỗ. Còn căn phòng thì hơi nhỏ nên đồ đạc cũng không có gì nhiều ngoài một cái giường sát tường cạnh cửa sổ, một tủ nhỏ cạnh giường, một bộ bàn ghế gồm một bàn hai ghế và một tủ quần áo.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mà khoan! Tôi đã mải nghĩ quá rồi nên không để ý đến những tiếng nói xung quanh, phải lắng nghe mới được. Lúc này một người đàn ông đang vừa khóc vừa vui mừng.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Người đàn ông' ],
				content: 'Cảm ơn sơ Celia rất nhiều đã giúp vợ tôi Sara sinh ra đứa con của chúng tôi an toàn. Tôi thực sự cảm ơn sơ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sơ Celia mỉm cười nhẹ trước sự trân thành của người đàn ông đó.'
			},
			{
				class: 'Celia',
				name: [ 'Sơ Celia' ],
				content: 'Không việc gì phải cảm ơn tôi đâu, anh Haruka. Đỡ đẻ là nghĩa vụ của chúng tôi ý mà. Ngược lại tôi còn phải cảm ơn vợ anh vì luôn giúp đỡ bên cô nhi viện chứ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Có vẻ người phụ nữ đang ôm tôi đúng là mẹ rồi và tên là『Sara』, còn người đàn ông kia là cha mình tên『Haruka』. Và bà cô sơ kia tên là『Celia』, trông như đó là người quen của cha mẹ mình. Trong khi đó, Sơ Celia dường như đang lo lắng điều gì đó.'
			},
			{
				class: 'Celia',
				name: [ 'Sơ Celia' ],
				content: 'Nhưng thật kì lạ là đứa trẻ nó không khóc. Đây có lẽ là trường hợp đầu tiên mà tôi gặp phải sau khi đỡ đẻ rất nhiều. Liệu đứa trẻ có ổn không nhỉ?'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi đã giật mình sau khi nghe xong câu đó. Đừng nói điều rủi như thế chứ sơ... Không ổn rồi! Đúng thật là kì lạ khi một đứa trẻ mới sinh ra mà lại không khóc. Chắc tôi phải giả khóc thôi... mặc dù nó sẽ rất là kì lạ... Hầy... có lí do gì khiến cho mình có thể giả khóc được không đây... Người cha cũng bối rối sau khi nghe xong điều đó từ sơ và đã nói to.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'CON TÔI BỊ VẤN ĐỀ GÌ Ư? CON ƠI! CON ĐỪNG BỊ GÌ NHÉ! CON LÀ ĐỨA CON ĐẦU TIÊN MÀ TA CÓ!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Không ngờ tôi có người cha ồn ào như vậy, đang ban đêm đấy nói nhỏ lại thôi chứ cha. Tôi còn đang bận phải nghĩ kế hoạch giả... mà khoan đã, đây là lúc thích hợp để giả khóc mà. Tôi đã giãy giụa và giả khóc.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'OE OE OE!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mẹ tôi đã giật mình và vỗ về để tôi nín.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Nhìn này, con khóc mất rồi. Anh à, anh nên nói nhỏ lại, xem anh vừa khiến cho con khóc rồi này. Nín đi con yêu, mẹ vừa mắng cha con rồi.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cha thấy hối lỗi liền lấy tay bịt miệng và nói nhỏ.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Ơ... Anh xin lỗi em! Con ơi nín đi con, cha sẽ không nói to nữa đâu...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sơ Celia đã suýt bật cười, thay vào đó là mỉm cười rồi cất gọn đồ đạc để chuẩn bị ra về.'
			},
			{
				class: 'Celia',
				name: [ 'Sơ Celia' ],
				content: 'Ái chà, có vẻ đứa trẻ khóc rồi. Chắc là nó không bị gì đâu, mọi người không cần phải lo lắng nữa. Thôi tôi xin phép về.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi lúc này đã thấy nhẹ cả người vì vở kịch bé nhỏ đã thành công.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Vậy hẹn gặp lại sơ. Xin lỗi vì tôi không tiễn được. Anh, trời tối rồi, anh đưa sơ về nhà hộ em nha.'
			},
			{
				class: 'Celia',
				name: [ 'Sơ Celia' ],
				content: 'A, không cần đưa tôi về nhà đâu, chỉ cần tiễn tôi ra cửa là được rồi. Vợ anh vừa mới sinh nên có thể cơ thể sẽ còn rất yếu, anh nên ở lại.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Vậy xin thứ lỗi! Hẹn gặp lại sơ.'
			},
			{
				class: 'Celia',
				name: [ 'Sơ Celia' ],
				content: 'Ừm, hẹn gặp lại cả nhà.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Thế là cha và sơ đã rời khỏi phòng và tiễn ra trước cửa nhà. Tôi cảm nhận được cha mẹ và sơ Celia đều là người tốt cả. Tôi cảm thấy thật tuyệt khi được chuyển sinh đến nơi đây. Tôi cảm thấy mệt mỏi quá... Chắc có lẽ vì cơ thể mới này... Rồi cha quay lại.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Sơ Celia đi...'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mẹ tôi thấy tôi đang ngủ nên liền đưa ngón tay lên môi và nói nhỏ với cha.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Suỵt... Con nó đang ngủ anh à.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Cha tôi thấy vậy nên đã nhẹ nhàng đi đến bên giường và ngồi cạnh mẹ tôi, nói nhỏ.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Khuôn mặt thằng bé trông thật giống em.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mẹ mỉm cười nhẹ và đáp lại.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Thằng bé cũng giống anh nữa mà, nó có đôi mắt lam tuyệt đẹp như của anh vậy.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Cha' ],
				content: 'Thật tuyệt khi chúng ta cũng đã có con.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Mẹ tôi vẫn mỉm cười và gật đầu một cái nhẹ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Và thế là 6 năm đã trôi qua...'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Shu! Bữa sáng xong rồi. Ra ăn sáng đi con.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng! Con ra liền!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi vừa đi vừa nghĩ vu vơ... Tôi hiện tại đang 6 tuổi và đồng nghĩa với việc đã được 6 năm kể từ khi tôi đến『Dainisekai』. Hiện tại tên tôi là『Shuuya』.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Theo lời cha thì cha tên là『Haruka』, cha có đôi mắt màu lam, 26 tuổi, là một người lính thường làm canh gác ở cổng hướng Nam, đến bữa tối mới có thể về nhà.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Còn mẹ tên là『Sara』, mẹ có mái tóc dài lam, 24 tuổi, là thợ may vá và cũng là nội trợ của gia đình. Khi rảnh thường hay giúp đỡ bên Cô nhi viện do sơ Celia hiện đang quản lý.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Nguồn thu nhập chính đều đến từ cha. Có thể nói gia đình tôi có đủ để sống qua ngày, theo lời cha nói là vậy. Tôi đang ở thị trấn có tên gọi là『Dawn Horizon』. Và tất cả thông tin tôi biết chỉ có đến vậy. Tiện thể thì tôi có đôi mắt lam của cha và mái tóc màu lam của mẹ.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Đang mải nghĩ thì có mùi trứng thoang thoảng từ căn bếp khiến cho bụng tôi kêu réo lên.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Chào buổi sáng Shu. Mẹ có làm món trứng con thích này.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Chào buổi sáng mẹ ạ. Cảm ơn đã làm món trứng con thích. Mời cả nhà ăn sáng!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi cảm giác hơi không thoải mái khi tỏ vẻ trẻ con so với tuổi thật của mình ở thế giới trước. Nó thật là kì lạ nhưng đành chịu thôi, giờ tôi mới chỉ có 6 tuổi. Món trứng mình đang ăn tuy không được cuộn nhưng nó ngon thật, dù sao mình cũng thích ăn trứng đó mà. Sau khi cả hai mẹ con ăn xong thì mẹ nhắc tôi.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Hình như hôm nay con sẽ đến Cô nhi viện để học nhỉ?'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Vâng đúng rồi ạ! À, mẹ ăn xong cứ để đấy để con dọn cho.'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Con mẹ ngoan quá đi à. Không có nhiều đứa trẻ như con ở độ tuổi này đâu. Mẹ cảm giác con không đúng với tuổi thật vậy. Có cảm giác khá là chững chạc đó. Thôi mẹ đi may vá đây.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi sau khi nghe xong câu đó cũng hơi nhột. Tôi cảm giác sự che giấu về bản thân mình không còn được bao lâu. Nhưng được mẹ khen như vậy tôi cũng thấy thích.'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Sau khi tôi rửa bát xong thì liền chạy ra trước cửa và nói to.'
			},
			{
				class: 'Shuuya',
				name: [ 'Shuuya' ],
				content: 'Con đi đây thưa mẹ!'
			},
			{
				class: 'ShuuyaMother',
				name: [ 'Mẹ' ],
				content: 'Đi đường cẩn thận nha con!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi nắm lấy tay nắm cửa, cánh cửa gỗ kêu kót két được mở ra, ánh nắng chiếu rọi vào nhà... Và tôi đã bước chân qua cánh cửa đó với một tâm trạng không biết điều gì tuyệt vời sẽ xảy ra...'
			}

		]
	},
	{
		chapter: 0,
		title: 'Văn phòng Re:Life',
		dialogue: [
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Lạnh quá... Tôi muốn ôm lấy bản thân để bớt lạnh nhưng tại sao tay mình không cử động được? Tôi nghe thấy có tiếng người nói gì đó rất lớn... Mọi người đang nói gì vậy? Tôi không thể nghe rõ... mệt quá... muốn nhắm mắt... muốn ngủ... Tôi có thể cảm nhận được nhịp đập của tim mình đang ngày một yếu dần... Và rồi tôi không còn cảm nhận được nhịp đập của tim mình nữa...'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Tôi giật bắn mình, ngồi dậy, mắt nhắm mắt mở nhìn mọi thứ xung quanh nhưng đều là một màu trắng xóa. Tôi bối rối đứng dậy, quay qua quay lại nhìn ngang nhìn dọc thì thấy dưới chân là một con đường trắng đục. Tôi đang không thể nào hình dung được tình hình hiện tại của mình là gì nên để tìm câu trả lời thì chắc chỉ còn cách đi trên con đường tôi thấy. Tôi vừa đi vừa nghĩ vu vơ cố hiểu tình hình hiện tại nhưng chả thể nào nghĩ được gì. Thậm chí tôi cũng không thể nhớ chuyện gì đã xảy ra, rồi tôi nghe thấy tiếng gõ bàn phím. Tôi sau nghe thấy đã chạy thật nhanh để đến được hướng đó. Và rồi đột nhiên tôi xuất hiện trong một căn phòng trông như là văn phòng làm việc. Một chàng trai lạ đang ngồi gõ bàn phím ở bàn làm việc nên tôi đã tiến lại gần.'
			},
			{
				class: 'Tamada',
				name: [ 'Chàng trai lạ' ],
				content: 'Xin chào bạn, có vẻ như bạn đang bối rối đây là đâu nhỉ?'
			},
			{
				class: 'Hg',
				name: [ 'Hg' ],
				content: 'là ai và đây là đâu?'
			},
			{
				class: 'Tamada',
				name: [ 'Chàng trai lạ' ],
				content: 'Tôi là nhân viên Tamada Shuuya, họ là Tamada và tên là Shuuya. Chào mừng đến với văn phòng Re:Life. Bạn có thể gọi tôi là Tamada'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Tôi lúc này đang cực kì bối rối. Nhân viên? Văn phòng? Re:Life là văn phòng gì cơ??? '
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Nói ngắn gọn thì bạn vừa qua đời nhưng vì tuổi bạn chưa đến 30 nên đã được xuất hiện tại đây.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Tôi đã giật mình sau khi nghe câu đấy, chắc là anh ta đang đùa thôi nhỉ? Tôi định đáp lại thì đột nhiên đầu đau như búa bổ vậy. Những dòng kí ức trước khi tôi chết bỗng xuất hiện... Lúc này tôi đang trên đường đi học về, trời thì mưa tầm tã. Có vẻ như lúc đó có một chiếc xe máy băng qua đường và hình như không thấy mình nên đã xảy ra tai nạn. Tôi và người điều khiển xe máy đó đều bị ngã nhưng vết thương có vẻ không quá nghiêm trọng. Nhưng khi tôi đang gượng đứng dậy thì một chiếc xe máy đi cùng hướng đi của tôi có vẻ không thấy tai nạn phía trước nên đã không phanh kịp và tông thẳng vào mình. Cú đâm này khiến tôi bị văng đi một đoạn ngắn, mình đã không cử động được và sau đó mất dần ý thức. Cuộc đời tôi dừng ở mốc 20... Tôi đã rất sốc phải chấp nhận hiện thực và rồi thở dài.'
			},
			{
				class: 'Hg',
				name: [ 'Hg' ],
				content: 'Vậy tôi đã không còn sống nữa thật rồi?'
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Đúng là vậy nhưng văn phòng chúng tôi sẽ cho bạn cuộc đời thứ 2. Đó sẽ là cuộc sống ở thế giới khác có tên là『Dainisekai』có nghĩa là “thế giới thứ 2”.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Tôi đã rất ngạc nhiên khi nghe điều đó và đã thốt lên.'
			},
			{
				class: 'Hg',
				name: [ 'Hg' ],
				content: 'Ồ! Tôi cứ tưởng cái thứ gọi là thế giới khác chỉ là giả tưởng thôi chứ. Bất ngờ thật, tôi còn tưởng mình sẽ sống lại ở thế giới cũ chứ.'
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Thật ra chúng tôi có thể đưa bạn về thế giới cũ nhưng một vài điều luật đã thay đổi nên chúng tôi không thể làm điều đó.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Tôi đã quên mất rằng mình còn đang đứng ở cái nơi đáng lẽ ra không tồn tại như này mà. Tất nhiên là họ có thể làm được những thứ như vậy rồi.'
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Thế giới mới của bạn sẽ có kiếm, ma pháp và nhiều chủng loại đa dạng đậm chất Fantasy. Bạn sẽ có một bảng Status để xem các thông tin cá nhân như tên, tuổi, giới tính, chủng loại, Skill, danh hiệu, ... Đặc biệt, bạn sẽ có thể dùng kho đồ khi bạn 10 tuổi nhưng tối đa chỉ có 9 ô chứa. Bạn chỉ cần nghĩ về『Status』trong đầu là bảng Status sẽ xuất hiện trước mặt bạn.'
			},
			{
				class: 'Hg',
				name: [ 'Hg' ],
				content: 'Thế giới đó đúng là đậm chất Fantasy thật ha.'
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Chúng tôi sẽ cho bạn lựa chọn giới tính; chủng loại như là Human, Elf, Drawf, ... kèm mô tả; một nghề nghiệp như là Warrior, Archer, Farmer, ... kèm mô tả và 3 điều ước.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Tôi đã vô cùng thích thú khi có thể tùy chỉnh cơ thể và đặc tính. Mọi thứ đang dần trở nên thú vị.'
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Về điều ước, bạn có thể ước bất kì thứ gì nhưng vẫn phải trong sự suy xét của tôi.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Tôi đã cười thầm và nghĩ rằng có thể ước thêm nhiều điều ước nhưng...'
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Tất nhiên là không được ước có thêm điều ước hay những thứ để có thêm điều ước.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Và đương nhiên cái ý nghĩ lúc đó của tôi đã vụt tắt. Tất nhiên là không thể có chuyện có thêm điều ước rồi.'
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Vì là Fantasy nên sẽ có Skill, bạn có thể ước có thêm Skill. Hoặc là ước có Item nhưng nó sẽ ở trong Inventory của bạn hoặc là bất cứ cái gì bạn có thể nghĩ ra như là có đồng minh, danh hiệu, khu vực, ... Bạn không thể ước điều gì có thể gây ảnh hưởng lên những người chuyển sinh, ảnh hưởng quá lớn lên『Dainisekai』và ảnh hưởng lên văn phòng Re:Life. Tôi sẽ xem xét kĩ lưỡng điều ước nên chỉ cần bạn có trí tưởng tượng và suy tính là được.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Tôi gãi đầu, trong đầu tôi đang tính toán khá nhiều thứ bởi chỉ có 3 điều ước. Nó sẽ ảnh hưởng lớn đến cuộc sống thứ 2 nên cần phải nghĩ hợp lí mới được.'
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Cuối cùng là về một chút lưu ý. Ký ức của thế giới cũ sẽ được giữ lại nên hãy yên tâm bạn vẫn là bạn. Bạn sẽ bắt đầu từ trẻ sơ sinh. Ở『Dainisekai』không tồn tại và sẽ không tồn tại thứ có thể ban điều ước. Nếu bạn chết hẳn thì là hết, không có chuyện sống lại.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Làm lại từ đầu theo nghĩa đen luôn á! Sắp tới sẽ mệt đây nhưng được sống lại cũng không quá tệ... Chắc vậy... '
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Vậy bạn có câu hỏi gì không? Xin hãy cân nhắc và hỏi tôi bất cứ câu hỏi gì. Càng hỏi nhiều thì bạn sẽ biết nhiều về thế giới bạn sẽ tới.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Sau khi Tamada dừng nói thì tôi đã hỏi kha khá câu và tôi biết thêm được một vài điều sau.'
			},
			{
				class: 'info',
				name: [ 'Hg' ],
				content: '『Dainisekai』quy tụ mọi người chuyển sinh nhưng có thể không chung 1 lục địa hoặc 1 nơi. Và đây là đợt chuyển sinh đầu tiên.'
			},
			{
				class: 'info',
				name: [ 'Hg' ],
				content: 'Thời gian ở『Dainisekai』giống với thế giới trước nơi tôi từng tồn tại. Và hiện tại đang năm 2023.'
			},
			{
				class: 'info',
				name: [ 'Hg' ],
				content: 'Ở trung tâm của thế giới sẽ có một cái cột trụ ánh sáng, thế giới là dạng phẳng trải dài vô tận mọi hướng, địa hình đa dạng. Cũng có vũ trụ nhưng nhìn từ trên xuống thì địa hình sẽ dài vô tận như đã nói vì đây không phải là trái đất hay là địa cầu.'
			},
			{
				class: 'info',
				name: [ 'Hg' ],
				content: 'Có Dimension, Dungeon, làng, rừng, núi, biển, chủng loại khác nhau, chế độ cai trị, ...'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Đó là tất cả thông tin mà tôi có thể nắm bắt. À mà tôi thuộc nhóm những người chuyển sinh đầu tiên. Rồi tôi hoàn thành hồ sơ và sau một khoảng thời gian...'
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Và cuối cùng, xin hãy đặt tên cho bản thân khi đến『Dainisekai』. Nếu bạn không nghĩ được ra thì có thể để trống và cha mẹ của bạn sẽ là người đặt tên.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Việc đặt tên luôn là phần khó nhất trong tất thảy. Nghĩ điều ước đủ khó rồi nhưng đặt tên còn khó hơn nữa chứ. Không cẩn thận thì cái tên về sau sẽ thành trò đùa không thể nào quên được... Quên? Một ý nghĩ nảy lên trong đầu tôi khiến tôi phải nhìn thẳng vào Tamada.'
			},
			{
				class: 'Hg',
				name: [ 'Hg' ],
				content: 'Tên tôi sẽ là『Tamada Shuuya』bởi vì anh có thể là người tôi cho là đáng tin cậy cuối cùng mà tôi có thể gặp. Đồng thời trí nhớ tôi hơi kém nên lấy tên như này thì tôi sẽ không thể nào quên được anh.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Tamada đã mỉm cười nhẹ sau khi nghe tôi nói câu đó.'
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Tôi vô cùng cảm kích. Vậy bạn muốn xác nhận cái tên『Tamada Shuuya』?'
			},
			{
				class: 'Hg',
				name: [ 'Hg' ],
				content: 'Tôi xin xác nhận cái tên đó.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Từ giờ cái tên『Hg』sẽ chỉ còn là quá khứ mà chỉ tôi và văn phòng này biết cho đến ngày ai đó biết được bí mật của tôi.'
			},
			{
				class: 'Tamada',
				name: [ 'Tamada' ],
				content: 'Vậy thì thông tin của bạn đã được xác nhận xong. Chào mừng đến với『Dainisekai』, chúng ta có thể sẽ còn gặp lại nhau.'
			},
			{
				class: 'think',
				name: [ 'Hg' ],
				content: 'Vừa dứt lời đó xong thì mọi thứ xung quanh tối dần. Tôi đang rơi trong khoảng không vô định. Vậy là tôi đang chuyển sinh nhỉ? Tự nhiên tôi không còn cử động được cơ thể lần nữa nhưng lần này tôi cảm nhận được một thứ gì đó thật là ấm áp và an toàn... Rồi một giọng nói cất lên.'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Người đàn ông' ],
				content: 'Nó là con trai!!! Con trai đó!!!'
			},
			{
				class: 'think',
				name: [ 'Shuuya' ],
				content: 'Tôi đang rất bối rối và không biết giọng đó là của ai. Tôi cố mở mắt...'
			},
			{
				class: 'ShuuyaFather',
				name: [ 'Người đàn ông' ],
				content: 'Được sinh ra trong đêm thu, ta sẽ đặt tên con là『Shuuya』.'
			},
			{
				class: 'think',
				name: [ '???' ],
				content: 'Trong không gian tối đen của mùa thu, ánh sáng yếu ớt lấp ló từ một ngôi nhà, một sinh linh mới đã ra đời... '
			}
		]
	}
]