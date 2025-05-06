export async function GET(req) {
    const navBar = {
        logo: 'data:image/webp;base64,UklGRiwEAABXRUJQVlA4WAoAAAAQAAAAmQAAKQAAQUxQSO0CAAABkNva2p1YX+7EGaklcsv5fTlzeOfhfCw3YBpA1w2goQFr6AA6mBc5FGAJOsAdHIn/+7//MMDcVxIRENxIUiRF9jDF6pruC/L/NNnNVVMDQMoSH3afAzNgPQ6xBSYMHYwsZ2V0BZQAMAswB3CIKQKpL58GLoGblMncJ8lZ0F08BbHaQiXXe09Y0aC++NNNj1lkUkGzEZH4EcCLTZm6NIr11T22B/ZwqSTbwMY0LZVZdA0Et1vFTgbwCDwJXdHTGVA6xtOlE2lGBlHZ9cB6VrAiAdkQabARbYHFAL1phwUAnECkWX/xans0g5/G40tvNNSIEwnJUgTe0vqX4wo0qX9aifWaaAkrU0VhmqwjSiQoy3Fj9aE38JIsWEZF7/jiA0Ww02icYG+bTCmRsCzFsHuIRSRuh23uMwmvgvYm3bpO9esiGel6MRKZqoEqlajUJowIIcsA4PD00+1Ulc8iOwH0X8RhOqifVFuKjURKKjKqRkmIMLIk7sRjIpIPHi/i2LKrvjRIzcaoW7n6k8gXq6KP1C8nRBhZDm/nl0g22Kxslp3LWmnVPiJiN2FDpzZHqPSYESHCyDIM8LPJ/LJRVNRjha6MBFPbcUT01bYIL0vwAhgnj0WxdwwSwJaoCeqAYxOmMeFlOfbGTiatcdByaO2OoLEZn7jiZQkWwMraTWTvyNzdJ/Exp8swpcnHnK6AZ+uuZzVutxWGjKUJoxV6s3mv7cekO6YgRBhZhgTABEbyGMDNApWQRD1x2u4SZ0Q/WqiOnBBhZMN4U4i5wUJWQLy/kSPMvFCPihgHKPixZyyiRceECCNL0QLIt8ZlafGSJBIgmE4CfMB43REi1HhNEQ/ALjO60yR3t51GH4W42DmOt3kySp7v5US6SEJc8rwwdlcrv1RSnQD6rhmLEIik/Fx6mhIilCyJOqWKfmAun0vUHU280P99fDKJXwAsY/XFRD6btHvgcCP5C5by+aR6AZ4fJJkk8hkln7THvX9UEQBWUDggGAEAALAJAJ0BKpoAKgA+kUiZSiWkoiGmeAwAsBIJYwB4ZkQIANstdju8qgRbkc0FH/EKSxwe06B4nD9qPnxOl0b2m/v/oL5eJzVhvvpRsmCUwjsLXMkSpHrAAP7zf//+GH8A/ICZI7kOH7h/AKZXBlLwuvFYWf37FI10gPXv+fwf04tN0oQVT/vjZ//yPibis6WQLBu0Zq+w//9Oqq7hzK6/LTkGxB/9/Z8wt8UKEhBfe2UFFxOnForPVlGMn1J9VA+HnKHO+mzPgjd8gTlkIfbpyMVzsN4DlTH0cHfsfJF31/gNfC/+5xkFtc5mK54DKeUNo++6y4I3Zeqv/GO0VmT1qdhR8eOvAwBEwSap//8dEdHPidMySzhAAAA=', 
        mainLinks:[{label: 'Home'},{label: 'About'},{label: 'Shop'},{label: 'News'},{label: 'Pages'},{label: 'Contact'}],
        aboutLinks:[{label: 'Services',},{label: 'Services Details'},{label: 'Team',},{label: 'Team Details'},{label: 'FAQ',},{label: 'Google Map'}],
        shopLinks:[{label: 'Cart',},{label: 'Wishlist',},{label: 'Checkout',},{label: 'Order Again'},{label: 'Sign In'},{label: 'Register',},{label: 'My Account'}],
        newsLinks:[{label: 'News',},{label: 'News Details'}],
        pagesLinks:[{label: 'History',},{label: 'Contact',},{label: '404',},{label: 'Coming Soon'}]
    };

    return Response.json(navBar);
}
