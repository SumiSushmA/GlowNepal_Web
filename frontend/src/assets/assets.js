import about_image from './about_image.png';
import appointment_img from './appointment_img.png';
import arrow_icon from './arrow_icon.svg';
import chats_icon from './chats_icon.svg';
import contact_image from './contact_image.png';
import cross_icon from './cross_icon.png';
import dropdown_icon from './dropdown_icon.svg';
import group_profiles from './group_profiles.png';
import header_img from './header_img.png';
import info_icon from './info_icon.svg';
import logo from './logo.png';
import menu_icon from './menu_icon.svg';
import profile_pic from './profile_pic.png';
import razorpay_logo from './razorpay_logo.png';
import stripe_logo from './stripe_logo.png';
import upload_icon from './upload_icon.png';
import verified_icon from './verified_icon.svg';

// Updated stylist images
import stylist1 from './stylist1.png';
import stylist2 from './stylist2.png';
import stylist3 from './stylist3.png';
import stylist4 from './stylist4.png';
import stylist5 from './stylist5.png';
import stylist6 from './stylist6.png';

// Updated service categories
import HairStyling from './HairStyling.png';
import Makeup from './Makeup.png';
import Massage from './Massage.png';
import NailArt from './NailArt.png';
import Skincare from './Skincare.png';
import Waxing from './Waxing.png';

export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
};

export const serviceData = [
    {
        service: 'Hair Styling',
        image: HairStyling
    },
    {
        service: 'Makeup',
        image: Makeup
    },
    {
        service: 'Skincare',
        image: Skincare
    },
    {
        service: 'Nail Art',
        image: NailArt
    },
    {
        service: 'Massage',
        image: Massage
    },
    {
        service: 'Waxing',
        image: Waxing
    },
];

export const stylists = [
    {
        _id: 'stylist1',
        name: 'Sophia Martinez',
        image: stylist1,
        category: 'Hair Styling',
        experience: '5 Years',
        about: 'Sophia is a professional hairstylist specializing in modern haircuts, styling, and hair treatments to enhance your look.',
        fees: 70,
        address: {
            line1: '17th Avenue, Downtown',
            line2: 'New York, USA'
        }
    },
    {
        _id: 'stylist2',
        name: 'Emma Wilson',
        image: stylist2,
        category: 'Makeup',
        experience: '6 Years',
        about: 'Emma is a certified makeup artist specializing in bridal, party, and casual makeup with a flawless touch.',
        fees: 90,
        address: {
            line1: 'Sunset Boulevard',
            line2: 'Los Angeles, USA'
        }
    },
    {
        _id: 'stylist3',
        name: 'Lucas Anderson',
        image: stylist3,
        category: 'Skincare',
        experience: '4 Years',
        about: 'Lucas provides advanced skincare treatments, including facials, chemical peels, and skin rejuvenation techniques.',
        fees: 80,
        address: {
            line1: 'Baker Street',
            line2: 'London, UK'
        }
    },
    {
        _id: 'stylist4',
        name: 'Olivia Brown',
        image: stylist4,
        category: 'Nail Art',
        experience: '3 Years',
        about: 'Olivia is an expert in creative nail art, manicures, and pedicures with the latest trends in nail design.',
        fees: 50,
        address: {
            line1: 'Greenwich Lane',
            line2: 'Sydney, Australia'
        }
    },
    {
        _id: 'stylist5',
        name: 'William Carter',
        image: stylist5,
        category: 'Massage',
        experience: '7 Years',
        about: 'William offers relaxing body massages, including deep tissue, Swedish, and aromatherapy techniques.',
        fees: 100,
        address: {
            line1: 'King Street',
            line2: 'Toronto, Canada'
        }
    },
    {
        _id: 'stylist6',
        name: 'Mia Thompson',
        image: stylist6,
        category: 'Waxing',
        experience: '5 Years',
        about: 'Mia specializes in painless waxing services, ensuring smooth and flawless skin with the best techniques.',
        fees: 60,
        address: {
            line1: 'Bond Street',
            line2: 'London, UK'
        }
    }
];
