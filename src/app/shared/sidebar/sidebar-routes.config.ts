import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
    // {
    //     path: '/dashboeard', title: 'Dashboeard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: []
    // },
    {
        path: '', title: 'Users', icon: 'ft-users', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, roles: ['Admin'], submenu: [
            { path: '/users/list', title: 'Users List', icon: 'ft-list', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], roles: ['Admin'] },
            { path: '/users/create', title: 'Create User', icon: 'ft-plus-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], roles: ['Admin'] },
        ]
    },
    {
        path: '', title: 'Vendors', icon: 'ft-user', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, roles: ['Admin'], submenu: [
            { path: '/vendors/list', title: 'Vendors List', icon: 'ft-list', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], roles: ['Admin'] },
            { path: '/vendors/create', title: 'Create Vendor', icon: 'ft-plus-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], roles: ['Admin'] },
        ]
    },
    {
        path: '', title: 'Products', icon: 'ft-shopping-cart', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, roles: ['Admin', 'Vendor'], submenu: [
            { path: '/products/list', title: 'Products List', icon: 'ft-list', class: 'ft-list', badge: '', badgeClass: '', isExternalLink: false, submenu: [], roles: ['Admin', 'Vendor'] },
            { path: '/products/create', title: 'Create Product', icon: 'ft-plus-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], roles: ['Admin', 'Vendor'] },
        ]
    },
    {
        path: '', title: 'Bundles', icon: 'ft-grid', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, roles: ['Admin'], submenu: [
            { path: '/bundles/list', title: 'Bundles List', icon: 'ft-list', class: 'ft-list', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
            { path: '/bundles/create', title: 'Create Bundle', icon: 'ft-plus-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [], },
        ]
    },
    {
        path: '/cooperations/list', title: 'Cooperations', icon: 'ft-share-2', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: []
    },
    {
        path: '', title: 'BackUps', icon: 'ft-rotate-ccw', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, roles: ['Admin'], submenu: [
            { path: '/backups/users/list', title: 'Users backup', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], roles: ['Admin'] },
            { path: '/backups/vendors/list', title: 'Vendors backup', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], roles: ['Admin'] },
            { path: '/backups/products/list', title: 'Products backup', icon: 'ft-shopping-cart', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], roles: ['Admin'] },
        ]
    },
    {
        path: '', title: 'Cooperations', icon: 'ft-rotate-ccw', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, roles: ['Vendor'], submenu: [
            { path: '/vendorCooperations/list', title: 'Cooperations List', icon: 'ft-list', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], roles: ['Vendor'] },
            { path: '/vendorCooperations/create', title: 'create cooperation', icon: 'ft-plus-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [], roles: ['Vendor'] },

        ]
    },
    // {
    //     path: '/settings', title: 'Settings', icon: 'ft-settings', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: []
    // },
    // {
    //     path: '', title: 'Dashboard', icon: 'ft-home', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, roles: ['Admin'], submenu: [
    //         { path: '/dashboard/dashboard1', title: 'Dashboard1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/dashboard/dashboard2', title: 'Dashboard2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //     ]
    // },
    // { path: '/colorpalettes', title: 'Color Palette', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    // { path: '/inbox', title: 'Inbox', icon: 'ft-mail', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    // { path: '/chat', title: 'Chat', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    // { path: '/chat-ngrx', title: 'Chat NgRx', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    // { path: '/taskboard', title: 'Task Board', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    // { path: '/taskboard-ngrx', title: 'Task Board NgRx', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    // { path: '/player', title: 'Player', icon: 'ft-music', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    // {
    //     path: '', title: 'UI Kit', icon: 'ft-aperture', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'],
    //     submenu: [

    //         { path: '/uikit/grids', title: 'Grid', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/uikit/typography', title: 'Typography', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/uikit/syntaxhighlighter', title: 'Syntax Highlighter', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/uikit/helperclasses', title: 'Helper Classes', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/uikit/textutilities', title: 'Text Utilities', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },

    //         {
    //             path: '', title: 'Icons', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [
    //                 { path: '/uikit/feather', title: 'Feather Icon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/uikit/font-awesome', title: 'Font Awesome Icon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/uikit/simple-line', title: 'Simple Line Icon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //             ]
    //         },

    //     ]
    // },
    // {
    //     path: '', title: 'Components', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'],
    //     submenu: [

    //         {
    //             path: '', title: 'Bootstrap', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [
    //                 { path: '/components/lists', title: 'List', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/buttons', title: 'Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/ng-buttons', title: 'NG Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/alerts', title: 'Alerts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/badges', title: 'Badges', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/dropdowns', title: 'Dropdowns', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/inputgroups', title: 'Input Groups', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/media', title: 'Media Objects', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/pagination', title: 'Pagination', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/progress', title: 'Progress Bars', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/models', title: 'Modals', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/collapse', title: 'Collapse', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/accordion', title: 'Accordion', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/carousel', title: 'Carousel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/datepicker', title: 'Datepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/popover', title: 'Popover', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/rating', title: 'Rating', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/tables', title: 'Tables', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/tabs', title: 'Tabs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/timepicker', title: 'Timepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/tooltip', title: 'Tooltip', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/typeahead', title: 'Typeahead', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] }
    //             ]
    //         },
    //         {
    //             path: '', title: 'Extra', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [
    //                 { path: '/components/sweetalerts', title: 'Sweet Alert', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/toastr', title: 'Toastr', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/select', title: 'Select', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/nouislider', title: 'NoUI Slider', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/upload', title: 'Upload', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/editor', title: 'Editor', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/dragndrop', title: 'Drag and Drop', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/tour', title: 'Tour', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/cropper', title: 'Image Cropper', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/tags', title: 'Input Tags', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/components/switch', title: 'Switch', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] }
    //             ]
    //         },
    //     ]
    // },
    // {
    //     path: '', title: 'Forms', icon: 'ft-edit', class: 'has-sub', badge: 'New', badgeClass: 'badge badge-pill badge-primary float-right mr-1 mt-1', isExternalLink: false, roles: ['Admin'],
    //     submenu: [
    //         {
    //             path: '', title: 'Elements', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'],
    //             submenu: [
    //                 { path: '/forms/inputs', title: 'Inputs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/forms/input-groups', title: 'Input Group', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/forms/input-grid', title: 'Input Grid', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] }
    //             ]
    //         },
    //         {
    //             path: '', title: 'Layouts', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'],
    //             submenu: [
    //                 { path: '/forms/basic', title: 'Basic Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/forms/horizontal', title: 'Horizontal Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/forms/hidden-labels', title: 'Hidden Labels', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/forms/form-actions', title: 'Form Actions', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/forms/bordered', title: 'Bordered Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //                 { path: '/forms/striped-rows', title: 'Striped Rows', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] }
    //             ]
    //         },
    //         { path: '/forms/validation', title: 'Validation', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/forms/ngx', title: 'NGX Wizard', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/forms/archwizard', title: 'ArchWizard', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] }
    //     ]
    // },
    // {
    //     path: '', title: 'Tables', icon: 'ft-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'],
    //     submenu: [
    //         { path: '/tables/regular', title: 'Regular', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/tables/extended', title: 'Extended', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },

    //     ]
    // },
    // {
    //     path: '', title: 'Data Tables', icon: 'ft-layout', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'],
    //     submenu: [
    //         { path: '/datatables/basic', title: 'Basic', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/datatables/editing', title: 'Editing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/datatables/filter', title: 'Filter', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/datatables/fullscreen', title: 'Fullscreen', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/datatables/paging', title: 'Paging', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/datatables/pinning', title: 'Pinning', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/datatables/selection', title: 'Selection', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/datatables/sorting', title: 'Sorting', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] }
    //     ]
    // },
    // {
    //     path: '', title: 'Cards', icon: 'ft-layers', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [
    //         { path: '/cards/basic', title: 'Basic Cards', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/cards/advanced', title: 'Advanced Cards', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //     ]
    // },
    // {
    //     path: '', title: 'Maps', icon: 'ft-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'],
    //     submenu: [
    //         { path: '/maps/google', title: 'Google Map', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/maps/fullscreen', title: 'Full Screen Map', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //     ]
    // },
    // {
    //     path: '', title: 'Charts', icon: 'ft-bar-chart-2', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1', isExternalLink: false, roles: ['Admin'],
    //     submenu: [
    //         { path: '/charts/chartjs', title: 'ChartJs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/charts/chartist', title: 'Chartist', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/charts/ngx', title: 'NGX Chart', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //     ]
    // },
    // { path: '/calendar', title: 'Calendar', icon: 'ft-calendar', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    // {
    //     path: '', title: 'Pages', icon: 'ft-copy', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'],
    //     submenu: [
    //         { path: '/pages/forgotpassword', title: 'Forgot Password', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/horizontaltimeline', title: 'Horizontal Timeline', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/verticaltimeline', title: 'Vertical Timeline', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/login', title: 'Login', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/register', title: 'Register', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/profile', title: 'User Profile', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/lockscreen', title: 'Lock Screen', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/invoice', title: 'Invoice', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/error', title: 'Error', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/comingsoon', title: 'Coming Soon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/maintenance', title: 'Maintenance', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/gallery', title: 'Gallery', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/search', title: 'Search', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/faq', title: 'FAQ', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //         { path: '/pages/kb', title: 'Knowledge Base', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, roles: ['Admin'], submenu: [] },
    //     ]
    // },
    // { path: 'https://pixinvent.com/apex-angular-4-bootstrap-Admin-template/documentation', title: 'Documentation', icon: 'ft-book', class: '', badge: '', badgeClass: '', isExternalLink: true, roles: ['Admin'], submenu: [] },
    // { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, roles: ['Admin'], submenu: [] },

];
