# React Görev Yöneticisi (To-Do Listesi) Uygulaması

Bu proje, bir frontend öğrencisi olarak **React (Vite)** kullanılarak geliştirilen temel bir görev yönetimi uygulamasıdır. Klasik Todo listesi işlevselliğini yerine getirirken, temel React hook'ları (`useState`, `useCallback`) ve bileşen mimarisi (`Props`) becerilerimi sergilemektedir.

---

## Uygulamanın Temel Özellikleri

Uygulama, bir yapılacaklar listesinden beklenen tüm temel işlevleri sunar:

- **Görev Ekleme (Create):** Kullanıcı form aracılığıyla yeni görevler ekleyebilir.
- **Görev Listeleme (Read):** Tüm görevler ekranda listelenir.
- **Durum Değiştirme (Update):** Her görev, yanındaki onay kutusu ile tamamlandı/tamamlanmadı olarak işaretlenebilir.
- **Görev Silme (Delete):** Her bir görevin yanındaki 'X' butonu ile bireysel görevler listeden silinebilir.
- **Sayaç:** Tamamlanmamış (aktif) görev sayısı dinamik olarak gösterilir.
- **Filtre Yapısı:** "All", "Active" ve "Completed" görevleri arasında filtreleme yapmak için gerekli arayüz yapısı hazırdır.

---

## Kullanılan Teknolojiler

Bu projede sadelik ve temel React bilgisi ön plandadır:

- **React v18+ (Vite):** Uygulamanın temel JavaScript kütüphanesi ve geliştirme ortamı.
- **`useState` Hook'u:** Uygulamanın ana veri yapısı olan tüm görev listesini (`todos`) yönetir.
- **`useCallback` Hook'u:** Performans optimizasyonu için fonksiyonların gereksiz yere yeniden oluşturulmasını engeller (`addTodo`, `toggleComplete`, `deleteTodo`).
- **CSS (TodoMVC Stilleri):** Temel CSS, arayüzün okunabilir ve tanıdık bir görünüm kazanmasını sağlar.

---

## Çalışma Mantığı ve Mimarî

Proje, tüm durum yönetimi mantığını tek bir yerde tutarak temiz bir yapı sunar.

1.  **Ana Yapı (`App.jsx`):**
    - Uygulamanın merkezi bileşenidir.
    - Tüm görev listesi state'ini (`todos`) tutar.
    - `addTodo`, `toggleComplete`, `deleteTodo` gibi görev yönetimi fonksiyonlarını tanımlar.
    - Bu fonksiyonları ve `todos` verisini alt bileşenlere **props** olarak gönderir.
2.  **Bileşenler (`/src/components`):**
    - **`ToDoForm.jsx`:** Yeni görev girişini yönetir ve metni `addTodo` fonksiyonu aracılığıyla `App.jsx`'e geri iletir.
    - **`ToDoList.jsx`:** Ana listeyi render eder ve görevlerin tamamlanma durumunu ve silme işlemlerini `App.jsx`'ten gelen props'lar ile tetikler.

---

## Kurulum ve Çalıştırma

Projeyi yerel makinenizde ayağa kaldırmak için:

1.  Depoyu klonlayın.
2.  Proje klasörüne girin.
3.  Bağımlılıkları yükleyin: `npm install`
4.  Geliştirme sunucusunu başlatın: `npm run dev`

---

## Öğrenim Çıktıları

Bu projeyi geliştirirken aşağıdaki temel React konularında pratik yapılmıştır:

- Bileşenler arası **props** ile veri ve fonksiyon aktarımı.
- Dizileri (`Array`) yönetmek için React'te yaygın kullanılan immutable (değiştirilemez) güncellemeler (Örn: `prevTodos.map` ve `prevTodos.filter` kullanımı).
- `useCallback` ile performans odaklı fonksiyon tanımlama.
- Form yönetiminde `useState` kullanımı.

---

## İletişim

**Can BOZ** - [LinkedIn](https://www.linkedin.com/in/emrecanboz)
