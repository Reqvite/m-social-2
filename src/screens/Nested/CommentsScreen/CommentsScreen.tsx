import { RouteProp } from "@react-navigation/native";

import { AppRootParamList } from "@/app/Routes/types";
import { Comments } from "@/components/Comments";
import { useGetPostComments } from "@/redux/posts/posts";
import { Container } from "@/shared/ui";
type Props = {
  route: RouteProp<AppRootParamList, "Comments">;
};

const CommentsScreen = ({ route }: Props) => {
  const { photoUrl, id } = route.params;
  const { data, isLoading, isFetching, refetch } = useGetPostComments(id);

  return (
    <Container>
      <Comments
        list={data!}
        refetch={refetch}
        isFetching={isFetching}
        photoUrl={photoUrl}
        id={id}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default CommentsScreen;
