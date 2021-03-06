// @flow
// Temporary values so I don't have to make an API call yet
import React from 'react';

// TODO the return type makes a few flow errors so it's 'any' atm
// this should be React.component or something but it hasn't worked yet
export const printValues = (values: string[]): any =>
  values.map<any>((str: string, key: any) => <p key={key}>{str}</p>);

export const TemporaryHomePageValues = {
  TitleText: 'Welcommen',
  BoxText: [
    {
      text: 'Upload',
      link: 'upload',
    },
    {
      text: 'Conlang',
      link: 'conlang',
    },
    {
      text: 'A mess',
      link: 'messy',
    },
  ],
};

export const TemporaryUploadPageValues = {
  FilesTitleText: 'Files: ',
  DropboxText: 'Click here or drag-drop files here',
  TitleText: 'I want this palce to be somewhere I can see a file structure.',
  DiffText: 'This place should be a folder structure visualization instead',
  TemporaryText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu consequat quam. Nulla euismod sagittis nulla, ac volutpat ligula. Nullam purus nunc, rhoncus id vulputate ut, scelerisque quis arcu. Vivamus non sem diam. Duis placerat molestie mi. Nam id libero erat. Duis vitae ultricies libero. Vestibulum non pulvinar tortor, sit amet pulvinar enim. Quisque congue, lorem vitae porttitor ullamcorper, felis ipsum blandit neque, vel ultricies dolor ligula eu nisl. Integer vel laoreet nisl. Donec dictum iaculis est, at maximus tortor. Curabitur facilisis, metus id dapibus porta, augue tellus iaculis massa, at semper arcu velit eu risus. Nullam lobortis tristique mi. Maecenas malesuada luctus egestas. Vestibulum ultricies diam mattis purus suscipit varius. Ut ut elit iaculis, gravida dui et, feugiat quam. Fusce quis velit nisl. Cras nec tincidunt lorem, vel accumsan libero. Nullam eu urna lectus. Proin suscipit eu mauris ut gravida. Aenean accumsan tristique arcu, quis dignissim ante auctor a. Nunc interdum est nisl. Maecenas a pulvinar ex. In non urna ut massa varius bibendum at in risus. Quisque vulputate egestas metus id facilisis. Donec vestibulum commodo velit sit amet ullamcorper. Donec eget erat mi. Ut id justo ac erat tincidunt tempus rutrum ut justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere id eros vulputate dictum. Cras turpis leo, rutrum sit amet urna a, convallis sagittis est. Nunc ut bibendum nunc, ac semper justo. Vestibulum in tempus mi. Fusce non nulla semper, bibendum diam et, pulvinar eros. Quisque et purus sollicitudin, sodales nisl non, efficitur neque. Aliquam finibus dolor magna, a maximus tellus eleifend eget. Etiam viverra quis mi cursus tincidunt. Cras ut justo dui. Curabitur finibus neque nisl, vel aliquam lectus efficitur quis. Praesent rutrum nulla vel convallis consequat. Vivamus tincidunt, lacus id viverra elementum, mi lorem placerat urna, ultrices euismod risus magna interdum neque. Proin fermentum efficitur velit nec efficitur. Nunc sed sapien quis massa consequat imperdiet. In laoreet at dui a blandit. Quisque quis urna arcu. Cras ut massa auctor, feugiat enim id, mattis orci. Ut consequat erat nec cursus vulputate. Etiam at tortor sit amet tellus eleifend condimentum. Etiam faucibus, urna at vestibulum lacinia, felis mauris ultricies ex, eu consequat erat orci eu tortor. Fusce tempor purus odio, et consequat felis consequat eget. Donec maximus eros et metus ultricies blandit. Nulla sit amet neque eu enim ullamcorper rutrum vitae eget neque.',
};

export const TemporaryFooterValues = {
  MiddleBox: [
    'How does this look in this box right here',
    "Knee's weak mom's spaghetti, there's spaghetti",
    'Okay, final one final one',
  ],
  RightBox: [
    'I guess this should look alright maybe? idk how long horizontally these should be',
  ],
};

export const TemporaryConlangPageValues = {
  title: 'Welcome to my Conlang Documentation',
  section1: 'Alphabet',
  section2: 'Example Poems',
  p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu consequat quam. Nulla euismod sagittis nulla, ac volutpat ligula. Nullam purus nunc, rhoncus id vulputate ut, scelerisque quis arcu. Vivamus non sem diam. Duis placerat molestie mi. Nam id libero erat. Duis vitae ultricies libero. Vestibulum non pulvinar tortor, sit amet pulvinar enim. Quisque congue, lorem vitae porttitor ullamcorper, felis ipsum blandit neque, vel ultricies dolor ligula eu nisl. Integer vel laoreet nisl. Donec dictum iaculis est, at maximus tortor. Curabitur facilisis, metus id dapibus porta, augue tellus iaculis massa, at semper arcu velit eu risus. Nullam lobortis tristique mi. Maecenas malesuada luctus egestas. Vestibulum ultricies diam mattis purus suscipit varius. Ut ut elit iaculis, gravida dui et, feugiat quam. Fusce quis velit nisl. Cras nec tincidunt lorem, vel accumsan libero. Nullam eu urna lectus. Proin suscipit eu mauris ut gravida. Aenean accumsan tristique arcu, quis dignissim ante auctor a. Nunc interdum est nisl. Maecenas a pulvinar ex. In non urna ut massa varius bibendum at in risus. Quisque vulputate egestas metus id facilisis. Donec vestibulum commodo velit sit amet ullamcorper. Donec eget erat mi. Ut id justo ac erat tincidunt tempus rutrum ut justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed posuere id eros vulputate dictum. Cras turpis leo, rutrum sit amet urna a, convallis sagittis est. Nunc ut bibendum nunc, ac semper justo. Vestibulum in tempus mi. Fusce non nulla semper, bibendum diam et, pulvinar eros. Quisque et purus sollicitudin, sodales nisl non, efficitur neque. Aliquam finibus dolor magna, a maximus tellus eleifend eget. Etiam viverra quis mi cursus tincidunt. Cras ut justo dui. Curabitur finibus neque nisl, vel aliquam lectus efficitur quis. Praesent rutrum nulla vel convallis consequat. Vivamus tincidunt, lacus id viverra elementum, mi lorem placerat urna, ultrices euismod risus magna interdum neque. Proin fermentum efficitur velit nec efficitur. Nunc sed sapien quis massa consequat imperdiet. In laoreet at dui a blandit. Quisque quis urna arcu. Cras ut massa auctor, feugiat enim id, mattis orci. Ut consequat erat nec cursus vulputate. Etiam at tortor sit amet tellus eleifend condimentum. Etiam faucibus, urna at vestibulum lacinia, felis mauris ultricies ex, eu consequat erat orci eu tortor. Fusce tempor purus odio, et consequat felis consequat eget. Donec maximus eros et metus ultricies blandit. Nulla sit amet neque eu enim ullamcorper rutrum vitae eget neque.",

}

export const TemporaryConlangPagePoemCarouselValues = {
  shakespeare: [
    'From fairest creatures we desire increase,',
    'That thereby beauty’s rose might never die,',
    'But as the riper should by time decrease,',
    'His tender heir mught bear his memeory:',
    'But thou, contracted to thine own bright eyes,',
    'Feed’st thy light’st flame with self-substantial fuel,',
    'Making a famine where abundance lies,',
    'Thyself thy foe, to thy sweet self too cruel.',
    'Thou that art now the world’s fresh ornament',
    'And only herald to the gaudy spring,',
    'Within thine own bud buriest thy content',
    'And, tender churl, makest waste in niggarding.',
    'Pity the world, or else this glutton be,',
    'To eat the world’s due, by the grave and thee.',
  ],

  // credit to this is http://www.reflectionsonlandusetranslationsmorebycew.com/ENGLISH_LANG_POETRY/TRANSLATIONS/InniyAriqtubyalKhansaa.html
  // I can't read arabic yet so I don't even know the title in English
  alKhansaa: [
    'ٳني أرقت فبت ٱلليل ساهرة* ',
    'كآنمآ كحلت عيني بعار',
    '',
    'أرعى آلنجوم و لم كلفت رعيتها',
    'و تاره ٲتغشى فضل آطمار',
    '  ',
    'و قد سمعت و لم أبجح به خبرا',
    'محدثا جاء ينمى رجع آخبار',
    '',
    'يقول صخر مقيم ثم في جدث',
    'لدى آلضريح صريع بين آحجار',
    '',
    'فاذهب فلا يبعدنك آلله من رجل',
    'ترك ضيم و طلاب باوتار',
    '',
    'قد كنت تحمل قلبا غير مهتضم',
    'مركبا في نصاب غير خوار',
    '',
    'مثل آلسنان تضىء الليل صورته',
    'مرّ ألمريرة حر و إبن احرار',
    '',
    'فسوف آبكيك ما ناحت مطوقه',
    'و ما أضاءت نجوم آلليل للساري',
    '',
    'و لن أصالح قوما كنت حرهم',
    'حتى تعود بياضا جؤنة آلقار  ',
  ],
};
