import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);

  const tariffs = [
    { id: 1, name: 'Старт', speed: 100, price: 499, features: ['100 Мбит/с', 'Wi-Fi роутер', 'Без ограничений'] },
    { id: 2, name: 'Оптимум', speed: 300, price: 699, features: ['300 Мбит/с', 'Wi-Fi роутер', 'Приоритетная поддержка'], popular: true },
    { id: 3, name: 'Максимум', speed: 500, price: 999, features: ['500 Мбит/с', 'Wi-Fi 6 роутер', 'VIP поддержка 24/7'] },
    { id: 4, name: 'Гигабит', speed: 1000, price: 1499, features: ['1000 Мбит/с', 'Wi-Fi 6E роутер', 'Статический IP', 'Премиум поддержка'] },
  ];

  const tvPackages = [
    { id: 1, name: 'Базовый', channels: 120, price: 299, features: ['120+ каналов', '40 в HD', 'Кино и сериалы', 'Детские'] },
    { id: 2, name: 'Расширенный', channels: 200, price: 499, features: ['200+ каналов', '80 в HD', 'Спорт и развлечения', 'Архив 7 дней'], popular: true },
    { id: 3, name: 'Премиум', channels: 300, price: 799, features: ['300+ каналов', '150 в HD/4K', 'Все спортивные', 'Архив 14 дней', 'Мультирум'] },
  ];

  const renderNavbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Zap" className="text-primary" size={28} />
          <span className="text-2xl font-heading font-bold text-gradient">NetSpeed</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {['Главная', 'Тарифы', 'Телевидение', 'Поддержка', 'Контакты'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 font-semibold">
          Личный кабинет
        </Button>
      </div>
    </nav>
  );

  const renderHero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary font-semibold text-sm">⚡ Высокоскоростной интернет нового поколения</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient leading-tight">
            Будущее скорости уже здесь
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подключайся к самому быстрому интернету в городе. Стабильное соединение, современное оборудование и круглосуточная поддержка.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 h-14 animate-glow">
              <Icon name="MapPin" className="mr-2" size={20} />
              Проверить зону покрытия
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-primary/50 hover:bg-primary/10">
              Смотреть тарифы
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: 'Wifi', title: 'До 1 Гбит/с', desc: 'Максимальная скорость' },
              { icon: 'Shield', title: '99.9% Uptime', desc: 'Стабильность сети' },
              { icon: 'Headphones', title: '24/7 Поддержка', desc: 'Всегда на связи' },
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover-scale">
                <Icon name={item.icon as any} className="text-primary mx-auto mb-3" size={32} />
                <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const renderTariffs = () => (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Тарифные планы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите оптимальную скорость для работы, учебы и развлечений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tariffs.map((tariff) => (
            <Card
              key={tariff.id}
              className={`relative p-6 bg-card/50 backdrop-blur border-2 transition-all hover-scale cursor-pointer ${
                selectedTariff === tariff.name ? 'border-primary shadow-lg shadow-primary/20' : 'border-border hover:border-primary/50'
              } ${tariff.popular ? 'ring-2 ring-primary/50' : ''}`}
              onClick={() => setSelectedTariff(tariff.name)}
            >
              {tariff.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold">
                  Популярный
                </div>
              )}
              
              <div className="text-center mb-4">
                <Icon name="Zap" className="text-primary mx-auto mb-2" size={40} />
                <h3 className="text-2xl font-heading font-bold mb-2">{tariff.name}</h3>
                <div className="text-4xl font-heading font-bold text-primary mb-1">{tariff.speed}</div>
                <div className="text-sm text-muted-foreground mb-4">Мбит/с</div>
                <div className="text-3xl font-bold">
                  {tariff.price} ₽<span className="text-sm text-muted-foreground font-normal">/мес</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {tariff.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Подключить
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const renderTV = () => (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Цифровое телевидение</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 300 каналов в HD и 4K качестве. Кино, спорт, развлечения для всей семьи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {tvPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative p-8 bg-card/50 backdrop-blur border-2 transition-all hover-scale ${
                pkg.popular ? 'border-primary shadow-xl shadow-primary/20' : 'border-border hover:border-primary/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold">
                  Хит продаж
                </div>
              )}

              <div className="text-center mb-6">
                <Icon name="Tv" className="text-primary mx-auto mb-3" size={48} />
                <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-heading font-bold text-primary mb-1">{pkg.channels}+</div>
                <div className="text-sm text-muted-foreground mb-4">каналов</div>
                <div className="text-3xl font-bold">
                  {pkg.price} ₽<span className="text-sm text-muted-foreground font-normal">/мес</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Icon name="Check" className="text-primary flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Подключить пакет
              </Button>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">Популярные каналы</h3>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="basic">Базовый</TabsTrigger>
                <TabsTrigger value="extended">Расширенный</TabsTrigger>
                <TabsTrigger value="premium">Премиум</TabsTrigger>
              </TabsList>
              <TabsContent value="basic" className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Первый канал', 'Россия 1', 'НТВ', 'СТС', 'ТНТ', 'Пятый канал', 'Культура', 'Матч ТВ'].map((ch) => (
                  <div key={ch} className="p-3 bg-muted/50 rounded-lg text-center text-sm font-medium">{ch}</div>
                ))}
              </TabsContent>
              <TabsContent value="extended" className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Eurosport', 'Discovery', 'Animal Planet', 'National Geographic', 'Viasat History', 'Paramount', 'Sony Turbo', 'Amedia Premium'].map((ch) => (
                  <div key={ch} className="p-3 bg-muted/50 rounded-lg text-center text-sm font-medium">{ch}</div>
                ))}
              </TabsContent>
              <TabsContent value="premium" className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['HBO', 'Fox', 'Universal', 'Setanta Sports', 'Eurosport 4K', 'Viasat Sport', 'Fuel TV', 'MyZen TV'].map((ch) => (
                  <div key={ch} className="p-3 bg-muted/50 rounded-lg text-center text-sm font-medium">{ch}</div>
                ))}
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );

  const renderSupport = () => (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Поддержка</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы всегда готовы помочь. Найдите ответы или свяжитесь с нами
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
              <Icon name="MessageSquare" className="text-primary" size={28} />
              Часто задаваемые вопросы
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Как быстро происходит подключение?</AccordionTrigger>
                <AccordionContent>
                  Подключение занимает 1-3 рабочих дня с момента подачи заявки. Мастер приедет в удобное для вас время и настроит оборудование.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Нужно ли покупать оборудование?</AccordionTrigger>
                <AccordionContent>
                  Нет, современный Wi-Fi роутер предоставляется бесплатно на весь период обслуживания. При расторжении договора оборудование нужно вернуть.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Можно ли поменять тариф?</AccordionTrigger>
                <AccordionContent>
                  Да, вы можете изменить тариф в любой момент через личный кабинет или по звонку в поддержку. Изменения вступят в силу с начала следующего расчетного периода.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Есть ли ограничения по трафику?</AccordionTrigger>
                <AccordionContent>
                  Нет, все наши тарифы предоставляют безлимитный интернет без ограничений по трафику и скорости.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
              <Icon name="Send" className="text-primary" size={28} />
              Свяжитесь с нами
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input placeholder="Иван Иванов" className="bg-background/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input placeholder="+7 (999) 123-45-67" className="bg-background/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <textarea
                  className="w-full min-h-[120px] px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Опишите ваш вопрос..."
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Send" className="mr-2" size={18} />
                Отправить заявку
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-primary" size={20} />
                <span className="font-semibold">8 (800) 555-35-35</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-primary" size={20} />
                <span>support@netspeed.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="text-primary" size={20} />
                <span>Круглосуточно, без выходных</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );

  const renderContacts = () => (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">Контакты</h2>
          <p className="text-xl text-muted-foreground">Наши офисы всегда открыты для вас</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Центральный офис', address: 'ул. Ленина, 42', time: 'Пн-Пт: 9:00-20:00\nСб-Вс: 10:00-18:00' },
            { title: 'Офис на Северной', address: 'пр. Северный, 15А', time: 'Пн-Пт: 9:00-20:00\nСб-Вс: 10:00-18:00' },
            { title: 'Офис Южный', address: 'ул. Южная, 88', time: 'Пн-Пт: 9:00-20:00\nСб-Вс: 10:00-18:00' },
          ].map((office, i) => (
            <Card key={i} className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover-scale">
              <Icon name="MapPin" className="text-primary mb-3" size={32} />
              <h3 className="text-xl font-heading font-bold mb-2">{office.title}</h3>
              <p className="text-muted-foreground mb-3">{office.address}</p>
              <p className="text-sm text-muted-foreground whitespace-pre-line">{office.time}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <Card className="p-2 bg-card/50 backdrop-blur border-border overflow-hidden">
            <div className="w-full h-[400px] bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" className="text-muted-foreground mx-auto mb-3" size={48} />
                <p className="text-muted-foreground">Интерактивная карта офисов</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );

  const renderFooter = () => (
    <footer className="bg-card/50 backdrop-blur border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Zap" className="text-primary" size={24} />
              <span className="text-xl font-heading font-bold text-gradient">NetSpeed</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Высокоскоростной интернет и цифровое ТВ для вашего дома
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Интернет</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Телевидение</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Комбо-пакеты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Партнерам</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                8 (800) 555-35-35
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@netspeed.ru
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Facebook" size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Twitter" size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Instagram" size={16} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 NetSpeed. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      {renderNavbar()}
      {renderHero()}
      {renderTariffs()}
      {renderTV()}
      {renderSupport()}
      {renderContacts()}
      {renderFooter()}
    </div>
  );
}