self.addEventListener('push', function(event) {
    let data = { title: 'ХАБ', body: 'Новое сообщение' };
    if (event.data) {
        data = event.data.json();
    }
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: 'icon512.png'
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/hab/')
    );
});