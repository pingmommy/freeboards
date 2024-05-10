declare const window: typeof globalThis & { kakao: any };
export const getMap = () => {
  const script = document.createElement("script");
  script.src =
    "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=53c5999eab1f06d666f0a3483f075294";
  document.head.appendChild(script);

  script.onload = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      const marker = new window.kakao.maps.Marker({
        position: map.getCenter(),
      });

      marker.setMap(map);

      window.kakao.maps.event.addListener(map, "click", (e) => {
        const latlng = e.latLng;

        marker.setPosition(latlng);
      });
    });
  };
};
