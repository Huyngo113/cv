const PERFIX_PRINT_THIS = "/cv/";
const TIME_ALERT = 2000;
const INFOR_PRODUCT_PRIVATE_VN = "Sản phẩm chỉ được sử dụng trong nội bộ.";
const INFOR_PRODUCT_PRIVATE_EN = "Product is for internal use only."; 
const INFOR_CV_VN = {
    imgCV: 'public/img-cv.jpg',
    name: 'Ngô Quang Huy',
    job: 'Software Developer',
    contacts: [
        {
            icon: '<i class="fas fa-mobile-alt"></i>',
            value: '0978960010',
            href: 'tel:0978960010'
        },
        {
            icon: '<i class="far fa-envelope"></i>',
            value: 'huyngozoro@gmail.com',
            href: 'mailto:huyngozoro@gmail.com'
        },
        {
            icon: '<i class="fab fa-facebook-square"></i>',
            value: 'facebook.com/quanghuy.ngo.142',
            href: 'https://www.facebook.com/quanghuy.ngo.142'
        },
        {
            icon: '<i class="fab fa-github"></i>',
            value: 'github.com/Huyngo113',
            href: 'https://github.com/Huyngo113'
        }
    ],
    skills: [
        {
            icon: '<i class="fab fa-html5"></i>',
            value: 'HTML'
        },
        {
            icon: '<i class="fab fa-css3-alt"></i>',
            value: 'CSS'
        },
        {
            icon: '<i class="fab fa-js"></i>',
            value: 'JavaScript/ Jquery'
        },
        {
            icon: '<i class="fab fa-bootstrap"></i>',
            value: 'Bootstrap 3.x/4.x'
        },
        {
            icon: '<i class="fab fa-java"></i>',
            value: 'Java Core/ JSP/ Servlet'
        },
        {
            icon: '<i class="fas fa-leaf"></i>',
            value: 'Spring Framework'
        },
        {
            icon: '<i class="fas fa-database"></i>',
            value: 'MySQL'
        }
    ],
    descriptionCV: 'Tôi là Ngô Quang Huy. Tôi là một Software Developer. Hiện tại tôi đang học tại trường đại học Bách Khoa Hà Nội và từng tham gia trợ giảng mảng lập trình,  tại câu lạc bộ ITStudent. Với các kinh nghiệm tham dự triển khai một hệ thống website từ bước phân tích yêu cầu khách hàng cho đến khi sản phẩm được triển khai, cùng với tinh thần học hỏi, trách nhiệm trong công việc tôi hy vọng sẽ được làm việc cùng với anh/chị góp phần nhỏ vào sự phát triển của công ty.',
    experiences: [
        {
            name: 'Quy hoạch sử dụng đất và giá đất',
            company: 'TAVI CID CO.,LTD',
            description: 'Dự án chuyển đổi dữ liệu số và cung cấp chức năng quản lý các thông tin về quy hoạch sử dụng đất và giá đất trên nền tảng Web. Dự án có sử dụng WebGIS để hiện thị bản đồ quy hoạch đất và các thông tin liên quan.',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '4 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Triển khai'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'Spring framework, HTML, CSS, JS, ArgGIS, WebGIS, SQL Server.'
                }
            ]
        },
        {
            name: 'Natalie PMU',
            company: 'BK Software Viet Nam., JSC',
            description: 'Website cung cấp các thông tin, khóa học online và offline, bài báo và sự kiện về thẩm mỹ.',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '4 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Triển khai'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'Thiết bị điện AVHH',
            company: 'BK Software Viet Nam., JSC',
            description: 'Website cho phép khách hàng tìm kiếm thông và đặt mua các thiết bị điện. Cung cấp thông tin các dự án của công ty và tin tức về thiết bị điện.',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '4 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Triển khai'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'Đông Y Đỗ Mười',
            company: 'BK Software Viet Nam., JSC',
            description: 'Website cung cấp thông tin về các sản phẩm, bài báo, nghiên cứu, tài liệu về đông y.',
            info: [
                {
                    name: 'Quy mô dự án',
                    value: '4 người.' 
                },
                {
                    name: 'Vị trí/ Trách nhiệm',
                    value: 'Triển khai'
                },
                {
                    name: 'Công nghệ sử dụng',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        }
    ],
    products: [
        {
            img: './public/product/quyhoachbacgiang.png',
            name: 'Quy hoạch sử dụng đất và giá đất',
            description: 'Website nội bộ về quản lý quy hoạch sử dụng đất và giá đất',
            href: ''
        },
        {
            img: './public/product/nataliepmu.PNG',
            name: 'Natalie PMU',
            description: 'Website dịch vụ thẩm mỹ',
            href: 'https://nataliepmu.com/'
        },
        {
            img: './public/product/theitbidienavhh.PNG',
            name: 'AVHH',
            description: 'Thiết bị điện AVHH',
            href: 'https://thietbidienavhh.com/'
        },
        {
            img: './public/product/dongydomuoi.PNG',
            name: 'Đỗ Mười',
            description: 'Đông Y Đỗ Mười',
            href: 'https://dev.bksoftwarevn.com/dongydomuoi_com/'
        }
    ]
}

const INFOR_CV_EN = {
    imgCV: 'public/img-cv.jpg',
    name: 'Ngô Quang Huy',
    job: 'Software Developer',
    contacts: [
        {
            icon: '<i class="fas fa-mobile-alt"></i>',
            value: '0978960010',
            href: 'tel:0978960010'
        },
        {
            icon: '<i class="far fa-envelope"></i>',
            value: 'huyngozoro@gmail.com',
            href: 'mailto:huyngozoro@gmail.com'
        },
        {
            icon: '<i class="fab fa-facebook-square"></i>',
            value: 'facebook.com/quanghuy.ngo.142',
            href: 'https://www.facebook.com/quanghuy.ngo.142'
        },
        {
            icon: '<i class="fab fa-github"></i>',
            value: 'github.com/Huyngo113',
            href: 'https://github.com/Huyngo113'
        }
    ],
    skills: [
        {
            icon: '<i class="fab fa-html5"></i>',
            value: 'HTML'
        },
        {
            icon: '<i class="fab fa-css3-alt"></i>',
            value: 'CSS'
        },
        {
            icon: '<i class="fab fa-js"></i>',
            value: 'JavaScript/ Jquery'
        },
        {
            icon: '<i class="fab fa-bootstrap"></i>',
            value: 'Bootstrap 3.x/4.x'
        },
        {
            icon: '<i class="fab fa-java"></i>',
            value: 'Java Core/ JSP/ Servlet'
        },
        {
            icon: '<i class="fas fa-leaf"></i>',
            value: 'Spring Framework'
        },
        {
            icon: '<i class="fas fa-database"></i>',
            value: 'MySQL'
        }
    ],
    descriptionCV: 'My name is Ngo Quang Huy. I am a Software Developer. Currently, I am studying at Hanoi University of Science and Technology and used to be a teaching assistant at the ITStudent club. With the experience of participating in implementing a website system from analyzing customer requirements until the product is deployed, with the spirit of learning and responsibility in work I hope to work with you make a small contribution to the development of the company. ',
    experiences: [
        {
            name: 'Manage land use planning information and land prices',
            company: 'TAVI CID CO.,LTD',
            description: 'The Project that converts digital data and provides management functions for land use planning information and land prices. Use the web GIS to display land use planning maps.',
            info: [
                {
                    name: 'Project size',
                    value: '4 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Implement'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, HTML, CSS, JS, ArgGIS, WebGIS, SQL Server.'
                }
            ]
        },
        {
            name: 'Natalie PMU',
            company: 'BK Software Viet Nam., JSC',
            description: 'The Project about web offers information, online and offline courses, articles and facts about cosmetology.',
            info: [
                {
                    name: 'Project size',
                    value: '4 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Implement'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'AVHH Electrical Equipment',
            company: 'BK Software Viet Nam., JSC',
            description: 'The Project about web allows customers to find information and order electrical equipment, provide information project of the company and news about electrical equipment.',
            info: [
                {
                    name: 'Project size',
                    value: '4 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Implement'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        },
        {
            name: 'Do Muoi Oriental Medicine',
            company: 'BK Software Viet Nam., JSC',
            description: 'The Project about web provides information on oriental medicine products, articles, studies, materials.',
            info: [
                {
                    name: 'Project size',
                    value: '4 people.' 
                },
                {
                    name: 'Position/ Responsibilities',
                    value: 'Implement'
                },
                {
                    name: 'Used Technologies',
                    value: 'Spring framework, HTML, CSS, JS, MySQL.'
                }
            ]
        }
    ],
    products: [
        {
            img: './public/product/quyhoachbacgiang.png',
            name: 'Manage land use planning information and land prices',
            description: 'Internal website manages land use planning and land prices',
            href: ''
        },
        {
            img: './public/product/nataliepmu.PNG',
            name: 'Natalie PMU',
            description: 'Website cosmetology',
            href: 'https://nataliepmu.com/'
        },
        {
            img: './public/product/theitbidienavhh.PNG',
            name: 'AVHH',
            description: 'Website electrical equipment',
            href: 'https://thietbidienavhh.com/'
        },
        {
            img: './public/product/dongydomuoi.PNG',
            name: 'Do Muoi',
            description: 'Website oriental medicine',
            href: 'https://dev.bksoftwarevn.com/dongydomuoi_com/'
        }
    ]
}
