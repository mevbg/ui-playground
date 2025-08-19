export const searchForm = {
  lastUpdate: '2025-06-03T11:35:40+00:00',
  offerTypes: [
    {
      value: 1,
      text: 'Отдава под наем',
      isSeparator: false
    },
    {
      value: 2,
      text: 'Продава',
      isSeparator: false
    }
  ],
  categories: [
    {
      value: 1,
      text: 'Жилищен имот',
      isSeparator: false,
      types: [
        {
          value: 4,
          text: '1-стаен апартамент',
          isSeparator: false
        },
        {
          value: 5,
          text: '2-стаен апартамент',
          isSeparator: false
        },
        {
          value: 6,
          text: '3-стаен апартамент',
          isSeparator: false
        },
        {
          value: 7,
          text: '4-стаен апартамент',
          isSeparator: false
        },
        {
          value: 8,
          text: 'Многостаен апартамент',
          isSeparator: false
        },
        {
          value: 12,
          text: 'Къща',
          isSeparator: false
        },
        {
          value: 13,
          text: 'Етаж от къща',
          isSeparator: false
        },
        {
          value: 101,
          text: 'Редова къща',
          isSeparator: false
        }
      ],
      hasBuildingOptions: true
    },
    {
      value: 3,
      text: 'Парцел',
      isSeparator: false,
      types: [
        {
          value: 1,
          text: 'За жилищни нужди',
          isSeparator: false
        },
        {
          value: 2,
          text: 'Обществено-обслужващи дейности',
          isSeparator: false
        },
        {
          value: 3,
          text: 'Смесено предназначение',
          isSeparator: false
        },
        {
          value: 4,
          text: 'Строителство на обекти за отдих и развлечение',
          isSeparator: false
        },
        {
          value: 5,
          text: 'Промишлено строителство',
          isSeparator: false
        },
        {
          value: 6,
          text: 'Складови дейности',
          isSeparator: false
        },
        {
          value: 7,
          text: 'Озеленяване',
          isSeparator: false
        },
        {
          value: 8,
          text: 'Спортни обекти',
          isSeparator: false
        },
        {
          value: 9,
          text: 'Вилни зони - за сезонни постройки',
          isSeparator: false
        },
        {
          value: 10,
          text: 'Друго',
          isSeparator: false
        }
      ],
      hasBuildingOptions: false
    },
    {
      value: 4,
      text: 'Бизнес имот',
      isSeparator: false,
      types: [
        {
          value: 18,
          text: 'Офис',
          isSeparator: false
        },
        {
          value: 20,
          text: 'Магазин',
          isSeparator: false
        },
        {
          value: 21,
          text: 'Заведение за хранене',
          isSeparator: false
        },
        {
          value: 23,
          text: 'Лекарски кабинет',
          isSeparator: false
        },
        {
          value: 24,
          text: 'Зъболекарски кабинет',
          isSeparator: false
        },
        {
          value: 25,
          text: 'Масажен кабинет',
          isSeparator: false
        },
        {
          value: 26,
          text: 'Козметичен салон',
          isSeparator: false
        },
        {
          value: 27,
          text: 'Аптека',
          isSeparator: false
        },
        {
          value: 28,
          text: 'Банков салон',
          isSeparator: false
        },
        {
          value: 34,
          text: 'Търговска сграда',
          isSeparator: false
        },
        {
          value: 36,
          text: 'Хотел',
          isSeparator: false
        },
        {
          value: 37,
          text: 'Склад',
          isSeparator: false
        },
        {
          value: 38,
          text: 'Сграда с производствено предназначение',
          isSeparator: false
        },
        {
          value: 50,
          text: 'Фитнес център',
          isSeparator: false
        },
        {
          value: 100,
          text: 'Бензиностанция',
          isSeparator: false
        },
        {
          value: 101,
          text: 'Клиника',
          isSeparator: false
        }
      ],
      hasBuildingOptions: true
    },
    {
      value: 7,
      text: 'Гараж',
      isSeparator: false,
      types: [
        {
          value: 1,
          text: 'Закрито паркомясто',
          isSeparator: false
        },
        {
          value: 2,
          text: 'Открито паркомясто',
          isSeparator: false
        },
        {
          value: 3,
          text: 'Гараж',
          isSeparator: false
        }
      ],
      hasBuildingOptions: false
    },
    {
      value: 9,
      text: 'Земеделска земя',
      isSeparator: false,
      types: [
        {
          value: 1,
          text: 'Нива',
          isSeparator: false
        },
        {
          value: 2,
          text: 'Зеленчукова градина',
          isSeparator: false
        },
        {
          value: 3,
          text: 'Оризище',
          isSeparator: false
        },
        {
          value: 4,
          text: 'Оранжерия',
          isSeparator: false
        },
        {
          value: 5,
          text: 'Овощна градина',
          isSeparator: false
        },
        {
          value: 6,
          text: 'Лозе',
          isSeparator: false
        },
        {
          value: 7,
          text: 'Разсадник',
          isSeparator: false
        },
        {
          value: 8,
          text: 'Пасище, ливада',
          isSeparator: false
        },
        {
          value: 9,
          text: 'Изоставена орна земя',
          isSeparator: false
        },
        {
          value: 10,
          text: 'Изоставени трайни насаждения',
          isSeparator: false
        },
        {
          value: 11,
          text: 'Гора',
          isSeparator: false
        },
        {
          value: 12,
          text: 'Друго',
          isSeparator: false
        }
      ],
      hasBuildingOptions: false
    }
  ],
  territories: [
    [
      {
        value: 299,
        text: 'Благоевград',
        isSeparator: false
      },
      {
        value: 569,
        text: 'Бургас',
        isSeparator: false
      },
      {
        value: 656,
        text: 'Варна',
        isSeparator: false
      },
      {
        value: 683,
        text: 'Велико Търново',
        isSeparator: false
      },
      {
        value: 737,
        text: 'Видин',
        isSeparator: false
      },
      {
        value: 857,
        text: 'Враца',
        isSeparator: false
      },
      {
        value: 944,
        text: 'Габрово',
        isSeparator: false
      },
      {
        value: 1467,
        text: 'Добрич',
        isSeparator: false
      },
      {
        value: 2676,
        text: 'Кърджали',
        isSeparator: false
      },
      {
        value: 2694,
        text: 'Кюстендил',
        isSeparator: false
      },
      {
        value: 2786,
        text: 'Ловеч',
        isSeparator: false
      },
      {
        value: 3144,
        text: 'Монтана',
        isSeparator: false
      },
      {
        value: 3483,
        text: 'Пазарджик',
        isSeparator: false
      },
      {
        value: 3550,
        text: 'Перник',
        isSeparator: false
      },
      {
        value: 3627,
        text: 'Плевен',
        isSeparator: false
      },
      {
        value: 3634,
        text: 'Пловдив',
        isSeparator: false
      },
      {
        value: 3938,
        text: 'Разград',
        isSeparator: false
      },
      {
        value: 4102,
        text: 'Русе',
        isSeparator: false
      },
      {
        value: 4261,
        text: 'Силистра',
        isSeparator: false
      },
      {
        value: 4350,
        text: 'Сливен',
        isSeparator: false
      },
      {
        value: 4384,
        text: 'Смолян',
        isSeparator: false
      },
      {
        value: 4427,
        text: 'София',
        isSeparator: false
      },
      {
        value: 4491,
        text: 'Стара Загора',
        isSeparator: false
      },
      {
        value: 4816,
        text: 'Търговище',
        isSeparator: false
      },
      {
        value: 4894,
        text: 'Хасково',
        isSeparator: false
      },
      {
        value: 5216,
        text: 'Шумен',
        isSeparator: false
      },
      {
        value: 5267,
        text: 'Ямбол',
        isSeparator: false
      }
    ],
    [
      {
        value: 1,
        text: 'Благоевград',
        isSeparator: false
      },
      {
        value: 2,
        text: 'Бургас',
        isSeparator: false
      },
      {
        value: 3,
        text: 'Варна',
        isSeparator: false
      },
      {
        value: 4,
        text: 'Велико Търново',
        isSeparator: false
      },
      {
        value: 5,
        text: 'Видин',
        isSeparator: false
      },
      {
        value: 6,
        text: 'Враца',
        isSeparator: false
      },
      {
        value: 7,
        text: 'Габрово',
        isSeparator: false
      },
      {
        value: 8,
        text: 'Добрич',
        isSeparator: false
      },
      {
        value: 9,
        text: 'Кърджали',
        isSeparator: false
      },
      {
        value: 10,
        text: 'Кюстендил',
        isSeparator: false
      },
      {
        value: 11,
        text: 'Ловеч',
        isSeparator: false
      },
      {
        value: 12,
        text: 'Монтана',
        isSeparator: false
      },
      {
        value: 13,
        text: 'Пазарджик',
        isSeparator: false
      },
      {
        value: 14,
        text: 'Перник',
        isSeparator: false
      },
      {
        value: 15,
        text: 'Плевен',
        isSeparator: false
      },
      {
        value: 16,
        text: 'Пловдив',
        isSeparator: false
      },
      {
        value: 17,
        text: 'Разград',
        isSeparator: false
      },
      {
        value: 18,
        text: 'Русе',
        isSeparator: false
      },
      {
        value: 19,
        text: 'Силистра',
        isSeparator: false
      },
      {
        value: 20,
        text: 'Сливен',
        isSeparator: false
      },
      {
        value: 21,
        text: 'Смолян',
        isSeparator: false
      },
      {
        value: 22,
        text: 'София - област',
        isSeparator: false
      },
      {
        value: 23,
        text: 'София',
        isSeparator: false
      },
      {
        value: 24,
        text: 'Стара Загора',
        isSeparator: false
      },
      {
        value: 25,
        text: 'Търговище',
        isSeparator: false
      },
      {
        value: 26,
        text: 'Хасково',
        isSeparator: false
      },
      {
        value: 27,
        text: 'Шумен',
        isSeparator: false
      },
      {
        value: 28,
        text: 'Ямбол',
        isSeparator: false
      }
    ]
  ],
  offices: [
    {
      value: '70',
      text: 'ERA Casa',
      isSeparator: false,
      description: '',
      offers: 70
    },
    {
      value: '77',
      text: 'ERA GO',
      isSeparator: false,
      description: '',
      offers: 2
    },
    {
      value: '68',
      text: 'ERA Invest',
      isSeparator: false,
      description: '',
      offers: 167
    },
    {
      value: '64',
      text: 'ERA Premium',
      isSeparator: false,
      description: '',
      offers: 257
    },
    {
      value: '46',
      text: 'ЕРА 1300',
      isSeparator: false,
      description: '',
      offers: 320
    },
    {
      value: '17',
      text: 'ЕРА Академика',
      isSeparator: false,
      description: '',
      offers: 428
    },
    {
      value: '45',
      text: 'ЕРА Арис',
      isSeparator: false,
      description: '',
      offers: 63
    },
    {
      value: '50',
      text: 'ЕРА БДС',
      isSeparator: false,
      description: '',
      offers: 2
    },
    {
      value: '35',
      text: 'ЕРА Валена',
      isSeparator: false,
      description: '',
      offers: 54
    },
    {
      value: '2',
      text: 'ЕРА Варна Тренд',
      isSeparator: false,
      description: '',
      offers: 2321
    },
    {
      value: '15',
      text: 'ЕРА Вива',
      isSeparator: false,
      description: '',
      offers: 1585
    },
    {
      value: '62',
      text: 'ЕРА Вива Пловдив',
      isSeparator: false,
      description: '',
      offers: 308
    },
    {
      value: '41',
      text: 'ЕРА Вива София',
      isSeparator: false,
      description: '',
      offers: 438
    },
    {
      value: '57',
      text: 'ЕРА Визия',
      isSeparator: false,
      description: '',
      offers: 193
    },
    {
      value: '54',
      text: 'ЕРА Галерия',
      isSeparator: false,
      description: '',
      offers: 580
    },
    {
      value: '44',
      text: 'ЕРА Голд',
      isSeparator: false,
      description: '',
      offers: 1275
    },
    {
      value: '81',
      text: 'ЕРА Дом',
      isSeparator: false,
      description: '',
      offers: 6
    },
    {
      value: '21',
      text: 'ЕРА Домика София',
      isSeparator: false,
      description: '',
      offers: 254
    },
    {
      value: '60',
      text: 'ЕРА Дръстър',
      isSeparator: false,
      description: '',
      offers: 404
    },
    {
      value: '47',
      text: 'ЕРА Идеа',
      isSeparator: false,
      description: '',
      offers: 271
    },
    {
      value: '78',
      text: 'ЕРА Имо Кърджали ',
      isSeparator: false,
      description: '',
      offers: 46
    },
    {
      value: '42',
      text: 'ЕРА Имоти Надежда ',
      isSeparator: false,
      description: '',
      offers: 716
    },
    {
      value: '72',
      text: 'ЕРА Имоти Хасково',
      isSeparator: false,
      description: '',
      offers: 364
    },
    {
      value: '56',
      text: 'ЕРА ИмотиТе',
      isSeparator: false,
      description: '',
      offers: 236
    },
    {
      value: '55',
      text: 'ЕРА Капитал',
      isSeparator: false,
      description: '',
      offers: 49
    },
    {
      value: '11',
      text: 'ЕРА Контакт',
      isSeparator: false,
      description: '',
      offers: 70
    },
    {
      value: '12',
      text: 'ЕРА Лайф',
      isSeparator: false,
      description: '',
      offers: 1527
    },
    {
      value: '71',
      text: 'ЕРА Лидер',
      isSeparator: false,
      description: '',
      offers: 144
    },
    {
      value: '74',
      text: 'ЕРА Макс',
      isSeparator: false,
      description: '',
      offers: 97
    },
    {
      value: '29',
      text: 'ЕРА Максима',
      isSeparator: false,
      description: '',
      offers: 471
    },
    {
      value: '7',
      text: 'ЕРА Младост',
      isSeparator: false,
      description: '',
      offers: 2406
    },
    {
      value: '36',
      text: 'ЕРА Надежда',
      isSeparator: false,
      description: '',
      offers: 1505
    },
    {
      value: '59',
      text: 'ЕРА Осъм',
      isSeparator: false,
      description: '',
      offers: 207
    },
    {
      value: '37',
      text: 'ЕРА Палитра',
      isSeparator: false,
      description: '',
      offers: 344
    },
    {
      value: '75',
      text: 'ЕРА Парадайс',
      isSeparator: false,
      description: '',
      offers: 41
    },
    {
      value: '73',
      text: 'ЕРА Плевен Сити',
      isSeparator: false,
      description: '',
      offers: 75
    },
    {
      value: '26',
      text: 'ЕРА Поморие Пропърти',
      isSeparator: false,
      description: '',
      offers: 741
    },
    {
      value: '80',
      text: 'ЕРА Прайм',
      isSeparator: false,
      description: '',
      offers: 1
    },
    {
      value: '31',
      text: 'ЕРА Прима',
      isSeparator: false,
      description: '',
      offers: 185
    },
    {
      value: '48',
      text: 'ЕРА Пропърти',
      isSeparator: false,
      description: '',
      offers: 9
    },
    {
      value: '61',
      text: 'ЕРА Решение',
      isSeparator: false,
      description: '',
      offers: 6
    },
    {
      value: '58',
      text: 'ЕРА Сити Център',
      isSeparator: false,
      description: '',
      offers: 154
    },
    {
      value: '65',
      text: 'ЕРА Славейков',
      isSeparator: false,
      description: '',
      offers: 148
    },
    {
      value: '33',
      text: 'ЕРА Смарт',
      isSeparator: false,
      description: '',
      offers: 10
    },
    {
      value: '1',
      text: 'ЕРА София Тренд',
      isSeparator: false,
      description: '',
      offers: 498
    },
    {
      value: '16',
      text: 'ЕРА Тера',
      isSeparator: false,
      description: '',
      offers: 289
    },
    {
      value: '67',
      text: 'ЕРА Територия',
      isSeparator: false,
      description: '',
      offers: 13
    },
    {
      value: '76',
      text: 'ЕРА Фаворит',
      isSeparator: false,
      description: '',
      offers: 81
    },
    {
      value: '38',
      text: 'ЕРА Фамилия',
      isSeparator: false,
      description: '',
      offers: 913
    },
    {
      value: '79',
      text: 'ЕРА Хоум',
      isSeparator: false,
      description: '',
      offers: 122
    },
    {
      value: '52',
      text: 'ЕРА Хоум',
      isSeparator: false,
      description: '',
      offers: 109
    },
    {
      value: '69',
      text: 'ЕРА Царевец',
      isSeparator: false,
      description: '',
      offers: 162
    },
    {
      value: '53',
      text: 'ЕРА Централ',
      isSeparator: false,
      description: '',
      offers: 215
    },
    {
      value: '34',
      text: 'ЕРА Черно Море',
      isSeparator: false,
      description: '',
      offers: 363
    }
  ],
  brokers: [
    {
      value: 22671,
      text: 'Агнес Клайн',
      isSeparator: false,
      description: '44',
      offers: 34
    },
    {
      value: 22191,
      text: 'адв. Румен Стоев',
      isSeparator: false,
      description: '53',
      offers: 10
    },
    {
      value: 22710,
      text: 'Аксел Клайн',
      isSeparator: false,
      description: '44',
      offers: 40
    },
    {
      value: 22563,
      text: 'Албена Александрова',
      isSeparator: false,
      description: '7',
      offers: 6
    },
    {
      value: 22099,
      text: 'Албена Борисова',
      isSeparator: false,
      description: '62',
      offers: 136
    },
    {
      value: 22744,
      text: 'Александра Голик',
      isSeparator: false,
      description: '26',
      offers: 34
    },
    {
      value: 22622,
      text: 'Александра Михайлова',
      isSeparator: false,
      description: '78',
      offers: 31
    },
    {
      value: 21135,
      text: 'Александра Полимерова',
      isSeparator: false,
      description: '36',
      offers: 3
    },
    {
      value: 21629,
      text: 'Александър Генчев',
      isSeparator: false,
      description: '46',
      offers: 121
    },
    {
      value: 21432,
      text: 'Александър Колибаров',
      isSeparator: false,
      description: '26',
      offers: 7
    },
    {
      value: 20416,
      text: 'Александър Котев',
      isSeparator: false,
      description: '7',
      offers: 250
    },
    {
      value: 21316,
      text: 'Александър Менгов',
      isSeparator: false,
      description: '7',
      offers: 297
    },
    {
      value: 22382,
      text: 'Александър Митев',
      isSeparator: false,
      description: '69',
      offers: 18
    },
    {
      value: 21918,
      text: 'Александър Папанчев',
      isSeparator: false,
      description: '29',
      offers: 67
    },
    {
      value: 22649,
      text: 'Александър Ценов',
      isSeparator: false,
      description: '76',
      offers: 17
    },
    {
      value: 22008,
      text: 'Ана Георгиева',
      isSeparator: false,
      description: '58',
      offers: 68
    },
    {
      value: 20380,
      text: 'Ана Станчева',
      isSeparator: false,
      description: '7',
      offers: 371
    },
    {
      value: 22776,
      text: 'Анабел Вартанян',
      isSeparator: false,
      description: '71',
      offers: 1
    },
    {
      value: 20897,
      text: 'Ангел Павлов',
      isSeparator: false,
      description: '15',
      offers: 180
    },
    {
      value: 22228,
      text: 'Анелия Добрева',
      isSeparator: false,
      description: '60',
      offers: 84
    },
    {
      value: 21283,
      text: 'Анжелика Ковалева',
      isSeparator: false,
      description: '37',
      offers: 3
    },
    {
      value: 22509,
      text: 'Ани Андреева',
      isSeparator: false,
      description: '71',
      offers: 29
    },
    {
      value: 22288,
      text: 'Ани Каменова',
      isSeparator: false,
      description: '65',
      offers: 48
    },
    {
      value: 22604,
      text: 'Анна Асенова',
      isSeparator: false,
      description: '41',
      offers: 52
    },
    {
      value: 20781,
      text: 'Анна Гарафеева',
      isSeparator: false,
      description: '15',
      offers: 136
    },
    {
      value: 21178,
      text: 'Анна Георгиева',
      isSeparator: false,
      description: '21',
      offers: 88
    },
    {
      value: 22674,
      text: 'Анна Стефанова',
      isSeparator: false,
      description: '12',
      offers: 13
    },
    {
      value: 22515,
      text: 'Анна-Мария Христова',
      isSeparator: false,
      description: '56',
      offers: 20
    },
    {
      value: 22608,
      text: 'Анна-Мария Януш',
      isSeparator: false,
      description: '44',
      offers: 80
    },
    {
      value: 20136,
      text: 'Антон Андонов',
      isSeparator: false,
      description: '1',
      offers: 5
    },
    {
      value: 21825,
      text: 'Антон Владимиров',
      isSeparator: false,
      description: '17',
      offers: 42
    },
    {
      value: 22737,
      text: 'Антон Кинанев',
      isSeparator: false,
      description: '41',
      offers: 1
    },
    {
      value: 22672,
      text: 'Антон Марков',
      isSeparator: false,
      description: '16',
      offers: 23
    },
    {
      value: 21456,
      text: 'Антон Марков',
      isSeparator: false,
      description: '41',
      offers: 157
    },
    {
      value: 22321,
      text: 'Антонио Макавеев',
      isSeparator: false,
      description: '41',
      offers: 97
    },
    {
      value: 22424,
      text: 'Антонио Савов',
      isSeparator: false,
      description: '36',
      offers: 88
    },
    {
      value: 22458,
      text: 'арх. Целсий Цаков',
      isSeparator: false,
      description: '53',
      offers: 65
    },
    {
      value: 22393,
      text: 'Атанас Недялков',
      isSeparator: false,
      description: '65',
      offers: 5
    },
    {
      value: 22295,
      text: 'Атанаска Начева',
      isSeparator: false,
      description: '62',
      offers: 1
    },
    {
      value: 21620,
      text: 'Бианка Алексиева',
      isSeparator: false,
      description: '47',
      offers: 108
    },
    {
      value: 22602,
      text: 'Бисера Ценова',
      isSeparator: false,
      description: '76',
      offers: 64
    },
    {
      value: 22504,
      text: 'Бистра Александрова',
      isSeparator: false,
      description: '15',
      offers: 6
    },
    {
      value: 22443,
      text: 'Блага Георгиева',
      isSeparator: false,
      description: '7',
      offers: 4
    },
    {
      value: 22503,
      text: 'Блага Иванова',
      isSeparator: false,
      description: '73',
      offers: 21
    },
    {
      value: 22748,
      text: 'Божидар Дянков',
      isSeparator: false,
      description: '44',
      offers: 22
    },
    {
      value: 22524,
      text: 'Бойка Христова',
      isSeparator: false,
      description: '35',
      offers: 1
    },
    {
      value: 21367,
      text: 'Болиана Стефанова',
      isSeparator: false,
      description: '2',
      offers: 46
    },
    {
      value: 21590,
      text: 'Борислав Генчев',
      isSeparator: false,
      description: '46',
      offers: 31
    },
    {
      value: 22724,
      text: 'Борислава Симеонова',
      isSeparator: false,
      description: '71',
      offers: 4
    },
    {
      value: 20966,
      text: 'Борислава Стефанова',
      isSeparator: false,
      description: '2',
      offers: 250
    },
    {
      value: 22419,
      text: 'Боряна Кирилова',
      isSeparator: false,
      description: '44',
      offers: 26
    },
    {
      value: 21450,
      text: 'Бояна Петрова',
      isSeparator: false,
      description: '42',
      offers: 1
    },
    {
      value: 22388,
      text: 'Бранимир Венелинов',
      isSeparator: false,
      description: '2',
      offers: 56
    },
    {
      value: 20363,
      text: 'Валентина Цончева',
      isSeparator: false,
      description: '7',
      offers: 181
    },
    {
      value: 22706,
      text: 'Валентина Янкова',
      isSeparator: false,
      description: '72',
      offers: 130
    },
    {
      value: 22275,
      text: 'Ваня Василева',
      isSeparator: false,
      description: '58',
      offers: 61
    },
    {
      value: 21377,
      text: 'Ваня Лазарова',
      isSeparator: false,
      description: '38',
      offers: 440
    },
    {
      value: 21500,
      text: 'Ваня Пенева',
      isSeparator: false,
      description: '44',
      offers: 137
    },
    {
      value: 22292,
      text: 'Васил Драгоев',
      isSeparator: false,
      description: '59',
      offers: 148
    },
    {
      value: 21952,
      text: 'Венета Василева',
      isSeparator: false,
      description: '15',
      offers: 102
    },
    {
      value: 20436,
      text: 'Венета Иванова ',
      isSeparator: false,
      description: '12',
      offers: 74
    },
    {
      value: 22429,
      text: 'Венцислав Великов',
      isSeparator: false,
      description: '60',
      offers: 74
    },
    {
      value: 22412,
      text: 'Вера Василева',
      isSeparator: false,
      description: '68',
      offers: 69
    },
    {
      value: 20844,
      text: 'Вероника Петрова',
      isSeparator: false,
      description: '17',
      offers: 53
    },
    {
      value: 21654,
      text: 'Весела Вутова',
      isSeparator: false,
      description: '47',
      offers: 127
    },
    {
      value: 22385,
      text: 'Весела Иванова',
      isSeparator: false,
      description: '68',
      offers: 3
    },
    {
      value: 22685,
      text: 'Веселин Господинов',
      isSeparator: false,
      description: '7',
      offers: 21
    },
    {
      value: 22466,
      text: 'Веселина Петрова',
      isSeparator: false,
      description: '72',
      offers: 137
    },
    {
      value: 22106,
      text: 'Виктория Маламова',
      isSeparator: false,
      description: '42',
      offers: 92
    },
    {
      value: 22691,
      text: 'Виктория Николова',
      isSeparator: false,
      description: '64',
      offers: 25
    },
    {
      value: 22717,
      text: 'Виктория Тунчева',
      isSeparator: false,
      description: '12',
      offers: 15
    },
    {
      value: 21094,
      text: 'Виолета Стоянова',
      isSeparator: false,
      description: '12',
      offers: 182
    },
    {
      value: 22076,
      text: 'Виржиния Милтенова',
      isSeparator: false,
      description: '56',
      offers: 1
    },
    {
      value: 20888,
      text: 'Владимир Дичев',
      isSeparator: false,
      description: '12',
      offers: 291
    },
    {
      value: 22792,
      text: 'Владимир Попгенов',
      isSeparator: false,
      description: '75',
      offers: 2
    },
    {
      value: 22494,
      text: 'Георг Начев',
      isSeparator: false,
      description: '15',
      offers: 37
    },
    {
      value: 22525,
      text: 'Георги Борисов',
      isSeparator: false,
      description: '46',
      offers: 26
    },
    {
      value: 22638,
      text: 'Георги Ников',
      isSeparator: false,
      description: '2',
      offers: 36
    },
    {
      value: 21930,
      text: 'Георги Петков',
      isSeparator: false,
      description: '55',
      offers: 4
    },
    {
      value: 22500,
      text: 'Георги Петков',
      isSeparator: false,
      description: '73',
      offers: 50
    },
    {
      value: 22156,
      text: 'Георги Сакутов',
      isSeparator: false,
      description: '64',
      offers: 158
    },
    {
      value: 22609,
      text: 'Георги Стефанов',
      isSeparator: false,
      description: '54',
      offers: 1
    },
    {
      value: 22591,
      text: 'Гергана Герова',
      isSeparator: false,
      description: '29',
      offers: 5
    },
    {
      value: 22208,
      text: 'Гергана Петрова',
      isSeparator: false,
      description: '7',
      offers: 13
    },
    {
      value: 22754,
      text: 'Гина Иванова',
      isSeparator: false,
      description: '69',
      offers: 15
    },
    {
      value: 22657,
      text: 'Гюркан Риза',
      isSeparator: false,
      description: '57',
      offers: 7
    },
    {
      value: 22003,
      text: 'Дамян Димитров',
      isSeparator: false,
      description: '21',
      offers: 8
    },
    {
      value: 22314,
      text: 'Дамян Димов',
      isSeparator: false,
      description: '46',
      offers: 22
    },
    {
      value: 22556,
      text: 'Даниел Делев',
      isSeparator: false,
      description: '54',
      offers: 14
    },
    {
      value: 22643,
      text: 'Даниел Димитров',
      isSeparator: false,
      description: '15',
      offers: 7
    },
    {
      value: 21859,
      text: 'Даниела Алексиева',
      isSeparator: false,
      description: '29',
      offers: 81
    },
    {
      value: 22432,
      text: 'Даниела Велчева',
      isSeparator: false,
      description: '53',
      offers: 1
    },
    {
      value: 21926,
      text: 'Даниела Желязкова',
      isSeparator: false,
      description: '21',
      offers: 9
    },
    {
      value: 20361,
      text: 'Даниела Ранчова',
      isSeparator: false,
      description: '7',
      offers: 356
    },
    {
      value: 20746,
      text: 'Даниела Филева',
      isSeparator: false,
      description: '7',
      offers: 57
    },
    {
      value: 22794,
      text: 'Дарина Льондева',
      isSeparator: false,
      description: '58',
      offers: 4
    },
    {
      value: 21531,
      text: 'Дафина Гудова',
      isSeparator: false,
      description: '45',
      offers: 46
    },
    {
      value: 22652,
      text: 'Денислав Георгиев',
      isSeparator: false,
      description: '71',
      offers: 14
    },
    {
      value: 22697,
      text: 'Деница Георгиева',
      isSeparator: false,
      description: '58',
      offers: 17
    },
    {
      value: 20929,
      text: 'Десислава Арангелова',
      isSeparator: false,
      description: '2',
      offers: 256
    },
    {
      value: 21198,
      text: 'Десислава Димитрова',
      isSeparator: false,
      description: '36',
      offers: 240
    },
    {
      value: 22726,
      text: 'Десислава Димова',
      isSeparator: false,
      description: '7',
      offers: 56
    },
    {
      value: 20469,
      text: 'Десислава Димова',
      isSeparator: false,
      description: '3',
      offers: 1
    },
    {
      value: 22155,
      text: 'Десислава Йовева',
      isSeparator: false,
      description: '60',
      offers: 112
    },
    {
      value: 22481,
      text: 'Деян Златанов',
      isSeparator: false,
      description: '69',
      offers: 27
    },
    {
      value: 21023,
      text: 'Диана Маринова',
      isSeparator: false,
      description: '12',
      offers: 90
    },
    {
      value: 22582,
      text: 'Диана Христова',
      isSeparator: false,
      description: '74',
      offers: 10
    },
    {
      value: 20715,
      text: 'Димитър Георгиев',
      isSeparator: false,
      description: '15',
      offers: 75
    },
    {
      value: 20808,
      text: 'Димитър Желязков',
      isSeparator: false,
      description: '2',
      offers: 174
    },
    {
      value: 22347,
      text: 'Димитър Итев',
      isSeparator: false,
      description: '41',
      offers: 29
    },
    {
      value: 20472,
      text: 'Димитър Петков',
      isSeparator: false,
      description: '16',
      offers: 128
    },
    {
      value: 22796,
      text: 'Димитър Стоев',
      isSeparator: false,
      description: '78',
      offers: 2
    },
    {
      value: 21299,
      text: 'Димчо Димов',
      isSeparator: false,
      description: '38',
      offers: 83
    },
    {
      value: 22162,
      text: 'Добринка Калчева',
      isSeparator: false,
      description: '29',
      offers: 83
    },
    {
      value: 20829,
      text: 'Домика София',
      isSeparator: false,
      description: '21',
      offers: 20
    },
    {
      value: 21901,
      text: 'Доротея Георгиева',
      isSeparator: false,
      description: '42',
      offers: 99
    },
    {
      value: 20155,
      text: 'Драгомир Желев',
      isSeparator: false,
      description: '2',
      offers: 8
    },
    {
      value: 20947,
      text: 'Евгени Колев',
      isSeparator: false,
      description: '15',
      offers: 148
    },
    {
      value: 22738,
      text: 'Евгений Токмаков',
      isSeparator: false,
      description: '75',
      offers: 3
    },
    {
      value: 22701,
      text: 'Елена Веселинчева',
      isSeparator: false,
      description: '68',
      offers: 6
    },
    {
      value: 22783,
      text: 'Елена Кънева',
      isSeparator: false,
      description: '74',
      offers: 18
    },
    {
      value: 21429,
      text: 'Елена Спиридонова',
      isSeparator: false,
      description: '37',
      offers: 13
    },
    {
      value: 20481,
      text: 'Елена Христакиева',
      isSeparator: false,
      description: '15',
      offers: 70
    },
    {
      value: 22451,
      text: 'Емилия Велева',
      isSeparator: false,
      description: '68',
      offers: 17
    },
    {
      value: 21778,
      text: 'Емилия Христова',
      isSeparator: false,
      description: '36',
      offers: 86
    },
    {
      value: 22769,
      text: 'Емине Исмаилова',
      isSeparator: false,
      description: '56',
      offers: 3
    },
    {
      value: 20491,
      text: 'ЕРА Академика',
      isSeparator: false,
      description: '17',
      offers: 21
    },
    {
      value: 22552,
      text: 'ЕРА Галерия',
      isSeparator: false,
      description: '54',
      offers: 1
    },
    {
      value: 22161,
      text: 'ЕРА Галерия',
      isSeparator: false,
      description: '54',
      offers: 6
    },
    {
      value: 21885,
      text: 'ЕРА Идеа',
      isSeparator: false,
      description: '47',
      offers: 35
    },
    {
      value: 20413,
      text: 'ЕРА Контакт',
      isSeparator: false,
      description: '11',
      offers: 29
    },
    {
      value: 21212,
      text: 'ЕРА Надежда',
      isSeparator: false,
      description: '36',
      offers: 41
    },
    {
      value: 21288,
      text: 'ЕРА Палитра',
      isSeparator: false,
      description: '37',
      offers: 3
    },
    {
      value: 20938,
      text: 'ЕРА Поморие Пропърти',
      isSeparator: false,
      description: '26',
      offers: 23
    },
    {
      value: 22374,
      text: 'ЕРА Тера',
      isSeparator: false,
      description: '16',
      offers: 8
    },
    {
      value: 21879,
      text: 'ЕРА Централ',
      isSeparator: false,
      description: '53',
      offers: 66
    },
    {
      value: 20992,
      text: 'Женя Куцарова',
      isSeparator: false,
      description: '29',
      offers: 84
    },
    {
      value: 20976,
      text: 'Живка Баджакова',
      isSeparator: false,
      description: '7',
      offers: 99
    },
    {
      value: 21344,
      text: 'Живко Дражев',
      isSeparator: false,
      description: '38',
      offers: 86
    },
    {
      value: 21216,
      text: 'Зарка Кунева',
      isSeparator: false,
      description: '29',
      offers: 41
    },
    {
      value: 21774,
      text: 'Захари Захариев',
      isSeparator: false,
      description: '36',
      offers: 88
    },
    {
      value: 21227,
      text: 'Златина Ичева',
      isSeparator: false,
      description: '36',
      offers: 109
    },
    {
      value: 22264,
      text: 'Златина Петкова',
      isSeparator: false,
      description: '57',
      offers: 1
    },
    {
      value: 21132,
      text: 'Ивайло Димитров',
      isSeparator: false,
      description: '34',
      offers: 82
    },
    {
      value: 22544,
      text: 'Ивайло Иванов',
      isSeparator: false,
      description: '35',
      offers: 4
    },
    {
      value: 21928,
      text: 'Ивайло Иванов',
      isSeparator: false,
      description: '55',
      offers: 5
    },
    {
      value: 20141,
      text: 'Ивайло Скулев',
      isSeparator: false,
      description: '2',
      offers: 34
    },
    {
      value: 21577,
      text: 'Ивалина Янкова',
      isSeparator: false,
      description: '1',
      offers: 27
    },
    {
      value: 22662,
      text: 'Иван Иванов',
      isSeparator: false,
      description: '38',
      offers: 61
    },
    {
      value: 22762,
      text: 'Иван Станев',
      isSeparator: false,
      description: '16',
      offers: 10
    },
    {
      value: 21293,
      text: 'Иван Трендафилов',
      isSeparator: false,
      description: '37',
      offers: 49
    },
    {
      value: 22059,
      text: 'Иванина Кълвачева',
      isSeparator: false,
      description: '44',
      offers: 353
    },
    {
      value: 22083,
      text: 'Ивелина Донева',
      isSeparator: false,
      description: '50',
      offers: 1
    },
    {
      value: 21801,
      text: 'Ивелина Иванова',
      isSeparator: false,
      description: '46',
      offers: 59
    },
    {
      value: 22599,
      text: 'Ивелина Иванова',
      isSeparator: false,
      description: '75',
      offers: 31
    },
    {
      value: 22434,
      text: 'Иво Делчев',
      isSeparator: false,
      description: '45',
      offers: 5
    },
    {
      value: 22779,
      text: 'Изабела Дунева',
      isSeparator: false,
      description: '62',
      offers: 2
    },
    {
      value: 21165,
      text: 'Илиян Илиев',
      isSeparator: false,
      description: '1',
      offers: 285
    },
    {
      value: 21960,
      text: 'Илона Щеглова',
      isSeparator: false,
      description: '54',
      offers: 45
    },
    {
      value: 22177,
      text: 'инж. Даниела Константинова',
      isSeparator: false,
      description: '53',
      offers: 39
    },
    {
      value: 21469,
      text: 'Инна Алексеенко',
      isSeparator: false,
      description: '12',
      offers: 113
    },
    {
      value: 20446,
      text: 'Ирена Евгениева',
      isSeparator: false,
      description: '2',
      offers: 338
    },
    {
      value: 21303,
      text: 'Ирина Тодорова',
      isSeparator: false,
      description: '11',
      offers: 38
    },
    {
      value: 21452,
      text: 'Искрен Иванов',
      isSeparator: false,
      description: '15',
      offers: 96
    },
    {
      value: 22492,
      text: 'Йордан Василев',
      isSeparator: false,
      description: '42',
      offers: 58
    },
    {
      value: 21994,
      text: 'Йордан Григоров',
      isSeparator: false,
      description: '50',
      offers: 1
    },
    {
      value: 22770,
      text: 'Йордан Михайлов',
      isSeparator: false,
      description: '81',
      offers: 6
    },
    {
      value: 22496,
      text: 'Йорданка Станчева',
      isSeparator: false,
      description: '29',
      offers: 110
    },
    {
      value: 22736,
      text: 'Калин Пенев',
      isSeparator: false,
      description: '41',
      offers: 1
    },
    {
      value: 22273,
      text: 'Калоян Чакъров',
      isSeparator: false,
      description: '42',
      offers: 111
    },
    {
      value: 20405,
      text: 'Камен Загорски',
      isSeparator: false,
      description: '7',
      offers: 296
    },
    {
      value: 20782,
      text: 'Катя Колибарова',
      isSeparator: false,
      description: '26',
      offers: 220
    },
    {
      value: 22426,
      text: 'Клаудия Пехливанова',
      isSeparator: false,
      description: '71',
      offers: 32
    },
    {
      value: 20473,
      text: 'Константин Атанасов',
      isSeparator: false,
      description: '17',
      offers: 61
    },
    {
      value: 21107,
      text: 'Константин Иванов',
      isSeparator: false,
      description: '21',
      offers: 32
    },
    {
      value: 22749,
      text: 'Костадинка Маринова',
      isSeparator: false,
      description: '62',
      offers: 3
    },
    {
      value: 21824,
      text: 'Красимир Бараков',
      isSeparator: false,
      description: '42',
      offers: 41
    },
    {
      value: 22400,
      text: 'Красимир Бехтерев',
      isSeparator: false,
      description: '38',
      offers: 61
    },
    {
      value: 22337,
      text: 'Красимир Георгиев',
      isSeparator: false,
      description: '2',
      offers: 146
    },
    {
      value: 21995,
      text: 'Красимир Милтенов',
      isSeparator: false,
      description: '56',
      offers: 47
    },
    {
      value: 22403,
      text: 'Красимира Ла Роса',
      isSeparator: false,
      description: '70',
      offers: 59
    },
    {
      value: 22511,
      text: 'Красимира Минчева',
      isSeparator: false,
      description: '36',
      offers: 78
    },
    {
      value: 22096,
      text: 'Красимира Панайотова',
      isSeparator: false,
      description: '60',
      offers: 113
    },
    {
      value: 21032,
      text: 'Красимира Пеева',
      isSeparator: false,
      description: '26',
      offers: 198
    },
    {
      value: 22330,
      text: 'Красимира Томова',
      isSeparator: false,
      description: '61',
      offers: 4
    },
    {
      value: 21971,
      text: 'Кремена Цветкова',
      isSeparator: false,
      description: '52',
      offers: 1
    },
    {
      value: 20480,
      text: 'Леонид Данев',
      isSeparator: false,
      description: '15',
      offers: 57
    },
    {
      value: 20452,
      text: 'Лидия Кондова',
      isSeparator: false,
      description: '2',
      offers: 89
    },
    {
      value: 22057,
      text: 'Лилия Богданова',
      isSeparator: false,
      description: '21',
      offers: 4
    },
    {
      value: 22217,
      text: 'Любомир Любенов',
      isSeparator: false,
      description: '65',
      offers: 80
    },
    {
      value: 22507,
      text: 'Магдалена Якимова',
      isSeparator: false,
      description: '71',
      offers: 40
    },
    {
      value: 21806,
      text: 'Малинка Иванова',
      isSeparator: false,
      description: '21',
      offers: 76
    },
    {
      value: 21035,
      text: 'Маргарита Георгиева',
      isSeparator: false,
      description: '15',
      offers: 119
    },
    {
      value: 21883,
      text: 'Маргарита Иванова',
      isSeparator: false,
      description: '46',
      offers: 61
    },
    {
      value: 20377,
      text: 'Маргарита Стоянова',
      isSeparator: false,
      description: '7',
      offers: 109
    },
    {
      value: 22742,
      text: 'Мариан Биков',
      isSeparator: false,
      description: '54',
      offers: 15
    },
    {
      value: 20995,
      text: 'Мариела Тотева',
      isSeparator: false,
      description: '15',
      offers: 57
    },
    {
      value: 22741,
      text: 'Мариета Маленова',
      isSeparator: false,
      description: '34',
      offers: 1
    },
    {
      value: 21534,
      text: 'Мариета Тодорова',
      isSeparator: false,
      description: '36',
      offers: 252
    },
    {
      value: 22293,
      text: 'Марина Лукасевич ',
      isSeparator: false,
      description: '52',
      offers: 17
    },
    {
      value: 21372,
      text: 'Марина Райчева',
      isSeparator: false,
      description: '31',
      offers: 26
    },
    {
      value: 22633,
      text: 'Маринела Маркова',
      isSeparator: false,
      description: '15',
      offers: 13
    },
    {
      value: 21300,
      text: 'Мария Иванова',
      isSeparator: false,
      description: '38',
      offers: 72
    },
    {
      value: 22456,
      text: 'Мария Иванова',
      isSeparator: false,
      description: '44',
      offers: 50
    },
    {
      value: 22583,
      text: 'Мария Митева',
      isSeparator: false,
      description: '70',
      offers: 5
    },
    {
      value: 20132,
      text: 'Мария Търговска',
      isSeparator: false,
      description: '1',
      offers: 89
    },
    {
      value: 22535,
      text: 'Марияна Моллова',
      isSeparator: false,
      description: '37',
      offers: 50
    },
    {
      value: 22683,
      text: 'Мартин Гривнев',
      isSeparator: false,
      description: '44',
      offers: 9
    },
    {
      value: 22425,
      text: 'Мая Иванова',
      isSeparator: false,
      description: '71',
      offers: 24
    },
    {
      value: 20406,
      text: 'Мая Кирилова',
      isSeparator: false,
      description: '2',
      offers: 21
    },
    {
      value: 21335,
      text: 'Миглена Петкова',
      isSeparator: false,
      description: '34',
      offers: 94
    },
    {
      value: 21800,
      text: 'Миглена Шрьодер',
      isSeparator: false,
      description: '52',
      offers: 35
    },
    {
      value: 22800,
      text: 'Милена Дакова',
      isSeparator: false,
      description: '53',
      offers: 1
    },
    {
      value: 21183,
      text: 'Милена Паунова',
      isSeparator: false,
      description: '15',
      offers: 106
    },
    {
      value: 21842,
      text: 'Мира Рашкова',
      isSeparator: false,
      description: '53',
      offers: 31
    },
    {
      value: 22460,
      text: 'Мирослав Митев',
      isSeparator: false,
      description: '7',
      offers: 2
    },
    {
      value: 22518,
      text: 'Мирослав Христов',
      isSeparator: false,
      description: '2',
      offers: 30
    },
    {
      value: 21137,
      text: 'Михаела Райчева',
      isSeparator: false,
      description: '26',
      offers: 190
    },
    {
      value: 21292,
      text: 'Михаил Калчев',
      isSeparator: false,
      description: '37',
      offers: 206
    },
    {
      value: 21410,
      text: 'Момчил Косев',
      isSeparator: false,
      description: '2',
      offers: 163
    },
    {
      value: 21014,
      text: 'Моника Купенова',
      isSeparator: false,
      description: '17',
      offers: 137
    },
    {
      value: 22793,
      text: 'Моника Тарлева',
      isSeparator: false,
      description: '58',
      offers: 4
    },
    {
      value: 22066,
      text: 'Надежда Корназова',
      isSeparator: false,
      description: '37',
      offers: 13
    },
    {
      value: 21361,
      text: 'Надежда Няголова',
      isSeparator: false,
      description: '42',
      offers: 32
    },
    {
      value: 22502,
      text: 'Надя Георгиева',
      isSeparator: false,
      description: '41',
      offers: 24
    },
    {
      value: 22237,
      text: 'Надя Петкова',
      isSeparator: false,
      description: '65',
      offers: 4
    },
    {
      value: 20221,
      text: 'Наргис Бейтулова',
      isSeparator: false,
      description: '2',
      offers: 175
    },
    {
      value: 22700,
      text: 'Наталия Лазарова',
      isSeparator: false,
      description: '69',
      offers: 29
    },
    {
      value: 20420,
      text: 'Невена Михайлова',
      isSeparator: false,
      description: '2',
      offers: 156
    },
    {
      value: 22308,
      text: 'Недялко Недялков',
      isSeparator: false,
      description: '67',
      offers: 13
    },
    {
      value: 21181,
      text: 'Незир Пачеджи',
      isSeparator: false,
      description: '7',
      offers: 2
    },
    {
      value: 22709,
      text: 'Нели Занева',
      isSeparator: false,
      description: '42',
      offers: 24
    },
    {
      value: 20840,
      text: 'Нели Митева',
      isSeparator: false,
      description: '15',
      offers: 113
    },
    {
      value: 21970,
      text: 'Нели Райкова',
      isSeparator: false,
      description: '52',
      offers: 2
    },
    {
      value: 21364,
      text: 'Нелко Начев',
      isSeparator: false,
      description: '41',
      offers: 11
    },
    {
      value: 22134,
      text: 'Николай K. Кънев',
      isSeparator: false,
      description: '64',
      offers: 28
    },
    {
      value: 21195,
      text: 'Николай Димитров',
      isSeparator: false,
      description: '36',
      offers: 74
    },
    {
      value: 22698,
      text: 'Николай Димов',
      isSeparator: false,
      description: '62',
      offers: 2
    },
    {
      value: 22695,
      text: 'Николай Илиев',
      isSeparator: false,
      description: '68',
      offers: 1
    },
    {
      value: 22747,
      text: 'Николай Капитанов',
      isSeparator: false,
      description: '15',
      offers: 9
    },
    {
      value: 21206,
      text: 'Николай Николаев',
      isSeparator: false,
      description: '36',
      offers: 58
    },
    {
      value: 22517,
      text: 'Николай Николов',
      isSeparator: false,
      description: '2',
      offers: 25
    },
    {
      value: 22312,
      text: 'Николета Михайлова',
      isSeparator: false,
      description: '35',
      offers: 1
    },
    {
      value: 20703,
      text: 'Нина Василева',
      isSeparator: false,
      description: '7',
      offers: 1
    },
    {
      value: 22153,
      text: 'Нина Русимова',
      isSeparator: false,
      description: '21',
      offers: 8
    },
    {
      value: 22686,
      text: 'Нуредин Хасанов',
      isSeparator: false,
      description: '56',
      offers: 2
    },
    {
      value: 21129,
      text: 'Олга Злобина',
      isSeparator: false,
      description: '33',
      offers: 10
    },
    {
      value: 21594,
      text: 'Офис Голд',
      isSeparator: false,
      description: '44',
      offers: 217
    },
    {
      value: 22483,
      text: 'Павел Иванов',
      isSeparator: false,
      description: '15',
      offers: 28
    },
    {
      value: 22133,
      text: 'Павел Петков',
      isSeparator: false,
      description: '64',
      offers: 39
    },
    {
      value: 22730,
      text: 'Пенка Бъговска',
      isSeparator: false,
      description: '78',
      offers: 13
    },
    {
      value: 21133,
      text: 'Пенко Янков',
      isSeparator: false,
      description: '35',
      offers: 48
    },
    {
      value: 21799,
      text: 'Пепа Кънева',
      isSeparator: false,
      description: '52',
      offers: 54
    },
    {
      value: 22499,
      text: 'Пепа Кънева',
      isSeparator: false,
      description: '44',
      offers: 93
    },
    {
      value: 21067,
      text: 'Петър Максимов',
      isSeparator: false,
      description: '1',
      offers: 92
    },
    {
      value: 22627,
      text: 'Петър Мечев',
      isSeparator: false,
      description: '79',
      offers: 113
    },
    {
      value: 22802,
      text: 'Петър Трифонов',
      isSeparator: false,
      description: '36',
      offers: 6
    },
    {
      value: 22093,
      text: 'Петя Велкова',
      isSeparator: false,
      description: '56',
      offers: 163
    },
    {
      value: 22151,
      text: 'Петя Димитрова',
      isSeparator: false,
      description: '45',
      offers: 12
    },
    {
      value: 21813,
      text: 'Петя Михайлова',
      isSeparator: false,
      description: '36',
      offers: 181
    },
    {
      value: 21260,
      text: 'Петя Стефанова',
      isSeparator: false,
      description: '17',
      offers: 8
    },
    {
      value: 22113,
      text: 'Пламен Атанасов',
      isSeparator: false,
      description: '62',
      offers: 145
    },
    {
      value: 21575,
      text: 'Пламен Димитров',
      isSeparator: false,
      description: '7',
      offers: 283
    },
    {
      value: 22761,
      text: 'Пламен Иванов',
      isSeparator: false,
      description: '2',
      offers: 4
    },
    {
      value: 22033,
      text: 'Пламен Попов',
      isSeparator: false,
      description: '59',
      offers: 59
    },
    {
      value: 22787,
      text: 'Пламен Спасов',
      isSeparator: false,
      description: '37',
      offers: 5
    },
    {
      value: 22804,
      text: 'Пламена Петрова',
      isSeparator: false,
      description: '72',
      offers: 97
    },
    {
      value: 22543,
      text: 'Преслав Славчев',
      isSeparator: false,
      description: '57',
      offers: 29
    },
    {
      value: 20953,
      text: 'Продан Проданов',
      isSeparator: false,
      description: '2',
      offers: 170
    },
    {
      value: 22531,
      text: 'Първан Георгиев',
      isSeparator: false,
      description: '36',
      offers: 12
    },
    {
      value: 22383,
      text: 'Радослав Богданов',
      isSeparator: false,
      description: '68',
      offers: 48
    },
    {
      value: 22064,
      text: 'Радослав Петров',
      isSeparator: false,
      description: '57',
      offers: 20
    },
    {
      value: 21715,
      text: 'Радостин Антонов',
      isSeparator: false,
      description: '15',
      offers: 34
    },
    {
      value: 21833,
      text: 'Радостин Петров',
      isSeparator: false,
      description: '12',
      offers: 113
    },
    {
      value: 21136,
      text: 'Райна Манчева',
      isSeparator: false,
      description: '36',
      offers: 1
    },
    {
      value: 21370,
      text: 'Ралица Пламенова',
      isSeparator: false,
      description: '31',
      offers: 136
    },
    {
      value: 22684,
      text: 'Росица Кисиличкова',
      isSeparator: false,
      description: '12',
      offers: 16
    },
    {
      value: 21873,
      text: 'Росица Копева',
      isSeparator: false,
      description: '54',
      offers: 458
    },
    {
      value: 22017,
      text: 'Ростислав Недков',
      isSeparator: false,
      description: '42',
      offers: 129
    },
    {
      value: 22001,
      text: 'Румен Георгиев',
      isSeparator: false,
      description: '57',
      offers: 136
    },
    {
      value: 3207,
      text: 'Румяна Димитрова',
      isSeparator: false,
      description: '2',
      offers: 50
    },
    {
      value: 22329,
      text: 'Румяна Илиева',
      isSeparator: false,
      description: '61',
      offers: 2
    },
    {
      value: 22750,
      text: 'Русина Йорданова',
      isSeparator: false,
      description: '36',
      offers: 2
    },
    {
      value: 21868,
      text: 'Самуил Златилов',
      isSeparator: false,
      description: '15',
      offers: 57
    },
    {
      value: 22780,
      text: 'Светлозар Гагов',
      isSeparator: false,
      description: '62',
      offers: 2
    },
    {
      value: 20994,
      text: 'Светослав Христов',
      isSeparator: false,
      description: '15',
      offers: 124
    },
    {
      value: 22781,
      text: 'Свилен Дереков',
      isSeparator: false,
      description: '73',
      offers: 4
    },
    {
      value: 21931,
      text: 'Свилен Костов',
      isSeparator: false,
      description: '55',
      offers: 40
    },
    {
      value: 22512,
      text: 'Сергей Славчев',
      isSeparator: false,
      description: '41',
      offers: 66
    },
    {
      value: 22772,
      text: 'Серкан Сабри',
      isSeparator: false,
      description: '79',
      offers: 5
    },
    {
      value: 22016,
      text: 'Силвия Иванова',
      isSeparator: false,
      description: '42',
      offers: 129
    },
    {
      value: 22039,
      text: 'Силвия Костадинова',
      isSeparator: false,
      description: '60',
      offers: 21
    },
    {
      value: 22146,
      text: 'Силвия Павлова',
      isSeparator: false,
      description: '64',
      offers: 3
    },
    {
      value: 21653,
      text: 'Силвия Христова',
      isSeparator: false,
      description: '36',
      offers: 103
    },
    {
      value: 22420,
      text: 'Симона Кенарова',
      isSeparator: false,
      description: '69',
      offers: 73
    },
    {
      value: 22447,
      text: 'Славейка Герджикова',
      isSeparator: false,
      description: '26',
      offers: 3
    },
    {
      value: 21528,
      text: 'Соня Сотирова',
      isSeparator: false,
      description: '36',
      offers: 83
    },
    {
      value: 22559,
      text: 'София Деянова',
      isSeparator: false,
      description: '68',
      offers: 23
    },
    {
      value: 22740,
      text: 'Станил Петров',
      isSeparator: false,
      description: '34',
      offers: 1
    },
    {
      value: 22551,
      text: 'Станислав Николов',
      isSeparator: false,
      description: '54',
      offers: 21
    },
    {
      value: 21021,
      text: 'Станислава Илиева',
      isSeparator: false,
      description: '12',
      offers: 161
    },
    {
      value: 20437,
      text: 'Станислава Крендева',
      isSeparator: false,
      description: '12',
      offers: 64
    },
    {
      value: 22131,
      text: 'Станислава Лазаров',
      isSeparator: false,
      description: '62',
      offers: 17
    },
    {
      value: 21499,
      text: 'Стела Николова',
      isSeparator: false,
      description: '38',
      offers: 110
    },
    {
      value: 21754,
      text: 'Стела Цонева',
      isSeparator: false,
      description: '48',
      offers: 9
    },
    {
      value: 22581,
      text: 'Стефан Джастанов',
      isSeparator: false,
      description: '74',
      offers: 69
    },
    {
      value: 22664,
      text: 'Стефка Русева',
      isSeparator: false,
      description: '70',
      offers: 6
    },
    {
      value: 22023,
      text: 'Таня Арнаудова',
      isSeparator: false,
      description: '44',
      offers: 214
    },
    {
      value: 22690,
      text: 'Таня Младенова',
      isSeparator: false,
      description: '16',
      offers: 14
    },
    {
      value: 22764,
      text: 'Таня Нехризова',
      isSeparator: false,
      description: '16',
      offers: 2
    },
    {
      value: 21110,
      text: 'Таня Цветанова',
      isSeparator: false,
      description: '21',
      offers: 9
    },
    {
      value: 20811,
      text: 'Таня Черелова',
      isSeparator: false,
      description: '12',
      offers: 192
    },
    {
      value: 21285,
      text: 'Татяна Калчева',
      isSeparator: false,
      description: '37',
      offers: 2
    },
    {
      value: 20438,
      text: 'Татяна Статева',
      isSeparator: false,
      description: '12',
      offers: 5
    },
    {
      value: 22680,
      text: 'Теменужка Стоянова',
      isSeparator: false,
      description: '65',
      offers: 11
    },
    {
      value: 20476,
      text: 'Теодора Атанасова',
      isSeparator: false,
      description: '17',
      offers: 106
    },
    {
      value: 22788,
      text: 'Тетяна Мушикова',
      isSeparator: false,
      description: '80',
      offers: 1
    },
    {
      value: 22751,
      text: 'Тетяна Стрижеус',
      isSeparator: false,
      description: '7',
      offers: 1
    },
    {
      value: 22109,
      text: 'Тихомир Костов',
      isSeparator: false,
      description: '31',
      offers: 23
    },
    {
      value: 22746,
      text: 'Тодора Благиева',
      isSeparator: false,
      description: '53',
      offers: 2
    },
    {
      value: 21802,
      text: 'Тони Евгениев',
      isSeparator: false,
      description: '47',
      offers: 1
    },
    {
      value: 22635,
      text: 'Христос Паликаров',
      isSeparator: false,
      description: '79',
      offers: 4
    },
    {
      value: 22786,
      text: 'Цветелина Савова',
      isSeparator: false,
      description: '15',
      offers: 11
    },
    {
      value: 21302,
      text: 'Цвети Димитрова',
      isSeparator: false,
      description: '11',
      offers: 3
    },
    {
      value: 22615,
      text: 'Цветомир Маринов',
      isSeparator: false,
      description: '77',
      offers: 2
    },
    {
      value: 22616,
      text: 'Шукран Алиосман',
      isSeparator: false,
      description: '2',
      offers: 58
    },
    {
      value: 21320,
      text: 'Юлиана Николова',
      isSeparator: false,
      description: '34',
      offers: 185
    },
    {
      value: 22708,
      text: 'Юлия Найденова',
      isSeparator: false,
      description: '2',
      offers: 13
    },
    {
      value: 22641,
      text: 'Юлия Тодорова',
      isSeparator: false,
      description: '54',
      offers: 19
    },
    {
      value: 20990,
      text: 'Юлияна Керанова',
      isSeparator: false,
      description: '12',
      offers: 198
    },
    {
      value: 22791,
      text: 'Юри Пелкин',
      isSeparator: false,
      description: '75',
      offers: 5
    },
    {
      value: 22529,
      text: 'Юсеин Андонов',
      isSeparator: false,
      description: '26',
      offers: 66
    },
    {
      value: 22679,
      text: 'Явор Чалъков',
      isSeparator: false,
      description: '64',
      offers: 4
    },
    {
      value: 21786,
      text: 'Яница Георгиева',
      isSeparator: false,
      description: '2',
      offers: 23
    },
    {
      value: 21758,
      text: 'Янушка Станева',
      isSeparator: false,
      description: '16',
      offers: 104
    }
  ],
  priceTypes: [
    {
      value: 'total',
      text: 'Продажна цена',
      isSeparator: false
    },
    {
      value: 'per_sqm',
      text: 'Цена на кв.м.',
      isSeparator: false
    }
  ],
  areaTypes: [
    {
      value: 'gross',
      text: 'Обща площ',
      isSeparator: false
    },
    {
      value: 'net',
      text: 'Чиста площ',
      isSeparator: false
    }
  ],
  constructionTypes: [
    {
      value: 1,
      text: 'Тухла',
      isSeparator: false
    },
    {
      value: 2,
      text: 'Панел',
      isSeparator: false
    },
    {
      value: 4,
      text: 'ЕПК',
      isSeparator: false
    }
  ],
  constructionStages: [
    {
      value: 1,
      text: 'Начален етап',
      isSeparator: false
    },
    {
      value: 11,
      text: 'Акт 14',
      isSeparator: false
    },
    {
      value: 13,
      text: 'Акт 15',
      isSeparator: false
    },
    {
      value: 14,
      text: 'Акт 16',
      isSeparator: false
    }
  ],
  garageOptions: [
    {
      value: 1,
      text: 'Закрито паркомясто',
      isSeparator: false
    },
    {
      value: 2,
      text: 'Открито паркомясто',
      isSeparator: false
    },
    {
      value: 3,
      text: 'Гараж',
      isSeparator: false
    },
    {
      value: 'included_in_price',
      text: 'Включен в цената',
      isSeparator: false
    },
    {
      value: 'must_buy',
      text: 'Задължителна покупка',
      isSeparator: false
    },
    {
      value: 'can_buy_separately',
      text: 'Задължителна покупка',
      isSeparator: false
    }
  ],
  floorOptions: [
    {
      value: 'exclude_first_and_last',
      text: 'Без първи и последен',
      isSeparator: false
    },
    {
      value: 'only_first',
      text: 'Само първи',
      isSeparator: false
    },
    {
      value: 'only_last',
      text: 'Само последен',
      isSeparator: false
    },
    {
      value: 'ground_floor',
      text: 'Партер',
      isSeparator: false
    },
    {
      value: 'loft',
      text: 'Таванско помещение',
      isSeparator: false
    }
  ],
  furnishing: [
    {
      value: 1,
      text: 'С обзавеждане',
      isSeparator: false
    },
    {
      value: 2,
      text: 'Частично обзавеждане',
      isSeparator: false
    },
    {
      value: 3,
      text: 'Кухня',
      isSeparator: false
    },
    {
      value: 4,
      text: 'Без обзавеждане',
      isSeparator: false
    }
  ],
  heatingTypes: [
    {
      value: 1,
      text: 'ТЕЦ',
      isSeparator: false
    },
    {
      value: 2,
      text: 'Газ',
      isSeparator: false
    },
    {
      value: 3,
      text: 'Ток',
      isSeparator: false
    },
    {
      value: 4,
      text: 'Локално парно',
      isSeparator: false
    },
    {
      value: 5,
      text: 'Подово отопление',
      isSeparator: false
    },
    {
      value: 6,
      text: 'Камина',
      isSeparator: false
    },
    {
      value: 7,
      text: 'Климатик',
      isSeparator: false
    },
    {
      value: 8,
      text: 'Въозбновяемо',
      isSeparator: false
    },
    {
      value: 9,
      text: 'Термопомпа',
      isSeparator: false
    },
    {
      value: 10,
      text: 'Друго',
      isSeparator: false
    }
  ],
  propertyOrientations: [
    {
      value: 1,
      text: 'Север',
      isSeparator: false
    },
    {
      value: 2,
      text: 'Юг',
      isSeparator: false
    },
    {
      value: 3,
      text: 'Изток',
      isSeparator: false
    },
    {
      value: 4,
      text: 'Запад',
      isSeparator: false
    },
    {
      value: 5,
      text: 'Североизток',
      isSeparator: false
    },
    {
      value: 6,
      text: 'Северозапад',
      isSeparator: false
    },
    {
      value: 7,
      text: 'Югоизток',
      isSeparator: false
    },
    {
      value: 8,
      text: 'Югозапад',
      isSeparator: false
    }
  ]
};
