// Configurations
const API_BASE = "http://127.0.0.1:5000"; // Assuming frontend and backend are on same PC

// --- i18n Dictionary ---
const translations = {
    en: {
        login_title: "Login to HarvestIQ", login_desc: "Smart Agricultural Decision Engine",
        lbl_username: "Username", lbl_password: "Password", btn_login: "Sign In",
        no_account: "Don't have an account?", register_link: "Register here",
        reg_title: "Create Account", btn_reg: "Register ->", has_account: "Have an account?", login_link: "Login here",

        input_title: "Crop & Soil Details", input_desc: "Enter parameters for the Nagpur Region",
        lbl_crop: "Crop Type", opt_cotton: "Cotton", opt_soybean: "Soybean", opt_wheat: "Wheat", opt_rice: "Rice", opt_tur: "Tur", opt_chana: "Chana", opt_maize: "Maize", opt_orange: "Orange",
        lbl_soil: "Soil Type", opt_black_cotton: "Black Cotton Soil", opt_alluvial: "Alluvial Soil", opt_red: "Red Soil", opt_laterite: "Laterite Soil", opt_sandy: "Sandy Loam",
        lbl_month: "Month", lbl_fertilizer: "Fertilizer (kg/acre)", lbl_storage: "Storage Days", lbl_demand: "Market Demand (0-100)",
        weather_title: "Local Weather", btn_location: "Auto-Fill Location",
        lbl_temp: "Temp (°C)", lbl_rain: "Rainfall (mm)", lbl_humidity: "Humidity (%)", lbl_wind: "Wind (km/h)",
        btn_predict: "Analyze Risk & Yield", processing: "Processing...",
        res_title: "AI Smart Advisory", res_price: "Expected Price", res_yield: "Est. Yield", res_pest: "Pest Risk", res_spoilage: "Spoilage Risk",
        lbl_warnings: "Regional Warnings", lbl_recs: "Recommendations", btn_recalc: "Recalculate"
    },
    hi: {
        login_title: "हार्वेस्टआईक्यू में लॉगिन करें", login_desc: "स्मार्ट कृषि निर्णय इंजन",
        lbl_username: "उपयोगकर्ता नाम", lbl_password: "पासवर्ड", btn_login: "लॉग इन करें",
        no_account: "खाता नहीं है?", register_link: "यहाँ रजिस्टर करें",
        reg_title: "खाता बनाएं", btn_reg: "रजिस्टर ->", has_account: "खाता है?", login_link: "यहाँ लॉगिन करें",

        input_title: "फसल और मिट्टी का विवरण", input_desc: "नागपुर क्षेत्र के लिए पैरामीटर दर्ज करें",
        lbl_crop: "फसल का प्रकार", opt_cotton: "कपास", opt_soybean: "सोयाबीन", opt_wheat: "गेहूँ", opt_rice: "चावल", opt_tur: "तुअर", opt_chana: "चना", opt_maize: "मक्का", opt_orange: "संतरा",
        lbl_soil: "मिट्टी का प्रकार", opt_black_cotton: "काली कपास मिट्टी", opt_alluvial: "जलोढ़ मिट्टी", opt_red: "लाल मिट्टी", opt_laterite: "लेटराइट मिट्टी", opt_sandy: "रेतीली मिट्टी",
        lbl_month: "महीना", lbl_fertilizer: "उर्वरक (किग्रा/एकड़)", lbl_storage: "भंडारण के दिन", lbl_demand: "बाजार की मांग (0-100)",
        weather_title: "स्थानीय मौसम", btn_location: "स्थान स्वतः भरें",
        lbl_temp: "तापमान (°C)", lbl_rain: "वर्षा (मिमी)", lbl_humidity: "नमी (%)", lbl_wind: "हवा (किमी/घंटा)",
        btn_predict: "जोखिम और उपज का विश्लेषण करें", processing: "विश्लेषण किया जा रहा है...",
        res_title: "एआई स्मार्ट एडवाइजरी", res_price: "अपेक्षित मूल्य", res_yield: "अनुमानित उपज", res_pest: "कीट जोखिम", res_spoilage: "खराब होने का जोखिम",
        lbl_warnings: "क्षेत्रीय चेतावनियाँ", lbl_recs: "सिफारिशें", btn_recalc: "पुनर्गणना करें"
    },
    mr: {
        login_title: "HarvestIQ मध्ये लॉग इन करा", login_desc: "स्मार्ट कृषी निर्णय इंजिन",
        lbl_username: "वापरकर्ता नाव", lbl_password: "पासवर्ड", btn_login: "लॉगिन",
        no_account: "खाते नाही?", register_link: "येथे नोंदणी करा",
        reg_title: "खाते तयार करा", btn_reg: "नोंदणी ->", has_account: "खाते आहे?", login_link: "येथे लॉगिन करा",

        input_title: "पीक आणि माती तपशील", input_desc: "नागपूर प्रदेशासाठी पॅरामीटर्स प्रविष्ट करा",
        lbl_crop: "पिकाचा प्रकार", opt_cotton: "कापूस", opt_soybean: "सोयाबीन", opt_wheat: "गहू", opt_rice: "तांदूळ", opt_tur: "तूर", opt_chana: "हरभरा", opt_maize: "मका", opt_orange: "संत्रा",
        lbl_soil: "मातीचा प्रकार", opt_black_cotton: "काळी कापूस माती", opt_alluvial: "गाळाची माती", opt_red: "लाल माती", opt_laterite: "जांभी माती", opt_sandy: "वाळू-मिश्रित माती",
        lbl_month: "महिना", lbl_fertilizer: "खत (किलो/एकर)", lbl_storage: "स्टोरेजचे दिवस", lbl_demand: "बाजारातील मागणी (0-100)",
        weather_title: "स्थानिक हवामान", btn_location: "स्थान स्वयंचलित भरा",
        lbl_temp: "तापमान (°C)", lbl_rain: "पाऊस (मिमी)", lbl_humidity: "आर्द्रता (%)", lbl_wind: "वारा (किमी/तास)",
        btn_predict: "धोका आणि उत्पन्नाचे विश्लेषण करा", processing: "डेटा विश्लेषित करत आहे...",
        res_title: "एआय स्मार्ट सल्ला", res_price: "अपेक्षित किंमत", res_yield: "अंदाजित उत्पन्न", res_pest: "कीटकांचा धोका", res_spoilage: "खराब होण्याचा धोका",
        lbl_warnings: "प्रादेशिक इशारे", lbl_recs: "शिफारसी", btn_recalc: "पुन्हा गणना करा"
    }
};

const recTranslations = {
    "IMPROVE_STORAGE": { en: "Improve storage facilities.", hi: "भंडारण सुविधाओं में सुधार करें।", mr: "स्टोरेज सुविधा सुधारा." },
    "APPLY_PESTICIDE": { en: "Apply pesticide immediately.", hi: "तुरंत कीटनाशक डालें।", mr: "लगेच कीटकनाशक फवारणी करा." },
    "INCREASE_FERTILIZER": { en: "Increase fertilizer application.", hi: "उर्वरक का उपयोग बढ़ाएं।", mr: "खताचा वापर वाढवा." },
    "MONITOR_WEATHER": { en: "Monitor extreme weather stress.", hi: "अत्यधिक मौसम तनाव की निगरानी करें।", mr: "हवामानाच्या तणावावर लक्ष ठेवा." },
    "SELL_NOW": { en: "High market demand. Sell now!", hi: "बाजार में अत्यधिक मांग। अभी बेचें!", mr: "बाजारात जास्त मागणी. आता विका!" },
    "CONDITIONS_STABLE": { en: "Conditions are currently stable.", hi: "स्थितियां वर्तमान में स्थिर हैं।", mr: "सध्याची परिस्थिती स्थिर आहे." }
};

let currentLang = "en";
let currentSpeechText = "";
let isLoginMode = true;

document.addEventListener("DOMContentLoaded", () => {

    // Auth Elements
    const authSection = document.getElementById("authSection");
    const mainHeader = document.getElementById("mainHeader");
    const inputSection = document.getElementById("inputSection");
    const authForm = document.getElementById("authForm");
    const authSwitchLink = document.getElementById("authSwitchLink");
    const btnLogout = document.getElementById("btnLogout");

    // Prediction Elements
    const langSelect = document.getElementById("langSelect");
    const btnLocation = document.getElementById("btnLocation");
    const locationDisplay = document.getElementById("locationDisplay");
    const locationText = document.getElementById("locationText");
    const predictionForm = document.getElementById("predictionForm");
    const btnRecalculate = document.getElementById("btnRecalculate");
    const btnSpeak = document.getElementById("btnSpeak");
    const resultsSection = document.getElementById("resultsSection");
    const loading = document.getElementById("loading");

    // ====== INITIALIZATION & AUTH CHECK ======
    const checkAuthStatus = () => {
        const token = localStorage.getItem("harvestiq_token");
        if (token) {
            authSection.classList.add("hidden");
            mainHeader.classList.remove("hidden");
            inputSection.classList.remove("hidden");
        } else {
            authSection.classList.remove("hidden");
            mainHeader.classList.add("hidden");
            inputSection.classList.add("hidden");
            resultsSection.classList.add("hidden");
        }
    };
    checkAuthStatus();

    // ====== LANGUAGE & LOCALIZATION ======
    const formatNumber = (num) => {
        if (currentLang === 'en') return num;
        const localeString = currentLang === 'hi' ? 'hi-IN' : 'mr-IN';
        try {
            return new Intl.NumberFormat(localeString, { maximumFractionDigits: 2 }).format(num);
        } catch {
            return num;
        }
    };

    const updateLanguage = () => {
        const dict = translations[currentLang];
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            // Handle dynamically switched auth keys
            if (isLoginMode && key === 'reg_title') el.innerText = dict['login_title'];
            else if (!isLoginMode && key === 'login_title') el.innerText = dict['reg_title'];
            else if (dict[key]) el.innerText = dict[key];
        });
    };

    langSelect.addEventListener("change", (e) => {
        currentLang = e.target.value;
        updateLanguage();
    });
    updateLanguage();

    // ====== AUTHENTICATION LOGIC ======
    authSwitchLink.addEventListener("click", (e) => {
        e.preventDefault();
        isLoginMode = !isLoginMode;
        const dict = translations[currentLang];

        document.getElementById("authTitle").innerText = dict[isLoginMode ? 'login_title' : 'reg_title'];
        document.getElementById("btnAuthSubmit").innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> <span>${dict[isLoginMode ? 'btn_login' : 'btn_reg']}</span>`;
        document.getElementById("authSwitchText").innerText = dict[isLoginMode ? 'no_account' : 'has_account'];
        document.getElementById("authSwitchLink").innerText = dict[isLoginMode ? 'register_link' : 'login_link'];
    });

    authForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const endpoint = isLoginMode ? "/auth/login" : "/auth/register";

        try {
            const res = await fetch(`${API_BASE}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();

            if (res.ok) {
                if (isLoginMode) {
                    localStorage.setItem("harvestiq_token", data.access_token);
                    checkAuthStatus();
                } else {
                    alert("Account Created! Please login now.");
                    authSwitchLink.click(); // Switch to login view
                }
            } else {
                alert("Error: " + (data.msg || "Authentication failed"));
            }
        } catch (error) {
            alert("Could not connect to backend server.");
        }
    });

    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("harvestiq_token");
        checkAuthStatus();
        window.speechSynthesis.cancel();
    });


    // ====== GEOLOCATION & WEATHER ======
    btnLocation.addEventListener("click", async () => {
        const icon = btnLocation.querySelector("i");
        icon.classList.remove("fa-location-crosshairs");
        icon.classList.add("fa-spinner", "fa-spin");

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                try {
                    // Reverse Geocoding via Nominatim
                    const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
                    const geoData = await geoRes.json();

                    if (geoData && geoData.address) {
                        const cityName = geoData.address.city || geoData.address.state_district || geoData.address.state || "Unknown Area";
                        locationText.innerText = cityName;
                        locationDisplay.classList.remove("hidden");
                    }

                    // Open-Meteo Current Weather
                    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${Math.round(lat * 100) / 100}&longitude=${Math.round(lon * 100) / 100}&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m`);
                    const weatherData = await weatherRes.json();

                    if (weatherData.current) {
                        document.getElementById("temperature").value = weatherData.current.temperature_2m;
                        document.getElementById("humidity").value = weatherData.current.relative_humidity_2m;
                        document.getElementById("rainfall").value = weatherData.current.rain;
                        document.getElementById("wind").value = weatherData.current.wind_speed_10m;
                    }
                } catch (err) {
                    console.error("Fetch error", err);
                    alert("Failed to fetch location/weather details.");
                } finally {
                    icon.classList.add("fa-location-crosshairs");
                    icon.classList.remove("fa-spinner", "fa-spin");
                }
            }, (err) => {
                alert("Location access denied or unavailable.");
                icon.classList.add("fa-location-crosshairs");
                icon.classList.remove("fa-spinner", "fa-spin");
            });
        }
    });

    // ====== PREDICTION ENGINE ======
    predictionForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        inputSection.classList.add("hidden");
        loading.classList.remove("hidden");

        const data = {
            crop: parseInt(document.getElementById("crop").value),
            soil: parseInt(document.getElementById("soil").value),
            month: parseInt(document.getElementById("month").value),
            fertilizer: parseFloat(document.getElementById("fertilizer").value),
            storage_days: parseInt(document.getElementById("storage_days").value),
            demand: parseFloat(document.getElementById("demand").value),
            temperature: parseFloat(document.getElementById("temperature").value),
            rainfall: parseFloat(document.getElementById("rainfall").value),
            humidity: parseFloat(document.getElementById("humidity").value),
            wind: parseFloat(document.getElementById("wind").value)
        };

        const token = localStorage.getItem("harvestiq_token");

        try {
            const response = await fetch(`${API_BASE}/predict/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();

            if (response.ok) {
                renderResults(result);
            } else if (response.status === 401 || response.status === 422) {
                alert("Session Expired. Please login again.");
                btnLogout.click();
            } else {
                alert("Error from server: " + (result.error || result.msg || "Unknown"));
                inputSection.classList.remove("hidden");
            }
        } catch (error) {
            alert("Could not connect to backend server ensure it's running.");
            inputSection.classList.remove("hidden");
        } finally {
            loading.classList.add("hidden");
        }
    });

    // Render results
    function renderResults(res) {
        document.getElementById("resPrice").innerText = "₹" + formatNumber(res.price);
        document.getElementById("resYield").innerText = formatNumber(res.yield) + " Q/Ac";

        const pestText = res.pest === 1 ? (currentLang === 'en' ? "HIGH" : "HIGH") : "LOW";
        const spoilText = res.spoilage === 1 ? (currentLang === 'en' ? "HIGH" : "HIGH") : "LOW";
        document.getElementById("resPest").innerText = pestText;
        document.getElementById("resSpoilage").innerText = spoilText;

        const rb = document.getElementById("riskBadge");
        rb.innerText = res.risk_level + " RISK";
        rb.className = "badge " + res.risk_level.toLowerCase();

        // Build Localized Speech Text
        let speechParams = "";
        if (currentLang === 'hi') speechParams += `जोखिम स्तर ${res.risk_level} है। `;
        else if (currentLang === 'mr') speechParams += `धोका पातळी ${res.risk_level} आहे. `;
        else speechParams += `The risk level is ${res.risk_level}. `;

        // Warnings
        const wList = document.getElementById("warningsList");
        wList.innerHTML = "";
        if (res.regional_warnings && res.regional_warnings.length > 0) {
            res.regional_warnings.forEach(w => {
                const li = document.createElement("li");
                li.innerText = w;
                wList.appendChild(li);
                speechParams += w + ". ";
            });
            document.getElementById("warningsBox").classList.remove("hidden");
        } else {
            document.getElementById("warningsBox").classList.add("hidden");
        }

        // Recommendations
        const rList = document.getElementById("recsList");
        rList.innerHTML = "";
        if (currentLang === 'hi') speechParams += "सिफारिशें: ";
        else if (currentLang === 'mr') speechParams += "शिफारसी: ";
        else speechParams += "Recommendations: ";

        if (res.recommendations) {
            res.recommendations.forEach(r => {
                const token = recTranslations[r];
                const text = token ? token[currentLang] : r;

                const li = document.createElement("li");
                li.innerText = text;
                rList.appendChild(li);

                speechParams += text + " ";
            });
        }

        currentSpeechText = speechParams;
        resultsSection.classList.remove("hidden");
    }

    // Recalculate
    btnRecalculate.addEventListener("click", () => {
        resultsSection.classList.add("hidden");
        inputSection.classList.remove("hidden");
        window.speechSynthesis.cancel();
    });

    // Voice Assistant
    btnSpeak.addEventListener("click", () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(currentSpeechText);

            if (currentLang === "hi") utterance.lang = "hi-IN";
            else if (currentLang === "mr") utterance.lang = "mr-IN";
            else utterance.lang = "en-IN";

            btnSpeak.classList.add("pulse");
            utterance.onend = () => {
                btnSpeak.classList.remove("pulse");
            };

            window.speechSynthesis.speak(utterance);
        } else {
            alert("Speech Synthesis not supported in this browser.");
        }
    });

});
