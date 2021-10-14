# TestProject

Просмотр информации о котировках

Демо: https://snack.expo.dev/@n.zaycev/github.com-nzaycev-testproject

Зависимости:
- @react-navigation/native
- @fortawesome/react-native

Описание:
- Корень приложения - TabNavigator
- Первая вкладка - "О приложении". Содержит кнопку перехода на вторую вкладку
- Вторая вкладка - "Котировки". Отображает котировки, обновляет данные раз в 5 секунд. При первой загрузке в шапке приложения отображается ActivityIndicator. При ошибке в шабке появляется предупреждение и скрывается при следующем успешном выполении запроса. Так же ошибка дублируется в консоль.

<p align="center">
<img src="https://user-images.githubusercontent.com/50690721/137244362-65fc8f3e-2095-4f1e-b067-ca9f01e04b95.png" width="200" margin="auto">

</p>
<p align="center">
  Первая вкладка
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/50690721/137244406-67701be2-8fcd-4498-813c-21469bf0c97e.png" width="200" margin="auto">
</p>
<p align="center">
  Вторая вкладка
</p>
