
import { TranslationMessages } from 'ra-core';

const vietnameseMessages: TranslationMessages = {
    resources: {
        posts: {
            name: "Bài viết",
            fields: {
                userId: "Tên",
                title: "Tiêu đề",
                body: "Nội dung",
                date: "Ngày",
            },
        },

        users: {
            name: "Người dùng",
            fields: {
                search: "Tìm kiếm",
                id: "Mã ID",
                name: "Tên người dùng",
                username: "Tên",
                email: "Email",
                role: "Vai trò",
                phone: "SĐT",
                address: {
                    street: "Địa chỉ" },
                company: {
                    name: "Tên công ty"},
                date:"Ngày",
            },
        },
    },
    ra: {    
        action: {
            add_filter: 'Thêm bộ lọc',
            add: 'Thêm',
            back: 'Quay lại',
            bulk_actions: '%{smart_count} mục đã chọn',
            cancel: 'Hủy',
            clear_array_input: 'Xóa danh sách',
            clear_input_value: 'Xóa giá trị',
            clone: 'Nhân bản',
            confirm: 'Xác nhận',
            create: 'Tạo',
            create_item: 'Tạo %{item}',
            delete: 'Xóa',
            edit: 'Chỉnh sửa',
            export: 'Xuất',
            list: 'Danh sách',
            refresh: 'Làm mới',
            remove_filter: 'Xóa bộ lọc này',
            remove_all_filters: 'Xóa tất cả bộ lọc',
            remove: 'Xóa',
            save: 'Lưu',
            search: 'Tìm kiếm',
            select_all: 'Chọn tất cả',
            select_row: 'Chọn hàng này',
            select_all_button: 'Chọn tất cả',
            show: 'Hiển thị',
            sort: 'Sắp xếp',
            undo: 'Hoàn tác',
            unselect: 'Bỏ chọn',
            expand: 'Mở rộng',
            close: 'Đóng',
            open_menu: 'Mở menu',
            close_menu: 'Đóng menu',
            update: 'Cập nhật',
            move_up: 'Di chuyển lên',
            move_down: 'Di chuyển xuống',
            open: 'Mở',
            toggle_theme: 'Chuyển đổi chế độ sáng/tối',
            select_columns: 'Cột',
            update_application: 'Tải lại ứng dụng',
        },
        boolean: {
            true: 'Có',
            false: 'Không',
            null: ' ',
        },
        page: {
            create: 'Tạo %{name}',
            dashboard: 'Bảng điều khiển',
            edit: '%{name} %{recordRepresentation}',
            error: 'Có lỗi xảy ra',
            list: '%{name}',
            loading: 'Đang tải',
            not_found: 'Không tìm thấy',
            show: '%{name} %{recordRepresentation}',
            empty: 'Chưa có %{name}.',
            invite: 'Bạn có muốn thêm mới không?',
            access_denied: 'Truy cập bị từ chối',
            authentication_error: 'Lỗi xác thực',
        },
        input: {
            file: {
                upload_several: 'Kéo thả vài tệp để tải lên hoặc bấm để chọn.',
                upload_single: 'Kéo thả một tệp để tải lên hoặc bấm để chọn.',
            },
            image: {
                upload_several: 'Kéo thả vài ảnh để tải lên hoặc bấm để chọn.',
                upload_single: 'Kéo thả một ảnh để tải lên hoặc bấm để chọn.',
            },
            references: {
                all_missing: 'Không tìm thấy dữ liệu tham chiếu.',
                many_missing: 'Ít nhất một tham chiếu không còn tồn tại.',
                single_missing: 'Tham chiếu không còn tồn tại.',
            },
            password: {
                toggle_visible: 'Ẩn mật khẩu',
                toggle_hidden: 'Hiện mật khẩu',
            },
        },
        message: {
            about: 'Giới thiệu',
            access_denied: 'Bạn không có quyền truy cập trang này',
            are_you_sure: 'Bạn có chắc không?',
            authentication_error: 'Lỗi xác thực',
            auth_error: 'Có lỗi khi xác thực token',
            bulk_delete_content:
                'Bạn có chắc muốn xóa %{name} này không? |||| Bạn có chắc muốn xóa %{smart_count} mục này không?',
            bulk_delete_title:
                'Xóa %{name} |||| Xóa %{smart_count} %{name}',
            bulk_update_content:
                'Bạn có chắc muốn cập nhật %{name} này không? |||| Bạn có chắc muốn cập nhật %{smart_count} mục này không?',
            bulk_update_title:
                'Cập nhật %{name} |||| Cập nhật %{smart_count} %{name}',
            clear_array_input: 'Bạn có chắc muốn xóa toàn bộ danh sách?',
            delete_content: 'Bạn có chắc muốn xóa mục này không?',
            delete_title: 'Xóa %{name} #%{id}',
            details: 'Chi tiết',
            error: 'Có lỗi xảy ra, yêu cầu không thể hoàn thành.',
            invalid_form: 'Biểu mẫu không hợp lệ. Vui lòng kiểm tra lỗi.',
            loading: 'Vui lòng đợi',
            no: 'Không',
            not_found: 'Bạn đã nhập sai URL hoặc liên kết không đúng.',
            select_all_limit_reached:
                'Có quá nhiều mục để chọn tất cả. Chỉ chọn được %{max} mục đầu tiên.',
            unsaved_changes:
                'Một số thay đổi của bạn chưa được lưu. Bạn có chắc muốn bỏ qua?',
            yes: 'Có',
            placeholder_data_warning: 'Lỗi mạng: Không thể làm mới dữ liệu.',
        },
        
        navigation: {
            clear_filters: 'Xóa bộ lọc',
            no_results: 'Không tìm thấy %{name}',
            no_filtered_results: 'Không có %{name} phù hợp với bộ lọc hiện tại.',
            no_more_results: 'Số trang %{page} vượt quá giới hạn. Thử trang trước.',
            page_out_of_boundaries: 'Số trang %{page} nằm ngoài phạm vi cho phép',
            page_out_from_end: 'Không thể đi sau trang cuối',
            page_out_from_begin: 'Không thể đi trước trang đầu tiên',
            page_range_info: '%{offsetBegin}-%{offsetEnd} của %{total}',
            partial_page_range_info: '%{offsetBegin}-%{offsetEnd} của hơn %{offsetEnd}',
            current_page: 'Trang %{page}',
            page: 'Đi đến trang %{page}',
            first: 'Trang đầu',
            last: 'Trang cuối',
            next: 'Trang tiếp theo',
            previous: 'Trang trước',
            page_rows_per_page: 'Số dòng mỗi trang:',
            skip_nav: 'Bỏ qua điều hướng',
        },
        
        auth: {
            auth_check_error: 'Vui lòng đăng nhập để tiếp tục',
            user_menu: 'Hồ sơ',
            username: 'Tên đăng nhập',
            password: 'Mật khẩu',
            email: 'Email',
            sign_in: 'Đăng nhập',
            sign_in_error: 'Đăng nhập thất bại, vui lòng thử lại',
            logout: 'Đăng xuất',
        },
        notification: {
            updated: 'Đã cập nhật thành công |||| Đã cập nhật %{smart_count} mục',
            created: 'Đã tạo thành công',
            deleted: 'Đã xóa thành công |||| Đã xóa %{smart_count} mục',
            bad_item: 'Mục không hợp lệ',
            item_doesnt_exist: 'Mục không tồn tại',
            http_error: 'Lỗi khi giao tiếp với máy chủ',
            data_provider_error: 'Lỗi từ nhà cung cấp dữ liệu. Xem console để biết thêm chi tiết.',
            i18n_error: 'Không thể tải bản dịch cho ngôn ngữ đã chọn',
            canceled: 'Hành động đã bị hủy',
            logged_out: 'Phiên của bạn đã kết thúc, vui lòng đăng nhập lại.',
            not_authorized: 'Bạn không có quyền truy cập tài nguyên này.',
            application_update_available: 'Có phiên bản mới của ứng dụng.',
        },
        sort: {
            sort_by: 'Sắp xếp theo %{field}',
            ASC: 'Tăng dần',
            DESC: 'Giảm dần',
        },
        saved_queries: {
            label: 'Truy vấn đã lưu',
            query_name: 'Tên truy vấn',
            new_label: 'Truy vấn mới',
            new_dialog_title: 'Tạo truy vấn mới',
            remove_label: 'Xóa truy vấn này',
            remove_label_with_name: 'Xóa truy vấn "%{name}"',
            remove_dialog_title: 'Xác nhận xóa',
            remove_message: 'Bạn có chắc chắn muốn xóa truy vấn này?',
            help: 'Lọc danh sách và lưu truy vấn này để sử dụng sau',
        },
        
        
        validation: {
            required: 'Bắt buộc',
            minLength: 'Phải có ít nhất %{min} ký tự',
            maxLength: 'Tối đa %{max} ký tự',
            minValue: 'Giá trị tối thiểu là %{min}',
            maxValue: 'Giá trị tối đa là %{max}',
            number: 'Phải là số',
            email: 'Email không hợp lệ',
            unique: 'Phải là duy nhất',
            oneOf: 'Giá trị phải là một trong: %{options}',
            regex: 'Giá trị không đúng định dạng (phải khớp với mẫu: %{pattern})',
        },

        configurable: {
            customize: 'Tùy chỉnh',
            configureMode: 'Cấu hình trang này',
            inspector: {
                title: 'Bảng kiểm tra',
                content: 'Di chuột qua các thành phần giao diện để cấu hình chúng',
                reset: 'Đặt lại cài đặt',
                hideAll: 'Ẩn tất cả',
                showAll: 'Hiển thị tất cả',
            },
            Datagrid: {
                title: 'Bảng dữ liệu',
                unlabeled: 'Cột không có nhãn #%{column}',
            },
            SimpleForm: {
                title: 'Biểu mẫu',
                unlabeled: 'Trường nhập không có nhãn #%{input}',
            },
            SimpleList: {
                title: 'Danh sách',
                primaryText: 'Văn bản chính',
                secondaryText: 'Văn bản phụ',
                tertiaryText: 'Văn bản thứ ba',
            },
        },
        
    },
};

export default vietnameseMessages;
