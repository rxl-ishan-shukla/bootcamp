const States = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const Districts = {
  Adilabad: "Telangana",
  "Agar Malwa": "Madhya Pradesh",
  Agatti: "Lakshadweep",
  Agra: "Uttar Pradesh",
  Ahmedabad: "Gujarat",
  Ahmednagar: "Maharashtra",
  Aizawl: "Mizoram",
  Ajmer: "Rajasthan",
  Akola: "Maharashtra",
  Alappuzha: "Kerala",
  Aligarh: "Uttar Pradesh",
  Alipurduar: "West Bengal",
  Alirajpur: "Madhya Pradesh",
  Allahabad: "Uttar Pradesh",
  Almora: "Uttarakhand",
  Alwar: "Rajasthan",
  Ambala: "Haryana",
  "Ambedkar Nagar": "Uttar Pradesh",
  "Amethi (Chatrapati Sahuji Mahraj Nagar)": "Uttar Pradesh",
  Amini: "Lakshadweep",
  Amravati: "Maharashtra",
  Amreli: "Gujarat",
  Amritsar: "Punjab",
  "Amroha (J.P. Nagar)": "Uttar Pradesh",
  Anand: "Gujarat",
  Anantapur: "Andhra Pradesh",
  Anantnag: "Jammu and Kashmir",
  Androth: "Lakshadweep",
  Angul: "Odisha",
  Anjaw: "Arunachal Pradesh",
  Anuppur: "Madhya Pradesh",
  Araria: "Bihar",
  Aravalli: "Gujarat",
  Ariyalur: "Tamil Nadu",
  Arwal: "Bihar",
  Ashoknagar: "Madhya Pradesh",
  Auraiya: "Uttar Pradesh",
  Aurangabad: "Bihar",
  "Aurangabad (Maharashtra)": "Maharashtra",
  Azamgarh: "Uttar Pradesh",
  Bagalkot: "Karnataka",
  Bageshwar: "Uttarakhand",
  Baghpat: "Uttar Pradesh",
  Bahraich: "Uttar Pradesh",
  Baksa: "Assam",
  Balaghat: "Madhya Pradesh",
  Balangir: "Odisha",
  Balasore: "Odisha",
  "Ballari (Bellary)": "Karnataka",
  Ballia: "Uttar Pradesh",
  Balod: "Chhattisgarh",
  "Baloda Bazar": "Chhattisgarh",
  Balrampur: "Chhattisgarh",
  "Balrampur UP": "Uttar Pradesh",
  "Banaskantha (Palanpur)": "Gujarat",
  Banda: "Uttar Pradesh",
  Bandipore: "Jammu and Kashmir",
  Banka: "Bihar",
  Bankura: "West Bengal",
  Banswara: "Rajasthan",
  Barabanki: "Uttar Pradesh",
  Baramulla: "Jammu and Kashmir",
  Baran: "Rajasthan",
  Bareilly: "Uttar Pradesh",
  Bargarh: "Odisha",
  Barmer: "Rajasthan",
  Barnala: "Punjab",
  Barpeta: "Assam",
  Barwani: "Madhya Pradesh",
  Bastar: "Chhattisgarh",
  Basti: "Uttar Pradesh",
  Bathinda: "Punjab",
  Beed: "Maharashtra",
  Begusarai: "Bihar",
  "Belagavi (Belgaum)": "Karnataka",
  Bemetara: "Chhattisgarh",
  "Bengaluru (Bangalore) Rural": "Karnataka",
  "Bengaluru (Bangalore) Urban": "Karnataka",
  Betul: "Madhya Pradesh",
  Bhadohi: "Uttar Pradesh",
  "Bhadradri Kothagudem": "Telangana",
  Bhadrak: "Odisha",
  Bhagalpur: "Bihar",
  Bhandara: "Maharashtra",
  Bharatpur: "Rajasthan",
  Bharuch: "Gujarat",
  Bhavnagar: "Gujarat",
  Bhilwara: "Rajasthan",
  Bhind: "Madhya Pradesh",
  Bhiwani: "Haryana",
  Bhojpur: "Bihar",
  Bhopal: "Madhya Pradesh",
  Bidar: "Karnataka",
  Bijapur: "Chhattisgarh",
  Bijnor: "Uttar Pradesh",
  Bikaner: "Rajasthan",
  Bilaspur: "Chhattisgarh",
  "Bilaspur Himachal": "Himachal Pradesh",
  Birbhum: "West Bengal",
  Bishnupur: "Manipur",
  Biswanath: "Assam",
  Bithra: "Lakshadweep",
  Bokaro: "Jharkhand",
  Bongaigaon: "Assam",
  Botad: "Gujarat",
  Boudh: "Odisha",
  Budaun: "Uttar Pradesh",
  Budgam: "Jammu and Kashmir",
  Bulandshahr: "Uttar Pradesh",
  Buldhana: "Maharashtra",
  Bundi: "Rajasthan",
  "Burdwan (Bardhaman)": "West Bengal",
  Burhanpur: "Madhya Pradesh",
  Buxar: "Bihar",
  Cachar: "Assam",
  "Central Delhi": "Delhi",
  Chamarajanagar: "Karnataka",
  Chamba: "Himachal Pradesh",
  Chamoli: "Uttarakhand",
  Champawat: "Uttarakhand",
  Champhai: "Mizoram",
  Chandauli: "Uttar Pradesh",
  Chandel: "Manipur",
  Chandigarh: "Chandigarh",
  Chandrapur: "Maharashtra",
  Changlang: "Arunachal Pradesh",
  Charaideo: "Assam",
  "Charkhi Dadri": "Haryana",
  Chatra: "Jharkhand",
  Chennai: "Tamil Nadu",
  Chethlath: "Lakshadweep",
  Chhatarpur: "Madhya Pradesh",
  Chhindwara: "Madhya Pradesh",
  "Chhota Udepur": "Gujarat",
  Chikballapur: "Karnataka",
  "Chikkamagaluru (Chikmagalur)": "Karnataka",
  Chirang: "Assam",
  Chitradurga: "Karnataka",
  Chitrakoot: "Uttar Pradesh",
  Chittoor: "Andhra Pradesh",
  Chittorgarh: "Rajasthan",
  Churachandpur: "Manipur",
  Churu: "Rajasthan",
  Coimbatore: "Tamil Nadu",
  "Cooch Behar": "West Bengal",
  Cuddalore: "Tamil Nadu",
  Cuttack: "Odisha",
  Dahod: "Gujarat",
  "Dakshin Dinajpur (South Dinajpur)": "West Bengal",
  "Dakshina Kannada": "Karnataka",
  Daman: "Daman and Diu",
  Damoh: "Madhya Pradesh",
  "Dangs (Ahwa)": "Gujarat",
  "Dantewada (South Bastar)": "Chhattisgarh",
  Darbhanga: "Bihar",
  Darjeeling: "West Bengal",
  Darrang: "Assam",
  Datia: "Madhya Pradesh",
  Dausa: "Rajasthan",
  Davangere: "Karnataka",
  Dehradun: "Uttarakhand",
  Deogarh: "Odisha",
  Deoghar: "Jharkhand",
  Deoria: "Uttar Pradesh",
  "Devbhoomi Dwarka": "Gujarat",
  Dewas: "Madhya Pradesh",
  Dhalai: "Tripura",
  Dhamtari: "Chhattisgarh",
  Dhanbad: "Jharkhand",
  Dhar: "Madhya Pradesh",
  Dharmapuri: "Tamil Nadu",
  Dharwad: "Karnataka",
  Dhemaji: "Assam",
  Dhenkanal: "Odisha",
  Dholpur: "Rajasthan",
  Dhubri: "Assam",
  Dhule: "Maharashtra",
  "Dibang Valley": "Arunachal Pradesh",
  Dibrugarh: "Assam",
  "Dima Hasao": "Assam",
  Dimapur: "Nagaland",
  Dindigul: "Tamil Nadu",
  Dindori: "Madhya Pradesh",
  Diu: "Daman and Diu",
  Doda: "Jammu and Kashmir",
  Dumka: "Jharkhand",
  Dungarpur: "Rajasthan",
  Durg: "Chhattisgarh",
  "East Champaran (Motihari)": "Bihar",
  "East Delhi": "Delhi",
  "East Garo Hills": "Meghalaya",
  "East Godavari": "Andhra Pradesh",
  "East Jaintia Hills": "Meghalaya",
  "East Kameng": "Arunachal Pradesh",
  "East Khasi Hills": "Meghalaya",
  "East Siang": "Arunachal Pradesh",
  "East Sikkim": "Sikkim",
  "East Singhbhum": "Jharkhand",
  Ernakulam: "Kerala",
  Erode: "Tamil Nadu",
  Etah: "Uttar Pradesh",
  Etawah: "Uttar Pradesh",
  Faizabad: "Uttar Pradesh",
  Faridabad: "Haryana",
  Faridkot: "Punjab",
  Farrukhabad: "Uttar Pradesh",
  Fatehabad: "Haryana",
  "Fatehgarh Sahib": "Punjab",
  Fatehpur: "Uttar Pradesh",
  Fazilka: "Punjab",
  Ferozepur: "Punjab",
  Firozabad: "Uttar Pradesh",
  Gadag: "Karnataka",
  Gadchiroli: "Maharashtra",
  Gajapati: "Odisha",
  Ganderbal: "Jammu and Kashmir",
  Gandhinagar: "Gujarat",
  Ganjam: "Odisha",
  Garhwa: "Jharkhand",
  Gariyaband: "Chhattisgarh",
  "Gautam Buddha Nagar": "Uttar Pradesh",
  Gaya: "Bihar",
  Ghaziabad: "Uttar Pradesh",
  Ghazipur: "Uttar Pradesh",
  "Gir Somnath": "Gujarat",
  Giridih: "Jharkhand",
  Goalpara: "Assam",
  Godda: "Jharkhand",
  Golaghat: "Assam",
  Gomati: "Tripura",
  Gonda: "Uttar Pradesh",
  Gondia: "Maharashtra",
  Gopalganj: "Bihar",
  Gorakhpur: "Uttar Pradesh",
  Gumla: "Jharkhand",
  Guna: "Madhya Pradesh",
  Guntur: "Andhra Pradesh",
  Gurdaspur: "Punjab",
  Gurgaon: "Haryana",
  Gwalior: "Madhya Pradesh",
  Hailakandi: "Assam",
  Hamirpur: "Himachal Pradesh",
  "Hamirpur UP": "Uttar Pradesh",
  Hanumangarh: "Rajasthan",
  "Hapur (Panchsheel Nagar)": "Uttar Pradesh",
  Harda: "Madhya Pradesh",
  Hardoi: "Uttar Pradesh",
  Haridwar: "Uttarakhand",
  Hassan: "Karnataka",
  Hathras: "Uttar Pradesh",
  Haveri: "Karnataka",
  Hazaribag: "Jharkhand",
  Hingoli: "Maharashtra",
  Hisar: "Haryana",
  Hojai: "Assam",
  Hooghly: "West Bengal",
  Hoshangabad: "Madhya Pradesh",
  Hoshiarpur: "Punjab",
  Howrah: "West Bengal",
  Hyderabad: "Telangana",
  Idukki: "Kerala",
  "Imphal East": "Manipur",
  "Imphal West": "Manipur",
  Indore: "Madhya Pradesh",
  Jabalpur: "Madhya Pradesh",
  Jagatsinghapur: "Odisha",
  Jagtial: "Telangana",
  Jaipur: "Rajasthan",
  Jaisalmer: "Rajasthan",
  Jajpur: "Odisha",
  Jalandhar: "Punjab",
  Jalaun: "Uttar Pradesh",
  Jalgaon: "Maharashtra",
  Jalna: "Maharashtra",
  Jalore: "Rajasthan",
  Jalpaiguri: "West Bengal",
  Jammu: "Jammu and Kashmir",
  Jamnagar: "Gujarat",
  Jamtara: "Jharkhand",
  Jamui: "Bihar",
  Jangaon: "Telangana",
  "Janjgir-Champa": "Chhattisgarh",
  Jashpur: "Chhattisgarh",
  Jaunpur: "Uttar Pradesh",
  "Jayashankar Bhoopalpally": "Telangana",
  Jehanabad: "Bihar",
  Jhabua: "Madhya Pradesh",
  Jhajjar: "Haryana",
  Jhalawar: "Rajasthan",
  Jhansi: "Uttar Pradesh",
  Jharsuguda: "Odisha",
  Jhunjhunu: "Rajasthan",
  Jind: "Haryana",
  Jiribam: "Manipur",
  Jodhpur: "Rajasthan",
  "Jogulamba Gadwal": "Telangana",
  Jorhat: "Assam",
  Junagadh: "Gujarat",
  "Kabirdham (Kawardha)": "Chhattisgarh",
  Kachchh: "Gujarat",
  Kadmath: "Lakshadweep",
  "Kaimur (Bhabua)": "Bihar",
  Kaithal: "Haryana",
  Kakching: "Manipur",
  "Kalaburagi (Gulbarga)": "Karnataka",
  Kalahandi: "Odisha",
  Kalimpong: "West Bengal",
  Kalpeni: "Lakshadweep",
  Kamareddy: "Telangana",
  Kamjong: "Manipur",
  Kamrup: "Assam",
  "Kamrup Metropolitan": "Assam",
  Kanchipuram: "Tamil Nadu",
  Kandhamal: "Odisha",
  Kangpokpi: "Manipur",
  Kangra: "Himachal Pradesh",
  "Kanker (North Bastar)": "Chhattisgarh",
  Kannauj: "Uttar Pradesh",
  Kannur: "Kerala",
  "Kanpur Dehat": "Uttar Pradesh",
  "Kanpur Nagar": "Uttar Pradesh",
  "Kanshiram Nagar (Kasganj)": "Uttar Pradesh",
  Kanyakumari: "Tamil Nadu",
  Kapurthala: "Punjab",
  Karaikal: "Puducherry",
  Karauli: "Rajasthan",
  "Karbi Anglong": "Assam",
  Kargil: "Jammu and Kashmir",
  Karimganj: "Assam",
  Karimnagar: "Telangana",
  Karnal: "Haryana",
  Karur: "Tamil Nadu",
  Kasaragod: "Kerala",
  Kathua: "Jammu and Kashmir",
  Katihar: "Bihar",
  Katni: "Madhya Pradesh",
  Kaushambi: "Uttar Pradesh",
  Kavaratti: "Lakshadweep",
  Kendrapara: "Odisha",
  "Kendujhar (Keonjhar)": "Odisha",
  Khagaria: "Bihar",
  Khammam: "Telangana",
  Khandwa: "Madhya Pradesh",
  Khargone: "Madhya Pradesh",
  "Kheda (Nadiad)": "Gujarat",
  Khordha: "Odisha",
  Khowai: "Tripura",
  Khunti: "Jharkhand",
  Kilthan: "Lakshadweep",
  Kinnaur: "Himachal Pradesh",
  Kiphire: "Nagaland",
  Kishanganj: "Bihar",
  Kishtwar: "Jammu and Kashmir",
  Kodagu: "Karnataka",
  Koderma: "Jharkhand",
  Kohima: "Nagaland",
  Kokrajhar: "Assam",
  Kolar: "Karnataka",
  Kolasib: "Mizoram",
  Kolhapur: "Maharashtra",
  Kolkata: "West Bengal",
  Kollam: "Kerala",
  "Komaram Bheem Asifabad": "Telangana",
  Kondagaon: "Chhattisgarh",
  Koppal: "Karnataka",
  Koraput: "Odisha",
  Korba: "Chhattisgarh",
  "Korea (Koriya)": "Chhattisgarh",
  Kota: "Rajasthan",
  Kottayam: "Kerala",
  Kozhikode: "Kerala",
  "Kra Daadi": "Arunachal Pradesh",
  Krishna: "Andhra Pradesh",
  Krishnagiri: "Tamil Nadu",
  Kulgam: "Jammu and Kashmir",
  Kullu: "Himachal Pradesh",
  Kupwara: "Jammu and Kashmir",
  Kurnool: "Andhra Pradesh",
  Kurukshetra: "Haryana",
  "Kurung Kumey": "Arunachal Pradesh",
  "Kushinagar (Padrauna)": "Uttar Pradesh",
  "Lahaul &amp; Spiti": "Himachal Pradesh",
  Lakhimpur: "Assam",
  "Lakhimpur - Kheri": "Uttar Pradesh",
  Lakhisarai: "Bihar",
  Lalitpur: "Uttar Pradesh",
  Latehar: "Jharkhand",
  Latur: "Maharashtra",
  Lawngtlai: "Mizoram",
  Leh: "Jammu and Kashmir",
  Lohardaga: "Jharkhand",
  Lohit: "Arunachal Pradesh",
  Longding: "Arunachal Pradesh",
  Longleng: "Nagaland",
  "Lower Dibang Valley": "Arunachal Pradesh",
  "Lower Siang": "Arunachal Pradesh",
  "Lower Subansiri": "Arunachal Pradesh",
  Lucknow: "Uttar Pradesh",
  Ludhiana: "Punjab",
  Lunglei: "Mizoram",
  Madhepura: "Bihar",
  Madhubani: "Bihar",
  Madurai: "Tamil Nadu",
  Mahabubabad: "Telangana",
  Mahabubnagar: "Telangana",
  Maharajganj: "Uttar Pradesh",
  Mahasamund: "Chhattisgarh",
  Mahe: "Puducherry",
  Mahendragarh: "Haryana",
  Mahisagar: "Gujarat",
  Mahoba: "Uttar Pradesh",
  Mainpuri: "Uttar Pradesh",
  Majuli: "Assam",
  Malappuram: "Kerala",
  Malda: "West Bengal",
  Malkangiri: "Odisha",
  Mamit: "Mizoram",
  Mancherial: "Telangana",
  Mandi: "Himachal Pradesh",
  Mandla: "Madhya Pradesh",
  Mandsaur: "Madhya Pradesh",
  Mandya: "Karnataka",
  Mansa: "Punjab",
  Mathura: "Uttar Pradesh",
  Mau: "Uttar Pradesh",
  Mayurbhanj: "Odisha",
  Medak: "Telangana",
  Medchal: "Telangana",
  Meerut: "Uttar Pradesh",
  Mehsana: "Gujarat",
  Mewat: "Haryana",
  Minicoy: "Lakshadweep",
  Mirzapur: "Uttar Pradesh",
  Moga: "Punjab",
  Mokokchung: "Nagaland",
  Mon: "Nagaland",
  Moradabad: "Uttar Pradesh",
  Morbi: "Gujarat",
  Morena: "Madhya Pradesh",
  Morigaon: "Assam",
  Muktsar: "Punjab",
  "Mumbai City": "Maharashtra",
  "Mumbai Suburban": "Maharashtra",
  Mungeli: "Chhattisgarh",
  "Munger (Monghyr)": "Bihar",
  Murshidabad: "West Bengal",
  Muzaffarnagar: "Uttar Pradesh",
  Muzaffarpur: "Bihar",
  "Mysuru (Mysore)": "Karnataka",
  Nabarangpur: "Odisha",
  Nadia: "West Bengal",
  Nagaon: "Assam",
  Nagapattinam: "Tamil Nadu",
  Nagarkurnool: "Telangana",
  Nagaur: "Rajasthan",
  Nagpur: "Maharashtra",
  Nainital: "Uttarakhand",
  Nalanda: "Bihar",
  Nalbari: "Assam",
  Nalgonda: "Telangana",
  Namakkal: "Tamil Nadu",
  Namsai: "Arunachal Pradesh",
  Nanded: "Maharashtra",
  Nandurbar: "Maharashtra",
  Narayanpur: "Chhattisgarh",
  "Narmada (Rajpipla)": "Gujarat",
  Narsinghpur: "Madhya Pradesh",
  Nashik: "Maharashtra",
  Navsari: "Gujarat",
  Nawada: "Bihar",
  "Nawanshahr (Shahid Bhagat Singh Nagar)": "Punjab",
  Nayagarh: "Odisha",
  Neemuch: "Madhya Pradesh",
  Nellore: "Andhra Pradesh",
  "New Delhi": "Delhi",
  Nilgiris: "Tamil Nadu",
  Nirmal: "Telangana",
  Nizamabad: "Telangana",
  Noney: "Manipur",
  "North 24 Parganas": "West Bengal",
  "North Delhi": "Delhi",
  "North East  Delhi": "Delhi",
  "North Garo Hills": "Meghalaya",
  "North Goa": "Goa",
  "North Sikkim": "Sikkim",
  "North Tripura": "Tripura",
  "North West  Delhi": "Delhi",
  Nuapada: "Odisha",
  Osmanabad: "Maharashtra",
  Pakur: "Jharkhand",
  Palakkad: "Kerala",
  Palamu: "Jharkhand",
  Palghar: "Maharashtra",
  Pali: "Rajasthan",
  Palwal: "Haryana",
  Panchkula: "Haryana",
  "Panchmahal (Godhra)": "Gujarat",
  Panipat: "Haryana",
  Panna: "Madhya Pradesh",
  "Papum Pare": "Arunachal Pradesh",
  Parbhani: "Maharashtra",
  "Paschim Medinipur (West Medinipur)": "West Bengal",
  Patan: "Gujarat",
  Pathanamthitta: "Kerala",
  Pathankot: "Punjab",
  Patiala: "Punjab",
  Patna: "Bihar",
  "Pauri Garhwal": "Uttarakhand",
  Peddapalli: "Telangana",
  Perambalur: "Tamil Nadu",
  Peren: "Nagaland",
  Phek: "Nagaland",
  Pherzawl: "Manipur",
  Pilibhit: "Uttar Pradesh",
  Pithoragarh: "Uttarakhand",
  Pondicherry: "Puducherry",
  Poonch: "Jammu and Kashmir",
  Porbandar: "Gujarat",
  Prakasam: "Andhra Pradesh",
  Pratapgarh: "Rajasthan",
  "Pratapgarh UP": "Uttar Pradesh",
  Pudukkottai: "Tamil Nadu",
  Pulwama: "Jammu and Kashmir",
  Pune: "Maharashtra",
  "Purba Medinipur (East Medinipur)": "West Bengal",
  Puri: "Odisha",
  "Purnia (Purnea)": "Bihar",
  Purulia: "West Bengal",
  RaeBareli: "Uttar Pradesh",
  Raichur: "Karnataka",
  Raigad: "Maharashtra",
  Raigarh: "Chhattisgarh",
  Raipur: "Chhattisgarh",
  Raisen: "Madhya Pradesh",
  "Rajanna Sircilla": "Telangana",
  Rajgarh: "Madhya Pradesh",
  Rajkot: "Gujarat",
  Rajnandgaon: "Chhattisgarh",
  Rajouri: "Jammu and Kashmir",
  Rajsamand: "Rajasthan",
  Ramanagara: "Karnataka",
  Ramanathapuram: "Tamil Nadu",
  Ramban: "Jammu and Kashmir",
  Ramgarh: "Jharkhand",
  Rampur: "Uttar Pradesh",
  Ranchi: "Jharkhand",
  Rangareddy: "Telangana",
  Ratlam: "Madhya Pradesh",
  Ratnagiri: "Maharashtra",
  Rayagada: "Odisha",
  Reasi: "Jammu and Kashmir",
  Rewa: "Madhya Pradesh",
  Rewari: "Haryana",
  "Ri Bhoi": "Meghalaya",
  Rohtak: "Haryana",
  Rohtas: "Bihar",
  Rudraprayag: "Uttarakhand",
  Rupnagar: "Punjab",
  "Sabarkantha (Himmatnagar)": "Gujarat",
  Sagar: "Madhya Pradesh",
  Saharanpur: "Uttar Pradesh",
  Saharsa: "Bihar",
  Sahibganj: "Jharkhand",
  "Sahibzada Ajit Singh Nagar (Mohali)": "Punjab",
  Saiha: "Mizoram",
  Salem: "Tamil Nadu",
  Samastipur: "Bihar",
  Samba: "Jammu and Kashmir",
  Sambalpur: "Odisha",
  "Sambhal (Bhim Nagar)": "Uttar Pradesh",
  Sangareddy: "Telangana",
  Sangli: "Maharashtra",
  Sangrur: "Punjab",
  "Sant Kabir Nagar": "Uttar Pradesh",
  Saran: "Bihar",
  Satara: "Maharashtra",
  Satna: "Madhya Pradesh",
  "Sawai Madhopur": "Rajasthan",
  Sehore: "Madhya Pradesh",
  Senapati: "Manipur",
  Seoni: "Madhya Pradesh",
  Sepahijala: "Tripura",
  "Seraikela-Kharsawan": "Jharkhand",
  Serchhip: "Mizoram",
  Shahdara: "Delhi",
  Shahdol: "Madhya Pradesh",
  Shahjahanpur: "Uttar Pradesh",
  Shajapur: "Madhya Pradesh",
  "Shamali (Prabuddh Nagar)": "Uttar Pradesh",
  Sheikhpura: "Bihar",
  Sheohar: "Bihar",
  Sheopur: "Madhya Pradesh",
  Shimla: "Himachal Pradesh",
  "Shivamogga (Shimoga)": "Karnataka",
  Shivpuri: "Madhya Pradesh",
  Shopian: "Jammu and Kashmir",
  Shravasti: "Uttar Pradesh",
  Siang: "Arunachal Pradesh",
  "Siddharth Nagar": "Uttar Pradesh",
  Siddipet: "Telangana",
  Sidhi: "Madhya Pradesh",
  Sikar: "Rajasthan",
  Simdega: "Jharkhand",
  Sindhudurg: "Maharashtra",
  Singrauli: "Madhya Pradesh",
  "Sirmaur (Sirmour)": "Himachal Pradesh",
  Sirohi: "Rajasthan",
  Sirsa: "Haryana",
  Sitamarhi: "Bihar",
  Sitapur: "Uttar Pradesh",
  Sivaganga: "Tamil Nadu",
  Sivasagar: "Assam",
  Siwan: "Bihar",
  Solan: "Himachal Pradesh",
  Solapur: "Maharashtra",
  Sonbhadra: "Uttar Pradesh",
  Sonepur: "Odisha",
  Sonipat: "Haryana",
  Sonitpur: "Assam",
  "South 24 Parganas": "West Bengal",
  "South Delhi": "Delhi",
  "South East Delhi": "Delhi",
  "South Garo Hills": "Meghalaya",
  "South Goa": "Goa",
  "South Salmara-Mankachar": "Assam",
  "South Sikkim": "Sikkim",
  "South Tripura": "Tripura",
  "South West  Delhi": "Delhi",
  "South West Garo Hills": "Meghalaya",
  "South West Khasi Hills": "Meghalaya",
  "Sri Ganganagar": "Rajasthan",
  Srikakulam: "Andhra Pradesh",
  Srinagar: "Jammu and Kashmir",
  Sukma: "Chhattisgarh",
  Sultanpur: "Uttar Pradesh",
  Sundargarh: "Odisha",
  Supaul: "Bihar",
  "Surajpur  ": "Chhattisgarh",
  Surat: "Gujarat",
  Surendranagar: "Gujarat",
  Surguja: "Chhattisgarh",
  Suryapet: "Telangana",
  Tamenglong: "Manipur",
  "Tapi (Vyara)": "Gujarat",
  "Tarn Taran": "Punjab",
  Tawang: "Arunachal Pradesh",
  "Tehri Garhwal": "Uttarakhand",
  Tengnoupal: "Manipur",
  Thane: "Maharashtra",
  Thanjavur: "Tamil Nadu",
  Theni: "Tamil Nadu",
  Thiruvananthapuram: "Kerala",
  "Thoothukudi (Tuticorin)": "Tamil Nadu",
  Thoubal: "Manipur",
  Thrissur: "Kerala",
  Tikamgarh: "Madhya Pradesh",
  Tinsukia: "Assam",
  Tirap: "Arunachal Pradesh",
  Tiruchirappalli: "Tamil Nadu",
  Tirunelveli: "Tamil Nadu",
  Tiruppur: "Tamil Nadu",
  Tiruvallur: "Tamil Nadu",
  Tiruvannamalai: "Tamil Nadu",
  Tiruvarur: "Tamil Nadu",
  Tonk: "Rajasthan",
  Tuensang: "Nagaland",
  "Tumakuru (Tumkur)": "Karnataka",
  Udaipur: "Rajasthan",
  Udalguri: "Assam",
  "Udham Singh Nagar": "Uttarakhand",
  Udhampur: "Jammu and Kashmir",
  Udupi: "Karnataka",
  Ujjain: "Madhya Pradesh",
  Ukhrul: "Manipur",
  Umaria: "Madhya Pradesh",
  Una: "Himachal Pradesh",
  Unakoti: "Tripura",
  Unnao: "Uttar Pradesh",
  "Upper Siang": "Arunachal Pradesh",
  "Upper Subansiri": "Arunachal Pradesh",
  "Uttar Dinajpur (North Dinajpur)": "West Bengal",
  "Uttara Kannada (Karwar)": "Karnataka",
  Uttarkashi: "Uttarakhand",
  Vadodara: "Gujarat",
  Vaishali: "Bihar",
  Valsad: "Gujarat",
  Varanasi: "Uttar Pradesh",
  Vellore: "Tamil Nadu",
  Vidisha: "Madhya Pradesh",
  "Vijayapura (Bijapur)": "Karnataka",
  Vikarabad: "Telangana",
  Viluppuram: "Tamil Nadu",
  Virudhunagar: "Tamil Nadu",
  Visakhapatnam: "Andhra Pradesh",
  Vizianagaram: "Andhra Pradesh",
  Wanaparthy: "Telangana",
  "Warangal (Rural)": "Telangana",
  "Warangal (Urban)": "Telangana",
  Wardha: "Maharashtra",
  Washim: "Maharashtra",
  Wayanad: "Kerala",
  "West Champaran": "Bihar",
  "West Delhi": "Delhi",
  "West Garo Hills": "Meghalaya",
  "West Godavari": "Andhra Pradesh",
  "West Jaintia Hills": "Meghalaya",
  "West Kameng": "Arunachal Pradesh",
  "West Karbi Anglong": "Assam",
  "West Khasi Hills": "Meghalaya",
  "West Siang": "Arunachal Pradesh",
  "West Sikkim": "Sikkim",
  "West Singhbhum": "Jharkhand",
  "West Tripura": "Tripura",
  Wokha: "Nagaland",
  "YSR Kadapa": "Andhra Pradesh",
  "Yadadri Bhuvanagiri": "Telangana",
  Yadgir: "Karnataka",
  Yamunanagar: "Haryana",
  Yanam: "Puducherry",
  Yavatmal: "Maharashtra",
  Zunheboto: "Nagaland",
};

interface Data {
  name: string;
  age: string;
  city: string;
  state: string;
}

const editButton: string = `<button onclick="editData(this)">Edit</button>`;
const deleteButton: string = `<button onclick="deleteData(this)">Delete</button>`;

const TableData: Array<Data> = [];
let Editing: any = null;

const getInputId = (id: string) =>
  document.getElementById(id) as HTMLInputElement;

const createOption = (value: string) => {
  const option = document.createElement("option");
  option.setAttribute("value", value);
  const optionText = document.createTextNode(value);
  option.appendChild(optionText);
  return option;
};

function loadOptions() {
  const citySelect = document.getElementById("city") as HTMLSelectElement;
  const stateSelect = document.getElementById("state") as HTMLSelectElement;
  for (const x in Districts) {
    citySelect?.appendChild(createOption(x));
  }
  for (const x of States) {
    stateSelect?.appendChild(createOption(x));
  }
}

function updateState() {
  const stateSelect = document.getElementById("state") as HTMLSelectElement;
  const citySelect = document.getElementById("city") as HTMLSelectElement;
  const state = Districts[citySelect.value];
  stateSelect.value = state;
}

function submitData() {
  if (Editing === null) {
    addData();
  } else {
    updateData();
  }
}

function clearForm() {
  const stateSelect = document.getElementById("state") as HTMLSelectElement;
  const citySelect = document.getElementById("city") as HTMLSelectElement;
  getInputId("name").value = "";
  getInputId("age").value = "";
  citySelect.value = "";
  stateSelect.value = "";
}

function addData() {
  // Get Form Data
  const sno = TableData.length + 1;
  const name = getInputId("name");
  const age = getInputId("age");
  const city = getInputId("city");
  const state = getInputId("state");

  // Create a new row in the table
  const table = document.getElementById("data_table") as HTMLTableElement;
  const newRow = table.insertRow(-1);

  // Insert cells into the row
  const snoCell = newRow.insertCell(0) as HTMLTableCellElement;
  const nameCell = newRow.insertCell(1) as HTMLTableCellElement;
  const ageCell = newRow.insertCell(2) as HTMLTableCellElement;
  const cityCell = newRow.insertCell(3) as HTMLTableCellElement;
  const stateCell = newRow.insertCell(4) as HTMLTableCellElement;
  const editCell = newRow.insertCell(5) as HTMLTableCellElement;
  const deleteCell = newRow.insertCell(6) as HTMLTableCellElement;

  // Data to be updated as cell value
  const nameData: string = name?.value;
  const ageData: string = age?.value;
  const cityData: string = city?.value;
  const stateData: string = state?.value;

  // Add data to the cells
  snoCell.innerHTML = sno.toString();
  nameCell.innerHTML = nameData;
  ageCell.innerHTML = ageData;
  cityCell.innerHTML = cityData;
  stateCell.innerHTML = stateData;
  editCell.innerHTML = editButton;
  deleteCell.innerHTML = deleteButton;

  // Clear form inputs
  clearForm();

  // Update Table Data
  TableData.push({
    name: nameData,
    age: ageData,
    city: cityData,
    state: stateData,
  });
}

function updateData() {
  // Get Form Data
  const row = Editing;
  const serial = row.cells[0].innerHTML - 1;
  const name = getInputId("name");
  const age = getInputId("age");
  const city = getInputId("city");
  const state = getInputId("state");

  // Update Table Data
  TableData[serial] = {
    name: name.value,
    age: age.value,
    city: city.value,
    state: state.value,
  };

  // Update Table Cells
  row.cells[1].innerHTML = name.value;
  row.cells[2].innerHTML = age.value;
  row.cells[3].innerHTML = city.value;
  row.cells[4].innerHTML = state.value;

  // Reset Editing status
  Editing = null;

  // Clear form inputs
  clearForm();
}

function editData(button) {
  // Check for editing status
  const row = button.parentNode.parentNode;
  if (Editing === row) {
    alert("Already editing the data");
    return;
  }
  if (Editing !== null) {
    if (!confirm("Do you want to discard current Form?")) {
      return;
    }
  }

  // Get row data values
  const sno = row.cells[0].innerHTML - 1;
  const name = TableData[sno].name;
  const age = TableData[sno].age;
  const city = TableData[sno].city;
  const state = TableData[sno].state;

  // Set Data in Form
  getInputId("name").value = name;
  getInputId("age").value = age;
  getInputId("city").value = city;
  getInputId("state").value = state;

  // Save Editing status
  Editing = row;
}

function deleteData(button) {
  // Check for Editing Status
  const row = button.parentNode.parentNode;
  if (Editing === row) {
    if (confirm("Are you sure you want to discard Form and delete data?")) {
      clearForm();
      Editing = null;
    } else {
      return;
    }
  }

  // Get row data
  const table = button.parentNode.parentNode.parentNode;
  const totalRows = table.rows.length;
  const sno = row.cells[0].innerHTML - 1;

  // Remove data from table data
  TableData.splice(sno, 1);

  // Remove row from table
  row.parentNode.removeChild(row);
  if (totalRows === 2) return;
  for (let i = 1; i < totalRows - 1; ++i) {
    const cell = table.rows[i].cells[0].innerHTML;
    if (cell != i) {
      table.rows[i].cells[0].innerHTML = i;
    }
  }
}
