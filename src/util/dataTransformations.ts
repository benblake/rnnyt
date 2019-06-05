import moment from "moment";
import { NewsItemProps } from "../components/index";

interface Multimedia {
  url: string;
  format: string;
}

interface NewsInput {
  abstract: string;
  byline: string;
  geo_facet: string[];
  multimedia: Multimedia[];
  published_date: string;
  title: string;
  url: string;
}

const getMultimediaUrlByFormat = (multimedia: Multimedia[], format: string) => {
  if (!multimedia) {
    return "";
  }
  const matchingFormat = multimedia.find(media => media.format === format);
  if (!matchingFormat) {
    return "";
  }
  return matchingFormat.url;
};

export const reshapeNewsData = (news: NewsInput[]): NewsItemProps[] =>
  news.map(
    ({
      abstract,
      byline,
      geo_facet,
      multimedia,
      published_date,
      title,
      url,
    }) => ({
      description: abstract || "",
      author: byline ? byline.replace("By ", "") : "",
      location: geo_facet.length > 0 ? geo_facet[0] : "",
      imageUrl: getMultimediaUrlByFormat(multimedia, "thumbLarge"),
      date: moment(published_date).format("MMM Do YYYY"),
      title,
      url,
    }),
  );

export const filterNewsBySearchTerm = (
  newsItems: NewsItemProps[],
  searchTerm: string,
) => {
  if (searchTerm.length === 0) {
    return [];
  }

  return newsItems.filter(
    ({ description, author, title }) =>
      (description && description.toLowerCase().indexOf(searchTerm) > -1) ||
      (author && author.toLowerCase().indexOf(searchTerm) > -1) ||
      (title && title.toLowerCase().indexOf(searchTerm) > -1),
  );
};
