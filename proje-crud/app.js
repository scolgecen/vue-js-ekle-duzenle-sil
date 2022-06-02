const app = new Vue({
  el: "#app",
  name: "Uzaktan Kurs",
  data: {
    aktifKullanici: {},
    kullanicilar: [
      {
        id: 25,
        isim: "Osman",
        rol: "Admin",
      },
      {
        id: 32,
        isim: "Ali",
        rol: "User",
      },
      {
        id: 54,
        isim: "Veli",
        rol: "User",
      },
    ],
  },
  methods: {
    yeniKullaniciEkle() {
      this.aktifKullanici = { rol: "" };
      $("#kullaniciEkleModal").modal("show");
    },
    kullaniciKaydet() {
      if (
        this.aktifKullanici.isim !== undefined &&
        this.aktifKullanici.rol !== ""
      ) {
        if (this.aktifKullanici.id > 0) {
          let kullanici = this.kullanicilar.find(
            (x) => x.id === this.aktifKullanici.id
          );
          kullanici = this.aktifKullanici;
        } else {
          this.kullanicilar.push({
            id: this.kullanicilar.length + 1,
            isim: this.aktifKullanici.isim,
            rol: this.aktifKullanici.rol,
          });
        }

        this.aktifKullanici = {};
        $("#kullaniciEkleModal").modal("hide");
      }
    },
    kullaniciSil(index) {
      this.kullanicilar.splice(index, 1);
    },
    kullaniciSil2(id) {
      const kullanici = this.kullanicilar.find((x) => x.id === id);
      if (kullanici !== null) {
        this.kullanicilar = this.kullanicilar.filter(
          (x) => x.id !== kullanici.id
        );
      }
    },
    kullaniciDuzenle(index) {
      this.aktifKullanici = this.kullanicilar[index];
      $("#kullaniciEkleModal").modal("show");
    },
  },
});
