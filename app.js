console.log('')
console.log('-------------------------------')
console.log('  Скрипт Bot Gorilla запущен.')
console.log('  Разработчик: Алексей Мирный')
console.log('  vk.com/riconc')

console.log('-------------------------------')
console.log('')

// ВСЕ НАСТРОЙКИ В ФАЙЛЕ /database/settings.json! 

const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');

const cars = [
	{
		name: 'На своих ногах',
		cost: 500,
		id: 1
	},
	{
		name: 'Перекатывающиеся бревна',
		cost: 2500,
		id: 2
	},
	{
		name: 'Горшок и кирка',
		cost: 5000,
		id: 3
	},
	{
		name: 'Таракан',
		cost: 7500,
		id: 4
	},
	{
		name: 'Личная собака',
		cost: 25000,
		id: 5
	},
	{
		name: 'Собака Тутанхамона',
		cost: 50000,
		id: 6
	},
	{
		name: 'Деревянная конструкция "Велоспид"',
		cost: 75000,
		id: 7
	},
	{
		name: 'Пантера',
		cost: 80000,
		id: 8
	},
	{
		name: 'Пума',
		cost: 135000,
		id: 9
	},
	{
		name: 'Гепард',
		cost: 200000,
		id: 10
	},
	{
		name: 'Лошадь',
		cost: 350000,
		id: 11
	},
	{
		name: 'Осёл',
		cost: 750000,
		id: 12
	},
	{
		name: 'Горилла',
		cost: 1000000,
		id: 13
	},
	{
		name: 'Верблюд',
		cost: 1750000,
		id: 14
	},
	{
		name: 'Летающий ковёр',
		cost: 2500000,
		id: 15
	},
	{
		name: 'Раб',
		cost: 2750000,
		id: 16
	},
	{
		name: 'Усыпальница бога на колёсиках',
		cost: 3000000,
		id: 17
	}
];

const yachts = [
	{
		name: 'Коробка',
		cost: 1000,
		id: 1
	},
	{
		name: 'Деревянная лодка',
		cost: 100000,
		id: 2
	},
	{
		name: '2-х местное каноэ',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Папирусный корабль',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Деревянный корабль',
		cost: 35000000,
		id: 5
	},
	{
		name: 'Титаник',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Материк Евразия с моторчиком',
		cost: 750000000,
		id: 7
	}
];

const airplanes = [
	{
		name: 'Разноцветный камень',
		cost: 10000,
		id: 1
	},
	{
		name: 'Летающий диск',
		cost: 350000,
		id: 2
	},
	{
		name: 'Стекляшки',
		cost: 700000,
		id: 3
	},
	{
		name: 'Самолётик из будущего',
		cost: 1000000,
		id: 4
	},
	{
		name: 'Летающая тарелка для жрецов',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Летающая тарелка для фараонов',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Божественная летающая тарелка',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Блин',
		cost: 8000000,
		id: 8
	}
];

const homes = [
	{
		name: 'Улица',
		cost: 250,
		id: 1
	},
	{
		name: 'Овраг',
		cost: 3000,
		id: 2
	},
	{
		name: 'Песчанный домик',
		cost: 3500,
		id: 3
	},
	{
		name: 'Ячейка на складе',
		cost: 5000,
		id: 4
	},
	{
		name: 'Дом без окон',
		cost: 10000,
		id: 5
	},
	{
		name: 'Деревянный дом',
		cost: 25000,
		id: 6
	},
	{
		name: 'Кирпичный дом',
		cost: 375000,
		id: 7
	},
	{
		name: 'Двухэтажный дом',
		cost: 75250000,
		id: 8
	},
	{
		name: 'Личная пирамида',
		cost: 99800000000,
		id: 9
	}
];

const apartments = [
	{
		name: 'Место под кроватью',
		cost: 1500,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира Дональда Трампа',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Кирпич',
		cost: 250,
		id: 1
	},
	{
		name: 'Почтовый таракан',
		cost: 500,
		id: 2
	},
	{
		name: 'Надписи на стенах',
		cost: 2000,
		id: 3
	},
	{
		name: 'Газета',
		cost: 10000,
		id: 4
	},
	{
		name: 'Телекинез',
		cost: 50000,
		id: 5
	},
	{
		name: 'Банки на ниточке',
		cost: 250000,
		id: 6
	}
];

const pets = [
	{
		name: 'Гепард',
		cost: 1000,
		id: 1
	},
	{
		name: 'Турист',
		cost: 25000,
		id: 2
	},
	{
		name: 'Верблюд',
		cost: 500000,
		id: 3
	},
	{
		name: 'Раб',
		cost: 300000000,
		id: 4
	},
	{
		name: 'Тутанхамон',
		cost: 1250000000,
		id: 5
	},
	{
		name: 'Анубис',
		cost: 5000000000,
		id: 6
	},
	{
		name: 'Амон',
		cost: 30000000000,
		id: 7
	},
	{
		name: 'Ра',
		cost: 180000000000,
		id: 8
	}
];


const petsupd = [
	{
		cost: 2000,
		id: 1
	},
	{
		cost: 50000,
		id: 2
	},
	{
		cost: 1000000,
		id: 3
	},
	{
		cost: 600000000,
		id: 4
	},
	{
		cost: 2500000000,
		id: 5
	},
	{
		cost: 10000000000,
		id: 6
	},
	{
		cost: 60000000000,
		id: 7
	},
	{
		cost: 360000000000,
		id: 8
	}
];

const farms = [
	{
		name: 'Пирамида Джосера',
		cost: 73000,
		id: 1
	},
	{
		name: 'Пирамида Микерина',
		cost: 1000000,
		id: 2
	},
	{
		name: 'Ломаная пирамида',
		cost: 750000000,
		id: 3
	},
	{
		name: 'Розовая пирамида',
		cost: 200000000000,
		id: 4
	},
	{
		name: 'Пирамида Хефрена',
		cost: 1000000000000,
		id: 5
	},
	{
		name: 'Пирамида Хеопса',
		cost: 25000000000000,
		id: 6
	}
];

const businesses = [
	{
		name: 'Производство глины',
		cost: 5000,
		earn: 700,
		id: 1,
		icon: '🏺'
	},
	{
		name: 'Производство вина',
		cost: 25000,
		earn: 1000,
		id: 2,
		icon: '🍷'
	},
	{
		name: 'Продажа рабов',
		cost: 300000,
		earn: 9000,
		id: 3,
		icon: '⛓'
	},
	{
		name: 'Продажа участков земли',
		cost: 1000000,
		earn: 38000,
		id: 4,
		icon: '🌐'
	},
	{
		name: 'Продажа храмов',
		cost: 15000000,
		earn: 80000,
		id: 5,
		icon: '⛪'
	},
	{
		name: 'Магазин антиквариата',
		cost: 750000000,
		earn: 100000,
		id: 6,
		icon: '🗿'
	},
	{
		name: 'Продажа Пирамид',
		cost: 8000000000,
		earn: 250000,
		id: 7,
		icon: '⛏'
	},
	{
		name: 'Разработка иероглифов',
		cost: 15000000000,
		earn: 350000,
		id: 8,
		icon: '🈺'
	},
	{
		name: 'Турагентство по путешествию во времени',
		cost: 250000000000,
		earn: 950000,
		id: 9,
		icon: '⌛'
	},
	{
		name: 'Песчаная электростанция',
		cost: 16000000000000,
		earn: 2500000,
		id: 10,
		icon: '💡'
	},
	{
		name: 'Производство пирамид от НЛО',
		cost: 50000000000000000,
		earn: 5000000000000,
		id: 11,
		icon: '🛸'
	}
];

const works = [
	{
		name: 'Элитный раб',
		requiredLevel: 1,
		min: 2000,
		max: 2500,
		id: 1
	},
	{
		name: 'Инженер пирамид',
		requiredLevel: 3,
		min: 3750,
		max: 4000,
		id: 2
	},
	{
		name: 'Подданый фараона',
		requiredLevel: 5,
		min: 4000,
		max: 4500,
		id: 3
	},
	{
		name: 'Писец',
		requiredLevel: 8,
		min: 5000,
		max: 5500,
		id: 4
	},
	{
		name: 'Номарх',
		requiredLevel: 10,
		min: 7500,
		max: 8000,
		id: 5
	},
	{
		name: 'Правая рука жреца',
		requiredLevel: 14,
		min: 9000,
		max: 9489,
		id: 6
	},
	{
		name: 'Жрец',
		requiredLevel: 22,
		min: 10000,
		max: 12500,
		id: 7
	},
	{
		name: 'Фараон',
		requiredLevel: 25,
		min: 12500,
		max: 13500,
		id: 8
	},
	{
		name: 'Бог',
		requiredLevel: 49,
		min: 16000,
		max: 17500,
		id: 9
	}
];

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(100, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'ДОХЕРА');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

let promo = "0";

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

let btc = 6000;

let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

let users = require('./database/users.json');
let config = require('./database/settings.json');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log(' База данных успешно сохранена.');
	console.log('');
}, 30000);

setInterval(async () => {

smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

}, 1);

setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(x=> {
		var frmbtc = 0;
		if(x.misc.farm === 1)
		{
			frmbtc += 2;
		}

		if(x.misc.farm === 2)
		{
			frmbtc += 10;
		}
		
		if(x.misc.farm === 3)
		{
			frmbtc += 50;
		}
		
		if(x.misc.farm === 4)
		{
			frmbtc += 100;
		}
		
		if(x.misc.farm === 5)
		{
			frmbtc += 250;
		}
		
		if(x.misc.farm === 6)
		{
			frmbtc += 500;
		}
		var frmbtcm = frmbtc * x.farms;
		x.misc.farm_btc += frmbtcm;
	});
}, 3600000);

setInterval(async () => {
	users.filter(x=> x.settings.old == false).map(x=> {
		x.settings.old == true;
	});
}, 604800);

setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);

function clearTemp()
{
	users.map(user => {
		user.timers.hasWorked = false;
		user.timers.bonus = false;
		user.promo = false;
		user.energy = 10;
	});
}

function clearPromo()
{
	promo = 0;
	users.map(user => {
		user.promo = false;
	});
}

function msgError(messagetext)
{
	return bot(`${messagetext} ${utils.pick([`😯`, `🙂`, `🤑`, `☺`])}`);
}

clearTemp();
clearPromo();

async function saveUsers()
{
	require('fs').writeFileSync('./database/users.json', JSON.stringify(users, null, '\t'));
	return true;
}

async function saveConfig()
{
	require('fs').writeFileSync('./database/settings.json', JSON.stringify(config, null, '\t'));
	return true;
}

vk.setOptions({ token: config.grouptoken, pollingGroupId: config.groupid });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[public185224524\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[public185224524\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			id: message.senderId,
			uid: users.length,
			balance: 5000,
			bank: 0,
			btc: 0,
			farm_btc: 0,
			farms: 0,
			farmslimit: 2500,
			energy: 10,
			opit: 0,
			biz: 0,
			zhelezo: 0,
			zoloto: 0,
			almaz: 0,
			bizlvl: 0,
			nicklimit: 16,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
			timers: {
				hasWorked: false,
				bonus: false,
				poxod: false,
				poxod2: false,
				kopat: false,
				hack: false
			},
			tag: user_info.first_name,
			work: 0,
			business: 0,
			notifications: true,
			exp: 1,
			level: 1,
			referal: null,
			promo: false,
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0,
				pet: 0,
			},
			settings: {
				firstmsg: true,
				adm: 0,
				trade: true,
				old: false,
				limit: 1000000,
			},
			pet: {
				lvl: 0,
				poterl: false
			},
			marriage: {
				partner: 0,
				requests: []
			}
		});
		console.log(` +1 игрок [Игроков: ${users.length}]`);
		console.log(``);
		saveUsers();
	}

	message.user = users.find(x=> x.id === message.senderId);

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	if(message.user.ban) return bot(`ваш аккаунт заблокирован ⛔`);

	const command = commands.find(x=> x[0].test(message.text));

	if(message.user.settings.firstmsg)
	{

bot(`я вижу ты новенький! Рад познакомится, отправь «помощь» что бы узнать мои команды. 📚

Беседа с ботом: https://vk.me/join/AJQ1d2qd7xJQjr0qqTBtJDS4`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🔑 Бонус"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📚 Помощь"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "💀 Пирамида"
		},
			"color": "primary"
		}
]
		]
			})
		});

		message.user.settings.firstmsg = false;


		saveUsers();
		return;

	}

	if(!command)
	{

		if(!message.isChat) return bot(`такой команды не существует, отправь «помощь» что бы узнать мои команды.`);
		if(message.isChat) return;

	}

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	saveUsers();
	console.log(` Введена команда: ${message.text}.`)
	console.log(``)
});

const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.hear(/^(?:помощь|команды|📚 Помощь|меню|help|commands|cmds|menu|начать|start|@imset_bot 📚 Помощь)$/i, async (message, bot) => {
	await bot(`мои команды:

🍀 Развлекательные:
🙊 Анекдот
↪ Переверни [фраза]
🔮 Шар [фраза]
📊 Инфа [фраза]
⚖ Выбери [фраза] или [фраза2]

🚀 Игры:
⠀⠀🎲 Кубик [1-6]
⠀⠀🎰 Казино [сумма]
⠀⠀📈 Трейд [вверх/вниз] [сумма]
⠀⠀🥛 Стаканчик [1-3] [сумма]
⠀⠀🔦 Сейф [случайные 2 цифры] 
⠀⠀🍂 Копать
⠀⠀🚕 Перевозить

👔 Работа - список работ
⠀🔨 Работать
⠀❌ Уволиться

💼 Бизнес:
⠀⠀📈 Бизнес - статистика
⠀⠀💵 Бизнес снять
⠀⠀✅ Бизнес улучшить

🌽 Питомцы:
⠀⠀🐒 Питомец - информация
⠀⠀🐪 Питомец поход
⠀⠀🌟 Питомец улучшить


🔥 Полезное:
📠 Реши [пример]
📊 Курс

💡 Разное:
📒 Профиль
💲 Баланс
💰 Склад монет [сумма/снять сумма]
👑 Рейтинг - ваш рейтинг
✒ Прозвище [прозвище/вкл/выкл]
🛒 Магазин
➖ Продать [предмет]
💀 Пирамида - ферма костей
🤝 Передать [id] [сумма]
🏆 Топ
💎 Бонус - ежедневный бонус
👪 Брак [id] - сделать предложение
⠀ ⠀Браки - список предложений
💔 Развод
⌚ Дата [id] - дата регистрации игрока
🎁 Донат

🆘 Репорт [фраза] - ошибки или пожелания`, );
{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🔑 Бонус"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📚 Помощь"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "💀 Пирамида"
		},
			"color": "primary"
		}
]
		]
			})
		};
});

cmd.hear(/^(?:помощь)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].toLowerCase();

	if(message.args[1] === 'переверни')
	{
		return message.send(`Команда "Переверни" пишет ваш текст вверх ногами (Поддерживаются цифры, буквы латинского и кириллического алфавита, а также некоторые символы)`);
	}

	if(message.args[1] === 'шар')
	{
		return message.send(`Команда "Шар" используя магию рандома выводит случайное сообщение.`);
	}

	if(message.args[1] === 'инфа')
	{
		return message.send(`Команда "Инфа" случайным образом присылает шанс чего-либо. Также можно использовать команды "Шанс" или "Вероятность"`);
	}

	if(message.args[1] === 'выбери')
	{
		return message.send(`Команда "Выбери" случайным образом выбирает один из двух предложенных вариантов.`);
	}

	if(message.args[1] === 'казино')
	{
		return message.send(`Команда "Казино" случайным образом умножает вашу ставку (Могут выпасть множители х0, х0.25, х0.5, x0.75, х1, х2, х5, х50). Чтобы поставить всю сумму введите "Казино все" или "Казино вабанк"`);
	}

	if(message.args[1] === 'кубик')
	{
		return message.send(`Команда "Кубик" сравнивает ваше число со случайным от 1 до 6, если вы угадали, то получаете вознаграждение. Также можно использовать "Куб"`);
	}

	if(message.args[1] === 'трейд')
	{
		return message.send(`Команда "Трейд" - симулятор бинарных опционов. Введите "Трейд вверх (сумма)" если думаете, что курс валюты будет увеличиваться, или "Трейд вниз (сумма)" если будет уменьшаться.`);
	}

	if(message.args[1] === 'стаканчик')
	{
		return message.send(`С помощью команды "Стаканчик" вы можете сыграть в аналог игры "Напёрстки". Чтобы играть введите "Стаканчик [1-3] [сумма]".`);
	}

	if(message.args[1] === 'работа')
	{
		return message.send(`С помощью команды "Работа" вы можете устроиться на одну из работ. Чтобы отрыть новые профессии, вам нужно отработать определённое кол-во игровых недель (Команда "Работать"). Для увольнения с работы введите "Уволиться".`);
	}

	if(message.args[1] === 'бизнес')
	{
		return message.send(`Владея бизнесом, вы можете зарабатывать немало денег:
		Бизнесы [номер] - купить бизнес
		Бизнес - ваш бизнес
		Бизнес снять - снять деньги со счёта бизнеса
		Продать бизнес - продажа бизнеса`);
	}

	if(message.args[1] === 'реши')
	{
		return message.send(`Команда "Реши" решает ваш пример (Реши 5 + 5).
		Команда умеет:
		Складывать (+)
		Вычитать (-)
		Умножать (*)
		Делить (/)`);
	}

	if(message.args[1] === 'курс')
	{
		return message.send(`С помощью команды "Курс" можно узнать курс Костей на данный момент.`);
	}

	if(message.args[1] === 'профиль')
	{
		return message.send(`Команда "Профиль" выводит вашу игровую статистику.`);
	}

	if(message.args[1] === 'баланс')
	{
		return message.send(`Команда "Баланс" выводит кол-во валюты на вашем аккаунте.`);
	}

	if(message.args[1] === 'склад')
	{
		return message.send(`При вводе команды "склад" (без параметров) выводится ваша сумма на счёте. Для того чтобы положить на счёт деньги введите "Склад [сумма]" (Максимум 250.000.000.000$). Чтобы забрать деньги из склада введите "склад снять/взять [сумма]".
		Сумма в складе увеличивается каждый час (больше сумма - больше прибыль).`);
	}

	if(message.args[1] === 'рейтинг')
	{
		return message.send(`Пустая команда "Рейтинг" (без параметров) выводит ваше кол-во рейтинга (также можно узнать в профиле). При указании параметра (любое число) вы купите данное кол-во единиц рейтинга (👑1 = 250.000.000$). Рейтинг влияет на ваше положение в топе.`);
	}

	if(message.args[1] === 'прозвище')
	{
		return message.send(`С помощью команды "Прозвище" можно выбрать себе ник длинною до 15 символов. Также, ник можно делать кликабельным/некликабельным в топе "Прозвище вкл" и "Прозвище выкл"`);
	}

	if(message.args[1] === 'магазин')
	{
		return message.send(`Команда "Магазин" выводит список категорий товаров, которые доступны для покупки.`);
	}

	if(message.args[1] === 'продать')
	{
		return message.send(`С помощью команды "Продать" вы можете продать любой предмет (Машину, дом, квартиру, телефон, яхту, самолет, вертолет, биткоин, ферму).`);
	}

	if(message.args[1] === 'передать')
	{
		return message.send(`Команда "Передать" переводит указанную вами сумму любому игроку (Передать ${message.user.uid} 1000).`);
	}

	if(message.args[1] === 'топ')
	{
		return message.send(`Команда "Топ" выводит 10 игроков с самым большим рейтингом.`);
	}

	if(message.args[1].includes('брак'))
	{
		return message.send(`Используя команды "Брак", "Браки", "развод", вы можете жениться/выходить замуж/разводиться.
		Брак [id] - сделать предложение
		Браки - список предложений
		Развод - ...`);
	}

	if(message.args[1] === 'дата')
	{
		return message.send(`Команда "Дата" выводит дату регистрации человека в боте. Можно использовать id человека.`);
	}

	if(message.args[1] === 'репорт')
	{
		return message.send(`С помощью команды "Репорт" вы можете отправить создателю бота любое сообщение. Также можно использовать "Реп", "Жалоба", "Rep".`);
	}
});

cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи: "${text.split('').reverse().join('')}"`)
});

cmd.hear(/^(?:анекдот)$/i, async (message, bot) => {

	let textanek = utils.pick(['Разговариваают два американца:\n — У этих русских не только душа другая. Они и устроены по-другому.\n — ?\n — Я сам слышал как один сказал другому — Одень ты на х@й шапку, а то уши замерзнут.', 'Бывает, борешься за что-то, борешься, а потом в один прекрасный момент понимаешь: «А пошло оно все на х@й! » И жить становится намного проще.', '"А это точно поможет? ", — недоверчиво спрашивала царевна Несмеяна, поднося к губам какую-то самокрутку.', 'Чтобы хоть как-то привлечь внимание школьников, преподавательница написала на доске « Жесть. Смотреть всем».', 'Если Патриарх Кирилл верит в Бога, то почему он ездит в бронированном Мерседесе под охраной ФСО за счет бюджета, а не надеется на заступничество своего небесного начальника?']);

	return bot(`анекдот: 

	${textanek}`)
});

cmd.hear(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(phrase);
});

cmd.hear(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['шанс этого', 'мне кажется около']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});

cmd.hear(/^(?:донат)$/i, async (message, bot) => {
	return bot(`узнать список товаров и купить донат в автоматическом режиме можно на нашем сайте: В РАЗРАБОТКЕ ✅`);
});

cmd.hear(/^(?:профиль|проф)$/i, async (message, bot) => {
	let text = ``;

	text += `🔎 ID: ${message.user.uid}\n`;
	text += `💰 Денег: ${utils.sp(message.user.balance)}$\n`;
	text += `🏦 На складе: ${utils.sp(message.user.bank)}$\n`;
	text += `💀 Костей: ${utils.sp(message.user.btc)}💀\n`;
	text += `👑 Рейтинг: ${utils.sp(message.user.rating)}\n`;
	if(message.user.work) text += `👔 Работа: ${works[message.user.work - 1].name}\n`;
	if(message.user.marriage.partner) text += `👬 Партнер: ${users[message.user.marriage.partner].tag}`;
	text += `🌟 Уровень: ${message.user.level} [${message.user.exp}/24]\n`;

	if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter ||
		message.user.realty.home || message.user.realty.apartment ||
		message.user.misc.phone || message.user.misc.farm || message.user.business || message.user.misc.pet)
	{
		text += `\n🔑 Имущество:\n`;

		if(message.user.transport.car) text += `⠀🚗 Машины: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.yacht) text += `⠀🚣 Лодка: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `⠀🛸 НЛО: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		
		if(message.user.realty.home) text += `⠀🏠 Жилище: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.realty.apartment) text += `⠀🌇 Жилище из будущего: ${apartments[message.user.realty.apartment - 1].name}\n`;

		if(message.user.misc.phone) text += `⠀📱 Телефоны: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.misc.pet) text += `⠀🐌 Питомец: ${pets[message.user.misc.pet - 1].name}\n`;
		if(message.user.misc.farm) text += `⠀💀 Пирамиды: ${farms[message.user.misc.farm - 1].name} (x${message.user.farms})\n`;
		if(message.user.business) text += `⠀${businesses[message.user.business - 1].icon} ${businesses[message.user.business - 1].name}\n`;
	}

	text += `\n📗 Дата регистрации: ${message.user.regDate}`;
	return bot(`твой профиль:\n${text}`);
});

cmd.hear(/^(?:баланс)$/i, async (message, bot) => {
	let text = `на руках ${utils.sp(message.user.balance)}$ 💸`;

	if(message.user.bank) text += `\n🏦 На складе ${utils.sp(message.user.bank)}$`;
	if(message.user.btc) text += `\n💀 Костей ${utils.sp(message.user.btc)}💀`;
	if(message.user.zhelezo) text += `\n🎛 ${message.user.zhelezo} железа`;
	if(message.user.zoloto) text += `\n🏵 ${message.user.zoloto} золота`;
	if(message.user.almaz) text += `\n💎 ${message.user.almaz} алмаза`;

	return bot(text);
});

cmd.hear(/^(?:склад)$/i, async (message, bot) => {
	if(message.user.bank < 1) return bot(`ваш банковский счет пуст.`);
	return bot(`на складе ${message.user.bank}$
✍🏻 Введите "Склад [кол-во]" для пополнения`);
});

cmd.hear(/^(?:склад)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`вы сняли ${utils.sp(message.args[1])}$
🏦 Остаток на складе: ${utils.sp(message.user.bank)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:склад)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] < 1) return bot(`на складе ${message.user.bank}$
✍🏻 Введите "Склад снять [кол-во]" для снятия`);

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег. ${smilesuccess}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`вы положили на склад ${utils.sp(message.args[1])}$ ${smilesuccess}
💰 На руках ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:рассылка)\s([^]+)$/i, async (message, bot) => {
if(message.user.settings.adm < 4) return;
users.filter(x=> x.id !== 1).map(zz => { 
vk.api.messages.send({ user_id: zz.id, message: `${message.args[1]}`}); 
}); 
let people = 0;
bot(`рассылка отправлена!`);
for(let id in users) {
vk.api.call('messages.send', {
chat_id: id,
message: `${message.args[1]}` });
}
return;
});

cmd.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`уведомления отключены! 🔕`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return bot(`уведомления включены! 🔔`);
	}
});

cmd.hear(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(!message.user.settings.trade) return bot(`у вас установлен бан передачи ${smileerror}`);

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		message.user.balance -= message.args[2];
		user.balance += message.args[2];

		await bot(`вы перевели ${user.tag} ${utils.sp(message.args[2])}$ ${smilesuccess}
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:рейтинг)$/i, async (message, bot) => {
	return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

cmd.hear(/^(?:прозвище)\s(вкл|выкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.hear(/^(?:прозвище)\s(.*)$/i, async (message, bot) => {

	if(message.args[1].length > message.user.nicklimit) return bot(`вы указали длинное прозвище. ${smileerror}`);

	message.user.tag = message.args[1];
	let smilenick = utils.pick([`😯`, `🙂`, `☺`]);
	let ggtext = utils.pick([`фантастическое`, `крутое`, `классное`, `прикольное`]);
	return bot(`${ggtext} прозвище! ${smilenick}`);
});

cmd.hear(/^(?:магазин)$/i, async (message, bot) => {
	return bot(`разделы магазина:

🚙 Транспорт:
⠀⠀🚗 Машины
⠀⠀🛥 Лодки
⠀⠀🛩 НЛО

🏘 Недвижимость:
⠀⠀🏠 Жилище
⠀⠀🌇 Жилище из будущего

📌 Остальное:
  🐌 Питомцы
⠀⠀📱 Телефоны
⠀⠀⭐ Пирамиды
⠀⠀👑 Рейтинг [кол-во] - $250 млн
⠀⠀💼 Бизнесы
⠀⠀💀 Кости [кол-во]

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Телефон 7', 'Машины 1', 'Пирамиды 2', 'Кости 100', 'Рейтинг 10'])}"`);
});

cmd.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машин ${smileerror}`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		message.user.transport.car = 0;

		return bot(`вы продали свою машину за ${utils.sp(a)}$`);
	}

	if(/питом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.pet) return bot(`у вас нет питомца ${smileerror}`);
		let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);

		message.user.balance += Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);
		message.user.misc.pet = 0;
		message.user.pet.lvl = 0;
		message.user.pet.poterl = false;

		return bot(`вы продали своего питомца за ${utils.sp(a)}$`);
	}

	if(/желез/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zhelezo < 1) return bot(`у Вас нет железа. ⚠`);
		let a2 = message.user.zhelezo * 15000;

		var zhelezosda = message.user.zhelezo;

		message.user.balance += message.user.zhelezo * 15000;
		message.user.zhelezo = 0;

		return bot(`вы продали ${zhelezosda} железа за ${utils.sp(a2)}$ ✅`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.almaz < 1) return bot(`у Вас нет алмазов. ⚠`);
		let a3 = message.user.almaz * 100000;

		var zhelezosda2 = message.user.almaz;

		message.user.balance += message.user.almaz * 100000;
		message.user.almaz = 0;

		return bot(`вы продали ${zhelezosda2} алмазов за ${utils.sp(a3)}$ ✅`);
	}

	if(/золот/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zoloto < 1) return bot(`у Вас нет золота. ⚠`);
		let a4 = message.user.zoloto * 50000;

		var zhelezosda3 = message.user.zoloto;

		message.user.balance += message.user.zoloto * 50000;
		message.user.zoloto = 0;

		return bot(`вы продали ${zhelezosda3} золота за ${utils.sp(a4)}$ ✅`);
	}

	if(/лодк/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет лодки ${smileerror}`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return bot(`вы продали свою лодку за ${utils.sp(a)}$`);
	}

	if(/НЛО/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет НЛО ${smileerror}`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return bot(`вы продали своего НЛО за ${utils.sp(a)}$`);
	}


	if(/жилищ/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет жилища ${smileerror}`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;

		return bot(`вы продали своё жилище за ${utils.sp(a)}$`);
	}

	if(/жилищ из будущего/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет жилища из будущего ${smileerror}`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;

		return bot(`вы продали своё жилище из будущего за ${utils.sp(a)}$`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет телефона ${smileerror}`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return bot(`вы продали свой телефон за ${utils.sp(a)}$`);
	}

	if(/пирамид/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.farm) return bot(`у вас нет пирамид ${smileerror}`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
		let a2 = a*message.user.farms;

		message.user.balance += Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);

		bot(`вы продали ${farms[message.user.misc.farm - 1].name} (x${message.user.farms}) за ${utils.sp(a2)}$ ${smilesuccess}`);
		message.user.misc.farm = 0;
		message.user.farms = 0;
		return;
	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга ${smileerror}`);
		let a = (150000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.business) return bot(`у вас нет бизнеса`);
		let a = Math.floor(businesses[message.user.business - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business = 0;
		message.user.bizlvl = 0;

		return bot(`вы продали свой бизнес за ${utils.sp(a)}$`);
	}

	if(/кост/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно костей`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}$`);
	}
});

cmd.hear(/^(?:машина|машины)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`машины: 
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. На своих ногах (500$)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Катающиеся бревна (2.500$)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. Горшок и кирка (5.000$)
${message.user.transport.car === 4 ? '🔹' : '🔸'} 4. Таракан (7.500$)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. Личная собака (25.000$)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Собака Тутанхамона (50.000$)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. Деревянная конструкция "Велоспид" (75.000$)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. Пантера (80.000$)
${message.user.transport.car === 9 ? '🔹' : '🔸'} 9. Пума (135.000$)
${message.user.transport.car === 10 ? '🔹' : '🔸'} 10. Гепард (200.000$)
${message.user.transport.car === 11 ? '🔹' : '🔸'} 11. Лошадь (350.000$)
${message.user.transport.car === 12 ? '🔹' : '🔸'} 12. Осёл (750.000$)
${message.user.transport.car === 13 ? '🔹' : '🔸'} 13. Горилла (1.000.000$)
${message.user.transport.car === 14 ? '🔹' : '🔸'} 14. Верблюд (1.750.000$)
${message.user.transport.car === 15 ? '🔹' : '🔸'} 15. Летающий ковёр (2.500.000$)
${message.user.transport.car === 16 ? '🔹' : '🔸'} 16. Раб (2.750.000$)
${message.user.transport.car === 17 ? '🔹' : '🔸'} 17. Усыпальница бога на колёсиках (3.000.000$)

Для покупки введите "Машины [номер]"`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:лодки|лодка)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`лодки: 
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Коробка (1000$)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Деревянная лодка (100.000$)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. 2-х местное каноэ (15.000.000$)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Папирусный корабль (25.000.000$)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Деревянный корабль (35.000.000$)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Титаник (50.000.000$)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Материк Евразия с моторчиком (750.000.000$)

Для покупки введите "Лодка [номер]"`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть лодка (${yachts[message.user.transport.yacht - 1].name}), введите "Продать лодку"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:НЛО)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`НЛО: 
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Разноцветный камень (100.000$)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. Летающий диск (350.000$)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Стекляшки (700.000$)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Самолётик из будущего (1.000.000$)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. Летающая тарелка для жрецов (1.400.000$)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Летающая тарелка для фараонов (42.600.000$)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Божественная летающая тарелка (955.500.000$)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Блин (7.598.000.000$)

Для покупки введите "НЛО [номер]"`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть НЛО (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать "`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:жилище|жилища)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Коробка из-под холодильника (250$)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Подвал (3.000$)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Палатка (3.500$)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Домик на дереве (5.000$)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Полуразрушенный дом (10.000$)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Дом в лесу (25.000$)
${message.user.realty.home === 7 ? '🔹' : '🔸'} 7. Деревянный дом (37.500$)
${message.user.realty.home === 8 ? '🔹' : '🔸'} 8. Дача (125.000$)
${message.user.realty.home === 9 ? '🔹' : '🔸'} 9. Кирпичный дом (80.000$)
${message.user.realty.home === 10 ? '🔹' : '🔸'} 10. Коттедж (450.000$)
${message.user.realty.home === 11 ? '🔹' : '🔸'} 11. Особняк (1.250.000$)
${message.user.realty.home === 12 ? '🔹' : '🔸'} 12. Дом на Рублёвке (5.000.000$)
${message.user.realty.home === 13 ? '🔹' : '🔸'} 13. Личный небоскрёб (7.000.000$)
${message.user.realty.home === 14 ? '🔹' : '🔸'} 14. Остров с особняком (12.500.000$)
${message.user.realty.home === 15 ? '🔹' : '🔸'} 15. Белый дом (20.000.000$)

Для покупки введите "Дом [номер]"`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак (15.000$)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000$)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000$)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (260.000$)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000$)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре Москвы (1.600.000$)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (4.000.000$)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (6.000.000$)

Для покупки введите "Квартира [номер]"`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`телефоны: 
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Кирпич (250$)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Почтовый таракан (500$)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. Надписи на стенах (2.000$)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. Газета (10.000$)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Телекинез (50.000$)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. Банки на ниточке (250.000$)

Для покупки введите "Телефон [номер]"`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:питомцы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`питомцы:
🐆 1. Гепард (1.000$)
👲 2. Турист (25.000$)
🐫 3. Верблюд (500.000$)
👳🏿‍♂️ 4. Раб (300.000.000$)
🎴 5. Тутанхамон (1.250.000.000$)
🔥 6. Анубис (5.000.000.000$)
☀ 7. Амон (30.000.000.000$)
👑 8. Ра (180.000.000.000$)

🚩Для покупки введите "Питомцы [номер]"`);

	const sell = pets.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.pet) return bot(`у Вас уже есть питомец. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.pet = sell.id;
		message.user.pet.lvl += 1;

		return bot(`вы успешно купили себе питомца, отправляйте его в поход и прокачивайте его уровень. ${smilesuccess}`);
	}
});

cmd.hear(/^(?:питомец)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {
return bot(`информация:
🐌 Питомец: «${pets[message.user.misc.pet - 1].name}»
💳 Стоимость улучшения: ${utils.sp(petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl)}$
🌟 Уровень: ${message.user.pet.lvl}`);
}

});



cmd.hear(/^(?:промо деньги)$/i, async (message, bot) => {
if(message.isChat) return bot(`что бы получить бонус с промокода вы должны отправить этот промокод боту в личку.`);
if(message.user.promo) return bot(`вы уже активировали промокод. ${smileerror}`);
else 
{

	if(promo >= config.promolimit) return bot(`у этого промокода ЗАКОНЧИЛИСЬ ИСПОЛЬЗОВАНИЯ, включи уведомления в группе о новых записях что бы узнавать ОДНИМ ИЗ ПЕРВЫХ о новых промокодах. 📢`);
	if(config.promotip === "btc") message.user.btc += config.promovalue;
	if(config.promotip === "balance") message.user.balance += config.promovalue;
	message.user.promo = true;
	promo += 1;
	ostalos = config.promolimit-promo;
	return bot(`зачислено +${utils.sp(config.promovalue)}${config.promotip.toString().replace(/btc/gi, "฿").replace(/balance/gi, "$")} ✅
📢 Осталось ${ostalos} использований.`);

}

});

cmd.hear(/^(?:питомец улучшить)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.balance < petsupd[message.user.misc.pet - 1].cost) return bot(`недостаточно денег. ${smileerror}`);

		var priceupd = petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl;

		var lvlpoupd = message.user.pet.lvl+1;

		message.user.balance -= priceupd;
		message.user.pet.lvl += 1;

		return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);


}

});

cmd.hear(/^(?:питомец поход)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.timers.poxod) return bot(`вы сможете отправить питомца в поход через 60 минут. Ваш питомец довольно сильно устал! ${smileerror}`);

		let cashfind = utils.random(736,2879);
		message.user.balance += cashfind;
		message.user.timers.poxod = true;

			setTimeout(() => {
				message.user.timers.poxod = false;
			}, 3600000);

		return bot(`ваш питомец нашёл в походе ${utils.sp(cashfind)}$. Улучшайте своего питомца! ${smilesuccess}`);
}

});

cmd.hear(/^(?:пирамиды)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Пирамиды: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. Пирамида Джосера 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. Пирамида Микерина 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. Ломанная пирамида 50₿/час (100.000.000$)
${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Розовая пирамида 100₿/час (100.000.000$)
${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. Пирамида Хефрена 250₿/час (100.000.000$)
${message.user.misc.farm === 6 ? '🔹' : '🔸'} 6. Пирамида Хеопса 500₿/час (900.000.000$)

Для покупки введите "Пирамиды [номер] [кол-во]"`);

	const sell = farms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{

		if(Number(message.args[2])){

		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

			message.user.balance -= sell.cost;
			message.user.misc.farm = sell.id;
			message.user.farms += message.args[2];

			saveUsers();
			return bot(`вы купили ${sell.name} (x${message.args[2]}) за ${utils.sp(sell.cost)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);

		}
		else {

		message.user.balance -= sell.cost;
		message.user.misc.farm = sell.id;
		message.user.farms += 1;

		saveUsers();
		return bot(`вы купили ${sell.name} (x1) за ${utils.sp(sell.cost)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		}	
	}
});

cmd.hear(/^(?:пирамиды 1)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Пирамиды: 
	${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. Пирамида Джосера 2₿/час (20.500.000$)
	${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. Пирамида Микерина 10₿/час (100.000.000$)
	${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. Ломанная пирамида 50₿/час (100.000.000$)
	${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Розовая пирамида 100₿/час (100.000.000$)
	${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. Пирамида Хефрена 250₿/час (100.000.000$)
	${message.user.misc.farm === 6 ? '🔹' : '🔸'} 6. Пирамида Хеопса 500₿/час (900.000.000$)

Для покупки введите "Пирамиды [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 20500000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 20500000)
	{

		var pricefarms1 = 20500000*message.args[1];

		message.user.balance -= pricefarms1;
		message.user.misc.farm = 1;

		if(message.user.misc.farm === 1) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили Пирамиду Джосера (x${Number(message.args[1])}) за ${utils.sp(pricefarms1)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:пирамиды 2)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Пирамиды: 
	${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. Пирамида Джосера 2₿/час (20.500.000$)
	${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. Пирамида Микерина 10₿/час (100.000.000$)
	${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. Ломанная пирамида 50₿/час (100.000.000$)
	${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Розовая пирамида 100₿/час (100.000.000$)
	${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. Пирамида Хефрена 250₿/час (100.000.000$)
	${message.user.misc.farm === 6 ? '🔹' : '🔸'} 6. Пирамида Хеопса 500₿/час (900.000.000$)

Для покупки введите "Пирамиды [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 100000000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 100000000)
	{

		var pricefarms2 = 100000000*message.args[1];

		message.user.balance -= pricefarms2;
		message.user.misc.farm = 2;

		if(message.user.misc.farm === 2) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили Пирамиду Микерина (x${Number(message.args[1])}) за ${utils.sp(pricefarms2)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:пирамиды 3)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Пирамиды: 
	${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. Пирамида Джосера 2₿/час (20.500.000$)
	${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. Пирамида Микерина 10₿/час (100.000.000$)
	${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. Ломанная пирамида 50₿/час (100.000.000$)
	${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Розовая пирамида 100₿/час (100.000.000$)
	${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. Пирамида Хефрена 250₿/час (100.000.000$)
	${message.user.misc.farm === 6 ? '🔹' : '🔸'} 6. Пирамида Хеопса 500₿/час (900.000.000$)

Для покупки введите "Пирамиды [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 900000000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 900000000)
	{

		var pricefarms3 = 900000000*message.args[1];

		message.user.balance -= pricefarms3;
		message.user.misc.farm = 3;

		if(message.user.misc.farm === 3) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили Ломанную пирамиду (x${Number(message.args[1])}) за ${utils.sp(pricefarms3)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:пирамиды 4)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Пирамиды: 
	${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. Пирамида Джосера 2₿/час (20.500.000$)
	${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. Пирамида Микерина 10₿/час (100.000.000$)
	${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. Ломанная пирамида 50₿/час (100.000.000$)
	${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Розовая пирамида 100₿/час (100.000.000$)
	${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. Пирамида Хефрена 250₿/час (100.000.000$)
	${message.user.misc.farm === 6 ? '🔹' : '🔸'} 6. Пирамида Хеопса 500₿/час (900.000.000$)

Для покупки введите "Пирамиды [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 900000000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 900000000)
	{

		var pricefarms4 = 900000000*message.args[1];

		message.user.balance -= pricefarms4;
		message.user.misc.farm = 4;

		if(message.user.misc.farm === 4) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили Розовую пирамиду (x${Number(message.args[1])}) за ${utils.sp(pricefarms4)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:пирамиды 5)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Пирамиды: 
	${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. Пирамида Джосера 2₿/час (20.500.000$)
	${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. Пирамида Микерина 10₿/час (100.000.000$)
	${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. Ломанная пирамида 50₿/час (100.000.000$)
	${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Розовая пирамида 100₿/час (100.000.000$)
	${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. Пирамида Хефрена 250₿/час (100.000.000$)
	${message.user.misc.farm === 6 ? '🔹' : '🔸'} 6. Пирамида Хеопса 500₿/час (900.000.000$)

Для покупки введите "Пирамиды [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 900000000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 900000000)
	{

		var pricefarms5 = 900000000*message.args[1];

		message.user.balance -= pricefarms5;
		message.user.misc.farm = 5;

		if(message.user.misc.farm === 5) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили Пирамиду Хефрена (x${Number(message.args[1])}) за ${utils.sp(pricefarms5)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:пирамиды 6)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
	${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. Пирамида Джосера 2₿/час (20.500.000$)
	${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. Пирамида Микерина 10₿/час (100.000.000$)
	${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. Ломанная пирамида 50₿/час (100.000.000$)
	${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Розовая пирамида 100₿/час (100.000.000$)
	${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. Пирамида Хефрена 250₿/час (100.000.000$)
	${message.user.misc.farm === 6 ? '🔹' : '🔸'} 6. Пирамида Хеопса 500₿/час (900.000.000$)

Для покупки введите "Пирамиды [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 900000000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 900000000)
	{

		var pricefarms6 = 900000000*message.args[1];

		message.user.balance -= pricefarms6;
		message.user.misc.farm = 6;

		if(message.user.misc.farm === 6) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили Пирамиду Хеопса (x${Number(message.args[1])}) за ${utils.sp(pricefarms6)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свой рейтинг на ${utils.sp(message.args[1])}👑 за ${utils.sp(message.args[1] * 250000000)}$`);
	}
});

cmd.hear(/^(?:бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`бизнесы:
${message.user.business === 1 ? '🔸' : '🔹'} 1. Производство глины - 5000$
⠀ ⠀ ⠀ Прибыль: 700$/час
${message.user.business === 2 ? '🔸' : '🔹'} 2. Производство вина - 25.000$
⠀ ⠀ ⠀ Прибыль: 1000$/час
${message.user.business === 3 ? '🔸' : '🔹'} 3. Продажа рабов - 300.000$
⠀ ⠀ ⠀ Прибыль: 9.000$/час
${message.user.business === 4 ? '🔸' : '🔹'} 4. Продажа участков земли - 1.000.000$
⠀ ⠀ ⠀ Прибыль: 38.000$/час
${message.user.business === 5 ? '🔸' : '🔹'} 5. Продажа храмов - 15.000.000$
⠀ ⠀ ⠀ Прибыль: 80.000$/час
${message.user.business === 6 ? '🔸' : '🔹'} 6. Магазин антиквариата - 750.000.000$
⠀ ⠀ ⠀ Прибыль: 100.000$/час
${message.user.business === 7 ? '🔸' : '🔹'} 7. Продажа пирамид - 8.000.000.000$
⠀ ⠀ ⠀ Прибыль: 250.000$/час
${message.user.business === 8 ? '🔸' : '🔹'} 8. Разработка иероглифов - 15.000.000.000$
⠀ ⠀ ⠀ Прибыль: 350.000$/час
${message.user.business === 9 ? '🔸' : '🔹'} 9. Турагенство по путешествию во времени - 250.000.000.000$
⠀ ⠀ ⠀ Прибыль: 950.000$/час
${message.user.business === 10 ? '🔸' : '🔹'} 10. Песчаная электростанция - 16.000.000.000.000$
⠀ ⠀ ⠀ Прибыль: 2.500.000$/час
${message.user.business === 11 ? '🔸' : '🔹'} 11. Производство пирамид от НЛО - 50.000.000.000.000.000$
⠀ ⠀ ⠀ Прибыль: 5.000.000.000.000$/час
Для покупки введите "Бизнесы [номер]"`);

	const sell = businesses.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.business) return bot(`у вас уже есть бизнес (${businesses[message.user.business - 1].name}), введите "Продать бизнес"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= message.args[1])
	{
		message.user.balance -= sell.cost;
		message.user.business = sell.id;
		message.user.bizlvl = 1;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:курс)$/i, async (message, bot) => {
	return bot(`курс валют на данный момент:
💸Биткоин: ${utils.sp(btc)}$`);
});

cmd.hear(/^(?:кости)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * btc ) > message.user.balance) return bot(`недостаточно денег
Курс костей: ${btc}💀`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}$`);
	}
});

cmd.hear(/^(?:топ)$/i, async (message, bot) => {
		let top = [];
	
		users.map(x=> {
			top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
		});
	
		top.sort((a, b) => {
			return b.rating - a.rating;
		});
	
		let text = ``;
		const find = () => {
			let pos = 1000;
	
			for (let i = 0; i < top.length; i++)
			{
				if(top[i].id === message.senderId) return pos = i;
			}
	
			return pos;
		}
	
		for (let i = 0; i < 2; i++)
		{
			if(!top[i]) return;
			const user = top[i];
	
			text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 👑${utils.sp(user.rating)} | $${utils.rn(user.balance)}
			`;
		}
	
		return bot(`топ игроков:
			${text}
	—————————————————
	${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.rating)} | $${utils.rn(message.user.balance)}`);
	});

cmd.hear(/^(?:бонус|🔑 Бонус|@imset_bot 🔑 Бонус)$/i, async (message, bot) => {

	if(message.user.timers.bonus) return bot(`бонус можно получить раз в 24 часа ${smileerror}`);

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;


	if(prize === 1)
	{
		message.user.balance += 50000;
		return bot(`вы выиграли 50.000$ ${smilesuccess}`);
	}

	if(prize === 2)
	{
		message.user.btc += 1000;
		return bot(`вы выиграли 1.000₿ ${smilesuccess}`);
	}

	if(prize === 3)
	{
		message.user.rating += 5;
		return bot(`вы выиграли 5👑`);
	}

	if(prize === 4)
	{
		message.user.rating += 1;
		return bot(`вы выиграли 1👑`);
	}

	if(prize === 5)
	{
		message.user.rating += 10;
		return bot(`вы выиграли 10👑`);
	}

	if(prize === 6)
	{
		message.user.rating += 2;
		return bot(`вы выиграли 2👑`);
	}
	if(prize === 7)
	{
		message.user.rating += 3;
		return bot(`вы выиграли 3👑`);
	}
	if(prize === 8)
	{
		message.user.rating += 4;
		return bot(`вы выиграли 4👑`);
	}
	if(prize === 9)
	{
		message.user.bank += 1000000;
		return bot(`вы выиграли 1.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
	if(prize === 10)
	{
		message.user.bank += 5000000;
		return bot(`вы выиграли 5.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 11)
	{
		message.user.bank += 10000000;
		return bot(`вы выиграли 10.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 12)
	{
		message.user.bank += 50000000;
		return bot(`вы выиграли 50.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
});

cmd.hear(/^(?:поход)$/i, async (message, bot) => {

	if(message.user.timers.poxod2) return bot(`вы сегодня уже были в походе. ${smileerror}`);

	let prize2 = utils.pick([1, 2, 3, 4, 5, 6, 7, 8]);

	setTimeout(() => {
		message.user.timers.poxod2 = false;
	}, 86400000);

	message.user.timers.poxod2 = true;


	if(prize2 === 1)
	{
		message.user.balance += 50000;
		return bot(`находясь в походе, вы нашли 50.000$ ${smilesuccess}`);
	}

	if(prize2 === 2)
	{
		message.user.btc += 1000;
		return bot(`находясь в походе, вы нашли 1.000💀 ${smilesuccess}`);
	}

	if(prize2 === 3)
	{
		message.user.rating += 5;
		return bot(`находясь в походе, вы нашли 5👑`);
	}

	if(prize2 === 4)
	{
		message.user.rating += 1;
		return bot(`находясь в походе, вы нашли 1👑`);
	}

	if(prize2 === 5)
	{
		message.user.rating += 10;
		return bot(`находясь в походе, вы нашли 10👑`);
	}

	if(prize2 === 6)
	{
		message.user.rating += 2;
		return bot(`находясь в походе, вы нашли 2👑`);
	}
	if(prize2 === 7)
	{
		message.user.rating += 3;
		return bot(`находясь в походе, вы нашли 3👑`);
	}
	if(prize2 === 8)
	{
		message.user.rating += 20;
		return bot(`находясь в походе, вы нашли 20👑`);
	}
	if(prize2 === 9)
	{
		message.user.rating += 4;
		return bot(`находясь в походе, вы нашли 4👑`);
	}
});

cmd.hear(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`вы уже делали предложение этому игроку`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		return bot(`вы вступили в брак с игроком "${user.tag}"`);
	}

	user.marriage.requests.push(message.user.uid);
	return bot(`вы сделали предложение игроку "${user.tag}"`);
});

cmd.hear(/^(?:браки)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже состоите в браке`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});

cmd.hear(/^(?:развод)$/i, async (message, bot) => {
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`вы теперь свободный человек`);
});

cmd.hear(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});

cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
	if(message.isChat) return bot(`команда работает только в ЛС.`);

	vk.api.messages.send({ user_id: config.ownerid, forward_messages: message.id, message: `Player id: ${message.user.uid}` }).then(() => {
		return bot(`ваше сообщение отправлено.`);
	}).catch((err) => {
		return bot(`укажите свой ID в файле /database/settings.json`);
	});
});

cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	if(message.user.settings.adm < 1) return;

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;

	vk.api.messages.send({ user_id: user.id, message: `✉ Сообщение от администратора:
	Язык: 🇷🇺
	
	${message.args[2]}` });
});

cmd.hear(/^(?:реши)\s([0-9]+)\s(\+|\-|\/|\*)\s([0-9]+)$/i, async (message, bot) => {
	const result = eval(`${message.args[1]} ${message.args[2]} ${message.args[3]}`);
	return bot(`${message.args[1]} ${message.args[2]} ${message.args[3]}=${result}`);
});

cmd.hear(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать в Общее - ${work.name}
		👔 Введите команду "Работать"`);
	}
});

cmd.hear(/^(?:работа)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	🔹 1. Элитный раб - зарплата ~12.500$
	🔹 2. Инженер пирамид - зарплата ~22.500$
	🔹 3. Подданый фараона - зарплата ~25.000$
	🔹 4. Писец - зарплата ~30.000$
	🔹 5. Номарх - зарплата ~45.000$
	🔹 6. Правая рука жреца - зарплата ~55.000$
	🔹 7. Жрец - зарплата ~60.000$
	🔹 8. Фараон - зарплата ~75.000$
	🔹 9. Бог - зарплата ~100.000$
	Для трудоустройства введите "Работа [номер]`);
});

cmd.hear(/^(?:работать)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работа"`);

	if(message.user.timers.hasWorked) return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие 10 минут`);

	setTimeout(() => {
		message.user.timers.hasWorked = false;
	}, 600000);

	message.user.timers.hasWorked = true;

	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;

	return bot(`рабочий день закончен 
	💵 Вы заработали ${utils.sp(earn)}$`);
});

cmd.hear(/^(?:уволиться)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете`);
	
	message.user.work = 0;
	return bot(`вы уволились со своей работы`);
});

cmd.hear(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 2000000;
		return bot(`вы угадали! Приз 2.000.000$`);
	} else return bot(`не угадали 
	🎲 Выпало число ${int}`);
});

cmd.hear(/^(?:казино)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 0.5, 0.5, 0.5, 0.5, 0.50, 0.50, 0.75, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 2, 2, 2, 2, 5, 50]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас ${smilesuccess}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] * multiply)}$ ${smileerror}` : `вы выиграли ${utils.sp(message.args[1] * multiply)}$ ${smilesuccess}`}`} (x${multiply})
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	let smilekazinobad = utils.pick([`😒`, `😯`, `😔`, `😕`]);

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег ${smilekazinobad}`);
	if(message.args[2] >= 50) return bot(`ставка должна быть больше 50$ ${smilekazinobad}`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			✅ Вы заработали +${message.args[2] * multiply}$
			💰 Баланс: ${message.user.balance}$`);
		} else {
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			❌ Вы потеряли ${message.args[2]}$ 
			💰 Баланс: ${message.user.balance}`);
		}
	}
});

cmd.hear(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег 😔
💰 Ваш баланс: ${message.user.balance}$`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`вы угадали! Приз ${message.args[2] * multiply} ${smilesuccess}`);
		} else {
			return bot(`вы не угадали, это был ${cup}-ый стаканчик ${smileerror}`);
		}
	}
});

cmd.hear(/^(?:бизнес)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);
	var lvlcash = biz.earn*message.user.bizlvl;
var updprice2 = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl
	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(lvlcash)}$/час
	💰 На счёте: ${utils.sp(message.user.biz)}$
	🌟 Уровень: ${message.user.bizlvl}
	✅ Стоимость улучшения: ${utils.sp(updprice2)}$`);
});

cmd.hear(/^(?:бизнес улучшить)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);

	var updprice = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl;

	if(message.user.balance < updprice) return bot(`недостаточно денег. ${smileerror}`);

	message.user.bizlvl += 1;
	message.user.balance -= updprice;

	return bot(`вы успешно улучшили бизнес. ${smilesuccess}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);


});

cmd.hear(/^(?:бизнес)\s(?:снять)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	if(!message.user.biz) return bot(`у вас нет денег на счёте этого бизнеса. ${smileerror}`);


	var cashlvlbiz = message.user.biz*messsage.user.bizlvl;

	message.user.balance += cashlvlbiz;
	message.user.biz = 0;

	bot(`вы сняли со счёта своего бизнеса ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`);
	message.user.biz = 0;

	return;
});

cmd.hear(/^(?:пирамида|💀 Пирамида|@imset_bot 💀 Пирамида)$/i, async (message, bot) => {
	let smileerror2 = utils.pick([`😒`, `😯`, `😔`, `🤔`]);

	if(!message.user.misc.farm) return bot(`у Вас нет пирамид. ${smileerror2}`);
	if(!message.user.farm_btc) return bot(`на ваших пирамидах еще нет костей. Новые кости появятся через час 🔎`);

	const btc_ = message.user.farm_btc;

	message.user.btc += message.user.farm_btc;
	message.user.farm_btc = 0;

	return bot(`вы собрали со своих пирамид ${utils.sp(btc_)}💀`);
});

cmd.hear(/^(?:restart)$/i, async (message, bot) => {
	if(message.user.settings.adm < 4) return;
	await bot(`бот уходит в перезагрузку.`);

	await saveUsers();
	process.exit(-1);
	console.log("node app")
});

cmd.hear(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
	if(message.args[1] < 10 || message.args[1] >= 100) return;

	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 10000000000;
		return bot(`невероятно! Вы угадали число.
		💲 Вам начислено 10.000.000.000$`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали число. Вам выпало число "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.
		
		Если вы угадаете код, то вы получите 10.000.000.000$`);
	}
});


cmd.hear(/^(?:выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 2) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.balance += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор выдал вам ${utils.sp(message.args[2])}$! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:бан)\s(.*)$/i, async (message, bot) => { 
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 2) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.ban = true; 

saveUsers();
await bot(`вы забанили игрока *id${user.id} (${user.tag}).`,); 
vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт был заблокирован. ⛔` }); 
}
});

cmd.hear(/^(?:разбан)\s(.*)$/i, async (message, bot) => { 
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 2) return;

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.ban = false; 

saveUsers();
await bot(`вы разбанили игрока *id${user.id} (${user.tag}).`); 
vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт был разблокирован.` }); 
}
});

cmd.hear(/^(?:промо вкл)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return; 

clearPromo();
return bot(`промокод включен! ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип btc)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return;
config.promotip = "btc"; 
saveConfig();
return bot(`тип промокода: Bitcoin. ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип баланс)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return;
config.promotip = "balance"; 
saveConfig();
return bot(`тип промокода: Баланс. ${smilesuccess}`);

});

cmd.hear(/^(?:копать)$/i, async (message, bot) => { 

return bot(`использование: «копать железо/золото/алмазы» ${smileerror}`);

});

cmd.hear(/^(?:копать железо)$/i, async (message, bot) => { 

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzhelezo = utils.random(16, 97);

message.user.energy -= 1;
message.user.opit += 1;
message.user.zhelezo += randzhelezo;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzhelezo} железа.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzhelezo} железа.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать золото)$/i, async (message, bot) => { 

if(message.user.opit < 300) return bot(`что бы копать золото нужно больше 300 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzoloto = utils.random(5, 35);

message.user.energy -= 1;
message.user.opit += 5;
message.user.zoloto += randzoloto;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzoloto} золота.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzoloto} золота.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать алмазы)$/i, async (message, bot) => { 

if(message.user.opit < 3000) return bot(`что бы копать алмазы нужно больше 3 000 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randalmaz = utils.random(3, 26);

message.user.energy -= 1;
message.user.opit += 10;
message.user.almaz += randalmaz;

saveUsers();

if(message.user.energy > 0) return bot(`+${randalmaz} алмазов.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randalmaz} алмазов.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:железо)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.zhelezo)} железа. 🎛`);

});

cmd.hear(/^(?:опыт)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.opit)} опыта. 🏆`);

});

cmd.hear(/^(?:алмазы)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.almaz)} алмазов. 💎`);

});

cmd.hear(/^(?:золото)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.zoloto)} золота. 🏵`);

});

cmd.hear(/^(?:перевозить)$/i, async (message, bot) => { 
if(message.user.opit < 3000) return bot(`что бы Перевозить вам нужно 3 000 опыта.
Копайте железо и увеличивайте свой опыт! ⚠`);
if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

taxicash = utils.random(987923, 3416011);
message.user.energy -= 1;
message.user.balance += taxicash;

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`вы заработали ${utils.sp(taxicash)}$
Энергия закончилась. ⚠`);

}

if(message.user.energy > 0) bot(`вы заработали ${utils.sp(taxicash)}$`);

});

cmd.hear(/^(?:взломать|взлом)$/i, async (message, bot) => { 

if(message.user.timers.hack) return bot(`вы сможете взломать через 5 минут ${smileerror}`);

let situac = utils.random(1,2);

if(situac === 1)
{

let hackcash = utils.random(156781,451981);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`вы нашли уязвимость на популярной пирамидовой бирже и Вам заплатили за найденную ошибку! ✅ Вы заработали ${utils.sp(hackcash)}$`);

}
if(situac === 2)
{

let hackcash = utils.random(26981051,41184185);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`вам удалось ограбить склад, но, не все так просто. Вы случайно показалм своё лицо и придется отсидеться пока про Вас не забудут. ✅ Вы заработали ${utils.sp(hackcash)}$`);

}

});

cmd.hear(/^(?:промо)\s([0-9]+)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return;
config.promovalue = Number(message.args[1]); 
saveConfig();
return bot(`сумма промокода: ${config.promovalue}. ${smilesuccess}`);

});

cmd.hear(/^(?:промо лимит)\s([0-9]+)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return;
config.promolimit = Number(message.args[1]); 
saveConfig();
return bot(`лимит использований промокода: ${config.promolimit}. ${smilesuccess}`);

});